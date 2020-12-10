// inheritance = do not repeat yourself (do not write same code in all the files)
//bird is the child class (inherites common properties from the parent class) and has it's own special properties
//base class is the parent class(has all common properties and functions)
class Bird extends BaseClass{
  constructor(x,y){
  	//super transfers all properties of parent class to the child
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
  	//special property of the bird
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //function overriding = having same name function in both parent and child class
    super.display();
  }
}