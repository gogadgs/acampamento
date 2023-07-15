const Carregamentoinicio = () =>{
    // seção de declaração de variaveis // 

    // arrays  com  diversas estilizações com indexação  de estrutura de dados de fila // 
    let style =["style1","style2","style3","style4"];

    var tam = ["tam1","tam1","tam1","tam2","tam3"];
    var opacity = ["opacity1","opacity1","opacity1","opacity2","opacity2","opacity3"];
    var estrela = "";
    var qtdeEstrelas = 250;
    var noite = document.querySelector(".constelacao");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;
    var numeroAleatorio = 5000;

    const getRandomArbitrary = (min, max)=>{

        return Math.floor(Math.random()*(max-min)) + min;

    }
    // estrutura de repetição para adicionar elementos html na página dinamicamente manipulando o DOM // 
  
    for (var i = 0; i < qtdeEstrelas; i++) {
        estrela += "<span class='estrela " +
         style[getRandomArbitrary(0, 4)] + 
         " " + opacity[getRandomArbitrary(0, 6)] 
         + " " + tam[getRandomArbitrary(0, 5)] + 
         "' style='animation-delay: ." +getRandomArbitrary(0, 9)
         + "s; left: "+ getRandomArbitrary(0, widthWindow) + "px; top: "
          + getRandomArbitrary(0, heightWindow) + "px;'></span>";
      }
   
        noite.innerHTML = estrela;

        // seção de estilização dos meteorors //
        setTimeout = (()=>{
            carregarMeteoro();

        },numeroAleatorio);


        const carregarMeteoro = ()=>{
           
                setTimeout(carregarMeteoro,numeroAleatorio);
                numeroAleatorio =getRandomArbitrary(5000,10000);
                const meteoro = "<div class ='meteoro" +
                style[getRandomArbitrary(0,4)]+"'</div>";
                document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = meteoro;


                // reiniciando o meteoro // 
                setTimeout = (()=>{
                    // esvazia o elemento meteoro para reincia-lo // 
                    document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = "";

                },1000);

        }        
}
window.onload = Carregamentoinicio;

// inicia-se a função no objeto global // 