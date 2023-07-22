'use strict';

class Fedex{
    calculateShipment(details){
        console.log('Fedex', details);
        return '50$';
    }
}
class UPS{
    calculateShipment(details){
        console.log('UPS', details);
        return '150$';
    }
}
class USPS{
    calculateShipment(details){
        console.log(`USPS ${details}`);
        return '30$';
    }
}

//class to change strategy between classes at run time
class Shipment{
    setStrategy(company){
        this.company = company;
    }
    mainCalc(details){
        return this.company.calculateShipment(details);
    }
}

const fedex = new Fedex();
const ups = new UPS();
const shipmentObj = new Shipment();

const details = {
    from: 'cairo',
    to: 'alex',
    weight: '100kg',
}

shipmentObj.setStrategy(fedex);
console.log(shipmentObj.mainCalc(details));

shipmentObj.setStrategy(ups);
console.log(shipmentObj.mainCalc(details));
