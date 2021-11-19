var misto = {
    nome: "Misto Quente",
    quantidade: 0,
    valor: 5.00
};
var cafe = {
    nome: "Café",
    quantidade: 0,
    valor: 2.50
};

var produtos = [
    cafe,
    misto
];

function compra(codigo)
{
    produtos[codigo].quantidade++;
}

function mensagem(cliente, produtos)
{
    var msg = `Cliente: ${cliente}%0A`;
    var total = 0;
    for(var i=0; i<produtos.length; i++)
    {
        if(produtos[i].quantidade > 0)
        {
            msg += `${produtos[i].nome}: ${produtos[i].quantidade} x ${produtos[i].valor} 
                    = R$ ${produtos[i].quantidade*produtos[i].valor}%0A`;
            total += produtos[i].quantidade*produtos[i].valor;
        }
    }
    msg += `Total = R$ ${total}\n`;

    if(total <= 0)
        return '';
    return msg;
}

function limpa()
{
    for(var i=0; i<produtos.length; i++)
        produtos[i].quantidade = 0;
}

function send()
{
    var cliente = document.getElementById('msg').value;
    var msg =  mensagem(cliente, produtos);
    limpa();
    
    const BOT_TOKEN = document.getElementById('token').value;
    const CHAT_IDs = document.getElementById('id').value.split(",");

    for(var i = 0; i<CHAT_IDs.length; i++)
    {
        const Url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_IDs[i]}&text=${msg}`;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", Url, false );
        xmlHttp.send( null );
    }
}
