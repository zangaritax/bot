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

*قسم الأدوات⚙️*
1. [.بحث] - بحث في جوجل.
2. [.ترجمه] - ترجمة لأي لغة.
3. [.تحميل] - تحميل أي ملف.
4. [.ميديافاير] - تحميل ملف من ميديافاير.
5. [.تطبيق] - نحميل اي تطبيق. 
7. [.باركود] - تحويل الرابط إلى باركود.
9. [.عميق] - تغيير الصوت إلى صوت عميق.
12. [.جيف] - تحويل الفيديو إلى GIF.
14. [.لفيديو] - تحويل الستيك إلى فيديو.
15. [.لصوت] - تحويل الفيديو إلى صوت.
16. [.سرقه] - سرقة ستيك.
17. [.زخرفه] - زخرفة النص.
18. [.انطق] - تحويل النص إلى صوت.
19. [.دمج] - دمج إيموجيين.
20. [.لريك] - تحويل الصوت إلى ريك.
21. [.تليجراف] - تحويل الملف إلى رابط.
22. [.فري بيك] - البحث عن صورة.
23. [.قطه] - صورة قطة.
24. [.بروفايلي] - ملفك الشخصي.
25. [.بنك]
26. [.لستيكر] - تحويل الصورة إلى ملصق.
27. [.اقول]
28. [.جروب فتح او قفل]
29. [.تصميم] - يعملك صوره فيها الي هتكتبه.
30. [.رمزي] - يظهر رقمك التسلسلي.
31. [.ويكي] - يبحث لك علي اي شيء في موقع ويكي بيديا.
32. [.الطقس]
33. [.فيك] - يعمك ايميل فيك.
34. [.بنج] - يوريك سرعت نت.
35. [.مسح] - يمسحلك خلفيت اي صوره.
36. [.3فيديو] - يجيبلك اي فيديو من اليوتيوب ويحمله لك.
37. [.2فيديو] - يجيبلك اي قناهبدون تحميل
38. [.درايف] - يحملك اي ىملف من جوجل درايف.
39. [.تطبيق] -  جلب أي تطبيق باسمه.
40. [.apk] - تحميل اي تطبيق
41. [.تيكتوك] - يحملك اي فيديو من تيكتوك.
42. [.بين] - يجبلك صوره من بينترست.
43. [.تغير-حقوق] - تغير حقوق الملصق.
44. [.جيت] - يحملك اي مشروع من جيت هاب.
45. [.جوده] - يحسنلك جودت اي صوره.
46. [.بوت] - يجيبلك الذكاء الاصطناعي لك.
47. [.لريك] - يحولك الفيديو لصوت.
48. [.وانو] - يستخدم الذكاء الاصطناعي وانو.
49. [.لرابط] - يرفعلك اي صوره او فيديو لرابط.
50. [.تطبيق] - يحمبك اي تطبيق.
51. [.يوتيوب4] - يحملك اي فيديو من اليوتيوب.
52. [.اختصار] - يختصر لك رابط.
53. [.سكرين] - يجبلك سكرين شوت لاي موقع.
52. [.ستيكر2] - يحولك اي فيديو لملصق متحرك.
53. [.نص] - يستخرج النص من الصوره.
54. [.سكرين] - ياخد سكرين شوت لاي موقع.
55. [.فيلم] - يجبلك معلومات عن اي فيلم.
56. [.اقرا] - يقرا اي باركود.
57. [الوفت] - يجيب الوقت بتوقيت القاهره
58. [بلاك] - ذكاء اصطناعي لتصليك الاكواد.
59. [لوغو] - يعملك لوجو باشكال كتير.
60. [جيتهاب] - يبحثلك عن اي مشروع في جيت هاب.
61. [اسم-الاغنيه] - يجبلك اسم اي اغنيه.
62. [جيتهوب2] - يبحثلك عن اي مشروع في جيت هاب.
63. [منتج] - يعملك فيديو من صوت وصوره.
64. [تيوبي] يحملك ويبحثلك عن اي فيديو علي اليوتيوب ويحمله صوت او فيديو عادي.
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
handler.command = /^(4)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
