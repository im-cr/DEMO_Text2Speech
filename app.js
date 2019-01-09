try {
  const speechRecog = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
}
catch (e) {
  console.log(e);

}