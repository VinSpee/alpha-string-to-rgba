// @flow
import parse from 'pure-color/parse';
import CSS_NAMES from 'css-color-names';

/*::
type ColorNameShape = string;
*/

/*::
type ColorShape = string;
*/

/*::
export type ColorsShape = {
	[colorname: ColorNameShape]: ColorShape,
};
*/

/*::
export type RequestedColorShape = string;
*/

const getColor = (colors /*: ColorsShape */) => (
	value /*: RequestedColorShape */
) => {
	const alpha = /(.+)(\.\d+)/.exec(value);
	if (alpha) {
		if (colors[alpha[1]]) {
			if (alpha[1].charAt(0) !== '#' && colors[alpha[1]]) {
				const colorHash = parse(CSS_NAMES[colors[alpha[1]]]);
				return `rgba(${colorHash[0]}, ${colorHash[1]}, ${
					colorHash[2]
				}, ${parseFloat(alpha[2])})`;
			}
		}
	}

	if (colors[value]) {
		return colors[value];
	}

	if (CSS_NAMES[value]) {
		return value;
	}

	throw new Error(
		`💥 you passed \`${
			value
		}\`, which isn’t listed in the object you passed as the \`colors\` argument`
	);
};

export default getColor;
