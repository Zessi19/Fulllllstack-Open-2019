# Osa 2

## Kurssitiedot (5/5)

Ratkaisu seuraa materiaalin mallia, jossa React-komponentti moduuli Course.js on sijoitettu components hakemiston sisälle. Yhden kurssin alaosien listaamisessa (2.1) ja kaikkien kurssien listaamisessa (2.4) käytetään taulukon map-metodia. Lisäsin course taulukkoon myös kursseille oman alkion id, jota voidaan käyttää map funktion key-arvona kursseja läpikäytäessä. Tällä vältetään taulukon indeksien käyttäminen avaimina, jota kehotetaan välltämään materiaalissa.


## Puhelinluettelo (12/12)

Palvelimen toiminnallisuus on eriytetty moduuliin src/services/persons.js, kaikki muut React-komponentit sijaitsevat tiedostossa src/App.js. App.js tiedoston toiminnallisuus on jaettu useaan eri komponenttiin, mutta kaikki tapahtumankäsittelijä-funktiot on sijoitettu App-komponenttiin, kuten ohjeissa neuvottiin.

App-komponentti
* Yhteystiedon lisääminen ja päivitys: addPerson()
* Yhteystiedon poisto: deletePerson()
* Näytettävien yhteystietojen rajaaminen: filterPersonsByName() 


## Maiden Tiedot (3/3)

Tehtävässä säätietojen lisääminen osoittautui erittäin kinkkiseksi, mutta niiden pitäisi toimia halutulla tavalla. Tehtävässä ehdotettu apixu.com on suljettu, joten käytin tilalle tullutta weatherstack.com API:a. Sää tietojen hakeminen toimi API:sta ongelmitta, mutta jostain syystä en saanut luettua lämpötilaa, tuulen nopeutta yms. palautetusta kaupungin säätieto-objecktista ilman pilkkomatta niitä eri muuttujiin useEffectin sisällä. Yritin kyllä console.log ja console.dir funktioiden avulla löytää oikean "pathin" kutsua niitä useEffectin ulkopuolella, mutta tuloksena oli aina mystisestä syystä "undefined".

Lisäksi en keksi millä useEffect antamaa huomatusta 'missing dependystä' voisi tässä tilanteessa estää. Mielestäni kaupungin säätiedon API kutsun on välttämätöntä riippua "muuttuvasta" pääkaupungin nimestä, koska luonnollisesti hakuja pitää pystyä tekemään useita peräkkäin. Weatherstack:n ilmaisversiossa ei ollut mahdollisuutta hakea kaikkien kaupunkien säätietoja kerralla, minkä avulla tämän olisi pystynyt ainakin välttämään.
