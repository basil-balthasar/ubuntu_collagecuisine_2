let numberOfImages = [9, 16, 15, 15, 0]

//image arrays
let backgroundImages = []
let foregroundImages = []
let layerOneImages = []
let layerTwoImages = []
let layerThreeImages = []

//construct image object
function ImageObject(isOn, image, position, scale, rotation, blendMode){
    this.isOn = isOn
    this.image = image
    this.position = position
    this.scale = scale
    this.rotation = rotation
    this.blendMode = blendMode
    if(this.image!=undefined){
        this.ar = this.image.height/this.image.width
    }
}

//load images into arrays
function preload(){
    for(let b = 0; b<numberOfImages[0]; b++){
        backgroundImages[b] = loadImage("./Images/BG/"+(b).toString()+".png")
    }
    for(let f = 0; f<numberOfImages[1]; f++){
        foregroundImages[f] = loadImage("./Images/FG/"+(f).toString()+".png")
    }
    for(let o = 0; o<numberOfImages[2]; o++){
        layerOneImages[o] = loadImage("./Images/ONE/"+(o).toString()+".png")
    }
    for(let t = 0; t<numberOfImages[3]; t++){
        layerTwoImages[t] = loadImage("./Images/TWO/"+(t).toString()+".png")
    }
    for(let h = 0; h<numberOfImages[4]; h++){
        layerThreeImages[h] = loadImage("./Images/THREE/"+(h).toString()+".png")
    }
}
