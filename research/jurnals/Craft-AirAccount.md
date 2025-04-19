# AirAccount: A Semi-Custody & Never Lost Crypto Account Based on TEE and SDSS
## Title
AirAccount: A Semi-Custody& Never Lost Crypto Account Based on TEE and SDSS

## Authors
Huifeng Jiao¹, Dr. Nathapon Udomlertsakul¹ and Dr. Anukul Tamprasirt¹, AAStar Team
¹International College of Digital Innovation, Chiang Mai University, Chiang Mai, 50200, Thailand
E-mail: huifeng_jiao@cmu.ac.th, nathapon.u@icdi.cmu.ac.th, anukul@innova.or.th, hi@aastar.io

## Keywords
**Keywords:** Account Abstraction, ERC-4337, Smart Contract Wallet, Trusted Execution Environment (TEE), Blockchain Usability, Key Management, Social Recovery, Semi-Custody

## Abstract
Managing assets on blockchains fundamentally relies on cryptographic accounts secured by self-custodied private keys. However, from Human-Computer Interaction (HCI) and Technology Acceptance Model (TAM) perspectives, this paradigm presents significant usability and security challenges, including irrecoverable loss from lost keys, steep technical learning curves, and vulnerability to operational errors, and more bad UX, thereby hindering mass adoption. This research introduces AirAccount, a novel crypto account framework designed to provide a secure, user-friendly, and low-cost alternative essential for blockchain's broader accessibility. Leveraging the programmability of ERC-4337 Account Abstraction, AirAccount integrates Trusted Execution Environment (TEE) technology and a Standardized Decentralized Service System (SDSS) architecture. This approach enables enhanced security features such as fingerprint second verification and a semi-custody model where partial key management is securely handled by TEE. Furthermore, AirAccount ensures accounts are "never lost" through robust social recovery mechanisms and improves usability via features like social account binding and support for gasless transactions facilitated by the SDSS. AirAccount aims to bridge the gap between complex blockchain technology and everyday users by offering a permissionless, resilient, and accessible account system, paving the way for safer and more intuitive interaction with decentralized applications.

**Keywords:** Account Abstraction, ERC-4337, Smart Contract Wallet, Trusted Execution Environment (TEE), Blockchain Usability, Key Management, Social Recovery, Semi-Custody

## 1. Introduction
区块链上的所有资产，都依赖于加密账户来管理：一个依赖于加密算法和自托管私钥的安全机制。这个解决方案从HCI和TAM角度看，存在很多的问题，例如丢失了私钥等于丢失一切，对普通人技术要求太高，一个错误操作可能就造成无法挽回的损失等等。这些问题归结为一句话，也是区块链大规模应用的第一个阻碍：需要一个安全易用低成本的区块链账户。本研究提出了AirAccount，依赖于ERC4337的合约账户可编程特性，提供了更安全：指纹二次验证和TEE管理部分私钥，更方便：社交账户绑定和无感交易SDK，更易用：去中心的无许可账户机制，以及依赖Standard Decentralized Service System（SDSS）的更多新特性：半自托管指纹私钥、永不丢失社交恢复、支持无感Gas支付等。
## 2. Blockchain Account System and Threat Model
## 3. System Design and Overview
### 安全和成本：分层安全机制
### 制约和平衡：背叛和损失控制
### 隐私和数据：多层隐私保护
### 扩展和抗量子：可拔插的签名和验证算法
### UX和性价比：HCI和TAM下的设计
### 私钥1的产生和管理：指纹随机数+平台同步
### 私钥2的产生和管理：硬件钱包+TEE硬件+Passkey
### 安全依赖假设：链上合约安全
### 黑客和共谋：安全机制应对
### AirAccount用户：最终用户、开发者和生态协作
## 4. System Implementation
### System Architecture and Components
AirAccount is a open-source crypto account framework based on ERC4337 and TEE technology.
It services for users, developers and ecosystem collaborators by providing a secure, user-friendly, and low-cost alternative essential for blockchain's broader accessibility.
It has three main components, all is open-source:
1. AirAccount Core, includes core contract and TEE-based private key management system on SDSS.
2. AirAccount SDK, provides a set of APIs for dApps to interact with AirAccount.
3. AirAccount Wallet(Account), a user interface for users to manage their AirAccount with plugin.
#### Conception Flow
1. Blockchain account follow a logic: credential control balance, actually all account follow this like bank account, club account and more.
##### Credential
2. Credential in crypto means something you have and others does't have, use this you can control your assets after verify your credential.
3. Private key is the traditional credential in crypto like a complicated password. Human's memory is not a safe place to store it if over 6 characters. if you write down somewhere, maybe you will lost it. Comparing with the centralized credential like ID card, you can lost it and renew from office with your face or some other credential like passport, driver license.
4. Sometimes you can ask your neighbor or family member to help you on verification in the office to renew your ID card, but you can't ask them to renew your private key. Once lost, lost all.
5. So what is the best proof of you to renew your credential? There is a solution called social recovery.
6. Social recovery is a method to recover your private key by asking your friends or family members to verify your identity like a phone call, a private message or face to face talking, or some other more closer contact way.
7. 
### ERC4337 Based Mechanism
以太坊传统账户是EOA，私钥只能通过从生成工具（并非100%安全）复制到文本或者硬件保存，容易忘记和丢失，然后损失所有资产。硬件钱包独立的产生和管理私钥，提升了安全性，但仍然存在风险，例如最近的故障问题和芯片漏洞、甚至后门事件。ERC4337帮助账户建立了可执行、可升级的代码，从而让账户更智能：包括丢失更换私钥、Gas代付、定期执行、日限额、特定合约限定交互等等，都是代码可以完成的功能，当然也带来了复杂度和更多可能得脆弱点。如何权衡和设计一个普适的区块链账户系统，一直是业界的问题之一，也是应对未来的大规模应用，快速普及区块链的必经之路。



## 5. Discussion
## 6. Related Research
## 7. Conclusion
## 8. Future Work
## 9. Acknowledgments

References
