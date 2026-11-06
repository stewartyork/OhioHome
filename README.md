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

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
