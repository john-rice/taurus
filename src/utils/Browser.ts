declare const window: any;
declare const opr: any;
declare const InstallTrigger: any;
declare const safari: any;
declare const document: any;

/* tslint:disable */
export class Browser {
  private readonly name: string;
  private readonly storageSize: number = 5242880;
  constructor() {
    // Opera 8.0+
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 71
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isOpera) {
      this.name = 'opera';
    } else if (isSafari) {
      this.name = 'safari';
    } else if (isIE) {
      this.name = 'IE';
    } else if (isEdge) {
      this.name = 'edge';
    } else if (isChrome) {
      this.name = 'chrome';
    } else if (isFirefox) {
      this.name = 'firefox';
    }
    if (isChrome || isFirefox) {
      this.storageSize = 10485760;
    }
  }
  /**
   * returns storage size in Bytes
   */
  getStorageSize(): number {
    return this.storageSize;
  }
}
