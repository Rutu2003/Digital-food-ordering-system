let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let food4s = document.getElementById('food4');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('pizza1.png')";
    
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('burger.png')";
})

food3s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food.jpg')";
})

food4s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.png')";
})

function startSpeechRecognition() {
    const clearBtn = document.getElementById("clear-btn");
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.maxAlternatives = 1;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.start();
    setTimeout(() => {
      recognition.stop();
    }, 20000);
    recognition.onresult = function(event) {
      let output = document.getElementById("output");
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          output.value += event.results[i][0].transcript;
        } else {
          output.value += event.results[i][0].transcript;
        }
      }
      
    }
   
      
   
    clearBtn.addEventListener("click", () => {
      let output = document.getElementById("output");
      output.value = "";
      
  
    });
  }
  
  
  function genrate(){
      window.open("Bill.html");
  }

 
  function order(){
    window.open("mainweb.html" ,"_blank");
  }

  