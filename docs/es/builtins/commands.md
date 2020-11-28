## Fun Commands
### Desaparecer

`!vanish`

!> El permiso predeterminado es **EVERYONE**

#### Parámetros

- No se requieren parámetros para este comando

#### Ejemplos

<blockquote>
  <strong>user:</strong> !vanish<br>
  <strong>twitch:</strong> bot timed out user for 1 second. razón: VANISH.
</blockquote>

### Obtener comandos de canal

`!commands`

!> El permiso predeterminado es **EVERYONE**

#### Parámetros

- No se requieren parámetros para este comando

#### Ejemplos

<blockquote>
  <strong>user:</strong> !commands<br>
  <strong>bot:</strong> user | http://alphabot.wtf/streamerName/commands.
</blockquote>

## Comandos de moderación
### Ban

`![un]ban @<nombre de usuario> (<razón>)`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- `nombre de usuario`
  - *necesario* - debe ser un nombre de usuario de twitch válido
- `razón`
  - *opcional string* - se puede usar para agregar una razón para la prohibición
  - *valor por defecto:* - cuerda vacía

#### Ejemplos

<blockquote>
  <strong>baduser:</strong> F**k you<br>
  <strong>moderador:</strong> !ban @baduser cursing<br>
  <strong>bot:</strong> @baduser, has been banned.
</blockquote>

<blockquote>
  <strong>user:</strong> I am so cool<br>
  <strong>moderador:</strong> !ban @user ops i accidentally banned you<br>
  <strong>bot:</strong> @user, has been banned.
  <strong>moderador:</strong> !unban @user<br>
  <strong>bot:</strong> @user, has been unbanned.
</blockquote>

### Timeout

`!timeout @<nombre de usuario> (<duración>)`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- `nombre de usuario`
  - *necesario* - debe ser un nombre de usuario de twitch válido
- `duración`
  - *opcional number* - Seconds user should be timedout
  - *valor por defecto:* 300

#### Ejemplos

<blockquote>
  <strong>user:</strong> Can you play another game? This is so boring ResidentSleeper<br>
  <strong>moderador:</strong> !timeout @user 400<br>
  <strong>twitch:</strong> bot timed out user for 400 seconds.
</blockquote>

### Clear

`!clear`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- No se requieren parámetros para este comando

#### Example

<blockquote>
  <strong>moderador: </strong>!clear<br>
  <strong>twitch: </strong> bot cleared chat for this room.
</blockquote>

### Commercial

`!commercial (<duración>)`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- `duración`
  - *one of these numbers 30, 60, 90, 120, 150, 180* - para establecer la duración de la pausa comercial
  - *valor por defecto:* 30

#### Example

<blockquote>
  <strong>moderador:</strong> !commercial 180<br>
  <strong>twitch:</strong> bot running ad for x seconds.
</blockquote>

### Emoteonly

`!emoteonly[off]`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- No se requieren parámetros para este comando

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !emoteonly<br>
  <strong>twitch:</strong> bot enabled emote-only mode for this room.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !emoteonlyoff<br>
  <strong>twitch:</strong> bot disabled emote-only for this room.
</blockquote>

### Followersonly

`!followersonly[off] (<duración>)`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- `duración`
  - *opcional number* - Número de minutos que se debe seguir a un usuario para escribir en el chat
  - *valor por defecto:* 30


#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !followersonly 40<br>
  <strong>twitch:</strong> bot enabled 40 minutes followers-only mode for this room.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !followersonlyoff <br>
  <strong>twitch:</strong> bot disabled followers-only mode for this room.
</blockquote>

### Host

`![un]host @<channel>`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- `channel`
  - *necesario* - Nombre de usuario de twitch válido

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !host scriptx<br>
  <strong>twitch:</strong> streamer now hosting scriptx.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !unhost <br>
  <strong>twitch:</strong> streamer stopped hosting scriptx.
</blockquote>

### Mod

`![un]mod @<nombre de usuario>`

!> El permiso predeterminado es **SUPERMODERATOR**

#### Parámetros

- `nombre de usuario`
  - *necesario* - Nombre de usuario de twitch válido

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !mod scriptx<br>
  <strong>twitch:</strong> bot granted moderator privileges to scriptx.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !unmod scriptx<br>
  <strong>twitch:</strong> bot removed scriptx as a moderator of this channel.
</blockquote>

### Vip

`![un]vip @<nombre de usuario>`

!> El permiso predeterminado es **SUPERMODERATOR**

#### Parámetros

- `nombre de usuario`
  - *necesario* - Nombre de usuario de twitch válido

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !vip scriptx<br>
  <strong>twitch:</strong> bot granted vip privileges to scriptx.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !unmod scriptx<br>
  <strong>twitch:</strong> bot removed scriptx as a vip of this channel.
</blockquote>

### R9kbeta

`!r9kbeta[off]`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- No se requieren parámetros para este comando

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !r9kbeta<br>
  <strong>twitch:</strong> bot enabled unique-chat mode for this room.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !r9kbetaoff<br>
  <strong>twitch:</strong> bot disabled unique-chat mode for this room.
</blockquote>

### Slow

`!slow[off]`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- `duración`
  - *opcional number* - Número de segundos que un usuario debe esperar hasta enviar un nuevo mensaje.
  - *valor por defecto:* 30

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !slow 40<br>
  <strong>twitch:</strong> bot enabled 40-second slow mode for this room.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled slow mode for this room.
</blockquote>

### Subscribers

`!subscribers[off]`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- No se requieren parámetros para este comando

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !subscribers<br>
  <strong>twitch:</strong> bot enabled subscribers-only mode for this room.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !slowoff<br>
  <strong>twitch:</strong> bot disabled subscribers-only mode for this room.
</blockquote>

### Banphrase

`!banphrase [add|remove] <banphrase>`

!> El permiso predeterminado es **MODERATOR**

#### Parámetros

- `add or remove`
  - *necesario* - Opción de agregar o eliminar una frase de texto
- `banphrase`
  - *necesario* - La frase de texto que se agregará o eliminará

#### Ejemplos

<blockquote>
  <strong>moderador:</strong> !banphrase add you are not cool<br>
  <strong>goatViewer:</strong> Streamer you are not cool<br>
  <strong>twitch:</strong> bot timed out goatViewer for 400 seconds.
</blockquote>

<blockquote>
  <strong>moderador:</strong> !banphrase remove you are not cool<br>
  <strong>lilGoatViewer:</strong> Streamer you are not cool<br>
  <strong>goatViewer:</strong> Hahah I can still write
</blockquote>