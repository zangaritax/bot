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

*قسم الرفاهية🕹️
1. [.اكس] - لعبة إكس أو.
2. [.اسألة] - تحدي أسئلة.
3. [.رياضيات] - تحديات رياضية.
4. [.صراحه] - أسئلة صراحة.
5. [.تحدي] - تحدي شخص في لعبة.
6. [.العب] - حجرة ورقة مقص ضد البوت.
7. [.حظ] - لعبة حظ.
8. [.الكلمات] - تجميع الحروف.
9. [.لو] - لعبة لو.
10. [.ذكاء] - تخمين ذكائك.
11. [.غباء] - تخمين غبائك.
12. [.الحب] - تخمين نسبة الحب.
13. [.القدوه] - تخمين قدوتك.
14. [.سؤال] - أسئلة عشوائية.
15. [.ميمز] - عرض ميمز.
16. [.ميمز انمي] - ميمز أنمي.
17. [.انمي] - معلومات عن أنمي.
18. [.زواج] - زواج شخصين.
19. [.تاج]
20. [.فعاليات]
21. [.الكره]
22. [.تحدي] _ لعبت حجر ورقه مقص
23. [.جمال]
24. [.تطقيم]
25. [.شخصيه] - ييحلل شخصيتك.
26. [.الدون] - يجبلك صوره لكرستيانو.
27. [.شبهي]
28. [.ميسي] - يجيبلك صوره لميسي.
29. [.نصيحه] - نصيحة عشوائية.
30. [.عباره رومناسيه] - عبارات رومانسية.
31. [.كت] - أسماء عشوائية.
32. [.كلمات] - يجبلك لعبت الكلمات.
33. [.ايدت]
34. [.صفع]
35. [.علم] - لعبت الاعلام.
36. [.مانجا] - يجبلك اي مانغا.
37. [.النرد] - يلفلك النرد.
38. [.الرتب] يظهرلك اكتر الناس تجميعا للجواهر والاكس بي.
39. [.احزر] - لعبت احزر الشخصيه.
40. [.2احزر] - لعبت احزر الشخصيه بمستوي اصعب.
41. [.بوم] - لعبت القنبله.
42. [.فزوره]
43. [.حروف] - لعبت الاحرف.
44. [.رتب] - لعبت ترتيب الكلمات.
45. [.فكك] - لعبت التفكيك.
45. [.كوره] - لعبت احزر لاعب الكوره
46. [.عين] - لعبت احزر العين
47. [ابدأ_سلم_وثعبان|انضم_سلم_وثعبان|رمي_النرد] - لعبت السلم والتعبان
48. [ثقافه] - لعبت الاسأله الثافيه
49. [اصحاب] - يخلي اتنين صحاب
50. [الغاز] - لعبت الالغاز
51. [ايموجي] - لعبت احزر الشخصيه من الايموج.
51. [طلاق] 
52. [بيكرهني] - يجيب نسبت كره الشخص ليك لاستخدام الامر اعمل منشن.
53. [بيحبني]  - يجيب نسبت حب الشخص ليك لاستخدام الامر اعمل منشن.
54. [بيحبني] - يعطي هديه الاي شخص.
55. [هل] - تكتب السؤال والبوت يرد بأجابه عشوائيه.
56. [طبطبه] 
57. [رجولتي] - يجبلك نسبت الرجوله.
58. [كذبي] - يجبلك نسبت حذبك.
59. [مانغا] - لعبتاحظر الشخصيه نسخت المانغا.
60. [خطوبه]
61. [لوجوهات] - لعبت حدد الوغو.
62. [اعدام]
63. [قتل]
64. [المليون] - لعبت من سيربح المليون.
✯≼══━━﹂⛩️﹁━━══≽✯56. 

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
handler.command = /^(3)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
