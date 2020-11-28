# **FAQ**
<br/>

**Question:** ¿Cómo obtengo alphabot?

**Answer:**  Dirígete al <a href="https://alphabot.wtf/"> sitio web de alphabot </a> y descarga la última versión.

***
**Question:** ¿Qué pasa si tengo una pregunta o necesito ayuda?

**Answer:** 
Envíenos un <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at"> correo electrónico </a> o envíenos un tweet. Estamos más que felices de ayudar.

***

**Question:** Encontré un error, ¿dónde puedo informarlo?

**Answer:** 
Estaríamos encantados si pudiera <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at"> informar </a> aquí. Responderemos tan pronto como podamos.

***

**Question:** Tengo una nueva idea de función, ¿dónde la comparto?

**Answer:** ¡Por favor envíeme un <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">correo electrónico</a> y lo revisaré!

***
**Question:** ¿El bot admite más de un canal?

**Answer:** Sí, alphabot admite el uso de ** canales múltiples **, lo que significa una instancia de bot = canales múltiples

***

**Question:** ¿Por qué el bot no envía mensajes susurrantes?

**Answer:** Lea https://discuss.dev.twitch.tv/t/have-a-chat-whisper-bot-let-us-know/10651 y registre su bot en el formulario de solicitud. Para obtener su bot user_id use el comando curl a continuación.

    curl -X GET 'https://api.twitch.tv/helix/users?login=<botusername>' \
        -H 'Authorization: Bearer <Bearer Token>' \
        -H 'Client-Id: <ClientID>'