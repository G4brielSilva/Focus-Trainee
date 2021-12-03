const produtos =[
                    {
                        "nome": "Café expresso",
                        "valor": 3.50
                    },
                    {
                        "nome": "Cappuccino",
                        "valor": 6.00
                    },
                    {
                        "nome": "Café coado",
                        "valor": 4.00
                    },
                    {
                        "nome": "Café gelado",
                        "valor": 8.00
                    },
                    {
                        "nome": "Café do porto",
                        "valor": 9.0
                    },
                    {
                        "nome": "Café macchiato",
                        "valor": 10.00
                    },
                    {
                        "nome": "Suco de laranja",
                        "valor": 8.00
                    },
                    {
                        "nome": "Suco de acerola",
                        "valor": 8.00
                    },
                    {
                        "nome": "Suco de abacaxi",
                        "valor": 8.00
                    },
                    {
                        "nome": "Suco de abacaxi com hortelã",
                        "valor": 8.00
                    },
                    {
                        "nome": "Suco de morango",
                        "valor": 8.00
                    },
                    {
                        "nome": "Coca Cola",
                        "valor": 6.00
                    },
                    {
                        "nome": "Fanta uva",
                        "valor": 6.00
                    },
                    {
                        "nome": "Fanta laranja",
                        "valor": 6.00
                    },
                    {
                        "nome": "Guaraná Antarctica",
                        "valor": 6.00
                    },
                    {
                        "nome": "Heineken",
                        "valor": 10.00
                    },
                    {
                        "nome": "Stella Artois",
                        "valor": 10.00
                    },
                    {
                        "nome": "Budweiser",
                        "valor": 10.00
                    },
                    {
                        "nome": "Red Bull",
                        "valor": 12.00
                    },
                    {
                        "nome": "Monster",
                        "valor": 12.00
                    },
                    {
                        "nome": "Milk-shake de morango",
                        "valor": 16.00
                    },
                    {
                        "nome": "Milk-shake de chocolate",
                        "valor": 16.00
                    },
                    {
                        "nome": "Milk-shake de coockies",
                        "valor": 16.00
                    },
                    {
                        "nome": "Quesadillas",
                        "valor": 20.00
                    },
                    {
                        "nome": "Tapioca",
                        "valor": 12.00
                    },
                    {
                        "nome": "Omelete",
                        "valor": 12.00
                    },
                    {
                        "nome": "Pão com linguiça",
                        "valor": 14.00
                    },
                    {
                        "nome": "Mixto",
                        "valor": 8.00
                    },
                    {
                        "nome": "Croissant",
                        "valor": 6.00
                    },
                    {
                        "nome": "Pão de queijo",
                        "valor": 4.00
                    },
                    {
                        "nome": "Bolo de prestígio",
                        "valor": 7.00
                    },
                    {
                        "nome": "Torta de limão",
                        "valor": 7.00
                    },
                    {
                        "nome": "Petit Gateau",
                        "valor": 16.00
                    },
                    {
                        "nome": "Waffles com cobertura",
                        "valor": 18.00
                    },
                    {
                        "nome": "Cupcake",
                        "valor": 10.00
                    }               
]

var quantidade = [];
for(i=0; i<produtos.length; i++)
    quantidade[i] = 0;

function add(id)
{
    quantidade[id] ++;
    document.getElementById(id).innerHTML = quantidade[id];
}

function sub(id)
{
    if(quantidade[id] >= 1)
        quantidade[id] --;

    document.getElementById(id).innerHTML = quantidade[id];
}

function carrinho()
{
    var mensagem = "";
    for(i=0; i<produtos.length; i++)
    {
        if(quantidade[i] > 0)
        {
            //console.log("Produto:",produtos[i].nome," Quantidade: ", quantidade[i]);
            mensagem += produtos[i].nome+": "+ quantidade[i]+"\n";
        }
    }
    if(mensagem != "")
    {
        /*
        .swal-text
        {
            font-size: 20px;
            font-weight: bold;
        }
        */
        swal({
            title: "Carrinho", 
            text: mensagem,
            buttons: ["Voltar", "Reservar"],
            allowOutsideClick: "true" 
        }).then((reserva) => {
            if (reserva) 
            {
                swal({
                    title: "Informe seu nome, por favor",
                    content: "input",
                    buttons: true,
                    }).then((cliente) =>{
                        
                        if(cliente === null)
                            return false;

                        if (cliente === "")
                        {
                            swal({
                                title: "Valor invalido",
                                icon: "error"
                                });
                            return false;
                        }

                        swal({  
                            title:"Obrigado pelo pedido, "+ cliente, 
                            text:"Seu pedido ficará pronto em 30 minutos",
                            icon: "success",
                            timer: 7000
                            }).then((reload)=>{document.location.reload(true);});
                        send(cliente);
                });
            }
          });
    }
    else
        swal("Nenhum produto foi selecionado!");
}


function mensagem(cliente, produtos)
{
    var data = new Date();
    var msg = `Cliente: ${cliente}%0AHorário: ${data.getHours()}:${data.getMinutes()}%0A`;
    var total = 0;
    for(var i=0; i<produtos.length; i++)
    {
        if(quantidade[i]> 0)
        {
            msg += `${produtos[i].nome}: ${quantidade[i]} x ${produtos[i].valor} 
                    = R$ ${quantidade[i]*produtos[i].valor}%0A`;
            total += quantidade[i]*produtos[i].valor;
        }
    }
    msg += `Total = R$ ${total}\n`;

    if(total <= 0)
        return 0;
    return msg;
}
var tk;
var id=[];

/* Ajax */
function getInfo(){
    $.get("./php/id.php", getId, 'text');
    $.get("./php/token.php", getTk, 'text');
}

function getId(info){
    id=info.split(",");//pra quando tiver mais de um id
    //id.push(info)//pra quando tiver um id só
}
function getTk(info){
    tk=info;
}


function send(cliente)
{
    getInfo();
    const BOT_TOKEN = tk;
    const CHAT_IDs = id;
    tk=null;
    id=null;

    var xmlHttp = new XMLHttpRequest();
    var msg =  mensagem(cliente, produtos);
    if(msg != 0)
    {
        for(i=0;i<CHAT_IDs.length;i++)
        {
            const Url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_IDs[i]}&text=${msg}`;
            xmlHttp.open( "GET", Url, false );
            xmlHttp.send( null );
        }
    }
}