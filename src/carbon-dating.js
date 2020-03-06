const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	 if (typeof(sampleActivity) !== typeof("a") || sampleActivity == null || sampleActivity == '') return false;
    let re = /^\d+$/;
    if (re.test(sampleActivity)) {
        return Math.floor((Math.log((MODERN_ACTIVITY/(Number(sampleActivity))))/0.693*HALF_LIFE_PERIOD));
    } else return false;
};
