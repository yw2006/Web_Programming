function Car(make,speed){
    this.make = make
    this.speed = speed
    this.accelerate = function (){
        this.speed += 10
        console.log(this.speed);
    }
    this.brake = function (){
        this.speed -= 5
        console.log(this.speed);
    }
}
const Car1 = new Car("BMW",120)
Car1.accelerate()
Car1.brake()
const Car2 = new Car("Mercedes",95)
Car2.accelerate();
Car2.brake();
