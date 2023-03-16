let hours =document.querySelector('.hours');
let minutes =document.querySelector('.minutes');
let seconds =document.querySelector('.seconds');

let clock = setInterval(()=>{
    let newDate = new Date();
    let hr = newDate.getHours();
    let mm=  newDate.getMinutes();
    let ss= newDate.getSeconds();

    hours.textContent=getRealNm(hr);
    minutes.textContent=getRealNm(mm);
    seconds.textContent=getRealNm(ss);


},1000);

const getRealNm=(Nm)=>{
    if(Nm>9){
        return Nm;
    }else{
        return '0' + Nm;
    }
}