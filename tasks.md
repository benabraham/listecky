## Shrnutí výkladu

```htmlmixed
<a href="#kontakt">Spojení na nás</a>

<div id="kontakt">
    <h2>Kontaktní údaje</h2>
    …
</div>
```

----

# Přidáme odkazy na sekce

1. Přidej unikátní atribut `id` O mně, Galerie, Kontakty nadpisu nebo lépe elementu obalujícímu příslušnou sekci.
1. Přidej odpovídající hodnoty `href` v navigaci.
1. Vyzkoušej že fungují.
1. Dej „Hotovo“.

note:
- forkovat v rámci třídy, abychom měli výstupy pěkně pohromadě!!!

---

# Připoj Bootstrap

1. připoj si CSS soubor z CDN
1. do hlavičky si přidej (viz dokumentace: [Getting started](http://getbootstrap.com/docs/4.1/getting-started/introduction/)) `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`
1. dej hotovo

---

# Úvod do komponenty Jumbotron

1. najdi si v dokumentaci Components / Jumbotron
1. Divu s `class="uvod"` přidej třídu `jumbotron` viz dokumentace
1. nadpisu přidej třídu `display-4`
1. odstavci  v úvodu přidej třídu `lead`
1. Dej „Hotovo“.

---

# Navigace (menu) do komponenty Nav

1. Přidej třídy dle dokumentace.
1. Dej „Hotovo“.

---

# Utility classes

1. Vycentruj text v úvodu (Jumbotron) pomocí `text-center`
1. Odstraň spodní margin Jumbotronu pomocí `mb-0`
1. Vycentruj položky v navigaci pomocí `justify-content-center`
1. Dej „Hotovo“.

---

# První grid

1. udělej si základní layout sekce _O mně_ pomocí gridu na dva sloupce (obrázek do jednoho, text do druhého)
1. pro vizualizaci jednotlivých prvků můžeš využít třídy Bootstrapu: `bg-danger`, `bg-info`, `bg-warning`, `bg-dark`, `bg-success` 
1. Dej „Hotovo“.

---

# Responzivní grid

1. obrázkům dej třídu `img-fluid`
1. udělej sloupce v úvodu responzivní v jednotlivých šířkách, dle svého uvážení
1. Dej „Hotovo“.

---

# Provzdušnit

1. využij utilit a provzdušni stránku

---

# Galerii a Kontakty do gridu

- Pro obrázky využij komponentu Figure
- V Kontaktech první dva bloky textu (Facebook a e-mail) dát vedle sebe, třetí přes celou šířku.
- Vše reponzivně
- Dej „Hotovo“.

---

# Vlastní styly


1. připoj si další CSS `styly.css`
1. zkus upravit barvy nadpisů
2. podbarvení sekcí
3. fonty nadpisů
4. velikosti písem atd.
