const myEmojis = ["🧑🏽‍💻", "🍲", "🏃🏽", "✈️"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById('emoji-input')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')

function renderEmojis() {
    emojiContainer.innerHTML = '' // clear the `emojiContainer` HTML element
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span') // create a HTML element
        emoji.textContent = myEmojis[i] // add content to the `emoji` HTML element
        emojiContainer.append(emoji) // insert the the `emoji` HTML element to the last child of the `emojiContainer` HTML element
    }
}

renderEmojis()

pushBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = '' // clear the `emojiInput` value
        renderEmojis()
    }
})

unshiftBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = '' // clear the `emojiInput` value
        renderEmojis()
    }
})

popBtn.addEventListener('click', function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener('click', function() {
    myEmojis.shift()
    renderEmojis()
})