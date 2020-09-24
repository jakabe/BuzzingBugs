
var bugs = [];
var stick = [];
function setup(){
    ellipseMode(CENTER);
    createCanvas(500,500);
    for(var i = 0 ; i < 50 ; i++){
        var b =  new bug();
        bugs.push(b);
    }
    // for( var i = 0 ; i < 10 ; i++){
    //     var s = createVector(100+i*15,100+i*10);
    //     stick.push(s);
    // }
    //stick.push(createVector(100,100));
    //stick.push(createVector(400,400));
}

function draw() {
    background(0,0,0);
    // b.display();
    // b.flapWings();
    // b.move();
    // strokeWeight(4);
    // stroke(160,82,45); //brown
    // for(var j = 1; j < stick.length; j++){
    //     line(stick[j-1].x,stick[j-1].y,stick[j].x,stick[j].y);
    // }
    

    for(var i = 0 ; i < bugs.length ;i++){
        // for(var j = 0; j < stick.length; j++){
        //     bugs[i].find( stick[j] );
        
        // }
       
        bugs[i].display();
        bugs[i].flapWings();

        
        bugs[i].move();
       
        bugs[i].checkBoundary();
        
    }
   
}


class bug {
    constructor(){
      
        this.pos = createVector(random(0,width),random(0,height));
        this.leftWingPos = createVector(-30,0);
        this.rightWingPos = createVector(30,0);
        this.radius = 20;

        this.c = color( random(64,255) ,random(64,255),random(64,255) );
        //console.log(this.pos);
        this.theta = 0;
        this.dt = 0.2;

        this.dir = createVector(random(-1,1),random(-1,1));
        
        this.hover = false;
    }

    display(){
        //console.log(this.pos.x);
        noStroke();
        fill(this.c);
        ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
        
        
        
    }

    flapWings(){
        strokeWeight(2);
        stroke(255);
        push();
        translate(this.pos.x,this.pos.y);
        rotate(-PI/2);
            push();
                rotate (-this.theta+PI/2);
                line(0,0,20,0);
            pop();
            push();
                rotate (this.theta-PI/2);
                line(0,0,20,0);
            pop();
        pop();
        if(this.theta > PI/4 ){
            this.dt*=-1;
        }

        if(this.theta < -PI/4){
            this.dt*=-1;
        }

        this.theta += this.dt;
    }


    move(){
          
        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;
           
        
    }

    checkBoundary(){
        if(this.pos.x > width || this.pos.x < 0){
            this.dir.x *=-1;
        }
        if(this.pos.y > height || this.pos.y < 0){
            this.dir.y *=-1;
        }
    }

    find(thing){
        let distance = p5.Vector.dist(this.pos, thing);
        if(distance < 20){
            console.log("found thing!");
            // noFill();
            // stroke(255,0,0);
            // strokeWeight(1);
            // circle(this.pos.x,this.pos.y,50);
            
        }

        
        
    }

    
    
    
}

