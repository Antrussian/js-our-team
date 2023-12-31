/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  ma anche realizzare qualcosa di creativo!!!
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
:githubparrot: :githubparrot: Buon lavoro! :githubparrot: :githubparrot:*/

const membriTeam = [
    { nome: "Wayne Barnet", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" },
];

const teamContainer = document.getElementById('teamContainer');

for (let i = 0; i < membriTeam.length; i++) {
    const member = membriTeam[i];

    // Creare un div per la card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card'); // Aggiungere una classe 'card' al div

    // Creare l'elemento img
    const imgElement = document.createElement('img');
    imgElement.src = `img/${member.foto}`;

    // Creare un paragrafo per contenere il nome e il ruolo
    const textElement = document.createElement('p');
    textElement.textContent = `${member.nome}, ${member.ruolo}`;

    // Aggiungere l'immagine e il testo al div della card
    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(textElement);

    // Aggiungere la card al tuo teamContainer
    teamContainer.appendChild(cardDiv);
}
 