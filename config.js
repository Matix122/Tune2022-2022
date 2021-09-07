module.exports = {
  Admins: ["xMatis20#2598", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://nightmaregames355.wixsite.com/tunebot", //Support Server Link
  Token: process.env.Token || "ODc1MzAzMDIxMDM3Mzc1NDg4.YRTjdg.kJ4WpArFjqRBFL0IosfFcuj9LWo", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "875303021037375488", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "bjimS0abKhGkRS4GAVyO7wCN_sLU7vhS", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is EPIC", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/avatars/875303021037375488/c6996d9f5d353fd49c70ba92ba6f7533.png?size=256", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "fad285639a9a4c08bc588cf74f8d5584", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "5b0e235824a9498c9000d01717db00ce", //Spotify Client Secret
  },
};
