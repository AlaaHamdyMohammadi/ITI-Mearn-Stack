//Liskov

class Bird{
    eat(){
        console.log('eat');
    }
    fly(){
        console.log('fly');
    }
}

class Eagle extends Bird{

}
class Duck extends Bird{
    
}
