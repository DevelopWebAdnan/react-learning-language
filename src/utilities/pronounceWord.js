 function pronounceWord(word) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'ar-AR'; // Arabic (101)
      window.speechSynthesis.speak(utterance);
    }

    export default pronounceWord;