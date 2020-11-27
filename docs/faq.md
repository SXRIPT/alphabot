# **FAQ**
<br/>

**Question:** How do I get alphabot?

**Answer:** Head over to the <a href="https://alphabot.wtf/">alphabot website</a> and download the latest version!

***
**Question:** What if I have a question or need help?

**Answer:** Please send us <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">email</a> or send us a tweet. We are more than happy to help.

***

**Question:** I found a bug, where can I report it?

**Answer:** We would be happy if you could <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">report</a> here. We'll reply as soon as we can.

***

**Question:** I have a new feature idea, where do I share it?

**Answer:** Please send me a <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">email</a> and I'll look at it!

***
**Question:** Does the bot support more than one channel?

**Answer:** Yes, alphabot supports **multi** channel usage, which means one bot instance = multiple channels

***

**Question:** Why is the bot not sending whisper messages?

**Answer:** Please read https://discuss.dev.twitch.tv/t/have-a-chat-whisper-bot-let-us-know/10651 and register your bot in application form. To get your bot user_id use curl command below.

    curl -X GET 'https://api.twitch.tv/helix/users?login=<botusername>' \
        -H 'Authorization: Bearer <Bearer Token>' \
        -H 'Client-Id: <ClientID>'