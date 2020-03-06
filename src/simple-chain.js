const chainMaker = {
    chain: [],
    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      if (!arguments.length) {
        this.chain.push('( )');
      } else {
        this.chain.push(`( ${value} )`);
      }
      return this;
    },
    removeLink(position) {
      if (typeof(position) !== 'number' || this.chain[position - 1] === undefined || (position ^ 0) !== position || position < 0) {
        throw new Error;
      }
      this.chain.splice((position - 1), 1);
      return this;
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {;
      return this.chain.join('~~');
    }
};

module.exports = chainMaker;
