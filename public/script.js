var total_points = 750;

let draggedItems = [];

function updatePointsDisplay() {
    document.getElementById("pointsValue").textContent = total_points ;
  }
  
updatePointsDisplay();


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