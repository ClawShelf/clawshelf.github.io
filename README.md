# 🚀 ClawShelf (Live Site)

This repository contains the production build of **ClawShelf**, a high-performance documentation reader for [OpenClaw](https://github.com/OpenClaw/OpenClaw).

---

## 🌐 Access the App
The latest version is always available at:
### 👉 [https://clawshelf.github.io](https://clawshelf.github.io)

---

## 🛠 Project Structure
* **Main Repo:** [ClawShelf/clawshelf](https://github.com/ClawShelf/clawshelf) - *Go here to contribute or view source code.*
* **Status:** [![OpenClaw Sync](https://github.com/ClawShelf/clawshelf.github.io/actions/workflows/build-and-deploy.yml/badge.svg?label=Data%20Freshness)](https://github.com/ClawShelf/clawshelf.github.io/actions)

---

## 📦 About this Repository
This is a **deployment-only** branch. 
* **Static Assets:** All HTML, JS, and CSS are pre-rendered via SvelteKit.
* **Data:** The `dist-assets/` folder contains the latest Isar database and `build.json` synced from OpenClaw.
* **Updates:** This repo is updated automatically every day at 03:15 UTC by our GitHub Actions pipeline.
