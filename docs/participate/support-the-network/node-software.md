---
title: Node Software
description: IOTA networks consist of interconnected nodes that run the same node software. We introduce the different available Types and provide guides that will help in setting those nodes up.
---

# Node Software

**IOTA networks consist of interconnected nodes that run the same node software. This software gives nodes read/write access to the Tangle, allows them to validate transactions, and allows them to store transactions in their local ledgers.**


## Hornet

HORNET is a powerful, community-driven IOTA node software written in Go. It is easy to install and runs on low-end devices like the Raspberry Pi 4. Hornet is being built and maintained by a group of community developers alongside the IOTA Foundation. Hornet is a full-fledged software providing full node capabilities including full support of the Chrysalis network update.

By running your own node you have the following benefits:

You have direct access to an IOTA network instead of having to connect to and trust someone else's node
You help the IOTA network to become more distributed and more resilient by validating messages and value transactions in the IOTA network.

The Hornet Software will be further developed to run in the upcoming decentralized IOTA 2.0 network.

The full documentation for Hornet can be found here:

- [Hornet Documentation](https://hornet.docs.iota.org/)

The source code of the software can be found here:

- [Hornet GitHub](https://github.com/iotaledger/hornet)

### Hornet Installation guides:

Standard installation following the Hornet Documentation:

- [Hornet documentation - setup a node](https://hornet.docs.iota.org/getting_started/installation_steps.html/)

### Hornet Community Tutorials:

Guides and easy one - line installations scripts created by IOTA community members:

* Nuriels playbook installation using Docker: [Nuriel's playbook](https://github.com/nuriel77/hornet-playbook)
* 
* DeMicheles one-liner using Nuriels Playbook: [Install Hornet](https://github.com/demichele/install-hornet-1.5)
* 
* Step by Step guide for Windows users by Phylo: 
* [Hornet node Installation guide Part 1](https://phyloiota.medium.com/iota-hornet-node-installation-81747de28338) 
* [Hornet node Installation guide Part 2](https://phyloiota.medium.com/iota-hornet-node-installation-2-8f2639e04d1d)
* 
* Tanglebay Swarm Hornet Node installer: [Tanglebay Swarmnode](https://tanglebay.com/swarm/)
* 
* Install Hornet Mainnet Node using `apt`: [Svenger 87 Alphanet Tutorial](https://github.com/svenger87/hornet-alphanet-tutorial)
* 
* Run Hornet on a Raspberry Pi: [Raspihive Hornet](https://docs.raspihive.org/docs/install#45-first-start-of-raspihive-and-installation-of-the-hornet-node)


## BEE

The IOTA Foundation aims to allow machines of all performance levels to contribute to the IOTA network, from microcontrollers to phones, web browsers, and servers.

Therefore, Bee is being developed as a modular collection of extendable crates, which expose foreign function interfaces (FFIs) for the next iteration of client libraries.

Bee is together with Hornet the second Node software implemented to run on the IOTA Mainnet.

Bee will also be further developed to be a reference implementation in the upcoming decentralized IOTA 2.0 Mainnet.

The full documentation for BEE can be found here:

- [BEE Documentation](https://bee.docs.iota.org/)

The source code of the software can be found here:

- [Bee Github](https://github.com/iotaledger/bee)

### BEE Instalation guides

Standard installation following the Bee Documentation:

- [Setup a BEE Node](https://bee.docs.iota.org/setup_a_node)


## Goshimmer

GoShimmer is a prototype node software exploring the implementation of IOTA 2.0. It is a research and engineering project from the IOTA Foundation seeking to evaluate Coordicide concepts by implementing them in a node software.

Due to the prototypical nature of the project, things written today may reflect how things are tomorrow. 

The software is written in Go and is currently the software used in the IOTA 2.0 DevNet where the upcoming IOTA 2.0 version without a coordinator node is tested and optimized in collaboration with a huge amount of community contributors. Goshimmer allows to test and analyze all upcoming features of IOTA and is therefore an essential part of the ongoing IOTA Research.

Goshimmer will not be developed as an upcoming Mainnet node Software.

The full documentation for Goshimmer can be found here:

- [Goshimmer Documentation](https://goshimmer.docs.iota.org/)

The source code of the software can be found here:

- [Goshimmer GitHub](https://github.com/iotaledger/Goshimmer)

### Goshimmer Installation guides

Standard installation following the Bee Documentation:

- [Goshimmer Node Setup](https://goshimmer.docs.iota.org/docs/tutorials/setup)

### Goshimmer community tutorials:

- Nuriels Goshimmer Playbook: [Nuriel77 Goshimmer](https://github.com/nuriel77/goshimmer-playbook)
- DeMichelle Shell Script: [Demichelle Goshimmer](https://github.com/demichele/install-goshimmer)


## Chronicle Permanode

Chronicle provides tools for managing and accessing permanode solutions using the IOTA actor framework backstage. With Chronicle, you can:

* Store IOTA messages in real-time, using one or more Scylla clusters
* Explore stored messages using an HTTP API
* Store the data you want by modifying incoming messages
* Filter data to store it how and where you want (work in progress)
* 

The full documentation for Chronicle Permanodes can be found here:

- [Chronicle Documentation/GitHub](https://github.com/iotaledger/chronicle.rs)

## WASP Smartcontract Node

Wasp is a node software developed by the IOTA Foundation to run the IOTA Smart Contract Protocol (ISCP in short) on top of the IOTA Tangle.

Wasp is still a work in progress and is purely for development and testing purposes. It runs in combination with Goshimmer Nodes on the IOTA 2.0 Devnet.

The full documentation for WASP Smartcontract Nodes can be found here:

- [WASP Documentation/GitHub](https://github.com/iotaledger/wasp)








