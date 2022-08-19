const issues = 'https://github.com/freddysilber/snipit/issues';

export const errorMessage = `We could not use this data type... Please issue a bug to: ${issues} explaining your problem`;

/**
 * Cleans number input: to use the number and decimal to format a string using the parts appended with an accronym
 * @param input Number to snip
 * @returns Number after the input has been 'cleaned'
 * @example 2200 => '2.2K'
 */
export default function snipit(
	input: string | number
): string | number {

	switch (typeof input) {
		case 'number':
			return abbreviateNumber(input);
		default:
			throw new Error(errorMessage);
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