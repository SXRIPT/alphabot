## Eğlenceli Komutlar
### Kaybolmak

`!vanish`

!> Varsayılan izin **HERKES**

#### Parametreler

- Bu komut için parametre gerekmez

#### Örnekler

<blockquote>
  <strong>funnyDude:</strong> !vanish<br>
  <strong>twitch:</strong> bot timed out funnyDude for 1 second. Reason: VANISH.
</blockquote>

### Kanal Komutlarını Alın

`!commands`

!> Varsayılan izin **HERKES**

#### Parametreler

- Bu komut için parametre gerekmez

#### Örnekler

<blockquote>
  <strong>interestedViewer:</strong> !commands<br>
  <strong>bot:</strong> interestedViewer | http://alphabot.wtf/streamerName/commands.
</blockquote>

## Moderasyon Komutları
### Yasakla

`![un]ban @<username> (<reason>)`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- `username`
  - *gereklidir* - geçerli bir twitch kullanıcı adı olmalıdır
- `reason`
  - *isteğe bağlı dize* - yasak için bir neden eklemek için kullanılabilir
  - *varsayılan değer:* boş dize

#### Örnekler

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

### Zaman aşımı

`!timeout @<username> (<duration>)`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- `username`
  - *gereklidir* - geçerli bir twitch kullanıcı adı olmalıdır
- `duration`
  - *optional number* - Saniye kullanıcı zaman aşımına uğramalıdır
  - *varsayılan değer:* 300

#### Örnekler

<blockquote>
  <strong>annoyinggUser:</strong> Can you play another game? This is so boring ResidentSleeper<br>
  <strong>yourModerator:</strong> !timeout @annoyingUser 400<br>
  <strong>twitch:</strong> bot timed out annoyinggUser for 400 seconds.
</blockquote>

### Açık

`!clear`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- Bu komut için parametre gerekmez

#### Örnekler

<blockquote>
  <strong>yourModerator: </strong>!clear<br>
  <strong>twitch: </strong> bot cleared chat for this room.
</blockquote>

### Ticari

`!commercial (<duration>)`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- `duration`
  - *bu numaralardan biri 30, 60, 90, 120, 150, 180* - reklam arası süresini ayarlamak için
  - *varsayılan değer:* 30

#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !commercial 180<br>
  <strong>twitch:</strong> bot running ad for x seconds.
</blockquote>

### Yalnızca ifade

`!emoteonly[off]`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- Bu komut için parametre gerekmez

#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !emoteonly<br>
  <strong>twitch:</strong> bot enabled emote-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !emoteonlyoff<br>
  <strong>twitch:</strong> bot disabled emote-only for this room.
</blockquote>

### Yalnızca İzleyiciler

`!followersonly[off] (<duration>)`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- `duration`
  - *isteğe bağlı numara* - Chat'te yazmak için bir kullanıcının takip etmesi gereken dakika sayısı
  - *varsayılan değer:* 30


#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !followersonly 40<br>
  <strong>twitch:</strong> bot enabled 40 minutes followers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !followersonlyoff <br>
  <strong>twitch:</strong> bot disabled followers-only mode for this room.
</blockquote>

### Ev sahibi

`![un]host @<channel>`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- `channel`
  - *gereklidir* - Geçerli twitch kullanıcı adı adı

#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !host scriptx<br>
  <strong>twitch:</strong> streamer now hosting scriptx.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !unhost <br>
  <strong>twitch:</strong> streamer stopped hosting scriptx.
</blockquote>

### Mod

`![un]mod @<username>`

!> Varsayılan izin **SÜPERMODERATÖR**

#### Parametreler

- `username`
  - *gereklidir* - Geçerli twitch kullanıcı adı adı

#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !mod scriptx<br>
  <strong>twitch:</strong> bot granted moderator privileges to scriptx.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !unmod scriptx<br>
  <strong>twitch:</strong> bot removed scriptx as a moderator of this channel.
</blockquote>

### Vip

`![un]vip @<username>`

!> Varsayılan izin **SÜPERMODERATÖR**

#### Parametreler

- `username`
  - *gereklidir* - Geçerli twitch kullanıcı adı adı

#### Örnekler

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

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- Bu komut için parametre gerekmez

#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !r9kbeta<br>
  <strong>twitch:</strong> bot enabled unique-chat mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !r9kbetaoff<br>
  <strong>twitch:</strong> bot disabled unique-chat mode for this room.
</blockquote>

### Yavaş

`!slow[off]`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- `duration`
  - *isteğe bağlı numara* - Bir kullanıcının yeni bir mesaj gönderene kadar beklemesi gereken saniye sayısı.
  - *varsayılan değer:* 30

#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !slow 40<br>
  <strong>twitch:</strong> bot enabled 40-second slow mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled slow mode for this room.
</blockquote>

### Aboneler

`!subscribers[off]`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- Bu komut için parametre gerekmez

#### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !subscribers<br>
  <strong>twitch:</strong> bot enabled subscribers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled subscribers-only mode for this room.
</blockquote>

### İfade

`!banphrase [add|remove] <banphrase>`

!> Varsayılan izin **MODERATÖR**

#### Parametreler

- `add or remove`
  - *gereklidir* - Banphrase ekleme veya kaldırma seçeneği
- `banphrase`
  - *gereklidir* - Eklenecek veya kaldırılacak banphrase

#### Örnekler

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