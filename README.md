# Lístečky

Aplikace nahrazující statusové post-ity pro hands-on workshopy.

Jedna instance běží na https://listecky.herokuapp.com/

## Přednášející

* Má rozhraní na [/teacher](https://listecky.herokuapp.com/teacher)

### Statusy studentů

* Ve svém rozhraní vidí, zda je student/ka online (zelený text místo bílého).
* A vidí status jaký si nastavila.

### Začítek cvičení

* Tlačítkem „Úkol zadán“ se status odstraní a studentovi se znemožní volba statusu.  

### Připomenutí

* Tlačítkem „Chci zjistit, zda už nejsou hotové“ se pošle otázku všem, které nemají status `done` notifikace.

### Konec cvičení / začátek výkladu

* Tlačítkem „Začínám výklad“ se pošle všem pošle notifikace a nastaví `not_done`.  

## Student/ka

* Na [homepage](https://listecky.herokuapp.com/) si najde svoje jméno a dál pracuje na „své“ stránce.
* Klikáním na jednotlivé statusy se mění. 
* Pokud se status změnil, znamená to, že je změněný i na serveru.
* Při zavření okna nebo refreshi se status smaže.
* Pokud přednášející pošle připomínací notifikaci, znamená kliknutí na <kbd>OK</kbd>, změnu na stav `Hotovo`, <kbd>Cancel</kbd> beze změny.  

## Data

* Data o studentech a koučích jsou zatím natvrdo v aplikaci (viz app.jss data)

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
