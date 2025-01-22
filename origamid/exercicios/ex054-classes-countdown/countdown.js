export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate
    }
    get actualDate(){
        return new Date()
    }
    get _futureDate(){
        return new Date(this.futureDate)
    }
    get _timeStampDiff(){ //comparação das datas por meio do getTime de 1970
        return this._futureDate.getTime() - this.actualDate.getTime()
    }
    get days(){ //para converter em dias: total milisegundos/total milisegundos que existe em um dia 24hrs, 60 min, 60seg, 1000milesegundos;
        return Math.floor(this._timeStampDiff / (24*60*60*1000)) // Math.floor arredonda pra baixo
    }
    get hours(){ //para converter em dias: total milisegundos/total milisegundos que existe em um dia 24hrs, 60 min, 60seg, 1000milesegundos;
        return Math.floor(this._timeStampDiff / (60*60*1000)) // Math.floor arredonda pra baixo
    }
    get minuts(){ //para converter em dias: total milisegundos/total milisegundos que existe em um dia 24hrs, 60 min, 60seg, 1000milesegundos;
        return Math.floor(this._timeStampDiff / (60*1000)) // Math.floor arredonda pra baixo
    }
    get seconds(){ //para converter em dias: total milisegundos/total milisegundos que existe em um dia 24hrs, 60 min, 60seg, 1000milesegundos;
        return Math.floor(this._timeStampDiff / 1000) // Math.floor arredonda pra baixo
    }
    get total(){
        const days = this.days
        const hours = this.hours % 24 //return seria {days: 336, hours: 8073}, porém as horas estariam erradas e o macete para saber quantas horas faltam é dividir por 24, seria igual a 336.375, logo, as horas que faltam são 375, e para pegar o que resta de uma divisão se usa o %, logo, temos 9
        const minuts = this.minuts % 60
        const seconds = this.seconds % 60

        return{
            days, //mesma coisa que days: days, porque a chave o valor tem o mesmo nome
            hours, //{days: 336, hours: 9}
            minuts,
            seconds,
        }
    }
}