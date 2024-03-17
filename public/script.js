var total_points = 750;

let draggedItems = [];

let card_id = [];

updatePointsDisplay()

displayPopup()

function updatePointsDisplay() {
    document.getElementById("pointsValue").textContent = total_points ;
  }
  


function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    if (!draggedItems.includes(event.target.id)) {
        event.dataTransfer.setData("text", event.target.id);
      } else {
        event.preventDefault();
      }
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data)
    var clone = draggedElement.cloneNode(true) 
    var playerPoints = parseInt(draggedElement.getAttribute('points') || 0);

    console.log(data)
    card_id.push(data)

    if(event.target != event.currentTarget) {
        var location = draggedItems.indexOf(event.currentTarget);
        var playerPoints = parseInt(event.currentTarget.getElementById(data).getAttribute('points') || 0);
        updatePoints(-playerPoints);
        draggedItems.splice(location, 1)
    }

    
    if(total_points - playerPoints >= 0) {
        updatePoints(playerPoints);
        event.target.appendChild(clone)
    }
    draggedItems.push(data)
  }

  function updatePoints(amount) {
    total_points -= amount
    updatePointsDisplay()
  }

  function startBattle() {
    window.open('battle.html?card_ids=' + JSON.stringify(card_id),'_blank');
  }

function displayPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function answerQuestion(answer) {
  if (answer === 49) {
      console.log("Correct! 49%");
      total_points += 100;
      updatePointsDisplay()
  } else {
      console.log("Incorrect answer");
  }
  closePopup();
}