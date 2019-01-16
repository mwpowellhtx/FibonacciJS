describe("Fibonacci calculator has expected structure", function() {

	// It is a bit tricky getting this to work both from command line npm-run mocha as well as browser harnessed.
	const assert = (require || function(){ return chai; })("chai").assert;
	const expect = (require || function(){ return chai; })("chai").expect;
	const calculator = (require || function() { return {calculator: fibonacci}; })("../../scripts/fibonacci").calculator;

	it("is defined", function() {
		assert.isDefined(calculator, "Fibonacci should be defined as a function");
	});

	it("is function", function() {
		assert.isFunction(calculator, "Fibonacci is not defined as a function");
	});

	var fib = calculator();

	describe("Instance has expected structure", function() {

		it("instance is defined", function() {
			assert.isDefined(fib, "Fibonacci instance is not defined");
		});

		it("instance type is incorrect", function() {
			assert.equal(typeof fib, "object", "instance type is incorrect");
		});

		it("has sequence", function() {
			assert.isDefined(fib.sequence, "Fibonacci instances should have a sequence");
		});

		it("sequence is an array", function() {
			assert.isArray(fib.sequence, "Fibonacci sequence member is not an array");
		});

		it("sequence is the default Fibonacci identity array", function() {
			// Array assertion is a bit tricky using Chai.Assert.
			assert.deepEqual(fib.sequence, [0, 1], "Default Fibonacci sequence is incorrect");
		});

		it("has filter", function() {
			assert.isDefined(fib.filter, "Fibonacci instances should have a filter");
		});

		it("filter is a function", function() {
			assert.isFunction(fib.filter, "Fibonacci filter member should be a function");
		});

		it("has get", function() {
			assert.isDefined(fib.get, "Fibonacci instances should have a get function");
		});

		it("get is a function", function() {
			assert.isFunction(fib.get, "Fibonacci get member should be a function");
		});
	});

	describe("Fibonacci calculator expects filter to be a function", function() {

		const ex = "filter is expected to be a function accepting the arguments: (i, x)";

		it("is expected to throw given any non function, or undefined, argument", function() {
			expect(function() {
				calculator("any non function argument is expected to throw");
			}).to.throw(ex, "expected to throw exception given non function, or undefined, argument");
		});

		it("undefined filter is expected not to throw", function() {
			expect(function() {
				calculator(undefined);
			}).not.to.throw(ex, "ought not to have thrown given undefined filter");
		});

		it("unspecified filter is expected not to throw", function() {
			expect(function() {
				calculator();
			}).not.to.throw(ex, "ought not to have thrown given unspecified filter");
		});

		it("valid filter is expected not to throw", function() {
			expect(function() {
				calculator(function(i, x) { return x; });
			}).not.to.throw(ex, "ought not to have thrown given valid filter");
		});
	});

	describe("And now verify the sequence works", function() {

		var expectedSeq;

		beforeEach(function() {
			// Based on: http://en.wikipedia.org/wiki/Fibonacci#Fibonacci_sequence
			expectedSeq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
		});

		it("valid get should not throw", function() {
			expect(function() {
				fib.get(3);
			}).not.to.throw({errMsgMatcher: "did not expect this to throw"});
		});

		it("requested last value is correct", function() {
			const i = expectedSeq.length - 1;
			assert.equal(fib.get(i),
					expectedSeq[i], "last value is incorrect");
		});

		it("requested middle value is correct", function() {
			const i = expectedSeq.length / 2;
			assert.equal(fib.get(i), expectedSeq[i], "middle value is incorrect");
		});
	});
});