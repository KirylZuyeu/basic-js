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
      if (isNaN(position) || this.chain[position - 1] === undefined || Math.ceil(position) !== position || position < 0) {
        this.chain = [];
        throw new Error;
      }
      this.chain.splice((position - 1), 1);
      return this;
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {
    let chain = this.chain.join('~~');
    this.chain = [];
    return chain;
    }
};

module.exports = chainMaker;
