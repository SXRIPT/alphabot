# **FAQ**
<br/>

**Soru:** Alphabot'u nasıl edinebilirim?

**Cevap:**  Şuraya gidin: <a href="https://alphabot.wtf/">alphabot web sitesi</a> ve en son sürümü indirin!

***
**Soru:** Ya bir sorum varsa veya yardıma ihtiyacım olursa?

**Cevap:**  Lütfen bize gönderin <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">e-posta</a> veya bize bir tweet gönderin. Yardım etmekten çok mutluyuz.

***

**Soru:** Bir hata buldum, bunu nereye bildirebilirim?

**Cevap:** Yapabilirsen mutlu oluruz <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">bildiri</a> buraya. Mümkün olan en kısa sürede cevap vereceğiz.

***

**Soru:** Yeni bir özellik fikrim var, bunu nerede paylaşırım?

**Cevap:** Lütfen bana bir gönder <a href= "mailto:filip.adamovic@studierende.htl-donaustadt.at">e-posta</a> ve ona bakacağım!

***
**Soru:** Bot birden fazla kanalı destekliyor mu?

**Cevap:**  Evet, alphabot destekler **çok** kanal kullanımı, yani bir bot örneği = birden fazla kanal

***

**Soru:** Bot neden fısıltı mesajları göndermiyor?

**Cevap:** Lütfen oku https://discuss.dev.twitch.tv/t/have-a-chat-whisper-bot-let-us-know/10651 ve botunuzu başvuru formuna kaydedin. Bot user_id'nizi almak için aşağıdaki curl komutunu kullanın.

    curl -X GET 'https://api.twitch.tv/helix/users?login=<botusername>' \
        -H 'Authorization: Bearer <Bearer Token>' \
        -H 'Client-Id: <ClientID>'