// index.js
import deviceCapabilities from './utils/DeviceCapabilities.js'

function startApp(){
  console.log("start app");

  deviceCapabilities.generateUA();

  let isWebGL = " WebGL support: " + deviceCapabilities.webGLSupport();
  let GPU = "GPU: " + deviceCapabilities.renderer;

  let performance = "Performance: " + deviceCapabilities.getPerformance();

  let memory = "Memory: " + deviceCapabilities.getMemory();

  let Browser = "Browser: " + deviceCapabilities.browser + " " + deviceCapabilities.version;
  
  let Os = "Os: " + deviceCapabilities.os;

  document.body.innerHTML = Browser + "</br>" + isWebGL + "</br>" + GPU + "</br>" + performance + "</br>" + memory + "</br>" + Os;
}

startApp();