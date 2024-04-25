# Emojiu.cc

Emojiu.cc is a website that allows users to easily find and copy emojis.

## Key Features

- Search for emojis by name or description
- Copy emojis with one click
- View emoji images and metadata
- Responsive design works on all devices

## Tech Stack

- Next.js
- Contentlayer - For managing content
- Tailwind CSS - For styling

## Data Sources

Emoji data is sourced from:

- unicode-emoji-json - Main emoji dataset
- emojilib - Additional emoji metadata

## Running Locally

To run the site locally:

- Clone this repo
- Run npm install to install dependencies
- Run npm run dev to start the local development server
- Open http://localhost:3000 in your browser

How to run specific test

npx playwright test tests/emoji-random-tool.spec
