// بيرفع المطور ادمن 🤣

const handler = async (_0x1730a3, {
  conn: _0x22de6a,
  isAdmin: _0x51b82d
}) => {
  if (_0x1730a3.fromMe) {
    return;
  }
  if (_0x51b82d) {
    throw "*[❗] انت ادمن اصلا يا مطوري ❤️*\n@201151094460";
  }
  try {
    await _0x22de6a.groupParticipantsUpdate(_0x1730a3.chat, [_0x1730a3.sender], "promote");
  } catch {
    await _0x1730a3.reply("*[❗] البوت مش قادر عشان هو مش ادمن*");
  }
};
handler.command = /^ارفعني|adm$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;