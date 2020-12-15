# Переменные

Переменные можно использовать для пользовательских команд.

## Аргументы

`${1}-${n}`

При создании команды можно использовать аргументы. По сути, они принимают n-й аргумент, когда пользователь вызывает сообщение.

### Примеры
Например, мы создаем команду, которая возвращает третий аргумент аргументов, предоставленных пользователем. Взгляните на этот сценарий чата:
<blockquote>
  <strong>yourModerator:</strong> !command add !argsGuide ${3}<br>
  <strong>bot:</strong> @yourModerator, successfully added command argsGuide.<br>
  <strong>funnyDude:</strong> !argsGuide first second third<br>
  <strong>bot:</strong> third
</blockquote>

## Случайно

`${random}`

Random вернет случайное число из двух предоставленных.

### Примеры
Например, мы создаем команду, имитирующую игральные кости.
<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${random 1 6}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>smallBoban:</strong> !dice<br>
  <strong>bot:</strong> 3<br>
  <strong>ldancer500:</strong> !dice<br>
  <strong>bot:</strong> 6
</blockquote>

## URL

`${url}`

Url вернет URL-адрес канала.

### Примеры
Например, мы создаем команду, которая вернет URL-адрес канала.
<blockquote>
  <strong>streamer:</strong> !command add !url ${url}<br>
  <strong>bot:</strong> @streamer, successfully added command url.<br>
  <strong>bibiNator99:</strong> !url<br>
  <strong>bot:</strong> https://twitch.tv/streamer
</blockquote>

## Имя пользователя

`${username}`

Имя пользователя вернет имя пользователя для входа.

### Примеры
Например, мы создаем команду, которая вернет имя пользователя.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Отображаемое имя

`${display}`

Дисплей вернет отображаемое имя пользователя.

### Примеры
Например, мы создаем команду, которая вернет отображаемое имя.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Зрители

`${viewers}`

Зрители вернут текущее количество зрителей, если стример активен. Если стример не в сети, он вернет «Streamer not live».

### Примеры
Например, мы создаем команду, которая вернет количество зрителей.
<blockquote>
  <strong>streamer:</strong> !command add !viewers ${viewers}<br>
  <strong>bot:</strong> @streamer, successfully added command viewers.<br>
  <strong>bob390:</strong> !viewers<br>
  <strong>bot:</strong> 50
</blockquote>

## Игра

`${game}`

Игра вернет текущую категорию трансляции, если она транслируется. Если канал не в сети, он вернет «Streamer not live».

### Примеры
Например, мы создаем команду, которая вернет текущую категорию потока.
<blockquote>
  <strong>streamer:</strong> !command add !cat ${game}<br>
  <strong>bot:</strong> @streamer, successfully added command cat.<br>
  <strong>bob390:</strong> !cat<br>
  <strong>bot:</strong> Just Chatting
</blockquote>

## Заглавие

`${title}`

Title вернет текущий заголовок трансляции, если она транслируется. Если канал не в сети, он вернет «Streamer not live».

### Примеры
Например, мы создаем команду, которая вернет текущий заголовок потока.
<blockquote>
  <strong>streamer:</strong> !command add !title ${title}<br>
  <strong>bot:</strong> @streamer, successfully added command title.<br>
  <strong>niko2010:</strong> !title<br>
  <strong>bot:</strong> New Personal Best today PogChamp
</blockquote>

## Язык

`${language}`

Язык вернет текущий язык, на котором установлен канал, это работает, только если канал активен. Если канал не в сети, он вернет «Streamer not live».

### Примеры
Например, мы создаем команду, которая вернет текущий язык потока.
<blockquote>
  <strong>streamer:</strong> !command add !language ${language}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tinaProGamerin:</strong> !language<br>
  <strong>bot:</strong> EN  
</blockquote>

## Время работы

`${uptime}`

Uptime вернет текущее время работы канала, если он работает. Если канал не в сети, он вернет «Streamer not live».

### Примеры
Например, мы создаем команду, которая вернет текущее время безотказной работы потока.
<blockquote>
  <strong>streamer:</strong> !command add !uptime ${uptime}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tomsy19:</strong> !uptime<br>
  <strong>bot:</strong> 5 hours 36 minutes
</blockquote>


## Больше

`${greater}`

Больше вернет большее из двух предоставленных значений.

### Примеры
Например, мы создаем команду, которая принимает два аргумента. Взгляните на этот сценарий чата:
<blockquote>
  <strong>yourModerator:</strong> !command add !greater ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command greater.<br>
  <strong>funnyDude:</strong> !greater 299 5400<br>
  <strong>bot:</strong> 5400
</blockquote>

## Меньше

`${smaller}`

Меньший вернет меньшее из двух предоставленных значений.

### Примеры
Например, мы создаем команду, которая принимает два аргумента. Взгляните на этот сценарий чата:
<blockquote>
  <strong>yourModerator:</strong> !command add !smaller ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command smaller.<br>
  <strong>smallBoban:</strong> !smaller 299 5400<br>
  <strong>bot:</strong> 299
</blockquote>

## Равно

`${equal}`

Equal вернет true или false в зависимости от совпадения двух предоставленных значений.

### Примеры
Например, мы создаем команду, которая принимает два аргумента. Взгляните на этот сценарий чата:
<blockquote>
  <strong>yourModerator:</strong> !command add !equal ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command equal.<br>
  <strong>smallBoban:</strong> !equal 299 5400<br>
  <strong>bot:</strong> false<br>
  <strong>smallBoban:</strong> !equal 299 299<br>
  <strong>bot:</strong> true
</blockquote>