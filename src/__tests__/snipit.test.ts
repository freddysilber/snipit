import snipit, { errorMessage } from '../index';

test('String', () => {
	/**
	 * Test that we 'snip' or 'trim' the strim using native JS 'trim()' function
	 * This test and logic should be removed ASAP
	 */
	expect(snipit(' String ')).toEqual('String');
});

test('Number', () => {
	// Less than 1000
	expect(snipit(1)).toEqual(1);
	expect(snipit(999)).toEqual(999);

	// Manipluations
	expect(snipit(1000, { abbreviate: true })).toEqual('1K');

	expect(snipit(1100, { abbreviate: true })).toEqual('1.1K');

	expect(snipit(1200, { abbreviate: true })).toEqual('1.2K');

	expect(snipit(10000, { abbreviate: true })).toEqual('10K');

	expect(snipit(11000, { abbreviate: true })).toEqual('11K');

	expect(snipit(11500, { abbreviate: true })).toEqual('11.5K');

	expect(snipit(50000, { abbreviate: true })).toEqual('50K');

	// expect(snipit(500000, { abbreviate: true })).toEqual('50K');
});

test('Error', () => {
	/**
	 * Expect the error message to contain a link to our GitHub Issues page... for now
	 * This 'expect' needs to be called in a function in order to catch the error in the test
	 */
	expect(() => {
		snipit({} as any)
	}).toThrow(errorMessage);
});
