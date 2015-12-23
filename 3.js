// Executable at least with NodeJS
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var visited=[[0,0]]; // List of (x,y) coords
    for (var i = 0; i < line.length; i++) {
        var oldCoord = visited[i];
        switch(line[i]){
            case "^":
                var newCoord = [oldCoord[0],oldCoord[1]+1];
                visited.push(newCoord);
                break;
            case ">":
                var newCoord = [oldCoord[0]+1,oldCoord[1]];
                visited.push(newCoord);
                break;
            case "v":
                var newCoord = [oldCoord[0],oldCoord[1]-1];
                visited.push(newCoord);
                break;
            case "<":
                var newCoord = [oldCoord[0]-1,oldCoord[1]];
                visited.push(newCoord);
                break;
        }
    };
    // Ugly hack of the day: convert coords into strings
    // Reason: Set uses strict equality.
    // Strict equality on similar content but not same objects != fun
    // Fun fact: even arrays are objects in js
    var uniques = new Set();
    uniques.add('0,0');
    for (var i = 0; i < visited.length; i++) {
        uniques.add(visited[i].toString());
    }
    console.log("Santa only: " +uniques.size);
});