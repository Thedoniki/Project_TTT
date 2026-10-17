# Project commit history

This document summarizes the project-related commits in
[`Thedoniki/Documents` on `main`](https://github.com/Thedoniki/Documents/commits/main/)
and on the [`James-min-sida` branch](https://github.com/Thedoniki/Documents/tree/James-min-sida).
Times are shown in Central European Summer Time (CEST, UTC+2).

## How to read the two histories

The project started at the repository root in `min-sida/`. The `James-min-sida`
branch contains that development history, then adds a copy of the project under
`James-min-sida/min-sida/` and continues development in the root `min-sida/`
folder. The `main` branch shares the original project commits but diverges after
October 14; its later snapshot commit added installed dependencies to the
`James-min-sida/min-sida/` copy.

The commit messages below are quoted as written (including their original
Swedish spelling). The notes explain the main code or file changes.

## `main` branch

### October 14, 2026, 13:46 — “TechTalent_Trainee_Min-sida”

[View commit](https://github.com/Thedoniki/Documents/commit/0081392f8b29f140c85167a4de2e26a5fd114832)

Created the initial React/Vite project under `min-sida/`: project configuration,
entry point, global styling, and the first page components: `Header`, `Navbar`,
`Footer`, and `Valkommen`. Added the initial hero image and learning materials.

### October 14, 2026, 13:55 — “OmMig har nu skapats utan att något lagts i”

[View commit](https://github.com/Thedoniki/Documents/commit/f001aa2098b6a3ae38ddb9d9e25a9612a14dbf9c)

Added the initially empty `OmMig.jsx` component and rendered it from `App.jsx`.
Moved `Halsning.jsx` from `filer sen/` into `src/components/`.

### October 14, 2026, 14:45 — “Om mig components and added to app.jsx”

[View commit](https://github.com/Thedoniki/Documents/commit/c1795fc43e9166eea38e21b441e7e1413399e901)

Implemented the `OmMig` component and added its `OmMig.css` stylesheet. This
filled in the previously empty component.

### October 14, 2026, 15:42 — “OmMig .css och och jsx klar. Samt Hero .jsx och .css innan alla klasser skrivs in.”

[View commit](https://github.com/Thedoniki/Documents/commit/834dfeffa1b4f12028af6b8924246a6482955388)

Created the `Hero.jsx` component and `Hero.css`, added `hero.jpg` in place of
`hero.png`, and made additional updates to `App.jsx`, `OmMig`, `Halsning`,
`Header`, `Navbar`, and `Valkommen`.

### October 15, 2026, 09:56 — “från fram t 15 okt”

[View commit](https://github.com/Thedoniki/Documents/commit/ba7d69b06cd486e81f7b446518a95676c8d49042)

Added 4,432 files under `James-min-sida/min-sida/node_modules/`. These are
installed JavaScript dependencies, not new application components or features.

## `James-min-sida` branch and project-copy history

The first four commits below are shared with the original `main`-branch history.
The branch then adds and develops the separate `James-min-sida/min-sida/` copy
alongside the project at `min-sida/`.

### October 15, 2026, 09:54 — “James proj. Fram till 14 okt.”

[View commit](https://github.com/Thedoniki/Documents/commit/e6e8c87cee24cb0b2404a9c170b75fc4038c6d70)

Added a snapshot of the project under `James-min-sida/min-sida/`, with its React
components, styles, images, package files, and setup materials. This is where
the project folder named in the branch was first added.

### October 15, 2026, 12:23 — “Update .DS_Store files in the project directory”

[View commit](https://github.com/Thedoniki/Documents/commit/67cde1f63a90ad01a411752189442e58ea27839d)

Updated `.DS_Store` metadata files. No React source components changed.

### October 15, 2026, 12:25 — “Ai-promting fil för bäst resultat. Dagens ändringar framöer är för stegen i schema som heter: props och komponentträd samt bygg ut sidan med props.”

[View commit](https://github.com/Thedoniki/Documents/commit/27175b1b09810c50ab6e162fbcd58013448677b5)

Added AI-prompting and system-upgrade reference documents and updated
`James-min-sida/min-sida/src/components/Hero.css`. The commit message describes
future learning steps about props and the component tree; it does not itself add
new React components.

### October 15, 2026, 14:30 — “Kommentarer inlagda sam css fixad och hur man läggger in h2 referens på css.”

[View commit](https://github.com/Thedoniki/Documents/commit/072d2654a092a285bf616e5563e77b24c9fe4a04)

Added explanatory comments and CSS-related changes in `Hero.css`, and a small
update to `Hero.jsx`.

### October 15, 2026, 15:11 — “Jag läser först de tre filerna och hur `Hero`/`OmMig` används, så kommentarerna kan förklara det faktiska dataflödet utan att antyda att CSS-filen hanterar props.”

[View commit](https://github.com/Thedoniki/Documents/commit/49cd39a6850c9c084fc915ee5bc1b33dcccd858a)

Updated comments and styles across the app to explain the actual component and
props flow. The work touched `App`, `Hero`, `OmMig`, `Header`, `Navbar`, `Footer`,
`Halsning`, `Valkommen`, the entry point, and their stylesheets. This was mainly
clarification and styling, rather than introducing a new page section.

### October 16, 2026, 13:26 — “Nu kan man på navbaren trycka på om mig länken samt kontakt och den hoppar till lätt plats på webbsidan.”

[View commit](https://github.com/Thedoniki/Documents/commit/1d0ceb448f7bc22c40290d616f02978af197aa62)

Updated the navigation and related components so the “Om mig” and contact links
jump to their corresponding places on the page.

### October 16, 2026, 13:40 — “Skapat en ny komponent Intressen.jsx och lagt in en lista med mina intressen. Lagt den mellan Hero och Footer i App.jsx.”

[View commit](https://github.com/Thedoniki/Documents/commit/045d7abbc552f2ce3832b0724677e5781e9c0b09)

Created `Intressen.jsx` with a list of interests and inserted it into the page
in `App.jsx`. Also made small related footer and hero-style updates.

### October 16, 2026, 14:52 — “Lade till en projektsektion i Projekt.jsx, med tre projektkort och länkar till dina GitHub-sidor. Skapade ProjektKort.jsx, som återanvändbar komponent för kortens titel, text, bild och länk. Skapade CSS för projektsektionen i Projekt.css och korten i ProjektKort.css. I kortens CSS har du bland annat ändrat bilden för att visa hela bilden utan beskärning. Lade till tre bilder: bild1.png, bild2.png och bild3.png. Lade till en Projekt-länk i Navbar.jsx, som pekar på #projekt. Den matchar id="projekt" på sektionen i Projekt.jsx. Importerade och lade in <Projekt /> i App.jsx, före <Intressen />. ”Gjord med React ❤️” i Footer och ändrad padding i Hero finns inte bland de ändrade filerna sedan senaste commiten, så de verkar inte vara gjorda ännu.”

[View commit](https://github.com/Thedoniki/Documents/commit/831ef31a06edc044eac0c94bf2c57a67aed7cc25)

Added the `Projekt` section and reusable `ProjektKort` component, their
stylesheets, three project images, and a navigation link to the section. Inserted
`Projekt` before `Intressen` in `App.jsx`. The commit message also notes that a
React credit in the footer and extra hero padding were not included in that
commit.

## Later commits affecting the `James-min-sida/` folder on `main`

These commits are also visible in the
[folder-specific commit history](https://github.com/Thedoniki/Documents/commits/James-min-sida/).
They happened after the project-copy work above.

### October 16, 2026, 15:04 — “Min sida (#2)”

[View commit](https://github.com/Thedoniki/Documents/commit/75d39b9401ee6f807acc32b5bbf8a91ba9ea0f50)

This is a merge commit whose description includes notes about `.DS_Store`
updates, AI prompts, props, and explanatory comments. It changed many files in
the separate root `min-sida/` project; within `James-min-sida/`, it changed only
`James-min-sida/min-sida/src/components/Hero.css`.

### October 16, 2026, 15:07 — “Delete James-min-sida directory”

[View commit](https://github.com/Thedoniki/Documents/commit/f1d2ff6b42e23235b6d41fad94e935380bf87799)

Removed the files in `James-min-sida/` from the `Documents` repository. This
deleted that copy from this repository's current tree; it did not erase the
earlier commits from Git history.

## Component progression at a glance

1. The initial page contained `Header`, `Navbar`, `Footer`, and `Valkommen`.
2. `OmMig` was added first as an empty component, then implemented with its own
   stylesheet.
3. `Hero` was added with its own stylesheet and image.
4. Later commits clarified the components' props and styling, then made the
   navbar links navigate to the relevant page sections.
5. `Intressen` added an interests section.
6. `Projekt` and reusable `ProjektKort` added a projects section with three
   linked cards and images.
