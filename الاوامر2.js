import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
◞⛩️بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ⛩️◜
✯≼══━━﹂⛩️﹁━━══≽✯
◞{إِنَّمَا ٱلتَّوۡبَةُ عَلَى ٱللَّهِ لِلَّذِينَ يَعۡمَلُونَ ٱلسُّوٓءَ بِجَهَٰلَةٖ ثُمَّ يَتُوبُونَ مِن قَرِيبٖ فَأُوْلَٰٓئِكَ يَتُوبُ ٱللَّهُ عَلَيۡهِمۡۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمٗا}◜
✯≼══━━﹂⛩️﹁━━══≽✯
🏮║اهلا وسهلا يا║《 ${taguser} 》
🏮║اسم البوت║《NANO 》
🏮║اسم المطور║《 Abdelrahman 》
🏮║عدد المستخدمين║《 ${rtotalreg} 》
🏮║وقت التشغيل║《 ${uptime} 》
🏮║التوقيت║《 ${date} 》
🏮║الاصدار║《v.1 》

┓━💼 مـعلـومـات المستخدم:_ 💼━┏
┃ 🏮💎الماس: ${limit}
┃ 🏮👾عملات: ${money}
┃ 🏮🪙الرموز: ${joincount}
┃ 🏮🎟️مميز: ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┃ 🏮🎖️ مستوى* ${level}
┃ 🏮🧰 خبرة ${exp}*
┃ 🏮⚓ الدور ${role}*
┛━━━━━━━━━━━━━┗
◞🏮 مـلاحـظـة 🛑 ◈◜
◞🏮 يـجـب عـلـيـك كـتـابـة نـقـطـة قـبـل كـل أمـر مـثـل ⇠ 『 .اوامر 』◈◜
✯≼══━━﹂⛩️﹁━━══≽✯

 يرجى الإبلاغ عن أي مشكلة تواجهك وسنعمل على حلها في أقرب وقت ممكن❤️ او استخدم امر رساله-للمطور او ممكن تستخدم امر تقيم عشان تقيم البوت

1. [.1] - يجيبلك قسم الدين

2. [.2] - يجيبلك قسم الجروبات

3. [.3] - يجيبلك قسم الرفاهيات

4. [.4] - يجيبلك قسم الادوات

5. [.5] - يجيبلك قسم الاكسبي

6. [.6] - يجيبلك قسم السوشيال

7. [.7] - يجيبلك قسم المطورين

8. [.8] - يجيبلك كل الاوامر

9. [.10] - يجيبلك قسم الصوتي

✯≼══━━﹂⛩️﹁━━══≽✯

👑┑━━━حـقـوق الـمـطـور━━━┍👑
🏮⇆ رقـم الـمطـور  ↯*
🏮 https://wa.me/+201151094460
🏮⇆ رقم مساعد المطور ↯*
🏮 https://wa.me/+201228616765
👑┙━━━حـقـوق الـمـطـور━━━┕👑

✯≼══━━﹂⛩️﹁━━══≽✯
البوت تابع لجروب 『Anime⊰🔴⊱Gang』
✯≼══━━﹂⛩️﹁━━══≽✯`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇Nano┇🤖┇𝔅𝔬𝔱┇👑』',
body: null,
thumbnail: img,
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗INFO❗] تحتوي القائمة على خطأ ولا يمكن إرسالها، يرجى الإبلاغ عنها إلى مالك الروبوت', m)
}}
handler.command = /^(اوامر|menu|ألاوامر|أوامر|الاوامر|القائمه|القائمة)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
