import snippit from '../index';

test('String', () => {
	expect(snippit(' String ')).toEqual('String');
});

test('Number', () => {
	expect(snippit(1)).toEqual(1);
	expect(snippit(999)).toEqual(999);
	expect(snippit(1000, { abbreviate: true })).toEqual('1K');
	expect(snippit(1100, { abbreviate: true })).toEqual('1.1K');
	expect(snippit(1200, { abbreviate: true })).toEqual('1.2K');
});