
                                        // Date Object

    // Date é um tipo de objeto especial para data. (como se fosse o Math de matemática)
    // foi feito no site um horario de funcionamento da empresa "animais"

//-------------------------------------------------------------------------------------------------------
    //new Date()
        //O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

        const agora = new Date();
        agora// Dia da semana, Mes, Dia, Ano, Hora, GMT
        agora.getDate() // Dia
        agora.getDay() // Dia da Semana = de 0 a 6, sendo 0 domingo
        agora.getMonth() // Número dia mês = de 0 a 11, sendo 0 janeiro
        agora.getFullYear() // Ano
        agora.getHours() // Hora
        agora.getMinutes() // Minutos
        agora.getTime() // ms desde 1970
        agora.getUTCHours() - 3 // Brasília

        //const agora = new Date()
        const futuro = new Date('Dec 24 2024 23:59') //da pra passar uma data futura

        console.log(agora) //note que a const agora se atualiza
        console.log(futuro) //Mon Dec 24 2018 23:59:00 GMT+0100 (Horário Padrão da Europa Central)
//-------------------------------------------------------------------------------------------------------

//getTime()
    //quantidade em milisegundos desde 1970

    console.log(agora.getTime()) //1731257573681

    // caso queira saber quanto tempo falta para o natal por exemplo, teria que transformar os ms para dias e tem como passar uma equação para isso:
    
    function transformarDias(tempo) {
         return tempo / (24 * 60 * 60 * 1000) //quantas hrs tem um dia? 24; e cada hr? 60min; e cada min? 60s; e cada s? 1000 ms;
    }

    console.log(transformarDias(agora.getTime())) //20037.706927685183 dias

    //logo, para saber quantos dias faltam para o Natal:

    const diasAgora = transformarDias(agora.getTime())
    const diaNatal = transformarDias(futuro.getTime())

    console.log(`Faltam ${diaNatal - diasAgora} para o Natal`) //Faltam 44.24555546296324 para o Natal

    //portanto o getTime serve para comparar horários.
//-------------------------------------------------------------------------------------------------------

    