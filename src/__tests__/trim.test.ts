import trim from '../index';

test('String', () => {
	expect(trim(' String ')).toEqual('String');
});

test('Number', () => {
	console.log(trim(1000));
	expect(trim(1)).toEqual(1);
	expect(trim(999)).toEqual(999);
	expect(trim(1000, { abbreviate: true })).toEqual('1K');
	expect(trim(1100, { abbreviate: true })).toEqual('1.1K');
	expect(trim(1200, { abbreviate: true })).toEqual('1.2K');
});