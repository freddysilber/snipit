# Snippit

This library will 'snip' ints and strings to user friendly format

[![GitHub issues](https://img.shields.io/github/issues/freddysilber/snippit)](https://github.com/freddysilber/snippit/issues)
![Tests](https://img.shields.io/badge/Tests-passing-green)
![License](https://img.shields.io/badge/License-MIT-orange)

```javascript
import snippit from 'snippit';

snippit(1234, { abbreviate: true }) // => '1.2K'
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