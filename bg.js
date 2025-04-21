let randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color='#';

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
};
let interval;
const changebgcolor=function(){

    const bgcolor=function(){
        document.body.style.backgroundColor=randomcolor();
    }
   interval= setInterval(bgcolor,1000);
}

const stopbgcolor=function(){
    clearInterval(interval);
}

document.querySelector('#start').addEventListener('click',changebgcolor);

document.querySelector('#stop').addEventListener('click',stopbgcolor);