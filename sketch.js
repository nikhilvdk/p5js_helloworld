// Hello World p5.js NikhilV
// Jan 23 2018

var s=3;
var h = 550;
var x = 550;
var y = h;
var back = 1;
var clr;
var angle = 0;
var angle2 = 0;
var distance;
var isoversun;
var blackhole;
var frameclick;

function setup(){
    createCanvas(1300, 550);
    clr = color(107, 142, 35);
    rectMode(CENTER);
    
}


function draw(){

    distance = dist(mouseX, mouseY, 625, 254);
    

    background(255, 255, 255);

    if (mouseX < 200) {
        cursor(HAND);
      } else {
        cursor(WAIT);
      }
    

    //sun
    push();
    noStroke();
    fill(228, 178, 17);
    polygon(630,250,80+sin(frameCount/30)*7,12);
    pop();
   

    //saturn orbit
    push();
    translate(630, 250);
    rotate (angle);
    saturn();
    angle = angle + 0.01;
    pop();


    push();
    translate(630, 250);
    rotate (angle2);
    earth();
    angle2 = angle2 + 0.006;
    pop();

    //namebounce
    push();
    if(x>700){
        back=-1;
        clr = color(255, 0, 0);
    }
    if(x<550){
        back=1;
        clr = color(107, 142, 35);
    }
    fill(clr);
    stroke(clr);
    strokeWeight((frameCount % 16));
    ellipse(x, 10, 10, 10);
    x = x + back*5;
    pop();

    if (distance< 75) {
        isoversun = true;
      } else {
        isoversun = false;
      }


    // cosmicbackground();
    if(blackhole == true){
    push();
    noStroke();
    fill(0,0,0);
    ellipse(630,250,80+(frameCount-frameclick),80+(frameCount-frameclick));
    pop();
    }
}
//blackhole creation
function mousePressed() {
    if(isoversun == true){
        blackhole = true; 
        frameclick = frameCount;        
    } 
}
//save the day/stop
function keyPressed(){
    noLoop();
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
endShape(CLOSE);
}

function cosmicbackground(){
    for (var i = 0; i < 50; i++) {
    push();
    stroke(random(255));
    translate(random(width), random(height));
    rotate(random(2*PI));
    scale(random(1.5), random(1.5));
    ellipse(-5,5,3,3);
    fill('yellow');
    stroke('yellow');
    pop();
  }
}

  function saturn(){
    //ring
    push();
    noFill();
    translate(250, 0);
    rotate(0.4);
    stroke(255, 204, 0);
    strokeWeight(3);
    ellipse(0,0,95+(sin(frameCount/10)*30),10);
    translate(-250, -0);
    pop();

    //saturn
    push();
    noStroke();
    fill(255, 115, 0);
    ellipse(250,0,50,50);
    pop();
  }

  function earth(){
    push();
    noStroke();
    fill(20, 115, 240);
    if(s>=0){
        polygon(150,0,s,6);
        s = s-1;
        if(s==0){
            s=15;
        }
    }
    pop(); 
  }


  function explode(){
    push();
    fill(0,0,0);
    stroke(0,0,0);
    strokeWeight(8);
    ellipse(frameCount, 200, 100, 50+(frameCount/2));
    pop();
  
}