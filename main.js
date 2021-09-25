window.addEventListener('load',init);
let time = 10;
let score = 0;
let inpaying;

//dom Element 
const wordInout = document.querySelector("#Word-input");
const currrentWord = document.querySelector("#current-Word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const second = document.querySelector("#second");


const words =['gate',
    'keep',
    'pluck',
    'oak',
    'hammer',
    'shell',
    'word',
    'tenant',
    'cruel',
    'wound',
    'item',
    'decay',
    'code',
    'error',
    'ditch',
    'touch',
    'defeat',
    'tissue',
    'unrest',
    'sweep',
    'riot',
    'drop',
    'belief',
    'agony',
    'adjust',
    'bin',
    'aid',
    'hover',
    'lake',
    'treaty',
    'fund',
    'brink',
    'hen',
    'wood',
    'video',
    'dark',
    'loan',
    'elbow',
    'title',
    'staff',
    'level',
    'abbey',
    'fail',
    'horse',
    'quiet',
    'sword',
    'piece',
    'topple',
    'shy',
    'source'];

function init(){
    //load word from arry 
    showWord(words);
    //start matching input

    wordInout.addEventListener('input',startMatch);

   

    //coun down 
    setInterval(countdown,1000);
    //chake status
    setInterval(checkStatus , 50);


}

//show random word 
function showWord(words){
 
    const randindex = Math.floor(Math.random()*words.length );
    currrentWord.innerHTML= words[randindex];
}

function countdown (){
    if(time>0){
        time--;
    }else
     if(time == 0){
        inpaying=false;
        
    }
    timeDisplay.innerHTML = time ;


}

function startMatch(){
    if(matchWord()){
        inpaying = true;
        time=10
        showWord(words);
        wordInout.value ='';
        score++;

    }

    if(score == -1)
    scoreDisplay.innerHTML =0;
    else
    scoreDisplay.innerHTML= score ;

}

function matchWord(){
    if(wordInout.value == currrentWord.innerHTML  ){
        message.innerHTML= 'correct !!!';
        
        return true;
    }
    else{
        message.innerHTML=''
        return false ;
        

    }
    
}

function checkStatus (){
    if(!inpaying && time==0 ){
        message.innerHTML = 'Game Over:(';
        score= -1;
    }
}
