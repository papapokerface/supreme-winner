const style1F = () => {
    let element1F = document.getElementById("p1");
    element1F.classList.toggle("style1");
    element1F.classList.toggle("style2");
    console.log('wiz');
  }
  const animate1F = () => {
     //the h1 element has the id in it the next line gets it by the id then adds event listeners
     const element = document.getElementById("watchme");
  element.addEventListener("animationstart", listener, false);
  element.addEventListener("animationend", listener, false);
  element.addEventListener("animationiteration", listener, false);
  //this line adds the class name to the h1 element, all the rest of the animation is configured in the css.
  //the css is based on the class name so it kicks off once the class name is added to the element.
  element.className = "slidein";
  //this is to log the event lisener on the page and in console.
  function listener(event) {
    const l = document.createElement("li");
    switch (event.type) {
      case "animationstart":
        l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
        console.log('first iteration');
        break;
      case "animationend":
        l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
        console.log('last iteration');
        break;
      case "animationiteration":
        l.textContent = `New loop started at time ${event.elapsedTime}`;
        console.log('next iteration');
        break;
    }
    document.getElementById("output").appendChild(l);
  }
  console.log('max');
  }
  //Next section - this is for moving the block
  const myMove = () => {
     let id = null;
     const elem = document.getElementById("animate");   
     let pos = 0;
     clearInterval(id);
     id = setInterval(frame, 5);
     function frame() {
       if (pos == 350) {
         clearInterval(id);
       } else {
         pos++; 
         elem.style.top = pos + "px"; 
         elem.style.left = pos + "px"; 
       }
     }
  }