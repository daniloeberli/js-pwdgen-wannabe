//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito.
//Infine scrivi sulla pagina e in console nomecognomecolorepreferito89 (con i valori inseriti dall’utente)

const nome=prompt("Inserisci il tuo nome");
const cognome=prompt("Inserisci il tuo cognome");
const colore=prompt("Inserisci il tuo colore preferito");

//Concateniamo le 3 variabili dell'utente.
const psw=(`${nome+cognome+colore}89`);

//Mostriamo la password nella consele.
console.log(psw);

//Printiamo la password nel nostro documento html
document.getElementById('safepassword').innerHTML = `${psw}`;
