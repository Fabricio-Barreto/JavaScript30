window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
})

const keys = document.querySelectorAll('.key')
keys.forEach(key => console.log(key))
keys.forEach(key => key.addEventListener('transitionend', () => {
    if(e.propertyName !== 'transition') return
    console.log(this)
    this.classList.remove('playing')
}))

