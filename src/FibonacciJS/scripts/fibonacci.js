/**
 * @description The Fibonacci calculator.
 * @param {function} filter - Provide a Filter function. See @member filter.
 * @author Michael W. Powell
 * @copyright (c) 2019 All rights reserved.
 * @license LGPL-3.0-or-later
 * @version 1.0.0
 */
function fibonacci(filter) {

	/* In terms of "just using a calculator", this is precisely what we can do, with a subtle
     * change, allowing for either Default Fibonacci Sequence, or for more Fibonacci outcomes. */

	if (!(filter === undefined || typeof filter === "function")) {
		// Could get more elaborate here, involving stack back traces, etc.
		throw "filter is expected to be a function accepting the arguments: (i, x)";
	}

	/**
     * @description Captures the Filter function for use during Sequence calculation. The Default Filter function simply returns the @param x.
     * @param {number} i - The Index of the current value under consideration.
     * @param {number} x - The Value currently under consideration.
     * @see this.filter
     */
	this.filter = filter || function(i, x) { return x; };
    // Nothing fancy here, starting from the known Default Identity Sequence.
	/**
	 * @description The Sequence array. Starts with the Identity Sequence.
	 * @see this.get
	 */
    this.sequence = [0, 1];
    /**
     * @description Invoke Get with the i-th value requested. Calculates subsequent Sequence values only when necessary to do so.
     * @function
     * @param {number} i - The Index of the requested Sequence Value.
     * @return {number} The requested Sequence Value.
     * @see this.sequence
     * @see this.filter
     */
    this.get = function(i) {
        var seq = this.sequence;
        var fil = this.filter;
        // Updates the Sequence only when necessary.
        while (seq.length < i + 1) {
            // Many algorithms are excessively recursive here, but we can simply Iterate.
            var x = seq[seq.length - 2];
            var y = seq[seq.length - 1];
            // Apply the user filter at the moment of entry.
            var z = fil(seq.length, x + y);
            seq.push(z);
            // For diagnostic purposes only. Should be equal since they are the same object reference.
            if (this.sequence.length !== seq.length) { throw "sequence length is incorrect"; }
        }
        this.sequence = seq;
        return seq[i];
    };
    return this;
}

// For NodeJS purposes.
module.exports = {calculator: fibonacci};
