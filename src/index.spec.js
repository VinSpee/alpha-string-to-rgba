import getColor from './index';

const COLORS = {
	red: 'magenta',
};

const c = getColor(COLORS);

test('selects colors from object', () => {
	expect(c('red')).toBe('magenta');
});

test('handles transparency', () => {
	expect(c('red.5')).toBe('rgba(255, 0, 255, 0.5)');
});

test('handles CSS named colors', () => {
	expect(c('magenta')).toBe('magenta');
});

test('throws on mismatch', () => {
	expect(() => c('foo')).toThrow(/you passed `foo`/);
});
