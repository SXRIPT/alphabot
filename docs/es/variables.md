# Variables

 Las variables se pueden utilizar para comandos personalizados.

## Argumentos

`${1}-${n}`

 Al crear un comando, se pueden usar argumentos. Lo que hacen es básicamente tomar el argumento n-ésimo cuando un usuario llama al mensaje.

### Ejemplos
 Por ejemplo, creamos un comando que devuelve el tercer argumento de los argumentos proporcionados por un usuario. Mira este escenario de chat:
<blockquote>
  <strong>moderador:</strong> !command add !argsGuide ${3}<br>
  <strong>bot:</strong> @moderador, successfully added command argsGuide.<br>
  <strong>user:</strong> !argsGuide first second third<br>
  <strong>bot:</strong> third
</blockquote>

## Random

`${random}`

Random devolverá un número aleatorio entre los dos proporcionados.

### Ejemplos
Por ejemplo, creamos un comando que imita un dado.
<blockquote>
  <strong>moderador:</strong> !command add !dice ${random 1 6}<br>
  <strong>bot:</strong> @moderador, successfully added command dice.<br>
  <strong>user:</strong> !dice<br>
  <strong>bot:</strong> 3<br>
  <strong>user:</strong> !dice<br>
  <strong>bot:</strong> 6
</blockquote>

## Url

`${url}`

Url devolverá la URL del canal.

### Ejemplos
Por ejemplo, creamos un comando que devolverá la URL del canal.
<blockquote>
  <strong>streamer:</strong> !command add !url ${url}<br>
  <strong>bot:</strong> @streamer, successfully added command url.<br>
  <strong>user:</strong> !url<br>
  <strong>bot:</strong> https://twitch.tv/streamer
</blockquote>

## Nombre de usuario

`${username}`

Username devolverá el nombre de inicio de sesión de los usuarios.

### Ejemplos
Por ejemplo, creamos un comando que devolverá el nombre de usuario.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>user:</strong> !user<br>
  <strong>bot:</strong> user
</blockquote>

## Nombre para mostrar

`${display}`

Display devolverá el nombre para mostrar del usuario.

### Ejemplos
Por ejemplo, creamos un comando que devolverá el nombre para mostrar.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>user:</strong> !user<br>
  <strong>bot:</strong> User
</blockquote>

## Espectadores

`${viewers}`

Los espectadores devolverán el recuento de espectadores actual si el transmisor está en vivo. Si el transmisor está desconectado, devolverá "Streamer not live".

### Ejemplos
Por ejemplo, creamos un comando que devolverá el conteo de espectadores.
<blockquote>
  <strong>streamer:</strong> !command add !viewers ${viewers}<br>
  <strong>bot:</strong> @streamer, successfully added command viewers.<br>
  <strong>user:</strong> !viewers<br>
  <strong>bot:</strong> 50
</blockquote>

## Juego

`${game}`

El juego devolverá la categoría actual de la transmisión si está en vivo. Si el transmisor está desconectado, devolverá "Streamer not live".

### Ejemplos
Por ejemplo, creamos un comando que devolverá la categoría actual de la secuencia.
<blockquote>
  <strong>streamer:</strong> !command add !cat ${game}<br>
  <strong>bot:</strong> @streamer, successfully added command cat.<br>
  <strong>user:</strong> !cat<br>
  <strong>bot:</strong> Just Chatting
</blockquote>

## Título

`${title}`

Título devolverá el título actual de la transmisión si está en vivo. Si el transmisor está desconectado, devolverá "Streamer not live".

### Ejemplos
Por ejemplo, creamos un comando que devolverá el título actual de la secuencia.
<blockquote>
  <strong>streamer:</strong> !command add !title ${title}<br>
  <strong>bot:</strong> @streamer, successfully added command title.<br>
  <strong>user:</strong> !title<br>
  <strong>bot:</strong> New Personal Best today PogChamp
</blockquote>

## Idioma

`${language}`

El idioma devolverá el idioma actual en el que está configurado el canal, esto solo funciona si el canal está en vivo. Si el transmisor está desconectado, devolverá "Streamer not live".

### Ejemplos
Por ejemplo, creamos un comando que devolverá el idioma actual de la secuencia.
<blockquote>
  <strong>streamer:</strong> !command add !language ${language}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>user:</strong> !language<br>
  <strong>bot:</strong> EN  
</blockquote>

## Tiempo de actividad

`${uptime}`

Uptime devolverá el tiempo de actividad actual del canal si está en vivo. Si el transmisor está desconectado, devolverá "Streamer not live".

### Ejemplos
Por ejemplo, creamos un comando que devolverá el tiempo de actividad actual de la transmisión.
<blockquote>
  <strong>streamer:</strong> !command add !uptime ${uptime}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>user:</strong> !uptime<br>
  <strong>bot:</strong> 5 hours 36 minutes
</blockquote>


## Mayor

`${greater}`

Mayor devolverá el valor mayor de dos valores proporcionados.

### Ejemplos
Por ejemplo, creamos un comando que toma dos argumentos. Mira este escenario de chat:
<blockquote>
  <strong>moderador:</strong> !command add !greater ${1} ${2}<br>
  <strong>bot:</strong> @moderador, successfully added command greater.<br>
  <strong>user:</strong> !greater 299 5400<br>
  <strong>bot:</strong> 5400
</blockquote>

## Menos

`${smaller}`

Menos devolverá el valor más pequeño de dos valores proporcionados.

### Ejemplos
Por ejemplo, creamos un comando que toma dos argumentos. Mira este escenario de chat:
<blockquote>
  <strong>moderador:</strong> !command add !smaller ${1} ${2}<br>
  <strong>bot:</strong> @moderador, successfully added command smaller.<br>
  <strong>user:</strong> !smaller 299 5400<br>
  <strong>bot:</strong> 299
</blockquote>

## Igual

`${equal}`

Igual devolverá verdadero o falso dependiendo de si los dos valores proporcionados coinciden.

### Ejemplos
Por ejemplo, creamos un comando que toma dos argumentos. Mira este escenario de chat:
<blockquote>
  <strong>moderador:</strong> !command add !equal ${1} ${2}<br>
  <strong>bot:</strong> @moderador, successfully added command equal.<br>
  <strong>user:</strong> !equal 299 5400<br>
  <strong>bot:</strong> false<br>
  <strong>user:</strong> !equal 299 299<br>
  <strong>bot:</strong> true
</blockquote>