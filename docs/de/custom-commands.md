# Benutzerdefinierte Befehle

## Neuen Befehl hinzufügen

`!command add <prefix><command_name> <response>`

!> Standardberechtigung ist **MODERATOR**

### Parameter

- `prefix`
   - *erforderlich* - kann ein beliebiges Sonderzeichen sein
- `command_name`
   - *erforderlich* - der Name für Ihren Befehl
- `response`
   - *erforderlich* - die Antwort, die der Bot beim Auslösen geben soll.


### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !command add !no yes<br>
  <strong>bot:</strong> @yourModerator, successfully added command no.<br>
  <strong>user1337:</strong> !no<br>
  <strong>bot:</strong> yes
</blockquote>


<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${username} rolled a ${random 1 6}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>user150:</strong> !dice<br>
  <strong>bot:</strong> @user150 rolled a 4
</blockquote>

## Befehl entfernen

`!command remove <prefix><command_name>`

!> Standardberechtigung ist **MODERATOR**

### Parameter

- `prefix`
   - *erforderlich* - das Präfix des zu entfernenden Befehls
- `command_name`
   - *erforderlich* - Der Name des zu entfernenden Befehls


### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !command remove !no yes<br>
  <strong>bot:</strong> @yourModerator, successfully removed command no.<br>
  <strong>user1337:</strong> !no<br>
  <strong>user1337:</strong> nothing happend :c<br>
</blockquote>

## Befehl aktualisieren

`!command update <prefix><command_name> <response>`

!> Standardberechtigung ist **MODERATOR**

### Parameter

- `prefix`
   - *erforderlich* - kann ein beliebiges Sonderzeichen sein
- `command_name`
   - *erforderlich* - der Name für Ihren Befehl
- `response`
   - *erforderlich* - die Antwort, die der Bot beim Auslösen geben soll.


### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !command add !hey gello<br>
  <strong>bot:</strong> @yourModerator, successfully added command hey.<br>
  <strong>yourModerator:</strong> !command update !hey hello<br>
  <strong>bot:</strong> @yourModerator, successfully updated command hey.<br>
  <strong>user1337:</strong> !hello<br>
  <strong>bot:</strong> hello<br>
</blockquote>

## Befehl anzeigen

`!command show <prefix><command_name>`

!> Standardberechtigung ist **MODERATOR**

### Parameter

- `prefix`
  - *erforderlich* - kann ein beliebiges Sonderzeichen sein
- `command_name`
  - *erforderlich* - der Name für Ihren Befehl


### Beispiele

<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${username}, rolled a ${random 1 10}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>yourModerator:</strong> !command show !dice<br>
  <strong>bot:</strong> @yourModerator, ${username}, rolled a ${random 1 10}<br>
</blockquote>