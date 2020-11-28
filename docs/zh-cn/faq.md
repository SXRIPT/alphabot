# **常问问题**
<br/>

**问题：** 我如何获得alphabot？

**答案：** 转到 <a href="https://alphabot.wtf/"> alphabot网站</a> 并下载最新版本！

***
**问题：** 如果我有问题或需要帮助怎么办？

**答案：** 请给我们 <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">电子邮件</a> 或给我们发送一条推文。我们非常乐于提供帮助。

***

**问题：** 我发现了一个错误，该在哪里报告？

**答案：** 如果您可以在此处 <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">报告</a>，我们将非常高兴。我们会尽快回复。

***

**问题：** 我有一个新的功能构想，该在哪里分享？

**答案：** 请给我发送 <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">电子邮件</a>，我来看看吧！

***
**问题：** 机器人是否支持多个渠道？

**答案：** 是的，alphabot支持**多**通道使用，这意味着一个机器人实例=多个通道

***

**问题：** 为何机器人不发送悄悄话？

**答案：**请阅读 https://discuss.dev.twitch.tv/t/have-a-chat-whisper-bot-let-us-know/10651 并在申请表中注册您的机器人。要获取您的机器人user_id，请使用下面的curl命令

    curl -X GET 'https://api.twitch.tv/helix/users?login=<botusername>' \
        -H 'Authorization: Bearer <Bearer Token>' \
        -H 'Client-Id: <ClientID>'