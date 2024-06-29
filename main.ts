// object oriented programming (oops)//

//ik programming krny ka tarika hai sara data wo ik hi object k under hoty hai
// variable ko ham bolty hai atribute

//ik jo hamy faida hota hai hamara code achy sy structure ho jata hai
//ham ik class bana dy ty hai hm is ko bar bar reused kr sakty hai
//is ko ham maintain bhi kr sakty hai asani sy
//is k liy if else condition variable and datatype any chy

//properties key valus pare hoty hai
//is ki bunyad 4 pilar pr hai
//ham classes k vtherw object bana ty hai 
///classes kia hai blue print of object
//inharitins mean yr ye inharitins hai apny father k
//scalaibity ka matlab hai 
//k is ki jo maintain ho gi na chizo ki wo bhot easy hoti hai
//prequisites for learning oop?
//type or interface mai difference?

let person1 ={
    name: "neha",
    age: 17,
    //applying method
    sayName :function (){
        console.log(`my name is${this.name}`);
        
    }
}
person1.sayName();

//another example

const person = {
    firstname : "neha",
    lastname: "bilal",
    id: 1234,

    //applaying method

    fullname : function() {
        console.log(this.firstname + " " + this.lastname);

        //if used only this console.log we will get the entire of object data
        console.log(this);
        
        
    }

};

person.fullname();