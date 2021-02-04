# headless-lighthouse

> Get Lighhouse scores from a headless browser.

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

This will run 10 trials. It'll display the performance score of each and the mean of all 10:

```bash
$ npm start https://github.com/kienstra/headless-lighthouse

The performance score of trial 1 is: 0.8
The performance score of trial 2 is: 0.8
The performance score of trial 3 is: 0.79
The performance score of trial 4 is: 0.82
The performance score of trial 5 is: 0.81
The performance score of trial 6 is: 0.81
The performance score of trial 7 is: 0.78
The performance score of trial 8 is: 0.82
The performance score of trial 9 is: 0.83
The performance score of trial 10 is: 0.8

The mean performance score was: 0.806
```

## License

GPL-2.0-or-later
