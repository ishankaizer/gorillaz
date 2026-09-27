# Gorillaz Radio

A super simple, Gorillaz-only music player. It has one screen: an old Kong Studios TV plays the song, and underneath are a timeline and the shuffle, back, play/pause and next buttons.

- **101 songs** from every studio album: *Gorillaz*, *Demon Days*, *Plastic Beach*, *The Fall*, *Humanz*, *The Now Now*, *Song Machine*, *Meanwhile EP*, *Cracker Island* and *The Mountain*.
- Each album has its own accent colour, and the page re-themes itself as the tracks change.
- Songs stream from Gorillaz's official YouTube uploads (videos, visualisers and label audio) through the YouTube IFrame API, with custom controls on top. If a video gets taken down or can't be embedded, the player skips it.
- Fonts: **Rubik Dirt** for the logo, **Permanent Marker** for song titles and **Special Elite** for the typewriter labels.
- Keyboard: `Space` plays or pauses, `←`/`→` go back and forward, `S` toggles shuffle. Phone lock-screen controls work through the Media Session API.

## Run it

YouTube embeds need a real `http(s)://` origin, so opening the file directly from disk won't work. Serve the folder instead:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

To put it online, turn on **GitHub Pages** for this repo (Settings → Pages → deploy from branch, root folder). It's plain static HTML with no build step.

## Adding songs

Add a line to `tracks.js`: `["Song Title", "albumKey", "youtubeVideoId"]`.
