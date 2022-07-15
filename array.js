// //  assignment one
//  var price=30
//  function calculateFruitCost(fruitname,quantity){
//     console.log(`${quantity} ${fruitname }s for kes ${price*quantity}`)

//  }
//  calculateFruitCost("orange",2)
//  calculateFruitCost("mango",3)
// //  using objects





// Using classes
var price=30;
class calculateFruitCost{
   constructor(fruitname,quantity){
      this.fruitname=fruitname
      this.quantity=quantity


   }
}
 var vendo1= new calculateFruitCost("orange" ,3);
console.log(`${vendo1.quantity},${vendo1.fruitname} ${vendo1.quantity*price}Kes`);

// assignmenttwo

 class KioskCalc{
    constructor(fruit,quantity,fruitsPriceList){
        this.fruit=fruit;
        this.price=quantity;
        this.fruitsPriceList={"orange":30,"mango":15,"avaocado":40},
        this.getTotalCost = function(){
      return `${quantity} ${fruit} for KES ${quantity * this.fruitsPriceList.orange}`
       

    }

    
}
 }
 var newbuyer=new KioskCalc("orange",2)
 console.log(newbuyer.getTotalCost())
 
 
 
 