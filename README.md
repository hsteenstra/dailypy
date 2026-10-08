# Code For ME — Daily Challenge

A new free Python challenge every day. Code runs in the browser through Pyodide, so there are no accounts and no installs, and it works on Chromebooks. Each student's progress (points, streak, and saved code) is kept in their own browser.

## How the days work

- Day 1 is `START_DATE` in `challenges.js`. The next challenge unlocks at midnight in the student's own time zone.
- Difficulty rotates Easy, Medium, Hard, then repeats. Easy is worth 10 points, Medium 20, and Hard 30.
- There are 60 challenges per level, so 180 days in total before anything repeats. With Day 1 on Oct 8, 2026, that runs through **April 5, 2027**. After that it loops back to the start.

## Files

- `challenges.js`: the start date, the rotation, and instructions for writing challenges
- `challenges-easy.js`, `challenges-medium.js`, `challenges-hard.js`: the 180 challenges
- `index.html`, `styles.css`, `app.js`: the page
- `worker.js`: runs student code and stops it after 5 seconds, so `while True` can't freeze the page
- `assets/byte.png`: Byte

## Adding challenges

Add new challenges to the **end** of a level's list, so past days never change. Copy an existing challenge and edit it. The comment at the top of `challenges.js` explains every field.

## Previewing

Add `?day=25` to the URL to see the site as it will look on Day 25.

## Putting it online (GitHub Pages)

1. Create a new public repo on GitHub, for example `daily`.
2. Upload every file in this folder, including the `assets` folder.
3. Go to Settings → Pages → Deploy from branch → `main` / root.
4. The site goes live at `https://hsteenstra.github.io/daily/`. To use `daily.codeforme.org` instead, add that as a custom domain and create a CNAME DNS record pointing to `hsteenstra.github.io`.
