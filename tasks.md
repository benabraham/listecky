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

4. deklaruj další proměnnou, která bude obsahovat teplotu ze včera.
5. přidej další podmínku, která porovná průměrnou teplotu za oba dva dny s jen dnešní teplotou. Vypiš alertem, jak to dopadlo (pokud je i není stejná).

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
