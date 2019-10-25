# Osa 4

## Part A (7/7)

Yksikkötesteissä seurataan materiaalin mallia ja testit on nimetty ja numeroitu tehtäväkohtaisesti. Kaikki testit suoritetaan neljälle eri input arvolle: tyhjä lista, yhden syötteen lista, materiaalin esimerkkisyöte ja "CornerCase" lista, joka siltää nimensämukaisesti keksimäni cornercaset (yleensä tapaukset: useampi oikea vaihtoehto, joista riittää palauttaa yksi oikea).

Funktiot: utils/list_helper.js
Testit: test/partA.test.js
Data: test/unitTestData.js

Run: npx jest tests/partA.test.js --runInBand


## Part B (7/7)

Routejen supertestit on jaoteltu kutsumetodien mukaan ja lisäksi vielä numeroitu tehtäväkohtaisesti. Lopuksi dummy-testi asettaa tietokannan samaan tilaan kuin ennen testejä (initialBlogs). Huom. muutaman kerran testejä tehdessäni JEST timeouttasi, osassa testeistä, koska yhteydenottaminen tietokantaan kesti liian kauan. Koska testi menivät kuitenkin useimmiten läpi ilman ongelmia ja käyttämäni internet yhteys oli heikko, en nähnyt tarpeelliseksi alkaa muuttamaan JEST:n default timeout-aikaa isommaksi.

Testit: test/api_blogs.test.js
Initial Data: supertest_helper.js

Run: npx jest tests/api_blogs.test.js --runInBand


## Part C ja D ()
