# Osa 5

Osan 5 hakemisto sisältää sekä Blogi-sovelluksen frontendin ja backendin. Backendin pohjana on käytetty osan 4 mallivastausta.


## Part A (4/4)

Uusien blogien luonti 5.3 (CreateBlog.js) ja virheilmoituksen/notifikaation renderöinti 5.4 (Notification.js) on eriytetty omiksi React-komponentiksi kuten tehtävänannossa neuvotaan. Virheilmoituksena käyttäjälle näytetään backendin frontendille lähettämä errorMessage (koskee myös Part B). Virheilmoitusten ja notifikaatioiden tyylit on määritelty tiedostossa srs/index.css.


## Part B (8/8)

Komponentti CreateBlog.js käyttää materiaalin Togglable.js komponenttia apunaan. Komponenttilla Blog on oma useState näkyvyyden määrittelemiseen ja komponentti sisältää näytettävän (yksittäisen) blogin tietojen renderöinnin, sekä useImperativeHandlen kyseisen komponentin tieojen välittämisen Parant-komponenttiinn (App.js). Blogista tykkäämisen (AddLike) ja Blogin poistamisen (deleteBlog) suorittavat funktiot annetaan komponenttiin Blog propseina.


## Part C (/)

Test
