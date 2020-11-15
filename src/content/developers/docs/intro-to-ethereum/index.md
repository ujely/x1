---
title: Intro to Ethereum
description: A dapp developer's introduction to the core concepts of Ethereum.
lang: en
sidebar: true
---

## What is a blockchain? {#what-is-a-blockchain}

A blockchain is best described as a database that is updated and shared across many computers in a network.

"Block" refers to the fact that data and state is stored in sequential batches or "blocks". If you send ETH to someone else, the transaction data needs to be added to a block for it to be successful.

"Chain" refers to the fact that each block cryptographically references its parent. A block's data cannot be changed without changing all subsequent blocks, which would require the consensus of the entire network.

Each new block and the chain as a whole must be agreed upon by every node in the network. This is so everyone has the same data. For this to work, blockchains need a consensus mechanism.

Ethereum currently uses a proof-of-work consensus mechanism. This means that anyone who wants to add new blocks to the chain must solve a difficult puzzle that you need a lot of computing power to work on. Solving the puzzle "proves" that you have spent the computational resources. Doing this is known as [mining](/en/developers/docs/mining/). Mining can be trial and error but adding a block successfully is rewarded in Eth. On the other hand, submitting fraudulent blocks is not an attractive option considering the resources you've spent on producing the block.

New blocks are broadcast to the nodes in the network, checked and verified, updating the state for everyone.

So to summarise, when you send Eth to someone, the transaction must be mined and included in a new block. The updated state is then shared with the entire network. More on the details below.

## What is Ethereum? {#what-is-ethereum}

In the Ethereum universe, there is a single, canonical computer (called the Ethereum Virtual Machine, or EVM) whose state everyone on the Ethereum network agrees on. Everyone who participates in the Ethereum network (every Ethereum node) keeps a copy of the state of this computer. Additionally, any participant can broadcast a request for this computer to perform arbitrary computation. Whenever such a request is broadcast, other participants on the network verify, validate, and carry out (“execute”) the computation. This causes a state change in the EVM, which is committed and propagated throughout the entire network.

Requests for computation are called transaction requests; the record of all transactions as well as the EVM’s present state is stored in the blockchain, which in turn is stored and agreed upon by all nodes.

Cryptographic mechanisms ensure that once transactions are verified as valid and added to the blockchain, they can’t be tampered with later; the same mechanisms also ensure that all transactions are signed and executed with appropriate “permissions” (no one should be able to send digital assets from Alice’s account, except for Alice herself).

## What is Ether? {#what-is-ether}

The purpose of Ether, the cryptocurrency, is to allow for the existence of a market for computation. Such a market provides an economic incentive for participants to verify/execute transaction requests and to provide computational resources to the network.

Any participant who broadcasts a transaction request must also offer some amount of ether to the network, as a bounty to be awarded to whoever eventually does the work of verifying the transaction, executing it, committing it to the blockchain, and broadcasting it to the network.

The amount of ether paid is a function of the length of the computation. This also prevents malicious participants from intentionally clogging the network by requesting execution of infinite loops or resource-intense scripts, as these actors will be continually charged.

## What are dapps? {#what-are-dapps}

In practice, participants don’t write new code every time they want to request a computation on the EVM. Rather, application developers upload programs (reusable snippets of code) into EVM storage, and then users make requests for the execution of these code snippets with varying parameters. We call the programs uploaded to and executed by the network smart contracts.

At a very basic level, you can think of a smart contract like a sort of vending machine: a script which, when called with certain parameters, performs some actions or computation if certain conditions are satisfied. For example, a simple vendor smart contract could create and assign ownership of a digital asset if the caller sends Ether to a specific recipient.

Any developer can create a smart contract and make it public to the network, using the blockchain as its data layer, for a fee paid to the network. Any user can then call the smart contract to execute its code, again for a fee paid to the network.

Thus, with smart contracts, developers can build and deploy arbitrarily complex user-facing apps and services: marketplaces, financial instruments, games, etc.

## Terminology {#terminology}

### Blockchain {#blockchain}

The sequence of all blocks that have been committed to the Ethereum network in the history of the network. So-named because each block contains a reference to the previous block, which helps us maintain an ordering over all blocks (and thus over the precise history).

### ETH {#eth}

The native cryptocurrency of Ethereum. Users pay ether to other users to have their code execution requests fulfilled.

### EVM {#evm}

The Ethereum Virtual Machine is the global virtual computer who’s state every participant on the Ethereum network stores and agrees on. Any participant can request the execution of arbitrary code on the EVM; code execution changes the state of the EVM.

[More on the EVM](/developers/docs/evm/)

### Nodes {#nodes}

The real-life machines which are storing the EVM state. Nodes communicate with each other to propagate information about the EVM state and new state changes. Any user can also request execution of code by broadcasting code execution request from a node. The Ethereum network itself is the aggregate of all Ethereum nodes and their communications.

[More on nodes](/developers/docs/nodes-and-clients/)

### Accounts {#accounts}

Where ether is stored. Users can initialize accounts, deposit ether into the accounts, and transfer ether from their accounts to other users. Accounts and account balances are stored in a big table in the EVM; they are a part of the overall EVM state.

[More on accounts](/developers/docs/accounts/)

### Transactions {#transactions}

A “transaction request” is the formal term for a request for code execution on the EVM, and a “transaction” is a fulfilled transaction request and the associated change in the EVM state. Any user can broadcast a transaction request to the network from a node. For the transaction request to actually affect the agreed-upon EVM state, it must be validated, executed, and “committed to the network” by some other node. Execution of any code causes a state change in the EVM; upon commitment, this state change is broadcast to all nodes in the network. Some examples of transactions:

- Send X ether from my account to Alice’s account.
- Publish some smart contract code into EVM memory.
- Execute the code of the smart contract at address X in the EVM, with arguments Y.

[More on transactions](/developers/docs/transactions/)

### Blocks {#blocks}

The volume of transactions is very high, so transactions are “committed” in batches, or blocks. Blocks generally contain dozens to hundreds of transactions.

[More on blocks](/developers/docs/blocks/)

### Smart contracts {#smart-contracts}

A reusable snippet of code (a program) which a developer publishes into EVM memory. Anyone can request that the smart contract code be executed by making a transaction request. Because developers can write arbitrary executable applications into the EVM (games, marketplaces, financial instruments, etc.) by publishing smart contracts, these are often also called [dapps, or Decentralized Apps](/developers/docs/dapps/).

[More on smart contracts](/en/developers/docs/smart-contracts/)

## Further reading {#further-reading}

- [Ethereum Whitepaper](/whitepaper/)

## Related tutorials {#related-tutorials}

- [A developer's guide to Ethereum, part 1 ](/developers/tutorials/a-developers-guide-to-ethereum-part-one/) _– A very beginner-friendly exploration of Ethereum using Python and web3.py_
