class Fedex{
    calculateShipment(details){
        console.log("Fedex",details);
        return '50$'
    }

}


class UPS{
    calculateShipment(details){
        console.log("UPS",details);
        return '150$'
    }
}

class USPS{
    calculateShipment(details){
        console.log("USPS",details);
        return '30$'
    }
}


class Shippment{
    setStrategy(company){
        this.company =company
    }
    mainCalc(details){
        return this.company.calculateShipment(details)
    }
}

var fedex1=new Fedex()
var ups1=new UPS()
var shipmmentObj=new Shippment()

var details={
    from:"cairo",
    to:"alex",
    weight:"100kg"

}

shipmmentObj.setStrategy(fedex1)
console.log(shipmmentObj.mainCalc(details)); 

shipmmentObj.setStrategy(ups1)
console.log(shipmmentObj.mainCalc(details));