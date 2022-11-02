var dice1Num = Math.floor(Math.random()*6+1);

var dice2Num = Math.floor(Math.random()*6+1);



if(dice1Num === 1) {

  document.querySelector(".dice .img1").setAttribute("src","images/dice1.png");

}

else if(dice1Num === 2){

  document.querySelector(".dice .img1").setAttribute("src","images/dice2.png");

}

else if(dice1Num === 3){

  document.querySelector(".dice .img1").setAttribute("src","images/dice3.png");

}

else if(dice1Num === 4){

  document.querySelector(".dice .img1").setAttribute("src","images/dice4.png");

}

else if(dice1Num === 5){

  document.querySelector(".dice .img1").setAttribute("src","images/dice5.png");

}

else if(dice1Num === 6){

  document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");

}

// dice2 //

if(dice2Num === 1) {

    document.querySelector(".dice .img2").setAttribute("src","images/dice1.png");
  
  }
  
  else if(dice2Num === 2){
  
    document.querySelector(".dice .img2").setAttribute("src","images/dice2.png");
  
  }
  
  else if(dice2Num === 3){
  
    document.querySelector(".dice .img2").setAttribute("src","images/dice3.png");
  
  }
  
  else if(dice2Num === 4){
  
    document.querySelector(".dice .img2").setAttribute("src","images/dice4.png");
  
  }
  
  else if(dice2Num === 5){
  
    document.querySelector(".dice .img2").setAttribute("src","images/dice5.png");
  
  }
  
  else if(dice2Num === 6){
  
    document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");
  
  }
  
  if(dice1Num == dice2Num) {
    document.querySelector("h1").innerHTML = "Match Draw";
  } else if(dice1Num > dice2Num) {
    document.querySelector("h1").innerHTML = "Player1 Won! 🚩";
  } else if(dice1Num < dice2Num) {
    document.querySelector("h1").innerHTML = "Player2 Won! 🚩";
  }


