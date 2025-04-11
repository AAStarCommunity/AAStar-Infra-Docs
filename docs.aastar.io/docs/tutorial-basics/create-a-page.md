---
sidebar_position: 1
---

# Get Seemless Gas Payment

dApps do want to have a UX feature like Web2: seamless gas payment.
Communities like to help members get seamless gas payment.
Let's start to help you build a seamless gas payment feature in your dApps/community.

## Register an AirAccount account

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Issue Your Own PNTs
#### AirAccount Configuration
1. 官方申请一个合约账户地址，用来绑定你的SDK支付积分的账户：COS72.org
2. 需求安装AirAccount SDK,  npm install airaccount
3. 初始化AirAccount配置：配置你的社区名称，支付积分账户（1申请的地址），
4. 因为你要使用SuperPaymaster产品，归属于AAStar社区的服务，就需要支付AAStar积分（直接购买）或者OpenPNTs发行的积分。

#### SuperPaymaster Node Configuration
#### ENS Configuration


1. 节点注册
2. 注册AirAccount，buy MRM，stake
3. 配置ENS：API和域名
4. 发行自己的PNTs：成员使用积分购买item或者购买discount coupon
5. 发行自己的OpenCards
6. 社区三问题：onboarding:Perks+OpenCard协议，激励：积分和升级体系，闭环check：任务体系和社区Shop，event等
老场景下的新关系

dApp集成：
1. 安装AirAccount SDK和SuperPaymaster SDK（都在AAStar SDK中）
2. 初始化一个AirAccount测试账户，用来保存PNTs和测试交易
  1. 支付gas有两种：1，账户自己持有PNTs支付（dApp使用积分支付），2.账户持有加油卡（自己的经济体系）
3. 配置SuperPaymaster的支付账户和token类型
  1. 自己发行PNTs（适用于构建自己经济体系的组织）
  2. 使用AAStar提供的gas token（适用于dApp仅仅为无感支付gas的场景）
4. follow demo，构造交易数据
  1. 发API给superpaymaster要签名（询价：获得一个报价列表，发交易给摸个API URL，返回签名）
5. 发送给bundler，观察airaccount少了积分，交易成功

社区集成
一键集成：直接create cos72-app，配置上面参数，社区运行起来了
