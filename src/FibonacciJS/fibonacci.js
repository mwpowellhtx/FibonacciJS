
function fibonacci(filter) {
    /* In terms of "just using a calculator", this is precisely what we can do, with a subtle
     * change, allowing for either Default Fibonacci Sequence, or for more Fibonacci outcomes. */
    this.filter = filter || function(j, x) { return x; };
    // Nothing fancy here, starting from the known Default Identity Sequence.
    this.sequence = [0, 1];
    this.get = function(i) {
        var seq = this.sequence;
        var fil = this.filter;
        // Updates the Sequence only when necessary.
        while (seq.length - 1 < i) {
            // Many algorithms are excessively recursive here, but we can simply Iterate.
            var x = seq[seq.length - 2];
            var y = seq[seq.length - 1];
            // Apply the user filter at the moment of entry.
            var z = fil(seq.length, x + y);
            seq.push(z);
        }
        return seq[i];
    }
}

// For NodeJS purposes.
module.exports = fibonacci;
