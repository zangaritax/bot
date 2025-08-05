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

يرجى الإبلاغ عن أي مشكلة تواجهك وسنعمل على حلها في أقرب وقت ممكن❤️ او استخدم امر رساله-للمطور

*قسم الجروبات👥*
1. [.الجروب] - معلومات الجروب.
2. [.الاشباح] - الأعضاء غير المتفاعلين في الجروب.
3. [.حذف] - حذف رسالة محددة.
4. [.تحذير] - تحذير شخص (3 تحذيرات وبعدها طرد).
5. [.شيل-التحذير] - إزالة التحذير.
6. [.طرد] - طرد شخص محدد.
7. [.منشن] - منشن لجميع الأعضاء.
8. [.منشني] - منشن لك.
9. [.المشرفين] - قائمة مشرفي الجروب.
10. [.خفض] - خفض رتبة أدمن.
11. [.رفع] - رفع شخص إلى أدمن.
12. [.لينك] - جلب رابط الجروب.
13. [.اعاده] - تغيير رابط الجروب.
14. [.اختفاء] - إخفاء وجودك أونلاين من البوت (للإلغاء [.افك]).
15. [.توب] - عرض توب الجروب.
26. [.تغيرالترحيب] - تغيير رسالة الترحيب.]
27. [.تغيرالمغادره] - تغيير رسالة المغادر]
28. [.ترقيه] - رفع احد مشرف 
29. [.لينك] - يظهرلك لينك الجروب.
30. [.ريستارت] - يغير رابط دعوت الجروب.
31. [.ازالت المشرف] - يزبل احد المشرفين من الاشراف.
32. [.شيل-تحذير] - يزيل تحذير من شخص.
33. [.حذف] - يحذف رسالة محددة.
34. [.دعوه] - دعوت شخص الي الجروب.
35. [.جروب فتح او قفل] 
36. [.تصويت]
37. [.المتصلين] - يظهر لك قائمة المتصلين بالنت.
38. [.استماره] 
39. [.استماره2] 
40. [.تسجيل] يسجل اسمك وعمرك في البوت.
41. [.افتح او اقفل] - يفتح او يقفل الميزات.
42. [.وقت] - فتح اوقفل الجروب باوقات.
43. [.شطرنج] - لعبت الشطرنج
44. [.لقبني] - يعطيك لقبك.
45. [.لقب] - يتاكد اذا كان اللقب متوقر ولا مأخوذ بواسطة شخص اخر.
46. [.الالقاب] - يجبلك كل الالقاب المأخوذه.
47. [.حذف_الألقاب] - يحذفلك الالقاب.
48. [.الانذارات] - يجبلك كل الي اخذين انذار.
49. [طرد-رمز] - طرد الاعضاء حسب رمز الدعوه.
50. [طرد_الاشباح] - يطرد كل الاشابح.
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
handler.command = /^(2)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
