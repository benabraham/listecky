
# Podvádíme Cookie Clicker

1. Otevři si hru [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/)
2. Zkus si naklikat pár sušenek.
3. Už tě to nebaví? Zkus si počet sušenek změnit. V konzoli Vývojářských nástrojů (DevTools) spusť následující kód (nezapomeň nahradit _číslo_ za nějaké reálné číslo, třeba `42` nebo `9999` nebo víc!

```
Game.cookies = číslo
```

---

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

# Úkol na proměnné a if

1. deklaruj proměnnou teplota a definuj ji dle aktuální teploty v tvém rodném městě (nezapomeň, že proměnná může obsahovat pouze text nebo čísla, nemůžeš to kombinovat, kdybys např. chtěla přidat jednotky)
2. napiš podmínku, která se podívá, jestli je teplota nižší než nula a pokud ano, pomocí `alert` vypíše hodnotu připravené proměnné mrazivo.
3. rozšiř tuto podmínku o další případy, abys využila všechny předpřipravené proměnné. Využij 'else' větve, do které můžeš vnořit další podmínku. Koučové jistě poradí!

```
  if (...) {

  } else if (..) {

  }
```

## Bonus!

1. deklaruj další proměnnou, která bude obsahovat teplotu ze včera.
2. přidej další podmínku, která porovná průměrnou teplotu za oba dva dny s jen dnešní teplotou. Vypiš alertem, jak to dopadlo (pokud je i není stejná).

---

# Funkce

V souboru `skript.js` je prázdná funkce `jakJeDnes`. Když se funkce zavolá, měla by zobrazit `alert` s textem, který předáš v proměnné, například:

> Dnes je _hezky_.

> Dnes je _zima_.

----

# Bonus

Uprav funkci tak, aby přijímala číslo s teplotou a zobrazila `alert` podle toho, jaká je teplota, například:

```
jakJeDnes(34);
```

Zobrazí:

> Dnes je vedro!

---

# querySelector

V souboru `skript.js` je neúplný kód. Nastav proměnnou `obrazek` tak, aby se zobrazilo veselé kǒtě.

---

# Inputy

Vyzkoušíme si nové HTML tagy :) Vytvoř jednoduchý formulář pro zadávání počasí:

1. vytvoř si textové pole pro zadávání názvu města
1. vytvoř si numerické pole pro zadávání teploty a nastav mu minimum a maximum
1. vytvoř si několik checkboxů pro výběr panujících podmínek (může jich být vybraných i více najednou)
1. vytvoř si tlačítko
1. všem inputům i tlačítku nastav nějaké id
1. každému inputu vytvoř jmenovku s popiskem

----

# Bonus

1. naskládej inputy do tabulky
1. nastav maximální povolenou délku názvu města

---

# Události

Miniformulář z minulého cvičení si teď zkusíme napojit na události.

1. vytvoř si proměnnou pro každý prvek formuláře a do každé proměnné ulož správný element pomocí `document.querySelector` a jejich id
1. nastav na tlačítku, aby se při kliknutí zobrazila informace o tom, v jakém městě měříme a kolik je tam stupňů
1. nastav na teplotě, aby se při nastavení nejvyšší teploty zobrazilo, že je neskutečné vedro
1. nastav na checkboxech, aby se v případě, že jsou zaškrtnuté všechny, zobrazilo, že se počasí zbláznilo

----

# Bonus

1. zkus svoji funkci `jakJeDnes` nějak zapracovat do formuláře
1. nastav na teplotě, aby se při velmi nízké hodnotě zašedl/zablokoval jeden z checkboxů, a při zvýšení se zase odšedl/odblokoval
1. nastav na tlačítku, aby se při kliknutí navíc zobrazila informace o tom, které panující podmínky jsou zaškrtnuté
1. nastav na městě, aby se při vymazání jeho hodnoty (změně jeho hodnoty na prázdný řetězec `""`) odškrtly všechny checkboxy a teplota se nastavila na výchozí hodnotu

---

# Projekt - Pexeso

Nastal čas na největší cvičení dnešního dne, tvůj velký projekt :) Pexeso někdy hrála určitě každá z nás. Jenže jak na něj z pohledu programování?

- v připraveném HTML souboru najdeš již připravené kartičky, ale můžeš je samozřejmě nahradit svými obrázky
- pro vlastní logiku použijeme události, konkrétně událost kliknutí na kartičku
    - při prvním kliknutí na některou kartičku si uložíš element první kartičky do proměnné a kartičku otočíš (zobrazíš)
    - při druhém kliknutí na některou kartičku si uložíš element druhé kartičky do jiné proměnné a kartičku také otočíš (zobrazíš)
    - při třetím kliknutí na některou kartičku se vyhodnotí, zda se kartičky shodují, a ty se buď odeberou ze stolu nebo se otočí zpět (skryjí)
    - a takhle stále dokola, dokud jsou na stole karty :)

----

# Bonus

- přidej více kartiček na stůl, ukazatel skóre, možnost zadat jména hráček, tlačítko start, cokoli tě napadne!
- místo třetího kliknutí by se spíše hodila funkce, že třeba po třech vteřinách se kartičky vyhodnotí samy, ale bohužel, to ještě neumíme, zkus se ale zeptat kouče :)
- pokud jsi už z Javascriptu unavená, zkus vygooglit něco CSS transitions a pak se pokus přidat nějakou hezkou animaci zobrazování a skrývání kartičky