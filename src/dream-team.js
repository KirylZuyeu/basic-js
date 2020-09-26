module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let re = /^[A-Z]$/;
  let newArr = members.filter(el => typeof(el) == 'string')
                  .map(el => el.split(' ').join('').toUpperCase()[0])
                  .filter(el => re.test(el))
                  .sort()
                  .join('');

  return newArr;
};