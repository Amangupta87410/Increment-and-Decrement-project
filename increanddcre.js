
const para=document.getElementById("para")
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
let number=0;
let number1=50;
const startInterval=()=>{
    para.innerHTML="Loading.......";
  timerid=setInterval(()=>{
        para.innerHTML=`${number}`;
        number++;
        if(number==50){
            number=1;
        }
    },500)

}
btn1.addEventListener('click',startInterval)
btn2.addEventListener('click',()=>{
    clearInterval(timerid);
})

const para1=document.getElementById("para1")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
let num=100;
let num1=50;
const goInterval=()=>{
    para1.innerHTML="Loading.......";
  timerid1=setInterval(()=>{
        para1.innerHTML=`${num}`;
        num--;
        if(num==50){
            num=100;
        }
    },500)

}

btn3.addEventListener('click',goInterval)
btn4.addEventListener('click',()=>{
    clearInterval(timerid1)
})
