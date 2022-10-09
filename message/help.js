const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
┌──❏ 𝗜𝗻𝗳𝗼 𝗕𝗼𝘁
│
│々 𝗟𝗶𝗯𝗿𝗮𝗿𝘆 : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀-𝗠𝗗
│々 𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${prefix} ]
│々 𝗧𝗮𝗻𝗴𝗴𝗴𝗮𝗹 : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│々 𝗝𝗮𝗺 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
└─────────────❏

┌──❏ 𝗜𝗻𝗳𝗼 𝗨𝘀𝗲𝗿
│
│々 𝗦𝘁𝗮𝘁𝘂𝘀 : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
│々 𝗟𝗶𝗺𝗶𝘁 𝗛𝗮𝗿𝗶𝗮𝗻 : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
│々 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
│々 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toCommas(getBalance(sender, balance))}
└─────────────❏


 ⌈ 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}menu
│々 ${prefix}owner
│々 ${prefix}donasi
│々 ${prefix}speed
│々 ${prefix}runtime
│々 ${prefix}cekprem
│々 ${prefix}listprem
│々 ${prefix}join
└─────────────❏

 ⌈ 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗿/𝗧𝗼𝗼𝗹𝘀 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}sticker
│々 ${prefix}toimg
│々 ${prefix}tovid
└─────────────❏

 ⌈ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}play
│々 ${prefix}tiktok
│々 ${prefix}ytmp4
│々 ${prefix}ytmp3
│々 ${prefix}getvideo
│々 ${prefix}getmusic
│々 ${prefix}instagram
│々 ${prefix}facebook
└─────────────❏
  
 ⌈ 𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}quote
│々 ${prefix}cecan
│々 ${prefix}cogan
│々 ${prefix}wallsatanic
│々 ${prefix}wallquote
│々 ${prefix}wallanime
│々 ${prefix}wallgaming
│々 ${prefix}wallhekel
└─────────────❏
  
 ⌈ 𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}lirik
│々 ${prefix}grupwa
│々 ${prefix}ytsearch
└─────────────❏

⌈ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}patrick
│々 ${prefix}lonet
│々 ${prefix}lidi
│々 ${prefix}kucing
│々 ${prefix}sponbob
│々 ${prefix}kawansponbob
│々 ${prefix}popoci
│々 ${prefix}meow
│々 ${prefix}menjamet
│々 ${prefix}gojosatoru
│々 ${prefix}hopeboy
│々 ${prefix}doge
│々 ${prefix}dinokuning
│々 ${prefix}krrobot
│々 ${prefix}nicholas
│々 ${prefix}jiisho
└─────────────❏

⌈ 𝗥𝗮𝗻𝗱𝗼𝗺 𝗖𝗲𝗰𝗮𝗻 ⌋
┌─────────────❏
│々 ${prefix}cecanvietnam
│々 ${prefix}cecanmalaysia
│々 ${prefix}cecankorea
│々 ${prefix}cecanindonesia
│々 ${prefix}cecanjapan
│々 ${prefix}cecanthailand
│々 ${prefix}cecanchina
└─────────────❏

 ⌈ 𝗚𝗮𝗺𝗲 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}tictactoe
│々 ${prefix}delttc
│々 ${prefix}tebakgambar
│々 ${prefix}caklontong
│々 ${prefix}asahotak
└─────────────❏
 
 ⌈ 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 $ 𝗕𝗮𝗻𝗸 ⌋
┌─────────────❏
│々 ${prefix}buylimit
│々 ${prefix}buyglimit
│々 ${prefix}transfer
│々 ${prefix}limit
│々 ${prefix}balance
└─────────────❏
  
 ⌈ 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 ${prefix}linkgrup
│々 ${prefix}setppgrup
│々 ${prefix}setnamegc
│々 ${prefix}setdesc
│々 ${prefix}group
│々 ${prefix}revoke
│々 ${prefix}hidetag
│々 ${prefix}tagall
│々 ${prefix}listadmin
│々 ${prefix}infogc
│々 ${prefix}promote
│々 ${prefix}demote
│々 ${prefix}add
│々 ${prefix}kick
└─────────────❏

 ⌈ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ⌋
┌─────────────❏
│々 > evalcode
│々 x evalcode-2
│々 $ executor
│々 ${prefix}masuk
│々 ${prefix}broadcast
│々 ${prefix}setppbot
│々 ${prefix}exif
│々 ${prefix}leave
│々 ${prefix}addprem
│々 ${prefix}delprem
└─────────────❏

𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 © ${setting.ownerName}
`
}
