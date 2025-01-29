                                            // Destructuring - Exercícios

//-----------------------------------------------------------------------------------------------------
    // Extraia o backgroundColor, color e margin do btn
    const btn = document.querySelector('button');
    const btnStyles = getComputedStyle(btn);

    console.log(btnStyles)

    const {backgroundColor, color, margin} = btnStyles

    console.log(backgroundColor)
    console.log(color)
    console.log(margin)
//-----------------------------------------------------------------------------------------------------

    // Troque os valores das variáveis abaixo
    let cursoAtivo = 'JavaScript';
    let cursoInativo = 'HTML';

   [cursoAtivo, cursoInativo] = [cursoInativo,cursoAtivo]

   console.log(cursoAtivo)
   console.log(cursoInativo)



    //se tentasse fazer assim, daria errado:

    cursoAtivo = cursoInativo // JavaScript = HTML, ou seja, cursoAtivo é HTML, porque js recebe html
    cursoInativo = cursoAtivo // HTML tamném

    console.log(cursoAtivo, cursoAtivo) //HTML HTML - comentar código anterior
//-----------------------------------------------------------------------------------------------------

    // Corrija o erro abaixo
    const cachorro = {
      nome: 'Bob',
      raca: 'Labrador',
      cor: 'Amarelo'
    }

    // const {bobCor: cor} = cachorro;

    const {cor: bobCor} = cachorro;
    console.log(bobCor)
