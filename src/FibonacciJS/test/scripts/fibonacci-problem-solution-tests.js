describe("Now verify that the Filtered Fibonacci calculator works correctly", function() {

	// It is a bit tricky getting this to work both from command line npm-run mocha as well as browser harnessed.
	const assert = (require || function(){ return chai; })("chai").assert;
	const expect = (require || function(){ return chai; })("chai").expect;
	const calculator = (require || function() { return {calculator: fibonacci}; })("../../scripts/fibonacci").calculator;

	var expectedSeq;
	var filter;
	var fib;

	beforeEach(function() {
		// Based on the problem description.
		expectedSeq = [0, 1, 1, 2, 3, 5, 8, 6, 14, 20, 34, 54, 88, 142, 230, 365];
		// Remember, i-th is zero based... based on the problem description.
		filter = function(i, x) { return ((i + 1) % 8) ? x : x - 7; };
		fib = calculator(filter);
	});

	it("the filter is correct", function() {
		assert.deepEqual(fib.filter, filter, "the filter is incorrect");
	});

	it("the sequence is correctly calculated", function() {
		var i = expectedSeq.length - 1;
		assert.equal(fib.get(i), expectedSeq[i], "the sequence was incorrectly calculated");
	});

	describe("calculate the 43-rd term", function() {

		var actual;

		beforeEach(function() {
			expect(function() {
				actual = fib.get(42);
			}).not.to.throw({errMsgMatcher: "did not expect this to throw"});
		});

		it("the sequence length is correct", function() {
			assert.equal(43, fib.sequence.length, "the Fibonacci sequence length was incorrect");
		});

		it("the 43-rd term was actually calculated correctly", function() {
			assert.equal(actual, fib.sequence[fib.sequence.length - 1], "the term was unexpected");
			console.log("the 43-rd term was " + actual);
		});
	});
});