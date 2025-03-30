# SuperPaymaster: A Decentralized Ethereum Gas Payment System Based on ERC4337 and Account Abstraction

## Highlights

- We provide a comprehensive overview of existing gas payment systems on the Ethereum blockchain and analyze their inherent weaknesses.
- We establish key guidelines and requirements for the design of a seamless, cost-effective, and spam-resistant gas payment system.
- We propose a novel gas payment (sponsor) system, leveraging the Ethereum platform and an application sponsorship model to address costly and complex processes.
- We conduct a proof of concept (PoC) to demonstrate the advantages of the proposed system over existing solutions and to outline potential future research directions.

## Abstract
This paper introduces SuperPaymaster, a novel blockchain transaction Gas payment system leveraging Account Abstraction (ERC-4337) and a Standardized Decentralized Service System (SDSS) to address critical challenges in current Gas payment solutions, including high costs, poor user experiences, and inefficiencies. Existing blockchain Gas payment mechanisms are user-unfriendly and inconvenient, and while ERC-4337 offers partial improvements, issues like centralization, price monopolization, and censorship persist. Furthermore, current approaches lack fully decentralized Gas payment services, evidenced by limited ERC-20 token acceptance, the absence of permissionless Gas sponsorship, uneven service coverage, and complex application integration. SuperPaymaster proposes an open-source, decentralized framework enabling anyone to register and operate their Paymaster service via the SuperPaymaster contract, accepting any ERC-20 token for Gas. Integrating the AirAccount contract and SuperPaymaster service, underpinned by SDSS utilizing ENS and P2P networks, this system aims to significantly reduce the high time costs of cross-chain transactions and holding Gas tokens. It also seeks to streamline cumbersome procedures, enhance inefficient operations, and improve the poor user experience of existing tools. A Proof-of-Concept (PoC) validates the system's feasibility and advantages.

Blockchain: Specifically refers to the Ethereum series of public blockchains with EVM and associated VMs as their core.

Simple version：
Substantial Gas fees and complex operational procedures currently impede the widespread adoption of blockchain transactions, hindering further technological advancement. To facilitate broader application within the cryptocurrency industry, this research introduces SuperPaymaster, a Gas payment system based on the ERC4337 account abstraction protocol and the SDSS (Standardized Decentralized Service System). This system aims to ensure cross-chain interoperability, significantly reduce Gas payment costs and operational complexity, and enhance user experience, effectively addressing challenges such as convoluted native token acquisition, unintuitive plugin utilization, cumbersome onboarding, and high cross-chain transfer costs. SuperPaymaster leverages ERC4337 for seamless cross-chain Gas payments, accepts community tokens as Gas currency to lower expenses, and employs SDSS to establish a decentralized and price-competitive Gas service ecosystem, thereby simplifying operations, reducing costs, and improving the overall user experience.


##  Introduction

### Background

Blockchain technology has emerged as a transformative force, significantly impacting societal collaborations and facilitating the exchange of digital assets, with a market capitalization that has reached trillions of dollars. The acceptance and widespread adoption of new technologies, as suggested by the Technology Acceptance Model (TAM) and principles of Human-Computer Interaction (HCI), are heavily influenced by users' perceptions of their utility and the quality of their experience (UX). From a TAM perspective, users assess a technology's perceived usefulness (the benefits they believe it offers) and perceived ease of use (how simple they find it to operate). Greater acceptance is anticipated when the perceived benefits outweigh the costs (financial, temporal, effort-related) and the technology is sufficiently user-friendly. Correspondingly, HCI principles highlight that large-scale adoption hinges on factors beyond direct costs, including the efficiency of human-computer interaction, user satisfaction, ease of use, user experience, effectiveness, and efficiency.

### Problem Statement

Despite the advancements in blockchain technology, a truly user-friendly blockchain account system remains elusive, particularly in the context of gas payment for blockchain applications. Transaction is the only way to operate with your blockchain assets. Ethereum burn gas 170 billion US dollar everyday([https://ultrasound.money/]), not including hundreds of layer2 chains. It is critical question for crypto users and new comers: lower the cost, smooth the gas payment, improve the UX. The current gas payment process is often cited as a major impediment to user experience due to its high costs, inefficiency, and complexity. This barrier prevents many individuals from even evaluating the security, usability, and value of novel blockchain applications. This research investigates the challenges associated with blockchain account gas payments, including complex procedures, intricate concepts, high costs, multiple steps, and poor user experience. Furthermore, it addresses the risks of centralized entities monopolizing prices and engaging in censorship, proposing a solution based on Account Abstraction (ERC-4337) and a Standardized Decentralized Service System (SDSS).


### Research Gap

Ethereum's Account Abstraction proposal, ERC-4337, offers a framework to mitigate the aforementioned issues. However, while it provides a protocol-level solution, its practical implementation and widespread adoption are still in nascent stages. Moreover, the existing approaches within the ERC-4337 ecosystem do not fully address the risks of centralized price monopolies and censorship. A significant gap remains in providing truly decentralized gas payment services. There are several companies who monopolize the paymaster and bundler services, which may lead to the limitations in the acceptance of diverse ERC-20 tokens for gas fees, the lack of permissionless operation of gas sponsorship and payment services, uneven service coverage across different applications and chains, and the complexities associated with integrating these services into decentralized applications (dApps). Blockchain is emergenced from open source and community, not a company or a group of companies, we need community to build a decentralized gas payment system to get low-cost and smooth gas payment.


### Research Objectives and Questions

This research aims to address the limitations of current blockchain account gas payment systems by proposing a comprehensive solution leveraging ERC-4337 and related protocols. The primary objective is to overcome the challenges of cognitive complexity, operational difficulties, high costs, multiple steps, poor user experience, and security concerns associated with existing gas payment methods. Furthermore, this study seeks to mitigate the risks of centralized price monopolies and censorship prevalent in current solutions.

The central research questions guiding this study are:

* What are the flaws of current gas payment solutions? The cognitive costs, operational steps, time spending (expenditures), required tools, involved parties, interaction processes, financial costs, potential errors, and security risks for new users completing an on-chain transaction and more?
* What are the limitations of current gas payment solutions, particularly concerning price monopoly and censorship risks?
* How can a decentralized framework based on ERC-4337 and a Standardized Decentralized Service System (SDSS) effectively address the identified challenges and limitations in blockchain account gas payments?


### Significance of the Study

By integrating insights from HCI and TAM, this research offers a holistic perspective on user acceptance and experience with blockchain technology. This interdisciplinary approach not only contributes to the academic field by innovating gas payment solutions but also aims to provide the blockchain industry with a truly decentralized alternative for gas payments. The practical implications of this research include offering users more secure, user-friendly, cost-effective, and efficient gas payment services for blockchain accounts. Given that decentralization is a core tenet of blockchain technology, the proposed solution, built upon the SDSS (a service architecture introduced in this paper), is of significant value.
As a new technology, blockchain is seen by most people as an intricate field of cryptography, complex algorithms, and numerous challenging new concepts, which hinders the development of the blockchain industry and its future widespread application. This research innovatively approaches the first barrier to onboarding new users to blockchain—from the perspectives of TAM and HCI—by improving gas payment processes, thereby giving products a sense of warmth and friendliness. This will facilitate easier and more convenient access to blockchain for the public, enabling technology to better serve society.


### Scope and Limitations

This research primarily focuses on the challenges and solutions related to gas payments for blockchain accounts on EVM-compatible chains. It does not encompass other aspects of blockchain account management, such as account creation, private key management, other forms of payment, general security considerations beyond gas payment, or privacy aspects.

The specific aspects of gas payment addressed in this research include:

1.  Cognitive complexity, operational difficulty, high cost, multiple steps, poor user experience, and security concerns.
2.  Analysis of current solutions, focusing on price monopoly and censorship risks.
3.  The proposed solution's attributes: decentralization, competition, transparency, security, low cost, efficiency, ease of use, and trustworthiness.


### Brief Methodology

To address the research questions, this study employs a design science research methodology. First, it introduces a novel SuperPaymaster system built upon ERC-4337, designed to provide a permissionless, stable, secure, and competitive gas payment service. Second, it proposes a new Standardized Decentralized Service System (SDSS) to establish a foundational service architecture that ensures secure, transparent, and user-friendly decentralized basic computing services. Third, the research outlines innovative gas payment processes, including gasless transactions, community contribution for gas, and post-payment credit for gas. Finally, a Proof-of-Concept (PoC) is developed on the Ethereum sepolica testnet with solidity, typescript and go-lang language in order to validate the feasibility and advantages of the proposed SuperPaymaster system and SDSS.



## 