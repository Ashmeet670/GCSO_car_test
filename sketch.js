var car
var wall
var speed
var weight
var deformation


function setup() {
  createCanvas(1400,400);
  
  wall = createSprite(1300,200,60, height/2)
  wall.shapeColor = color(0,0,0)

  speed = Math.round(random(55,90))
  weight = Math.round(random(400,1500))

  car  = createSprite(50,200,50,50)
  car.velocityX = speed

}

function draw() {
  background("lightblue");  
  
  carCollided()


  drawSprites();
}

function carCollided(){
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0
    deformation = 0.5*weight*speed*speed/22500

    if(deformation > 180){
      rating = "Lethel for passangers"
      car.shapeColor = color(255,0,0)
    }
    else if(deformation > 80 && deformation < 180) {
      rating = "Average for passangers"
      car.shapeColor = color(239,230,0)
    }
    else if (deformation < 80){
      rating = "Good for passengers"
      car.shapeColor = color(0,255,0)
    }
      

    textSize(20)
    fill("black")
    text("Weight: "+ weight + " Kg",50,150)
    text("Speed: " + speed + " Kph",50,200)
    text("Deformation: " + deformation , 50,250)
    text("Rating: " + rating , 50,300)
  }
}