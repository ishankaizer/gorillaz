# KONG FM — Gorillaz, live

A full-screen Gorillaz "TV station". Open it and you land in the middle of whatever's on air: the official music video fills the screen, with VHS grain, scanlines, a rolling tracking band, a LIVE bug and a torn-paper title card on top.

- **140 songs** in Spotify's album order: *Gorillaz*, *G-Sides* (Dracula), *Demon Days*, *Plastic Beach*, *The Fall*, *Humanz* (deluxe), *The Now Now*, *Song Machine* (deluxe), *Meanwhile EP*, *Cracker Island* (deluxe) and *The Mountain*, plus the Doncamatic and Sleeping Powder singles. Intros and interludes are left out.
- Sound and picture come from Gorillaz's official YouTube uploads, played on the page itself. Videos that get removed or won't embed are skipped.
- It works like a live station. Shuffle order is seeded by the day and the clock picks the song, so you tune in mid-song. Shuffle off plays the albums in order.
- Switching channels plays a static burst, flashes frames from the next video and shows a channel number.
- The controls (timeline, shuffle, back, play/pause, next, fullscreen) fade out after a few seconds and come back when you move or tap.

**Why "tap to tune in":** every browser blocks autoplay with sound, so the station starts playing muted and your first tap or keypress turns the sound on (and goes fullscreen where the browser allows it). On iPhone, Safari can't make a web page fullscreen, but *Share → Add to Home Screen* runs it fullscreen.

Keys: `Space` play/pause · `←` `→` back/next · `S` shuffle · `F` fullscreen.

## Deploy

It's a plain static site with no build step. Vercel serves `index.html` from the repo root.

## Editing the lineup

`tracks.js`, one line per song: `["Title", "albumKey", "youtubeId"]`.

---
Unofficial fan project. Music, videos and artwork © Gorillaz / Kong / Parlophone / Jamie Hewlett.
