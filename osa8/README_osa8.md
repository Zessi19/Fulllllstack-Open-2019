# Osa 8

## Part A (7/7)

GraphQL backend tehtävät seuraavat materiaalin mallia ja ne toimivat esimerkki tulostusten olettamalla tavalla (myös erikoistapauksissa).


## Part B (5/5)

Toteutin sovellukseni käyttämällä Apollo hookeja. Sovellus toteuttuu kaikki tehtävissä pyydetyt toiminnallisuudet. Lisäksi lisäsin sovellukseen materiaalin mallissa käytetyn error notifikaation ja backendiin testi toiminnallisuuden, missä backend heittää virheen, jos backendiin koitetaan lisätä toinen täsmälleen samanniminen kirja.


## Part C (4/4)

Jälleen kerran sovullus seuraa tarkasti materiaalin mallia. UserInputError heitetään eteenpäin min pituudesta (Book ja Author) ja uniquesta (Book). AuthenticationError taas käyttäjän kutsuessa addBook() tai editAuthor() metodeja ilman kunnollista tokenia. Yritin testailla sovellusta monipuolisesti playgroundilla ja en havainnut bugeja.

Sovellukseen on kovakoodattu kaikille käyttäjille salasanaksi: qwerty


## Part D ja F (8/10)

Parin viimeisen tehtävän kanssa säätämisessä kului sen verran aikaa, että jätin tehtävät 8.21 ja 8.26 tekemättä, koska ne eivät tule vaikuttamaan opintopisteisiin (nyt tehty 24/26 vs minimi 22/26)ja tarvitsen kurssista merkinnän mahdollisimman nopeasti valmisen takia.

Tehtävävien 8.17-8.22 toiminnallisuus on toteutettu annettujen ohjeiden mukaisesti. Bonuksena en vain kovakoodannut tehtävässä 8.19 kirjojen valintapainikkeiksi annettuja "kiinteitä" genrejä, vaan sovellus käy läpi kaikki mahdolliset tietokanssa olevat kirjojen genret ja muodostaa jokaisesta uniikista genrestä oman nappinsa + all nappi. Käyttäjän favorite genre haetaan Recommend -komponentissa erillisellä haulla ja tallennetaan komponentin lokaaliin useStateen, jota käytetään sitten suosituslistan fillteröinnissä.


Tehtävissä 8.23-8.25 subrictions on toteutettu kirjan lisäämiselle materiaalin mallin tapaan, jotta välimuisti saadaan toimimaan halutulla tavalla. Clientille annetaaan ilmoitus uudesta serverille lisätystä (ja sieltä websocetilla haettusta) kirjasta Reactin windowAlert metodilla.
