import { Global } from "../app/shared/global";

const versionFilePath = Global.WebUrl + 'version.json';
export const environment = {
  production: true,
  versionCheckUrl: versionFilePath,
  version: '1.0.53',
  keyEncrypt: "4512631236589784"
};
