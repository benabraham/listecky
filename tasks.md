# Založíme si účet na Repl.it

1. [otevři si Repl](https://repl.it)
1. Dole klikni na _Sign up_.
1. Uživatelské jméno musí být 2‒15 znaků dlouhé.
1. Zadej e-mail, na který máš přístup, přijde ti na něj ověřovací odkaz.
1. Heslo musí být nejméně 6 znaků dlouhé.
1. V dalším okně vyplň svůj profil (stačí skutečné jméno a příjmení ‒ zjednoduší to komunikaci).
1. Podívej se do doručené pošty (prohledej i spam) a najdi e-mail od Repl.it s textem _Verify your e-mail_. Klikni na odkaz v něm obsažený a účet máš ověřen.
1. Dej nám vědět, že máš hotovo, kliknutím na tlačítko „Hotovo“ na této stránce.

---

## Shrnutí zkratek


### Základní

<kbd>Home</kbd> <kbd>End</kbd> začátek, konec řádku

<kbd class="nichtvergissmeinnicht">Ctrl+A</kbd> Výběr všeho

<kbd>Ctrl+C</kbd> Kopírovat _výběr nebo bez výběru pro celý řádek_

<kbd>Ctrl+V</kbd> Vložit

<kbd>Ctrl+X</kbd> Kopírovat a smazat (vyjmout) _výběr nebo bez výběru pro celý řádek_

<kbd>Tab</kbd> odsazení přidat <kbd>Shift+Tab</kbd> ubrat <br> _lze odsazovat více řádků najednou_

<kbd>Ctrl+Enter</kbd> spustit kód (to samé, co kliknutí na zelené tlačítko run)

### Další

<kbd class="nichtvergissmeinnicht">Ctrl+→</kbd> Posun po slovech doprava

<kbd class="nichtvergissmeinnicht">Ctrl+←</kbd> Posun po slovech doleva

<kbd>Ctrl+Shift+→</kbd> Výběr po slovech doprava

<kbd>Ctrl+Shift+←</kbd> Výběr po slovech doleva

<kbd>Shift+Alt+F</kbd> zformátovat celý dokument

<kbd>F1</kbd> nebo <kbd>Ctrl+Shift+P</kbd> vyhledávání ve všech dostupných příkazech


### Pokročilé

<kbd class="nichtvergissmeinnicht">Ctrl+K Ctrl+C</kbd> zakomentuje/odkomentuje řádek (není nutno vybírat)

<kbd class="nichtvergissmeinnicht">Ctrl+D</kbd> Najde další výskyt vybraného (označeného) textu

<kbd class="nichtvergissmeinnicht">Ctrl+I</kbd> vybere celý řádek

<kbd class="nichtvergissmeinnicht">Alt+G</kbd> přenese kurzor na zadané číslo řádku

----

# 01 Osaháme si Repl.it a klávesové zkratky

1. Otevři si [výchozí cvičení](https://repl.it/@tvorimweb1/00) a nahoře klikni na _fork_.
1. Podívej se pod ozubené kolečko (nastavení): nastav si velikost textu (_font size_) a barevné schéma (_theme_) tak, abys kód dobře viděla.
1. Dále si případně pod ozubeným kolečkem nastav: _code intelligence_ na _disabled_
1. Zkopíruj si následující text <kbd>Ctrl+C</kbd> a vlož ho do souboru `index.html` <kbd>Ctrl+V</kbd> **místo** komentáře v souboru (šedý text).
	```
	Web Kryštůfka Robina

	Představím vám zde své dobré kamarády:
	medvídka Pú, Tygříka, Íjáčka a Prasátko.
	```
1. Opět dej prosím „Hotovo“.

---

## Shrnutí výkladu

```html
<h1>Nadpis nejvyšší úrovně</h1>

<p>odstavec</p>

<strong>důležitý text</strong>
```

----

# 02 Zkusíme si první tagy

1. Vytvoř nadpis nejvyšší úrovně (název webu) z textu „Web Kryštůfka Robina“.
1. Zbývající větu označkuj jako odstavec.
1. Protože kamarádství je pro medvídka Pú podstatné, označ text „dobré kamarády“ jako velmi důležitý.
1. Nezapomeň dát vědět, že máš hotovo a nezapomeň na to ani až dokončíš další úkoly.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://02--tvorimweb1.repl.co/)

---

## Shrnutí výkladu

```html
<h1>Nadpis nejvyšší úrovně</h1>

<h2>Nadpis druhé úrovně</h2>

<h3>Nadpis třetí úrovně</h3>

<a href="https://google.com">odkaz na Google.com</a>
```

----

# 03 Přidáme _Kontakt_

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/02)

1. Vytvoř sekci Kontakt, tedy
	* nadpis `Kontakt`
	* a text
	```
	Budeme rádi, když nám napíšeš na e-mail nebo se s námi skamarádíš na Facebooku.

	To je mapa, která tě dovede do Stokorcového lesa, kde s medvídkem Pú a jeho kamarády provádíme všechny naše lotroviny.
	```
1. Ze slova „Facebooku“ udělej odkaz na Facebook.
1. Vyzkoušej, že odkaz funguje.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://03--tvorimweb1.repl.co/)

----

## Bonus (pokud máš hotovo)

1. Slovo „e-mail“ udělej jako odkaz na medvídkův mail (pooh@example.com), [najdi si jak](https://google.com).
1. Přidej stejnému odkazu další atribut `title` s hodnotou _Když pošleš med, budu radši._. Co to dělá, zjištíš tak, že zaparkuješ šipku myši (kurzor) nad odkazem v náhledu stránky.

---

## Shrnutí výkladu

```html
<img src="pu.jpg" alt="medvěd">
```

----

# 04 Přidáme mapu

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/03)

1. Přidej obrázek mapy do kontaktu za text, který už tam máš.
1. Přidej za mapu licencí vyžadované texty:`Autorem skenů je Paul K. pod licencí CC 2.0`.
1. Vytvoř odkaz z „Paul K.“ `https://www.flickr.com/photos/bibliodyssey/3066814584`
1. Vytvoř odkaz na licenci z textu „licencí CC 2.0“ `https://creativecommons.org/licenses/by/2.0/`
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://04--tvorimweb1.repl.co/)

---

## Připomínka užitečných zkratek

<kbd>Alt+Shift+I</kbd> Vloží kurzor na každý řádek ve výběru
<kbd>Home</kbd> <kbd>End</kbd> začátek, konec řádku (srovná kurzory na stejnou pozici)

----

# 05 Přidáme obrázkovou galerii

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/04)

**Před** nadpis _Kontakt_ dej další nadpis „Galerie“ a pod něj text `Společně se svými zvířecími kamarády zažíváme bláznivá dobrodružství.` a tyto obrázky (můžeš si zkopírovat)
```
<img src="obrazky/drak.jpg" alt="Papírový drak">
<img src="obrazky/koupel.jpg" alt="Koupel ve vaně">
<img src="obrazky/oslik.jpg" alt="Pú, Kryštůfek Robin a oslik">
<img src="obrazky/oslik-prasatko.jpg" alt="Oslík s Prasátkem">
<img src="obrazky/kralik.jpg" alt="Pú, prasátko a králík">
<img src="obrazky/protivitr.jpg" alt="Pú a prasátko proti větru">
<img src="obrazky/pu-koupelna.jpg" alt="Pú před rohožkou">
<img src="obrazky/pu-robin.jpg" alt="Pú s Robinem u stolu">
<img src="obrazky/stopy.jpg" alt="Pú s prasátkem zkoumají stopy">
```

**Dej hotovo.**

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://05--tvorimweb1.repl.co/)

----

## Bonus

Doplň do hlavičky ještě popis stránky pro vyhledavače `To je web Kryštůfka Robina o medvídkovi Pú a jeho kamarádech.` [najdi si jak](https://www.google.cz/search?q=meta+description)

---

## Shrnutí výkladu

```html
<head>
	…
	<link rel="stylesheet" href="nazevsouboru.css">
	…
</head>
```

```css
p {
	color: white;
	background-color: black;
}
```

----

# 07 Připojíme styly

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/06)

1. Připoj si `styly.css` k HTML.
1. Nastav barvu písma pro celou stránku (třeba šedou `dimgrey`)
1. Nastav oběma nadpisům jinou barvu (třeba zelenou `darkgreen`)
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://07--tvorimweb1.repl.co/)

---

## Shrnutí výkladu

```css
p {
	font-style: italic;  /* nebo normal */

	font-weight: bold; /* nebo normal */

	font-family: sans-serif; /* nebo serif */

	text-align: center; /* nebo left nebo right */
}
```

----

# 08 Upravíme písmo

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/07)

1. Nastav celé stránce bezpatkové písmo.
1. Nastav odkazům tučný řez písma.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://08--tvorimweb1.repl.co/)


----

## Bonus

1. Vycentruj hlavní nadpis.
1. Použij zajímavější písma. Na nadpisy písmo _Mali_ a pro všechen ostatní text nastav písmo _Nunito_.
1. Abys je mohla používat, je potřeba připojit fonty ze služby Google Fonts. To se udělá připojením CSS (získá se na jejich stránce v závislosti na požadovaných písmech a jejich řezech). Do hlavičky dokumentu přidej následující `link`, který písma načte:
`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mali:400,700|Nunito:400,700&amp;subset=latin-ext">`
1. Odteď s nimi můžeš v CSS pracovat, upravuj vlastnost `font-family`.

---

## Shrnutí výkladu

```css
font-size: 1.5rem;

/* nebo */

font-size: 20px;
```

----

# 09 Měníme velikosti písma

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/08)

Nadpisy udělej o něco větší než byly doposud, třeba `3.5rem` a `2.5rem`

**Dej hotovo**

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://09--tvorimweb1.repl.co/)

----

## Bonus

1. Lépe by vypadalo, kdyby mezi řádky bylo trochu více volného místa. Typografové by řekli že je potřeba větší _řádkový proklad_, anglicky _line height_.

_Tip: Tato vlastnost se také dědí, lze ji tedy nastavit nějakému nadřazenému prvku._

---

## Shrnutí výkladu

```css
p { background-color: green; }

h1 { background-color: #008000; }

h2 { background-color: rgb(0, 128, 0); }
```

----

# 10 Nastavíme barvu pozadí

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/09)

1. Obal každou ze tří sekcí webu: kontakt, galerii a patičku tagem `<div>`. Patička je odstavec na konci stránky s informací o licenci.
1. Nastav všem třem nějakou (stejnou) světlou barvu pozadí, třeba `#fcf5cf`
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://10--tvorimweb1.repl.co/)

---

## Shrnutí výkladu

```html
<h1 class="tip">Tip</h1>
<p class="perex tip"></p>
```

```css
.tip { color: blue; }
.perex { font-size: 1.2rem; }
```

----

# 11 Přidáme třídy

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/10)

1. Pomocí tříd nastav každé sekci jinou barvu pozadí (dej si pozor na dostatečný kontrast).

Doporučené názvy tříd: `galerie`, `kontakt`, `paticka`.

Můžeš použít třeba tyto barvy: `#fcf5cf`, `#defccf`, `#804000`.

_Tip: Poslední barva je hodně tmavá a text nebyl čitelný, nastav proto barvu textu v patičce na bílou._

Nezapomeň smazat nastavení barvy pozadí pro všechny prvků `<div>`, které už není potřeba.

**Dej hotovo.**

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://11--tvorimweb1.repl.co/)

----

## Bonus

1. V patičce vycentruj text
1. Přidej třídu `.licence` a s její pomocí zmenši text v odstavci s licencí v patičce.

---

## Shrnutí výkladu

```css

/* rozměry */
.tip {
	width: 300px;
	height: 100px;
	max-width: 100%;
}

/* ohraničení */
div {
	border-width: 1px;
	border-style: solid;
	border-color: black;
}

/* totéž pomocí shorthandu */
div {
	border: 1px solid black;
}

/* vnitřní výplň */
.tip { padding: 25px; }


/* vnější okraj */
.tip { margin: 10px; }
```

----

# 12 Nastavíme obrázkům šířku

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/11)

1. Nastav obrázkům šířku 300 pixelů.
1. Nastav obrázkům zelený rámeček (třeba `#559933`) široký 2 pixely.
1. Mapě nastav rámeček žlutý, třeba `rgb(255, 229, 102)`.
1. Přidej vnitřní odsazení (padding) `0.6rem`.
1. Dej hotovo.
1. Přidej obrázkům vnější odsazení `0.3rem`, aby na sebe nebyly tak nalepené.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://15--tvorimweb1.repl.co/)

----

## Bonus

1. Obrázku mapy nastav šířku na celou šířku stránky pomocí třídy `obrazek-siroky` a procent.
1. Změň obrázkům v galerii barvu třeba dolního ohraničení třeba na `#2a4d19`.
1. Nastav obrázkům také barvu pozadí, díky paddingu bude i vidět.
1. Nastav obrázkům větší margin dole než na ostatních stranách.

----

# 16 Odsadíme obsah od okrajů

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/15)

1. Odsaď obsah kontaktu, galerie a patičky od okraje jejich boxu, ať na něj není tak nalepený, třeba `1rem`.
1. V patičce odsaď text od horního a dolního okraje víc než po stranách.
1. Nastav maximální šířku `960px` sekcím Kontakt a Galerie.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://16--tvorimweb1.repl.co/)

----

## Bonus

Vycentruj *vodorovně* (vlevo a vpravo bude stejně volného místa) Galerii a Kontakt ‒ [najdi si jak](https://www.google.cz/search?q=horizontální%20centrování%20css)

---

## Bonus

1. Pokud máš Galerii a Kontakt vycentrovanou z předchozího Bonusu, je třeba nyní stejným způsobem vycentrovat _div_ s třídou `obsah`.
1. Původní centrování můžeš odebrat, nemá už na nic vliv.

---

## Shrnutí výkladu

```html
<ul>
	<li>odrážkový</li>
	<li>seznam</li>
</ul>
```

----

# 20 Přidáme navigaci (menu)

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/19)

1. Vytvoř navigaci jako odrážkový seznam: podle sekcí stránky a nezapomeň na odkaz na úvodní stránku! Bude tedy mít celkem 3 položky.
1. Navigaci umísti za úvod.
1. To, kam odkazy povedou (atribut `href`) zatím neřeš a nechej ho prázdný: to znamená jen napsat uvozovky a nic mezi ně.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://20--tvorimweb1.repl.co/)

----

## Shrnutí výkladu

```html
a { display: block; }

div { display: inline; }

span { display: inline-block; }
```

----

# 21 Odkazy v navigaci na jeden řádek

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/20)

1. Přidej menu (`<ul>`) třídu `menu`.
1. Nastyluj menu tak, aby položky byly vedle sebe.
1. Položky vycentruj.
1. Aby se na ně lépe trefovalo, zvětši písmo odkazů, třeba na `1.5rem`.
1. Aby se na ně trefovalo ještě líp, dej jim padding vertikálně i horizontálně.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://21--tvorimweb1.repl.co/)

----

## Bonus

1. Odstraň odkazům v menu podtržení.
1. Odstraň odkazům v menu tučnost.

Případně ještě můžeš změnit barevnost menu:

1. Podbarvi menu třeba zelenou `#559933`.
1. Aby se daly položky přečíst, obarvi odkazy třeba na žluto `#ffe566`.
1. Položku v menu po najetí kurzorem nastyluj inverzně (zelený text na žlutém pozadí).
1. Odstraň bílou mezeru mezi menu a Galerií.


K témuž cíli často vede více cest. Podobného výsledku dosáhneš i [pomocí **flexboxu**](https://www.vzhurudolu.cz/prirucka/css3-flexbox#sup-na-zakladni-pojmy-flex-kontejner-a-flex-polozka-hlavni-a-pricna-osa).

1. Nastav seznamu s odkazy `display: flex;`.
1. Odstraň odrážky pomocí vlastnosti `list-style-type`.
1. Pomocí vlastnosti `justify-content` změň výchozí uspořádání odkazů. [Podívej se jak na to.](https://www.vzhurudolu.cz/prirucka/css3-flexbox-kontejner#justify-content) Když si podbarvíš položky seznamu nějakou výraznější barvou, bude ti možná jasnější, co jednotlivé hodnoty `justify-content` způsobují.
1. Ponechej uspořádání, které ti vyhovuje.
1. Odstraň případné podbarvení položek seznamu.

----

# 22 Přidáme sekci _O mně_

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/21)

Všechno, co je potřeba pro tenhle úkol, už umíš.

1. Přidej další sekci, tentokrát `O mně` nad Galerii.
1. Dej do ní text
	```
	Ahoj. Jmenuji se Kryštůfek Robin a jsem malý chlapec, se kterým se zvířátka ze Stokorcového lesa spřátelila a hrají si se mnou jako s jediným člověkem z lidského světa. Kamarádím se s Medvídkem Pú, Prasátkem, Ijáčkem, Tygrem, Králíčkem se všemi jeho přáteli a příbuznými, Sovou a Klokanicí s Klokánkem.

	Znám a mám nejrůznější věci, které svým kamarádům rád půjčuji a rád je všemu naučím. Rád pořádám nebezpečné výpravy, ale všechna zvířátka se se mnou cítí v bezpečí. Občas cestuji do Afriky a zase zpátky, a mám moc rád svého medvídka. Dopoledne trávím hledáním Hnetubuda.
	```
1. Před text dej obrázek `krystufek-robin.png`.
1. Nastav barvu pozadí nové sekce na nějakou světle modrou, třeba `#ccf2ff`.
1. Dej hotovo.


> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://22--tvorimweb1.repl.co/)

----

## Bonus

Obrázek Kryštůfka Robina není moc dobře vidět. Líp by vypadal, kdyby byl přes celou šířku stránky.

Pokud už jsi to udělala pro mapu, není nic snazšího než přidat stejnou třídu i tomuhle obrázku.

Pokud ne, nastav šířku na celou šířku pomocí třídy `obrazek-siroky`, které nastavíš šířku v procentech. Udělej to jak s obrázkem v _O mně_, tak mapou v sekci _Kontakt_.

---

# 24 Dohráno

[Všechny úkoly, k dispozici tak, aby sis je mohla projít i doma](https://hackmd.io/ECDLL0EdRBCdi5KTavkj4A)

[Púův web, jak by taky mohl vypadat, když se udělají všechny bonusové úkoly](https://24--tvorimweb1.repl.co/) a jeho [zdrojové kódy](https://repl.it/@tvorimweb1/24)
