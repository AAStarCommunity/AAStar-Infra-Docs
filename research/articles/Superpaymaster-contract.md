我们提出Superpaymaster合约的动机：

1. 单一地址
   1. 跨链一致的一个paymaster地址，给所有开发者以友好的开发体验（加上简单的SDK调用和多种产品方式支持）
2. 统一stake
   1. 所有LP（独立sponsor）都stake到superpaymaster合约内，整体做为一个paymaster服务，信用整体上升，成为大多数bundler、钱包和项目方的首选
   2. 而基于统一的stake和sponsor流程，我们构建了整个产品流程（单次、储值gastank、后付费等提升客户体验的产品形式）和协作（去中心的Runner+LP+project）分润模式。
   3. 这也是ETHPaymaster能够作为一个protocol 社区，独立可持续运营的原因：通过技术立足（单一地址和统一stake解决方案），贡献生态价值（weak censorship和开源、一键部署带来的多样性的paymaster），构建协作和可持续（token机制下的公共物品可持续）
3. 其他特性
   1. 例如无成本跨链、支持LERC20、PERC20等等，都是独立paymaster具备的特征，不是superpaymaster的核心特征，当然是具备价值的。



   只做路由，不做stake
	  1. 这个有ENS方案可以替代，基本就是一个hao123的路由，没有联合众包的superpaymaster的集中stake，没有后续产品？
	  2. LPs有自己的独立合约地址，Superpaymaster作为总的代付地址，存储上LPs的各个合约地址。或者bundler改逻辑，或者通过Superpaymaster路由来获得LPs的地址。