# Osa 7

## Part A (3/3)

Tehtävät seuraavat tarkasti osan 2 materiaalin esimerkkiä. Notifikaatiolle on tehty oma React-komponentti ja tyylinä on käytetty kurssin aiemmista tehtävistä tuttua pohjaa. Anekdoottin lisäämisen jälkeen paluu kaikkien anekdoottien lista-näkymään tehdän withRouterin metodilla history.push().


## Part F (13/17)

Käytin ratkaisussa pohjana omaa sovellustani osasta 5, jonka backendissä käytin aikanaan mallivastausta osasta 4. Kaikki Blogisovelluksen osat käyttävät Reduxia. Lisäksi kehitin mallivastauksiin nähden erityisesti notifikaatioiden näyttämistä. Nyt kaikki errorit näytetään aina backendistä notifikaationa frontendiin käyttäjälle. Lisäksi kaikissa frontendin käyttäjän tärkeistä tapahtumista näytetään alert-notifikaatio käyttäjälle (2-5s riippuen alertista).

Tehtävät 7.7-7.12 seuraavat materiaalin esimerkkiä ja ulkoasua. En täysin ymmärtänyt miksi kommentin lisääminen pitäisi tehdä juuri POST-pyynnöllä kyseiseen osoitteeseen. Päädyin tekemään kommentin lisäämisen PUT-pyynnöllä ja ainakin oman testaukseni perusteella menetelmä toimii. Tehtävissä 7.13-7.14 olen erityisen tyytyväinen Login, User sivuihin ja Notifikaatioihin. Muissa ulkoasun kohdissa olisi vielä hiomista, mutta käytin jo tehtävään reilusti yli toista tuntia opetellessani Sematic UI:ta.

Frontend käyttää ESlintiä ja kävin kaikki ESLintin virheet läpi korjaten tarkoituksetta jätetyt tapaukset. Kuitenkin esimerkiksi sisennysten kanssa ESLint antaa välillä virheen, vaikka luettavuuden takia virheellinen tapaus on kyseisessä tilanteessa parempi (mutta virheen aiheuttava ESLintin sääntö on silti järkeä pitää). En tehnyt tehtäviä 7.16-7.19 ajan säästämiseksi, koska kaikki aiemmat tehtävät tehneenä niiden poisjättäminen ei tule vaikuttamaan kurssin arvosanaan/opintopistemäärään ja tarvitsen viimeisen 8. osan valmiiksi mahdollisimman nopeasti kurssisuoritusmerkinnä takia.

Huom. frontend/src/App.js aiheuttaa kaksi huomautusta, useEffect: "React Hook missing dependency ...". Huomautus kehottaa ottamaan tyhjän taulukon pois useEffectin riippuvuuksista. Aiempien lukujen materiaalissa useEffectiä oli kuitenkin käytetty tyhjän tauluko kanssa, jotta useEfectin turhilta uusinta suorituksilta vältyttäisiin. Päädyin käyttämään kurssimateriaalin tapaa ja sovellus toimii ilman ongelmia.
