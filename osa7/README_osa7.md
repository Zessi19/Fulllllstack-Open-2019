# Osa 7

## Part A (3/3)

Tehtävät seuraavat tarkasti osan 2 materiaalin esimerkkiä. Notifikaatiolle on tehty oma React-komponentti ja tyylinä on käytetty kurssin aiemmista tehtävistä tuttua pohjaa. Anekdoottin lisäämisen jälkeen paluu kaikkien anekdoottien lista-näkymään tehdän withRouterin metodilla history.push().


## Part F (13/17)

Käytin ratkaisussa pohjana omaa sovellustani osasta 5, jossa aikanaan käytin mallivastauksen pohjaa osaa 4. Kaikki Blogisovelluksen osat käyttävät Reduxia. Lisäksi kehitin mallivastauksiin nähden erityisesti notifikaatioiden näyttämistä. Nyt kaikki errorit näytetään aina backendistä notifikaationa frontendiin käyttäjälle. Lisäksi kaikissa frontendin käyttäjän tärkeistä tapahtumista näytetään alert-notifikaatio käyttäjälle.

Tehtävät 7.7-7.12 seuraavat materiaalin esimerkkiä ja ulkoasua. En täysin ymmärtänyt miksi kommentin lisääkimen pitäisi tehdä juuri POST-pyynnöllä kyseiseen osoitteeseen, itse päädyin tekemään tämän PUT-pyynnöllä ja ainakin oman testaukseni menetelmä toimii. Tehtävissä 7.13-7.14 olen erityisen tyytyväinen Login, User sivuihin ja Notifikaatioihin. Muissa ulkoasun kohdissa olisi vielä hiomista, mutta käytin jo tehtävään reilsuti toista tuntia opetellessa Sematic UI:ta.

Frontend käyttää ESlintä ja kävin kaikki virheet läpi korjaten vahingossa jääneet tapaukset. Kuitenkin esimerkiksi sisennysten kanssa ESLint antaa välillä virheen, vaikka luettavuuden takia virheellinen tapaus on kyseisessä tilanteessa parempi (mutta virheen aiheuttava ESLintin sääntö on silti järkeä pitää). En tehnyt tehtäviä 7.16-7.19 ajan säästämiseksi, koska kaikki aiemmat tehtävät tehneenä niiden poisjättäminen ei tule vaikuttamaan kurssin arvosanaan/opintopistemäärään.

Huom. frontend/src/App.js aiheuttaa kaksi huomautusta, koska useEffecteissä "React Hook missing dependency ...". Huomautus kehottaa ottamaan tyhjän taulukon pois riippuvuuksissa. Aiempien lukujen materiaalissa useEffectiä oli kuitenkin käytetty tyhjän tauluko kanssa, jotta useEfectin turhilta uusinta suorituksilta vältyttäisiin. Päädyin käyttämään kurssimateriaalin tapaa ja sovellus toimii ilman ongelmia.
