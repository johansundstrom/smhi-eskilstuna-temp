module.exports = class Unixtimejs {

  static now() {
    return Unixtimejs.fromDate(new Date());
  }

  static fromDate(date) {
    if (!date) return null;
    return Unixtimejs.fromJSTime(date.getTime());
  }

  static fromJSTime(jstime) {
    if (!jstime) return null;
    return Math.floor(jstime / 1000);
  }

  static toUTCString(unixts) {
    let jstime = (unixts === undefined) ? Date.now() : unixts * 1000;
    return new Date(jstime).toUTCString();
  }

  // @param {String} - eg: '2016-04-01 05:00:00+09:00'
  static fromUTCString(s) {
    if (!s) return null;
    let jstime = new Date(s).getTime();
    return Unixtimejs.fromJSTime(jstime);
  }

  // @param tzOffset {String} - timezone offset string. eg: "+09:00"
  static toISOString(unixts, tzOffset) {
    if (unixts === undefined) unixts = Unixtimejs.fromJSTime();
    const jstime = unixts * 1000;
    if (!tzOffset) return new Date(jstime).toISOString().replace(".000", "");
    // offset ms
    let tzOffsetMs;
    try {
      tzOffsetMs = _getTzOffsetMs(tzOffset);
    } catch (e) {
      throw e;
    }
    const localISOTime = new Date(jstime - tzOffsetMs).toISOString().slice(0, -1).replace(".000", "");
    const ret = (tzOffset) ? localISOTime + tzOffset : localISOTime + "Z"; // '2016-04-01T05:00:00+09:00'
    return ret;

    function _getTzOffsetMs(tzOffset) {
      // tzOffset: eg: '+09:00'
      if (!tzOffset) return new Date().getTimezoneOffset() * 60 * 1000;
      let [hour, min] = tzOffset.split(":");
      const plusMinus = hour.substring(0, 1);
      if (plusMinus !== "+" && plusMinus !== "-") throw Error(`'${tzOffset}': invalid timezone offset format`);
      hour = parseInt(hour.substring(1));
      min = parseInt(min);
      let ms = (hour * 60 * 60 * 1000) + (min * 60 * 1000);
      return (plusMinus == "+") ? -ms : ms;
    }
  }

  // @param {String} - eg: '2016-04-01T05:00:00+09:00'
  static fromISOString(s) {
    if (!s) return null;
    let jstime = new Date(s).getTime();
    return Unixtimejs.fromJSTime(jstime);
  }


  static toLocaleString(unixts) {
    let jstime = (unixts === undefined) ? Date.now() : unixts * 1000;
    return new Date(jstime).toLocaleString();
  }

  /**
   * Get UnixTimestamp from localeString
   * @param {String} - eg: "2018/1/31 15:22:33"
   * @param format {Array} - eg: "Y/M/D h:m:s" 
   *  NOTE: Available date format charactors: "Y", "M", "D", "h", "m", "s"
   */
  static fromLocaleString(s, format) {
    if (!s) return null;
    if (!format) return Unixtimejs.fromDate(new Date(s));
    const ret = {
      Y: null,
      M: null,
      D: null,
      h: null,
      m: null,
      s: null
    };
    const arr = s.split(/(\d+)/);
    let currentIdx = 0;
    for (let len = arr.length, i = 0; i < len; i++) {
      let part = arr[i];
      if (!part) continue;
      let symbol = format[currentIdx];
      if (isNumeric(part)) {
        ret[symbol] = parseInt(part);
      } else {
        if (symbol !== part) throw Error(`"${format}": invalid format`);
      }
      currentIdx += 1;
    }

    if (ret.Y === null ||
      ret.M === null ||
      ret.D === null ||
      ret.h === null ||
      ret.m === null ||
      ret.s === null) {
      return null;
    }

    return Unixtimejs.fromJSTime(new Date(ret.Y, ret.M - 1, ret.D, ret.h, ret.m, ret.s).getTime());

    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }

};