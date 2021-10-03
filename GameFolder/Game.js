    // !!Just a warning!!

    // The coments made is done in half serious and half joking manner. Some of it i didnt know what to write so i wrote something in a joking manner. 
    // Probberly gonna change it at some point to what the code actually do.
    
    
    window.onload=function() {
        canv=document.getElementById("move"); //Converses with the id of the canvas so the game is made inside its borders.
        ctx=canv.getContext("2d") // Makes the game seen in 2d. Anything else not possible in a browser with this game atm. 
        document.addEventListener("keydown",keyPush); // need to make is possible to moves by keypush "Arrows"
        setInterval(game,1000/15); // Start up time of game as in speed of the game "10/15 = Snake goes BRRRRRRR"
    }
        px=py=10; // Start position of the snake
        gs=tc=20; // Size of "invisible" borders which at "20" is alined with the border of width and height.
        ax=ay=15; // Start position of the dot
        xv=yv=0; // If removed games gone. Interesting results if number is changed from 0.
        trail=[]; // If removed red dot and Snake gone.

        function game() {
       px+=xv; // If removed the snake is no longer able to go horizontal.
       py+=yv; // if removed the snake is no longer able to go vertical.
       if(px<0) { // Borders: If snake hits right it come from left
           px= tc-1; // if hit top it come from below
       }             // and so on.
       if(px>tc-1) { // "test if possible to make borders solid."
          px= 0;
       } 
       if(py<0) {
           py= tc-1;
       } 
       if(py>tc-0) {
         py= -1;
       } 
        ctx.fillStyle="blue"; //Background color for the "Game".
        ctx.fillRect(0,0,canv.width,canv.height);

       ctx.fillStyle="lime"; // Color on the "Snake".
       for(var i=0; i<trail.length;i++) {
            ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
            if (trail[i].x==px && trail[i].y==py) {//39+40 if snake hits itself make snake 5 long again.
                tail = 5; //Length of the snake from start.
            }
       }
       trail.push({x:px,y:py});
       while(trail.length>tail) { // Snake Trail can't move if removed.
           trail.shift();
       }

       if (ax==px && ay==py) {
                tail++; // When Snake hits red dot. Add dot to Snake's Tail.
                ax=Math.floor(Math.random()*tc); // Make "red dot" apear RNG on "x-axis".   // if either is removed = Dot will only spawn on the line its currently at
                ay=Math.floor(Math.random()*tc); // Make "red dot" apear RNG on "y-axis".   // wich is either horizontal or vertical
            }
      
       ctx.fillStyle="red"; //Color on the "Dot".
       ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
    }
    function keyPush(evt) { // Key Event!
        switch(evt.keyCode) { // Value of Arrows and Space!
            case 32: // Value for Space. Makes Snake Stop in its place. "Possible to make a hard maze game with this"
                xv=0;yv=0 // Stop at X and Y Axis. Possible to use for "moving game or something"
                break;
            case 37: // Value for Left
                xv=-1;yv=0; // makes it go -1 of X-axis which is Left.
                break;
                case 38: // Value for Up
                console.log("px"+px)
                xv=0;yv=-1; // makes it go -1 of Y-axis which is Up.
                break;
            case 39: // Value for Right
                xv=1;yv=0; // makes it go 1 of Y-axis which is Right.
                break;
            case 40: // Value for Down
            console.log("py"+py)
                xv=0;yv=1; // makes it go 1 of Y-axis which is Down.
                break;
            }
    }