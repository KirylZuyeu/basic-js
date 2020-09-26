const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // check on validation of input data
  if (typeof(sampleActivity) != 'string' || sampleActivity.length == 0 || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;
  // discarb the extra float
  sampleActivity = sampleActivity.split('.').slice(0, 2).join('.');
  // test isNaN
  let numSampleActivity = Number(sampleActivity);
  if (isNaN(numSampleActivity)) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY/numSampleActivity)/0.693*HALF_LIFE_PERIOD);
  };
