  const startButton = document.getElementById("startButton");
      const outputDiv = document.getElementById("output");

      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)();
      recognition.lang = "uz-UZ";
      // recognition.lang = "en-US";
      // recognition.lang = "ru-RU";
      // recognition.lang = "ru-RU";

      recognition.onstart = () => {
        startButton.textContent = "Jarayonda...";
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        outputDiv.textContent = transcript;
      };

      recognition.onend = () => {
        startButton.textContent = "Qaytadan boshlang";
      };

      startButton.addEventListener("click", () => {
        recognition.start();
      });