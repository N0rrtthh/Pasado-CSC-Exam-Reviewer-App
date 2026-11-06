# Pasado: CSE Reviewer

A free, offline-first reviewer for the **Philippine Civil Service Exam (CSE-PPT)**, Professional and Subprofessional levels. It runs in any browser as an installable web app, and as an Android app.

**Web app:** https://n0rrtthh.github.io/Pasado-CSC-Exam-Reviewer-App/

**Android app:** download the APK from [Releases](https://github.com/N0rrtthh/Pasado-CSC-Exam-Reviewer-App/releases/latest)

> Pasado is an independent study tool. It is not affiliated with or endorsed by the Civil Service Commission.

## Features

- Timed mock exams in the CSE-PPT format, for both levels
- Topic drills and flashcards across verbal, numerical, analytical, clerical and general information
- Every answer comes with an explanation, and missed items are saved for review
- Math lessons and a step-by-step game for the no-calculator arithmetic the exam expects
- Exam hacks: speed techniques with "when you see this, do this" cues and worked examples
- Study plan, light and dark mode, read-aloud on questions, and backup codes to move progress between devices
- Works offline once opened, and installs to the home screen like an app
- Progress stays on your device: no account, no ads, no tracking

## Project layout

| File | What it is |
| --- | --- |
| `index.html` | The whole app: screens, styles and logic |
| `bank.js`, `bank2.js` | Question banks |
| `lessons.js` | Lesson content |
| `game.js` | Step-by-step math game |
| `hacks.js` | Exam speed techniques |
| `vendor/` | GSAP and Swiper (bundled, no CDN needed) |
| `icons/` | App icons for the web app and home-screen install |
| `build.js` | Builds `dist/`: the installable offline web app (manifest + service worker) |
| `PRIVACY.md` | Privacy policy |

## Run it locally

```bash
node build.js
npx serve dist
```

No `npm install` is needed for the web app; `build.js` only uses Node's built-in modules.

## Deploy

Every push to `main` builds `dist/` and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: **Settings → Pages → Source: GitHub Actions**.

## Android app

The Android build is made locally with [Capacitor](https://capacitorjs.com) (`npm install`, then `npm run android`) and is not part of this repository. Signed APKs are published under [Releases](https://github.com/N0rrtthh/Pasado-CSC-Exam-Reviewer-App/releases).
