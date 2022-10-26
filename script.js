display = document.querySelector(".display")
stopbtn = document.querySelector("#stop")
startbtn = document.querySelector("#start")
resetbtn = document.querySelector("#reset")


let counter = 0;
let pause = false;

function runwatch(){
    if(!pause){
        counter = counter+1;
        let date = new Date(null);
        date.setHours(0,0,0,0)
        date.setSeconds(counter);
        hh = date.getHours()
        mm = date.getMinutes()
        ss = date.getSeconds()
        if (hh < 10) {
            hh = "0" + hh
        }
        if (mm < 10) {
            mm = "0" + mm
        }
        if (ss < 10) {
            ss = "0" + ss
        }
        display.innerText = hh + "min : " + mm + "sec : " + ss + "ms"
        setTimeout(runwatch, 10);    
    }
}

function resetwatch() {
    counter = 0;
    pause = false;
    // let date = new Date(null);
    display.innerText = 0 //date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds()
}

function stopwatch() {
    pause = true
}

function startwatch() {
    pause = false
    runwatch();
}