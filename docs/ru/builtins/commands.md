## Веселые команды
### Исчезнуть

`!vanish`

!> Разрешение по умолчанию - **ВСЕ**

#### Параметры

- Для этой команды не требуются параметры

#### Примеры

<blockquote>
  <strong>funnyDude:</strong> !vanish<br>
  <strong>twitch:</strong> bot timed out funnyDude for 1 second. Reason: VANISH.
</blockquote>

### Получить команды канала

`!commands`

!> Разрешение по умолчанию - **ВСЕ**

#### Параметры

- Для этой команды не требуются параметры

#### Примеры

<blockquote>
  <strong>interestedViewer:</strong> !commands<br>
  <strong>bot:</strong> interestedViewer | http://alphabot.wtf/streamerName/commands.
</blockquote>

## Команды модерации
### Запрет

`![un]ban @<username> (<reason>)`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- `имя пользователя`
   - *обязательно* - должно быть действующее имя пользователя twitch
- `причина`
   - *необязательная строка* - можно использовать для добавления причины бана
   - *значение по умолчанию:* пустая строка

#### Примеры

<blockquote>
  <strong>baduser:</strong> F**k you<br>
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

### Тайм-аут

`!timeout @<username> (<duration>)`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- `имя пользователя`
   - *обязательно* - должно быть действующее имя пользователя twitch
- `продолжительность`
   - *необязательное число* - время ожидания секунд у пользователя должно быть истекло
   - *значение по умолчанию:* 300

#### Примеры

<blockquote>
  <strong>annoyinggUser:</strong> Can you play another game? This is so boring ResidentSleeper<br>
  <strong>yourModerator:</strong> !timeout @annoyingUser 400<br>
  <strong>twitch:</strong> bot timed out annoyinggUser for 400 seconds.
</blockquote>

### Очистить

`!clear`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- Для этой команды не требуются параметры

#### Пример

<blockquote>
  <strong>yourModerator: </strong>!clear<br>
  <strong>twitch: </strong> bot cleared chat for this room.
</blockquote>

### Коммерческий

`!commercial (<duration>)`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- `продолжительность`
   - *одно из этих чисел 30, 60, 90, 120, 150, 180* - для установки продолжительности рекламной паузы
   - *значение по умолчанию:* 30

#### Пример

<blockquote>
  <strong>yourModerator:</strong> !commercial 180<br>
  <strong>twitch:</strong> bot running ad for x seconds.
</blockquote>

### Emoteonly

`!emoteonly[off]`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- Для этой команды не требуются параметры

#### Примеры

<blockquote>
  <strong>yourModerator:</strong> !emoteonly<br>
  <strong>twitch:</strong> bot enabled emote-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !emoteonlyoff<br>
  <strong>twitch:</strong> bot disabled emote-only for this room.
</blockquote>

### Только для подписчиков

`!followersonly[off] (<duration>)`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- `продолжительность`
   - *необязательное число* - количество минут, в течение которых пользователь должен писать в чате
   - *значение по умолчанию:* 30


#### Примеры

<blockquote>
  <strong>yourModerator:</strong> !followersonly 40<br>
  <strong>twitch:</strong> bot enabled 40 minutes followers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !followersonlyoff <br>
  <strong>twitch:</strong> bot disabled followers-only mode for this room.
</blockquote>

### Хост

`![un]host @<channel>`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- `канал`
   - *обязательно* - Действительное имя пользователя twitch

#### Примеры

<blockquote>
  <strong>yourModerator:</strong> !host scriptx<br>
  <strong>twitch:</strong> streamer now hosting scriptx.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !unhost <br>
  <strong>twitch:</strong> streamer stopped hosting scriptx.
</blockquote>

### Мод

`![un]mod @<username>`

!> Разрешение по умолчанию - **СУПЕРМОДЕРАТОР**

#### Параметры

- `имя пользователя`
   - *обязательно* - Действительное имя пользователя twitch

#### Примеры

<blockquote>
  <strong>yourModerator:</strong> !mod scriptx<br>
  <strong>twitch:</strong> bot granted moderator privileges to scriptx.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !unmod scriptx<br>
  <strong>twitch:</strong> bot removed scriptx as a moderator of this channel.
</blockquote>

### VIP

`![un]vip @<username>`

!> Разрешение по умолчанию - **СУПЕРМОДЕРАТОР**

#### Параметры

- `имя пользователя`
   - *обязательно* - Действительное имя пользователя twitch

#### Примеры

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

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- Для этой команды не требуются параметры

#### Примеры

<blockquote>
  <strong>yourModerator:</strong> !r9kbeta<br>
  <strong>twitch:</strong> bot enabled unique-chat mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !r9kbetaoff<br>
  <strong>twitch:</strong> bot disabled unique-chat mode for this room.
</blockquote>

### Медленный

`!slow[off]`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- `продолжительность`
   - *необязательное число* - количество секунд, в течение которых пользователь должен ждать отправки нового сообщения.
   - *значение по умолчанию:* 30

#### Примеры

<blockquote>
  <strong>yourModerator:</strong> !slow 40<br>
  <strong>twitch:</strong> bot enabled 40-second slow mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled slow mode for this room.
</blockquote>

### Подписчики

`!subscribers[off]`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- Для этой команды не требуются параметры

#### Примеры

<blockquote>
  <strong>yourModerator:</strong> !subscribers<br>
  <strong>twitch:</strong> bot enabled subscribers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled subscribers-only mode for this room.
</blockquote>

### Банфраза

`!banphrase [add|remove] <banphrase>`

!> Разрешение по умолчанию - **МОДЕРАТОР**

#### Параметры

- `добавить или удалить`
   - *обязательно* - Возможность добавить или удалить банфразу
- `банфраза`
   - *обязательно* - банфраза, которую нужно добавить или удалить

#### Примеры

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