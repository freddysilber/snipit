# Trim.js

This library will 'trim' ints and strings to user friendly format

[![GitHub issues](https://img.shields.io/github/issues/freddysilber/trim.js)](https://github.com/freddysilber/trim.js/issues)
![Tests](https://img.shields.io/badge/Tests-passing-green)
![License](https://img.shields.io/badge/License-MIT-orange)

```javascript
import trim from 'trim.js';

trim(1345) // => '1.3K'
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