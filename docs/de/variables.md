# Variablen

Variablen können für benutzerdefinierte Befehle verwendet werden.

## Argumente

`${1}-${n}`

Beim Erstellen eines Befehls können Argumente verwendet werden. Im Grunde nehmen sie das n-te Argument, wenn ein Benutzer die Nachricht aufruft.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der das dritte Argument von Argumenten zurückgibt, die ein Benutzer angegeben hat. Schauen Sie sich dieses Chat-Szenario an:
<blockquote>
  <strong>yourModerator:</strong> !command add !argsGuide ${3}<br>
  <strong>bot:</strong> @yourModerator, successfully added command argsGuide.<br>
  <strong>funnyDude:</strong> !argsGuide first second third<br>
  <strong>bot:</strong> third
</blockquote>

## Zufall

`${random}`

Random gibt eine Zufallszahl zwischen den beiden angegebenen zurück.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der einen Würfel imitiert.
<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${random 1 6}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>smallBoban:</strong> !dice<br>
  <strong>bot:</strong> 3<br>
  <strong>ldancer500:</strong> !dice<br>
  <strong>bot:</strong> 6
</blockquote>

## Url

`${url}`

Die URL gibt die Kanal-URL zurück.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der die Kanal-URL zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !url ${url}<br>
  <strong>bot:</strong> @streamer, successfully added command url.<br>
  <strong>bibiNator99:</strong> !url<br>
  <strong>bot:</strong> https://twitch.tv/streamer
</blockquote>

## Nutzername

`${username}`

Der Benutzername gibt den Anmeldenamen des Benutzers zurück.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der den Benutzernamen zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Anzeigename

`${display}`

Display gibt den Anzeigenamen des Benutzers zurück.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der den Anzeigenamen zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Zuschauer

`${viewers}`

Die Zuschauer geben die aktuelle Zuschauerzahl zurück, wenn der Streamer aktiv ist. Wenn der Streamer offline ist, wird "Streamer nicht live" zurückgegeben.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der die Anzahl der Betrachter zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !viewers ${viewers}<br>
  <strong>bot:</strong> @streamer, successfully added command viewers.<br>
  <strong>bob390:</strong> !viewers<br>
  <strong>bot:</strong> 50
</blockquote>

## Spiel

`${game}`

Das Spiel gibt die aktuelle Kategorie des Streams zurück, wenn es live ist. Wenn der Kanal offline ist, wird "Streamer nicht live" zurückgegeben.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der die aktuelle Kategorie des Streams zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !cat ${game}<br>
  <strong>bot:</strong> @streamer, successfully added command cat.<br>
  <strong>bob390:</strong> !cat<br>
  <strong>bot:</strong> Just Chatting
</blockquote>

## Titel

`${title}`

Titel gibt den aktuellen Titel des Streams zurück, wenn er live ist. Wenn der Kanal offline ist, wird "Streamer nicht live" zurückgegeben.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der den aktuellen Titel des Streams zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !title ${title}<br>
  <strong>bot:</strong> @streamer, successfully added command title.<br>
  <strong>niko2010:</strong> !title<br>
  <strong>bot:</strong> New Personal Best today PogChamp
</blockquote>

## Sprache

`${language}`

Die Sprache gibt die aktuelle Sprache zurück, auf die der Kanal eingestellt ist. Dies funktioniert nur, wenn der Kanal aktiv ist. Wenn der Kanal offline ist, wird "Streamer nicht live" zurückgegeben.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der die aktuelle Sprache des Streams zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !language ${language}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tinaProGamerin:</strong> !language<br>
  <strong>bot:</strong> EN  
</blockquote>

## Betriebszeit

`${uptime}`

Uptime gibt die aktuelle Betriebszeit des Kanals zurück, wenn diese aktiv ist. Wenn der Kanal offline ist, wird "Streamer nicht live" zurückgegeben.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der die aktuelle Betriebszeit des Streams zurückgibt.
<blockquote>
  <strong>streamer:</strong> !command add !uptime ${uptime}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tomsy19:</strong> !uptime<br>
  <strong>bot:</strong> 5 hours 36 minutes
</blockquote>


## Größer

`${greater}`

Größer gibt den größeren Wert von zwei angegebenen Werten zurück.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der zwei Argumente akzeptiert. Schauen Sie sich dieses Chat-Szenario an:
<blockquote>
  <strong>yourModerator:</strong> !command add !greater ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command greater.<br>
  <strong>funnyDude:</strong> !greater 299 5400<br>
  <strong>bot:</strong> 5400
</blockquote>

## Kleiner

`${smaller}`

Kleiner gibt den kleineren Wert von zwei angegebenen Werten zurück.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der zwei Argumente akzeptiert. Schauen Sie sich dieses Chat-Szenario an:
<blockquote>
  <strong>yourModerator:</strong> !command add !smaller ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command smaller.<br>
  <strong>smallBoban:</strong> !smaller 299 5400<br>
  <strong>bot:</strong> 299
</blockquote>

## Gleich

`${equal}`

Equal gibt true oder false zurück, je nachdem, ob die beiden angegebenen Werte übereinstimmen.

### Beispiele
Zum Beispiel erstellen wir einen Befehl, der zwei Argumente akzeptiert. Schauen Sie sich dieses Chat-Szenario an:
<blockquote>
  <strong>yourModerator:</strong> !command add !equal ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command equal.<br>
  <strong>smallBoban:</strong> !equal 299 5400<br>
  <strong>bot:</strong> false<br>
  <strong>smallBoban:</strong> !equal 299 299<br>
  <strong>bot:</strong> true
</blockquote>