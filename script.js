// Задание
// 1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.

// let a = prompt("Введите первое число", '')
// let b = prompt("Введите второе число", '')

// function comparison(x1,x2) {
//     if (x1 < x2) {
//         return (-1)
//     } else if (x1 > x2) {
//         return (1)
//     } else return (0)
// }

// alert(comparison(a,b))



// 2. Написать функцию, которая вычисляет факториал переданного ей
// числа.

// let value = prompt("Введите число", '')

// function factorial(value) {
//     if (value == 1) {
//         return value
//     }
//     return value*factorial(value - 1)
// }

// alert(factorial(value))



// 3. Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.

// let a = prompt("Введите первую цифру", '')
// let b = prompt("Введите вторую цифру", '')
// let c = prompt("Введите третью цифру", '')

// function convert(x1,x2,x3) {
//     return (x1 + x2 + x3)
// }

// alert(convert(a,b,c))



// 4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.

// let a = prompt("Введите длину прямоугольника", '')
// let b = prompt("Введите ширину прямоугольника", '')

// function squareRect(x1,x2) {
//     if (x1 == 0) {
//         x1 = x2
//     }
//     if (x2 == 0) {
//         x2 = x1
//     }
//     return (x1 * x2)
// }

// alert(`Площадь прямоугольника ${squareRect(a,b)}`)



// 5. Написать функцию, которая проверяет, является ли переданное
// ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.

// let number = +prompt('Введите число', '')

// function perfectNumber(value) {
//     let sum = 0
//     for (let i=1; i<value; i++) {
//         result = value % i
//         if (result == 0) {
//             sum = sum + i
//         }
//     }
//     if (value == sum) {
//         return true
//     } else {
//         return false
//     }
// }

// if (perfectNumber(number) == true && number != 0) {
//     alert('Число совершенное')
// } else {
//     alert('Число несовершенное')
// }



// 6. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

// let numFirst = +prompt('Введите первое число из диапазона', '')
// let numLast = +prompt('Введите последнее число из диапазона', '')
// findPerfect(numFirst,numLast)

// function perfectNumber(value) {
//     let sum = 0
//     for (let i=1; i<value; i++) {
//         result = value % i
//         if (result == 0) {
//             sum = sum + i
//         }
//     }
//     if (value == sum) {
//         return true
//     } else {
//         return false
//     }
// }

// function findPerfect(x1,x2) {
//     for (let j = x1; j <= x2; j++) {
//         if (perfectNumber(j) == true && j != 0) {
//             alert(j)
//         }
//     }
// }



// 7. Написать функцию, которая принимает время (часы, минуты,
// секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как 00.

// let hour = prompt('Введите часы', '')
// let min = prompt('Введите минуты', '')
// let sec = prompt('Введите секунды', '')

// function clock(h,m,s) {
//     if (h == 0 || h == undefined) {
//         h = "0"
//     }
//     if (m < 10 && m > 0) {
//         m = 0 + m
//     }
//     if (m == 0 || m == undefined) {
//         m = '00'
//     }
//     if (s < 10 && s > 0) {
//         s = 0 + s
//     }
//     if (s == 0 || s == undefined) {
//         s = '00'
//     }
//     alert(h + ':' + m + ':' + s)
// }

// clock(hour,min,sec)
// // clock()



// 8. Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.

// let hour = +prompt('Введите часы', '')
// let min = +prompt('Введите минуты', '')
// let sec = +prompt('Введите секунды', '')

// function inSec(h,m,s) {
//     return (h * 3600 + m * 60 + s)
// }

// alert(`Время в секундах ${inSec(hour,min,sec)}`)
   


// 9. Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».

// let sec = +prompt('Введите время в секундах', '')

// function secTotime(value) {
//     let h = Math.floor(value / 3600)
//     let m = Math.floor((value % 3600) / 60)
//     let s = (value % 3600) % 60
//     if (m < 10 && m > 0) {
//         m = '0' + m
//     }
//     if (m == 0) {
//         m = '00'
//     }
//     if (s < 10 && s > 0) {
//         s = '0' + s
//     }
//     if (s == 0) {
//         s = '00'
//     }
//     alert(h + ':' + m + ':' + s)
// }

// secTotime(sec)



// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х
// заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс».

// let day1 = +prompt('Введите число первой даты', '')
// let mon1 = +prompt('Введите месяц первой даты', '')
// let year1 = +prompt('Введите год первой даты', '')
// let day2 = +prompt('Введите число второй даты', '')
// let mon2 = +prompt('Введите месяц второй даты', '')
// let year2 = +prompt('Введите год второй даты', '')

// function diferDate(d1,m1,y1,d2,m2,y2) {
//     const yearSec = 31536000
//     const monthSec = 2629746
//     const daySec = 86400
//     let date1 = y1*yearSec + m1*monthSec + d1*daySec
//     let date2 = y2*yearSec + m2*monthSec + d2*daySec
//     let resultSec = Math.abs(date2 - date1)
//     alert(`Разница в «чч:мм:сс» составляет ${secTotime(resultSec)}`)
// }

// function secTotime(value) {
//     let h = Math.floor(value / 3600)
//     let m = Math.floor((value % 3600) / 60)
//     let s = (value % 3600) % 60
//     if (m < 10 && m > 0) {
//         m = '0' + m
//     }
//     if (m == 0) {
//         m = '00'
//     }
//     if (s < 10 && s > 0) {
//         s = '0' + s
//     }
//     if (s == 0) {
//         s = '00'
//     }
//     return (h + ':' + m + ':' + s)
// }

// diferDate(day1,mon1,year1,day2,mon2,year2)