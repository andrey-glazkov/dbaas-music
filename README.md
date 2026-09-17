# DBaaS.music v1

Static label-site prototype for DBaaS — Deep Bass as a Service.

## Run locally
Open `index.html` in a browser.

## Before publishing
1. Replace the placeholder `#` LISTEN / BUY links with Bandcamp, Apple Music, Spotify, etc.
2. Formspree is connected to endpoint `xnpnqrol`. Configure its notification destination inside Formspree. The public site does not expose the receiving address.
3. Review release dates / formats / descriptions.
4. Add future catalog entries by duplicating a `.release` block.

## GitHub Pages
Upload these files to a GitHub repository, enable Pages in Settings → Pages, and set the custom domain to `dbaas.music`.

The included `CNAME` file is for branch-based GitHub Pages publishing.
