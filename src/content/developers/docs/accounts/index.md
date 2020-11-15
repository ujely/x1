---
title: Ethereum accounts
description: An explanation of Ethereum accounts – their data structures and their relationship with key pair cryptography.
lang: en
sidebar: true
---

An Ethereum account is an entity with an Ether (ETH) balance that can send transactions on Ethereum. Accounts can be user-controlled or deployed as smart contracts.

## Prerequisites {#prerequisites}

Accounts are a very beginner-friendly topic. But to help you better understand this page, we recommend you first read through our [introduction to Ethereum](/en/developers/docs/intro-to-ethereum/).

## Types of account {#types-of-account}

Ethereum has two types of account:

- Externally-owned – controlled by anyone with the private keys
- Contract – a smart contract deployed to the network, controlled by code. Learn about [smart contracts](/en/developers/docs/smart-contracts/)

Both account types have the ability to:

- Receive, hold and send ETH and tokens
- Interact with deployed smart contracts

### Key differences {#key-differences}

**Externally-owned**

- Creating an account costs nothing
- Can initiate transactions
- Transactions between externally-owned accounts can only be ETH transfers

**Contract**

- Creating an account has a cost because you're using network storage
- Can only send transactions in response to receiving a transaction
- Transactions from an external account to a contract account can trigger code which can execute many different actions, such as transfering tokens or even creating a new contract

## An account examined {#an-account-examined}

Ethereum accounts have four fields:

- `nonce` – a counter that indicates the number of transactions sent from the account. This ensures transactions are only processed once. If a contract account, this number represents the number of contracts created by the account
- `balance` – the number of Wei owned by this address. Wei is a denomination of ETH and there are 1e+18 Wei per ETH.
- `codeHash` – All such code fragments are contained in the state database under their corresponding hashes for later retrieval. For contract accounts, this is the code that gets hashed and stored as the codeHash. For externally owned accounts, the codeHash field is the hash of the empty string.
<!--this hash refers to the code of this account on the Ethereum virtual machine (EVM). This EVM code gets executed if the account gets a message call. It cannot be changed unlike the other account fields.  -->
- `storageRoot` – A 256-bit hash of the root node of a Merkle Patricia tree that encodes the storage contents of the account (a mapping between 256-bit integer values), encoded into the trie as a mapping from the Keccak 256-bit hash of the 256-bit integer keys to the RLP-encoded 256-bit integer values. This tree encodes the hash of the storage contents of this account, and is empty by default.

## Externally-owned accounts and key pairs {#externally-owned-accounts-and-key-pairs}

An account is made up of a cryptographic pair of keys: public and private. They help prove that a transaction was actually signed by the sender and prevent forgeries. Your private key is what you use to sign transactions, so it grants you custody over the funds associated with your account. You never really hold cryptocurrency, you hold private keys – the funds are always on Ethereum's ledger.

This prevent malicious actors from broadcasting fake transactions because you can always verify the sender of a transaction.

If Alice wants to send ether from her own account to Bob’s account, Alice need to create a transaction request and send it out to the network for verification. Ethereum’s usage of public-key cryptography ensures that Alice can prove that she originally initiated the transaction request. Without cryptographic mechanisms, a malicious adversary Eve could simply publicly broadcast a request that looks something like “send 5 ETH from Alice’s account to Eve’s account,” and no one would be able to verify that it didn’t come from Alice.

## Account creation {#account-creation}

When you want to create an account most libraries will generate you a random private key.

A private key is made up of 64 hex characters and can be encrypted with a password.

Example:

`fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036415f`

The public key is generated from the private key using Elliptic Curve Digital Signature Algorithm. You get a public address for your account by taking the last 20 bytes of the public key and adding `0x` to the beginning.

Here's an example of creating an account in the console using GETH's `personal_newAccount`

```go
> personal.newAccount()
Passphrase:
Repeat passphrase:
"0x5e97870f263700f46aa00d967821199b9bc5a120"

> personal.newAccount("h4ck3r")
"0x3d80b31a78c30fc628f20b2c89d7ddbf6e53cedc"
```

[GETH documentation](https://geth.ethereum.org/docs)

It is possible to derive new public keys from your private key but you cannot derive a private key from public keys. This means it's vital to keep a private key safe and, as the name suggests, **PRIVATE**.

You need a private key to sign messages and transactions which outputs a signature. Others can then take the signature to derive your public key, proving the author of the message. In your application, you can use a javascript library to send transactions to the network.

<!-- **WEB3JS example**

```jsx
web3.eth.accounts.recoverTransaction('0xf86180808401ef364594f0109fc8df283027b6285cc889f5aa624eac1f5580801ca031573280d608f75137e33fc14655f097867d691d5c4c44ebe5ae186070ac3d5ea0524410802cdc025034daefcdfa08e7d2ee3f0b9d9ae184b2001fe0aff07603d9');
> "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55"
```

[Web3js documentation](https://web3js.readthedocs.io/)

[code for creating an account in JS?] + links to how to do it in other languages maybe?

`$ geth account new` -->

## Contract accounts {#contract-accounts}

Contract accounts also have a 42 character hexadecimal address:

Example:

`0x06012c8cf97bead5deae237070f9587f8e7a266d`

The contract address is usually given when a contract is deployed to the Ethereum Blockchain. The address comes from the creator's address and the number of transactions sent from that address (the “nonce”).

<!-- @Sam Richards is there a line of code you can use to return your contract's address – in the same way that we have personal.newAccount() above? – Don't know if what I found below is helpful?

```jsx
ethers.utils.getContractAddress( transaction ) ⇒ string< Address >
```

TODO: add a contract address example-->

<!-- ## Managing an account

Most users will want to interact with their account via a wallet. Note that an account is not a wallet. A wallet is the keypair associated with a user-owned account, which allow a user to make transactions from or manage the account

For dapp development, you'll want access to dummy accounts with test ETH so you can experiment. When you create a local chain, you'll get test accounts wth fake eth which you can then import using MetaMask and use on your dapp's frontend. -->

## A note on wallets {#a-note-on-wallets}

An account is not a wallet. A wallet is the keypair associated with a user-owned account, which allow a user to make transactions from or manage the account.

## Further reading {#further-reading}

_Know of a community resource that helped you? Edit this page and add it!_

## Related topics {#related-topics}

- [Smart contracts](/en/developers/docs/smart-contracts/)
- [Transactions](/en/developers/docs/transactions/)
