import snipit, { errorMessage } from '../index';

test('Number', () => {
	// Less than 1000
	expect(snipit(1)).toEqual(1);
	expect(snipit(999)).toEqual(999);

	// Manipluations
	expect(snipit(1000)).toEqual('1K');

	expect(snipit(1100)).toEqual('1.1K');

	expect(snipit(1200)).toEqual('1.2K');

	expect(snipit(10000)).toEqual('10K');

	expect(snipit(11000)).toEqual('11K');

	expect(snipit(11500)).toEqual('11.5K');

	expect(snipit(50000)).toEqual('50K');

	// expect(snipit(500000)).toEqual('50K');
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
