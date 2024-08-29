const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

var XLSX = require("xlsx");

var workbook = XLSX.readFile("telefones.ods");
var ws = workbook.Sheets["Sheet1"]

function sleepms(ms) {
    return new Promise (resolve=>setTimeout( resolve, ms))
}

function getLastRow(ws) {

    let x = true
let count =1
while (x) {

    
    if(ws["A"+count] !== undefined) {
        count+=1
    } else {
        x=false
        console.log(count)
    }
}

}

const client = new Client({ authStrategy: new LocalAuth({
    dataPath: "./wwebjs_cache", clientId:"example1"
}), puppeteer:{
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
}});

let count =1

client.on('ready', async () => {
    console.log('Client is ready!');
    for (let i = 1; i < 250; i++) {
        if ( ws["B"+i].v === "false") {
            let number = ws["A"+i].v + "@c.us"
            await sleepms(2000)
            await client.sendMessage(number, template)
            ws["B"+i].v = "true"
        }
    }
 XLSX.writeFile(workbook, "./telefones.ods");



    let chats = client.getChats()
//     chats.then((data)=>{
//         data.forEach((itm)=>{

      

//             if (itm.isGroup){
//                 console.log(itm.groupMetadata.participants.forEach((itm)=>{
//                     console.log("A"+count);
//                     worksheet["C"+count].v = itm.id.user
//                     count+=1 
//                     console.log(itm.id.user );
//                 }));
//             } else {
//                 worksheet["C"+count].v = itm.id.user                
//                 count+=1 
//             }
//         })
//     console.log(count);

// })

});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on("authenticated", (session)=>{
    console.log("'hji")
} )



client.initialize();

let template = `
*🌟 Atenção, moradores da Região Metropolitana de Porto Alegre! 🌟*

Você está em busca de uma administração condominial eficiente, transparente e que realmente se preocupa com o bem-estar do seu condomínio? Nós da ThM Administradora estamos aqui para oferecer soluções personalizadas para o seu condomínio!

- *Gestão Financeira Transparente*: Controle financeiro com clareza e prestação de contas acessível. 
- *Atendimento de Qualidade*: Equipe preparada para atender as necessidades do seu condomínio de forma rápida e eficaz. 
- *Consultoria Jurídica*: Suporte completo para questões legais e regulamentares.

🚀 Transforme a administração do seu condomínio em uma experiência tranquila e organizada!

Entre em contato conosco e descubra como podemos ajudar a manter seu condomínio em perfeita ordem.

 📞 Fale conosco por esse numero caso deseje mais informações


*ThM Administração*
`


// PrivateChat {
//     id: {
//       server: 'c.us',
//       user: '555191480351',
//       _serialized: '555191480351@c.us'
//     },
//     name: 'Carol Evangelista',
//     isGroup: false,
//     isReadOnly: false,
//     unreadCount: 0,
//     timestamp: 1723932943,
//     archived: true,
//     pinned: false,
//     isMuted: undefined,
//     muteExpiration: 0,
//     lastMessage: undefined
// }



// GroupChat {
//     groupMetadata: {
//       id: [Object],
//       creation: 1674654824,
//       owner: [Object],
//       subject: 'Passagem de Plantão -AD22',
//       subjectTime: 1675393682,
//       descTime: 0,
//       restrict: false,
//       announce: false,
//       noFrequentlyForwarded: false,
//       ephemeralDuration: 0,
//       membershipApprovalMode: false,
//       memberAddMode: 'admin_add',
//       reportToAdminMode: false,
//       size: 0,
//       support: false,
//       suspended: false,
//       terminated: false,
//       uniqueShortNameMap: {},
//       isLidAddressingMode: false,
//       isParentGroup: false,
//       isParentGroupClosed: false,
//       defaultSubgroup: false,
//       generalSubgroup: false,
//       generalChatAutoAddDisabled: false,
//       allowNonAdminSubGroupCreation: false,
//       lastActivityTimestamp: 0,
//       lastSeenActivityTimestamp: 0,
//       incognito: false,
//       hasCapi: false,
//       participants: [Array],
//       pendingParticipants: [],
//       pastParticipants: [],
//       membershipApprovalRequests: [],
//       subgroupSuggestions: []
//     }