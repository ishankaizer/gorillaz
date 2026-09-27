// Synced-lyrics data, keyed by the YouTube video id from tracks.js.
//
// I'm deliberately shipping this empty. Genius/Musixmatch etc. are blocked from
// where I'm running, and even if they weren't, copy-pasting the full text of ~140
// copyrighted songs onto this site would be a real (and separate) copyright problem
// from embedding a licensed YouTube stream — and reconstructing lyrics from search
// snippets risks being flat-out wrong. So: the engine below is fully built and
// wired up (blur/glow/auto-scroll/tap-to-seek, all synced off the video's current
// time) — it just has nothing to show yet.
//
// To add a song, get its timed lyrics from something you have the rights to use
// (a licensed API such as Musixmatch's, an LRC file you own, your own transcription)
// and add an entry like this:
//
//   LYRICS["HyHNuVaZJ-k"] = [   // Feel Good Inc. — key is the track's YouTube id
//     { t: 12.0, text: "First line of the song" },
//     { t: 15.4, text: "Next line, whenever it starts" },
//     ...
//   ];
//
// `t` is the line's start time in seconds. Lines don't need to cover the whole
// song — anything before the first timestamp or after the last just shows the
// nearest line. If a track has no entry here, the panel shows a short note
// instead of guessing.
const LYRICS = {};
