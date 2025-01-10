// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct DefaultFields {
        string name;
        string email;
        uint32 phone_number;
    }

    struct VerifiedField {
        string text;
        string author; // name of proclaimed author
    }

    struct CustomField {
        string text;
    }

    // Identity generator -> what functions would it have?
    // create identity

    // edit identity

    // delete identity

    // share identity -> choose which details to share exactly

    // need public and private key?

    // what oracles do I need to call?
    // email verification
    // phone number verification

    // what would the permission levels look like?

    // governing body -> ability to
    // user ->
    //
}
