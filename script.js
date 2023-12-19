const year = document.querySelector('#Year');
const Month = document.querySelector('#Month');
const Day = document.querySelector('#Day');
const botao = document.querySelector('#button');

const DiaMeses = [31,28,31,30,31,30,31,31,30,31,30,31];

function GetAge(){
    let y1 = year.value;
    let m1 = Month.value;
    let d1 = Day.value;
    
    let DataHoje = new Date();
    let y2 = DataHoje.getFullYear();
    let m2 = DataHoje.getMonth();
    m2++
    let d2 = DataHoje.getDate();

    if(d1>d2){
        d2 = d2 + DiaMeses[m2-1];
        m2 = m2-1;
    } else{}

    if(m1>m2){
        m2 =m2 + 12;
        y2 = y2 -1;
    } else{}
    document.querySelector('#y-p').textContent =  y2 - y1;
    document.querySelector('#m-p').textContent = m2-m1;
    document.querySelector('#d-p').textContent = d2-d1;
};

botao.addEventListener('click',GetAge);