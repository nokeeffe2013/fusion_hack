var teamOne = 10;
var teamTwo = 10;
let card_Ids = [];
let opposition_ids = ['nts','rs','bp','pm']
var pointerOne = 0;
var pointerTwo = 0;


window.onload = function() {
  var queryParams = new URLSearchParams(window.location.search);
  var cardIdsParam = queryParams.get('card_ids');
  var cardIds = JSON.parse(cardIdsParam);
  teamOne = cardIds.length;
  updateteamOneDisplay();
  teamTwo = opposition_ids.length;
  updateteamTwoDisplay();
  card_Ids = cardIds;
  loadCard(card_Ids[pointerOne], 'card1');
  loadCard(opposition_ids[pointerTwo], 'card2');
}



function hydeOverlaySocial(){
  console.log("social")
    var button1 = document.getElementById('card1').querySelector('#social').textContent;
    var button6 = document.getElementById('card2').querySelector('#social').textContent;
    compareSocial(button1, button6);  
    document.getElementById('social').style.display = 'none';
    document.getElementById('card2').querySelector('#social').style.display = 'none';
}

function hydeOverlayAge(){
  var button1 = document.getElementById('card1').querySelector('#Age').textContent;
    var button6 = document.getElementById('card2').querySelector('#Age').textContent;
    console.log(button1);
    console.log(button6);
        compareSocial(button1, button6); 
        document.getElementById('Age').style.display = 'none';
        document.getElementById('card2').querySelector('#Age').style.display = 'none';
}

function hydeOverlayAreaWealth(){
  var button1 = document.getElementById('card1').querySelector('#areaWealth').textContent;
    var button6 = document.getElementById('card2').querySelector('#areaWealth').textContent;
    compareSocial(button1, button6);       
          document.getElementById('areaWealth').style.display = 'none';
          document.getElementById('card2').querySelector('#areaWealth').style.display = 'none';

}

function hydeOverlayAreaPop(){
  var button1 = document.getElementById('card1').querySelector('#areaPop').textContent;
    var button6 = document.getElementById('card2').querySelector('#areaPop').textContent;
    compareSocial(button1, button6);      
          document.getElementById('areaPop').style.display = 'none';
          document.getElementById('card2').querySelector('#areaPop').style.display = 'none';

}

function hydeOverlayTotal(){
  var fc = document.getElementById('fantasyCard')
  fc.style.opacity = '0';
  setTimeout(function() {
    fc.style.opacity = '1'; // Revert back to opaque
}, 3000); 

  var button1 = document.getElementById('card1').querySelector('#total').textContent;
    var button6 = document.getElementById('card2').querySelector('#total').textContent;
    compareSocial(button1, button6);   
          document.getElementById('total').style.display = 'none';
          document.getElementById('card2').querySelector('#total').style.display = 'none';

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
        loadBlueCard();
        updateteamTwoDisplay();
        setTimeout(() => {document.getElementById('overlay').style.display = 'block';},"2500");
        
    }
    else if (playerPoints1 < playerPoints2){
        teamOne = teamOne - 1;
        loadRedCard();
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


  function loadRedCard() {
    pointerOne += 1;
    if(card_Ids[pointerOne] == null) {
      console.log("Blue won")
      document.getElementById("position").textContent = "You lost";
      showPopup()
    }
    loadCard(card_Ids[pointerOne], 'card1')
  }

  function loadBlueCard() { 
    pointerTwo += 1;
    if(opposition_ids[pointerTwo] == null) {
      console.log("Red won")
      showPopup()
    }
    loadCard(opposition_ids[pointerTwo], 'card2')
  }


  function loadCard(value, cardVal) {
    if(card_Ids[pointerOne] == opposition_ids[pointerTwo]) {
      loadBlueCard();
      loadRedCard();
      teamOne -= 1;
      teamTwo -= 1;
      updateteamOneDisplay();
      updateteamTwoDisplay();
    }
      fetch('cards.html')
        .then(response => response.text())
        .then(html => {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = html;
          console.log('#' + value)
          const ntsContent = tempElement.querySelector('#' + value).innerHTML;
          const card = document.getElementById(cardVal);
          if (card) {
            card.innerHTML = ntsContent;
            if(cardVal=="card1") {
              const socialButton = card.querySelector('#social');
              socialButton.addEventListener('click', function() {
                hydeOverlaySocial();
              });
              const ageButton = card.querySelector('#Age');
              ageButton.addEventListener('click', function() {
                hydeOverlayAge();
              });
              const wealthButton = card.querySelector('#areaWealth');
              wealthButton.addEventListener('click', function() {
                hydeOverlayAreaWealth();
              });
              const popButton = card.querySelector('#areaPop');
              popButton.addEventListener('click', function() {
                hydeOverlayAreaPop();
              });
              const totalButton = card.querySelector('#total');
              totalButton.addEventListener('click', function() {
                hydeOverlayTotal();
              });
            } else {
            }
          } else {
            console.error('Element with id "card" not found.');
          }
        })
        .catch(error => console.error('Error fetching cards.html:', error));

  }

  function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }