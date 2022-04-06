/**


   * Create By Dika Ardnt.


   * Contact Me on wa.me/6288292024190


   * Follow https://github.com/DikaArdnt


*/





const fs = require('fs')


const chalk = require('chalk')





// Website Api


global.APIs = {


	zenz: 'https://zenzapi.xyz',


}





// Apikey Website Api


global.APIKeys = {

'https://zenzapi.xyz': 'sanzychan01'

}





// Other

global.namabot = 'Black BotZ'

global.namaowner = 'Owner Black BotZ Official'

global.myweb = 'https://youtube.com/channel/UCWN89V_QtNnav2UFF8epaug'


global.owner = [ '6282143349069','6282143440025' ]


global.premium = ['6282143349069']


global.packname = 'Black BotZ Official'


global.author = '© Black BotZ Official nomer bot : 082143349069'


global.sessionName = 'hisoka'


global.prefa = ['','!','.','🐦','🐤','🗿']


global.sp = '⭔'


global.mess = {


    success: '✓ Success',


    admin: 'Anu  Khusus Admin Group!',


    botAdmin: 'Anu Bot Harus Menjadi Admin Terlebih Dahulu!',


    owner: 'Anu Khusus Owner Bot',


    group: 'Anu Digunakan Hanya Untuk Group!',


    private: 'Anu Digunakan Hanya Untuk Private Chat!',


    bot: 'Anu Khusus Pengguna Nomor Bot',


    wait: 'Loading...',


    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',


}


global.limitawal = {


    premium: "Infinity",


    free: 100


}


global.thumb = fs.readFileSync('./lib/kkh.jpg')


global.chatDB = JSON.parse(fs.readFileSync('./chatsDB.js'))


let file = require.resolve(__filename)


fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update'${__filename}'`))


	delete require.cache[file]


	require(file)


})
