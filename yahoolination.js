//DSHenricus On Github 
// started 9/8/26

// PLEASE MAKE SURE JQUERY IS LOADED IN THE HTML BEFORE THIS JS FILE

// demo url https://web.archive.org/web/19961017235908/http://yahoo.com/
var yahoourlA = "19961017235908";
var yahoourlB = "/http://www.yahoo.com/";

// Random Number Generator
function randomnumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// zeropad function from https://stackoverflow.com/questions/6823592/numbers-in-the-form-of-001
function zeroPad(num,count)
{
  var numZeropad = num + '';
  while(numZeropad.length < count) {
    numZeropad = "0" + numZeropad;
  }
  return numZeropad;
}

function yahoorandom() {

    console.log("YAHOO RANDOMIZATION STARTED!")
    
    rawmonth = randomnumber(1,12) //for the sake of the display thing

    // Randomized all parts of the date code that when joined together make up the capture date in the wayback url. 
    // https://help.archive.org/help/using-the-wayback-machine/#:~:text=In%20the%20event%20that%20we,middle%3B%20it%20translates%20as%20yyyymmddhhmmss.
    var YEAR = randomnumber(1996,2006);
    var MONTH = zeroPad(rawmonth,2);
    var DAY = zeroPad(randomnumber(1,31),2);  
    var HOURMINSEC = "" + zeroPad(randomnumber(1,12),2) + zeroPad(randomnumber(1,60),2); + zeroPad(randomnumber(1,60),2);     
    
    yahoourlA = "" + YEAR + MONTH + DAY + HOURMINSEC;

    console.log("url parts prepared")

    var FULLURL = "https://web.archive.org/web/"

    //sometimes replace '/http://www.yahoo.com/' with '/http://www2.yahoo.com/' to increase variety
    if (randomnumber(0,1)) {
        yahoourlB = "/http://www2.yahoo.com/";
        console.log("using www2!")
    }

    console.log("YAHOO MONTH: " + MONTH);
    console.log("YAHOO DAY: " + DAY);
    console.log("YAHOO YEAR: " + YEAR);
    console.log("YAHOO MONTH: " + MONTH);
    console.log("YAHOO HOURS,MINUTES,SECONDS: " + HOURMINSEC);
    console.log("------------");
    console.log("CONCATENATED URL DATE CODE: " + yahoourlA);

    FULLURL = FULLURL + yahoourlA + yahoourlB
    console.info("FULL COMPLETE URL: " + FULLURL)

    document.getElementById("theyahoo").src = FULLURL;
    console.info("yahoolination complete!")

    datedisplayupdate(rawmonth,DAY,YEAR);
}

function datedisplayupdate(month,day,year) {

    //errorvember is never supposed to be seen as the month system counts from one and not from 0. This is merely a placeholder in case the month number messes up.
    var monthtxt = ["Errorvember","January","February","March","April","May","June","July","August","September","October","November","December"]

    var datefullmsg = monthtxt[month] + " " + day + ", " + year;

    document.getElementById("datedisp").innerHTML = datefullmsg; 

    console.info("yahoo url date display updated!")
}

console.info("YAHOOLINATION JS FILE LOADED!");
