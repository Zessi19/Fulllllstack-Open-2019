# Osa 4

## Part A (7/7)

Yksikkötestit on nimetty ja numeroitu tehtäväkohtaisesti. Kaikki testit suoritetaan neljälle eri input arvolle: tyhjä lista, yhden syötteen lista, materiaalin esimerkkisyöte ja "CornerCase" lista, joka siltää nimensämukaisesti keksimäni cornercaset (yleensä tapaukset: useampi oikea vaihtoehto, joista riittää palauttaa yksi oikea).

Funktiot: utils/list_helper.js
Testit: test/partA.test.js
Data: test/unitTestData.js

Run: npx jest tests/partA.test.js --runInBand


## Part B (7/7)

Routejen supertestit on jaoteltu kutsumetodien (GET, POST, DELETE, UPDATE) mukaan ja lisäksi numeroitu tehtäväkohtaisesti. Lopuksi dummy-testi asettaa tietokannan samaan tilaan kuin ennen testejä (initialBlogs).

Testit: test/api_blogs.test.js
Initial Data: supertest_helper.js

HUOM! Testejä ei ole korjattu yhteensopiviksi C ja D kohdan muutosten kanssa, koska tämä ei ollut pakollista ja tein jo "ylimääräistä" työtä tekemällä testit tehtäviin 4.13 ja 4.14. Githubista löytyy kuitenkin aiemmin palautettu versio, jossa B-kohdan tehtävät toimivat.


## Part C ja D (7/7)

Tehtävissä on seurattu materiaalin mallia. Tehtävän 4.16 testit koskevat vain virheellisiä tapauksia, kuten tehtävänannossa määritellään. Muiden toiminnallisuuksien testaus on suoritettu selaimella ja Visual Studio Code:n Rest-clientillä.

Testit : test/api_users.test.js
Run: npx jest tests/api_users.test.js --runInBand
