const text = document.getElementById("text")
const image = document.getElementById("image")

let pos = 0
const array = ["ты у меня...", "умная", "стильная", "смешная", "милая", "любящая",
    "невероятно красивая", "и самая лучшая",
    "ты меня...", "вдохновляешь быть лучше", "мотивируешь меня в трудные моменты",
    "поражаешь своей красотой","с тобой...", "невозможно провести скучно время", "хочется быть рядом каждую секунду", "я тебя люблю"]

const arImages = ["none", "umnaia", "stilnaia", 
    "smeshnaia", "milaia", "liubia", "krasivaia", 
    "samaia", "none", "luche", "motivation",
     "krasotoi","none", "scuchno", "secundu", "stitch_with_heart"]

function writePhrase() {
    if (pos > array.length-1) {
        postVideo()
        return
    }
    text.innerHTML = getPhrase()
    image.style.opacity = "0"
    image.src = getImage()

    pos++
}

function postVideo() {
    const divToDelete = document.getElementById("mainDiv")
    divToDelete.remove()

    const video = document.createElement("video")
    const src = document.createElement("source")
    video.width = "320"
    video.height = "240"
    video.autoplay = true
    video.id = "video"

    src.src = "images/jesolo.mp4"
    src.type = "video/mp4"

    video.appendChild(src)
    document.querySelector("body").appendChild(video)
}

function getImage() {
    if(arImages[pos] === "none") return
    image.style.opacity = "1"
    return `images/${arImages[pos]}.jpg`
}

function getPhrase() {
    if ( pos === array.length-1) {
        let str = array[pos].toUpperCase()
        return `<span id="textSpan">${str}</span>`
    }
    let str = array[pos]
    return `<span id="textSpan">${str.charAt(0).toUpperCase() + str.slice(1)}</span>`
}