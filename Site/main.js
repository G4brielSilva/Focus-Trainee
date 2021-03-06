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
    var total = 0.0;
    for(i=0; i<produtos.length; i++)
    {
        if(quantidade[i] > 0)
        {
            mensagem += produtos[i].nome+": "+ quantidade[i]+"x R$ "+produtos[i].valor.toFixed(2)+"\n";
            total += quantidade[i]*produtos[i].valor;
            mensagem += "\nTotal: R$ "+ total.toFixed(2);
        }
    }
    
    if(mensagem != "")
    {
        getInfo();
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
                            title: "Informe seu Telefone, por favor",
                            content: "input",
                            buttons: true,
                            }).then((telefone) =>{
                                
                                if(telefone === null)
                                    return false;
        
                                if (telefone === "")
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
                                send(cliente, telefone);
                            });
                });
            }
          });
    }
    else
        swal("Nenhum produto foi selecionado!");
}

function formata(valor)
{
    if(valor<10)
        return "0"+String(valor);
    else
        return valor;
}

function mensagem(cliente, telefone, produtos)
{
    var data = new Date();
    var hora = formata(data.getHours());
    var minutos = formata(data.getMinutes());
    var msg = `Cliente: ${cliente}%0AHorário: ${hora}:${minutos}%0ATelefone: ${telefone}%0A%0A`;
    var total = 0;
    for(var i=0; i<produtos.length; i++)
    {
        if(quantidade[i]> 0)
        {
            msg += `${produtos[i].nome}: ${quantidade[i]} x ${produtos[i].valor.toFixed(2)} 
                    = R$ ${quantidade[i]*produtos[i].valor.toFixed(2)}%0A`;
            total += quantidade[i]*produtos[i].valor;
        }
    }
    msg += `Total = R$ ${total.toFixed(2)}\n`;

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
    console.log(tk);
}


function send(cliente, telefone)
{
    
    const BOT_TOKEN = tk;
    const CHAT_IDs = id;
    tk=null;
    id=null;
    var xmlHttp = new XMLHttpRequest();
    var msg =  mensagem(cliente, telefone, produtos);
    if(msg != 0)
    {
        for(i=0;i<CHAT_IDs.length;i++)
        {
            const Url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_IDs[i]}&text=${msg}`;
            console.log(Url)
            xmlHttp.open( "GET", Url, false );
            xmlHttp.send( null );
        }
    }
}