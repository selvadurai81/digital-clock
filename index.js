let select = document.getElementById("drop");
let j = document.getElementById("h4")
let date = new Date()
select.addEventListener("change", () => {

    if (select.value == "none") {
        let h = document.getElementById("h1")
        h.style.display = "none"
        let b = document.getElementById("h2")
        b.style.display = "none"
        let d = document.getElementById("h3")
        d.style.display = "none"
        let j = document.getElementById("h4")
        j.style.display = "none"
        let k = document.getElementById("h5")
        k.style.display = "none"
        let l = document.getElementById("h6")
        l.style.display = "none"
    }
    if (select.value == "12") {
        let h = document.getElementById("h1")
        h.innerHTML = (date.getHours() % 12)
        h.style.display = "block"
        let b = document.getElementById("h2")
        b.innerHTML = date.getMinutes();
        b.style.display = "block"
        let d = document.getElementById("h3")
        d.innerHTML = date.getSeconds()
        d.style.display = "block"
        let m = document.getElementById("h5")
        m.innerHTML = date.getMonth()+1
        m.style.display = "block"
        let y = document.getElementById("h6")
        y.innerHTML = date.getFullYear()
        y.style.display = "block"
        
        if (hour < 12) {
            j.innerHTML = "AM"
            j.style.display = "block"
        }
        else {
            j.innerHTML = "PM"
            j.style.display = "block"
        }
    }
    if (select.value == "24") {
        let h = document.getElementById("h1")
        h.innerHTML = date.getHours()
        h.style.display = "block"
        let b = document.getElementById("h2")
        b.innerHTML = date.getMinutes()
        b.style.display = "block"
        let d = document.getElementById("h3")
        d.innerHTML = date.getSeconds()
        d.style.display = "block"
        let m = document.getElementById("h5")
        m.innerHTML = date.getMonth()+1
        m.style.display = "block"
        let y = document.getElementById("h6")
        y.innerHTML = date.getFullYear()
        y.style.display = "block"

        if (hour > 12) {
            let j = document.getElementById("h4")
            j.innerHTML = "PM"
            j.style.display = "block"
        }
        else if (hour < 12) {
            j.innerHTML = "AM"
            j.style.display = "block"
        }
    }
}, false)
let hour = date.getHours()
let sec = date.getSeconds()
let min = date.getMinutes()
setInterval(() => {
    if (sec < 10) {
        let a = document.getElementById("h3")
        a.innerHTML = String("0") + sec
    }
    if (sec == 61) {
        sec = 1;
        let b = document.getElementById("h2")
        b.innerHTML = ++min;
    }
    if (min == 61) {
        min = 1;
        let c = document.getElementById("h1")
        c.innerHTML = hour++;
    }

    let d = document.getElementById("h3")
    d.textContent = sec++
}, 1000);