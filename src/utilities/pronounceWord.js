 function pronounceWord(word) {
      const utterance = new SpeechSynthesisUtterance(word);
    //   utterance.lang = 'ja-JP'; // Japanese
      utterance.lang = 'ar-AR'; // Arabic (101)
      window.speechSynthesis.speak(utterance);
    }

    export default pronounceWord;