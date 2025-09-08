// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./stSTT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vault is Ownable {
    stSTT public stToken;
    uint256 public exchangeRate;
    address public oracle;

    uint256 public constant RATE_PRECISION = 1e18;

    event OracleUpdated(address indexed oldOracle, address indexed newOracle);
    event ExchangeRateUpdated(uint256 oldRate, uint256 newRate);

    constructor(address _stSTT, address _oracle) Ownable(msg.sender) {
        stToken = stSTT(_stSTT);
        exchangeRate = RATE_PRECISION;
        oracle = _oracle;
    }

    modifier onlyOracle {
        require(msg.sender == oracle, "Only Oracle can call this function");
        _;
    }

    function deposit() external payable {
        require(msg.value > 0, "No STT sent");

        uint256 amountToMint = (msg.value * RATE_PRECISION) / exchangeRate;

        stToken.mint(msg.sender, amountToMint);
    }

    function withdraw(uint256 _amount) external payable {
        require(_amount > 0, "stSTT amount has to be > 0");

        stToken.burn(msg.sender, _amount);

        uint256 sttToReturn = _amount * exchangeRate / RATE_PRECISION;

        require(address(this).balance >= sttToReturn, "Not enough STT in vault");

        (bool sent, ) = msg.sender.call{value: sttToReturn}("");
        require(sent, "STT transfer failed");
    }

    // The exchange rate will get updated periodically by the oracle
    function setExchangeRate(uint256 _newExchangeRate) external onlyOracle {
        emit ExchangeRateUpdated(exchangeRate, _newExchangeRate);
        exchangeRate = _newExchangeRate;
    }

    function setOracle(address _newOracle) external onlyOwner {
        emit OracleUpdated(oracle, _newOracle);
        oracle = _newOracle;
    }

    // Allow contract to receive ETH
    receive() external payable {}

    fallback() external payable {}
}
