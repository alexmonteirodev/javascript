
                                        // Menu mobile

    // É o menu hamburguer feito para mobile.

    //para criar basta fazer add um botao antes do menu

//-------------------------------------------------------------------------------------------------------

    //foi adicionado um botao embaixo do nav, logo acima da ul do menu. (add atributos aria:  aria-expanded="false" aria-controls="menu" para melhor acessibilidade)
//-------------------------------------------------------------------------------------------------------

    //obs: ao add o remove de classes dentro do outsideclick, o menu deixa de funcionar porque o menulist não está dentro do button, e na fase de buble, ele add o evento e já remove, porque a condição de conter o item é true e para corrigir isso, se usou o setTimeout (assíncrono) e ao usar o settimeout, o addeventlistener vai estar na fila do Queue e então, no buble, vai passar porque ele não vai ter lido ainda e quando terminar a fase de buble que vai ser adicionado o addeventlistener.