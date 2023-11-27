let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *PESAN UNTUK PESERTA GROUP* ⋘
\n *${text ? text : 'PERHATIAN !!!'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` @${mem.id.split('@')[0]}\n`
				}
                teks += `___________________________________________`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true

module.exports = handler
