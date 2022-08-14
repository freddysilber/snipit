import { SnipOptions } from './models/snip-options.model';

/**
 * Cleans input using settings to customize the output
 * @param input String or number to 'clean'
 * @param args SnipOptions to customize the output
 * @returns String or number after the input has been 'cleaned'
 */
export default function snipit(
	input: string | number,
	args?: SnipOptions
): string | number {
	if (!input) {
		return input;
	}

	switch (typeof input) {
		case 'string':
			// Removes whitespace from a string
			return input.trim();
		case 'number':
			if (args?.abbreviate) {
				return abbreviateNumber(input);
			} else {
				return input;
			}
		default:
			throw new Error(`[ ${input} ]: This was not found...`);
	}
};

/**
 * Abbreviates a string or number to an abbreviated version with an accronym
 * @example 2657 => '2.6K'
 * @param input The number or string to 'trim'
 * @returns String or number of the cleaned input
 */
function abbreviateNumber(input: string | number): string | number {
	if (typeof input === 'string') {
		input = parseInt(input);
	}

	if (input < 1000) {
		return input;
	}

	const countString = input.toString();
	let secondDecimal = 0;
	let renderable: string = '';

	// TODO: update this if else chain to support larger numbers up to infinity
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
}