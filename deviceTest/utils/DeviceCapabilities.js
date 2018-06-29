//  DeviceCapabilities.js - Get devices' capabilities

class DeviceCapabilities {

  constructor() {
    this._type = 'DeviceCapabilities';
    this.browser = "Chrome";
    this.version = 10;
  }

  generateUA(){
    let parser = new UAParser();
    let result = parser.getResult();
    this.version = result.browser.version;
    this.major = result.browser.major; 
    this.browser = result.browser.name;
    this.os = result.os.name;
    console.log(result);
  }

  getPerformance(){
    let perf = null;
    let start;
    let stop;

    if ((this.browser == "Chrome" && this.major > 63) || (this.browser == "Firefox" && this.major < 59 )) {
      start = window.performance.now();
      for (var i = 0; i < 100000; i++) {
        stop = window.performance.now();
      }

    } else {
      start = Date.now();
      for (var i = 0; i < 100000; i++) {
        stop = Date.now();
      }
    }

    perf = stop - start;

    return perf;

  }

  getMemory(){
    let memory = null;
    this.totalJSHeapSize = null;
    this.jsHeapSizeLimit = null;
    this.usedJSHeapSize = null;
    if (this.browser == "Chrome" && this.major >= 63 && this.os !== "Android"){
      memory = navigator.deviceMemory;
      this.totalJSHeapSize = window.performance.memory.totalJSHeapSize; 
      this.jsHeapSizeLimit = window.performance.memory.jsHeapSizeLimit;
      this.usedJSHeapSize = window.performance.memory.usedJSHeapSize;
    } 
    return memory;
  }

  webGLSupport() {
    this.debugInfo = null;
    this.renderer = null;
    this.vendor = null;

    let canvas = document.createElement('canvas');
    let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl && gl instanceof WebGLRenderingContext) {

      this.debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      this.renderer = gl.getParameter(this.debugInfo.UNMASKED_RENDERER_WEBGL);
      this.vendor = gl.getParameter(this.debugInfo.UNMASKED_VENDOR_WEBGL);

      canvas = null;
      gl = null;

      return true;

    } else{

      return false;

    }
  }

}

export default new DeviceCapabilities();