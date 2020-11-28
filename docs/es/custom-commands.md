# Comandos personalizados

## Agregar un nuevo comando

`!command add <prefijo><nombre del comando> <respuesta>`

!> El permiso predeterminado es **MODERATOR**

### Parámetros

- `prefijo`
  - *necesario* - puede ser cualquier carácter especial
- `nombre del comando`
  - *necesario* - el nombre de tu comando
- `respuesta`
  - *necesario* - la respuesta que el bot debería dar cuando se active


### Ejemplos

<blockquote>
  <strong>moderador:</strong> !command add !no yes<br>
  <strong>bot:</strong> @moderador, successfully added command no.<br>
  <strong>user:</strong> !no<br>
  <strong>bot:</strong> yes
</blockquote>


<blockquote>
  <strong>moderador:</strong> !command add !dice ${username} rolled a ${random 1 6}<br>
  <strong>bot:</strong> @moderador, successfully added command dice.<br>
  <strong>user:</strong> !dice<br>
  <strong>bot:</strong> @user150 rolled a 4
</blockquote>

## Eliminar un comando

`!command remove <prefijo><nombre del comando>`

!> El permiso predeterminado es **MODERATOR**

### Parámetros

- `prefijo`
  - *necesario* - el prefijo del comando a eliminar
- `nombre del comando`
  - *necesario* - el nombre del comando que se eliminará


### Ejemplos

<blockquote>
  <strong>moderador:</strong> !command remove !no yes<br>
  <strong>bot:</strong> @moderador, successfully removed command no.<br>
  <strong>user:</strong> !no<br>
  <strong>user:</strong> nothing happend :c<br>
</blockquote>

## Actualizar un comando

`!command update <prefijo><nombre del comando> <respuesta>`

!> El permiso predeterminado es **MODERATOR**

### Parámetros

- `prefijo`
  - *necesario* - puede ser cualquier carácter especial
- `nombre del comando`
  - *necesario* - el nombre de tu comando
- `respuesta`
  - *necesario* - la respuesta que el bot debería dar cuando se active.


### Ejemplos

<blockquote>
  <strong>moderador:</strong> !command add !hey gello<br>
  <strong>bot:</strong> @moderador, successfully added command hey.<br>
  <strong>moderador:</strong> !command update !hey hello<br>
  <strong>bot:</strong> @moderador, successfully updated command hey.<br>
  <strong>user:</strong> !hello<br>
  <strong>bot:</strong> hello<br>
</blockquote>

## Mostrar un comando

`!command show <prefijo><nombre del comando>`

!> El permiso predeterminado es **MODERATOR**

### Parámetros

- `prefijo`
  - *necesario* - puede ser cualquier carácter especial
- `nombre del comando`
  - *necesario* - el nombre de tu comando


### Ejemplos

<blockquote>
  <strong>moderador:</strong> !command add !dice ${username}, rolled a ${random 1 10}<br>
  <strong>bot:</strong> @moderador, successfully added command dice.<br>
  <strong>moderador:</strong> !command show !dice<br>
  <strong>bot:</strong> @moderador, ${username}, rolled a ${random 1 10}<br>
</blockquote>