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

1. Otevři si [výchozí cvičení](https://repl.it/@tvorimweb1/Adela-cestuje-START) a nahoře klikni na _fork_.
1. Podívej se pod ozubené kolečko (nastavení): nastav si velikost textu (_font size_) a barevné schéma (_theme_) tak, abys kód dobře viděla.
1. Dále si případně pod ozubeným kolečkem nastav: _code intelligence_ na _disabled_
1. Ve složce `podklady` nalezneš soubor `texty.txt`. Vyber z něj všechen text <kbd>Ctrl+A</kbd>, zkopíruj ho <kbd>Ctrl+C</kbd> a vlož ho do souboru `index.html` <kbd>Ctrl+V</kbd> **místo** komentáře v souboru (šedý text). 
1. Opět dej prosím „Hotovo“.

---

## Shrnutí výkladu

```html
<h1>Nadpis nejvyšší úrovně</h1>

<h2>Nadpis druhé úrovně</h2>

<h3>Nadpis třetí úrovně</h3>

<p>odstavec</p>

<strong>důležitý text</strong>
```

----

# 02 Vytvoříme základní strukturu stránky

1. Vytvoř nadpis nejvyšší úrovně (název webu) z textu „Adéla na cestách“.
1. Nadpisy 4 hlavních sekcí budou nadpisy 2. úrovně: _O mně, Fotogalerie, Turistický průvodce, Kontakt_
1. Zbývající texty uvnitř sekcí jsou odstavce. Ceník zatím přeskoč.
1. V sekcích _Průvodce_ a _Kontakt_ jsou ještě nadpisy 3. úrovně:_Orientační ceník, Oficiální kontakt_.
1. Patička je jen odstavec. 
1. Nezapomeň dát vědět, že máš hotovo a nezapomeň na to ani až dokončíš další úkoly.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-01--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```html
<ul>
    <li>položka seznamu</li>
    <li>další položka seznamu</li>
</ul>
```

----

# 03 _Ceník_ jako odrážkový seznam

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-01)
 
1. Z ceníku vytvoř odrážkový seznam.
1. Dej hotovo a jestli chceš, můžeš se pustit do bonusového úkolu. 

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-02--tvorimweb1.repl.co)

----

## Bonus (pokud máš hotovo)

1. Ceník patří do tabulky. Mrkni se do taháku, jakou strukturu musí mít tabulky v HTML, a nahraď odrážkový seznam tabulkou.

---

## Shrnutí výkladu

```html
<a href="https://google.com">odkaz na Google.com</a>
```

----

# 04 Přidáme odkazy

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-02)

1. V sekci _Kontakt_ vytvoř odkaz z textu „napiš na email“. Odkaz povede na e-mailovou adresu `adela@email.cz`.
1. V témže odstavci vytvoř odkaz na Facebook z textu „ozvi na Facebooku“.
1. V kontaktních údajích doplň znovu odkaz na Adélin e-mail.
1. Vyzkoušej, že odkazy fungují!
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-03--tvorimweb1.repl.co)

----

## Bonus (pokud máš hotovo)

1. Odkazem může být i telefonní číslo. Když na takový odkaz ťukneš na telefonu, vytočí se dané číslo a můžeš rovnou volat. [Podívej se, co je potřeba napsat do atributu `href`](https://jecas.cz/odkaz#href), aby to fungovalo.

---

## Shrnutí výkladu

```html
<img src="adela.jpg" alt="Adéla">
```

<kbd>Alt+Shift+I</kbd> Vloží kurzor na každý řádek ve výběru
<kbd>Home</kbd> <kbd>End</kbd> začátek, konec řádku (srovná kurzory na stejnou pozici)

----

# 05 Přidáme obrázky

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-03)

1. Přidej fotku Adély `foto.jpg` za nadpis O mně
1. Přidej 9 obrázků `hory1-9.jpg` za odstavec v sekci Fotogalerie

```
hory1.jpg
hory2.jpg
hory3.jpg
hory4.jpg
hory5.jpg
hory6.jpg
hory7.jpg
hory8.jpg
hory9.jpg
```

1. Přidej obrázek `turistika.jpg` za nadpis Turistický průvodce
1. Přidej obrázek `mapa.png` před nadpis _Kontaktní údaje_
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-04--tvorimweb1.repl.co)

----

## Bonus (pokud máš hotovo)

1. Odkazem můžeš obalit nejen text, ale třeba i obrázek. Vytvoř z obrázku mapy odkaz na mapy.cz.

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

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-04)

Doplň titulek: `Adéliny cesty po horách`

Abys viděla výsledek, je třeba stránku v samostatném okně. Klikni na ikonu se šipkou vpravo vedle adresního řádku v podokně s náhledem. V _Repl.it_ totiž vidíme vlastně **náhled stránky** což stačí na vše, co dnes budeme dělat, kromě zobrazení titulku, kdy potřebujeme vidět stránku samostatně.

**Dej hotovo.**

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-05--tvorimweb1.repl.co)

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

# 07 Připojíme styly a obarvíme nadpisy a odkazy

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-05)

Použij barvy ze souboru `podklady/barvy.txt`, ale zkus klidně i svoje vlastní barvy. Záleží jen na tobě, jak moc chceš, aby se tvůj web podobal vzorové stránce.

1. Připoj si `style.css` k HTML.
1. Hlavní nadpis obarvi na červenou.
1. Nadpisy 2. úrovně obarvi na hnědou.
1. Odkazy budou hnědé.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-06--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```css
p {
    font-style: italic;  /* nebo normal */

    font-weight: bold; /* nebo normal */

    font-family: sans-serif; /* nebo serif */

    font-size: 1.5rem;

    text-align: center; /* nebo left nebo right */
}
```

----

# 08 Upravíme písmo

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-06)

1. Všechny texty na stránce udělej bezpatkovým písmem (`sans-serif`) o velikosti `1.2rem`.
1. Všechny nadpisy patkovým písmem (`serif`) a kurzívou.
1. Hlavní nadpis na střed a písmem velkým `5rem`
1. Nadpisy 2. úrovně jsou na střed a písmem velkým `3rem`.
1. Nadpisy 3. úrovně jsou písmem velkým `1.5rem`.
1. Odkazy kurzívou.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-07--tvorimweb1.repl.co)

----

## Bonus

1. Použij zajímavější písma. Na nadpisy písmo _Playfair Display_ a pro všechen ostatní text nastav písmo _Raleway_.
1. Abys je mohla používat, je potřeba připojit fonty ze služby Google Fonts. To se udělá připojením CSS (získá se na jejich stránce v závislosti na požadovaných písmech a jejich řezech). Do hlavičky dokumentu přidej následující `link`, který písma načte:
`<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i|Raleway:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet">`
1. Odteď s nimi můžeš v CSS pracovat, upravuj vlastnost `font-family`.

---

## Shrnutí výkladu

```html
<section>
    <h2>Nadpis</h2>
    <img src="foto.jpg" alt="fotka">
    <p>Úryvek novinky…</p>
</section>

<header> … </header>

<footer> … </footer>
```

```css
section {
    background-color: #fff1e6;
}
```

----

# 09 Rozdělení stránky

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-07)

1. Obal hlavní nadpis značkou pro záhlaví.
1. Obal odstavec s patičkou značkou pro zápatí.
1. Rozděl zbytek stránky na sekce pomocí značek pro sekci
1. Všechny sekce budou mít žlutou barvu pozadí (později změníme).
1. Dej hotovo

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-08--tvorimweb1.repl.co)

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

# 10 Využijeme třídy

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-08)

1. Pomocí tříd nastav každé sekci jinou barvu pozadí (dej si pozor na dostatečný kontrast).

Doporučené názvy tříd: `omne`, `fotogalerie`, `pruvodce`, `kontakt`

Každá sekce bude mít jinou barvu pozadí. Střídavě béžovou a světle hnědou (`#fff1e6`, `#f9e3d0`). Případně vyzkoušej vlastní barvy.

**Dej hotovo.**

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-09--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```css
/* vícenásobný selektor */
h1,
a {
    color: crimson;
}

/* kontextový selektor */
.tip h2 { color: aqua; }
```

----

# 11 Zjednodušujeme kód

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-09)

1. Zjednoduš svoje CSS. Styly společné pro všechny nadpisy, nadpisy 2. a 3. úrovně spoj vždy do jednoho vícenásobného selektoru. Spoj i styly společné pro více sekcí. Pokud jsi postupovala správně, tvoje stránka se vizuálně nezměnila.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-10--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```css
a { color: navy; }
a:hover { color: red; } /* najetí myší */
a:focus { color: green; } /* aktivace klávesnicí */ 
a:visited { color: purple; } /* navštívený */
a:active { color: yellow; } /* při kliknutí */
```

----

# 12 Změníme vzhled odkazů po najetí myši

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-10)

1. Všechny odkazy po najetí myši změní barvu písma a pozadí.
1. Dej hotovo

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-11--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```css
.tip {
    width: 300px;
    height: 100px;
    max-width: 100%;
}
```

----

# 13 Nastavíme obrázkům šířku

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-11)

1. Obrázky v galerii budou široké ⅓ stránky.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-12--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```css
div {
    border-width: 1px;
    border-style: solid;
    border-color: black;
}

/* totéž pomocí shorthandu */
div {
    border: 1px solid black;
    border-radius: 6px;
}
```

----

# 14 Orámujeme obrázky

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-12)

1. Nastav obrázkům v galerii hnědý rámeček (třeba `#756158`) široký 2 pixely.
1. Zaobli obrázkům rohy.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-13--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```css
.tip { padding: 1rem; }
```

----

# 15 Odsazení sekcí

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-13)

1. Všem sekcím na stránce nastav padding tak, aby měly naše barevné pruhy pěkné odsazení.
1. Nastav horní a dolní padding patičce.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-14--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```css
.tip { 
    float: left; /* nebo right */
    margin-bottom: 1rem; /* -top, -right, -bottom -left */
}
```

----

# 16 Obtékání obrázků

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-14)

1. Obrázkům v sekci _O mně_, _Turistický průvodce_ a _Kontakt_ přidej CSS třídy `foto-omne`, `foto-pruvodce`, `foto-kontakt`.
1. Pro jednotlivé třídy nastav obtékání zprava nebo zleva podle grafického návrhu stránky ve složce `podklady`.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-15--tvorimweb1.repl.co)

----

## Bonus

1. Nastav fotce v sekci _O mně_ takový `border-radius`, aby byla úplně kulatá. Tip: použij procenta.
1. Fotce v sekci _Turistický průvodce_ nastav `border-radius` jen pro 3 rohy.

---

## Shrnutí výkladu

```html
<nav>
    <a href="#omne">O mně</a>
    <a href="#fotogalerie">Fotogalerie</a>
</nav>

…

<section id="omne"> … </section>

```

----

# 17 Přidáme navigaci

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-15)

1. Vytvoř navigaci pomocí tagu `<nav>`.
1. Navigaci umísti za úvod.
1. Dovnitř vlož odkazy pro všechny sekce stránky.
1. Aby ti navigace fungovala, musíš ještě přidat atribut `id` jednotlivým sekcím.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-16--tvorimweb1.repl.co)

---

## Shrnutí výkladu

```html
a { display: block; }

p { display: inline; }

li { display: inline-block; }
```

----

# 18 Odkazy v navigaci do pruhu

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-16)

1. Odkazy vycentruj.
1. Aby se na ně lépe trefovalo, bylo by fajn jim dát nějaký padding. Ale aby to fungovalo, musíš jim změnit vlastnost `display`.
1. Podbarvi navigaci hnědou barvou (třeba `#282425`).
1. Odkazům dej bílou barvu písma, aby byly čitelné.
1. Změň odkazům barvu pozadí po najetí myši (třeba `#756158`).
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-17--tvorimweb1.repl.co)

----

## Bonus

1. Abys dodržela předlohu, doplň navigaci horní ohraničení. Ohraničení má být světle hnědé (třeba `#9c8175`).
1. Odstraň odkazům v navigaci podtržení pomocí vlastnosti `text-decoration`. [Zjisti si jak.](https://www.jakpsatweb.cz/css/text-decoration.html)

---

## Shrnutí (místo) výkladu

```css
    background-image: url('obrazky/hlavicka.jpg');
    background-position: center;
    background-repeat: no-repeat; /* nebo repeat, pokud chceme, aby se obrázek opakoval */
```

----

# 19 Záhlaví s fotkou na pozadí

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-17)

1. Záhlaví přidej obrázek na pozadí pomocí vlastnosti `background-image`. 
1. Nechceme, aby se obrázek opakoval, proto mu nastav `background-repeat` na `no-repeat`.
1. Obrázek na pozadí vycentruj.
1. Aby byl obrázek vidět celý, dej hlavnímu nadpisu opravud velký svislý padding (aspoň 150px).
1. Jestli chceš mít obrázek roztažený pěkně do kraje, vynuluj margin na prvku `body`.
1. Dej hotovo.

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-18--tvorimweb1.repl.co)

----

# 20 Vylepšíme tabulku

> Pokud jsi nestihla předchozí cvičení, udělej si znovu _fork_ [z této verze](https://repl.it/@tvorimweb1/Adela-cestuje-18)

Abys web odpovídal předloze, zbývá dotáhnout tabulku.

1. Buňkám v pravém sloupci přidej třídu `cena`.
1. Buňky s třídou `cena` zarovnej doprava.
1. Aby bylo zarovnání doprava výrazné, přidej ještě levý padding asi 3rem.
1. Všem buňkám přidej spodní ohraničení hnědou barvou (třeba `#756158`)

> Pokud si nejsi jista, podívej se, jak má [výsledek vypadat](https://Adela-cestuje-19--tvorimweb1.repl.co)

----

# Publikujeme hotový web na internet

1. V podokně s náhledem stránky klikni na iknou se šipkou vpravo vedle adresního řádku.
1. Na nové záložce vidíš svou stránku. Na adrese, kterou vidíš v adresním řádku je tvůj web veřejně k vidění.
1. Dej hotovo.