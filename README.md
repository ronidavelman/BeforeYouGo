## BeforeYouGo

The purpose of this script is to initiate an offer to a user, before they leave the page, or on a timer.

## Installation

### Manual

```
<script src="BeforeYouGo.js"></script>
```
OR
```
<script src="BeforeYouGo.min.js"></script>
```

### NPM
Coming soon

## Default Config Options

| Options        | Default      |
| ------------- |:-------------:|
| delay      | 0 |
| threshold     | 15      |
| cookies | false      |
| cookie_name | 'intentDisabled'      |
| mobileDisabled | true      |
| custom_cookie | false      |
| custom_cookie_name | 'custom'      |
| timed | false      |
| timed_delay | 0      |


var config = {
	delay:0,
	threshold:15,
	cookies:false,
	cookie_name:'intentDisabled',
	mobileDisabled : true,
	custom_cookie: false,
	custom_cookie_name: 'custom',
	timed: false,
	timed_delay: 0,
	callback: {
		exited: function(){console.log('User exited the window.');},
		fired : function(){console.log('The intent was fired.');},
		timedOverlay : function(){console.log('Timed overlay was fired.');}
	}
}
## Basic Usage

```
setupIntent();
```

## Cookie Usage
```
setupIntent({"cookies":true,"custom_cookie": true, "custom_cookie_name": "registered"});
```
Uses cookies, with a custom cookie name of "registered". When the registered cookie is set, the modal will not fire. This is useful if you want to disable the modal from firing after it has been closed.

### Setting the cookie to disable the modal
#### (requires "cookies":true)
```
BeforeYouGo_SetCookie(name,value,days)
```
For example:
<li class="closeBtn" onclick="BeforeYouGo_SetCookie('registered','true','5')">X</li>

This will disable the modal for 5 days.


## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
