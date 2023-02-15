const quiz = [
{
  question:'最も売れたゲーム機はどれ？',
  answers:[
    'ファミコン',
    'プレステ',
    'スイッチ',
    '任天DS'
  ],
  correct:'任天DS'
}, {
  question:'糸井重里のゲーム機はどれ？',
  answers:[
    'ファミコン２',
    'プレステ２',
    'スイッチ２',
    '任天DS2'
  ],
  correct:'スイッチ２'
}, {
  question:'坂本のゲーム機はどれ？',
  answers:[
    'ファミコン３',
    'プレステ３',
    'スイッチ３',
    '任天DS3'
  ],
  correct:'プレステ３'
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


// const question = '最も売れたゲーム機はどれ？';
// const answers = [
//   'ファミコン',
//   'プレステ',
//   'スイッチ',
//   '任天DS'
// ];
// const correct = '任天DS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  // let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解'); 
    score++;
   } else {
    window.alert('不正解');
   }

   quizIndex++;

   if(quizIndex < quizLength){
    setupQuiz();
   } else {
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です');
   }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

