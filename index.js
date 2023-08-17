const price = 450;
let category;

switch (true){
    case price < 100 :
    category = "low"
    break;
    case price >=100 && price < 500 :
    category = "Medium"
    break;
    case price >= 500 :
    category = "High"
    break;
    
}

console.log(`This product belongs to the ${category} category.`);