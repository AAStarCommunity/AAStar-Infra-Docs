# 组件定义
这里我们来描述所有组件（系统和子系统）的定义和初步设计）,包括了社区账户：AirAccount、SuperPaymaster，PNTs，Perks，和个体密切相关的基础和工具层面的组件；社区支付：PNTs、Cards、Shops，和协作、交换、支付、购买、交易相关的组件；社区工具：Games、Agents、CBots，和社区管理、协作、游戏、奖励、治理相关的组件
## 基础定义

### AirAccount
去中心化账户的完整生命周期服务。
基础的二次验证安全服务，所有交易，依赖于你的手指中文（产生的随机数产生的passkey）。
享受类似于银行账户的贴身服务：日限额、父子账户、遗嘱执行、特定交易规则等。
随时可以搬家，搬家要付搬家费给服务节点。
可以雇佣保安（Public Guardian）来提供复合的去中心社交恢复。
### SuperPaymaster  
和AirAccount捆绑使用，基于ERC4337框架，提供合约账户的gas代付和EOA账户的gas代付能力。支持每个社区发行自己的Cards。
### PNTs
PNTs是每个社区自主发行的token，用来计量贡献，交换物品的媒介。每个社区发行自己的积分，例如AST-PNTs，XX-PNTs。PNTs会和实物商品进行绑定背书。发行原理是三合一发行：Stake以太坊+提供服务承诺+积分限定场景。
### Perks
徽章，提供各种自定义，炫酷徽章和升级体系，包括和Games的游戏绑定，提供加成。

### Cards
### Shops
### Games
### Agents

## SDSS
Standardized Decentralized Services System,又叫Rain Computing Service，雨计算服务。
我们的组件未来都会运行在雨计算上，这就依赖于我们的客户端，同时又可以做服务器端，可以理解为一个BitTorrent软件，你既可以从别人那里下载软件，享受服务；也可以自己运行服务，让别人从你电脑下载软件。

### 客户端
正常的客户端，大多数人用的都是这个。包括所有端：MacOS、Windows、Linux、Android、iOS、Web。

### 客户端+
在客户端的基础上，增加了一些功能，例如对外提供上面章节的服务组件，可以理解为一个一个个的节点，运行上面的服务组件。
需要stake提供基础安全保障，根据你提供的服务，获得积分。

### 客户端++
需要更高要求，包括更高stake和特定的硬件，例如AirAccount服务，必须运行于特定硬件（支持TEE的硬件）。
