//********************************************************************** */
let number=0;
function increment(){
            number++;
            document.getElementById('cislo').innerHTML = "Počet návštěvníků je "+number;
}

function decrement(){
        number--;
        document.getElementById('cislo').innerHTML = "Počet návštěvníků je "+number;


}
//********************************************************************** */
async function startSklonning(){
let slova = ["velký", "větší", "největší", "nejvíc největší", "nejobrovštější"];
let pocitadlo = 0;
for(let i = 0; i<slova.length; i++){
    document.getElementById('slovo').innerHTML="Mám " + slova[i] + " bicák.";
    await sleep(3000);
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//********************************************************************** */
let i1 = 0;
let i2 = 0;
let counter = 0;
function start(){
    i1 = Math.floor(Math.random() * 1000);
    i2 = Math.floor(Math.random() * 1000);
    document.getElementById('box1').innerHTML = i1;
    document.getElementById('box2').innerHTML = i2;
    counter = 0;
    document.getElementById('corr').innerHTML = "Správně: " + counter;
}
    function clicke1(){
        if(i1==i2){
        i1 = Math.floor(Math.random() * 1000);
        i2 = Math.floor(Math.random() * 1000);
        document.getElementById('box1').innerHTML = i1;
        document.getElementById('box2').innerHTML = i2;
        }
    if(i1>i2){
        i1 = Math.floor(Math.random() * 1000);
        i2 = Math.floor(Math.random() * 1000);
        document.getElementById('box1').innerHTML = i1;
        document.getElementById('box2').innerHTML = i2;
        counter++;
        document.getElementById('corr').innerHTML = "Správně: " + counter;
    }else{
        alert(i1 + " Není větší jak " + i2 + "!");
    }}
    function clicke2(){
            if(i1<i2){
                i1 = Math.floor(Math.random() * 1000);
                i2 = Math.floor(Math.random() * 1000);
                document.getElementById('box1').innerHTML = i1;
                document.getElementById('box2').innerHTML = i2;
                counter++;
                document.getElementById('corr').innerHTML = "Správně: " + counter;
            }else{
                alert(i2 + " Není větší jak " + i1 + "!");
            }}