# Arcadia: Open Garden for Community

# SuperPaymaster PRD

遵照AI建议的模板 [standard-template.md](/protocol/components/standard-template.md)  


## **1. 介绍
📌 **核心目标**：产品解决什么问题？核心用户是谁？  
Arcadia是一个基于Godot引擎开源的游戏框架，目标是为社区的创造力提供各种创作工具，以游戏方式呈现。
不一样的游戏，不一样的体验。
📌 **主要功能**：
1.核心计算节点:依赖能够运行Web服务的节点，具体参考N1N2N3三种节点类型。
2.加载存档服务：帮助用户从AirAccount服务获得账户，获得链上Hero和存档记录，及时提交存档信息到链上。
3.基础服务：在N123上必须运行的账户和Gasless以及交易提交服务。
4.模板服务：基于开源自己开发和设定模板，帮助用户快速创建游戏，初始化需要一些计算服务，最终游戏不依赖于此节点。
5.Transport：目前提供跨社区交流服务，本质是建立一个公共交易广场和交易池，包括聊天、物品交换等游戏服务。
6.目前只提供网页版，基于Godot引擎，后续开发手机版和PC版。
📌 **交互流程**：用户如何使用产品，核心使用路径     
Arcadia依赖AirAccount，SuperPaymaster，OpenCards，因为Hero的NFT基于OpenCard协议打造。
因此使用流程如下：
1. 注册账户：访问AirAccount或者使用API，详细参考AirAccount PRD文档。
2. 下载COS72，安装，或者到COS72网站，直接使用（需要有AirAccount账户）。
3. 普通玩家：使用社区积分购买Hero和装备，进入游戏，开始游玩，打怪得积分。
4. Spores玩家：遵照PNTs和Spores协议，基于本地生活，帮助所有实体和线上经济扩散价值，开店（发帖）卖优惠券。
5. 社区游戏策划：基于社区积分或者通用积分，购买基地包，打造自己的社区游戏：种田、塔防、挖矿、探索、狩猎、贸易、合成、Rogue，随你自己打造，使用各种模板和配置页面，1小时拥有自己的社区游戏和经济系统，也可以自己开发模板（开源）。


**PRD 结构：**  
1. **产品背景**
释放社区的创造力，自己可以设计和搭建地图，基于已有或者创造新模式构建社区的游戏。所有模板创造的游戏，内置同一个经济引擎，可以实现跨游戏的交易。  
2. **功能需求**
管理员的游戏地图编辑器：
给社区管理员提供编辑地图的功能，可以创建、编辑、删除游戏地图元素，设置规则，然后加载地图，开始游玩。
地图是一个开放世界，可以设置一些任务、事件、NPC、BOSS等。打造自己的社区游戏：种田、塔防、挖矿、探索、狩猎、贸易、合成、Rogue。
V0.01版
1. 基础的框架：可以编辑地图，更改设定（社区名字，游戏名字，社区积分，游戏模式（只有种田可选），然后创建新游戏。
2. 种田游戏的细节设定：经济循环，作物种植，收获，交易，交易商品，获取交易奖励，这些可见可编辑。
3. 可独立运行的游戏+对接AirAccount账户+存档（创建加载保存）游戏
V0.1版本：
1. 基础地图编辑：可以创建、编辑、删除游戏地图元素，设置规则，然后加载地图，开始游玩。
2. 支持基础的走动、跑动、攻击、拾取、交易等行为。
3. 支持种田模式：开垦地块，种植作物，收获作物，交易作物。
V0.2版本：
1. 支持狩猎模式：狩猎野生动物，获取狩猎奖励。
2. 支持交易模式：交易商品，获取交易奖励。
3. 支持合成模式：合成商品，获取合成奖励。
4. 支持Rogue模式：Rogue游戏，获取Rogue奖励。
V0.3版本：
1. 设定和加载系统：可以增加自己设定，然后自动加载，例如节日菜单系统，线下互动活动等。
2. 支持更多游戏模式：例如狩猎、交易、合成、Rogue等。
详细描述：
交互逻辑：
3. **用户流程**
注册：
登录：
支付：
more...


4. **数据需求**
存储数据：
User：Email，Account Address，Cards-contract, Cards-address, Cards-tokenId
Balance：PNTs-contract，PNTs-address，PNTs-name，PNTs-symbol，PNTs-decimals，Balance，Cards-address
Transaction：chainId，txHash，from，to，value，data，timestamp，gasfee，signature,paymaster-signature,status

5. **技术约束**  
性能：基于去中心化计算提供的计算服务的性能，初期要求并不高。预计10个节点提供足够10000人使用的测试网络。
安全：基于加密和门限签名验证，BLS聚合和secp256k1(ECDSA)，BN256(支持 zk-SNARKs 等隐私保护技术），BLS12-381
```
EIP-2537：BLS12-381 曲线操作的预编译合约
目的：​引入 BLS12-381 椭圆曲线的预编译操作，优化 BLS 签名验证等复杂加密操作，提供更高的安全性和计算效率。​
功能：​新增 BLS 签名验证、公共密钥聚合和多签名验证等功能。​
优势：​通过预编译合约，合约可以直接调用这些操作，无需部署额外代码来执行 BLS12-381 相关的复杂数学计算，从而降低 Gas 成本，提高执行效率。
```
平台：基于雨计算服务，提供DPT计算(Decentralized, Permissionless, Trustless)。



## **2. 绘制关键流程图**
🔹 **用户使用流程（User Flow）**：展示用户如何使用产品  
获得账户：访问AirAccount或者使用API
获得Cards：需要申请或者购买
获得积分：需要购买或者claim（针对任务和QVThumbUp通过的claim+AI审核+偏离值Jury再审核）
构造交易：AA+4337
构造交易：EOA+7702
获得签名：普通node注册SuperPaymaster+stake获得保障+失败率统计+服务积分+服务声誉
提交交易：提交给Bundler或者EIP7560节点
链上验证SuperPaymaster签名
返回临时hash：bundler方式返回
交易返回：成功（交易hash）或者失败（重试三次）+错误原因
积分结算：实时支付（实时swap ETH）
积分结算：锁定+后置支付

🔹 **信息架构（IA）**：
1. 大部分交互基于Html页面方式交互
2. 后台是Go语言的后台服务和开源魔改版Supabase提供的相关服务（图片，数据库，存储），[supabase.md](/protocol/components/solutions/supabase.md)
3.基于mermaid提供信息流转图
1. SuperPaymaster系统参与的角色：用户（N1），AirAccount服务，SuperPaymaster签名服务（N2+SuperPaymaster），Superpaymaster链上验签，Bundler/EIP7560，Validator(N2+Validator)

🔹 **系统架构图（Architecture）**：
SDSS是去中心化的API服务，因此结构更复杂。
前端：基于Tauri客户端，称之为N1
后端：Go语言的后台服务，称之为N2（文件数据库）
数据库：开源魔改版Supabase提供的相关服务（图片，数据库，存储），称之为N2+Supabase
账户管理：基于特定硬件的称之为N3

🔹 **数据流程（Data Flow）**：数据如何在系统中流转  

💡 **工具推荐**：Figma / Draw.io / ProcessOn  

**示例流程图：**  
1. **用户使用流程**（如「注册 -> 登录 -> 购买 -> 评价」）  
2. **系统架构**（前端、后端、数据库、云存储）  
3. **API 交互**（前后端如何通信，如 RESTful 或 GraphQL）  

---

## **3. 技术架构设计**
📌 **前端**：Web（React/Vue）+ App（Flutter/React Native）  
📌 **后端**：Node.js / Go / Python（FastAPI）  
📌 **数据库**：MySQL / PostgreSQL / MongoDB  
📌 **缓存**：Redis（存储会话、热点数据）  
📌 **云服务**：AWS / GCP / 阿里云  
📌 **CDN & 存储**：Cloudflare / S3  
📌 **安全**：JWT 认证、OAuth、HTTPS  

**示例技术架构：**
```plaintext
用户 -> Web/App -> 负载均衡 -> API 网关 -> 微服务（用户、订单、支付） -> 数据库
```

---

## **4. 确定 API 设计**
- **RESTful API / GraphQL**  
- **WebSocket（实时通知、聊天）**  
- **OAuth 登录（Google、微信）**  

📌 **示例 API 设计**
```json
POST /api/login
{
  "email": "user@example.com",
  "password": "123456"
}
```

---

## **5. 选型 & 开发**
📌 **开发环境**：Docker + Kubernetes（方便部署）  
📌 **数据库设计**：ER 图（实体关系，如用户表、订单表）  
📌 **版本管理**：Git + CI/CD（自动部署）  
📌 **性能优化**：缓存、索引、负载均衡  

---

## **6. 监控 & 运维**
📌 **日志监控**：ELK / Prometheus  
📌 **错误告警**：Sentry / Grafana  
📌 **CDN & 负载均衡**：减少请求延迟  

---

## **示例：互联网跨平台产品设计步骤**
1️⃣ **撰写 PRD**（目标、功能、数据）  
2️⃣ **绘制用户 & 系统架构图**（核心流程）  
3️⃣ **技术选型**（前端、后端、数据库、缓存）  
4️⃣ **设计 API**（RESTful / GraphQL）  
5️⃣ **开发 & 版本管理**（Git、CI/CD、Docker）  
6️⃣ **监控 & 维护**（日志、错误告警、安全）  

💡 **总结**：  
✅ 先明确需求（PRD）  
✅ 再设计架构（流程图 + API）  
✅ 选技术 & 开发（框架、数据库）  
✅ 部署上线（CI/CD + 监控）  

这样就能 **清晰 & 简单** 地设计一个互联网跨平台系统！ 🚀  