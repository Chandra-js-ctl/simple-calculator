let buttons = document.querySelectorAll('.num');
let input= document.querySelector('input');
let string = '';  // Empty string for store the key values
Array.from(buttons).forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string ='';
      input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
     string = string.substring(0, string.length-1);
      input.value = string;
    }
    else{
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});