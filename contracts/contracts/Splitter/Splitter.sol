// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./PTYT.sol";
import "../Vault/stSTT.sol";
import "../Vault/Vault.sol";

contract Splitter is Ownable {
    stSTT public stToken;
    PT public ptToken;
    YT public ytToken;
    Vault public vault;

    uint256 public maturity;
    uint256 public startRate;

    uint256 public constant RATE_PRECISION = 1e18;

    event VaultUpdated(address indexed oldVault, address indexed newVault);

    constructor(address _stSTT, address payable _vault, uint256 _maturity) payable Ownable(msg.sender) {
        require(_maturity > block.timestamp, "Maturity must be in the future");

        stToken = stSTT(_stSTT);
        vault = Vault(_vault);
        maturity = _maturity;
        startRate = RATE_PRECISION;

        string memory ptSymbol = string(abi.encodePacked("PT-stSTT-", maturity));
        string memory ytSymbol = string(abi.encodePacked("YT-stSTT", maturity));

        // Deploy PT + YT contracts
        ptToken = new PT("Principle Token", ptSymbol);
        ytToken = new YT("Yield Token", ytSymbol);

        ptToken.setSplitter(address(this));
        ytToken.setSplitter(address(this));
    }

    modifier validAmount (uint256 _amount) {
        require (_amount > 0, "Amount needs to be larger than 0");
        _;
    }

    function split(uint256 _amount) external validAmount(_amount) {

        // Transfer stSTT from user -> splitter to mint PT and YT
        require(stToken.transferFrom(msg.sender, address(this), _amount), "STT transfer failed");

        ptToken.mint(msg.sender, _amount);
        ytToken.mint(msg.sender, _amount);
    }

    // Before maturity: Recombine to stSTT
    function recombine(uint256 _amount) external validAmount(_amount) {

        require(ptToken.balanceOf(msg.sender) >= _amount, "Not enough PT tokens");
        require(ytToken.balanceOf(msg.sender) >= _amount, "Not enough YT tokens");

        // Burn PT + YT to recombine into stSTT
        ptToken.burn(msg.sender, _amount);
        ytToken.burn(msg.sender, _amount);

        stToken.transfer(msg.sender, _amount);
    }

    // At maturity: Claim STT using PT
    function redeemSTTwithPT(uint256 _amount) external validAmount(_amount) {
        
        require(block.timestamp >= maturity, "Not yet matured");
        require(ptToken.balanceOf(msg.sender) >= _amount, "Not enough PT tokens");

        ptToken.burn(msg.sender, _amount);

        // Since stSTT is a interest-bearing asset (internal value grows instead of rebasing), we have to give back STT instead of stSTT
        (bool sent, ) = msg.sender.call{value: _amount}("");
        require(sent, "STT transfer failed");

    }

    // Claim yield
    function claimYield(uint256 _amount) external validAmount(_amount) {

        uint256 totalYield = returnedYield(_amount);

        ytToken.burn(msg.sender, _amount);

        (bool sent, ) = msg.sender.call{value: totalYield}("");
        require(sent, "STT transfer failed");
    }

    function setVault(address payable _newVault) external onlyOwner {
        require(_newVault != address(0), "Invalid vault");
        address oldVault = address(vault);
        vault = Vault(_newVault);
        emit VaultUpdated(oldVault, _newVault);
    }

    /*----------------------
        Helper functions 
    -----------------------*/

    // Get current exchange rate
    function getExchangeRate() public view returns (uint256) {
        return vault.exchangeRate();
    }

    function returnedYield(uint256 _amount) view public validAmount(_amount) returns(uint256) {

        uint256 currentRate = getExchangeRate();

        uint256 yieldPerYT = currentRate - startRate;

        uint256 totalYield = (_amount * yieldPerYT) / RATE_PRECISION;

        return totalYield;
    }

    // Allow contract to receive ETH
    receive() external payable {}

    fallback() external payable {}
}
