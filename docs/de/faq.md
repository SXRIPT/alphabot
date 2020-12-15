# **FAQ**
<br/>

**Frage:** Wie bekomme ich alphabot?

**Antwort:** Besuchen Sie die <a href="https://alphabot.wtf/"> alphabot-Website </a> und laden Sie die neueste Version herunter!

***
**Frage:** Was ist, wenn ich eine Frage habe oder Hilfe benötige?

**Antwort:** Bitte senden Sie uns eine <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at"> E-Mail </a> oder senden Sie uns einen Tweet. Wir helfen Ihnen gerne weiter.

***

**Frage:** Ich habe einen Fehler gefunden. Wo kann ich ihn melden?

**Antwort:** Wir würden uns freuen, wenn Sie <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at"> hier </a> berichten könnten. Wir werden so schnell wie möglich antworten.

***

**Frage:** Ich habe eine neue Feature-Idee. Wo teile ich sie?

**Antwort:** Bitte senden Sie mir eine <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at"> E-Mail </a> und ich werde es mir ansehen!

***
**Frage:** Unterstützt der Bot mehr als einen Kanal?

**Antwort:** Ja, alphabot unterstützt die Verwendung **mehrfach** Kanälen, das heißt eine Bot-Instanz = mehrere Kanäle

***

**Frage:** Warum sendet der Bot keine Flüsternachrichten?

**Antwort:** Bitte lesen Sie https://discuss.dev.twitch.tv/t/have-a-chat-whisper-bot-let-us-know/10651 und registrieren Sie Ihren Bot im Antragsformular. Um Ihren Bot user_id zu erhalten, verwenden Sie den folgenden Befehl curl.

    curl -X GET 'https://api.twitch.tv/helix/users?login=<botusername>' \
        -H 'Authorization: Bearer <Bearer Token>' \
        -H 'Client-Id: <ClientID>'