# SuperPaymaster: A Decentralized Ethereum Gas Payment System Based on ERC4337 and Account Abstraction

## Title

SuperPaymaster: A Decentralized Ethereum Gas Payment System Based on ERC4337 and Account Abstraction

## Authors

Huifeng Jiao, Dr. Anukul Tamprasirt,Dr. Nathapon Udomlertsakul, AAStar Team
International College of Digital Innovation, Chiang Mai University, Chiang Mai, 50200, Thailand1
E-mail: huifeng_jiao@cmu.ac.th, nathapon.u@icdi.cmu.ac.th, anukul@innova.or.th, hi@aastar.io

## Keywords

**Blockchain, Ethereum, ERC-4337, Account Abstraction, Paymaster, Gas Payment, Decentralized Service System, SDSS**

## Highlights

- We provide a comprehensive overview of existing gas payment systems on the Ethereum blockchain and analyze their inherent weaknesses.
- We establish key guidelines and requirements for the design of a decentralized, seamless, and cost-effective gas payment system.
- We propose a novel gas payment (sponsor) system, leveraging the Ethereum platform and an application sponsorship model to address costly and complex processes.
- We conduct a proof of concept (PoC) to demonstrate the advantages of the proposed system over existing solutions and to outline potential future research directions.

## Abstract
This research utilizing principles of Human-Computer Interaction (HCI) and account abstraction technologies such as ERC-4337, we aim to optimize the gas payment experience on Ethereum (and EVM-compatible chains) to reduce costs, enhance user experience (UX), and improve system efficiency, ultimately facilitating the large-scale adoption of blockchain technology.
This paper introduces SuperPaymaster, a novel blockchain transaction Gas payment system leveraging Account Abstraction (ERC-4337) and a Standardized Decentralized Service System (SDSS) to address critical challenges in current Gas payment solutions, including high costs, poor user experiences, and inefficiencies. Existing blockchain Gas payment mechanisms are user-unfriendly and inconvenient, and while ERC-4337 offers partial improvements, issues like centralization, price monopolization, and censorship persist. Furthermore, current approaches lack fully decentralized Gas payment services, evidenced by limited ERC-20 token acceptance, the absence of permissionless Gas sponsorship, uneven service coverage, and complex application integration. SuperPaymaster proposes an open-source, decentralized framework enabling anyone to register and operate their Paymaster service via the SuperPaymaster contract, accepting any ERC-20 token for Gas. Integrating the AirAccount contract and SuperPaymaster service, underpinned by SDSS utilizing ENS and P2P networks, this system aims to significantly reduce the high time costs of cross-chain transactions and holding Gas tokens. It also seeks to streamline cumbersome procedures, enhance inefficient operations, and improve the poor user experience of existing tools. A Proof-of-Concept (PoC) validates the system's feasibility and advantages.
207 words

##  1. Introduction

<!-- 1.1 Background and Motivation -->

Blockchain technology represents a significant technological advancement with the potential to reshape societal collaboration and digital asset exchange, evidenced by its multi-trillion dollar market capitalization [Optional: Add citation]. However, realizing its full potential for mass adoption hinges critically on user acceptance and experience. Drawing upon the Technology Acceptance Model (TAM) and principles of Human-Computer Interaction (HCI), user adoption is largely determined by perceived usefulness and perceived ease of use [Optional: Add citation for TAM/HCI]. While blockchain offers novel functionalities (usefulness), significant barriers related to usability, efficiency, and cost currently hinder its perceived ease of use and overall user experience, impeding broader acceptance.

<!-- 1.2 Problem Statement -->

A primary obstacle within the current blockchain ecosystem, particularly on platforms like Ethereum and EVM-compatible chains, is the cumbersome and costly process of paying transaction fees, commonly known as "gas". Daily gas consumption on Ethereum alone highlights the economic scale of this friction point [Optional: Cite ultrasound.money]. Users, especially newcomers, face a steep learning curve involving complex concepts, multi-step procedures (often exceeding 10-15 steps involving exchanges, cross-chain transfers, and wallet management), high and volatile costs, and a generally poor user experience. More like high cognitive load, execution/evaluation gulfs in HCI and TAM theory. These usability challenges act as significant deterrents, preventing users from fully engaging with and realizing the value of decentralized applications (dApps).

<!-- 1.3 Research Gap -->

While solutions like Ethereum's Account Abstraction standard (ERC-4337) aim to alleviate some of these issues by enabling features like gas sponsorship (Paymasters), current implementations often fall short [Optional: Add citation for ERC-4337]. Existing approaches frequently rely on centralized relayers (Bundlers) and Paymasters, reintroducing risks of price manipulation, censorship, and single points of failure – counteracting blockchain's core decentralization ethos. Furthermore, limitations persist regarding the flexible use of diverse ERC-20 tokens for gas payments, permissionless service operation, and seamless integration for dApp developers. A critical gap exists in providing a truly decentralized, competitive, and user-friendly gas payment infrastructure that aligns with the open, community-driven nature of blockchain.

<!-- 1.4 Research Objectives and Questions -->

This research aims to design, implement, and evaluate a novel system, SuperPaymaster, built upon ERC-4337 and a proposed Standardized Decentralized Service System (SDSS) architecture, to address the identified gaps in blockchain gas payments. The primary objectives are to significantly reduce gas payment costs through competition, enhance user experience by simplifying interactions (e.g., via NFT-based "Gas Cards" and seamless payments), improve operational efficiency, and mitigate the risks associated with centralized intermediaries.

This study is guided by the following key research questions:

How can a decentralized gas payment system based on ERC-4337 and SDSS effectively reduce transaction costs and improve user experience compared to existing methods?

What mechanisms within this system can mitigate the risks of price monopoly and censorship inherent in centralized gas payment solutions?

How feasible and efficient is the proposed SuperPaymaster system and SDSS architecture in a practical implementation?

<!-- 1.5 Significance and Scope -->

This research contributes a novel, decentralized gas payment solution (SuperPaymaster) and a foundational service architecture (SDSS), offering a viable alternative to centralized approaches. By integrating HCI principles, it directly tackles the usability barriers hindering blockchain adoption, potentially making dApps significantly more accessible. The study's significance lies in its potential to foster a more open, competitive, and user-centric gas payment ecosystem, aligning with blockchain's core values. The scope is focused on gas payment optimization within EVM-compatible chains using ERC-4337, evaluating cost, user experience (usability, cognitive load), efficiency, and decentralization aspects. It does not cover broader account management or non-gas-related security issues.

<!-- 1.6 Brief Methodology and Structure -->

Employing a design science approach, this research involves: (1) Designing the SuperPaymaster system and SDSS architecture. (2) Implementing key components like competitive quoting, NFT Gas Cards, and permissionless node registration. (3) Developing and evaluating a Proof-of-Concept (PoC) on the Ethereum Sepolia testnet using Solidity, Go, and TypeScript. The remainder of this paper is organized as follows: Section 2 reviews related work. Section 3 details the proposed system design. Section 4 presents the evaluation methodology and results. Section 5 discusses the findings and limitations. Section 6 concludes the paper and outlines future work.


## Main part
### 2. Gas Payment System and Threat Model 6/1000
#### 2.1 Essential Services of Gas Payment System
        *   2.1.1 Necessity of Gas Payment (Gas的必要性问题)
        *   2.1.2 Current Gas Payment Workflow (概述现有支付流程，为后续HCI分析铺垫)
#### 2.2 Threat Model: Challenges and Vulnerabilities in Current Systems
        *   2.2.1 User Experience Deficiencies (用户体验极差 - HCI/TAM视角概述)
            *   *(HCI详细分析移至 3.3)*
        *   2.2.2 Asset Fragmentation (资产碎片化)
        *   2.2.3 Operational Inefficiency (效率低下 - 开户/购买/跨链等)
        *   2.2.4 Limitations of Existing Countermeasures (现有对策的局限性 - 可用性、认知负荷、接受度)
        *   2.2.5 Risks of Centralized Gas Payment Services (中心化Gas支付系统的问题)
            *   2.2.5.1 Security and Privacy Concerns (三明治攻击、数据泄露)
            *   2.2.5.2 Manipulation and Censorship Risks (操纵和审查风险)
            *   2.2.5.3 Monopoly and Cost Issues (垄断和成本问题)
            *   *(中心化风险的详细分析移至 3.4)*
#### 2.3 Usability Challenges in Gas Payment (深入HCI分析)
        *   2.3.1 Ease of Learning & Complex On-Chain Transaction Process (链上交易的复杂流程)
        *   2.3.2 Gulf of Execution (执行鸿沟)
        *   2.3.3 Gulf of Evaluation (评估鸿沟)
        *   2.3.4 Efficiency Issues (效率问题 - 细节)
        *   2.3.5 Error Rate and Lack of Fault Tolerance (错误率和误操作)
        *   2.3.6 Memorization Difficulties (可记忆性)
        *   2.3.7 User Satisfaction Issues (满意度)
        *   2.3.8 Lack of Supporting Tools and Infrastructure (工具问题)
        *   2.3.9 High Cognitive Load (技术性概念认知负荷)
        *   2.3.10 Low Perceived Ease of Use (感知易用性)
#### 2.4 Risk Analysis of Centralized Gas Payment Services (中心化风险详述)
        *   2.4.1 High Integration Costs and Low Adoption Rate (集成成本高、普及率不高)
        *   2.4.2 Transaction Manipulation Risks (抢跑, MEV, 三明治攻击)
        *   2.4.3 Privacy Leakage Risks (用户交易隐私泄露)
        *   2.4.4 Legal and Regulatory Compliance Risks (地区法律审查)
        *   2.4.5 Limited Gas Token Support (不接受自定义ERC20)
        *   2.4.6 Long-term Monopoly and Cost Inflation Risks (垄断与成本上升)

### 3. The Proposed System Overview: SuperPaymaster 8/1500
#### 3.1 Requirements Specification for a Decentralized Gas Payment System
        *   (将“拟议系统的关键要求”作为本节内容)
        *   3.1.1 Security Requirements (安全)
        *   3.1.2 Privacy Requirements (隐私)
        *   3.1.3 Availability Requirements (可用)
        *   3.1.4 Usability Requirements (易用)
        *   3.1.5 Cost-Effectiveness Requirements (低成本)
        *   3.1.6 Efficiency Requirements (高效)
        *   3.1.7 Competitiveness Requirements (竞争)
        *   3.1.8 Openness and Permissionless Requirements (开放开源无许可)
#### 3.2 Overview of the SuperPaymaster System
        *   (简要介绍SuperPaymaster的目标、核心理念和主要组成部分)
#### 3.3 Involved Actors and Roles
        *   (列出并描述参与者：普通用户，社区，节点运营方，Bundler/RPC，第三方Swap等)
#### 3.4 SDSS (Standardized Decentralized Service System) Overview
        *   (简要介绍SDSS的目标、核心理念和主要组成部分)
        *   3.4.1 ENS for Service Discovery (ENS)
        *   3.4.2 Node Registration Mechanism (节点注册机制)
        *   3.4.3 Dynamic Routing Discovery (动态路由发现)  
#### 3.5 Key Components of the SuperPaymaster Ecosystem
        *   4.1.1 Standardized Decentralized Service System (SDSS)
            *   4.1.1.1 ENS for Service Discovery (ENS)
            *   4.1.1.2 Node Registration Mechanism (节点注册机制)
            *   4.1.1.3 Dynamic Routing Discovery (动态路由发现)
        *   4.1.2 Competitive Quoting Mechanism (竞争式报价)
        *   4.1.3 Self-Custodial AirAccount Integration (自托管的AirAccount)
            *   4.1.3.1 Fingerprint-based Security (只需按指纹)
            *   4.1.3.2 Enhanced Contract Account Features (社交恢复等)
        *   4.1.4 Open Community Model (开放的社区模式)
            *   4.1.4.1 Permissionless Community Tokens (OpenPNTs)
            *   4.1.4.2 NFT-based Gas Cards (Cards/OpenCards/无感Gas支付)
            *   4.1.4.3 Task-for-Points Mechanism (任务换积分)
#### 3.6 SuperPaymaster Trust Model
        *   4.2.1 Decentralized Node Mechanism (去中心化节点机制 - BLS门限签名等)
        *   4.2.2 Reputation Mechanism (Reputation机制 - 成功率、响应速率、Stake)
        *   4.2.3 On-Chain Contract Verification (链上合约验证 - 签名、支付、利润分配)
        *   4.2.4 Community Governance Model (社区治理模型)
        *   4.2.5 Trust Flywheel (信任模型：低价+Stake -> 成功率 -> 用户 -> 可持续 -> 声誉)

#### 3.7 Core Gas Sponsorship Workflow (System Perspective)
        *   (详细描述“SuperPaymaster 系统流程”中的步骤，并配时序图)
        *   Step 1: User Account Registration (AirAccount)
        *   Step 2: Transaction Construction and Encryption (用户与dApp交互, 指纹加密)
        *   Step 3: Gas Price Quoting via SDSS (dApp调用SDSS询价)
        *   Step 4: Paymaster Selection and Signature Acquisition (选择节点, 获取签名)
        *   Step 5: Transaction Submission (提交到Bundler/RPC)
        *   Step 6: On-Chain Verification (EntryPoint验证, Paymaster合约验证)
        *   Step 7: Pre-Payment Actions (Paymaster合约扣款/计算)
        *   Step 8: Post-Payment Actions (退款, 记账, Reputation更新)
        *   Step 9: Contract Execution (执行交易核心逻辑)
        *   Step 10: Transaction Confirmation (打包, 广播, 确认)
        *   Step 11: Post-Pay Settlement (Paymaster节点结算)
#### 3.8 Typical User Interaction Workflow (User Perspective)
        *   (详细描述“SuperPaymaster用户典型交互流程”中的步骤)
        *   Step 1: Accessing Integrated dApp
        *   Step 2: Account Registration (Google/Email/EOA with Fingerprint/Signature)
        *   Step 3: Receiving Community NFT/Points (假设)
        *   Step 4: Earning Points (Optional: Task Completion)
        *   Step 5: Initiating Transaction (e.g., Purchase, Transfer, Claim)
        *   Step 6: Seamless Gas Payment (Using Points/NFT Card)
        *   Step 7: Viewing Transaction Records
        *   Step 8: Checking Balances and History      

### 4. Implementation (Proof of Concept - PoC) 5/1500
#### 4.1 Technology Stack
        *   (列出Tauri, Rust, Go, Next.js, Solidity, AirAccount, Supabase等)
#### 4.2 System Setup and Configuration
        *   (描述测试环境，如Sepolia测试网)
#### 4.3 Smart Contract Development
        *   (SuperPaymaster合约, ENS API合约等关键合约的实现要点)
#### 4.4 Backend Service Implementation
        *   (Go服务实现要点：ENS管理, 节点验证, 签名服务)
#### 4.5 Frontend and Desktop Application Development
        *   (Next.js Web交互, Tauri/Rust节点管理应用实现要点)
#### 4.6 AirAccount Integration
        *   (描述如何集成AirAccount的账户生成和二次加密功能)
#### 4.7 SDSS Implementation Details
        *   (ENS注册、节点发现、API接口的具体实现方式)
#### 4.8 OpenCards/OpenPNTs Implementation
        *   (NFT/SBT合约实现，积分管理逻辑)

### 5. Discussion
        *   5.1 Addressing Usability Challenges (讨论SuperPaymaster如何解决易用性问题)
            *   ENS for Dynamic Service Access
            *   Reputation Mechanism for Success Rate Guarantee
            *   Competitive Quoting for Cost Reduction
            *   Community Tokens for Low/Negative Cost
            *   NFT Cards for Seamless Payment
        *   5.2 Security Enhancements (讨论安全增强措施：二次加密, TEE)
        *   5.3 Implications of Findings (对评估结果的解读 - *需结合第5章评估结果*)
        *   5.4 Limitations (研究的局限性 - *可从第6章移部分过来*)
### 6 Related Work and Comparison
        *   (将SuperPaymaster与现有方案在安全、隐私、成本、开放性、易用性、效率等方面进行详细比较，突出优势和差异)
### 7 Conclusion
        *   (总结研究的主要贡献和发现)
    *   **8.4 Future Work**
        *   (提出未来的研究方向)

## Acknowledgments
This research was supported by the Plancker^ Community, and development was supported by the AAStar Team which was a subsidiary of Plancker^ in 2023 to 2024.
## References
here is the reference list:
