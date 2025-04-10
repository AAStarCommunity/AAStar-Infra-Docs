# Research Introduction
We are researching on the topic of blockchain account and security, will explore the dApps and more in the future.
## Documents 
tree -L 3
.
├── analysis
│   ├── CPU-hardware-analysis.md
│   ├── ENS.md
│   ├── NAT-IP.md
│   ├── Rain-Computing.md
│   ├── Superpaymaster-contract.md
│   ├── TEE-SGX.md
│   ├── TEE-analysis.md
│   ├── TEE-client.md
│   ├── TEE-server.md
│   ├── TEE-wallet.md
│   ├── Tauri.md
│   ├── dApps-data-analysis.md
│   └── solution-analysis.md
├── index.md
├── jurnals
│   ├── HCI-grok.md
│   ├── HCI.md
│   ├── SuperPaymaster.md
│   ├── data-source-grok.md
│   ├── journal-1.md
│   ├── journal-2.md
│   ├── ppt-suggestion.MD
│   ├── research-question.md
│   ├── statistic.md
│   └── structure-sugesstion.md
│   └── static-example-paper.md
├── papers
│   ├── Final-FullPaper-TICC2024_ICDI_CMU_Jiao_HuiFengV1.3.pdf
│   ├── TICC-机翻中文版-凭证控制余额-统一账户模型-焦会峰.pdf
│   └── 焦会峰学位论文定稿V1.4-3-9答辩通过提交版本.pdf
├── solutions
│   ├── COS72.md
│   ├── D-Credit.md
│   ├── IERobot.md
│   ├── SuperPaymaster_v0.12.pdf
│   └── SuperPaymaster_v0.13.pdf
└── user-case
    └── How-to.md
## Introduction
余生还长，探索不止。
个人在研究兴趣上是慢慢收敛或者升华的，逐步从一个技术男对所有技术方向的好奇心，慢慢专注到一个方向：如何让普通个体获得自由。
在解决方案上也有了一个闭环的逻辑思路：只有获得自己的时间、空间和选择权，才能获得真正的自由，才能发挥出每个个体作为人，拥有的人性光辉：想象力、创造力和情感，才是一个完整的人。
而如何获得自己的时间，空间和选择权，我对于当下资本主导的世界，结论是越努力越绝望，基本不可能获得自由。
因此也提出了自己的一个理论：超资本，基于自由市场这个全球接受的机制概念下，基于创新协作的关系，建立归属于个体的超资本，来让每个个体在某个层面的价值创造和价值分配上做主，从而获得自己的时间，空间和选择权和自由。
这个理论比较粗糙，但简单说，帮助个体提升福祉。
而我个人寄希望于区块链来帮助实现这个研究和探索，整体的研究兴趣，也是围绕我的核心方向：如何让普通个体获得自由。


### Research Interests
作为研究者/researcher，持续关注的研究领域很多，包括但不限于：
- 区块链账户和安全/Blockchain Account and Security
- 区块链基础去中心化计算/Blockchain Basic Decentralized Computing
- 人工智能在个体决策在区块链的应用/Artificial Intelligence
- 复杂系统和社区可持续发展/Complex System and Community Sustainability
- 社会资本和个体价值量化/Social Capital and Individual Value Quantification
- Web3和去中心化应用/Web3 and Decentralized Application


### PhD Research
作为一个博士生/PhD student，我的研究领域是：
- 区块链账户/Blockchain Account
完成了一篇综述性质的会议论文：Blockchain Account：Credential Contral Balance.
包括以下相关的子领域：

#### 以太坊账户抽象下的Gas支付优化
SuperPaymaster和相关研究，解决gas支付的成本、效率和UX问题。
正在进行的第一篇journal paper,因为基于HCI(Human Computer Interaction)的考虑，以及一些基础调研和个人感受，Web3或者任何新技术的推广，成本和收益是一个mass adoption的最大门槛。中国互联网爆发的核心是ADSL入户（成本降低），而这个的基础是ChinaNET光线骨干网的建立，延伸的基础是光线路由器交换机的技术成本大大大降低，以此类推很多，可以感知，技术的创新和持续优化，是推动社会发展的重要基础。
所以降低区块链/以太坊的gas成本，是第一个jurnal考虑的问题，后续的是提升收益（DApp带来福祉。

#### 以太坊账户抽象下的自托管账户
AirAccount和相关研究，解决自托管账户的安全性和隐私以及UX问题。
同样是上面的逻辑，ERC4337和EIP7702带来了账户的新能力，但协议和真正可用的系统，是有巨大距离的，需要我们研究账户的全生命周期，针对每个环节的优化和提升。
同时要特别注意DPT((Decentralized Permissionless and Trustless))，注意到区块链不仅仅是技术，更是具备社会学目的的技术，偏离社会学的定义，就无意义了，比如纯粹追求高并发而抛弃去中心化

#### 以太坊账户抽象下的社交恢复
SocialRecovery和相关研究，解决社交恢复的安全性和隐私以及UX问题。如果你丢失了银行卡，银行会提供相关的服务来锁定，找回等等。而区块链账户有一个很大问题：自主意味着隐私保护和无服务。中心化服务需要你付出个人隐私，去中心化的不需要，这之间的差距就是我们要建设的去中心化服务。在账户方面，就是全生命周期的服务，而所有权的确认和支配权的体现，在去中心化体系下，以太坊提出了社交恢复方案。
得现有社交，才有恢复。社交又意味着隐私的部分透露。同时我们又要保护安全，防止共谋。

#### 更多账户和安全的研究主题
1. 合约账户的二次验证安全方案和自托管
2. TEE在社区节点的应用：硬件钱包和可控安全行为
3. SessionKey在二次验证和社区节点的游戏应用
4. 匿名地址（Stealth Address）方案研究和实践
5. DVT(Decentralized Validator Technology)和BLS在安全性和性能上的研究
6. 非洲的短信区块链账户方案
7. 区块链账户在链游戏的核心价值
8. 账户抽象、钱包抽象到链抽象：区块链的UX思考
9. 超资本理论的账户研究和实践

### Practice
围绕个人的研究兴趣，我正在做以下实践：
- 开源和贡献：在以太坊和Ethereum社区，我积极参与和贡献
    - 参加Devcon和黑客松
    - 组织清迈本地的以太坊和Ethereum社区活动
    - 组织清迈大学的一些区块链workshop和课程、培训
    - 参与以太坊账户抽象的研究和实践（关注论坛和进展，发表文章）
- 建立AAStar，围绕关于以太坊账户抽象的研究和实践
    - 包括一些列的开源项目和研究文章、分享会
- 建立CMUBA，围绕一些基于以太坊的去中心化应用的研究和实践
- 建立Mycelium蘑菇协议（暂称），筹建蘑菇社区
- 建立超资本理论的研究和实践（筹建），清迈大学区块链实验室（研究中心）

### Articles
- 区块链研究
    - 个人部分放在[个人Blog](https://blog.jlab.tech)和一个丢失了的Mirror，更新不频繁
    - 在DApp Learning和SeeDAO以及Plancker和AAStar，这些研究在相关的notion或者GitHub，开源开放
    - 汇总了一份开源社区进行的研究副本：TODO,不过可以参考寄生在CMUBA免费notion的AAStar notion:[不完全版本](https://cmuba.notion.site/Research-list-f4e428658b5e4d309cf37be58ff02b7d),[其他文档](https://cmuba.notion.site/AAStar-Working-Docs-f077df7f2166492aa05ba75666d4f451)
- 硕士论文
    - 这里：[个体量化,Study on the Influence of Social Network Factors on Individuals’ Value](./papers/焦会峰学位论文定稿V1.4-3-9答辩通过提交版本.pdf)
    - 傻X的CNKI，不开放硕博的论文访问，搞不明白，所以没有在线版本
    - 微盘的在线版本：[社会关系网络因素对个体价值影响研究](https://share.weiyun.com/5gLNJjE)
- 博士会议论文
    - 这里：[TICC-2024](./papers/Final-FullPaper-TICC2024_ICDI_CMU_Jiao_HuiFengV1.3.pdf)
    - 中文版:[TICC-2024CN](./papers/TICC-机翻中文版-凭证控制余额-统一账户模型-焦会峰.pdf)
    - Archix:[https://arxiv.org/abs/2402.10616](https://arxiv.org/abs/2402.10616)
    - Online link:[TICC](https://ticc.ic.swu.ac.th/),[TICC Collection](https://ticc.ic.swu.ac.th/wp-content/uploads/2024/07/Proceedings_TICC_8th_V5_20240703.pdf)
- 博士论文1
    - 草稿：[jounal-1.md](./jounal-1.md)
- 博士论文2
    - 计划草稿：[jounal-2.md](./jounal-2.md)
- 更多论文：待定  

### Collection
- [第九届网络社会年会 | 复音的全球南方：技术交流的空间](https://nodebe4.github.io/opinion/2024-11-16/%E5%9C%A8%E6%B8%85%E8%BF%88-%E7%8E%B0%E5%9C%BA%E5%9B%9E%E9%A1%BE-%E7%AC%AC%E4%B9%9D%E5%B1%8A%E7%BD%91%E7%BB%9C%E7%A4%BE%E4%BC%9A%E5%B9%B4%E4%BC%9A-%E5%A4%8D%E9%9F%B3%E7%9A%84%E5%85%A8%E7%90%83%E5%8D%97%E6%96%B9/), 介绍：https://caa-ins.org/archives/12164

- RoadToDevcon，清迈大学活动现场记录
- 公共物品之夏：4Seas Moutain View现场记录 
- 清迈大学888455课程(Blockchain Security Design for Financial Technology)记录
- 东京Mycelium Protocol公共物品协议分享现场记录
- 曼谷ETHGlobal黑客松现场记录
- 土耳其黑客松现场记录
- ShardLab 黑客松Camp记录
- Wamo瓦猫大理Web3贡献者记录+NFT小组记录
- 怀念丢失了半年的AAStar每周在线分享记录

merge this doc to open build docs.aastar.io
### Who am I？
Jason Jiao，以太坊建设者，AAStar贡献者，前普朗克主理人，前教育科技公司P9和研发负责人，前某东汽车M3技术管理角色。
目前在筹建Mycelium Protocol，建立践行协议的MushroomDAO。

    

## Thinking

基础的研究思考逻辑：
1. research problem：现实世界或者研究领域面临的实际难题，有时候二者是交叉的。
2. research question：从problem中提炼出的具体问题，是问题的显化，是”问“的形式。
3. research objective：针对question的回答，也是研究的目标，是预期或者成果。
4. research hypothesis：针对question的具体可测试重现的预测（需要证伪或者证明），是研究的假设。
这里我们将讨论我个人整体的研究problem和拆分后的博士研究问题（总要显毕业）。

### Research problem
#### 个人研究问题
问题：**个体如何获得人性自由**
分解路径：人性和自由-->时间空间和选择权（自由的前提）-->定义新经济模型（兼容资本和自由市场的超资本）-->基于新技术创建（区块链）-->创新协作关系（基于自组织社区和重新定义价值和分配）-->DApp（依赖于去中心化应用构建关系场景）-->依赖区块链基建（包括但不限于区块链账户和其他）

##### 博士论文研究问题
一个**安全易用低成本的区块链账户**，是Mass adoption/大规模应用的**第一个障碍和难题**。
Access，访问和使用的权利和自由，是最基础的入口，包含了两个层面。
1. 必要条件：每个普通个体都有一个**安全易用低成本的区块链账户**，博士阶段解决必要条件（当然必要条件有很多）
2. 充分条件：Web3描述的数字未来确实能够给普通个体带来**真实的福祉提升**，毕业后继续研究+做Lecture，后续阶段解决充分条件

### Research question
对个人研究的其他问题，在其他文档拆分，这里只拆分博士相关的研究问题。
区块链账户距离大规模应用，存在很多问题：
1. 安全/Security：私钥和管理，交易安全，合约漏洞，共识攻击
2. 易用/Usability：UI/UX，容错机制，认知和操作成本，系统复杂度
3. 成本/Cost：账户创建和维护成本，交易费用，硬件和软件成本
4. 效果/Effectiveness：收益，效率，体验，社会价值（这个是博士研究阶段假设是会有效果的，不变的）
根据技术接受模型（TAM, technology acceptance model）和人机交互（HCI, human-computer interaction）的原则，新技术能否被大规模普及，很大程度上取决于用户对其成本和收益的权衡。从TAM的角度来看，用户会评估技术的感知有用性（他们认为技术能带来多少益处）和感知易用性（他们认为技术使用起来有多容易）。如果用户认为技术的收益大于其付出的成本（包括金钱、时间、精力等），并且使用起来足够便捷，他们更有可能接受并使用这项技术。而从HCI的角度来看，大规模的接受应用，除了直接的经济成本，人与计算机系统交互的效率、用户满意度和技术的易用性、用户体验和有效性和效率等因素也会极大地影响用户对技术的感知价值和接受程度。
用户衡量和决策有一个逻辑过程：
1. 感知有用性>感知易用性>成本，那么更有可能接受并使用这项技术。
2. 而大规模使用则依赖于整体成本和收益的对比：
    1. Usability+Accessibility+User Experience, UX+Effectiveness+Efficiency到达交互的效率、有效性和用户满意度
    2. 综合评估成本：
        - 时间成本: 学习和使用新技术所需的时间。
        - 认知成本: 理解和操作新技术所需的脑力付出。
        - 精力成本: 使用新技术可能带来的疲劳或不适。
        - 风险成本: 使用新技术可能带来的安全风险或隐私泄露风险。
       可能得效益：
       - 效率提升: 更快地完成任务。
       - 功能增强: 实现以前无法实现的功能。
       - 体验改善: 获得更便捷、更愉悦的使用体验。
       - 社会价值: 例如，使用某些社交媒体带来的社交连接。 

上述三个因素相互依存，构成了区块链账户迈向大规模应用的关键瓶颈。一个能够满足广泛用户需求的区块链账户，必须在确保资产安全的前提下，实现足够低的成本和足够便捷的使用体验，以符合人机交互原则和用户对新技术的接受预期。
所以拆解为三个关联的子问题（但这个不是充分条件，充分条件是是否真实提升了普通人的福祉）：
1. 如何构建一个**安全**的区块链账户？要求简单易用的安全性，不能操作复杂，解决私钥丢失就全丢失等核心问题。
    1. 如何解决签名盲签问题？用户根本不知道签名后果的情况下签名丢失所有资产的问题
    2. 如何实现社交恢复问题？证明你是你的是你的社会关系而非中心化凭证
    3. 如何实现日限额问题？深入思考是账户如何提供类似银行体系的安全服务
    4. 如何实现遗嘱自动执行等去中心化的执行和计算问题？
2. 如何构建一个**易用**的区块链账户？要求简单易用的易用性，不能操作复杂，解决复杂的操作流程问题。
    1. 如何降低区块链账户超长的线上线下，链上链下的操作步骤成本？
    2. 如何降低区块链账户的UX复杂问题？交互技术性太强，普通人不会操作，每次交易都要签名
    3. 如何降低区块链账户的复杂购买Native token和支付gas问题？每个链都需要购买native token，碎片话分布在不同链，跨链交易昂贵
3. 如何构建一个**低成本**的区块链账户？要求简单易用的成本，不能操作复杂，解决高昂的交易费用问题。
    1. 如何降低区块链操作的gas支付成本？包括直接支付成本和更高昂的间接成本
    2. 如何降低区块链账户的复杂的技术概念认知成本？
    3. 如何降低区块链账户的复杂的技术操作成本？

### Research Objectives

### Research Hypothesis

### Journal Submit

Name：
Blockchain: Research and Applications

https://www.sciencedirect.com/journal/blockchain-research-and-applications/publish/guide-for-authors


Journal Insights
Aims & scope
An official Journal of the Zhejiang University Press

Blockchain: Research and Applications is an international, peer reviewed journal for researchers, engineers, and practitioners to present the latest advances and innovations in blockchain research. The journal publishes theoretical and applied …


View full aims & scope
ISSN
Online ISSN: 2666-9536Linking ISSN: 2096-7209
Subject areas
Computer Science Applications
Impact
11.3
CiteScore

6.9
Impact Factor

Acceptance rate
14%
Acceptance Rate

Abstracting and indexing
Directory of Open Access Journals (DOAJ)
Emerging Sources Citation Index (ESCI)
**Scopus**
Ei Compendex



    



## TODO/Doing
本文收集所有需要研究的具体问题。
TODO: 待整理

### 以太坊Gas Payment机制详尽调查分析

以下是对以太坊Gas支付机制的全面分析，涵盖TOP20钱包、去中心化交易所（DEX）及其他Web3应用的支付方式，结合关键EIP的变化与调整，分析影响Gas支付流程和成本的关键因素，并探讨针对外部账户（EOA）和合约账户（CA）的改进措施及其产品应用，最后评价这些改进在Gas支付方面的提升与不足。

---

### 一、以太坊Gas Payment机制概述

在以太坊网络中，Gas是衡量计算资源消耗的单位，用于支付交易和智能合约执行的费用。Gas支付机制的核心目的是防止网络资源滥用，确保每一笔操作都有明确的经济成本。其基本流程如下：
1. **Gas Limit**：用户指定每笔交易愿意消耗的最大Gas量。
2. **Gas Price**：用户设定每单位Gas愿意支付的价格（以Gwei为单位）。
3. **交易费用**：计算公式为 `Gas Used × Gas Price`，以ETH支付。
4. **矿工/验证者激励**：在工作量证明（PoW）时期，矿工优先打包Gas价格高的交易；权益证明（PoS）后，验证者遵循类似逻辑。

Gas支付直接影响用户体验，尤其在网络拥堵时，高Gas费用成为瓶颈。以下分析TOP20钱包、DEX和Web3应用的Gas支付方式及其演变。

---

### 二、TOP20钱包、DEX和Web3应用的Gas Payment支付方式

#### 1. TOP20钱包的Gas支付方式
根据市场份额和用户量，以下是部分TOP20钱包（MetaMask、OKX Wallet、Coinbase Wallet、Trust Wallet、imToken等）的常见Gas支付方式：
- **标准支付（ETH支付）**：
  - 用户通过钱包界面设置Gas Limit和Gas Price，直接用ETH支付。
  - 示例：MetaMask默认提供“慢速、平均、快速”三种Gas价格选项，用户可手动调整。
- **代付机制（Gasless体验）**：
  - 部分钱包通过集成智能合约或Layer 2（L2）解决方案实现“代付”。如OKX Wallet支持部分DApp的Gas代付，用户无需直接支付ETH，由DApp或第三方承担。
- **多币种支付尝试**：
  - 一些钱包（如Trust Wallet）允许用户用其他代币（如BNB在BNB Chain上）支付Gas，但以太坊主网仍限制为ETH。
- **批量交易**：
  - 支持智能合约钱包的钱包（如Gnosis Safe）允许用户在一笔交易中执行多个操作，减少多次支付Gas的成本。

#### 2. DEX的Gas支付方式
去中心化交易所（如Uniswap、SushiSwap、Curve等）的Gas支付方式与智能合约交互密切相关：
- **直接支付**：
  - 用户在Swap、添加流动性等操作时，直接支付ETH作为Gas费。例如，Uniswap V3的交易需支付Gas以执行Swap和更新池状态。
- **优化Gas路径**：
  - 一些DEX通过路由优化减少Gas消耗，如1inch通过聚合多个DEX路径降低总Gas成本。
- **L2集成**：
  - DEX逐渐迁移至L2（如Uniswap在Optimism和Arbitrum上），用户支付的Gas费用大幅降低，且部分L2支持用代币支付Gas。

#### 3. 其他Web3应用的Gas支付方式
Web3应用（如NFT市场、链游、DeFi协议）的Gas支付方式多样化：
- **原生ETH支付**：
  - OpenSea等NFT市场要求用户支付铸造、交易的Gas费，使用ETH。
- **Gas代付（Relayer模式）**：
  - 部分应用通过中继者（Relayer）代付Gas，再向用户收取其他代币或法币补偿。例如，链游Axie Infinity曾通过Ronin侧链实现免费交易。
- **预付Gas**：
  - 一些应用提前为用户预付Gas，通过积分或订阅模式回收成本。

---

### 三、关键EIP上线后的变化与调整

以太坊的Gas支付机制随EIP（以太坊改进提案）的实施不断演进，以下是几个关键EIP及其影响：

#### 1. EIP-1559（伦敦升级，2021年8月）
- **变化**：
  - 引入基础费用（Base Fee）和优先费用（Priority Fee），基础费用由网络自动调整并销毁，优先费用激励验证者。
  - 用户无需手动猜测Gas Price，钱包（如MetaMask）自动建议费用。
- **对支付方式的调整**：
  - 钱包界面简化，用户只需关注总费用而非单独设置Gas Price。
  - DEX和Web3应用因基础费用波动需优化合约调用以降低成本。
- **影响**：
  - 提高了费用可预测性，但未降低总体Gas成本，高峰期仍昂贵。

#### 2. EIP-4337（账户抽象，2023年3月上线）
- **变化**：
  - 通过不更改共识层的账户抽象方案，允许智能合约自定义签名逻辑和Gas支付规则。
- **对支付方式的调整**：
  - 钱包可实现Gas代付（如通过Bundler机制），用户无需持有ETH即可交易。
  - DEX可通过智能合约钱包批量操作，减少Gas支出。
  - Web3应用可设计“无助记词”体验，用户用其他代币支付Gas。
- **影响**：
  - 降低了新用户进入门槛，但增加了开发复杂度和链上成本。

#### 3. EIP-2938（早期账户抽象提案，未完全实施）
- **变化**：
  - 提议允许合约账户（CA）直接支付Gas，减少对EOA的依赖。
- **影响**：
  - 未上线，但为EIP-4337奠定基础，推动了智能合约钱包的发展。

#### 4. 合并（The Merge，2022年9月）
- **变化**：
  - 从PoW转向PoS，未直接改变Gas机制，但提升了网络容量。
- **影响**：
  - 间接通过分片（未来计划）降低Gas成本，钱包和应用需适配新共识。

---

### 四、影响Gas支付流程和成本的关键要素

基于上述分析，以下是影响Gas支付的关键因素：
1. **网络拥堵**：
   - 高交易量时，基础费用上升，用户支付成本增加。
2. **合约复杂度**：
   - 复杂智能合约（如多步DeFi操作）消耗更多Gas，增加费用。
3. **支付方式设计**：
   - 代付、多币种支付等方案降低用户直接成本，但需额外基础设施支持。
4. **Layer 2采用率**：
   - L2（如Arbitrum、Optimism）大幅降低Gas费，但需用户切换网络。
5. **EIP实施**：
   - EIP-1559提高了费用透明度，EIP-4337增加了支付灵活性。

---

### 五、针对EOA和合约账户的改进措施及产品应用

#### 1. EOA的改进措施
- **现状**：
  - EOA由私钥控制，只能用ETH支付Gas，缺乏灵活性。
- **改进**：
  - **账户抽象（EIP-4337）**：通过UserOperation和Bundler机制，EOA可与智能合约结合，实现自定义支付逻辑。
  - **社交恢复**：Vitalik提倡通过多签或社交恢复替代助记词管理。
- **产品应用**：
  - ** Argent**：智能合约钱包，支持社交恢复和Gas代付，用户无需持有ETH。
  - **UniPass**：基于EIP-4337的无助记词钱包，简化用户体验。

#### 2. 合约账户（CA）的改进措施
- **现状**：
  - CA无法主动发起交易或支付Gas，需EOA触发。
- **改进**：
  - **账户抽象**：允许CA定义Gas支付规则，如代付或批量交易。
  - **权限管理**：通过智能合约实现多签、限额等功能。
- **产品应用**：
  - **Gnosis Safe**：多签智能合约钱包，支持批量交易和权限控制。
  - **Safe{Wallet}**：基于EIP-4337的升级版，支持更灵活的Gas支付。

---

### 六、产品在Gas Payment的提升与缺点

#### 1. 提升
- **Argent**：
  - **提升**：Gas代付和社交恢复降低新用户门槛，集成L2（如zkSync）减少费用。
  - **缺点**：依赖中心化Relayer，增加信任成本；链上操作仍需Gas。
- **Gnosis Safe**：
  - **提升**：批量交易减少多次Gas支付，多签提升安全性。
  - **缺点**：部署和操作成本高，不适合小额用户。
- **UniPass**：
  - **提升**：无助记词设计简化使用，Gas代付提升体验。
  - **缺点**：EIP-4337生态不成熟，Bundler费用可能转嫁用户。

#### 2. 待改进之处
- **兼容性**：智能合约钱包与现有DApp的适配性不足，需开发者支持。
- **成本**：链上部署和操作的Gas费仍高，L2虽降低成本但普及率有限。
- **安全性**：代付机制引入新攻击面（如Bundler恶意行为）。
- **用户教育**：新支付方式（如账户抽象）对普通用户仍复杂。

---

### 七、结论

以太坊的Gas支付机制通过EIP-1559和EIP-4337等改进，从单一ETH支付演变为支持代付、多币种支付和批量交易的多元化体系。TOP20钱包、DEX和Web3应用正逐步采用这些创新，降低用户成本和门槛。针对EOA和CA的改进（如账户抽象）已催生Argent、Gnosis Safe等产品，显著提升支付灵活性。然而，高Gas费、兼容性问题和生态成熟度仍是挑战。未来，随着L2普及和EIP进一步实施，Gas支付流程有望更高效和用户友好，但需平衡去中心化与成本之间的权衡。

### Wallets products

### Evaluation points

### Gas payment features

### Security features

### Total UX features