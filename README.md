# Lístečky

Aplikace nahrazující statusové post-ity pro hands-on workshopy.

Jedna instance běží na https://listecky.herokuapp.com/

## Přednášející

* Má rozhraní na [/teacher](https://listecky.herokuapp.com/teacher)

### Statusy studentů

* Ve svém rozhraní vidí, zda je student/ka online (jsou neprůhledné).
* Podle barvy rámečku se jménem studenta vidí status jaký aktuálně má.
* Podle barvy stolu vidí rychle, zda je někdo přítomen, zda jsou všichni hotovi nebo jesti někdo u stolu potřebuje pomoc.

### Začátek cvičení

* Tlačítkem „Úkol zadán“ se studentovi umožní volba statusu.
* Pokud je vybraná jiná hodnota v selectu pod ním, než „Vyber úkol“, pošle se zadání úkolu a automaticky se posune na další úkol, pokud existuje.
* Texty úkolů je třeba zadat před spuštěním aplikace do `tasks.md` v daném formátu (viz ukázkový).

### Připomenutí

* Tlačítkem „Nemají už hotovo?“ se pošle otázku všem, které nemají status `done` notifikace.

### Konec cvičení / začátek výkladu

* Tlačítkem „Začínám výklad“ se pošle všem pošle notifikace a nastaví `not_done`.  

### Přestávka

* Tlačítkem „Přestávka“ se po zadání délky přestávky v minutách se spustí odpočet, pošle notifikace a nastaví `not_done`.
  
### Stopky

* Pokud není přestávka zobrazuje se mu čas, který aktuální stav trvá.

### Chat

* Chat umožňuje posílat i víceřádkové zprávy od přednášejícího všem studentům.
* Zprávy lze formátovat pomocí syntaxe [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)
* „Jako kód“ obalí celý odeslaný kód do `<pre>` a `<code>` (ekvivalent ``` před a za v Markdownu).
* Lze smazat nejnovější zprávu.
* Zprávy jsou dostupné všem i když se připojí později.
* Přijímání ani posílání zpráv není podmíněno stavem třídy.

## Student/ka

* Na [homepage](https://listecky.herokuapp.com/) si najde svůj stůl a židli a dál pracuje na „své“ stránce.
* Může si nastavit svoje jméno.
* Klikáním na jednotlivé statusy se tyto mění.
* Při zavření okna nebo refreshi se status smaže.
* Pokud přednášející pošle připomínací notifikaci, znamená kliknutí na <kbd>OK</kbd>, změnu na stav `Hotovo`, <kbd>Cancel</kbd> beze změny.  

## Data

* Data o stolech, židlích a koučích jsou zatím natvrdo v aplikaci (viz app.js)

## Provoz

```
> npm run start
```


## Instalace 

```
> npm install
```

Je to funkční na heroku.com, ale lze provozovat lokálně.


### Heroku

Pro provoz na Heroku nastavit http-session-affinity takto:

```
> heroku features:enable http-session-affinity
```

A časovou zónu:

```
> heroku config:add TZ="Europe/Prague"
```

A angličtinu (výchozí je čeština)

```
> heroku config:set locale="en"
```


## Vývoj

localhost:4000 (browsersync)

```
> npm run watch
```
