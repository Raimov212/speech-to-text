const startButton = document.getElementById("start-btn");
const outputDiv = document.getElementById("output");
const text_1 = document.getElementById("text_1")
const text_result = document.getElementById("text_result")


      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)();
      recognition.lang = "uz-UZ";

      recognition.onstart = () => {
        startButton.textContent = "Jarayonda...";

          const createButton = document.getElementById('buttonContainer');
          createButton.innerHTML = ""
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        outputDiv.textContent =  transcript;
        text_result.innerText = "Natija: "

        const newButton = document.createElement("button");
        newButton.className = 'btn2'
        document.getElementById('text_2').innerText = "2)";
        newButton.textContent = "Internetdan qidirish";
        document.getElementById("buttonContainer").appendChild(newButton);
      };  

      document.getElementById("buttonContainer").addEventListener("click", () =>{
        const searchText= document.getElementById("output").textContent;
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;

        window.open(searchURL, '_blank');
      })


      recognition.onend = () => {
        startButton.textContent = "Qaytadan boshlang";    
      };

      startButton.addEventListener("click", () => {
  

        recognition.start();
      });