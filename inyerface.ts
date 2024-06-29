//interface method

type person = {
   readonly name:string;
    age: number;
    isstudent: boolean;
}

interface person1 {
   readonly name: string;
    age: number;
    isstudent: boolean;
};

interface person1 {
   readonly name: string;
}
// interface person2 {
//     name: string;
//     age: number;
// }
interface person2 extends person1 {

    age: number
}

let neha: person2 = {
    name: "neha" ,
    age: 17

};

//neha.name = "humza"

type username = string

interface username1 {
    
}