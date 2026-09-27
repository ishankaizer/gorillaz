// Copy this file to lyrics.local.js (that exact name — .gitignore already
// excludes it, so it stays on your computer only) and fill it in with your
// own lyrics. index.html loads lyrics.local.js automatically if it's there,
// and does nothing if it's not.
//
// Don't use `const LYRICS = {...}` here — lyrics.js already declared LYRICS
// as a global. Just add to it, like this dummy example (not real lyrics —
// replace with your own):

LYRICS["dQw4w9WgXcQ"] = [               // key = the track's YouTube id (see tracks.js)
  { t: 0,    text: "Example line one" },
  { t: 4.5,  text: "Example line two" },
  { t: 9,    text: "Example line three" },
];

// Repeat that LYRICS["..."] = [...] block for as many songs as you want.
// `t` is when the line starts, in seconds (decimals are fine, e.g. 12.4).
// Timestamps just need to be in increasing order within each song's list.
