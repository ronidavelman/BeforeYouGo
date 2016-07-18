## BeforeYouGo

The purpose of this script is to initiate an offer to a user, before they leave the page, or on a timer.

## Installation

### Manual

Add <script src="BeforeYouGo.js"></script>

#### OR
<script src="BeforeYouGo.min.js"></script>

### NPM
#### Coming soon

## Usage

Call setupIntent() with your configuration options:

For example: setupIntent({"cookies":true, "custom_cookie": true, "custom_cookie_name": "registered"});

| Options        | Default           | Explanation  |
| ------------- |:-------------:| -----:|
| Delay      | 0 | Give the user a grace period, before the intent fires. If they re-enter before the delay ends, the modal is not fired. |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


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
## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
