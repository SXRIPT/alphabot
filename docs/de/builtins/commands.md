## Fun-Befehle
### Verschwinden

`!vanish`

!> Standardberechtigung ist **JEDER**

#### Parameter

- Für diesen Befehl sind keine Parameter erforderlich

#### Beispiele

<blockquote>
  <strong>funnyDude:</strong> !vanish<br>
  <strong>twitch:</strong> bot timed out funnyDude for 1 second. Reason: VANISH.
</blockquote>

### Kanalbefehle abrufen

`!commands`

!> Standardberechtigung ist **JEDER**

#### Parameter

- Für diesen Befehl sind keine Parameter erforderlich

#### Beispiele

<blockquote>
  <strong>interestedViewer:</strong> !commands<br>
  <strong>bot:</strong> interestedViewer | http://alphabot.wtf/streamerName/commands.
</blockquote>

## Moderationsbefehle
### Ban

`![un]ban @<username> (<reason>)`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- `Benutzername`
   - *erforderlich* - muss ein gültiger zuckender Benutzername sein
- `reason`
   - *optionaler String* - kann verwendet werden, um einen Grund für das Verbot hinzuzufügen
   - *Standardwert:* leere Zeichenfolge

#### Beispiele

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

### Auszeit

`!timeout @<username> (<duration>)`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- `username`
  - *erforderlich* - muss ein gültiger zuckender Benutzername sein
- `duration`
  - *optionale Nummer* - Der Benutzer sollte eine Zeitüberschreitung von Sekunden haben
   - *Standardwert:* 300

#### Beispiele

<blockquote>
  <strong>annoyinggUser:</strong> Can you play another game? This is so boring ResidentSleeper<br>
  <strong>yourModerator:</strong> !timeout @annoyingUser 400<br>
  <strong>twitch:</strong> bot timed out annoyinggUser for 400 seconds.
</blockquote>

### Klar

`!clear`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- Für diesen Befehl sind keine Parameter erforderlich

#### Beispiel

<blockquote>
  <strong>yourModerator: </strong>!clear<br>
  <strong>twitch: </strong> bot cleared chat for this room.
</blockquote>

### Kommerziell

`!commercial (<duration>)`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- `duration`
  - *eine dieser Nummern 30, 60, 90, 120, 150, 180* - um die Dauer der Werbeunterbrechung festzulegen
  - *Standardwert:* 30

#### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !commercial 180<br>
  <strong>twitch:</strong> bot running ad for x seconds.
</blockquote>

### Emoteonly

`!emoteonly[off]`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- Für diesen Befehl sind keine Parameter erforderlich

#### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !emoteonly<br>
  <strong>twitch:</strong> bot enabled emote-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !emoteonlyoff<br>
  <strong>twitch:</strong> bot disabled emote-only for this room.
</blockquote>

### Followersonly

`!followersonly[off] (<duration>)`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- `duration`
  - *optionale Nummer* - Anzahl der Minuten, die ein Benutzer befolgen muss, um im Chat zu schreiben
  - *Standardwert:* 30


#### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !followersonly 40<br>
  <strong>twitch:</strong> bot enabled 40 minutes followers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !followersonlyoff <br>
  <strong>twitch:</strong> bot disabled followers-only mode for this room.
</blockquote>

### Host

`![un]host @<channel>`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- `channel`
  - *erforderlich* - Gültiger zuckender Benutzername

#### Beispiele

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

!> Standardberechtigung ist **SUPERMODERATOR**

#### Parameters

- `username`
- *erforderlich* - Gültiger zuckender Benutzername

#### Beispiele

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

!> Standardberechtigung ist **SUPERMODERATOR**

#### Parameter

- `username`
  - *erforderlich* - Gültiger zuckender Benutzername

#### Beispiele

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

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- Für diesen Befehl sind keine Parameter erforderlich

#### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !r9kbeta<br>
  <strong>twitch:</strong> bot enabled unique-chat mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !r9kbetaoff<br>
  <strong>twitch:</strong> bot disabled unique-chat mode for this room.
</blockquote>

### Slow

`!slow[off]`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- `duration`
  - *optionale Nummer* - Anzahl der Sekunden, die ein Benutzer warten muss, bis eine neue Nachricht gesendet wird.
  - *Standardwert:* 30

#### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !slow 40<br>
  <strong>twitch:</strong> bot enabled 40-second slow mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled slow mode for this room.
</blockquote>

### Abonnenten/Abonnentinnen

`!subscribers[off]`

!> Standardberechtigung ist **MODERATOR**

#### Parameter

- Für diesen Befehl sind keine Parameter erforderlich

#### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !subscribers<br>
  <strong>twitch:</strong> bot enabled subscribers-only mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled subscribers-only mode for this room.
</blockquote>

### Banphrase

`!banphrase [add|remove] <banphrase>`

!> Standardberechtigung ist **MODERATOR**

#### Parameter
- `add or remove`
  - *erforderlich* - Option zum Hinzufügen oder Entfernen einer Banphrase
- `banphrase`
  - *erforderlich* - Die Banphrase, die hinzugefügt oder entfernt werden soll

#### Beispiele

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