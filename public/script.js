var total_points = 1000;

function updatePointsDisplay() {
    document.getElementById("pointsValue").textContent = total_points ;
  }
  
updatePointsDisplay();


function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data)
    var clone = draggedElement.cloneNode(true) 
    var playerPoints = parseInt(draggedElement.getAttribute('points') || 0);

    if(total_points - playerPoints >= 0) {
        updatePoints(playerPoints);
        event.target.appendChild(clone)
    }
  }

  function updatePoints(amount) {
    total_points -= amount
    updatePointsDisplay()
  }