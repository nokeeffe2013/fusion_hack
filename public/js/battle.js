var teamOne = 10;
var teamTwo = 10;

/*function hydeOverlay(){
    // When social button is clicked
    var button1 = document.getElementById('social');
    var button2 = document.getElementById('Age');
    var button3 = document.getElementById('areaWealth');
    var button4 = document.getElementById('areaPop');
    var button5 = document.getElementById('total');

    var button6 = document.getElementById('social2');
    var button7 = document.getElementById('Age2');
    var button8 = document.getElementById('areaWealth2');
    var button9 = document.getElementById('areaPop2');
    var button10 = document.getElementById('total2');

    // Add a click event listener to the button
    button1.addEventListener('click', function() {
      // Code to execute when the button is clicked
      document.getElementById('overlay').style.display = 'none';
      compareSocial(button1.innerText, button6.innerText);      
        console.log(button1.innerText);
    });
    button2.addEventListener('click', function() {
      // Code to execute when the button is clicked
      document.getElementById('overlay').style.display = 'none';
      compareSocial(button2.innerText, button7.innerText);      });
    button3.addEventListener('click', function() {
      // Code to execute when the button is clicked
      document.getElementById('overlay').style.display = 'none';
      
      compareSocial(button3.innerText, button8.innerText);      });
    button4.addEventListener('click', function() {
      // Code to execute when the button is clicked
      document.getElementById('overlay').style.display = 'none';
      
      compareSocial(button4.innerText, button9.innerText);     });
     button5.addEventListener('click', function() {
      // Code to execute when the button is clicked
      document.getElementById('overlay').style.display = 'none';

      
      compareSocial(button5.innerText, button10.innerTex10);
            });
    
    
}*/

function hydeOverlaySocial(){
    var button1 = document.getElementById('social');
    var button6 = document.getElementById('social2');
    document.getElementById('overlay').style.display = 'none';
    compareSocial(button1.innerText, button6.innerText);      
    console.log(button1.innerText);
    document.getElementById('social').style.display = 'none';
    document.getElementById('social2').style.display = 'none';
}

function hydeOverlayAge(){
    var button1 = document.getElementById('Age');
    var button6 = document.getElementById('Age2');
        // Code to execute when the button is clicked
        document.getElementById('overlay').style.display = 'none';
        compareSocial(button1.innerText, button6.innerText);      
        console.log(button1.innerText);
        document.getElementById('Age').style.display = 'none';
        document.getElementById('Age2').style.display = 'none';
}

function hydeOverlayAreaWealth(){
    var button1 = document.getElementById('areaWealth');
    var button6 = document.getElementById('areaWealth2');
        // Code to execute when the button is clicked
        document.getElementById('overlay').style.display = 'none';
        compareSocial(button1.innerText, button6.innerText);      
          console.log(button1.innerText);
          document.getElementById('areaWealth').style.display = 'none';
        document.getElementById('areaWealth2').style.display = 'none';

}

function hydeOverlayAreaPop(){
    var button1 = document.getElementById('areaPop');
    var button6 = document.getElementById('areaPop2');
        // Code to execute when the button is clicked
        document.getElementById('overlay').style.display = 'none';
        compareSocial(button1.innerText, button6.innerText);      
          console.log(button1.innerText);
          document.getElementById('areaPop').style.display = 'none';
        document.getElementById('areaPop2').style.display = 'none';

}

function hydeOverlayTotal(){
    var button1 = document.getElementById('total');
    var button6 = document.getElementById('total2');
        // Code to execute when the button is clicked
        document.getElementById('overlay').style.display = 'none';
        compareSocial(button1.innerText, button6.innerText);      
          console.log(button1.innerText);
          document.getElementById('total').style.display = 'none';
          document.getElementById('total2').style.display = 'none';

}


function compareSocial(value1, value2){
    console.log(value1);
    console.log(value2);
    
    // Split the string at the colon
    var parts1 = value1.split(':');
    var parts2 = value2.split(':');
    // Get the second part (index 1), which is the number
    var numberString1 = parts1[1];
    var numberString2 = parts2[1];

    // Trim any leading or trailing whitespace and parse to integer
    var playerPoints1= parseInt(numberString1.trim());
    var playerPoints2= parseInt(numberString2.trim());
    
    console.log(playerPoints1); // This will log '9'
    console.log(playerPoints2); // This will log '9'

    if(playerPoints1 > playerPoints2){
        teamTwo = teamTwo - 1;
        updateteamTwoDisplay();
        setTimeout(() => {document.getElementById('overlay').style.display = 'block';},"2500");
        
    }
    else if (playerPoints1 < playerPoints2){
        teamOne = teamOne - 1;
        updateteamOneDisplay();
}
    else if (teamOne == teamTwo){
        console.log(playerPoints1);
        console.log(playerPoints2);
    }

    
}

function updateteamOneDisplay() {
    document.getElementById("teamOne").textContent = teamOne;
  }

  function updateteamTwoDisplay() {
    document.getElementById("teamTwo").textContent = teamTwo;
  }
