// Create a class Mkulima that will keep a list of farms,
// grocery vendors and products. A single farm record should contain id, 
// farm name, farmer, phone number and address.
// A single grocery vendor record should contain id, store name and phone number.
// A product should have id, name and price fields. 
  class Mkulima {
  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm= function(farmId,name,farmer,phone,address){
            this.farms.push({farmId,name,farmer,phone,address})
      }
      this.removeFarm=function(id){
         let locateFarm= this.farms.find(item=>item.farmId===id)
         let farmIndex=this.farms.indexOf(locateFarm)
         this.farms.splice(farmIndex,1)
      }
      this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
              let locateFarm= this.farms.find(item=>item.farmId===oldId)
              locateFarm.farmId = newFarmId
              locateFarm.name=newName
              locateFarm.farmer=newFarmer
              locateFarm.phone=newPhone
              locateFarm.address=newAddress
      }
      this.getFarm=function(id){
          console.log(this.farms.find(object=>object.farmId===id))
      }
      this.addProduct= function(productId,name,price){
          this.farms.push({productId,name,price})
    }
    this.removeProduct=function(id){
       let productIndex= this.products.findIndex(item=>item.productId===id)
       this.farms.splice(productIndex,1)
    }
    this.updateProduct=function(oldId,newId, newName, newPrice){
            let product= this.products.find(item=>item.productId===oldId)
            product.farmId=newId
            product.name=newName
            product.farmer=newPrice
    }
    this.getProductb=function(id){
      console.log(this.products.find(product=>product.farmId===id))
     }
  
  
    this.printProducts=function(){
      console.log(this.products)
     }
     this.calculateOrderCost=function(id,quantity){
      let product= this.products.find(item=>item.productId===id)
      console.log(`For ${quantity} of ${product.name}, the cost of your order is ${product.price*quantity}`)
      this.orders.push(product)
      this.order
  
     }
  }
  }
  
  let Mkuli= new Mkulima()
  Mkuli.addFarm("10","Tea farm","Kimsong","0790876","Chomisia,Kapsabet")
  Mkuli.addFarm("6","Maize farm","Arap Maiyo","071234567","Kapsisiwa,Kapabet")
  
  
  Mkuli.updateFarm("10","50","wheat farm", "Swabra Kipleting","0720983456","Iten")
  Mkuli.updateFarm("30","50","wheat farm", "lj","0720983456","zimmerman")
  
  console.log(Mkuli.farms)
  
  Mkuli.getFarm("50")
  