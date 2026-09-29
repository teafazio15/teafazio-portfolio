# Téa Fazio — engineering portfolio

A complete, self-contained portfolio website for GitHub Pages. No install, build command, paid service, or API key is required.

## Publish on GitHub Pages

1. Extract `Tea-Fazio-Portfolio.zip` on your computer.
2. Create a GitHub repository. Name it `YOUR-USERNAME.github.io` for a personal homepage, or use a name such as `portfolio` for a project site. On GitHub Free, use a public repository.
3. Upload the extracted **contents**, including `index.html`, `styles.css`, `script.js`, and the entire `assets` folder, into the repository. `index.html` must be at the repository's top level. Do not upload the ZIP itself, and do not put everything inside another folder. Keep `.nojekyll` if your file picker shows it; this plain HTML site also works without it.
4. Commit the files to `main`.
5. Open the repository's **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
6. Wait for GitHub's deployment to finish. The Pages settings will show **Visit site**. Publishing may take up to 10 minutes.

The site address is `https://YOUR-USERNAME.github.io/` for a personal-homepage repository, or `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/` for a project repository. All local links are relative, so both work.

Official instructions: [Create a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview and edit

Double-click `index.html` to preview it locally. Keep it beside the other files and `assets` folder. The website works offline; email and external website links need an internet connection.

- **Text, links, project order, experience:** edit `index.html` in a text editor. Each project has a readable ID, such as `rear-wheel`, `steering`, or `recruiting`.
- **Colors, typography, spacing:** edit `styles.css`. The main colors are defined in `:root` near the top.
- **Photos:** put a new image in `assets`, then update the matching image `src` and enclosing link `href` in `index.html`. Update its alt text, caption, and width/height too.
- **Résumé:** replace `assets/Tea-Fazio-Resume.pdf`, keeping the same filename.
- **Original portfolio download:** replace `assets/Tea-Fazio-Engineering-Portfolio.pdf`, keeping the same filename.
- **Image viewer:** `script.js` adds a full-size viewer with Escape-to-close and keyboard focus restoration. Without JavaScript, image links still open the image itself.

The website uses Space Grotesk and Hind, matching the presentation typography. Fonts and their SIL Open Font Licenses are included locally. The dark theme uses burnt orange accents, optimized WebP photos, and responsive layouts. Seven project blocks keep their main images visible; optional technical notes sit at the bottom. There are no trackers, forms, cookies, or external runtime dependencies.

## Content notes

- Main experience and education follow the September 29 résumé. Only the FRC 971 robotics experience was brought over from the older September 25 résumé.
- The current wheel-assembly headline uses the September 29 result: 26% lower toe and camber compliance. The technical notes for the earlier design review preserves the presentation's prior iteration, including 0.219° modeled deflection, its reported 15% improvement, and its mass tradeoff. Planned validation is identified as planned.
- The Saronic-named presentation describes Longhorn Racing's unsprung subsystem; it is not presented as Saronic hardware. Saronic internship experience comes from the current résumé.
- Recruiting platform ownership is described as end-to-end project management with software engineering partners. The live site and résumé inform the project description. The website screenshot is from the public homepage at https://lhrrecruiting.org/.
- The original downloadable portfolio PDF is preserved as supplied and therefore contains its earlier figures. The website's main project overview follows the newer résumé.
- Layout direction was inspired by Teddy Garza's engineering portfolio at https://teddygarza.github.io/. The website code and project copy were written for Téa, using the supplied documents and photographs.

## Files

`index.html` — complete website content  
`styles.css` — dark theme and responsive layout  
`script.js` — accessible image viewer  
`assets/` — photographs, fonts, current résumé, original portfolio PDF  
`.nojekyll` — static GitHub Pages marker  
`README.md` — these instructions
