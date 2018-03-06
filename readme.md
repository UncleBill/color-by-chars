# color-by-chars

Generate color by characters. Mostly different characters, different colors. [examples](https://unclebill.github.io/color-by-chars)

## Usage

### npm
```sh
npm install color-by-chars
```

```javascript
import colorByChars from 'color-by-chars'
// or const colorByChars = require('color-by-chars')

let [red, green, blue] = colorByChars('Hello World!')

// offset 100, make it different again.
let [red, green, blue] = colorByChars('Hello World!', 100)
```

### browser

```html
<script src='/path/to/color-by-chars.js'></script>
<script>
console.log(colorByChars('Hello World!'))
// => [34, 0, 0]
// [RED, GREEN, BLUE]
</script>
```

## How
Calculate the product by all charCode's of every character, then map it to color space.

## License

MIT
