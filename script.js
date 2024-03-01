let btn1 = document.getElementById(`bt1`);
let btn2 = document.getElementById(`bt2`);
let divc = document.querySelector(`.div1`);
let rgb1 = hexvals();
let rgb2 = hexvals();


const   handleBtn1 = () => {
     rgb1 = hexvals();
  
    console.log(rgb1);
 btn1.textContent = rgb1;
 
    document.body.style.backgroundImage = `linear-gradient(to right  ,${rgb1}, ${rgb2})`;
    divc.innerHTML = ` background-Image : linear-gradient(to right ,${rgb1},${rgb2} )`;
};

const  handleBtn2 = () => {
    let rgb2 = hexvals();
    console.log(rgb2);
    btn2.textContent=rgb2;
   
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1},${rgb2})`;
    divc.innerHTML = ` background-Image : linear-gradient(to right ,${rgb1},${rgb2} )`;
};

btn1.addEventListener(`click`,handleBtn1);
btn2.addEventListener(`click`,handleBtn2);

function hexvals  ()  {
    let hexval = `0123456789abcdef`;
    let clrs = `#`;
    for(let i = 0 ; i<6 ; i++){
    clrs= clrs + hexval[Math.floor(Math.random()*16)];

    }
   
    return clrs ;
};

