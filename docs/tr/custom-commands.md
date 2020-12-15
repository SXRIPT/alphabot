# Özel Komutlar

## Yeni bir Komut ekle

`!command add <prefix><command_name> <response>`

!> Varsayılan izin **MODERATÖR**

### Parametreler

- `prefix`
  - *gereklidir* - herhangi bir özel karakter olabilir
- `command_name`
  - *gereklidir* - komutunuzun adı
- `response`
  - *gereklidir* - teknenin tetiklendiğinde vermesi gereken yanıt.


### Örnekler

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

## Bir Komutu Kaldır

`!command remove <prefix><command_name>`

!> Varsayılan izin **MODERATÖR**

### Parametreler

- `prefix`
  - *gereklidir* - kaldırılacak komutun öneki
- `command_name`
  - *gereklidir* - kaldırılacak komutun adı


### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !command remove !no yes<br>
  <strong>bot:</strong> @yourModerator, successfully removed command no.<br>
  <strong>user1337:</strong> !no<br>
  <strong>user1337:</strong> nothing happend :c<br>
</blockquote>

## Bir Komutu Güncelleyin

`!command update <prefix><command_name> <response>`

!> Varsayılan izin **MODERATÖR**

### Parametreler

- `prefix`
  - *gereklidir* - herhangi bir özel karakter olabilir
- `command_name`
  - *gereklidir* - komutunuzun adı
- `response`
  - *gereklidir* - teknenin tetiklendiğinde vermesi gereken yanıt.


### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !command add !hey gello<br>
  <strong>bot:</strong> @yourModerator, successfully added command hey.<br>
  <strong>yourModerator:</strong> !command update !hey hello<br>
  <strong>bot:</strong> @yourModerator, successfully updated command hey.<br>
  <strong>user1337:</strong> !hello<br>
  <strong>bot:</strong> hello<br>
</blockquote>

## Bir Komut Göster

`!command show <prefix><command_name>`

!> Varsayılan izin **MODERATÖR**

### Parametreler

- `prefix`
  - *gereklidir* - herhangi bir özel karakter olabilir
- `command_name`
  - *gereklidir* - komutunuzun adı


### Örnekler

<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${username}, rolled a ${random 1 10}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>yourModerator:</strong> !command show !dice<br>
  <strong>bot:</strong> @yourModerator, ${username}, rolled a ${random 1 10}<br>
</blockquote>