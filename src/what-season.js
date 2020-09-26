module.exports = function getSeason(date) {
	if (!arguments.length) return 'Unable to determine the time of year!';
    if (!(date instanceof Date)) throw new Error;
    for (item in date) throw new Error;
    if (typeof(date) == 'function') throw new Error;

    let season = '';
    let month = date.getMonth();
    switch(month){
      case 0:
      case 1:
      case 11:
        season = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        season = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        season = 'summer';
        break;
      case 8:
      case 9:
      case 10:
        season = 'autumn';
        break;
  
    }
  
    return season
};