import jsSHA from "jssha";


export const getAuthorizationHeader = () => {
  //  填入自己 ID、KEY 開始
  let AppID = "chiayuu.liu-1bb97440-0b2b-4250";
  let AppKey = "cddc5170-a6b1-4c45-9777-2ba0ad321f88";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
};
