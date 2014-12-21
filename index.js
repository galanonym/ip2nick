var a = require('./a.json');
var b = require('./b.json');
var c = require('./c.json');
var validator = require('validator');

var ip2nick = module.exports = function(ip) {

    if ( ! validator.isIP(ip, 4)) {
        return undefined;
    }
    
    var splitted = ip.split('.');

    //only last three digits
    //chance of getting two people 
    //with same last three numbers in ip is very small
    var first = splitted[1];
    var second = splitted[2];
    var third = splitted[3];
    
    var nickname = a[first] + b[second] + c[third];
    return nickname;
};

//simple test, to be runned in console
if ( ! module.parent ) {
    console.log(ip2nick('182.171.24.224'));
    console.log(ip2nick('171.24.224'));
    console.log(ip2nick('111.' + random() + '.' + random() + '.' + random()));
}

function random() {
    return Math.floor((Math.random() * 255));
}
