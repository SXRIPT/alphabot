# Variables

Variables can be used for custom commands.

## Arguments

`${1}-${n}`

When creating a command, arguments can be used. What they do is basically they take the n-th argument when a user calls the message.

### Examples
For example we create a command which returns the 3rd argument of arguments a user provided. Look at this chat scenario:
<blockquote>
  <strong>yourModerator:</strong> !command add !argsGuide ${3}<br>
  <strong>bot:</strong> @yourModerator, successfully added command argsGuide.<br>
  <strong>funnyDude:</strong> !argsGuide first second third<br>
  <strong>bot:</strong> third
</blockquote>

## Random

`${random}`

Random will return a random number between the two provided.

### Examples
For example we create a command which imitates an dice.
<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${random 1 6}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>smallBoban:</strong> !dice<br>
  <strong>bot:</strong> 3<br>
  <strong>ldancer500:</strong> !dice<br>
  <strong>bot:</strong> 6
</blockquote>

## Url

`${url}`

Url will return the channel url.

### Examples
For example we create a command which will return the channel url.
<blockquote>
  <strong>streamer:</strong> !command add !url ${url}<br>
  <strong>bot:</strong> @streamer, successfully added command url.<br>
  <strong>bibiNator99:</strong> !url<br>
  <strong>bot:</strong> https://twitch.tv/streamer
</blockquote>

## Username

`${username}`

Username will return the users login name.

### Examples
For example we create a command which will return the username.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Display Name

`${display}`

Display will return the display name of the user.

### Examples
For example we create a command which will return the display name.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Viewers

`${viewers}`

Viewers will return the current viewer count if the streamer is live. If the streamer is offline it will return "Streamer not live".

### Examples
For example we create a command which will return the viewer count.
<blockquote>
  <strong>streamer:</strong> !command add !viewers ${viewers}<br>
  <strong>bot:</strong> @streamer, successfully added command viewers.<br>
  <strong>bob390:</strong> !viewers<br>
  <strong>bot:</strong> 50
</blockquote>

## Game

`${game}`

Game will return the current category of the stream if live. If the channel is offline it will return "Streamer not live".

### Examples
For example we create a command which will return the current category of the stream.
<blockquote>
  <strong>streamer:</strong> !command add !cat ${game}<br>
  <strong>bot:</strong> @streamer, successfully added command cat.<br>
  <strong>bob390:</strong> !cat<br>
  <strong>bot:</strong> Just Chatting
</blockquote>

## Title

`${title}`

Title will return the current title of the stream if live. If the channel is offline it will return "Streamer not live".

### Examples
For example we create a command which will return the current title of the stream.
<blockquote>
  <strong>streamer:</strong> !command add !title ${title}<br>
  <strong>bot:</strong> @streamer, successfully added command title.<br>
  <strong>niko2010:</strong> !title<br>
  <strong>bot:</strong> New Personal Best today PogChamp
</blockquote>

## Language

`${language}`

Language will return the current language the channel is set to, this only works if the channel is live. If the channel is offline it will return "Streamer not live".

### Examples
For example we create a command which will return the current language of the stream.
<blockquote>
  <strong>streamer:</strong> !command add !language ${language}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tinaProGamerin:</strong> !language<br>
  <strong>bot:</strong> EN  
</blockquote>

## Uptime

`${uptime}`

Uptime will return the current uptime of the channel if live. If the channel is offline it will return "Streamer not live".

### Examples
For example we create a command which will return the current uptime of the stream.
<blockquote>
  <strong>streamer:</strong> !command add !uptime ${uptime}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tomsy19:</strong> !uptime<br>
  <strong>bot:</strong> 5 hours 36 minutes
</blockquote>


## Greater

`${greater}`

Greater will return the greater value of two provided values.

### Examples
For example we create a command which takes two arguments. Look at this chat scenario:
<blockquote>
  <strong>yourModerator:</strong> !command add !greater ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command greater.<br>
  <strong>funnyDude:</strong> !greater 299 5400<br>
  <strong>bot:</strong> 5400
</blockquote>

## Smaller

`${smaller}`

Smaller will return the smaller value of two provided values.

### Examples
For example we create a command which takes two arguments. Look at this chat scenario:
<blockquote>
  <strong>yourModerator:</strong> !command add !smaller ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command smaller.<br>
  <strong>smallBoban:</strong> !smaller 299 5400<br>
  <strong>bot:</strong> 299
</blockquote>

## Equal

`${equal}`

Equal will return true or false depending if the two provided values match.

### Examples
For example we create a command which takes two arguments. Look at this chat scenario:
<blockquote>
  <strong>yourModerator:</strong> !command add !equal ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command equal.<br>
  <strong>smallBoban:</strong> !equal 299 5400<br>
  <strong>bot:</strong> false<br>
  <strong>smallBoban:</strong> !equal 299 299<br>
  <strong>bot:</strong> true
</blockquote>