// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./stSTT.sol";

contract Vault {
    stSTT public stToken;
    uint256 public exchangeRate;
    address public oracle;

    uint256 public constant RATE_PRECISION = 1e18;

    constructor(address _stSTT, address _oracle) {
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

        uint256 amountToMint = (msg.value * 1e18) / exchangeRate;

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
    function setExchangeRate(uint256 _rate) external onlyOracle {
        
        exchangeRate = _rate;

    }
}
