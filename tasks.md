# Založíme si účet na Glitch.com

1. [otevři si Glitch](https://glitch.com)
1. Zadej e-mail, na který máš přístup, přijde ti na něj ověřovací odkaz.
1. Zadej raději skutečné jméno a příjmení ‒ zjednoduší to komunikaci.
1. Dej nám vědět, že máš hotovo, kliknutím na tlačítko „Hotovo“ na této stránce.

---

## Shrnutí zkratek

### Výběr všeho

Win: <kbd>Ctrl+A</kbd>

Mac: <kbd>Cmd+A</kbd> 

### Kopírovat _výběr nebo bez výběru pro celý řádek_

Win:  <kbd>Ctrl+C</kbd>

Mac:  <kbd>Cmd+C</kbd>

### Vložit

Win:  <kbd>Ctrl+V</kbd>

Mac:  <kbd>Cmd+V</kbd>

### Kopírovat a smazat (vyjmout) 

_výběr nebo bez výběru pro celý řádek_

Win:  <kbd>Ctrl+X</kbd>

Mac:  <kbd>Cmd+X</kbd>

### odsazení přidat, odsazení ubrat ubrat

<kbd>Tab</kbd>, <kbd>Shift+Tab</kbd>

_lze odsazovat více řádků najednou, stačí je vybrat_

----

# Osaháme si Glitch a klávesové zkratky

1. Otevři si https://glitch.com/edit/#!/remix/pooh
1. Zkopíruj si následující text a vlož ho do souboru `index.html` **místo** řádku s komentářem v souboru (šedý text).
    ```
    Web Kryštůfka Robina

    Představím vám zde své dobré kamarády:
    medvídka Pú, Tygříka, Íjáčka a Prasátko.
    ```
1. Opět dej prosím „Hotovo“.

---

## Shrnutí výkladu

```htmlmixed
<h1>Nadpis nejvyšší úrovně</h1>

<p>odstavec</p>

<strong>důležitý text</strong>
```

----

# Zkusíme si první tagy

1. Vytvoř nadpis nejvyšší úrovně (název webu) z textu „Web Kryštůfka Robina“.
1. Zbývající větu označkuj jako odstavec.
1. Protože kamarádství je pro medvídka Pú podstatné, označ text „dobré kamarády“ jako velmi důležitý.
1. Nezapomeň dát vědět, že máš hotovo a nezapomeň na to ani až dokončíš další úkoly.

---

## Shrnutí výkladu

```htmlmixed
<h1>Nadpis nejvyšší úrovně</h1>

<h2>Nadpis druhé úrovně</h2>

<h3>Nadpis třetí úrovně</h3>

<a href="https://google.com">odkaz na Google.com</a>
```

----

# Přidáme _Kontakt_

1. Vytvoř sekci Kontakt, tedy
    - nadpis `Kontakt`
    - a text
    ```
    Budeme rádi, když nám napíšeš na e-mail nebo se s námi skamarádíš na Facebooku.

    To je mapa, která tě dovede do Stokorcového lesa, kde s medvídkem Pú a jeho kamarády provádíme všechny naše lotroviny.
    ```
1. Ze slova „Facebooku“ udělej odkaz na Facebook.
2. Vyzkoušej, že odkaz funguje.
3. Dej hotovo.

----

## Bonus (pokud máš hotovo)

1. Slovo „e-mail“ udělej jako odkaz na medvídkův mail (pooh@example.com), [najdi si jak](https://google.com).
2. Přidej stejnému odkazu další atribut `title` s hodnotou _Když pošleš med, budu radši._. Co to dělá, zjistíš tak, že zaparkuješ šipku myši (kurzor) nad odkazem v náhledu stránky.

---

## Shrnutí výkladu

```htmlmixed
<img src="pu.jpg" alt="medvěd">
```

----

# Přidáme mapu

1. Přidej obrázek mapy do kontaktu za text, který už tam máš.
2. Přidej za mapu licencí vyžadované texty:`Autorem skenů je Paul K. pod licencí CC 2.0`.
3. Vytvoř odkaz z „Paul K.“ `https://www.flickr.com/photos/bibliodyssey/3066814584`
4. Vytvoř odkaz na licenci z textu „licencí CC 2.0“ `https://creativecommons.org/licenses/by/2.0/`
5. Dej hotovo.

---

## Připomínka užitečných zkratek

<kbd>Alt+Shift+I</kbd> Vloží kurzor na každý řádek ve výběru
<kbd>Home</kbd> <kbd>End</kbd> začátek, konec řádku (srovná kurzory na stejnou pozici)

----

# Přidáme obrázkovou galerii

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

---

## Shrnutí výkladu

```htmlmixed
<head>
    …
    <link rel="stylesheet" href="nazevsouboru.css">
    …
</head>
```

----

# Připojíme MVP.css

1. Připoj si `https://unpkg.com/mvp.css` k HTML.
2. Dej hotovo.

---

## Shrnutí výkladu

```htmlmixed
<header> záhlaví </header>
<main> hlavní obsah stránky </main>
<footer> patička </footer>
<article> obsah </article>
<div> obsah </div>
```
----

# Vyznačíme části stránky

1. Záhlaví bude obsahovat název webu a úvodní větu.
2. Do patičky dej informaci o autorských právech.
3. Hlavní obsah stránky je vše ostatní.
4. V hlavním obsahu zabal do vlastního `<article>` jak galerii, tak i kontakt.
5. Dej hotovo.

---

## Shrnutí výkladu

```htmlmixed
<section>
    <aside> karta </aside>
</section>
```

----

# Přidáme sekci s charakteristikou kamarádů

1. každý kamarád bude mít vlastní kartičku (`<aside>`)
2. jméno jako nadpis (dbej na hierarchii)
3. popis jako odstavec
4. celou sekci umísti do `<header>` na konec
5. použij následující texty:

```
Medvídek Pú
je malý, tlusťoučký, trošku přitroublý a 
hlavně věčně hladový medvídek, jehož hlavní 
touhou je mít pro sebe pořád dostatek medu.

Ijáček
je snad nejsmutnější člen celé party 
ze Stokorcového lesa. Bývá často zamračený 
a neustále někde hledá svůj ztracený ocásek.

Prasátko 
je malé a drobné, ale s velkým srdcem. 
Občas má mindráky z toho, jak je malinké 
a slabé a je stále vystrašené.
```
---

## Shrnutí výkladu


```htmlmixed
<section>
    <aside> 
        <figure> 
            <img>
        </figure> 
    </aside>
</section>
```

Zkratky pro vícenásobný kurzor:

<kbd>Myš + Alt</kbd> táhnutím výběr přes více řádků pod sebou
<kbd>Ctrl/Cmd + D</kbd> pokud je vybrán text, přidá do výběru další výskyty téhož textu
<kbd>Esc</kbd> zrušit výběr

----

# Upravíme galerii

1. Každý obrázek zabal do značky `<figure>`.
2. Každou `<figure>` obal do `<aside>`.
3. Celé to obal do `<section>`

## Uprav také mapu

1. Mapu zabal do značky `<figure>`


---

## Shrnutí výkladu

```htmlmixed
<nav>
    odkazy sem!
</nav>

<ul>
    <li>odrážkový</li>
    <li>seznam</li>
</ul>
```


```htmlmixed
<a href="#nazev-kotvy">Odkaz na „kotvu“</a>

<article id="nazev-kotvy">…</article>

```

----

# Přidáme navigaci (menu)

1. Vytvoř navigaci jako odrážkový seznam: podle sekcí stránky. Bude tedy mít celkem 2 položky.
2. Navigaci umísti jako první věc v záhlaví.
3. Název stránky je dobré mít jako odkaz na úvodní stránku. Udělej z něj tedy odkaz a dej ho jako první v navigaci.
4. Přidej oběma sekcím unikátní hodnotu atributu `id`.
5. Oběma odkazům na sekce v navigaci nastav hodnotu atributu `href` aby vedly na příslušnou sekci.
6. Dej hotovo.

---

## Shrnutí výkladu

```htmlmixed
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

# Připojíme vlastní styly

Pokud si nejsi jistý, že máš vše ok, tak si udělej remix z [této verze](https://glitch.com/~pooh-stop-a)

1. Připoj si `styly.css` k HTML za již připojené mvp.css.
2. Nastav barvu písma pro celou stránku (třeba šedou `dimgrey`)
3. Nastav všem nadpisům jinou barvu (třeba zelenou `darkgreen`)
4. Dej hotovo.

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

# Upravíme písmo

1. Nastav nadpisům patkové písmo.
2. Text v patičce vycentruj.
3. Dej hotovo.


----

## Bonus

1. Použij zajímavější písma. Na nadpisy písmo _Mali_ a pro všechen ostatní text nastav písmo _Nunito_.
2. Abys je mohla používat, je potřeba připojit fonty ze služby Google Fonts. To se udělá připojením CSS (získá se na jejich stránce v závislosti na požadovaných písmech a jejich řezech). Do hlavičky dokumentu přidej následující `link`, který písma načte:
`<link href="https://fonts.googleapis.com/css2?family=Mali:wght@400;700&family=Nunito:wght@400;700&display=swap" rel="stylesheet">`
3. Odteď s nimi můžeš v CSS pracovat, upravuj vlastnost `font-family` (`Mali` a `Nunito`).

---

## Shrnutí výkladu

```css
font-size: 1.5rem;

/* nebo */

font-size: 20px;
```

----

# Měníme velikosti písma

1. Nadpis první úrovně je moc velký, zmenši ho třeba na `1rem`.
2. Nadpisy druhé úrovně naopak zvětšíme, třeba na `2.5rem`.
3. Dej hotovo

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

# Nastavíme barvu pozadí

1. Nastav všem Galerii, Kontaktům a patičce nějakou (stejnou) světlou barvu pozadí, třeba `#fcf5cf`
1. Dej hotovo.

---

## Shrnutí výkladu

```htmlmixed
<h1 class="prvni-trida">Modře</h1>
<p class="prvni-trida druha-trida">Modře a větší</p>
```

```css
.prvni-trida { color: blue; }
.druha-trida { font-size: 1.2rem; }
```

----

# Využijeme třídy

1. Pomocí tříd nastav každé sekci jinou barvu pozadí (dej si pozor na dostatečný kontrast).

Doporučené názvy tříd: `galerie`, `kontakt`, `paticka`.

Můžeš použít třeba tyto barvy: `#fcf5cf`, `#defccf`, `#804000`.

_Tip: Poslední barva je hodně tmavá a text nebyl čitelný, nastav proto barvu textu v patičce na bílou._

Nezapomeň smazat nastavení barvy pozadí pro všechny prvky `<article>` a `<footer>`, které už není potřeba (pozadí budou tedy nastavena přes třídu).

**Dej hotovo.**

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

# Nastavíme rozměry a odsazení

1. Nastav kartičkám kamarádů větší šířku, třeba 320px pomocí nové třídy `kamarad`
2. Nastav kartičkám kamarádů zelený rámeček (třeba `#559933`) široký 2 pixely.
3. Mapě nastav rámeček žlutý, třeba `rgb(255, 229, 102)`, opět pomocí nové třídy.
4. Přidej vnitřní odsazení (padding) galerii a kontaktu `1rem`. Můžeš si na to udělat jednu novou třídu nebo použít ty stávající.
5. V patičce odsaď text od horního a dolního okraje víc než po stranách.
6. Nastav mapě (jejímu obalovacímu prvku `<figure>`) maximální šířku `700px`.
7. Vynuluj margin nadpisu h1 
8. Dej hotovo.


---


## Shrnutí výkladu

```htmlmixed
a { display: block; }

div { display: inline; }

span { display: inline-block; }
```

----

# Nadpis a text s popisem kamarádů do jednoho řádku

1. Nadpisům v kartách kamarádů změň vlastnost `display` na `inline`;
2. Zmenši písmo nadpisům v kartách třeba na `1.2rem`.
3. Dej hotovo.

----

## Bonus

1. Odstraň odkazům v menu podtržení.
1. Odstraň odkazům v menu tučnost.

### Případně ještě můžeš změnit barevnost menu:

1. Podbarvi menu třeba zelenou `#559933`.
1. Aby se daly položky přečíst, obarvi odkazy třeba na žluto `#ffe566`.
1. Položku v menu po najetí kurzorem nastyluj inverzně (zelený text na žlutém pozadí).

---

# Přidáme sekci _O mně_

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

---

## Dohráno

[Všechny úkoly, k dispozici tak, aby sis je mohla projít i doma](https://hackmd.io/@vsewebdev/ukoly)

[Púův web, jak by taky mohl vypadat, když se udělají všechny bonusové úkoly (v plné verzi workshopu)](https://glitch.com/~pooh-final)

10.&thinsp;9.&nbsp;2020 v4