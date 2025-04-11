# System Architecture
请根据我的论文的技术栈描述，以及我补充描述，生成一个示意图，里面包括各个技术栈的图片和整个系统的简单架构图，图表可以参考：https://github.com/edent/SuperTinyIcons。
1. 所有用户都是N1，代表普通客户端，使用Tauri+Node.js
2. N1可以访问N2到N5，分别为N2：静态文件服务、N3：ENS解析等API服务、N4：具备ARM芯片的树莓派5B（TEE+硬件钱包服务）、N5：独立运行Docker（Supabase服务）
3. 网络整体包括User、SuperPaymaster、AirAccount、dApp Contract、AI等第三方服务

v1：
https://claude.site/artifacts/d6b9b7ee-5aab-4c9a-857e-fceaeef72940

v2：
