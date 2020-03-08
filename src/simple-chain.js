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
      if (typeof(position) !== typeof(3) || this.chain[position - 1] === undefined || (position ^ 0) !== position || position < 0) {
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
