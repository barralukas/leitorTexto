const textarea = document.getElementById('text'),
button = document.getElementById('btn')

button.addEventListener('click', () => {
    const text = textarea.value,
    speak = new SpeechSynthesisUtterance(text);
    speak.lang = 'pt-br';
    window.speechSynthesis.speak(speak);
})