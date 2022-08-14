# Snipit

This library will 'snip' ints and strings to user friendly format

[![GitHub issues](https://img.shields.io/github/issues/freddysilber/snipit)](https://github.com/freddysilber/snipit/issues)
![Tests](https://img.shields.io/badge/Tests-passing-green)
![License](https://img.shields.io/badge/License-MIT-orange)

```javascript
import snipit from 'snipit';

snipit(1234, { abbreviate: true }) // => '1.2K'
```

| Option | Type | Description |
| --- | --- | -------- |
| abbreviate | boolean | Abbreviates a number to string format with the 'counting' appropriate acronym. Ex. `1500 => '1.5K'` |

# Build
```bash
npm run build
```

# Publish
```bash
npm version patch
```
```bash
npm publish
```