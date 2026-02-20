# HarrowJS – Pure JavaScript Harrow Deck

<div align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
![License](https://img.shields.io/github/license/PursDios/HarrowJS?style=flat-square)

**A completely self-contained, browser-only version of the Pathfinder Harrow Deck.**

No npm, no Composer, no backend, no build steps — just open `index.html` and go.

</div>

## What is this?

This is a lightweight, **pure front-end** digital tool for the **Harrow Deck** from Paizo's Pathfinder RPG (Age of Lost Omens / 2e compatible).

Draw cards, view meanings, alignments, ability associations (STR/Hammers, DEX/Keys, CON/Shields, INT/Books, WIS/Stars, CHA/Crowns), and perform simple readings — all running entirely in the browser with JavaScript and jQuery.

Great for:
- Quick GM reference during sessions
- Solo playtesting or casual divination
- Embedding in other sites or sharing as a single HTML file
- Anyone who wants a no-install Harrow experience

(It's the sibling project to the Laravel version: https://github.com/PursDios/harrowing — this one is simpler and fully offline-capable.)

## Features

- 🎴 Full 54-card Harrow Deck (all suits, alignments, cards)
- Random card draw(s) with smooth interactions (via jQuery)
- Card details popup or display: name, suit, alignment, ability, upright/reversed meaning
- Basic reading spreads (e.g. single card, 3-card past/present/future — add more if you expand!)
- Responsive design (works on desktop + mobile browsers)
- 100% client-side — zero server required
- Includes card images (`img/Harrow/`) for visual appeal
- Offline support (download the repo and open locally)

## Demo / Try It Now

1. Go to the repo: https://github.com/PursDios/HarrowJS
2. Click **Code** → **Download ZIP**
3. Unzip and double-click `index.html`

**Or use GitHub Pages** (if you enable it in repo settings → Pages → deploy from main branch / root):
- Live demo: https://pursdios.github.io/HarrowJS/  (enable it yourself — takes ~1 minute!)

(If you deploy it elsewhere like Netlify, Vercel Static, GitLab Pages, or even itch.io — drop the link here!)

## Quick Start (Zero Setup!)

No installation required!

- Clone or download the repo
- Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari)
- Start drawing cards!

## Folder structure:
HarrowJS/
├── index.html          # Main entry point
├── css/                # Styles
├── js/                 # JavaScript + jQuery logic
└── img/
└── Harrow/             # Card images


## Customization

- Edit card data/logic in the JS files (probably an array of cards or JSON-like structure)
- Add more spreads or features (alignment cross-checks, opposite/misaligned rules, save reading to localStorage)
- Swap or improve card art (images are in `img/Harrow/`)
- Replace jQuery with vanilla JS if you want to go ultra-modern/lightweight

## License

[MIT](LICENSE) — feel free to use, modify, share (add a LICENSE file if missing — MIT is perfect for this).

Built for Pathfinder fans who just want to shuffle fate without fuss.  
Varisian wisdom at your fingertips. 🔮
