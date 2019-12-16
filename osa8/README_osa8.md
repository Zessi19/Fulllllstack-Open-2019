# Osa 8

## Part A (7/7)

GraphQL backend tehtävät seuraavat materiaalin mallia ja ne toimivat esimerkki tulostusten olettamalla tavalla (myös erikoistapauksissa).


## Part B (5/5)

Toteutin sovellukseni käyttämällä Apollo hookeja. Sovellus toteuttuu kaikki tehtävissä pyydetyt toiminnallisuudet. Lisäksi lisäsin sovellukseen materiaalin mallissa käytetyn error notifikaation ja backendiin testi toiminnallisuuden, missä backend heittää virheen, jos backendiin koitetaan lisätä toinen täsmälleen samanniminen kirja.


## Part C (4/4)

Jälleen kerran sovullus seuraa tarkasti materiaalin mallia. UserInputError heitetään eteenpäin min pituudesta (Book ja Author) ja uniquesta (Book). AuthenticationError taas käyttäjän kutsuessa addBook() tai editAuthor() metodeja ilman kunnollista tokenia. Yritin testailla sovellusta monipuolisesti playgroundilla ja en havainnut bugeja.

Sovellukseen on kovakoodattu kaikille käyttäjille salasanaksi: qwerty


## Part E (/6)


