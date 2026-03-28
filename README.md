# BenefitsReact

En enkel React-app som visar personalförmåner. Förmånerna hämtas från BenefitsService och visas som kort med titel, beskrivning, värde och kategori. Man kan söka på titel och filtrera på kategori.

## Hur man kör

Installera beroenden och starta appen:

npm install
npm run dev

Appen öppnas på http://localhost:5173.

BenefitsService måste köra på http://localhost:5062 innan appen startas. Appen hämtar förmåner från http://localhost:5062/api/benefits.

## AI-användning

AI användes som ett verktyg i utvecklingsprocessen. Kodstruktur och lösningar togs fram i samarbete mellan mig själv och AI. Kod granskades, testades och justerades av mig med hjälp av AI. Ett exempel på manuell justering var när kategorierna visades som objekt istället för text, det felsöktes och fixades tillsammans med mig och AI assistans.

## Annat

Ingen övrig information.