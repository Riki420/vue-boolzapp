console.log('Vue OK' + Vue);

Vue.config.devtools = true;

const root = new Vue ({
    el: '#root',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io',
          },
          contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent',
                },
                {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received',
                },
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [
                {
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent',
                },
                {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received',
                },
                {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received',
                },
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [
                {
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received',
                },
                {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent',
                },
                {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received',
                },
              ],
            },
            {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              messages: [
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent',
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received',
                },
                
              ],
            },
            
          ],
          currentIndex: 0,
          currentChat: '',
          userMessage: '',
          searchTerm: '',
          dropdownMenu: '',
        
       
    },
    methods: {
//Cambia chat
      showChat(index){
        this.currentIndex = index;
        
      },
//Immagine del contatto
      getContactImage(index) {
        const contact = this.contacts[index];
        const imageContact = `./img/avatar${contact.avatar}.jpg`;
        return imageContact
      },
//Invio del messaggio
      sendMessage(){
        const dateChat = dayjs().format('DD/MM/YYYY HH:mm:ss');
        if(!this.userMessage.trim()) return;
        const userMessage = {
          status: 'sent',
          message: this.userMessage,
          date: dateChat
          

        }
        this.contacts[this.currentIndex].messages.push(userMessage);
        this.userMessage = '';

        setTimeout(() => {
          const answerMessage = {
            status: 'received',
            message: 'ok',
            date: dateChat

          }
          this.contacts[this.currentIndex].messages.push(answerMessage);

        }, 1000);
      },
//Ricerca utenti
      searchUser(){
       this.contacts.forEach((contact, i) => {
          if (contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
            contact.visible = true;
          } else {
            contact.visible = false;
          }
        });
  }
}
});

