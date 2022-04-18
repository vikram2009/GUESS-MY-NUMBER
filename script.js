'Use Strict ';
// console.log(document.querySelector('.message').textContent='🎉CORRECT NUMBER🎊');
// console.log(document.querySelector('.guess').value);

const Number = Math.trunc(Math.random() * 20 ) + 1 ;
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value) ;
    const guess = document.querySelector('.guess').value ;
    if(!guess){
        document.querySelector('.message').textContent = "⛔ NO NUMBER ";
    } else if (guess == Number) {
        document.querySelector('.message').textContent = "🎉 CORRECT NUMBER";  
    }else if (guess > Number){
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 TOO HIGH";  
            score-- ;
            document.querySelector('.score').textContent = score;   
        } else {
        document.querySelector('.message').textContent = "💥YOU LOST THE GAME" 
        } 
    } else if (guess < Number){
        if (score > 1 ) {
            document.querySelector('.message').textContent = "📉 TOO LOW";  
            score-- ;
            document.querySelector('.score').textContent = score;   
        } else {
            document.querySelector('.message').textContent = "💥YOU LOST THE GAME" ;
        }
        
    }
}) ;

