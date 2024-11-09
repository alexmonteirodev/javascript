
                                        // Menu mobile

    // São os números que carregam na pagina e tem a animação de ir de 0 até x. (como se fosse um cronometro)

//-------------------------------------------------------------------------------------------------------
    //passos/raciocinio:

    // 1 - extrair o valor (foreach)
    // 2 - cronometro do valor (setInterval)
//-------------------------------------------------------------------------------------------------------

    // havia o problema de que o cronometro funcinava, porém tinham numeros diferentes então por exemplo: os ursos chegavam ao 230 rapido enquanto os esquilos demoravam para chegar nos 12k, por isso, teve de ser feito um incremento de um divisivel que fosse relativo a eles para que chegassem todos juntos ao mesmo tempo em seus totais. 
    //ou seja, com o incremento deu pra dividir os numeros por 100 e a partir daí ao invés deles crescerem de 0 até o total de 1 em 1, ele cresce pelo seu divisivel (de forma proporcional (a 100 no caso)), ex:

    //ursos 230 / 100 = 2,3, logo temos: 2,3 + 2,3 + 2,3.... até 230
    //esquilos 12340/100 = 123,4, logo temos:  123,4 + 123,4 +  123,4.... até 230
    
    //obs: para entender melhor mude o tempo do setTimeinterval para 1000