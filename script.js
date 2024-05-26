// // SpeechRecognition API obyektini yaratish
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// // Konfiguratsiya
// recognition.lang = 'uz-UZ'; // Tilni o'rnatish
// recognition.interimResults = false; // Vaqtinchalik natijalarni olish

// // Ovoz yozishni boshlash
// recognition.start();

// // Ovoz yozish tugallanganda ishlov berish
// recognition.onresult = function(event) {
//   const transcript = event.results[0][0].transcript;
//   // Natijani interfeysga qo'shish yoki qayta ishlash
//   document.getElementById('output').textContent = transcript;
// };

// // Ovoz yozish tugagandan so'ng chaqiriladigan funksiya
// recognition.onspeechend = function() {
//   recognition.stop();
// };

// // Xatolarni qayta ishlash
// recognition.onerror = function(event) {
//   console.error('Xato:', event.error);
// };

// // UI interfeys elementlari
// document.getElementById('start-btn').addEventListener('click', function() {
//   recognition.start();
// });



const startButton = document.getElementById("start-btn");
const outputDiv = document.getElementById("output");
const text_1 = document.getElementById("text_1")


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

          const createButton = document.getElementById('buttonContainer');
          createButton.innerHTML = ""
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        outputDiv.textContent = "Natija: " + transcript;

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

      recognition.onerror = function() {
        outputDiv.textContent = 'Xatolik yuz berdi: ovoz yozilmadi';
        startBtn.disabled = false; // Tugmani qayta yoqish
        startBtn.textContent = 'Ovoz yozishni boshlash';
      };

      recognition.onend = () => {
        startButton.textContent = "Qaytadan boshlang";    
      };

      startButton.addEventListener("click", () => {
  

        recognition.start();
      });