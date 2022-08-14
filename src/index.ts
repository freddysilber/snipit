import { TrimOptions } from './models/trim-options.model';

export default function trim(
	input: string | number,
	args?: TrimOptions
) {
	switch (true) {
		case typeof input === 'string':
			// Removes whitespace from a string
			return (input as string).trim();
		case typeof input === 'number':
			if (!input) {
				return 0;
			}
			const countString = input.toString();
			if (input < 1000) {
				return input;
			}
			let secondDecimal = 0;
			let renderable: string = '';
			if (input < 10000) {
				secondDecimal = +countString.substring(1, 2);
				renderable = countString.substring(0, 1);
			} else if (input < 100000) {
				secondDecimal = +countString.substring(2, 3);
				renderable = countString.substring(0, 2);
			}
			if (secondDecimal > 0) {
				renderable += '.' + secondDecimal;
			}
			renderable += 'K';
			return renderable;
		default:
			throw new Error(`[ ${input} ]: This was not found...`);
	}
};