// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PT is ERC20, Ownable {
    address public splitter;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) Ownable(msg.sender) {}

    function setSplitter(address _splitter) external onlyOwner {
        require(_splitter != address(0), "Invalid splitter");
        splitter = _splitter;
    }

    modifier onlySplitter() {
        require(msg.sender == splitter, "Not splitter");
        _;
    }

    function mint(address to, uint256 amount) external onlySplitter {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlySplitter {
        _burn(from, amount);
    }
}

contract YT is ERC20, Ownable {
    address public splitter;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) Ownable(msg.sender) {}

    function setSplitter(address _splitter) external onlyOwner {
        require(_splitter != address(0), "Invalid splitter");
        splitter = _splitter;
    }

    modifier onlySplitter() {
        require(msg.sender == splitter, "Not splitter");
        _;
    }

    function mint(address to, uint256 amount) external onlySplitter {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlySplitter {
        _burn(from, amount);
    }
}
