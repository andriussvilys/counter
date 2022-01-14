
const counter_string = document.getElementById("counter");

const hours_string = document.getElementById("hours");
const minutes_string = document.getElementById("minutes");
const seconds_string = document.getElementById("seconds");
const milis_string = document.getElementById("milis");

let hours, minutes, seconds, milis


const vid_length = [10*1000, 64*1000, 15*1000]

let currentVideoIndex = 0
let remainder = vid_length[0]
let start = null
let now = null
let diff = null

let intervalID = null
const intervalSize = 11

const format = (zeroCount, value) => {
    let str_start = ""
    for(let i = 0; i < zeroCount - value.toString().length; ++i){
        str_start += "0"
    }
    return `${str_start}${value}`

}

const countdown = () => {

    if(remainder <= 0){
        initLoop()
    }

    milis = remainder % 1000;
    seconds = Math.trunc((remainder / 1000) % 60)
    minutes = Math.trunc((remainder / (1000 * 60)) % 60)
    hours = Math.trunc((remainder / (1000 * 60 * 60)) % 60)

    hours_string.innerText = format(2,hours)
    minutes_string.innerText = format(2,minutes)
    seconds_string.innerText = format(2,seconds)
    milis_string.innerText = format(3,milis)


    diff = Date.now() - start
    remainder -= diff
    start = Date.now()

}

const initLoop = () => {
    ++currentVideoIndex
    remainder = vid_length[(currentVideoIndex) % vid_length.length]
    start = Date.now()
}

function reset(){
    currentVideoIndex = 0
    remainder = vid_length[0]

    clearInterval(intervalID)

    start = Date.now()
    intercalID = setInterval(() => {
        countdown()
    }, intervalSize);
}

start = Date.now()
intercalID = setInterval(() => {
    countdown()
}, intervalSize);