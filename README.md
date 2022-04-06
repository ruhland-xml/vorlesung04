# Vorlesung04 DOM-Funktionen mit JavaScript

## Berechnen der Anzahl DOM-Elemente eienr Web-Seite

Die DOM Elemente kann man einfach zählen mit dem Selector

```javascript
let domnodescount = document.getElementsByTagName('*').length;
```

Um ein JavaScript auf einer fremden Seite auszuführen, schreibt man das Kommando einfach in die Konsole in den Prompt

## Vorsicht Security: Anzeigen eines Password Inhalts aus dem DOM
Bestimmen Sie den Wert eine Password-Felds. Der Selektor für das Password Feld

```javascript
document.querySelector("input[type='password']").value
```

## Zugriff auf Elemente des DOM in JavaScript

Wird gut beschrieben in der Web-Seite
[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom)

Die Funktionen in JavaScript sind

1. getElementById()
2. getElementsByClassName()
3. getElementsByTagName()
4. querySelector()
5. querySelectorAll()


jQuery wird nicht mehr benötigt.