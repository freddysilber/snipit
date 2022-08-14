function trim(input) {
	switch (true) {
		case typeof input === 'string':
			// Removes whitespace from a string
			return input.trim();
		case typeof input === 'number':
			return input;
		default:
			throw new Error(`[ ${input} ]: This was not found...`);
	}
};

exports.trim = trim;