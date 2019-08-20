# Osa 1

## Kurssitiedot

Edetty ohjeen mukaan. Päädyin käyttämään div-tagia "React-fracmenttien" sijaan.

## Unicafe

Edetty ohjeen mukaan. Laskutoimitukset on määritelty funktioksi Statistics komponenttiin. Osan 1.11 taulukko-muodossa syntyvä ongelma ratkeaa wrappaamallä Statistic komponentin palauttama rivi tbody-tagiin.  


## Anekdootit

Tämä oli ehdottomasti viikon vaikein tehtävä, niinkuin tähtimerkistä voikin olettaa. Ratkaisussani koostuu komonenteista **App**, **Anecdote** ja globaalista listasta **anecdotes**. Komponenttia Anecdotes käytetään renderöimään sekä "Anecdote of the day" ja "Most voted anecdote". Komponentti saa propseina listan äänistä ja renderöitävän anecdotin paikan listassa (sama molemmissa listoissa anecdotes ja voteList). Komponentilla App on kaksi hookia: **selected** ja **voteList**. Selected-hook osoittaa sen hetkisen "Anecdote of the day" paikkaan anecdotes ja voteList listoissa ja se valitaan satunnaisesti kaikkien anekdoottien joukosta. VoteList-hook sisältää kunkin anekdootin äänien lukumäärän (samassa järjestyksessä kuin anecdotes-lista). App-komponentilla on myös kaksi funktiota **addVote()** ja **mostVotedElement()**. Addvote-funktio lisää sen hetkisen select-anekdootin äänimäärä yhdellä (kutsutaan button-tagista). MostVotedElement-funktio palauttaa eniten ääniä olevan elementin paikan anecdotes listassa.

Tehävässä suurimman sekaannuksen aiheutti voteList eli "äänilista hookki". Vasta useamman tunnin debuggauksen jälkeen huomasin että array.length ei toimi hookissa. Tästä ei kuitenkaan seurannut mitään järkevää error-messagea, mikä hankaloitti pugin löytämistä melkoisesti (array.length arvo oli undefined, olisi pitäny olla 6)

