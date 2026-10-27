# Så fungerar webbplatsen

Den här guiden förklarar hur React-projektets sidor och komponenter hänger ihop. Den är skriven för dig som håller på att lära dig React.

## Projektets struktur

De viktigaste mapparna är:

```text
src/
├── main.jsx
├── App.jsx
├── index.css
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projekt.jsx
│   ├── ProjektKort.jsx
│   ├── Raknare.jsx
│   ├── Toggle.jsx
│   └── Footer.jsx
└── pages/
    ├── Hem.jsx
    ├── OmMig.jsx
    ├── Kontakt.jsx
    └── ProjektBeskrivning.jsx
```

- `components` innehåller mindre, återanvändbara delar av webbplatsen.
- `pages` innehåller sidornas innehåll. En sida kan sättas ihop av flera komponenter.
- CSS-filerna bestämmer färger, layout, avstånd, textstorlekar och andra visuella detaljer.

## Hur webbplatsen startar

Flödet börjar i `index.html`, som innehåller ett element med `id="root"`. React använder det elementet som platsen där webbplatsen ska visas.

### `main.jsx` – startar React

`src/main.jsx` är programmets startpunkt. Den:

1. Importerar de globala stilarna från `index.css`.
2. Hämtar HTML-elementet med `id="root"`.
3. Skapar React-appen och visar `<App />` i elementet.
4. Omsluter appen med `<BrowserRouter>`.

`BrowserRouter` kommer från `react-router-dom`. Det gör att appen kan läsa webbadressen och välja rätt sida utan att webbplatsen behöver byggas som separata HTML-sidor.

### `App.jsx` – gemensam ram och sidval

`src/App.jsx` importerar navigationsmenyn, sidfoten och sidorna. Den visar menyn och sidfoten runt innehållet och använder `Routes` och `Route` för att välja vilken sida som ska visas.

I förenklad form:

```jsx
<>
  <Navbar />
  <Routes>
    {/* Här väljs en sida beroende på webbadressen. */}
  </Routes>
  <Footer />
</>
```

Menyn och sidfoten ligger utanför `Routes`, så de visas på alla routes.

## Routes – webbadress till sida

En route kopplar en adress till en komponent:

| Webbadress | Komponent/sida | Fil |
|---|---|---|
| `/` | `Hem` | `src/pages/Hem.jsx` |
| `/om-mig` | `OmMig` | `src/pages/OmMig.jsx` |
| `/kontakt` | `Kontakt` | `src/pages/Kontakt.jsx` |
| `/projekt-beskrivning-sida` | `ProjektBeskrivningSida` | `src/pages/ProjektBeskrivning.jsx` |

Till exempel betyder:

```jsx
<Route path="/kontakt" element={<Kontakt />} />
```

att React ska visa komponenten `<Kontakt />` när webbadressen är `/kontakt`.

## Vad gör sidorna?

### Startsidan – `Hem.jsx`

`src/pages/Hem.jsx` sätter ihop startsidans delar i den ordning de visas:

1. `Header` visar namn och titel.
2. `Hero` visar introduktionstext, bild och en länk ner till projekten.
3. `Projekt` visar projektkort och filterknappar.
4. `Raknare` visas i en egen sektion med rubriken ”Prova räknaren”.

`Hem.jsx` importerar varje komponent den använder. Importen gör komponenten tillgänglig i filen; JSX-taggen, till exempel `<Raknare />`, placerar den på sidan.

### Om mig – `OmMig.jsx`

`src/pages/OmMig.jsx` visar porträtt, information om dig och en lista över sådant du lär dig. Den importerar och visar även `Toggle`, som låter besökaren öppna och stänga extra text.

### Kontakt – `Kontakt.jsx`

`src/pages/Kontakt.jsx` visar kontaktformuläret. `useState` sparar det besökaren skriver i namn-, e-post- och meddelandefälten.

När formuläret skickas:

1. `handleSubmit` stoppar webbläsarens vanliga sidomladdning.
2. Koden kontrollerar att fälten inte är tomma.
3. Koden kontrollerar att e-postadressen innehåller `@`.
4. Om något inte stämmer visas ett felmeddelande.
5. Om kontrollerna passerar visas ett tackmeddelande.

Formuläret visar alltså en lokal bekräftelse, men skickar inte e-post till någon server.

### Projektdetaljer – `ProjektBeskrivning.jsx`

`src/pages/ProjektBeskrivning.jsx` visar BookStore-projektets bild, kort beskrivning, en längre text som kan öppnas och stängas samt en länk till projektet på GitHub.

## Vad gör komponenterna?

Komponenterna finns huvudsakligen i `src/components/`.

### `Navbar.jsx` – navigationsmeny

`Navbar` visar länkar till Hem, Projekt, Om mig och Kontakt. Länkarnas adresser och texter ligger i en array som heter `lankar`.

`lankar.map(...)` går igenom arrayen och skapar en `<Link>` för varje objekt. `Link` från `react-router-dom` används för att navigera inom React-appen.

Varje länk har `key={lank.till}`. React använder `key` för att känna igen de olika objekten när en lista visas eller ändras. Här passar URL:en eftersom den är unik per menyobjekt.

### `Header.jsx` – namn och titel

`Header` tar emot `namn` och `titel` som props och visar dem i en rubrik och ett stycke.

I `Hem.jsx` används den så här:

```jsx
<Header namn="Niki" titel="Overachever" />
```

Värdena mellan citattecknen skickas från föräldern (`Hem`) till barnkomponenten (`Header`). Den kan sedan visa dem med `{namn}` och `{titel}`.

### `Hero.jsx` – startsidans introduktion

`Hero` visar en introduktion, en rubrik, en kort text, en bild och en länk till projektsektionen. Den tar emot namnet som prop. Bildfilen importeras i komponenten.

Länken `href="#projekt"` går till elementet som har `id="projekt"` i `Projekt.jsx`.

### `Projekt.jsx` – projektdata och filter

`Projekt` innehåller en array som heter `projektLista`. Varje objekt beskriver ett projekt, bland annat titel, text, bild, länk och teknik.

Komponenten filtrerar listan utifrån den valda tekniken:

- `useState("Alla")` sparar det aktiva filtret.
- Knappen ”Alla” visar hela listan.
- Knappen ”React” visar projekt vars tekniklista innehåller `"React"`.
- `synligaProjekt.map(...)` skapar ett projektkort för varje synligt projekt.

Teknikerna ligger i separata arrayer, till exempel `["React", "CSS"]`. Då kan `includes("React")` hitta React som en egen teknik.

### `ProjektKort.jsx` – mall för ett projektkort

`ProjektKort` är en återanvändbar mall. `Projekt` skickar information för ett projekt som props:

```text
Projekt.jsx
  └── skickar titel, text, bild, länk och teknik
        └── ProjektKort.jsx visar kortet
```

Kortet visar bilden, titeln, texten, tekniktaggarna och en länk. Därför behöver du inte skriva separat JSX för varje kort; du lägger till ett objekt i projektlistan i stället.

### `Raknare.jsx` – räknare

`Raknare` använder `useState` för att spara talet som visas. Knapparna ökar, minskar eller nollställer värdet. När state ändras renderar React komponenten igen med det nya talet.

### `Toggle.jsx` – visa eller dölj text

`Toggle` sparar i state om den extra texten visas. Knappen växlar mellan lägena ”Visa mer” och ”Visa mindre”. `aria-expanded` berättar för hjälpmedel om innehållet är öppet.

### `Footer.jsx` – sidfot

`Footer` visas på alla routes eftersom den ligger utanför `Routes` i `App.jsx`. Den innehåller navigeringslänkar, en e-postlänk och copyright-information. Årtalet hämtas från datorns aktuella datum.

### Övriga komponenter

Det finns även `Halsning.jsx`, `Valkommen.jsx` och `Intressen.jsx`. De är fristående komponenter, men används inte av de aktiva sidorna just nu.

## Hur komponenter kopplas till varandra

### 1. Importera komponenten

En fil behöver importera en komponent innan den kan använda den. Om två filer ligger i samma mapp används ofta `./`; `../` betyder att gå upp en nivå i mappstrukturen.

```jsx
import Projekt from "../components/Projekt";
```

### 2. Exportera komponenten

En komponent behöver exporteras från sin fil för att en annan fil ska kunna importera den:

```jsx
export default Projekt;
```

`default` betyder att filen har en standardexport. Den importeras utan klammerparenteser.

### 3. Placera komponenten i JSX

Efter importen används komponenten som ett element:

```jsx
<Projekt />
```

Platsen där taggen står avgör var komponenten visas i sidans innehåll.

### 4. Skicka props

En förälder kan skicka värden till en barnkomponent genom attribut:

```jsx
<ProjektKort titel="Kontaktformulär" text="Ett formulärprojekt" />
```

Barnkomponenten tar emot värdena som props. Props är data som kommer från komponenten ovanför. De används för att återanvända samma komponent med olika innehåll.

### 5. Skapa listor med `.map()`

När en array ska visas som flera element används ofta `.map()`. För varje objekt körs funktionen och returnerar ett element. I `Projekt.jsx` blir varje projektobjekt ett `ProjektKort`.

`key` är ett stabilt och unikt id för varje element i en lista. I projektkorten används projektets `id`.

## Länkarna

### Interna sidor

`Link` från `react-router-dom` används för att navigera till interna routes, till exempel `/om-mig`. Det låter React byta sidinnehåll utan att webbläsaren behöver göra en full omladdning.

### Ankarlänkar till en sektion

En adress med `#` pekar på ett element med matchande `id`:

```text
/#projekt
```

Det betyder startsidan (`/`) och sektionen med `id="projekt"`. På samma sätt leder `/#raknare` till räknarsektionen.

### Externa länkar och e-post

En vanlig `<a href="https://...">` passar för en extern webbsida, till exempel GitHub. `mailto:adress` skapar en länk som öppnar användarens e-postprogram.

## Hur CSS kopplas till komponenterna

CSS styr utseendet. JSX beskriver innehåll och struktur.

- `main.jsx` importerar `index.css`, som innehåller globala grundregler och färgvariabler.
- En komponent importerar ofta sin egen CSS-fil, till exempel `Navbar.jsx` importerar `Navbar.css`.
- `className` i JSX kopplar ett element till en klass i CSS.

Exempel:

```jsx
<section className="hero">
```

matchar CSS-regeln:

```css
.hero {
  /* Stilregler här påverkar elementet med className="hero". */
}
```

I React skrivs `className` i stället för HTML-attributet `class`.

## State och omrendering

`useState` används när information kan ändras medan sidan används. Det returnerar:

1. Det aktuella värdet.
2. En funktion som uppdaterar värdet.

Exempel:

```jsx
const [antal, setAntal] = useState(0);
```

Här är `antal` det aktuella värdet och `setAntal` används för att ändra det. När setter-funktionen anropas uppdaterar React sidan så att det nya värdet visas.

I det här projektet används state bland annat för räknaren, projektfiltret, visa/dölj-texten och kontaktformuläret.

## Sammanfattning

```text
main.jsx startar React och BrowserRouter
  └── App.jsx visar Navbar, rätt route och Footer
        ├── Hem.jsx sätter ihop startsidans komponenter
        ├── OmMig.jsx visar Om mig-sidans innehåll
        ├── Kontakt.jsx visar och hanterar kontaktformuläret
        └── ProjektBeskrivning.jsx visar BookStore-detaljer
```

- **`main.jsx`** startar appen.
- **`App.jsx`** bestämmer gemensamma delar och vilken sida som visas.
- **`pages`** innehåller hela sidor.
- **`components`** innehåller mindre delar som sidorna byggs av.
- **Props** skickar data från en förälder till en barnkomponent.
- **State** sparar data som kan ändras under användning.
- **CSS** styr hur innehållet ser ut.
