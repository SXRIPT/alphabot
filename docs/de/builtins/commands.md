## Fun Commands
### Vanish

`!vanish`

!> Default permission is **EVERYONE**

#### Parameters

- No parameters required for this command

#### Examples

<blockquote>
  <strong>funnyDude:</strong> !vanish<br>
  <strong>twitch:</strong> bot timed out funnyDude for 1 second. Reason: VANISH.
</blockquote>

### Get Channel Commands

`!commands`

!> Default permission is **EVERYONE**

#### Parameters

- No parameters required for this command

#### Examples

<blockquote>
  <strong>interestedViewer:</strong> !commands<br>
  <strong>bot:</strong> interestedViewer | http://alphabot.wtf/streamerName/commands.
</blockquote>

## Moderation Commands
### Ban

`![un]ban @<username> (<reason>)`

!> Default permission is **MODERATOR**

#### Parameters

- `username`
  - *required* - must be a valid twitch username
- `reason`
  - *optional string* - can be used to add a reason for the ban
  - *default value:* empty string

#### Examples

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

### Timeout

`!timeout @<username> (<duration>)`

!> Default permission is **MODERATOR**

#### Parameters

- `username`
  - *required* - must be a valid twitch username
- `duration`
  - *optional number* - Seconds user should be timedout
  - *default value:* 300

#### Examples

<blockquote>
  <strong>annoyinggUser:</strong> Can you play another game? This is so boring ResidentSleeper<br>
  <strong>yourModerator:</strong> !timeout @annoyingUser 400<br>
  <strong>twitch:</strong> bot timed out annoyinggUser for 400 seconds.
</blockquote>

### Clear

`!clear`

!> Default permission is **MODERATOR**

#### Parameters

- No parameters required for this command

#### Example

<blockquote>
  <strong>yourModerator: </strong>!clear<br>
  <strong>twitch: </strong> bot cleared chat for this room.
</blockquote>

### Commercial

`!commercial (<duration>)`

!> Default permission is **MODERATOR**

#### Parameters

- `duration`
  - *one of these numbers 30, 60, 90, 120, 150, 180* - to set the duration of the commercial break
  - *default value:* 30

#### Example

<blockquote>
  <strong>yourModerator:</strong> !commercial 180<br>
  <strong>twitch:</strong> bot running ad for x seconds.
</blockquote>

### Emoteonly

`!emoteonly[off]`

!> Default permission is **MODERATOR**

#### Parameters

- No parameters required for this command

#### Examples

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

!> Default permission is **MODERATOR**

#### Parameters

- `duration`
  - *optional number* - Number of minutes a user has to be followed to write in Chat
  - *default value:* 30


#### Examples

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

!> Default permission is **MODERATOR**

#### Parameters

- `channel`
  - *required* - Valid twitch username name

#### Examples

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

!> Default permission is **SUPERMODERATOR**

#### Parameters

- `username`
  - *required* - Valid twitch username name

#### Examples

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

!> Default permission is **SUPERMODERATOR**

#### Parameters

- `username`
  - *required* - Valid twitch username name

#### Examples

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

!> Default permission is **MODERATOR**

#### Parameters

- No parameters required for this command

#### Examples

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

!> Default permission is **MODERATOR**

#### Parameters

- `duration`
  - *optional number* - Number of seconds a user has to wait until sending a new message.
  - *default value:* 30

#### Examples

<blockquote>
  <strong>yourModerator:</strong> !slow 40<br>
  <strong>twitch:</strong> bot enabled 40-second slow mode for this room.
</blockquote>

<blockquote>
  <strong>yourModerator:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled slow mode for this room.
</blockquote>

### Subscribers

`!subscribers[off]`

!> Default permission is **MODERATOR**

#### Parameters

- No parameters required for this command

#### Examples

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

!> Default permission is **MODERATOR**

#### Parameters

- `add or remove`
  - *required* - Option to either add or remove a banphrase
- `banphrase`
  - *required* - The banphrase to be added or removed

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