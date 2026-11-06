# OhioHome

AirBNB / VRBO website for a short-term rental home in Hocking Hills —
**12300 Maysville Williams Rd, Logan, OH 43138**.

A static site (plain HTML, CSS and JavaScript, with no build step) that can be hosted on GitHub Pages, Netlify or any web host.

## Features

- **Home features**: quick facts, a photo gallery and amenity cards.
- **Stay request form**: sends requests by email through [FormSubmit](https://formsubmit.co), so no server is needed. It checks the dates and fields before sending and then redirects to `thank-you.html`.
- **Hocking Hills State Park**: Old Man's Cave, Cedar Falls, Ash Cave, Conkle's Hollow, Rock House, Cantwell Cliffs and Lake Logan. Each has a "Directions from the house" button that opens Google Maps routing from the home address.
- **Local restaurants**: places in Logan, Hocking Hills and nearby towns. Each has a filter tag, directions from the house and a link to its Google Maps listing for hours and reviews.
- **Location**: an embedded map of the house and a directions button.
- Responsive layout with a mobile menu.

## Files

```
index.html        Main page
thank-you.html    Shown after a request is submitted
css/styles.css    Styles
js/main.js        Park & restaurant data, rendering, form validation
images/           Put your photos here
```

## Setup checklist

1. **Turn on email requests.** In `index.html`, replace `YOUR_EMAIL@example.com` in the form's `action` with the inbox that should receive requests. The first time someone submits the form, FormSubmit emails that inbox an activation link. Click it once and requests will arrive from then on. (FormSubmit also lets you use a random alias in place of your real address so the address isn't visible in the page source.)
2. **Update home details.** Edit the quick facts (bedrooms, baths, guests), the amenity lists and the house rules in `index.html`.
3. **Add photos.** Put images in `images/`. Replace each `<div class="ph">…</div>` in the gallery with `<img src="images/your-photo.jpg" alt="…">`. Set the hero photo in `css/styles.css` (look for the `.hero` comment).
4. **Review the restaurants and parks.** They live in the `RESTAURANTS` and `PARKS` arrays at the top of `js/main.js`. Hours change with the seasons, so confirm the list before launch.

## HTTPS

The site is already set up to run only over HTTPS:

- Every external resource (fonts, Google Maps, FormSubmit) loads over `https://`.
- Both pages send `http://` visitors to `https://` (local previews on `localhost` are skipped). They also include `upgrade-insecure-requests`, which tells browsers to load any stray `http://` resources over `https://`.
- `_headers`, `netlify.toml` and `.htaccess` turn on the HTTPS redirect and security headers on hosts that support them. GitHub Pages ignores these files.

The certificate comes from your host. Pick the steps for yours.

**GitHub Pages**
1. Go to the repo's **Settings → Pages**, set the source to the `main` branch at `/ (root)`, and save.
2. *(Custom domain)* Enter your domain under **Custom domain**. At your DNS provider, add:
   - for an apex domain like `example.com`: `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - for `www`: a `CNAME` record pointing to `<username>.github.io`
3. When the certificate is ready (this can take up to an hour), check **Enforce HTTPS**.

**Netlify / Cloudflare Pages**: import the repo. They issue the certificate and redirect to HTTPS automatically. `_headers` adds HSTS and the other security headers.

**Apache shared hosting**: turn on the host's free Let's Encrypt (AutoSSL) certificate. `.htaccess` then forces HTTPS and adds the headers.

> Once the site runs on its final HTTPS domain, send a test request from the live form to confirm that email arrives. If FormSubmit asks you to activate again, click the link it sends.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
