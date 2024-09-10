//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348138611926";
global.owner = process.env.OWNER_NUMBER || "2348138611926";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJVOU5PWmhGMGRWTkljTURLb2I2YUdLWURSeHVScmpsTTBGejdiSGxtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTJmU0hPSXJ5ZXdNZXlZdkFuY1R2R2xIbnBZcVR3cDQ0MmR2MzZiODYyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQVlLZHZBVHdaSEhFZTl3TnlqOTJLelUzQm5NN2xRbUs3bUVKUkhWSlcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxaEsxc2pmK2RjNFIxbU1ISTdYRFJkeEMwYytlVXYwSXNvaTRoR05Qd1EwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKVUhsY25QQ1RGbFE4UU9RMEQ0MXRDS2ZFQi81U0Q0cW1LK0l1cUpYbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJrOEpLd3VPa3BQaVpVUXlmS1hOODdydzBxMEN0ak9oYVEvTC9MNlBNMGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5jbmE0WDJlcERyZlNzSDFFV3I3a1RtcVV0d2NkWi9oS0Exdjl2UUdHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUxONmxpdHd0dFp5Q3U1WHk1MjcvSzlwRHJrL3JXQzBGQ2JITUdsL2FUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Fc3cxemYzbHVJTVZBbmN4cVd1QklJdXMrSk1OY0x3Mm5pa0tCcmY0L1JGeTJpNDFMYXI5ay9TRHI2MFJkOHlTTnpmZWd1MVhqWStFd2pHdlJWaGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJjc0NlSzc1R3BoS2hMbmJxODVvRFBtRGd2WFZ0ZHdHTkVWSmhLTitwNHFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1UkhfMlFEQVFNcWplMGNTZE4wSXB3IiwicGhvbmVJZCI6IjY5YjU0ODI5LTI1MzQtNDUzNS1iNzQwLWIyNTg5OWFmNzYxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzdGorOEZmYWhVbXFsWTVWbjVpanlsRHB1VU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzlYUjUrY21RQzJDajJUU1RETVlZSkR1U25jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhCVDEyOU5EIiwibWUiOnsiaWQiOiIyMzQ4MTM4NjExOTI2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRMOYxYPigJlUIMOKWMOOxaBUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPN1ducG9FRUxPeC9MWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzM0VPcXR5UmNhaHYvOSs1MG16ekpwMk51Y3NwUVNFSDRERFhubCs2TTM0PSIsImFjY291bnRTaWduYXR1cmUiOiJ3Tkpic2JzRE83UklHOWpZakFmdzZTNGI5ZFpHWXVMVDV5dmw3d3hab2FCTzU5TU1hcmowaVdJWE5rZU1raEh4emt2UVlmVCs5TXpzQzBvajVQeklBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVWVURDA2OG9Tc3UxVHAzZUpBZXIzb3lmeG8yMFBVSE9TZUVIbmZKZ0dSR3ZyMlRxWDc5VlA2ZlR3cHFpTzFPK2JFa3E0Q0srUGo3RTZoVTVadlRUZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM4NjExOTI2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDl4RHFyY2tYR29iLy9mdWRKczh5YWRqYm5MS1VFaEIrQXcxNTVmdWpOKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTg5Njg5NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCNzIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
