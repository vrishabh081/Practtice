const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
console.log(recognition);

recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", ((e) => {
    const text = Array.from(e.results).map(result => result [0]).map(result => result.transcript).join("");
    p.innerText = text;
    texts.appendChild(p);
}))

recognition.addEventListener("end", (() => {
    recognition.start();
}))

recognition.start();



// Check if the browser is Internet Explorer
function isInternetExplorer() {
    return !!window.document.documentMode;
  }
  
  // Check if the browser is Microsoft Edge (based on Chromium)
  function isEdgeChromium() {
    return navigator.userAgent.includes('Edg');
  }
  
  // Check if the browser is Chrome
function isChrome() {
    return /Chrome/.test(navigator.userAgent) && !isBrave();
  }
  
  // Check if the browser is Brave
  function isBrave() {
    return /Brave/.test(navigator.userAgent) && /Chrome/.test(navigator.userAgent);
  }
  
  // Check if the browser is Firefox
  function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  }
  
  // Check if the browser is Safari
  function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  
  // Check if the browser is Opera
  function isOpera() {
    return !!window.opr && !!window.opr.addons || !!window.opera || navigator.userAgent.includes(' OPR/');
  }
  
  // Usage
  if (isInternetExplorer()) {
    console.log('Internet Explorer');
  } else if (isEdgeChromium()) {
    console.log('Microsoft Edge');
  } else if (isChrome()) {
    console.log('Google Chrome');
  }else if (isBrave()) {
    console.log('Brave');
  } else if (isFirefox()) {
    console.log('Mozilla Firefox');
  } else if (isSafari()) {
    console.log('Safari');
  } else if (isOpera()) {
    console.log('Opera');
  } else {
    console.log('Unknown browser');
  }
  

  console.log("navigator.userAgent", navigator.userAgent)