class Ground{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 200, 20, options);
        this.width = 200;
        this.height = 20;
        this.image = loadImage("sprites/ground.png");
        World.add(world, this.body);
      }
      display(){
        push ();

        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop ();
      }
}