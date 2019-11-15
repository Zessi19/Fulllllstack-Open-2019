# Osa 5

Osan 5 hakemisto sisältää sekä Blogi-sovelluksen frontendin ja backendin. Backendin pohjana on käytetty osan 4 mallivastausta.


## Part A (4/4)

Uusien blogien luonti 5.3 (CreateBlog.js) ja virheilmoituksen/notifikaation renderöinti 5.4 (Notification.js) on eriytetty omiksi React-komponentiksi kuten tehtävänannossa neuvotaan. Virheilmoituksena käyttäjälle näytetään backendin frontendille lähettämä errorMessage (koskee myös Part B). Virheilmoitusten ja notifikaatioiden tyylit on määritelty tiedostossa srs/index.css.


## Part B (8/8)

Komponentti CreateBlog.js käyttää materiaalin Togglable.js komponenttia apunaan. Komponenttilla Blog on oma useState näkyvyyden määrittelemiseen ja komponentti sisältää näytettävän (yksittäisen) blogin tietojen renderöinnin, sekä useImperativeHandlen kyseisen komponentin tieojen välittämisen Parant-komponentille (App.js). Blogista tykkäämisen (AddLike) ja Blogin poistamisen (deleteBlog) suorittavat funktiot annetaan komponenttiin Blog propseina.


## Part C (7/7)

Unit testit (5.13-5.15) löytyvät tiedostosta src/tests/uniTests.test.js ja testien asetukset tiedostosta /setupTests.js. Testejä ajaessa Jest ilmoitti, että setupTest:n sisältämää importtia "import '@testing-library/react/cleanup-after-each'" ei enään tarvita, joten kommentoin sen pois ja testit näyttävät toimivan näinkin.

Run unit tests: CI=true npm test -- unitTests.test.js

Integraatiotestit (5.16 ja 5.17) löytyvät tiedostosta src/tests/integrationTests.test.js ja integraatiotestien localStorage-mock logiikkaa löytyy tiedostosta setupTests.js. Ensimmäinen testi tarkistaa, että ei-kirjautuunnelle käyttäjälle renderöidään vain LoginForm, eikä yhtään blogia. Jälkimmäinen testi taas tarkistaa, että kirjautuneelle käyttäjälle renderöidään kaikki src/services/__mock__/blogs.js tiedostossa määritellyt blogit.

Run integration test: CI=true npm test -- integrationTests.test.js


## Part D (/)
