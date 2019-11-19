# Osa 5

Osan 5 hakemisto sisältää Blogi-sovelluksen frontendin ja backendin sekä viimeisen tehtävän "Ultimate Hooks" omiksi alihakemistoiksi eriteltynä. Backendin pohjana on käytetty osan 4 mallivastausta.


## Part A (4/4)

Uusien blogien luonti 5.3 (CreateBlog.js) ja virheilmoituksen/notifikaation renderöinti 5.4 (Notification.js) on eriytetty omiksi React-komponentiksi kuten tehtävänannossa neuvotaan. Virheilmoituksena käyttäjälle näytetään backendin frontendille lähettämä errorMessage (koskee myös Part B). Virheilmoitusten ja notifikaatioiden tyylit on määritelty tiedostossa srs/index.css.


## Part B (8/8)

Komponentti CreateBlog.js käyttää materiaalin Togglable.js komponenttia apunaan. Komponenttilla Blog on oma useState näkyvyyden määrittelemiseen ja komponentti sisältää näytettävän (yksittäisen) blogin tietojen renderöinnin, sekä useImperativeHandlen kyseisen komponentin tieojen välittämisen Parant-komponentille (App.js). Blogista tykkäämisen (AddLike) ja Blogin poistamisen (deleteBlog) suorittavat funktiot annetaan komponenttiin Blog propseina.


## Part C (7/7)

Unit testit (5.13-5.15) löytyvät tiedostosta src/tests/uniTests.test.js ja testien asetukset tiedostosta /setupTests.js. Testejä ajaessa Jest ilmoitti, että setupTest:n sisältämää importtia "import '@testing-library/react/cleanup-after-each'" ei enään tarvita, joten kommentoin sen pois ja testit näyttävät toimivan näinkin.

Run unit tests: CI=true npm test -- unitTests.test.js

Integraatiotestit (5.16 ja 5.17) löytyvät tiedostosta src/tests/integrationTests.test.js ja integraatiotestien localStorage-mock logiikkaa löytyy tiedostosta setupTests.js. Ensimmäinen testi tarkistaa, että ei-kirjautuunnelle käyttäjälle renderöidään vain LoginForm, eikä yhtään blogia. Jälkimmäinen testi taas tarkistaa, että kirjautuneelle käyttäjälle renderöidään kaikki src/services/__mock__/blogs.js tiedostossa määritellyt blogit.

Huom. D-kohdan muutosten takia, integraatio testi antaa nyt suorittaessa testeistä Warningin: En lähde enää jälkeenpäin muokkaamaan testi/koodia, koska Osan 5 tehävien tekemiseen on jo mennyt valtavasti aikaa, eikä kyseessä ole testejä kaatava error. 

Run integration test: CI=true npm test -- integrationTests.test.js


## Part D (4/4)

#### Huomio 1.
Jouduin tässä osassa lisäämään mallivastauksen backendiin (backend/app.js) mongoose.connect kutsuun parametrin "useFindAndModify: false", koska node antoi tästä  DeprecationWarning ja opasti parametrin käyttöön. Testailin sovelluksen osia muutoksen jälkeen ja se ei näytä vaikuttuvan/rikkovan mitään (kuten tietenkin kuuluu ollakin).

#### Huomio 2.
Tehtävässä 5.20 varoitukset hävisit consolista, kun otin Custom Hookista importatun reset-function käyttöön eli lisäsit komponenttiin CreateBlog.js rivit title.reset(), author.reset() ja url.reset(). En täysin ymmärrä miksi näin kävi ja koitin googletella ongelmaa, mutta ratkaisu näyttää riittävän tähän tehtävään. Stackoverflow postauksessa opastettu tapa: 

const { stack, ...withoutFirst } = original;

yhden fieldin erottamiseen taas aiheutti jostain syystä erroria omassa sovelluksessani.


#### Huom 3.
Viimeisessä tehtävässä 5.21 Ultimate Hooks on toteutettu kaikki pyydetyt ominaisuudet. Virheiden käsittely, useFieldin kentän tyhjentäminen yms. ekstra on jätetty pois, koska niitä ei tehtävän annossa erikseen pyydetty.
