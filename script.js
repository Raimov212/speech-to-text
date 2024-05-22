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
//   console.log('Natija:', transcript);
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