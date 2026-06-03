# Mechanic Website

Static website for a local mechanic in Gulfport, Mississippi, built from the provided brand reference and service list.

## Open locally

Open `index.html` in a browser. No build step or server is required.

## Files

- `index.html` - page content, SEO metadata, LocalBusiness schema, section anchors
- `styles.css` - responsive layout, garage-inspired theme, mobile contact bar
- `script.js` - mobile menu, sticky header, smooth scroll, SMS quote form
- `assets/` - generated hero, logo, and service images

## Edit common business details

- Business name: search for `Auto Repair Services` in `index.html`
- Phone number display: search for `(615) 589-5995`
- Phone links and SMS target: search for `16155895995`
- Service area: search for `Gulfport, Mississippi`
- Hours: search for `Call or text for availability`
- Service images: replace files in `assets/services/` and update alt text in `index.html` if needed

## Quote form behavior

The quote form does not need a backend. On submit, it validates required fields and opens a prefilled SMS message to `+1 (615) 589-5995`.

The photo upload field is present for user expectation, but browsers cannot automatically attach that selected photo to an SMS. The page tells visitors to add photos after the text thread opens.

## Generated image prompts used

- Hero: cinematic modern auto repair garage, dramatic red/blue lighting, glowing headlights, tools, tires, suspension parts, oil bottles, no text
- Logo: mechanic shop logo concept with wrench, gear, chrome letters, red/blue highlights
- Service cards: oil change, tune-up, diagnostics, tire replacement, headlight replacement, suspension work, brake service, and battery replacement in a dark bold automotive advertising style
