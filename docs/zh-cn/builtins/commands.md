## 有趣的命令
### 消失

`!vanish`

!> 默认权限为**所有人**

#### 参数

- 此命令不需要任何参数

#### 例子

<blockquote>
  <strong>funnyDude:</strong> !vanish<br>
  <strong>twitch:</strong> bot timed out funnyDude for 1 second. 原因: VANISH.
</blockquote>

### 获取频道命令

`!commands`


!> 默认权限为**所有人**

#### 参数

- 此命令不需要任何参数

#### 例子

<blockquote>
  <strong>interestedViewer:</strong> !commands<br>
  <strong>bot:</strong> interestedViewer | http://alphabot.wtf/streamerName/commands.
</blockquote>

## 审核命令
### 禁止

`![un]ban @<用户名> (<原因>)`


!> 默认权限为**MODERATOR**

#### 参数

-`用户名`
  -*必填* - 必须是有效的抽搐用户名
-`原因`
  -*可选字符串* - 可用于添加禁令的原因
  -*默认值：* 空字符串

#### 例子

<blockquote>
  <strong>baduser:</strong> F**k you <br>
  <strong>yourModerator:</strong> !ban @baduser cursing<br>
  <strong>bot:</strong> @baduser, has been banned.
</blockquote>

<blockquote>
  <strong>coolGuy:</strong> I am so cool<br>
  <strong>yourModerator:</strong> !ban @coolGuy ops i accidentally banned you<br>
  <strong>bot:</strong> @coolGuy, has been banned.
  <strong>yourModerator:</strong> !unban @coolGuy<br>
  <strong>bot:</strong> @coolGuy, has been unbanned.
</blockquote>

### 超时

`!timeout @<用户名> (<duration>)`

!> 默认权限为**MODERATOR**

#### 参数

-`用户名`
  -*必填* - 必须是有效的抽搐用户名
-`持续时间`
  -*可选号码* - 秒用户应超时
  -*默认值：* 300

#### 例子

<blockquote>
  <strong>annoyinggUser:</strong> Can you play another game? This is so boring ResidentSleeper<br>
  <strong>yourModerator:</strong> !timeout @annoyingUser 400<br>
  <strong>twitch:</strong> bot timed out annoyinggUser for 400 seconds.
</blockquote>

### 清除

`!clear`

!> 默认权限为**MODERATOR**

#### 参数

- 此命令不需要任何参数

#### 示例

<blockquote>
  <strong>yourModerator: </strong>!clear<br>
  <strong>twitch: </strong> bot cleared chat for this room.
</blockquote>

### 商业

`!commercial (<duration>)`

!> 默认权限为**MODERATOR**

#### 参数

-`持续时间`
  -* 30、60、90、120、150、180中的一个数字* - 设置广告时段的持续时间
  -*默认值：* 30

#### 示例

<blockquote>
  <strong>yourModerator:</strong> !commercial 180<br>
  <strong>twitch:</strong> bot running ad for x seconds.
</blockquote>

### 仅表情

`!emoteonly[off]`

!> 默认权限为**MODERATOR**

####参数

- 此命令不需要任何参数

#### 例子

<blockquote>
  <strong>yourModerator:</strong> !emoteonly<br>
  <strong>twitch:</strong> bot enabled emote-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !emoteonlyoff<br>
  <strong>twitch:</strong> bot disabled emote-only for this room.
</blockquote>

### 仅关注者

`!followersonly[off] (<duration>)`

!> 默认权限为**MODERATOR**

#### 参数

-`持续时间`
  -*可选号码* - 在聊天中书写时必须遵循的分钟数
  -*默认值：* 30

#### 例子
<blockquote>
  <strong>yourModerator:</strong> !followersonly 40<br>
  <strong>twitch:</strong> bot enabled 40 minutes followers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !followersonlyoff <br>
  <strong>twitch:</strong> bot disabled followers-only mode for this room.
</blockquote>

### 主办

`![un]host @<channel>`


!> 默认权限为**MODERATOR**

#### 参数

-`频道`
  -*必填* - 有效的抽搐用户名名称

#### 例子
<blockquote>
  <strong>yourModerator:</strong> !host scriptx<br>
  <strong>twitch:</strong> streamer now hosting scriptx.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !unhost <br>
  <strong>twitch:</strong> streamer stopped hosting scriptx.
</blockquote>

### 模

`![un]mod @<用户名>`

!> 默认权限为**SUPERMODERATOR**

#### 参数

-`用户名`
  -*必填* - 有效的抽搐用户名名称

#### 例子
<blockquote>
  <strong>yourModerator:</strong> !mod scriptx<br>
  <strong>twitch:</strong> bot granted moderator privileges to scriptx.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !unmod scriptx<br>
  <strong>twitch:</strong> bot removed scriptx as a moderator of this channel.
</blockquote>

### 贵宾

`![un]vip @<用户名>`

!> 默认权限为**SUPERMODERATOR**

#### 参数

-`用户名`
  -*必填* - 有效的抽搐用户名名称

#### 例子
<blockquote>
  <strong>yourModerator:</strong> !vip scriptx<br>
  <strong>twitch:</strong> bot granted vip privileges to scriptx.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !unmod scriptx<br>
  <strong>twitch:</strong> bot removed scriptx as a vip of this channel.
</blockquote>

### R9kbeta

`!r9kbeta[off]`

!> 默认权限为**MODERATOR**

#### 参数

-此命令不需要任何参数

#### 例子
<blockquote>
  <strong>yourModerator:</strong> !r9kbeta<br>
  <strong>twitch:</strong> bot enabled unique-chat mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !r9kbetaoff<br>
  <strong>twitch:</strong> bot disabled unique-chat mode for this room.
</blockquote>

### 慢速模式

`!slow[off]`


!> 默认权限为**MODERATOR**

#### 参数

-`持续时间`
  -*可选号码* - 用户必须等待发送新消息的秒数。
  -*默认值：* 30
#### 例子
<blockquote>
  <strong>yourModerator:</strong> !slow 40<br>
  <strong>twitch:</strong> bot enabled 40-second slow mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled slow mode for this room.
</blockquote>

### 仅限订阅者模式

`!subscribers[off]`

!> 默认权限为**MODERATOR**

#### 参数

- 此命令不需要任何参数

#### 例子
<blockquote>
  <strong>yourModerator:</strong> !subscribers<br>
  <strong>twitch:</strong> bot enabled subscribers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled subscribers-only mode for this room.
</blockquote>

### 班夫短语

`!banphrase [添加|删除] <班夫短语>`


!> 默认权限为**MODERATOR**

#### 参数

-`添加或删除`
  -*必填* - 选择添加或删除禁令
-`班夫布雷`
  -*必填* - 要添加或删除的禁止用语

#### Examples
<blockquote>
  <strong>yourModerator:</strong> !banphrase add you are not cool<br>
  <strong>goatViewer:</strong> Streamer you are not cool<br>
  <strong>twitch:</strong> bot timed out goatViewer for 400 seconds.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !banphrase remove you are not cool<br>
  <strong>lilGoatViewer:</strong> Streamer you are not cool<br>
  <strong>goatViewer:</strong> Hahah I can still write
</blockquote>