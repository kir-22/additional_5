module.exports = function check(str, bracketsConfig) {
  // your solution
    if (str.length % 2 != 0) {
        return false;
    }
    str = str.split('');
    var array = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            var n=array.length-1;
            if ((array[n] == bracketsConfig[j][0]) && (str[i] == bracketsConfig[j][1]))
                array.pop();
            else if (str[i] == bracketsConfig[j][0])
                array.push(str[i]);
        }
    }
    return array.length == 0;
}
