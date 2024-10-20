//navegação por tabs: (interação entre fotos e conteúdo)
function initTabNav() { //essa função serve para isolar o escopo 
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')


    if (tabMenu.length && tabContent.length) { //if para confirmar se o item selecionado (.js-tabcontent section) existe = !!tabMenu.length = true && !!tabContent.length = true porque sao numeros maiores que 0 (0 = false)


        function activeTab(index) {
            tabContent.forEach((params) => {
                params.classList.remove('ativo')
            })
            const direcao = tabContent[index].dataset.anime
            tabContent[index].classList.add('ativo', direcao)
            }

        tabMenu.forEach((img, index) => {
        //console.log(img, index)
        img.addEventListener('click', function name(params) {
            activeTab(index)
        })
        //o problema é que após isso, ao abrir a pagina o conteudo esta em branco e para deixar um texto inicial da raposa basta adicionar a class ativo na section da raposa ou fazer por js da seguinte forma:
        tabContent[0].classList.add('ativo')
        })
    }
    }
    initTabNav()

//accordion list(faq, interação entre pergunta e resposta):
    function accordionList() {
        const faqQuestion = document.querySelectorAll('[data-anime="accordion"] dt')
        const faqAnswer = document.querySelectorAll('[data-anime="accordion"] dd')
        const activeClass = 'ativo' //como se fosse um root para mudar no futuro caso seja necessario

        if (faqQuestion.length) { //só se existir item de lista que vai ativar tudo ou seja, se faqQuestion.length > 0 (0 é false). Verificar se isso existe porque caso não exista, vai dar erro dpois por conta das functions.

            faqQuestion[0].classList.add(activeClass) //deixar o primeiro item ativo para usuario ver
            faqAnswer[0].classList.add(activeClass)


            faqQuestion.forEach((params) => {
                params.addEventListener('click', questionclick)
            })

            function questionclick() {
                this.classList.toggle(activeClass) //toggle = se n tem, add e se tem, remove
                this.nextElementSibling.classList.toggle(activeClass) //this = dt, ou seja, o params acima
            }
        }
    }
    accordionList()
//scroll suave link interno (ao clicar no link interno da pagina (exemplo: a href="#contato"), o scroll desce suavemente até o ponto desejado):
    function scrollSuave() {
        const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
        
        linksInternos.forEach((params) => {
            params.addEventListener('click', scrollToSection)
        })

        function scrollToSection(e) {
            e.preventDefault() //previne movimento padrao do link interno de levar a seção
            const href = e.currentTarget.getAttribute('href') //seleciona atributo do href que foi clicado
            const section = document.querySelector(href) //linkou href com a section

            section.scrollIntoView({ //scrollIntoView = bota esse elemento na minha view/vista
                behavior: 'smooth',
                block: 'start',
            })
        }
    }
    scrollSuave()

    /*
    forma alternativa de fazer:

    //const topo = section.offsetTop //observe que cada usa section pq tem uma section do html para cada link interno, ou seja, cada link interno deve ser uma section

    //window.scrollTo({
    //top: 'topo',
    //behavior: 'smooth',
    })
    */
//animação ao scroll (ao scrolar  a pg, os elementos fazem animação para o lodo)
    function initAnimacaoScroll() {
        const sections = document.querySelectorAll('[data-anime="scroll"]')
        const metadeTela = window.innerHeight * 0.75 //tamanho da tela (eixo y) * 60%

        if (sections.length) { //comprova se tem esse elemento porque caso não tenha não faz sentido executar tudo isso
            window.addEventListener('scroll', animaScroll)

            function animaScroll() {
                sections.forEach((params) => {
                    const sectionTop = params.getBoundingClientRect().top-metadeTela //- 600/60% //metodo getBounding retorna um objeto que tem as propriedades com as distancias e portanto usa-se o top
                    //console.log(sectionTop) quando o elemento passa da propriedade top ela fica negativa (-3), portanto se ela for menor que 0 é porque passou, usar o console.log comentado para ver. Porém dessa forma, se cria um espaço em branco entre uma section e outra pq tem que escrolar até ficar negativo o top da próx para ela aparecer e para corrigir isso, se subtrai alguns pixels da const nesse caso, 600. Porém 600 é um valor fixo e se a tela do client for mto grande esse valor não vai servir pq não vai carregar e se for pequena dmais vai carregar antes da hora e por isso deve se usar 60%(mais ou menos metade, 50/60%) do valor da tela (isso é feito pela const metadetela).
                    if (sectionTop < 0) {
                        // console.log('animar')
                        params.classList.add('ativo')
                    }
                })
            }
            animaScroll() //a f aqui serve para animar o site já quando entrar nele, para que quando o cliente entre não tenha uma tela branca
        }
    }
    initAnimacaoScroll()