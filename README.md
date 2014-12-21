### ip2nick

Simple IP to nickname generator. It maps three last numbers of an IPv4 address into a cool nickname.

It always returns same nickname for same IP address. Nickname collisions can happen but are unlikely.

````
var ip2nick = require('ip2nick');

ip2nick('127.0.0.1'); // => actblobid
ip2nick('wrong'); // => undefined
````

*** Example results ***

* 127.0.0.1 => achuk4u
* 255.255.255.255 => 7step7u
* 192.168.1.5 => abkav1h
