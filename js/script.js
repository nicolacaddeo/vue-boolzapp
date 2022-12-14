console.log('JS OK!');

const app = new Vue({
    el: '#root',
    data: {
        contacts,
        activeIndex: 0,
        messageToSend: '',
        newMessage: {
            date: '10/01/2020 15:30:55',
            message: '',
            status: 'sent'
        },
        contactAnswer: {
            date: '10/01/2020 15:30:55',
            message: 'Ok!',
            status: 'received'
        }
    },
    methods: {
        getContactPic: function (array, i) {
            return `img/avatar${array[i].avatar}.jpg`
        },
        selectChat: function (index) {
            this.activeIndex = index
        },
        sendMessage: function () {
            this.newMessage.message = this.messageToSend
            this.contacts[this.activeIndex].messages.push(this.newMessage)
            this.messageToSend = ''
            setTimeout(() => {
                this.contacts[this.activeIndex].messages.push(this.contactAnswer)
            }, 1000)
        }
    }
});




// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)