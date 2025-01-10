
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DIDRegistry {
    struct DIDDocument {
        address owner;
        string publicKey;
    }

    mapping(string => DIDDocument) private didDocuments;

    event DIDRegistered(string indexed did, address indexed owner);
    event DIDUpdated(string indexed did, address indexed owner);

    // Register a new DID
    function registerDID(string memory did, string memory publicKey) public {
        require(didDocuments[did].owner == address(0), "DID already registered");
        didDocuments[did] = DIDDocument(msg.sender, publicKey);
        emit DIDRegistered(did, msg.sender);
    }

    // Update an existing DID
    function updateDID(string memory did, string memory publicKey) public {
        require(didDocuments[did].owner == msg.sender, "Not the DID owner");
        didDocuments[did].publicKey = publicKey;
        emit DIDUpdated(did, msg.sender);
    }

    // Retrieve a DID document
    function getDID(string memory did) public view returns (address, string memory) {
        require(didDocuments[did].owner != address(0), "DID not found");
        DIDDocument memory doc = didDocuments[did];
        return (doc.owner, doc.publicKey);
    }
}