# Založíme si účet na Thimble

1. [otevři si Thimble](https://thimble.mozilla.org/cs)
1. Vpravo nahoře klikni na _Vytvořit účet_
1. Heslo musí
    * být nejméně 8 znaků dlouhé,
    * obsahovat číslo,
    * obsahovat VERZÁLKY i minusky.
1. Až se dostaneš zpátky na zelenou stránku, kde bude vpravo nahoře uživatelské jméno, které jsi zadala, stránku zavři.
1. Dej nám vědět, že máš hotovo, kliknutím na tlačítko „Hotovo“ na této stránce.

---

## Shrnutí zkratek


### Základní 

<kbd>Home</kbd> <kbd>End</kbd> začátek, konec řádku

<kbd class="nichtvergissmeinnicht">Ctrl+A</kbd> Výběr všeho

<kbd>Ctrl+C</kbd> Kopírovat
 
<kbd>Ctrl+V</kbd> Vložit

<kbd>Ctrl+X</kbd> Kopírovat a smazat (vyjmout) _výběr nebo bez výběru pro celý řádek_ 

odsazení <kbd>Tab</kbd> přidat <kbd>Shift+Tab</kbd> ubrat _lze odsazovat více řádků najednou_ 

Postupně <kbd>Ctrl+A</kbd> <kbd>Ctrl+C</kbd> <kbd>Ctrl+V</kbd> srovná odsazení celého souboru (Thimble při vložení kódu automaticky odsazuje)


### Další 

<kbd class="nichtvergissmeinnicht">Ctrl+→</kbd> Posun po slovech doprava

<kbd class="nichtvergissmeinnicht">Ctrl+←</kbd> Posun po slovech doleva

<kbd>Ctrl+Shift+→</kbd> Výběr po slovech doprava

<kbd>Ctrl+Shift+←</kbd> Výběr po slovech doleva


### Pokročilé

<kbd class="nichtvergissmeinnicht">Ctrl+/</kbd> Zakomentuj (výběr nebo řádek) ‒ (<kbd>/</kbd> tam, kde je na US klávesnici)

<kbd class="nichtvergissmeinnicht">Ctrl+D</kbd> Duplikovat (výběr nebo řádek)

<kbd class="nichtvergissmeinnicht">Ctrl+E</kbd> rychlá editace (v css barvy, v html styly)

<kbd class="nichtvergissmeinnicht">Alt+K</kbd> Inline dokumentace v angličtině


----

# 01 Osaháme si Thimble a klávesové zkratky

1. Otevři si [výchozí cvičení](https://thimbleprojects.org/czechitas/140019/) a klikni vpravo na _Upravit/Remix_.
1. Podívej se pod ozubené kolečko (nastavení): nastav si velikost textu a barevné schéma tak, abys kód dobře viděla.
1. Dále pod ozubeným kolečkem nastav: 
    - „Automaticky uzavírat značky“: ne 
    - „Automatické doplňování kódu“: ne
1. Zkopíruj si následující text <kbd>Ctrl+C</kbd> a vlož ho do souboru `index.html` <kbd>Ctrl+V</kbd>.
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

1. Vytvoř nadpis nejvyšší úrovně (název webu): „Web Kryštůfka Robina“.
1. Větu označkuj jako odstavec.
1. Protože kamarádství je pro medvídka Pú podstatné, označ text „dobré kamarády“ jako velmi důležitý.
1. Nezapomeň dát vědět, že máš hotovo a nezapomeň na to ani až dokončíš další úkoly.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189042)

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

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189042)

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

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189046)

----

## Bonus (pokud máš hotovo)

1. Slovo „e-mail“ udělej jako odkaz na medvídkův mail (pooh@example.com) [najdi si jak](https://google.com).
1. Přidej stejnému odkazu další atribut `title` s hodnotou _Když pošleš med, budu radši._. Co to dělá zjištíš tak, že zaparkuješ šipku myši (kurzor) nad odkazem v náhledu stránky.

---

## Shrnutí výkladu

```html
<img src="pu.jpg" alt="medvěd">
```

----

# 04 Přidáme mapu

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189046)

1. Přidej obrázek mapy do kontaktu za text, který už tam máš.
1. Přidej za mapu licencí vyžadované texty:`Autorem skenů je Paul K. pod licencí CC 2.0`.
1. Vytvoř odkaz z „Paul K.“ `https://www.flickr.com/photos/bibliodyssey/3066814584`
1. Vytvoř odkaz na licenci z textu „licencí CC 2.0“ `https://creativecommons.org/licenses/by/2.0/`
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189053)

---

# 05 Přidáme obrázkovou galerii

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189053)

**Před** nadpis _Kontakt_ dej další nadpis „Galerie“ a pod něj text `Společně se svými zvířecími kamarády zažíváme bláznivá dobrodružství.` a tyto obrázky (můžeš si zkopírovat) 
```
drak.jpg
koupel.jpg
oslik.jpg
oslik-prasatko.jpg
kralik.jpg
protivitr.jpg
pu-koupelna.jpg
pu-robin.jpg
stopy.jpg
```

**Dej hotovo.**

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189058)

---

## Shrnutí výkladu

```html
<head>
    …
    <title>Název stránky</title>
    …
</head>
```

----

# 06 Doplníme titulek

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189058)

Doplň titulek: `Kryštůfek Robin a medvídek Pú`

Abys viděla výsledek, je třeba stránku publikovat (tlačítko vpravo nahoře) a otevřít vytvořený odkaz. To je protože v _Thimble_ vidíme vlastně **náhled stránky** což stačí na vše, co dnes budeme dělat, kromě zobrazení titulku.

**Dej hotovo.**

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/297089)

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

----

# 07 Připojíme styly

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/297089)

1. Připoj si `styly.css` k HTML.
1. Nastav barvu písma pro celou stránku a jinou nastav nadpisům (všem stejnou). Třeba 
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189082/)

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

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189082)

1. nastav celé stránce bezpatkové písmo
1. nastav odkazům tučný řez písma
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189083/)


----

## Bonus

1. vycentruj hlavní nadpis

---

## Shrnutí výkladu

```css
font-size: 20px;

/* nebo */

font-size: 150%;
```

----

# 09 Měníme velikosti písma

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189083)

Nadpisy udělej o něco větší než byly doposud.

**Dej hotovo**

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189084)

----

## Bonus

1. Lépe by vypadalo, kdyby mezi řádky bylo trochu více volného místa. Typografové by řekli že je potřeba větší _řádkový proklad_, anglicky _line height_.

_Tip: Tato vlastnost se také dědí, lze ji tedy nastavit nějakému nadřazenému prvku._

---

## Shrnutí výkladu

```css
p { background-color: green; }

h1 { background-color: #008000; }
```

----

# 10 Nastavíme barvu pozadí

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189084)

1. Obal každou ze tří sekcí webu: kontakt, galerii a patičku tagem `<div>`. Patička jsou texty na konci stránky (odkaz na FB a informaci o licenci).
1. Nastav všem třem nějakou (stejnou) světlou barvu pozadí.
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/297097)

---

## Shrnutí výkladu

```html
<h1 class="tip">Tip</h1>
```

```css
.tip { color: blue; }
```

----

# 11 Přidáme třídy

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/297097)

1. Pomocí tříd nastav každé sekci jinou barvu pozadí (dej si pozor na dostatečný kontrast).

Doporučené názvy tříd: `kontakt`, `galerie`, `paticka`.

**Dej hotovo.**

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/297080)

----

## Bonus

1. V patičce vycentruj text
1. Přidej třídu `.small` a s její pomocí zmenši text odstavci s licencí v patičce.

---

## Shrnutí výkladu

```css
.tip {
	width: 300px;
	height: 100px;
}
```

----

# 12 Nastavíme obrázkům šířku

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/297080)

Nastav obrázkům šířku 300 pixelů.

**Dej hotovo.**

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189098)

----

## Bonus

1. Obrázku mapy nastav šířku na celou šířku pomocí třídy `obrazek-siroky` a procent.

---

## Shrnutí výkladu

```css
div {
	border-width: 1px;
	border-style: solid;
	border-color: black;
}

/* to samé pomocí shorthandu */
div {
    border: 1px solid black;
}
```

----

# 13 Orámujeme obrázky

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189098)

1. Nastav obrázkům šedý rámeček 2 pixely široký.
1. Mapě nastav rámeček hnědý.
1. Dej hotovo

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189099)

----

## Bonus

Změň barvu horního ohraničení (nebo dolního, nebo pravého anebo levého)

---

## Shrnutí výkladu

```css
.tip { padding: 25px; }
```

----

# 14 Vnitřní odsazení obrázků

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189099)

Přidej vnitřní odsazení (padding) 10px.

**Dej hotovo.**

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189100)

----

## Bonus

1. Nastav obrázkům také barvu pozadí, díky paddingu bude i vidět.

---

## Shrnutí výkladu

```css
.tip { margin: 10px; }
```

----

# 15 Větší mezery mezi obrázky

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189100)

Přidej obrázkům vnější odsazení 5px, aby na sebe nebyly tak nalepené.

**Dej hotovo.**

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189101)

----

## Bonus

Nastav obrázkům větší padding dole než na ostatních stranách.

---

# 16 Odsadíme obsah od okrajů

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189101)

1. Odsaď obsah kontaktu, galerie a patičky od okraje jejich boxu, ať na něj není tak nalepený.
1. V patičce odsaď text od horního a dolního okraje víc než po stranách.
1. Nastav maximální šířku 960px sekcím Kontakt a Galerie.
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189105)

----

## Bonus

Vycentruj *vodorovně* (vlevo a vpravo bude stejně volného místa) Galerii a Kontakt ‒ [najdi si jak](https://www.google.cz/search?q=horizontální%20centrování%20css)

---

# 17 Roztáhneme pozadí až do okraje

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189105)

Roztáhni pozadí Galerie až do kraje obrazovky, aniž by se zároveň roztáhl i její obsah. Tip: nelze to vyřešit jen pomocí CSS.

1. Je třeba **uvnitř** _divu_ `galerie` všechny obrázky obalit novým `<div>`, třeba s třídou `obsah`.
1. Pro `.kontakt` a `.galerie` odstraň nastavení maximální šířky… 
1. … a nastavit ji pro `<div class="obsah">`
1. Aby to bylo opravdu až do kraje, je třeba také přepsat výchozí `margin` pro prvek `<body>` na nulu.
1. Hlavní nadpis (h1) a odstavec pod ním je ale teď do kraje, chtělo by to vyřešit… 
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189107)

----

## Bonus

1. Pokud máš Galerii a Kontakt vycentrovanou z předchozího Bonusu, je třeba nyní stejným způsobem vycentrovat _div_ s třídou `obsah`.
1. Původní centrování můžeš odebrat, nemá na nic vliv.

---

## Shrnutí výkladu

```css
h1,
h2 { color: green; }

.tip h2 { color: blue; }
```

----

# 18 Zjednodušujeme kód

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189107)

1. Uprav CSS pro barvu nadpisů tak, aby využíval vícenásobný selektor.
1. Zkus využít vícenásobný selektor i pro nastavení stejného paddingu hlavních sekcí.
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189109)

----

## Bonus

1. Obarvi všechny odkazy v patičce bíle aniž bys přidávala novou třídu.

---

## Shrnutí výkladu

```css
a { color: navy; }

a:link { color: blue; } /* nenavštívený */

a:visited { color: purple; } /* navštívený */

a:hover { color: red; } /* najetí myší */

a:focus { color: green; } /* aktivovaný */

a:active { color: yellow; } /* při kliknutí */
```

----

# 19 Měníme barvu odkazů po najetí myši

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189109)

1. Udělej jinou barvou odkaz(y) po najetí kurzorem v kontaktech
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189137)

----

## Bonus

1. Uprav všechny odkazy na stránce tak, aby jim po najetí myši zmizelo podtržení.
1. Odkazy v patičce udělej bílou barvou, po najetí myši nějakou jinou a zároveň jinou než v kontaktech.

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

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189137)

1. Navigace jako odrážkový seznam, se 3 položkami podle sekcí stránky.
1. Nezapomeň na odkaz na úvodní stránku!
1. Odkaz na stránku (atribut `href`) zatím nechej prázdný, to znamená jen napsat uvozovky a nic mezi ně.
1. Dej hotovo.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189138)

---

## Shrnutí výkladu

```html
a { display: block; }

div { display: inline; }

span { display: inline-block; }
```

----

# 21 Odkazy v navigaci na jeden řádek

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189138)

1. Nastyluj menu tak, aby položky byly vedle sebe.
1. Přidej jiné podbarvení celé položky po najetí na ni.
1. Dej hotovo.

Tip: podívej se, co dělá vlastnost `list-style-type`.

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189139)

---

# 22 Přidáme sekci _O mně_

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189139)

Všechno, co je potřeba pro tenhle úkol už umíš.

1. Přidej další sekci, tentokrát `O mně` nad Galerii.
1. Dej do ní text 
    ```
    Ahoj. Jmenuji se Kryštůfek Robin a jsem malý chlapec, se kterým se zvířátka ze Stokorcového lesa spřátelila a hrají si se mnou jako s jediným člověkem z lidského světa. Kamarádím se s Medvídkem Pú, Prasátkem, Ijáčkem, Tygrem, Králíčkem se všemi jeho přáteli a příbuznými, Sovou a Klokanicí s Klokánkem.

    Znám a mám nejrůznější věci, které svým kamarádům rád půjčuji a rád je všemu naučím. Rád pořádám nebezpečné výpravy, ale všechna zvířátka se se mnou cítí v bezpečí. Občas cestuji do Afriky a zase zpátky, a mám moc rád svého medvídka. Dopoledne trávím hledáním Hnetubuda.
    ```
1. Přidej obrázek `krystufek-robin.png`
1. Dej hotovo.


> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189143)

----

## Bonus

Obrázek Kryštůfka Robina není moc dobře vidět. Líp by vypadal, kdyby byl přes celou šířku stránky. 

Pokud už jsi to udělala pro mapu, není nic snazšího než přidat stejnou třídu i tomuhle obrázku.

Pokud ne, nastav šířku na celou šířku pomocí třídy `obrazek-siroky` a procent jak obrázku v _O mně_, tak mapě v _Kontakt_.

---

# 23 Rozdělíme web na jednotlivé stránky

> Pokud jsi nestihla předchozí cvičení, [udělej si znovu _Upravit/Remix_](https://thimbleprojects.org/czechitas/189143)

1. V Thimble vytvoř nové HTML soubory `kontakt.html` a `galerie.html`. V levém sloupci, kde už je index.html, klikni do šedé plochy pravým tlačítkem myši a vyber _Nový soubor_ a vyplň jeho název včetně `.html` na konci.
1. Do navigace přidej odkazy na tyto soubory a nezapomeň taky na odkaz na `index.html`.
1. Zkopíruj do nich všechen stávající HTML kód z `index.html` (kód, který ti vložil _Thimble_ do nových souborů přepiš).
1. Odmaž na každé ze 3 stránek obsah, který tam nepatří (záhlaví a patičku budou mít všechny stránky shodnou).
1. Zruš barevné pozadí pro jednotlivé sekce. Teď už není potřeba je odlišovat, když každá je na stránce sama. (Stačí odmazat daná pravidla.)
1. Proklikej si svůj nový web.
1. Dej hotovo.

Pozor, aby při odmazávání nezůstaly nadbytečné otvírací/uzavírací tagy!

> Pokud nevíš, jak má výsledek vypadat, [podívej se sem](https://thimbleprojects.org/czechitas/189146)

----

## Bonus

1. Na každé stránce zvýrazni (odliš) v navigaci odkaz na aktuální stránku (musíš přidat novou třídu a přiřadit ji na každé stránce u jiného odkazu).
1. Nahraď aktivní odkazy elementem `span` (řádková obdoba neutrálního `div`), aby na aktivní odkaz nešlo kliknout. Pomocí pokročilých selektorů zachovej pro takto změněný prvek vzhled aktivního odkazu.

1. Nastav celé stránce jinou než bílou barvu pozadí.

---

# Publikujeme hotový web na internet

1. Vpravo nahoře klikni na _Publikovat_ a _Aktualizovat publikovanou verzi_.
1. Thimble ti ukáže adresu, na které tvůj web bude veřejně k vidění.
1. Dej hotovo.

---

# 24 Dohráno

[Všechny úkoly, k dispozici tak, aby sis je mohla projít i doma](https://hackmd.io/s/BylzJbePx)

[Púův web, jak by taky mohl vypadat, když se udělají všechny bonusové úkoly](https://thimbleprojects.org/czechitas/189149/).
