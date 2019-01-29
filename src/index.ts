import parse from 'pure-color/parse';
import CSS_NAMES from 'css-color-names';

export type ColorMap = {
  [color: string]: string;
};
export type ConvertString = (color: string) => string;

export type ConvertColor = (colors: ColorMap) => ConvertString;

const convertColor: ConvertColor = (colors: ColorMap) => (value: string) => {
  const alpha = /(.+)(\.\d+)/.exec(value);
  if (alpha) {
    if (colors[alpha[1]]) {
      if (colors[alpha[1]].charAt(0) !== '#') {
        const colorHash = parse(CSS_NAMES[colors[alpha[1]]]);
        return `rgba(${colorHash[0]}, ${colorHash[1]}, ${
          colorHash[2]
        }, ${parseFloat(alpha[2])})`;
      }
      const colorHash = parse(colors[alpha[1]]);
      return `rgba(${colorHash[0]}, ${colorHash[1]}, ${
        colorHash[2]
      }, ${parseFloat(alpha[2])})`;
    }
  }

  if (colors[value]) {
    return colors[value];
  }

  if (CSS_NAMES[value]) {
    return value;
  }

  if (process.env.NODE_ENV !== 'development') {
    throw new Error(
      `💥 you passed \`${
        value
      }\`, which isn’t listed in the object you passed as the \`colors\` argument`
    );
  }
  return value;
};

export default convertColor;
