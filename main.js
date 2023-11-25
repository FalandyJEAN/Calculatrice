document.addEventListener('DOMContentLoaded', function () {
    const touches = [...document.querySelectorAll(".bouton")]
    let ecran = document.getElementById("ecran")
    const son = document.getElementById("son")

    document.addEventListener("keydown", (e) => {
        const touchePressee = touches.find(touche => touche.dataset.key === e.key)
        if (touchePressee !== undefined) {
            ecran.textContent += touchePressee.textContent
        }
    })

    touches.forEach(function (button) {
        button.addEventListener('click', function () {
            ecran.textContent += button.textContent
            playSound(son, 5.5)
        })
    })
})

function playSound(audioElement, playbackRate) {
    audioElement.playbackRate = playbackRate
    audioElement.play()
}
