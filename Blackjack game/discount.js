let age = 88;

let discount = {
     free: "you'r age is less than 6 you get free ticket",
     child:"you get child discount",
     student:"you get student discount",
     full:"you should pay full price",
     seniorCitizen:"you get sinior citizen discount"

};

function countDiscount(){
    if(age < 6){
        console.log(discount.free);
    }else   if(age >= 6 && age <= 17){
        console.log(discount.child);
    }else  if(age >= 18 && age <= 26){
        console.log(discount.student);
    }else  if(age >= 27 && age <= 66){
        console.log(discount.full);
    }else  if(age >= 67){
        console.log(discount.seniorCitizen);
    }
}

countDiscount();