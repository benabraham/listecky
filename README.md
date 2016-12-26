# Lístečky

Aplikace nahrazující statusové post-ity pro hands-on workshopy.

Jedna instance běží na https://listecky.herokuapp.com/

## Přednášející

* Má rozhraní na [/teacher](https://listecky.herokuapp.com/teacher)

### Statusy studentů

* Ve svém rozhraní vidí, zda je student/ka online (jsou neprůhledné).
* A vidí podle barvy status jaký si nastavila.

### Začátek cvičení

* Tlačítkem „Úkol zadán“ se status odstraní a studentovi se znemožní volba statusu.  

### Připomenutí

* Tlačítkem „Chci zjistit, zda už nejsou hotové“ se pošle otázku všem, které nemají status `done` notifikace.

### Konec cvičení / začátek výkladu

* Tlačítkem „Začínám výklad“ se pošle všem pošle notifikace a nastaví `not_done`.  

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

Pro provoz na heroku nastavit http-session-affinity takto:

```
> heroku features:enable http-session-affinity
```

## Vývoj

localhost:4000 (browsersync)

```
> npm run watch
```
