// poem
var words=[
    '星之声',
    '云之彼端，约定的地方',
    '秒速5厘米',
    '追逐星星的孩子',
    '言叶之庭',
    '你的名字。',
    '天气之子',
    '铃芽之旅',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#e73d4b';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '建议下载观看！';
          textone.style.color = '#ec4762';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },5000*1)
      setTimeout(function(){
        textone.innerHTML = '在线观看会很卡哦！';
          textone.style.color = '#ec4762';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },5000*2)
      setTimeout(function(){
        textone.innerHTML = '正在加载！';
          textone.style.color = '#ec4762';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },5000*3)
      setTimeout(function(){
        textone.innerHTML = '♡(*´∀｀*)点我屏幕进入！(*´∀｀*)♡';
          textone.style.color = '#ec4762';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
          app=document.getElementById("app")
          app.onclick=function(){window.location.href="主体/index.html"; }
      },5000*4)




 
