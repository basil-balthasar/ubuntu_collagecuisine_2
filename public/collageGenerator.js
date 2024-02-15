//canvas infos
let cnv
let cnvX = 1080
let cnvY = 1920

let blendModes

function setup(){
    //setup io socket connection
    socket = io.connect("http://localhost:3000")
    socket.on("data", getData);

    //create canvas
    cnv = createCanvas(windowWidth, windowHeight)
    ar = windowHeight*windowWidth
    cnv.style('display', 'block')
    //cnv.position(windowWidth/2-cnvX/2, windowHeight/2-cnvY/2)
    background(250, 0, 200)

    //general setups
    angleMode(DEGREES)
    blendModes = [BLEND, DIFFERENCE, SCREEN, BURN]
    myBackground = new ImageObject(true, backgroundImages[0], [0,0], 1, 0)
    foreground = new ImageObject(false, foregroundImages[0], [0,0], 1, 0)
    layerOne = new ImageObject(true, layerOneImages[0], [300,300], 0.1, 45)
    layerTwo = new ImageObject(false, layerTwoImages[0], [0,0], 1, 0)
    layerThree = new ImageObject(false, layerThreeImages[0], [0,0], 1, 0)
}


function draw(){
  clear()
  //background
  if(myBackground.isOn == true){
    //console.log(myBackground.position[0] + " ¦ " + myBackground.image.width*myBackground.scale/myBackground.image.height/ar)
    image(myBackground.image, 0, 0, width, height, myBackground.position[0], myBackground.position[1], myBackground.image.height/myBackground.scale/width*height, myBackground.image.height/myBackground.scale, COVER, CENTER, CENTER)
    //image(myBackground.image, 0, 0, width, height, myBackground.position[0], myBackground.position[1], myBackground.image.width/myBackground.scale, myBackground.image.width/myBackground.scale*myBackground.ar, COVER, LEFT, TOP)
  }else{
    background(backgroundColor, 255)
  }
  
    for(let l = 0; l < layerZOrder.length; l++){
      switch(layerZOrder[l]){
        case 0:
          if(foreground.isOn == true){
            drawFg()
          }
          break;
        case 1:
          if(layerOne.isOn == true){
            drawLayerOne()
          }
          break;
        case 2:
          if(layerTwo.isOn == true){
            drawLayerTwo()
          }
          break;
        case 9:
          break;              
      }
    }
}

function drawFg(){
  image(foreground.image, 0, 0, width, height, foreground.position[0], foreground.position[1], foreground.image.height/foreground.scale/16*9, foreground.image.height/foreground.scale, COVER, CENTER, CENTER)
}

function drawLayerOne(){
  push()
    if(layerOne.blendMode != undefined){
      blendMode(layerOne.blendMode)
    }
    translate(layerOne.position[0], layerOne.position[1])
    rotate(layerOne.rotation)
    image(layerOne.image, -layerOne.image.width*layerOne.scale/2, -layerOne.image.width*layerOne.scale*layerOne.ar/2, layerOne.image.width*layerOne.scale, layerOne.image.width*layerOne.scale*layerOne.ar)
    blendMode(BLEND)
  pop()  
}

function drawLayerTwo(){
  push()
    blendMode(layerTwo.blendMode)
    translate(layerTwo.position[0], layerTwo.position[1])
    rotate(layerTwo.rotation)
    image(layerTwo.image, -layerTwo.image.width*layerTwo.scale/2, -layerTwo.image.width*layerTwo.scale*layerTwo.ar/2, layerTwo.image.width*layerTwo.scale, layerTwo.image.width*layerTwo.scale*layerTwo.ar)
    blendMode(BLEND)
  pop()  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}