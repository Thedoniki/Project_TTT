# Min portfolio

En personlig portfoliosida byggd med React. Här presenterar jag mig själv, mina projekt och det jag lär mig inom webbutveckling.

**Skapad av:** Donika Mehmeti

## Diagram

- [Räknarens flöde (PNG)](./docs/diagrams/Raknare-flode.drawio.png) · [redigerbar draw.io-fil](./docs/diagrams/Raknare-flode.drawio)
- [Applikationens arkitektur (PNG)](./docs/diagrams/Raknare-arkitektur.drawio.png) · [redigerbar draw.io-fil](./docs/diagrams/Raknare-arkitektur.drawio)

# Project_TTT

Duplicate from min-sida in documents repo. Code til 15Okt 2026.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Arkitektur och roadmap – Project_TTT (Min portfolio)

Repo: https://github.com/Thedoniki/Project_TTT
Uppdaterad mot `main` vid commit `6e06f5b` (Merge pull request #5), 23 oktober 2026.

## Vad som ändrats sedan förra versionen (a668d29 → 6e06f5b)

- `Kontakt.jsx` skrevs om: formuläret har nu **fem `useState`** (`namn`, `email`, `meddelande`, `skickat`, `fel`), en `handleSubmit` med validering och ett tackmeddelande.
- `ProjektBeskrivning.css`: bara färg- och vikt-justeringar.
- Nya diagram i `docs/diagrams/`: `ProjektBeskrivning-struktur` och `ProjektBeskrivning-visningsflode` (.mmd, .drawio, .png).
- `App.jsx`, `main.jsx`, `Hem.jsx` och alla komponenter i `src/components/` är **oförändrade**.

> **Om filnamnen:** Projektet har inga filer som heter `app.js`, `index.jsx` eller `userState`.
> - `app.js` → `src/App.jsx` (sidramverk och routing)
> - `index.jsx` → `src/main.jsx` (startpunkt, kopplar React till `<div id="root">`)
> - `userState` → finns inte som fil. Det finns ingen global state, context eller Redux. Allt state är lokalt med `useState` (avsnitt 4).

---

## 1. Startkedjan

```
index.html
  ├─ <div id="root">
  └─ <script src="/src/main.jsx">
        │
        ▼
src/main.jsx      createRoot(#root).render(...)
  ├─ importerar index.css (globala regler)
  └─ <BrowserRouter>        läser webbadressen
        └─ <App />
              │
              ▼
src/App.jsx       Navbar + <Routes> + Footer
```

`BrowserRouter` måste ligga runt `App` (det gör den i `main.jsx`). Annars fungerar inte `Routes` och `Link` i `App`, `Navbar` och `Footer`.

---

## 2. Komponentträd

```mermaid
flowchart TD
    HTML["index.html"] --> MAIN["main.jsx: createRoot + BrowserRouter"]
    MAIN --> APP["App.jsx"]

    APP --> NAV["Navbar"]
    APP --> ROUTES{"Routes"}
    APP --> FOOT["Footer"]

    ROUTES -->|"/"| HEM["pages/Hem"]
    ROUTES -->|"/om-mig"| OMMIG["pages/OmMig"]
    ROUTES -->|"/kontakt"| KONT["pages/Kontakt"]
    ROUTES -->|"/projekt-beskrivning-sida"| PB["pages/ProjektBeskrivning"]

    HEM --> HEADER["Header"]
    HEM --> HERO["Hero"]
    HEM --> PROJ["Projekt"]
    PROJ --> KORT["ProjektKort (3 st)"]

    OMMIG --> TOGGLE["Toggle"]

    style NAV fill:#dae8fc
    style FOOT fill:#dae8fc
    style HEADER fill:#d5e8d4
    style HERO fill:#d5e8d4
    style KORT fill:#d5e8d4
    style KONT fill:#fff2cc
    style PB fill:#fff2cc
    style TOGGLE fill:#fff2cc
```

Färgerna: blå = visas på alla sidor, grön = tar emot props, gul = har egen `useState`.

**Filer som finns men inte renderas någonstans:** `Valkommen`, `Halsning`, `Intressen`, `Raknare`.

---

## 3. Props – vem skickar vad till vem

```mermaid
classDiagram
    class App
    class Hem
    class Header {
        namn : string
        titel : string
    }
    class Hero {
        namn : string
    }
    class Projekt
    class ProjektKort {
        titel : string
        text : string
        bild : importerad bild
        lank : string
    }
    class Navbar
    class Footer

    App --> Navbar : inga props
    App --> Footer : inga props
    App --> Hem : via Route
    Hem --> Header : namn och titel
    Hem --> Hero : namn
    Hem --> Projekt : inga props
    Projekt --> ProjektKort : titel, text, bild, lank
```

Dataflödet är enkelriktat, uppifrån och ner, och värdena är hårdkodade som strängar i föräldrarna:

| Förälder | Barn | Props |
|---|---|---|
| `Hem.jsx` | `Header` | `namn="Niki"`, `titel="Overachever"` |
| `Hem.jsx` | `Hero` | `namn="Hero Niki"` |
| `Projekt.jsx` | `ProjektKort` (3 st) | `titel`, `text`, `bild`, `lank` |

Alla andra komponenter får inga props. Bilderna importeras i `Projekt.jsx` (inte i `ProjektKort`) eftersom `Projekt` bestämmer vilken bild varje kort får.

---

## 4. State – var finns tillstånd?

Ingen state delas mellan komponenter. Varje `useState` ligger lokalt:

| Komponent | State | Syfte |
|---|---|---|
| `Kontakt.jsx` | `namn`, `email`, `meddelande` | Kontrollerade input-fält |
| `Kontakt.jsx` | `skickat` (bool) | Visar tackmeddelande istället för formuläret |
| `Kontakt.jsx` | `fel` (string) | Visar valideringsfel |
| `ProjektBeskrivning.jsx` | `läsMer` (bool) | Visar eller döljer lång text |
| `Toggle.jsx` | `visas` (bool) | Växlar text och färg (används i `OmMig`) |
| `Raknare.jsx` | `antal` (number) | Räknare, **renderas inte** |

State i en komponent försvinner när du byter sida (komponenten avmonteras). Skickar du formuläret och går till "Hem" och tillbaka är formuläret tomt igen.

---

## 5. Routing

```mermaid
flowchart LR
    URL["Webbadress"] --> BR["BrowserRouter (main.jsx)"]
    BR --> R{"Routes (App.jsx)"}
    R -->|"/"| A["Hem"]
    R -->|"/om-mig"| B["OmMig"]
    R -->|"/kontakt"| C["Kontakt"]
    R -->|"/projekt-beskrivning-sida"| D["ProjektBeskrivning"]
    R -->|"annan adress"| E["Ingen sida (bara Navbar och Footer)"]
```

`Navbar` och `Footer` ligger utanför `Routes` och syns därför på alla sidor. "Om mig" och "Kontakt" använder `<Link>` (ingen sidomladdning). "Hem" och "Projekt" (`/#projekt`) är vanliga `<a href>`.

---

## 6. Flödesschema – kontaktformuläret (`Kontakt.jsx`)

```mermaid
flowchart TD
    START(["Användaren klickar Skicka"]) --> PREV["e.preventDefault()"]
    PREV --> LOG["console.log(namn, email, meddelande)"]
    LOG --> C1{"Något fält tomt?"}
    C1 -->|Ja| E1["setFel('Fyll i alla fält.') och return"]
    C1 -->|Nej| CLR["setEmail('') rensar e-postfältet"]
    CLR --> C2{"email innehåller @?"}
    C2 -->|Nej| E2["setFel('E-postadressen måste innehålla @.') och return"]
    C2 -->|Ja| OK["setMeddelande(''), setFel(''), setSkickat(true)"]
    OK --> THX["Visar: Tack för ditt meddelande, namn!"]
    E1 --> RENDER["Formuläret renderas om med felet"]
    E2 --> RENDER
```

Observera att `setEmail("")` körs **före** @-kontrollen, så e-postfältet töms även när valideringen misslyckas (se avsnitt 8).

---

## 7. Sekvensdiagram – sidan startar och användaren byter sida

```mermaid
sequenceDiagram
    participant B as Webbläsare
    participant M as main.jsx
    participant R as BrowserRouter
    participant A as App
    participant S as Sidkomponent

    B->>M: Laddar index.html och main.jsx
    M->>R: render(BrowserRouter med App)
    R->>A: Rendera App
    A->>A: Navbar och Footer visas alltid
    A->>S: Routes matchar URL, rätt sida renderas
    S-->>B: DOM uppdateras
    B->>R: Klick på Link (t.ex. Kontakt)
    R->>A: URL ändras, ingen omladdning
    A->>S: Ny sida ersätter den gamla (gammal state försvinner)
```
