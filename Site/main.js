var quantidade = [];
var n = 40;
for(i=0; i<n; i++)
{
    quantidade[i] = 0;
}

function add(id)
{
    quantidade[id] ++;
    document.getElementById(id).innerHTML = quantidade[id];
}

function sub(id)
{
    if(quantidade[id] - 1 >= 0)
        quantidade[id] --;

    document.getElementById(id).innerHTML = quantidade[id];
}

function carrinho()
{
    for(i=0; i<n; i++)
    {
        if(quantidade[i] > 0)
        {
            console.log("Produto:",i," Quantidade: ", quantidade[i]);
        }
    }
}