const size = 120;
const unit = "Кб"
switch(unit) {

  case "Гб":  
   let c = size * 1024 * 1024 * 1024
    console.log(c + ' байт')
    break;

    case "Мб":  
   let h = size * 1024 * 1024
    console.log(h + ' байт')
     break;

  case "Кб":  
    let f = size * 1024
    console.log(f + ' байт')
    break;

  case "байт":  
    let j = size 
    console.log(j + ' байт, и что вы хотите от меня?')
    break;

default:
    console.log("Не ну вы ещё Пб напишите для полной красоты(")

    break;
}