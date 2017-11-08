
(function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener("click",function(){

    var results = ['大吉','中吉','凶'];
    var n = Math.floor(Math.random()*results.length)
      this.textContent = results[n];
  //   }else　if(n === 1){
  //     this.textContent = "吉";
  //   }else  if(n === 2){
  //     this.textContent = "凶";
  //   }
   });
  btn.addEventListener("mousedown",function(){
    this.className = 'pushed';
  });
  btn.addEventListener("mouseup",function(){
    this.className = '';
  });
})();
