                                            // Class - countdown

    // Criando um exemplo real
        // criando um plugin (por meio de uma classe) que faz contagem regressiva para uma data atribuida. 
        // Por exemplo podemos usar a data do natal e ele vai retornar um objeto mostrando quantos dias, minutos, horas...

    
//-----------------------------------------------------------------------------------------------------

import Countdown from './countdown.js';

const diasParaONatal = new Countdown('24 December 2025 23:59:59 GMT-0300') //se não passar GMT ele usa a hora local da máquina

console.log(diasParaONatal)

console.log(diasParaONatal._futureDate)

console.log(diasParaONatal._timeStampDiff)

console.log(diasParaONatal.days)

console.log(diasParaONatal.hours)

console.log(diasParaONatal.minuts)

console.log(diasParaONatal.seconds)

console.log(diasParaONatal.total)





