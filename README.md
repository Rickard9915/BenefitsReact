# BenefitsReact

En enkel React-app som visar personalförmåner. Förmånerna hämtas från BenefitsService och visas som kort med titel, beskrivning, värde och kategori. Man kan söka på titel och filtrera på kategori.

## Hur man kör

Installera beroenden och starta appen:

```bash
npm install
npm run dev
```

Appen öppnas på `http://localhost:5173`.

**BenefitsService måste köra på `http://localhost:5062` innan appen startas.** Appen hämtar förmåner från `http://localhost:5062/api/benefits`.

## AI-användning

AI användes som ett verktyg i utvecklingsprocessen. Kodstruktur och lösningar togs fram i samarbete mellan utvecklaren och AI. All kod granskades, testades och justerades manuellt av utvecklaren. Ett exempel på manuell justering var när kategorierna visades som objekt istället för text, det felsöktes och fixades manuellt.

## Annat

Ingen övrig information.
