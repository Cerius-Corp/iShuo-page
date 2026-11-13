# iShuo landing page

The website for [iShuo](https://apps.apple.com/id/app/ishuo/id6821036292), an iPhone app that helps Indonesian learners in China speak Mandarin. You record your real conversations; iShuo shows which sentences could be better, explains why, and practises them with you.

The page comes in Indonesian, English and Chinese.

## Built with

- [Vite](https://vite.dev) and [React](https://react.dev) with TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) for the animations, [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [qrcode.react](https://github.com/zpao/qrcode.react) for the download QR code

## Running it

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Type-checks and builds the site into `dist/` |
| `npm run preview` | Serves the built site locally |
| `npm run lint` | Lints with Oxlint |

## Where things are

| Path | What's in it |
| --- | --- |
| `src/sections/` | One file per section of the page, top to bottom |
| `src/components/` | Shared pieces: stamps, sticky notes, the iPhone frame, buttons, the language menu |
| `src/copy/` | Every word on the page, one file per language (`id.ts` sets the shape the others follow), and the Terms and Privacy Policy, one file per policy and language (`terms-en.ts`, `privacy-id.ts`, ...) |
| `src/i18n/` | Picking and remembering the language |
| `src/site.ts` | Links: the App Store, email and Instagram |
| `api/country.ts` | A Vercel Function telling the page which country the visitor is in |
| `public/img/` | The mascot, doodles and screenshots of the app |

## Common changes

- **Editing text:** change it in `src/copy/id.ts`, `en.ts` and `zh.ts`. For the Terms or Privacy Policy, change the English (`terms-en.ts` or `privacy-en.ts`) and the same lines in its `-id` and `-zh` files.
- **Going live on the App Store:** set `appStoreURL` in `src/site.ts`. The buttons, their labels and the QR code switch from TestFlight to the App Store.
- **Which language opens:** a `?lang=id`, `?lang=en` or `?lang=zh` link wins, then the language last picked from the menu on that device. Otherwise the visitor's country decides (Indonesian in Indonesia, Chinese in China, English elsewhere), read by `api/country.ts` from the header Vercel adds; where it isn't known, as when running locally, the page opens in English.

## Deploying

The site is built for Vercel: `npm run build` as the build command and `dist` as the output folder. `api/country.ts` runs as a Vercel Function, and `vercel.json` sends every other path to `index.html`. Elsewhere the page still works; it just opens in English.

---

Made by the Cerius team · cerius.corp@gmail.com · [@cerius_id](https://instagram.com/cerius_id)
