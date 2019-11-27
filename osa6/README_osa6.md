# Osa 6

## Part A (8/8)

#### Unicafe revisited

Pelkistetty unicafee-sovellus sisältää testin jokaiselle reducerin actionille (GOOD, OK, BAD ja ZERO). Kaikki testit myös tarkistavat deep-freeze-kirjaston avulla, että reducer on puhdasfunktio.

Go folder:     osa6/unicafe-redux <br />
Run command:   CI=true npm test


#### Anekdootit
Anekdootti-sovellus seuraa toiminnallisuuksiltaan tarkasti tehtävänannon ohjeita, mutta sovelluspohjaan on tehty pieniä muutoksia ulkoasun suhteen (fonttikoot yms.). AnecdoteReducerille on tehty yksittäinen "ylimääräinen" testi, jolla varmistin että reducer on puhdas funktio.


## Part B (7/7)

### 6.9-6.11
Sovelluksessa samaa NotificatioReducerin tilaa (message) käytetään sekä äänestämisen ja uuden anekdootin lisäämiseen. Messagen modifiointi ennen dispatchia suoritetaan template stringin avulla. Filetteröinnissä mallipohjan komponentin AnecdoteList.js muuttuja anecdoteList on muutettu funktioksi, joka ensin hakee kaikki kaikki anekdootit, filtteröi ne FilterReducerin tilan avulla ja sen jälkeen palauttaa filtteröidyn listan anekdootteja.

### 6.12-6.15

Tehtävänannossa ei specifioitu pitääkö Filter-komponenttia kutsua AnecdoteList-komponentin sisältä vai ei. Päädyin kutsumaan sitä suoraan App-komponentista selkeämmän komponenttirakenteen vuoksi.


## Part C (6/6)

#### Huom 1.
Db.json serverin ID tallennetaan stringeinä (eikä integereinä), koska tiedoston pohjassa ID:n arvot oltiin määritelty stringeinä. Tästä seuraa uusien lisättyjen blogien melko kryptiset ID:t, mutta sovelluksen toimivuuden kannalta tällä ei tietenkään ole merkitystä.

#### Huom 2.
React antaa warning (ei kuitenkaan erroria), kun materiaalin tapaan useEffectin taulukkoon ei määritellä riippuvuuksia (React Hook useEffect has a missing dependency: ...). Lisäämällä useEfectille parametrina annettavaan taulukkoo propsit varoitus häviää. Yritin testata sovelluksen toimintaa molemmissa tapauksissa, enkä huomannut bugeja kummassakaan tapauksessa. Jätin kuitenkin useEffectin taulukon tyhjäksi materiaalin tavoin palautukseen, eli warning tulostuu nyt konsoliin.

#### Huom 3.
Onnistui mielestäni saamaan tehtävässä 6.21 yhdistetyn action-creatorin (setAndRemoveNotification) toimivaan halutulla tavalla, vaikka tämä osoittautui yllätävän vaikeaksi. Jätin kuitenkin aiemmat action-creatorit setNotification ja removeNotification vielä kommentoituina tiedostoon notificationReducer.js.
