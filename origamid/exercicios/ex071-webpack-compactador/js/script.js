// obs: (a ordem de execução importa)
import scrollSuave from "./modules/scroll-suave.js";
scrollSuave();

import initAnimacaoScroll from "./modules/scroll-animacao.js";
initAnimacaoScroll();

import accordionList from "./modules/accordion.js";
accordionList();

import initTabNav from "./modules/tabnav.js";
initTabNav();

import initModal from "./modules/modal.js";
initModal();

import tooltip from "./modules/tooltip.js";
tooltip();

import dropdown from "./modules/dropdown-menu.js";
dropdown();

import initMenuMobile from "./modules/menu-mobile.js";
initMenuMobile();

import initFuncionamento from "./modules/horario-funcionamento.js";
initFuncionamento();

import initFetchAnimais from "./modules/fetch-animais.js";
initFetchAnimais();

import initFetchBitcoin from "./modules/fetch-bitcoin.js";
initFetchBitcoin();

// console.log('testando: npx webpack --entry ./js/script.js -o ./ --watch');

import $ from 'jquery';
import _ from 'lodash';

//testando jquery:
// $('nav').hide();

//testando lodash:
// const diferenca = _.difference(['Banana', 'Uva'], ['Banana', 'Morango']);
// console.log(diferenca); //['Uva']
