import CryptoJS from "crypto-js";

function encryptJSON(json) {
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(json),
    process.env.ENCRYPT_KEY
  ).toString();
  return ciphertext;
}

function decryptJSON(string) {
    let decData = CryptoJS.enc.Base64.parse(string).toString(CryptoJS.enc.Utf8)
  var bytes = CryptoJS.AES.decrypt(decData, process.env.ENCRYPT_KEY).toString(CryptoJS.enc.Utf8);
//   var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(bytes);
}

export { encryptJSON, decryptJSON };
