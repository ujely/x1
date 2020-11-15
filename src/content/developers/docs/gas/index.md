---
title: Gas and fees
description:
lang: en
sidebar: true
incomplete: true
---

Gas is essential to the Ethereum network. It is the fuel that allows it to operate, in the same way that a car needs gasoline to run.

## Prerequisites {#prerequisites}

To better understand this page, we recommend you first read up on [transactions](/en/developers/docs/transactions/) and the [EVM](/en/developers/docs/evm/).

## What is Gas? {#what-is-gas}

Gas refers to the unit that measures the amount of computational effort required to execute specific operations on the Ethereum network.

Since each Ethereum transaction requires computational resources to execute, each transaction requires a fee. Gas refers to the fee required to successfully conduct a transaction on Ethereum.

In essence, gas fees are paid in Ethereum's native currency, Ether (ETH). Gas prices are denoted in Gwei, which itself is a denomination of ETH - each Gwei is equal to 0.000000001 ETH. For example, instead of saying that your gas costs 0.000000001 Ether, you can say your gas costs 1 Gwei.

This video offers a concise overview of gas and why it exists:

<iframe width="100%" height="315" src="https://www.youtube.com/embed/AJvzNICwcwc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why do gas fees exist? {#why-do-gas-fees-exist}

In short, gas fees help keep the Ethereum network secure. By requiring a fee for every computation executed on the network, we prevent actors from spamming the network. In order to prevent accidental or hostile infinite loops or other computational wastage in code, each transaction is required to set a limit to how many computational steps of code execution it can use. The fundamental unit of computation is "gas".

## Further Reading {#further-reading}

- [Understanding Ethereum Gas, Blocks and the Fee Market](https://medium.com/@eric.conner/understanding-ethereum-gas-blocks-and-the-fee-market-d5e268bf0a0e)

## Related Tools {#related-tools}

- [ETH Gas Station](https://ethgasstation.info/) _Consumer oriented metrics for the Ethereum gas market_
- [Bloxy Gas Analytics](https://stat.bloxy.info/superset/dashboard/gas/?standalone=true) _Ethereum network gas stats_

## Related Topics {#related-topics}

- [Mining](/en/developers/docs/mining/)
