module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;

	    let newArr = members.filter(function(name) {
        if (typeof(name) == typeof('a')) return name;}).map(item => item.split(' ').join('').toUpperCase()[0]);

    let newArr1 = newArr.filter( function(letter) {
        let re = /^[A-Z]$/;
            if (re.test(letter)) {
                return letter;
            }
        }).sort().join('');
        return newArr1;
};