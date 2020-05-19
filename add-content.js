var today = new Date();
var hourNow = today.getHours();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!\n';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!\n';
} else if (hourNow > 0) {
    greeting = 'Good morning!\n';
} else {
    greeting = 'Welcome!';
}

var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
} 
if (hour===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hour=12;
prepand=' AM';
} 
} 

document.write('<h3>' + greeting +'</h3>' + "\n"+ '<h3>' +hour + " : " + minute + " : "+second+prepand +'</h3>');