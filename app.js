const text = document.getElementById("text")
const image = document.getElementById("image")

let pos = 0
const array = ["ты у меня...", "умная", "стильная", "смешная", "милая", "любящая",
    "невероятно красивая", "и самая лучшая",
    "ты меня...", "вдохновляешь быть лучше", "мотивируешь меня в трудные моменты",
    "поражаешь своей красотой", "с тобой невозможно провести скучно время", "c тобой хочется быть рядом каждую секунду", "я тебя люблю"]

const arImages = ["none", "umnaia", "stilnaia", 
    "smeshnaia", "milaia", "liubia", "krasivaia", 
    "samaia", "none", "luche", "motivation",
     "krasotoi", "scuchno", "secundu", "stitch_with_heart"]

function writePhrase() {
    if (pos > array.length-1) return
    text.innerHTML = getPhrase()
    image.style.opacity = "0"
    image.src = getImage()

    pos++
}

function getImage() {
    if(arImages[pos] === "none") return
    image.style.opacity = "1"
    return `images/${arImages[pos]}.jpg`
}

function getPhrase() {
    if ( pos === array.length-1) {
        let str = array[pos].toUpperCase()
        return str
    }
    let str = array[pos]
    return str.charAt(0).toUpperCase() + str.slice(1)
}