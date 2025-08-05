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

*قسم المطور👨🏼‍💻*
1. [.بلاغ] - التواصل مع المطور.
2. [.نشر] - نشر رسالة لجميع مستخدمي البوت.
3. [.جروبات] - جلب جميع الجروبات التي بداخلها البوت.
4. [.بريم] - تمييز شخص.
5. [.خفض-التميير] - خفض تمييز شخص.
6. [.المستخدين] - عدد مستخدمي البوت.
7. [.حظر | فك-حظر] - حظر أو فك حظر شات.
8. [.المحظورين] - قائمة المحظورين.
9. [.بان | فك البان] - حظر أو فك حظر مستخدم.
10. [.بلوك | رفع بلوك] - حظر أو رفع الحظر.
11. [.البلوكات] - قائمة المحظورين.
12. [.انضم] - دخول جروب.
13. [.أخرج] - خروج من جروب.
14. [.المميزين] - قائمة المميزين.
15. [.اضف-الماس] - إضافة ماس.
16. [.اضف-اكسبي] - إضافة اكسبي.
17. [.ادمن] - رفع شخص إلى أدمن في الجروب.
15. [.تغير] - يغير صورت بروفايل البوت.
16. [.وقت-التشغيل] - وقت تشغيل البوت.
16. [.رسترت-البوت] - إعادة تشغيل البوت.
17. [.البوت-خاص] - يوريك مستخدمين البوت في الخاص.
18. [.ميزه] - يجبلك اي كود من اكواد البوت.
19. [.انضم2] - يدخل اي جروب بوقت.
20. [.تمكين] - يجعل اي شخص يستخدم البوت في الخاص.
21. [.ايدي] - يجبلك ايدي اي جروب.
22. [.المستخدمين] - يجبلك مستخدمين البوت.
23. [.انشاء] - يستخدم هذا الامر لانشاء جروب.
24. [.ازاله] - ازالة احد من كونه مطور للبوت.
25. [.السسيون] - يجبلك السسيون كود.
26. [.ارفعني] - البوت يرفع المطور مشرف.
27. [.تفقد_المده] - يجبلك البوت فاضله قد اي في الجروب.
28. [.حذف_المده] - يحذف مدت بقاء البوت في الجروب.
29. [.باتش-اضافه] - يضيفلك مف في البوت.
30. [.باتش-تعديل] - يضيفلك ملف في البوت.
31. [.باتش-حذف] - يحذفلك ملف من البوت.
32. [.باتش-عرض] - يعرضلك ملف من البوت.
33. [.باتش-الكل] - يجبلك كل ملفات البوت.
34. [.تسريع] - يسرعلك البوت.
35. [.طرد-الكل] - يطرد كل الي في الجروب.
36. [.بانشات] - يبند اي محادثه.
35. [.بانشات_فك] - يفك بان الشات.
36. [اضف-مطور] - يضيف شخص مطور للبوت.
37. [حذف-مطور] - حذف شخص من كونه مطور للبوت.
38. [تهكير] 
39. [مسح-السسيون] - هذا الامر يستخدم في الحالات الخطره.
40. [المحظورين] - يجبلك المحظورين من البوت.
41. [المميزين]
42. [بث] - يرسل رساله لمستخدمين البوت خاص.
45. [بث2] - يرسل رساله للجروبات الي فيها البوت.
46. [باتش-بحثد] - يبحثلك عن اي كود بكلمه.
47. [حفظ] - يعملك حفظ للصوره في ملف ال src.
48. [البوتات] - يجبلك قائمة البوتات الفرعيه المتصله.
49. [ايقاف] - يوقف البوت الفرعي.
50. [باتش-تغير] - يغير اسم اي ملف.
51. [اعاده2] - يعيد تعين مستخدم من قاعدة البيانات.
52. [مسح-الشات]
53. [تنظيف]
54. [ايقاف2] يوقف البوت ف المجموعه.
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
handler.command = /^(قائمتي|7)$/i
handler.exp = 50
handler.fail = null
handler.owner = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
