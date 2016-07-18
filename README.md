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
```
<li class="closeBtn" onclick="BeforeYouGo_SetCookie('registered','true','5')">X</li>
```
This will disable the modal for 5 days.

## Mobile
By default, mobile is disabled. This is because you cant track a mouse, when a mouse doesn't exist. If you have a clever idea of how to implement this, let me know.

## Delay
The delay is set to 0 by default. It is a grace period, such that if the user exits the page and then returns within the delay period, the modal will not fire.

## Timer
You can set the timer to open the modal automatically, if a certain amount of time has passed. For example, if set to 5 seconds, the modal will fire after 5 seconds.

#### "timed":true, "timed_delay": 5

## Modal firing
By default, "modal firing" means:

```
document.getElementById('md').style.display="block";
```

You can change this in BeforeYouGo.js to anything else, that you want to run when the modal fires. This could be a google analytics ga_push, or a bootstrap modal.

## Using with bootstrap

#### Get bootstrap
http://getbootstrap.com/getting-started/#download

#### Add a modal to your HTML page
```
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```

#### Fire modal
In BeforeYouGo.js, replace all instances of

```
document.getElementById('md').style.display="block";
```
with
 ```
$('#myModal').modal('show');
```

## Callbacks
```
exited: function(){console.log('User exited the window.');}
fired : function(){console.log('The intent was fired.');}
timedOverlay : function(){console.log('Timed overlay was fired.');}
```
