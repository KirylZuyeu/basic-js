module.exports = function createDreamTeam(members) {
	    let newArr = arr.filter(function(name) {
        if (typeof(name) == typeof('a')) return name;});
    let sortArr = [];
    for (let i = 0; i < newArr.length; i++) {
        sortArr[i] = newArr[i].split(' ').join('');
    }
    let newArr1 = sortArr.filter(function(name) {
        let re = /^[A-Z]+[a-z]+$/;
            if (re.test(name)) {
                return name;
            }
        }).map(name => name.charAt(0)).sort().join('');
        return newArr1;
};