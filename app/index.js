

import document from "document";
import clock from "clock";
import { HeartRateSensor } from "heart-rate";
import * as messaging from "messaging";
import exercise from "exercise";

let container = document.getElementById("container");
let fallRecord = null;
let fallTypeStr = null;
let fallDesc = null;
let fallConfirmation = 0;
let activityString = null;
let activityBeginConfirm = 0;
let activityEndConfirm = 0;
// Get the selected index
let currentIndex = container.value;

// Set the selected index
container.value = 0; // jump to first slide


// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor;                                         

// Begin monitoring sensors
hrm.start();
    // TODO: add other sensors


// Listen for the onopen event
messaging.peerSocket.onopen = function () {
    // Ready to send or receive messages
}

// initialize empty json
let jsonObj = [];
// record sensor data every 1 second
setInterval(getSensorRecord, 1000);
// check for event every 1 second
setInterval(checkEvent, 1000);




//------------------------------------------------------------------------------------------------------//
let myClock = document.getElementById("myClock");
let fallType = document.getElementById("fallType");
let fallDescList = document.getElementById("fallDescList");
let fallConfirm = document.getElementById("fallConfirm");
let activityBeginConfirm_popup = document.getElementById("activityBeginConfirm_popup");
let activityEndConfirm_popup = document.getElementById("activityEndConfirm_popup");

exercise.state == "stopped";
let myClock = document.getElementById("myClock");
clock.granularity = 'seconds'; // seconds, minutes, hours

clock.ontick = function (evt) {
    if (exercise.state === "started") {
        myClock.display = "inline";
        myClock.text = 0 + Math.round(exercise.stats.activeTime/1000);
    }
};

let fallBtn = document.getElementById("fallBtn");
fallBtn.onclick = function (evt) {
    fallRecord = "Fall";
    console.log("fall");
    fallType.style.display = "inline";
}

let nearFallBtn = document.getElementById("nearFallBtn");
nearFallBtn.onclick = function (evt) {
    fallRecord = "NearFall";
    fallType.style.display = "inline";
}

let sitBtn = document.getElementById("sitBtn");
sitBtn.onclick = function (evt) {
    activityString = "Sitting";
    activityBeginConfirm_popup.style.display = "inline";
}

let walkBtn = document.getElementById("walkBtn");
walkBtn.onclick = function (evt) {
    activityString = "Walking";
    if (exercise.state === "started") {
        activityEndConfirm_popup.style.display = "inline";
    }
    if (exercise.state === "stopped") {
        activityBeginConfirm_popup.style.display = "inline";
    }
}

let runBtn = document.getElementById("runBtn");
runBtn.onclick = function (evt) {
    activityString = "Running";
    activityBeginConfirm_popup.style.display = "inline";
}

let hikeBtn = document.getElementById("hikeBtn");
hikeBtn.onclick = function (evt) {
    activityString = "Hiking";
    activityBeginConfirm_popup.style.display = "inline";
}

let bikeBtn = document.getElementById("bikeBtn");
bikeBtn.onclick = function (evt) {
    activityString = "Biking";
    activityBeginConfirm_popup.style.display = "inline";
}

let boxBtn = document.getElementById("boxBtn");
boxBtn.onclick = function (evt) {
    activityString = "Boxing";
    activityBeginConfirm_popup.style.display = "inline";
}

let swimBtn = document.getElementById("swimBtn");
swimBtn.onclick = function (evt) {
    activityString = "Swimming";
    activityBeginConfirm_popup.style.display = "inline";
}

let yogaBtn = document.getElementById("yogaBtn");
yogaBtn.onclick = function (evt) {
    activityString = "Yoga";
    activityBeginConfirm_popup.style.display = "inline";
}

let otherBtn = document.getElementById("otherBtn");
otherBtn.onclick = function (evt) {
    activityString = "Other";
    activityBeginConfirm_popup.style.display = "inline";
}

let tripBtn = fallType.getElementById("tripBtn");
tripBtn.onclick = function (evt) {
    fallTypeStr = "Trip";
    fallType.style.display = "none";
    fallDescList.style.display = "inline";
}

let slipBtn = fallType.getElementById("slipBtn");
slipBtn.onclick = function (evt) {
    fallTypeStr = "Slip";
    fallType.style.display = "none";
    fallDescList.style.display = "inline";
}

let fallBtn = fallType.getElementById("fallBtn");
fallBtn.onclick = function (evt) {
    fallTypeStr = "Fall";
    fallType.style.display = "none";
    fallDescList.style.display = "inline";
}

let collapseBtn = fallType.getElementById("collapseBtn");
collapseBtn.onclick = function (evt) {
    fallTypeStr = "Collapse";
    fallType.style.display = "none";
    fallDescList.style.display = "inline";
}
let foreBtn = fallDescList.getElementById("foreBtn");
foreBtn.onclick = function (evt) {
    fallDesc = "Forwards";
    fallDescList.style.display = "none";
    fallConfirm.style.display = "inline";
}

let backBtn = fallDescList.getElementById("backBtn");
backBtn.onclick = function (evt) {
    fallDesc = "Backwards";
    fallDescList.style.display = "none";
    fallConfirm.style.display = "inline";
}

let rightBtn = fallDescList.getElementById("rightBtn");
rightBtn.onclick = function (evt) {
    fallDesc = "Rightwards";
    fallDescList.style.display = "none";
    fallConfirm.style.display = "inline";
}

let leftBtn = fallDescList.getElementById("leftBtn");
leftBtn.onclick = function (evt) {
    fallDesc = "Leftwards";
    fallDescList.style.display = "none";
    fallConfirm.style.display = "inline";
}

let yesBtn = fallConfirm.getElementById("yesBtn");
yesBtn.onclick = function (evt) {
    fallConfirmation = 1;
    fallConfirm.style.display = "none";
}

let noBtn = fallConfirm.getElementById("noBtn");
noBtn.onclick = function (evt) {
    fallConfirmation = 0;
    fallConfirm.style.display = "none";
}

let yesBtn = activityBeginConfirm_popup.getElementById("yesBtn");
yesBtn.onclick = function (evt) {
    activityBeginConfirm = 1;
    myClock.style.display = "inline";
    exercise.start("walk");
    activityBeginConfirm_popup.style.display = "none";
}

let noBtn = activityBeginConfirm_popup.getElementById("noBtn");
noBtn.onclick = function (evt) {
    activityBeginConfirm = 0;
    activityBeginConfirm_popup.style.display = "none";
}

let yesBtn = activityEndConfirm_popup.getElementById("yesBtn");
yesBtn.onclick = function (evt) {
    activityEndConfirm = 1;
    exercise.stop();
    myClock.style.display = "none";
    activityEndConfirm_popup.style.display = "none";
}

let noBtn = activityEndConfirm_popup.getElementById("noBtn");
noBtn.onclick = function (evt) {
    activityEndConfirm = 0;
    activityEndConfirm_popup.style.display = "none";
}

//------------------------------------------------------------------------------------------------------//
function checkEvent() {
    console.log("jsonObj is: " + Object.keys(jsonObj).length);;
    if (fallConfirmation == 1) {
        let event = (fallRecord + ":" + fallTypeStr + ":" + fallDesc);  // ex: "NearFall:Slip:Backwards"
        let data = getEventRecord(event);
        jsonObj.push(data);
        fallConfirmation = 0;
    }
    if (activityBeginConfirm == 1) {
        let event = activityString + ":begin";
        let data = getEventRecord(event);
        jsonObj.push(data);
        activityBeginConfirm = 0;
    }
    if (activityEndConfirm == 1) {
        let event = activityString + ":end";
        let data = getEventRecord(event);
        jsonObj.push(data);
        activityEndConfirm = 0;
        myClock.text = 0;
    } 
    // check if local records json is 'full', send to companion
    if (Object.keys(jsonObj).length >= 10) {         // ran out of memory at ~1000 when tested
        sendToCompanion(jsonObj);
        jsonObj = [];

    }
}

function getEventRecord(event) {
    var timeStamp = new Date();
    var jsonTime = timeStamp.toJSON();
    let record = {};
    record["time"] = jsonTime;
    record["event"] = event;
    return record;
}

function getSensorRecord() {
    // generates new time stamp for each new message
    var timeStamp = new Date();
    var jsonTime = timeStamp.toJSON();
    let record = {};
    record["time"]      = jsonTime;
    record["hr"]        = hrm.heartRate;
    // TODO: add other sensors
    jsonObj.push(record);
}

function sendToCompanion(data) {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        // Send the data to peer as a message;
        messaging.peerSocket.send(data);
    } else {
        // Catch error
        console.error("Unable to send data from app.");
    }
}


// Message socket closes
messaging.peerSocket.onclose = () => {
    console.warn("App Socket Closed");
};
