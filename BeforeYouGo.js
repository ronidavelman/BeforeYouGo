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

setupIntent({"cookies":true,"timed":true,"timed_delay":3500, "custom_cookie": true, "custom_cookie_name": "registered"});

function setupIntent(options){
	Object.assign(config, options);
	document.addEventListener("mouseleave", exited);
	if(config.timed) timedOverlay();
}
 
function exited(e){
	config.callback.exited();
	if(e.clientY < config.threshold && checkCookies("cookies","cookie_name") && checkCookies("custom_cookie","custom_cookie_name")){
		var tm = setTimeout(function() {
			document.getElementById('md').style.display="block";
			document.removeEventListener('mouseleave', exited);
			config.callback.fired();
		}, config.delay);
		
		document.onmouseenter = function(){clearInterval(tm);};
	}
}

function checkCookies(type, name){
	if(config[type]){
		return getCookieValue(config[name])=="";
	}else{
		return true;
	}
}

function mobileDisabled(){
	var mobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|webOS/i);
	if(config.mobileDisabled){
		if(mobile != null){
			return false;
		}else{
			return true;
		}
	}else{
		return true;
	}
}

function timedOverlay(){
	var tm = setTimeout(function() {
		config.callback.timedOverlay();
		document.getElementById('md').style.display="block";
	},config.timed_delay);
}

function getCookieValue(a, b) {
    b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
function BeforeYouGo_SetCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }else{
		var expires = "";
	}
    document.cookie = name+"="+value+expires+"; path=/";
}
