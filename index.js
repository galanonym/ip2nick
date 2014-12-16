var i = require('./i.json');
var a = require('./a.json');
var o = require('./o.json');
var validator = require('validator');

var ip2nick = module.exports = function(ip, callback) {

    if ( ! validator.isIP(ip, 4)) {
        callback(new Error('Invalid IPv4 address'));
        return;
    }
    
    var splitted = ip.split('.');

    //only last three digits
    //chance of getting two people 
    //with same last three numbers in ip is very small
    var first = splitted[1];
    var second = splitted[2];
    var third = splitted[3];
    
    var nickname = a[first] + o[second] + i[third];
    callback(null, nickname);
};

//simple test, to be runned in console
if ( ! module.parent ) {
    ip2nick('182.171.24.224', function(error, nickname) {
        console.log(error, nickname);
    });;

    ip2nick('171.24.224', function(error, nickname) {
        console.log(error, nickname);
    });;
}
