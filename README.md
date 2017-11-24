# Alpha String to RGBa

Converts alpha strings (`red.5`) to rgba (`rgba(255, 0, 0, 0.5)`).

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Travis](https://img.shields.io/travis/VinSpee/alpha-string-to-rgba.svg)](https://travis-ci.org/VinSpee/alpha-string-to-rgba)
[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/VinSpee/alpha-string-to-rgba.svg)](https://github.com/VinSpee/alpha-string-to-rgba/blob/master/LICENSE)

## Features

Takes a colors object and a value, returning a new string which is the rgba,
hex, or css color name representation calculated from the given value.

```js
import aToRGBa from 'alpha-string-to-rgba';

const colorMap = {
	aqua:    '#7fdbff',
	blue:    '#0074d9',
	lime:    '#01ff70',
	navy:    '#001f3f',
	teal:    '#39cccc',
	olive:   '#3d9970',
	green:   '#2ecc40',
	red:     '#ff4136',
	maroon:  '#85144b',
	orange:  '#ff851b',
	purple:  '#b10dc9',
	yellow:  '#ffdc00',
	fuchsia: '#f012be',
	gray:    '#aaaaaa',
	white:   '#ffffff',
	black:   '#111111',
	silver:  '#dddddd'
};

const getColor = aToRGBa(colorMap);

getColor('red'); // '#ff4136';
getColor('red.5') // 'rgba(255, 65, 54, 0.5)'
```

## Getting Started

```shell
❯ yarn add alpha-string-to-rgba
```

## Licence

[The MIT License (MIT)](https://github.com/Landish/module-boilerplate/blob/master/LICENSE).
