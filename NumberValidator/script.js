// // GETTING ELEMENTS FROM DOM
const checkBtn=document.getElementById('check-btn');
const clearBtn=document.getElementById('clear-btn');
const userInput=document.getElementById('user-input');
const resultsDiv=document.getElementById('results-div');

// FUNCTIONS
checkBtn.addEventListener('click',check);
userInput.addEventListener('keydown',(e)=>e.key==='Enter'?check():"")
clearBtn.addEventListener('click',clear);

// //BUTTON FUNCTIONS
function clear(){
  resultsDiv.textContent="";
  userInput.value="";
}

function check(){
   const input = userInput.value.trim();  
  if (input === '') {
    alert("Please provide a phone number");
    userInput.value = "";
    return;
  }
  const valid = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/.test(input);
  valid ? conditionTrue(input) : conditionFalse(input);
}



function conditionTrue(s){ 
  resultsDiv.textContent = "";
  const p=document.createElement('p');
  p.style.color='green';
  p.textContent="Valid US number: "+s;
  resultsDiv.appendChild(p);  
  // resultsDiv.textContent=`Valid US number: ${s}`;
   userInput.value="";
}

function conditionFalse(s){ 
  resultsDiv.textContent = "";
  const p=document.createElement('p');
  p.style.color='red';
  p.textContent="Invalid US number: "+s;
  resultsDiv.appendChild(p);
  // resultsDiv.textContent=`Invalid US number: ${s}`;
  userInput.value="";
}

