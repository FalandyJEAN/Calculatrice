document.addEventListener('DOMContentLoaded', function() {
    const touches = [...document.querySelectorAll(".bouton")]
    const listeKeycode = touches.map(touche => touche.dataset.key)




    // Obtenez tous les boutons
    document.querySelectorAll('.bouton').forEach(function (button) {
        button.addEventListener('click', function () {
            const audio = button.getAttribute('data-audio')
            playSound(audio, 5.5)
        })
    })
})


function playSound(audio, playbackRate) {
    son.playbackRate = playbackRate
    son.play(audio)
}
