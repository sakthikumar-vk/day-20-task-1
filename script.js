var div=document.createElement('div');
div.style.textAlign='center';
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','number');
input.setAttribute('placeholder','Enter the number')

var button=document.createElement('button');
button.setAttribute('type','button');
button.innerHTML='Kural';
button.addEventListener('click',getData);
let section=document.createElement('div');
section.setAttribute('id','section');
let chaptertamil=document.createElement('div');
chaptertamil.setAttribute('id','chaptertamil');
let line=document.createElement('div');
line.setAttribute('id','line');
let line1=document.createElement('div');
line1.setAttribute('id','line');
let exp=document.createElement('div');
exp.setAttribute('id','exp');
div.append(input,button,section,chaptertamil,line,line1,exp);
document.body.append(div);

async function getData(){
    try{
    let res=document.getElementById('number').value;   
    let url=`https://api-thirukkural.vercel.app/api?num=${res}`;   

    let res1=await fetch(url);  
    let res2=await res1.json();     

    console.log(res2.sec_tam);   
    section.innerHTML=`Section Tamil:  ${res2.sect_tam}`;
    console.log(res2.chap_tam);   
    chaptertamil.innerHTML=`Chapter Tamil:  ${res2.chap_tam}`;
    console.log(res2.line1);   
    line.innerHTML=`Thirukural:  ${res2.line1}`;
    console.log(res2.line2);
    line1.innerHTML=`${res2.line2}`;
    console.log(res2.tam_exp);
    exp.innerHTML=`Tamil Meaning:  ${res2.tam_exp}`;
    }
    catch(error){
        console.log('Kural not found!!!')
    }
}