# SuperPaymaster PRD

遵照AI建议的模板 [standard-template.md](/protocol/components/standard-template.md)  


## **1. 介绍
📌 **核心目标**：产品解决什么问题？核心用户是谁？  
SuperPaymaster主要解决的是在EVM链上Gas支付问题或者Gas代付的问题。
核心用户群体是Web3小白，他们需要在EVM链上支付Gas费，但是又不想面对各种复杂情况；也包括一些dApps，都需要解决Gas支付问题。
核心价值是提升dApps的用户体验到Web2同等水平，无感支付Gas。
📌 **主要功能**：列出关键功能模块（例如：用户注册、消息通知等）  
📌 **交互流程**：用户如何使用产品，核心使用路径     
SuperPaymaster依赖AirAccount，因为Account必须是合约账户或者EOA账户+EIP7702的实现。
因此使用流程如下：
1. 进入COS72系统或者基于COS72建立的dApps。
2. 注册账户：访问AirAccount或者使用API，详细参考AirAccount PRD文档。
3. 获得Cards：SuperPaymaster提供默认的Cards，余额是AAStar社区发行的积分aPNTs30积分。
4. 无感交易：在COS72提供的积分兑换广场，无感Gas支付(代付），选择各种商店来兑换（购买）各种服务、门票或者实物商品。
5. OpenCards：购买（使用协议积分或者USDT）其他社区基于OpenCards协议发行的NFT/SBT，你可以成为社区成员，获得该社区积分。积分可以支付Gas。
6. EIP1271：和指定链（部署Gas Tank/SuperPaymaster的链）的支持1271的dApps进行交互，无感交易，自动支付Gas（依赖Cards/OpenCards）。
7. EOA+7702：和EOA账户结合，实现EIP7702的实现，提供更安全的无感Gas支付交易体验。
8. API：提供基于雨计算的开放的API，SDSS来帮助任何人代付交易Gas。


**示例 PRD 结构：**  
1. **产品背景**
目标：解决Gas支付问题，提供无感支付Gas产品，产品开源免费.
用户：区块链的新用户，老用户和dApp开发者。
市场需求：用户需要简单易用的操作，无感支付Gas是及格水平的要求，任何新用户或者老用户，都会抱怨区块链的第一步：要去买Gas Token，如此大麻烦以至于让亿万新用户望而生畏。  
2. **功能需求**
核心功能：
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