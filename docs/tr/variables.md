# Değişkenler
Değişkenler özel komutlar için kullanılabilir.

## Argümanlar

`${1}-${n}`

Bir komut oluştururken argümanlar kullanılabilir. Yaptıkları temelde, bir kullanıcı mesajı çağırdığında n'inci argümanını almaktır.

### Örnekler
Örneğin, bir kullanıcının sağladığı argümanların 3. argümanını döndüren bir komut oluşturuyoruz. Şu sohbet senaryosuna bakın:
<blockquote>
  <strong>yourModerator:</strong> !command add !argsGuide ${3}<br>
  <strong>bot:</strong> @yourModerator, successfully added command argsGuide.<br>
  <strong>funnyDude:</strong> !argsGuide first second third<br>
  <strong>bot:</strong> third
</blockquote>

## Rastgele

`${random}`

Random, sağlanan ikisi arasında rastgele bir sayı döndürür.

### Örnekler
Örneğin bir zarı taklit eden bir komut oluşturuyoruz.
<blockquote>
  <strong>yourModerator:</strong> !command add !dice ${random 1 6}<br>
  <strong>bot:</strong> @yourModerator, successfully added command dice.<br>
  <strong>smallBoban:</strong> !dice<br>
  <strong>bot:</strong> 3<br>
  <strong>ldancer500:</strong> !dice<br>
  <strong>bot:</strong> 6
</blockquote>

## URL

`${url}`

Url, kanal url'sini döndürecektir.

### Örnekler
Örneğin, kanal url'sini döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !url ${url}<br>
  <strong>bot:</strong> @streamer, successfully added command url.<br>
  <strong>bibiNator99:</strong> !url<br>
  <strong>bot:</strong> https://twitch.tv/streamer
</blockquote>

## Kullanıcı adı

`${username}`

Kullanıcı adı, kullanıcıların oturum açma adını döndürecektir.

### Örnekler
Örneğin kullanıcı adını döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Ekran adı

`${display}`

Ekran, kullanıcının görünen adını döndürecektir.

### Örnekler
Örneğin, görünen adı döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !user ${username}<br>
  <strong>bot:</strong> @streamer, successfully added command user.<br>
  <strong>makaMakGaga:</strong> !user<br>
  <strong>bot:</strong> makamakgaga
</blockquote>

## Görüntüleyenler

`${viewers}`

Yayıncı canlıysa izleyiciler mevcut izleyici sayısını döndürür. Yayıncı çevrimdışıysa, "Yayıncı canlı değil" döndürür.

### Örnekler
Örneğin izleyici sayısını döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !viewers ${viewers}<br>
  <strong>bot:</strong> @streamer, successfully added command viewers.<br>
  <strong>bob390:</strong> !viewers<br>
  <strong>bot:</strong> 50
</blockquote>

## Oyun

`${game}`

Oyun, yayındaysa akışın mevcut kategorisini döndürür. Kanal çevrimdışıysa "Yayıncı canlı değil" döndürür.

### Örnekler
Örneğin, akışın mevcut kategorisini döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !cat ${game}<br>
  <strong>bot:</strong> @streamer, successfully added command cat.<br>
  <strong>bob390:</strong> !cat<br>
  <strong>bot:</strong> Just Chatting
</blockquote>

## Başlık

`${title}`

Başlık, yayındaysa akışın mevcut başlığını döndürür. Kanal çevrimdışıysa "Yayıncı canlı değil" döndürür.

### Örnekler
Örneğin, akışın mevcut başlığını döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !title ${title}<br>
  <strong>bot:</strong> @streamer, successfully added command title.<br>
  <strong>niko2010:</strong> !title<br>
  <strong>bot:</strong> New Personal Best today PogChamp
</blockquote>

## Dil

`${language}`

Dil, kanalın ayarlandığı mevcut dili döndürür, bu yalnızca kanal canlıysa çalışır. Kanal çevrimdışıysa "Yayıncı canlı değil" döndürür.
### Örnekler
Örneğin, akışın mevcut dilini döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !language ${language}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tinaProGamerin:</strong> !language<br>
  <strong>bot:</strong> EN  
</blockquote>

## Çalışma süresi

`${uptime}`

Çalışma süresi, canlıysa kanalın mevcut çalışma süresini döndürür. Kanal çevrimdışıysa "Yayıncı canlı değil" döndürür.

### Örnekler
Örneğin, akışın mevcut çalışma süresini döndürecek bir komut oluşturuyoruz.
<blockquote>
  <strong>streamer:</strong> !command add !uptime ${uptime}<br>
  <strong>bot:</strong> @streamer, successfully added command language.<br>
  <strong>tomsy19:</strong> !uptime<br>
  <strong>bot:</strong> 5 hours 36 minutes
</blockquote>


## Büyük

`${greater}`

Daha büyük, sağlanan iki değerden daha büyük bir değer döndürür.

### Örnekler
Örneğin, iki argüman alan bir komut oluşturuyoruz. Şu sohbet senaryosuna bakın:
<blockquote>
  <strong>yourModerator:</strong> !command add !greater ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command greater.<br>
  <strong>funnyDude:</strong> !greater 299 5400<br>
  <strong>bot:</strong> 5400
</blockquote>

## Daha küçük

`${smaller}`

Daha küçük, sağlanan iki değerden daha küçük bir değer döndürür.

### Örnekler
Örneğin, iki argüman alan bir komut oluşturuyoruz. Şu sohbet senaryosuna bakın:
<blockquote>
  <strong>yourModerator:</strong> !command add !smaller ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command smaller.<br>
  <strong>smallBoban:</strong> !smaller 299 5400<br>
  <strong>bot:</strong> 299
</blockquote>

## Eşit

`${equal}`

Eşit, sağlanan iki değerin eşleşip eşleşmediğine bağlı olarak doğru veya yanlış döndürür.

### Örnekler
Örneğin, iki argüman alan bir komut oluşturuyoruz. Şu sohbet senaryosuna bakın:
<blockquote>
  <strong>yourModerator:</strong> !command add !equal ${1} ${2}<br>
  <strong>bot:</strong> @yourModerator, successfully added command equal.<br>
  <strong>smallBoban:</strong> !equal 299 5400<br>
  <strong>bot:</strong> false<br>
  <strong>smallBoban:</strong> !equal 299 299<br>
  <strong>bot:</strong> true
</blockquote>