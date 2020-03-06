module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	    if (disksNumber === 0) return `turns:${disksNumber}, seconds:0`;
    if (disksNumber === 1) {
        let seconds = disksNumber/turnsSpeed*3600;
        return `turns:${disksNumber}, seconds:${seconds}`;
    } else {
        let turns = Math.pow(2, disksNumber) - 1;
        let seconds = turns/turnsSpeed*3600;
        return `turns:${turns}, seconds:${seconds}`;
    }
}