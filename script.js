// Para alterar o dia em que se deseja a contagem basta alterar as informações na variavel:
// Lembrando que as iniciais do mês do calendario é em ingles 
//Exemplo:  Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec.

const mesDia =  "Nov 19" // altere as iniciais no mês e dia exemplo: fev 20
const anoHora = "2022 15:30:00" // altere as iniciais no ano e hora exemplo: 2023 20:00:25

const deadline = new Date(`${mesDia}, ${anoHora}`).getTime();
  
let x = setInterval(function() {
  
let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Contagem Finalizada!";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);