
// obs: (a ordem de execução importa)
import scrollSuave from './modules/scroll-suave.js'
scrollSuave()

import initAnimacaoScroll from './modules/scroll-animacao.js'
initAnimacaoScroll()

import accordionList from './modules/accordion.js'
accordionList()

import initTabNav from './modules/tabnav.js'
initTabNav()

import { teste1, teste2 } from './modules/teste.js' //não recomendado de fazer. Tem que usar o mesmo nome da função.
teste1()
teste2()

//import * as teste from './modules/teste.js'  //para importar um arquivo dinamico ou qual vc não saiba o nome. Não precisa saber o que está importando e vai poder usar tudo.
//teste1.teste1() //retorna objeto do tipo modulo