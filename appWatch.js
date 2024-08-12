window.onload = function() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let interval;
    let isRunning = false;

    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const millisecondsDisplay = document.getElementById('tens');
    const startStopButton = document.getElementById('Bstart');
    const resetButton = document.getElementById('breset');
    const lap = document.getElementById('clk');
    const ul = document.getElementsByTagName('ul')[0];
   
/* displaying the laps from html*/
    const displayy = document.querySelector('#showTime');
    const showLap =  document.querySelector('#showLaps');
    const watch = document.querySelector('#watch');
    const span = document.getElementsByTagName('span');
/*Welcome Note */
    let bs =  document.getElementById('Bs');
    let welcome = document.getElementById('wel');
    let note = document.getElementById('note');
    note.style.transition = 'all 1s ease';

    note.addEventListener('mouseover',() =>{
        welcome.style.transition = 'all 1s ease';
        bs.style.transition = 'all 1s ease';
        welcome.innerHTML = 'Welcome To &nbsp';
        bs.style.transform   = 'translateX(100px)';
       
    });
    note.addEventListener('mouseout',() =>{
        welcome.style.transition = 'all 1s ease';
        bs.style.transition = 'all 1s ease';
        welcome.textContent = '';
        note.style.justifyContent = 'center';
        bs.style.tranform = 'translateX(-100px)';
        bs.style.marginLeft='-100px';
    });
    function updateDisplay() {
        hoursDisplay.textContent = hours.toString().padStart(2, '0');
        minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');
        millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
    }

    function startStopwatch() {
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
                let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;  
                let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                secondsDisplay.style.color =`rgb(${r},${g},${b})`;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;  
                let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                minutesDisplay.style.color = `rgb(${r},${g},${10})`;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10);
    }
    function stopStopwatch() {
        clearInterval(interval);
    }
    function size(x,y){
        displayy.style.fontSize = x;
        hoursDisplay.style.fontSize = y;
        minutesDisplay.style.fontSize = y;
        secondsDisplay.style.fontSize = y;
        millisecondsDisplay.style.fontSize = y;
    }
    startStopButton.addEventListener('click', () => {
        if (isRunning) {
            stopStopwatch();
            startStopButton.textContent = 'Start';
        } else {
            startStopwatch();
            startStopButton.textContent = 'Pause';
        }
        isRunning = !isRunning;
    });
    resetButton.addEventListener('click', () => {
        stopStopwatch();
        isRunning = false;
        startStopButton.textContent = 'Start';
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        updateDisplay();
        displayy.setAttribute('class','col-md-12');
        showLap.setAttribute('class','d-none');
        ul.innerHTML = '';
        size('9rem','10rem');
        
    });
  
   
    lap.addEventListener('click',() => { 
        displayy.setAttribute('class','col-md-8');
        showLap.setAttribute('class','col-md-4');
        size('6.1rem','6.5rem');
        const lapp = document.createElement('li');
        (hours>0)?lapp. innerText = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ':' + milliseconds.toString().padStart(2, '0'):lapp. innerText =  minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ':' + milliseconds.toString().padStart(2, '0');
        ul.appendChild(lapp);
                
        let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;  
                let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                lapp.style.color = `rgb(${r},${g},${b})`;
    })
   
};

 //Lap displaying and conting
   /*function addlapDisplay() {
        var  div = document.createElement('div');
        div.setAttribute('class','col-md-4');
        div.setAttribute('id','showLaps');
        var ul = document.createElement('ul');
        ul.setAttribute('id','ul');
        div.appendChild(ul);
        watch.appendChild(div);
         //watch.removeChild('id','showLaps');
   }*/

          /* lap.addEventListener
          //watch.appendChild('id','showLaps');
          if(watch.querySelector('#showLaps') === null) {
            addlapDisplay();
            displayy.setAttribute('class','col-md-8');
            //showLap.setAttribute('class','col-md-4');
            const lapp = document.createElement('li');
            lapp. innerText = minutes + ':' + seconds + ':' + milliseconds;
            //watch.appendChild('id','showLaps');
            ul.appendChild(lapp);
        }*/


