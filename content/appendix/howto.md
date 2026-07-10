# How to

## Introductie

Welkom bij Jupyter Book! 

* Ga naar de website van [Github](https://github.com) en maak een account aan als je dat nog niet hebt.
* Geef je accountnaam door aan Freek, hij voegt jou toe aan het boek.
* Als je toegang hebt, kun je aan de slag met een eigen hoofdstuk maken of een bestaand hoofdstuk editen. De repo waar je toegang toe krijgt (voor dit specifieke boek) vind je [hier](https://github.com/FreekPols/Mechanica).
* Ga naar de folder *content* en klik op *Add file* en *Create a new file*, zie hieronder.

![](../images/newpage.png)

* Geef je file een naam met als extensie *.md* bijv. *Freek.md*

![](../images/naambestand.PNG)

* In die file kun je jouw inhoud stoppen / ontwikkelen. 
* Maak een hoofdstuk titel (# Mijn eerste titel) en een section titel (## Mijn eerste sectie). 
* Druk op de groene *Commit changes* knop om je aanpassingen door te zetten naar de repo. Je kunt de commit een passende titel geven (of niet).
* Let op! Het mechanica boek is gewijzigd tov de template, dusdanig dat je het hoofdstuk ook in de **Table of Contenst** moet zetten. Deze staat in de hoofdmap, in het bestand myst.yml

Wat er nu gebeurt is dat het boek opnieuw gemaakt wordt en via GitHub pages gepubliceerd. Na ongeveer 2 minuten kun je dus het resultaat op de website zien!

* Bekijk eens op de site van [Jupyter Book](https://jupyterbook.org/en/stable/content/index.html) naar wat je allemaal kunt toevoegen en pas dat aan in je eigen gemaakte hoofdstuk: klik daartoe op je gemaakte hoofdstuk en dan op het pennetje aan de rechterkant (*edit this file*)
* Je kunt natuurlijk ook de features bekijken in het volgende hoofdstuk.
* Succes!

```{note}
Goed om te weten... dit boek is gemaakt in [MyST](https://mystmd.org/guide) de meest recente versie van Jupyter Books.
```

## Feedback / issue report / vragen
Rechtsboven op de page staat een knop met FEEDBACK. Wanneer je daar op klikt kom je op de issues pagina van de github van dit boek. Je kunt een nieuwe issue aanmaken (groene knop, *New issue*). Daarmee kom je bij een formulier die vraagt om een titel, en een beschrijving van het probleem. Je kunt verder iemand aanwijzen (*assignees*) om het probleem te koppelen aan iemand die het waarschijnlijk kan oplossen. Daarnaast is er de mogelijkheid om een label er aan te hangen (bijv. bug / invalid / help wanted). 

Wanneer je de issue hebt gerapporteerd (Create) belandt deze in de to-do list en wordt het issue opgepakt wanneer daar tijd voor is.
 
Wil je tekeningen bij een specifiek onderwerp, tag dan *Hanna*. Beschrijf wat je voor tekening wilt, als dat onvoldoende helder is vanuit de vraagstelling zelf.

## Opzetten van een lokale server
Wanneer je lokaal werkt en een push doet naar github, zal het boek opnieuw gebouwd worden en online te zien zijn. Een andere mogelijkheid is lokaal werken en je output (bijna) live te volgen. Wanneer je een document opslaat, wordt dit gedetecteerd en wordt alleen de pagina die je hebt gewijzigd opnieuw gemaakt. 

Om direct te output van de wijzigingen te zien (lokaal), ga je via de terminal (anaconda prompt of de mac terminal) naar de folder waar het myst.yml bestand van dit boek staat. Typ in de terminal `myst start` (de eerste keer dat je het boek bouwt moet dit `myst init` zijn). Op dat moment worden de boeken geconverteerd naar een website, welke lokaal te zien is. Het adres wordt gegeven in de terminal, veelal is dat: `http://localhost:3000`. Via een webbrowser kan dit adres gekopieerd worden. Wanneer je een bestand opslaat, wordt deze binnen ~5 s zichtbaar.

## Werken met GIT
Werken met Git heeft het voordeel dat je goed kunt samenwerken. Via de repository worden de bestanden gesynchroniseerd. Om hier goed gebruik van te maken is de volgende workflow handig:

Bij starten van nieuwe edits doe je een git pull, zie {numref}`fig_gitpull`.

```{figure} ../images/gitpull.png
:width: 80%
:label: fig_gitpull

Bij de start doe je een pull.
```

Ben je klaar, dan commit \& push je de wijzigingen naar de repository. Vergeet niet een samenvatting van de wijzigingen toe te voegen! Tussendoor kun je ook een push doen, om bijv. het resultaat online te bekijken.

```{figure} ../images/gitpush.png
:width: 80%
:label: fig_gitpush

Aan het eind doe je een gitpush, de wijzigingen worden doorgestuurd naar de repository.
```

## Admonitions
Er zijn diverse admonitions mogelijk: danger / tips / exercises.

Het is ook mogelijk om eigen admonitions te maken. Voor nu zijn er: intermezzo en experiment.

```{intermezzo} Ik ben een intermezzo
Hier dan tekst.
```

```{experiment} Wil je een experiment doen?
Altijd.
```

```{example} Ik ben een example
Genoeg voorbeelden
```

Is er behoeft aan meer admonition types, laat het weten via een issue!

