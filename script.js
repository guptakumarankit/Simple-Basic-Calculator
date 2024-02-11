const result_display = document.querySelector('.result-display');
console.log(result_display);

const buttons = document.querySelectorAll('button');
console.log(buttons);

let output = "";
buttons.forEach(function(button){
     button.addEventListener('click',(e)=>{

          if(e.target.innerHTML === 'DEL'){
              output = output.substring(0,output.length-1);
          }
          else if(e.target.innerHTML === 'AC'){
               output = '';
          }
          else if(e.target.innerHTML === '='){
               let first = '';
               let second = '';
               let operator = '';
               for(let i=1;i<output.length;i++){
                   if(output[i] === '/' || output[i] === '+' || output[i] === '-'
                    || output[i] === '*' || output[i] ==='%' || output[i] === '^'){
                         operator += output[i];
                         first = output.substring(0,i);
                         second = output.substring(i+1,output.length);
                         break;
                   }
               }

               if(operator === '+'){
                    output = String(Number(first) + Number(second));
                    result_display.value = output;
               }
               else if(operator === '-'){
                    output = String(Number(first) - Number(second));
                    result_display.value = output;
               }
               else if(operator === '*'){
                    output = String(Number(first) * Number(second));
                    result_display.value = output;
               }
               else if(operator === '/'){
                    output = String(Number(first) / Number(second));
                    result_display.value = output;
               }
               else if(operator === '^'){
                    output = String(Math.pow(Number(first),Number(second)));
                    result_display.value = output;
               }
               else if(operator === '%'){
                    output = String((Number(first)*100)/Number(second));
                    result_display.value = output;
               }
          }
          else{
               output += e.target.innerHTML;
          }
          result_display.value = output;
          console.log(output);
     })
});
