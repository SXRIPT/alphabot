# Custom Commands

## Add a new Command

`!command add <prefix><command_name> <response>`

!> Default permission is **MODERATOR**

### Parameters

- `prefix`
  - *required* - can be any special character
- `command_name`
  - *required* - the name for your command
- `response`
  - *required* - the response the bot should give when triggerd.


### Examples

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

## Remove a Command

`!command remove <prefix><command_name>`

!> Default permission is **MODERATOR**

### Parameters

- `prefix`
  - *required* - the prefix of the command to be removed
- `command_name`
  - *required* - the name of the command to be removed


### Examples

<blockquote>
  <strong>yourModerator:</strong> !command remove !no yes<br>
  <strong>bot:</strong> @yourModerator, successfully removed command no.<br>
  <strong>user1337:</strong> !no<br>
  <strong>user1337:</strong> nothing happend :c<br>
</blockquote>

## Update a Command

`!command update <prefix><command_name> <response>`

!> Default permission is **MODERATOR**

### Parameters

- `prefix`
  - *required* - can be any special character
- `command_name`
  - *required* - the name for your command
- `response`
  - *required* - the response the bot should give when triggerd.


### Examples

<blockquote>
  <strong>yourModerator:</strong> !command add !hey gello<br>
  <strong>bot:</strong> @yourModerator, successfully added command hey.<br>
  <strong>yourModerator:</strong> !command update !hey hello<br>
  <strong>bot:</strong> @yourModerator, successfully updated command hey.<br>
  <strong>user1337:</strong> !hello<br>
  <strong>bot:</strong> hello<br>
</blockquote>

## Show a Command

`!command show <prefix><command_name>`

!> Default permission is **MODERATOR**

### Parameters

- `prefix`
  - *required* - can be any special character
- `command_name`
  - *required* - the name for your command


### Examples

<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${username}, rolled a ${random 1 10}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>yourModerator:</strong> !command show !dice<br>
  <strong>bot:</strong> @yourModerator, ${username}, rolled a ${random 1 10}<br>
</blockquote>