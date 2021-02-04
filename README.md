# headless-lighthouse

> Get Lighthouse scores from a headless Chromium browser.

## Install

```bash
npm install
```

## Usage

```bash
npm start <url>
```

To get [Lighthouse](https://developers.google.com/web/tools/lighthouse/) test results for `https://example.com`, run:

```bash
npm start https://example.com
```

This will run 10 trials on mobile and 10 on desktop.

```
$ npm start https://twitter.com/wordpress

Getting Lighthouse performance scores for mobile and desktop… 

Trial 1 for mobile: 0.7
Trial 2 for mobile: 0.7
Trial 3 for mobile: 0.7
Trial 4 for mobile: 0.7
Trial 5 for mobile: 0.7
Trial 6 for mobile: 0.7
Trial 7 for mobile: 0.7
Trial 8 for mobile: 0.7
Trial 9 for mobile: 0.7
Trial 10 for mobile: 0.7

The mean performance score for mobile was: 0.7000000000000001

Trial 1 for desktop: 0.46
Trial 2 for desktop: 0.4
Trial 3 for desktop: 0.45
Trial 4 for desktop: 0.46
Trial 5 for desktop: 0.45
Trial 6 for desktop: 0.44
Trial 7 for desktop: 0.46
Trial 8 for desktop: 0.46
Trial 9 for desktop: 0.45
Trial 10 for desktop: 0.46

The mean performance score for desktop was: 0.449
```

## License

GPL-2.0-or-later
