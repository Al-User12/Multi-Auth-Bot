global.owner = ['6282245744337']  
global.mods = ['6282245744337'] 
global.prems = ['6282245744337']
global.nameowner = 'Tio'
global.numberowner = '6282245744337' 
global.mail = 'support@tioprm.my.id' 
global.gc = 'coming soon'
global.instagram = 'https://instagram.com/yaelahfik'
global.wm = '© Tio'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp Al-User12'
global.maxwarn = '5' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'Uyrsa3s3' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'aJxzxPGS'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
