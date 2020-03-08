const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_HALF_LIFE = Math.log(2).toFixed(3) / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== typeof("a") || sampleActivity == null || sampleActivity == '' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;
    let strSampleActivity = String(sampleActivity);
    if (strSampleActivity.charAt('.') >= 1) {
      strSampleActivity = strSampleActivity.split('.').slice(0, 2).join('.');
    } else strSampleActivity = sampleActivity;
    let re = /^[0-9]*[.,]?[0-9]+$/;
    if (re.test(strSampleActivity)) {
        return Math.ceil((Math.log((MODERN_ACTIVITY/(Number(strSampleActivity))))/0.693*HALF_LIFE_PERIOD));
    } else return false;
  };
