---
title: Medalla data challenge
description: Instructions, deadlines, and prize information for the Eth2 Medalla testnet data challenge
lang: en
sidebar: true
sidebarDepth: 2
---

# The Eth2 Medalla Data Challenge {#the-eth2-medalla-data-challenge}

_Up until 20 October 2020, the Ethereum Foundation is sponsoring a Medalla data analysis and data visualization blog post challenge. Here are all the details you need._

<Divider />

Calling data scientists, data engineers, data visualizers, developers, and anyone interested in digging into Ethereum data!

The Ethereum 2.0 [Medalla testnet](https://github.com/goerli/medalla) is live. Validators are validating. Attesters are attesting. Blocks are propagating. Which means, data, lots and lots of data. And **the Ethereum community needs your help to make sense of it all.**

- _What data visualizations can show the health of the Medalla test network?_
- _Aggregation performance. Latencies. Validator effectiveness. Gini coefficients. Block rewards. What compelling story can you tell with Medalla data?_
- _What performance and behavior patterns can you find among different classes of validators (for example hobbyists, institutional players, exchanges, and stakers)?_
- _What patterns exist in slashings?_
- _What other data can you collect and analyze on Medalla?_
- _What new tools can you build to collect and analyze data on Medalla?_

<InfoBanner emoji=":thinking_face:">
  Wait, how do I get started with Medalla? See <a href="/en/eth2/get-involved/#medalla">how to stake on the Medalla testnet</a>
</InfoBanner>

## The challenge {#the-challenge}

**Document your best Medalla data insights in the most readable blog post possible – for prizes!**

The Ethereum Foundation are running this challenge because there's a lot to learn and discover from Medalla testnet activity. Your findings will give the Ethereum community —from beginners to core researchers— important insight into Medalla, the last step en route to Phase 0, the [Beacon Chain](/en/eth2/the-beacon-chain/).

If Medalla proves stable, mainnet launch is next! And so, this is a critical moment to get involved in the Ethereum community <Twemoji svg text=":rocket:" />

### How to submit {#how-to-submit}

Anyone is free to submit, here's how:

1.  Collect and analyze Medalla data – [_See tips for getting started_](/en/eth2/get-involved/medalla-data-challenge/#started)
    - Either with existing tools
    - Or for the extra ambitious, build your own tool and tell us about it!
2.  Detail out your work in a blog post
3.  Submit!

<Button to="https://ethereumfoundation.typeform.com/to/CDT2cmqd">Submit blog post</Button>

_You may submit more than one blog post! So long as each posts focuses on a different visualisation or piece of analysis or [tooling for building public datasets](https://hackmd.io/SjHcvpp5TcShwZBz8zCV6Q?view)_

In addition to the prompt questions above, here's a [wishlist of data analysis avenues to explore](https://www.notion.so/efdn/Wishlist-Medalla-Data-Analysis-Visualization-69fe10ffe83748bc87faa0e2586ba857).

A group of Ethereum community members will evaluate your submissions and awards will go to the top blog posts <Twemoji svg text=":trophy:" />

<h2>Deadline <Twemoji svg text=":alarm_clock:" /></h2>

The deadline for submissions is **Tuesday, October 20**

<h2>Prizes <Twemoji svg text=":money_with_wings:" /></h2>

Up to **USD \$15,000** per blog post

_That is, you may win up to USD \$15,000 for each quality submission._

_Entries must be considered sufficiently insightful by the community judging team to be eligible for rewards._

## Requirements {#requirements}

- Blog post must be in English.
  - There are no length requirements.
- Blog posts must be public and original.
- Data analysis or visualization must concern [Medalla testnet](https://github.com/goerli/medalla) data.
- Tools and scripts used (and created) must be open source and referenced in the blog post.

## Judging criteria {#judging-criteria}

_Surprise us with your creativity! But here are some judging criteria considerations:_

- Overall quality and clarity of data analysis or data visualization.
  - Quality of insights into Medalla, clients, and Eth2 in general.
- Insights that lead to substantive changes in client implementations or specifications.
- Analyses or visualizations that help a non-technical audience gain insight into the network.
- Quality of contribution to the Eth2 tooling ecosystem (if applicable).

## How to get started {#started}

- Join the testnet via the [Medalla testnet launchpad](https://medalla.launchpad.ethereum.org/) and run / sync a client (or multiple clients). The launchpad will give you more details.
  - [Teku](https://github.com/pegasyseng/teku) by ConsenSys ([discord](https://discord.gg/7hPv2T6))
  - [Prysm](https://github.com/prysmaticlabs/prysm/) by Prysmatic Labs ([discord](https://discord.gg/KSA7rPr))
  - [Nimbus](https://github.com/status-im/nim-beacon-chain) by Status ([discord](https://discord.gg/XRxWahP))
  - [Lodestar](https://github.com/ChainSafe/lodestar) by ChainSafe Systems ([discord](https://discord.gg/aMxzVcr))
  - [Lighthouse](https://github.com/sigp/lighthouse/) by Sigma Prime ([discord](https://discord.gg/cyAszAh))
- Experiment with a client API for single node statistics.
- Experiment with [rumor](https://github.com/protolambda/rumor) to get data from group of clients.
  - rumor is an interactive shell to run the Eth2 network stack, attach to testnets, debug clients, and extract data for tooling.
- Dig around a block explorer:
  - [`Beaconcha.in`](https://beaconcha.in/)
  - [`BeaconScan`](https://beaconscan.com/)
  - [`BlockAction`](https://medalla.blockaction.io)
- Crunch some numbers and spin up some graphs
- Publish your analysis or visualization!

## Helpful resources {#helpful-resources}

- [A non-exhaustive list of Eth2 tooling](https://notes.ethereum.org/@protolambda/eth2_tooling#Network-tooling) _– protolambda_
- [Eth2 Launch Pad for Medalla testnet](https://medalla.launchpad.ethereum.org/)
- [Medalla ETH 2.0 Testnet](https://github.com/goerli/medalla)
- [The State of Eth2](https://blog.ethereum.org/2020/06/02/the-state-of-eth2-june-2020/) _– Danny Ryan_
- [Eth2 quick update no. 14 – testnet edition](https://blog.ethereum.org/2020/08/03/eth2-quick-update-no-14/) _– Danny Ryan_
- [Ethereum 2.0 Overview](https://ethereum.org/en/eth2/)
- [Eth R&D](https://discord.gg/VmG7Uxc) _– Discord_
- [ethstaker](https://invite.gg/ethstaker) _– Discord_

## Support {#support}

For any general support questions about your submission, please email eth2+medalla@ethereum.org.

For technical questions about Medalla, ideas or direction for your data analysis, tooling, clients, and all things Eth2, we invite you to head over to the community-driven [ethstaker Discord](https://invite.gg/ethstaker). Ethstaker is a community-driven Eth2 resource for the fledgling validator community and they've been kind enough to open up a dedicated support channel `#medalla-data-challenge` for The Eth2 Medalla Data Challenge!
