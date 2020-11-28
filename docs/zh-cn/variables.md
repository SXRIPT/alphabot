# 变量

变量可用于自定义命令。

## 参数

`${1}-${n}`


创建命令时，可以使用参数。他们所做的基本上是在用户调用消息时采用第n个参数。

## 例子
例如，我们创建了一个命令，该命令返回用户提供的参数的第三个参数。看一下这个聊天场景：
<blockquote>
  <strong>yourModerator:</strong> !command add !argsGuide ${3}<br>
  <strong>bot:</strong> @yourModerator, successfully added command argsGuide.<br>
  <strong>funnyDude:</strong> !argsGuide first second third<br>
  <strong>bot:</strong> third
</blockquote>

## 随机

`${random}`


Random将在提供的两者之间返回一个随机数。

### 例子
例如，我们创建了一个模仿骰子的命令。
<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${random 1 6}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>smallBoban:</strong> !dice<br>
  <strong>bot:</strong> 3<br>
  <strong>ldancer500:</strong> !dice<br>
  <strong>bot:</strong> 6
</blockquote>

## 网址

`${url}`


网址将返回频道网址。

### 例子
例如，我们创建了一个将返回频道网址的命令。
<blockquote>
  <strong>streamer:</strong> !command add !url ${url}<br>
  <strong>bot:</strong> @streamer, successfully added command url.<br>
  <strong>bibiNator99:</strong> !url<br>
  <strong>bot:</strong> https://twitch.tv/streamer
</blockquote>

## 用户名

`${username}`

用户名将返回用户的登录名。

### 例子
例如，我们创建一个将返回用户名的命令。
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## 显示名称

`${display}`

Display将返回用户的显示名称。

### 例子
例如，我们创建一个将返回显示名称的命令
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## 观看者

`${viewers}`


如果直播直播，观看者将返回当前观看者人数。如果流媒体脱机，它将返回“流媒体不直播”。

### 例子
例如，我们创建了一个将返回查看器计数的命令。
<blockquote>
  <strong>streamer:</strong> !command add !viewers ${viewers}<br>
  <strong>bot:</strong> @streamer, successfully added command viewers.<br>
  <strong>bob390:</strong> !viewers<br>
  <strong>bot:</strong> 50
</blockquote>

## 游戏

`${game}`


如果直播，游戏将返回流的当前类别。如果频道离线，则会返回“ Streamer not live”。

### 例子
例如，我们创建一个命令，该命令将返回流的当前类别。
<blockquote>
  <strong>streamer:</strong> !command add !cat ${game}<br>
  <strong>bot:</strong> @streamer, successfully added command cat.<br>
  <strong>bob390:</strong> !cat<br>
  <strong>bot:</strong> Just Chatting
</blockquote>

## 标题

`${title}`


如果直播，标题将返回流的当前标题。如果频道离线，则会返回“ Streamer not live”。

### 例子
例如，我们创建一个命令，该命令将返回流的当前标题。
<blockquote>
  <strong>streamer:</strong> !command add !title ${title}<br>
  <strong>bot:</strong> @streamer, successfully added command title.<br>
  <strong>niko2010:</strong> !title<br>
  <strong>bot:</strong> New Personal Best today PogChamp
</blockquote>

## 语言

`${language}`


语言将返回频道设置为的当前语言，这仅在频道直播时才有效。如果频道离线，则会返回“ Streamer not live”。

### 例子
例如，我们创建一个命令，该命令将返回流的当前语言。
<blockquote>
  <strong>streamer:</strong> !command add !language ${language}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tinaProGamerin:</strong> !language<br>
  <strong>bot:</strong> EN  
</blockquote>

## 正常运行时间

`${uptime}`


正常运行时间将返回当前频道的正常运行时间。如果频道离线，则会返回“ Streamer not live”。

### 例子
例如，我们创建一个命令，该命令将返回流的当前正常运行时间。
<blockquote>
  <strong>streamer:</strong> !command add !uptime ${uptime}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tomsy19:</strong> !uptime<br>
  <strong>bot:</strong> 5 hours 36 minutes
</blockquote>


## 更大的

`${greater}`

较大将返回两个提供的值中的较大值。

### 例子
例如，我们创建一个带有两个参数的命令。看一下这个聊天场景：
<blockquote>
  <strong>yourModerator:</strong> !command add !greater ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command greater.<br>
  <strong>funnyDude:</strong> !greater 299 5400<br>
  <strong>bot:</strong> 5400
</blockquote>

## 减

`${smaller}`

少将返回两个提供的值中的较小值。

### 例子
例如，我们创建一个带有两个参数的命令。看一下这个聊天场景：
<blockquote>
  <strong>yourModerator:</strong> !command add !smaller ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command smaller.<br>
  <strong>smallBoban:</strong> !smaller 299 5400<br>
  <strong>bot:</strong> 299
</blockquote>

## 等于

`${equal}`

等于将返回true或false，这取决于提供的两个值是否匹配。

### 例子
例如，我们创建一个带有两个参数的命令。看一下这个聊天场景：
<blockquote>
  <strong>yourModerator:</strong> !command add !equal ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command equal.<br>
  <strong>smallBoban:</strong> !equal 299 5400<br>
  <strong>bot:</strong> false<br>
  <strong>smallBoban:</strong> !equal 299 299<br>
  <strong>bot:</strong> true
</blockquote>