//1
console.log(10+101+"130") // Из-за выражения в ковычках итоговое значение становится строкой и вместо сложения действует конкатинация строк
console.log(110+103+ +"1") // Из-за того что перед строкой стоит плюс, она становится числом
console.log(610/-"") // Из-за того что пустая строка значит 0, то при делении на ноль получаем бесконечность
console.log(1 /+"2,5") // Тк в дробных числах в JS используется точка, а не запятая то преобразование в число с помощью + не работает и в итоге получаем NaN

//2
// let a = 1, b = 1, c, d; 
// c = ++a; alert(c); // 2 
// d = b++; alert(d); // 1 
// c = (2+ ++a); alert(c); // 5
//  d = (2+ b++); alert(d); // 4 
//  alert(a); // 3 
//  alert(b); // 3
 // Код дает именно такие результаты, т.к используется префикс - сначала увеличивает число на 1, а после выполняет операции с ним, и постфикс - сначала выполняет операцию с числом, а после увеличивает его на 1

 //3
 const x = -5, y = -3
 if (x >= 0 && y >= 0) console.log(x+y)
 if (x < 0 && y < 0) console.log(x-y)
 if (x * y < 0) console.log(x*y)

 //4 
 const x2 = 2, y2 = 4
 function Summ (x,y) {
   return x+y
 }
function Raznost (x,y) {
  return x-y
}
function Delenie (x,y) {
  return x/y
}
function Proizv (x,y) {
  return x*y
}

//5 
function MyFunc(x,y,operation) {
  switch (operation) {
    case "Сложить":
      Summ(x,y)
    break
    case "Вычесть":
      Raznost(x,y)
    break
    case "Умножить":
      Proizv(x,y)
    break
    case "Разделить":
      Delenie(x,y)
    break
    default:
      console.log("Такой операции не существет.")
    break
  }
}

//6 
function Piramida(x) {
  let result = ""
  for ( let i = 0; i < x; i++) {
    result += "*"
    console.log(result)
  }
}