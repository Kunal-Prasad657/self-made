class NPC {
    constructor(){
        
        this.image=loadImage("New folder/Boy.png");
        this.image1= loadImage("New folder/Girl.png")
        this.image2= loadImage("New folder/Man.png");
        
    }
    display(){
        image (this.image,600,600,150,150)
        image (this.image1,200,630,150,150)
        image (this.image2,500,620,150,150)
    }
}