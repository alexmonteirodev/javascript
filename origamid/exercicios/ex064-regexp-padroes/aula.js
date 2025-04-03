                                            // Regexp padrões

    // Os padrões mais utilizados para interagir com informações do cotidiano
    // o raciocínio para criar um bom regex é pensar, o código é composto de que? qual o padrão? por exemplo o cpf é composto de 3 digitos, depois mais 3, depois mais 3 e depois mais 2 e a logica do regex deve ser em cima disso: xxx xxx xxx xx, ai cria as opções possíveis que o usuario possa escrever e testa no site da https://regexr.com/ para testar se está funcionando.
     
//-----------------------------------------------------------------------------------------------------
   
     // CEP - (utilizado para validar cep)
        //legenda: sequencia de 5 digitos (d{5}) mais traço (-) ou sem traço (?) ou espaço ([-\s]?) mais 3 digitos (\d{3})  
        const regexpCEP = /\d{5}[-\s]?\d{3}/g; 

        const ceps = ['00000-000','00000 000','00000000'];

        for(cep of ceps) {
          console.log(cep, cep.match(regexpCEP));
        }
//-----------------------------------------------------------------------------------------------------
      // CPF 
        // \d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}, 3 digitos seguidos de . ou - mais 2 digitos. Para não repetir a mesma coisa d{3}[.-]? 3x, pode capturar com o () para selecionar e tirar a captura com o ?:, logo temos o regex abaixo:                                    
        const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

        const cpfs = ['000.000.000-00','000-000-000-00','000.000.000.00','000000000-00','00000000000'];
        
        for(cpf of cpfs) {
          console.log(cpf, cpf.match(regexpCPF));
        }
//-----------------------------------------------------------------------------------------------------
      // CNPJ
        const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

        const cnpjs = ['00.000.000/0000-00','00000000000000','00-000-000-0000-00','00.000.000/000000','00.000.000.000000','00.000.000.0000.00'];
        
        for(cnpj of cnpjs) {
          console.log(cnpj, cnpj.match(regexpCNPJ));
        }
//-----------------------------------------------------------------------------------------------------
      // TELEFONE  
        // (?:\+?55\s?)? pega toda variação de 55. [+] é a mesma coisa que \+, tem que escapar o + porque ele é caracter especial. (opcional)
        // (?:\(?\d{2}\)?[-\s]?)? pega o ddd (opcional)
        // \d{4,5}[-\s]?\d{4} pega o restante dos digitos (obrigatório)
        const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

        const telefones = [
          '+55 11 98888-8888',
          '+55 11 98888 8888',
          '+55 11 988888888',
          '+55 11988888888',
          '+5511988888888',
          '5511988888888',
          '11 98888-8888',
          '11 98888 8888',
          '(11) 98888 8888',
          '(11) 98888-8888',
          '11-98888-8888',
          '11 98888 8888',
          '11988888888',
          '11988888888',
          '988888888',
          '(11)988888888',
          '98888 8888',
          '8888 8888'
        ];

        for(telefone of telefones) {
          console.log(telefone, telefone.match(regexpTELEFONE));
        }
//-----------------------------------------------------------------------------------------------------
      // EMAIL
        const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

        const emails = [
          'email@email.com',
          'email@email.com.org',
          'email-email@email.com',
          'email_email@email.com',
          'email.email23@email.com.br',
          'email.email23@empresa-sua.com.br',
          'c@contato.cc',
        ];
        
        for(email of emails) {
          console.log(email, email.match(regexpEMAIL));
        }
//-----------------------------------------------------------------------------------------------------
      // TAG

        const regexpTAG = /<\/?[\w\s="']+\/?>/gi;

        const tags = [
          '<div>Isso é uma div</div>',
          '<div class="ativa">Essa está ativa</div>',
          '<img src="imagem" />',
          '<img src="imagem">',
          '<ul class="ativa">',
          '<li>Essa está ativa</li>',
          '</ul>'
        ];

        for(tag of tags) {
          console.log(tag, tag.match(regexpTAG));
        }



















