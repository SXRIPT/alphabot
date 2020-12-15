# Пользовательские команды

## Добавить новую команду

`!command add <prefix><command_name> <response>`

!> Разрешение по умолчанию - **МОДЕРАТОР**

### Параметры

- `префикс`
   - *обязательно* - может быть любым специальным символом
- `имя_команды`
   - *обязательно* - имя вашей команды
- `ответ`
   - *обязательно* - ответ, который должен дать бот при срабатывании.


### Примеры

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

## Удалить команду

`!command remove <prefix><command_name>`

!> Разрешение по умолчанию - **МОДЕРАТОР**

### Параметры

- `префикс`
   - *обязательно* - префикс удаляемой команды
- `имя_команды`
   - *обязательно* - имя удаляемой команды


### Примеры

<blockquote>
  <strong>yourModerator:</strong> !command remove !no yes<br>
  <strong>bot:</strong> @yourModerator, successfully removed command no.<br>
  <strong>user1337:</strong> !no<br>
  <strong>user1337:</strong> nothing happend :c<br>
</blockquote>

## Обновить команду

`!command update <prefix><command_name> <response>`

!> Разрешение по умолчанию - **МОДЕРАТОР**

### Параметры

- `префикс`
   - *обязательно* - может быть любым специальным символом
- `имя_команды`
   - *обязательно* - имя вашей команды
- `ответ`
   - *обязательно* - ответ, который должен дать бот при срабатывании.


### Примеры

<blockquote>
  <strong>yourModerator:</strong> !command add !hey gello<br>
  <strong>bot:</strong> @yourModerator, successfully added command hey.<br>
  <strong>yourModerator:</strong> !command update !hey hello<br>
  <strong>bot:</strong> @yourModerator, successfully updated command hey.<br>
  <strong>user1337:</strong> !hello<br>
  <strong>bot:</strong> hello<br>
</blockquote>

## Показать команду

`!command show <prefix><command_name>`

!> Разрешение по умолчанию - **МОДЕРАТОР**

### Параметры

- `префикс`
   - *обязательно* - может быть любым специальным символом
- `имя_команды`
   - *обязательно* - имя вашей команды


### Примеры

<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${username}, rolled a ${random 1 10}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>yourModerator:</strong> !command show !dice<br>
  <strong>bot:</strong> @yourModerator, ${username}, rolled a ${random 1 10}<br>
</blockquote>