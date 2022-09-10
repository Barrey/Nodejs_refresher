function Stopwatch(){
    let startTime, endTime, running, duration = 0

    this.start = () => {
        if (running){
            console.log("Timer already started");
            return;
        }
        startTime = performance.now()
        running = true;
    }

    this.stop = () => {
        if (!running){
            console.log("Timer not started yet");
            return;
        }
        endTime = performance.now(); 
        const second = (endTime - startTime) / 1000;
        if (!duration){
            duration = second;
        } else {
            duration += second;
        }
        running = false;
    }

    this.reset = () => {
        startTime, endTime, running, duration = 0
    }
     
    Object.defineProperty(this, 'duration', {
          get: function() { return duration }
    })
}