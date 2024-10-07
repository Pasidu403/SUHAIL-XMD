const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="hppriyantha2003@gmail.com"
global.location="Srilanka,Rathnapura."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94713562428";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_28_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDMzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZKcXNDbzBwazVsWHZDYnUwUVFqZVBqdnVlMjZWUzJvYWdGeTFqdFdDcjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTM1NjI0MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQzRTNFN0VCRTI5QjZBRkFFMUU3Njg4NTVERDNENjIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI4NjExMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzEzNTYyNDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNTBCQzM4ODBGMTFGRUFCQTQyMTFBMERBMjAxNTU1M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgyODYxMTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSENBYWFVUTlURmlXVWM5dTlUZUlTQVwiLFxuICBcInBob25lSWRcIjogXCI3ZTRmMTM5ZC1iNWYwLTQ0ODEtYTdhOC0wZmZkMzc3NDZhMThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMjM3LFxuICAgICAgMTIzLFxuICAgICAgMjQxLFxuICAgICAgMTMzLFxuICAgICAgMTg1LFxuICAgICAgMTM0LFxuICAgICAgMjAxLFxuICAgICAgMTcwLFxuICAgICAgMTg1LFxuICAgICAgNTEsXG4gICAgICAxNzEsXG4gICAgICA3LFxuICAgICAgOTUsXG4gICAgICA2LFxuICAgICAgNTUsXG4gICAgICA1MyxcbiAgICAgIDE0NyxcbiAgICAgIDkzLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTkyLFxuICAgICAgNzAsXG4gICAgICAxMzQsXG4gICAgICAyMDQsXG4gICAgICAyNixcbiAgICAgIDE0OSxcbiAgICAgIDI0OSxcbiAgICAgIDIxMSxcbiAgICAgIDcsXG4gICAgICAxNzQsXG4gICAgICA3OSxcbiAgICAgIDE1NixcbiAgICAgIDE5NixcbiAgICAgIDIzNyxcbiAgICAgIDIwNixcbiAgICAgIDIyNSxcbiAgICAgIDE5MyxcbiAgICAgIDE1MixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWV1JITDY0RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTM1NjI0Mjg6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTIxNzY5NTE0NjExODo3MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLij6TNn82fzZ7NniDwnZOk8J2Tt/Cdk7TwnZO38J2TuPCdlIDwnZO3IMOXzZzDl1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o2aHpvQUNFSmVianJnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaG5MZy9LeGZjYlA0MG11dmJGckQxdzZ5Z1dJVU14NnlSdm53cXh1ZkhVcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3U05DUmh0WVd1ZTR0SU90NmRCemovNHliVXc4VjlkR2t1VDZWcloyOURsMUV0VzViY05abU1ZSmVwMDF1MUJMY0xBVTZiRmxmWTlkeC8yZU1lYVhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6K0FpQ0F5bUFhdkFNUWo2TkZiY1dja3JQN2VsQkRONktTdy8zK3pBeEhqcFUwV0J1KzBSaHBuWTJGVjRaL1cyQmFKdFpodEg4eGRtb3lRSVVFbW1pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxMzU2MjQyODo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgyODYxMDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIU1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhTVS5qc29uIjogIntcImtleURhdGFcIjpcIlBhdkhzU054M1FzNmI1MU05OEk4NnNPTUxxaHlHbmJwODRHZEZNQmZreFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM4MTUzMTE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgyODQ5NTIzODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Pasiya",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
