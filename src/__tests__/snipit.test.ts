import snipit from '../index';

test('String', () => {
	expect(snipit(' String ')).toEqual('String');
});

test('Number', () => {
	expect(snipit(1)).toEqual(1);
	expect(snipit(999)).toEqual(999);
	expect(snipit(1000, { abbreviate: true })).toEqual('1K');
	expect(snipit(1100, { abbreviate: true })).toEqual('1.1K');
	expect(snipit(1200, { abbreviate: true })).toEqual('1.2K');
});