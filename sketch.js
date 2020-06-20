const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = []
var plinkos = []
var colums = 11
var rows = 10

function setup(){
    var canvas = createCanvas(800,1000);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,990,800,10);
    bound = new Bucket(100,940,10,100);
    bound1 = new Bucket(200,940,10,100);
    bound2 = new Bucket(300,940,10,100);
    bound3 = new Bucket(400,940,10,100);
    bound4 = new Bucket(500,940,10,100);
    bound5 = new Bucket(600,940,10,100);
    bound6 = new Bucket(700,940,10,100);
    bound7 = new Bucket(800,940,10,100);
    bound8 = new Bucket(900,940,10,100);

    var spacing = width/colums
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < colums; i++) {
            var x = spacing/2 + i * spacing
            if(j % 2 == 0) {
                x += spacing/2
            }
            var y = spacing + j * spacing
            var p = new Plinko(x,y,4)
            plinkos.push(p);
        }
    }

}
function draw(){
    background(0);
    Engine.update(engine);
    
    if(frameCount%60 == 0) {
    var p = new Particle(random(200,800));
    particles.push(p)
}

for(var i = 0; i < particles.length; i++) {
    particles[i].show();
}
for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
}
    ground.display();
    bound.display();
    bound1.display();
    bound2.display();
    bound3.display();
    bound4.display();
    bound5.display();
    bound6.display();
    bound7.display();
    bound8.display();
}