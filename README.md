# Collins Gyamera — Portfolio

A personal portfolio site for Collins Gyamera, Machine Learning Engineer.

**Live site:** [collinsbrefo123.github.io/Portfolio-website](https://collinsbrefo123.github.io/Portfolio-website/)

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero intro, career highlights, and contact CTAs |
| About | `about.html` | Bio, work experience, education, technical skills, and resume download |
| Work | `work.html` | Pinned GitHub projects (RAG comparison, document processing pipeline, plant disease CNN) |

## Structure

```
.
├── index.html      # Home page
├── about.html      # About page
├── work.html        # Work / projects page
├── shared.js         # Shared nav bar + footer, rendered into every page
├── collins.png       # Profile photo
├── Collins_Gyamera_Resume.pdf
└── package.json      # Dev-only dependency (Puppeteer, for local screenshot QA)
```

Every page includes `shared.js` and calls `renderHeader(activePage)` / `renderFooter(options)` to render the nav bar and footer from a single source, so the site stays consistent without a build step or templating framework — adding a new page just means adding one `<a>` entry to `NAV_ITEMS` in `shared.js`.

## Tech stack

- Static HTML — no framework, no build step
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- Vanilla JS for the shared nav/footer components
- Hosted on [GitHub Pages](https://pages.github.com/), auto-deploys on every push to `main`

## Local development

No build step required — just open the HTML files directly in a browser:

```bash
open index.html
```

Or serve it locally (recommended, since some browsers restrict relative asset loading over `file://`):

```bash
npx serve .
```

## Screenshot QA (optional)

Puppeteer is included as a dev dependency for taking quick screenshots while iterating on layout/responsiveness — it isn't required to run the site.

```bash
npm install
```

Then write a small script that launches Puppeteer, navigates to a local file/URL, and calls `page.screenshot(...)`.

## Deployment

The site is deployed via GitHub Pages, serving directly from the `main` branch root. Any push to `main` redeploys automatically within a minute or two.
