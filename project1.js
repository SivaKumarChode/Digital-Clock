const hour=document.getElementById("hour")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")
const ampm=document.getElementById("ampm")

let updateClock=()=>{
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"

    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }

    
        hour.innerText=h;
        minutes.innerText=m;
        seconds.innerText=s;

        ampm,(innerText=ampm);
        setTimeout(()=>{
            updateClock()
        },1000)
}

updateClock()