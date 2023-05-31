let speed = 60; 
const speedElement = document.getElementById('speed'); 

function increaseSpeed() {
  speed += 10; 
  speedElement.innerHTML = `${speed} км/ч` 
}

function decreaseSpeed() {
  speed -= 10; 
  speedElement.innerHTML = `${speed} км/ч` 
}

let temperature = 20; 
  const temperatureElement = document.getElementById('temperature'); 

  function increaseTemperature() {
    temperature += 1; 
    temperatureElement.innerHTML = `${temperature}°` 
  }

  function decreaseTemperature() {
    temperature -= 1; 
    temperatureElement.innerHTML = `${temperature}°` 
  }

  let diskSize = 19; 
  const diskSizeElement = document.getElementById('diskSize'); 

  function increaseDiskSize() {
    if (diskSize < 21) { 
      diskSize += 2; 
      diskSizeElement.innerHTML = `${diskSize}` 
    }
  }

  function decreaseDiskSize() {
    if (diskSize > 19) { 
      diskSize -= 2; 
      diskSizeElement.innerHTML = `${diskSize}` 
    }
  }

