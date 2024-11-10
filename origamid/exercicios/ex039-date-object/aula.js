
                                        // Date Object

    // Date é um tipo de objeto especial para data. (como se fosse o Math de matemática)
    // foi feito no site um horario de funcionamento da empresa "animais" na parte de contato e foi adicionado um css da class aberto da bola verde na pasta geral do css.

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

    //explicação da lógica:


    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana
    console.log(typeof diasSemana) //string e precisa passar para array

    console.log(diasSemana.split(',').map(Number)) //macete para retornar numeros

    const funcionamentoHorario = document.querySelector('[data-horario]')
    const horarioSemaana = funcionamentoHorario.dataset.horario.split(',').map(Number)

    const dataAgora = new Date()
    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours()

    //vamos supor que tem uma array com dias da semana e um dia solto:

    //[1,2,3,4,5]
    //5

    //como verificar se o 5 está dentro da array?

    const teste = [1,2,3,4,5].indexOf(5)
    console.log(teste) //4 (true)

    const teste2 = [1,2,3,4,5].indexOf(6)
    console.log(teste2) //-1 (false) - sempre que passa um valor que não tem na array, ele retorna -1

    //portanto, para verificar se o dia da semana bate:

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1
    console.log(semanaAberto)

    //para verificar o horário:

    if (horarioAgora >= horarioSemaana[0] && horarioAgora < horarioSemaana[1]) {
        console.log('aberto')
    }else {
        console.log('fechado')
    }

    //pra retornar true ou false, pode fazer pelo if mas como é uma lógica simples, melhor fazer ternário

    const horarioAberto = (horarioAgora >= horarioSemaana[0] && horarioAgora < horarioSemaana[1]) ? true:false
    console.log(horarioAberto)

    //juntando dia e hora:

    if ( semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto')
    }