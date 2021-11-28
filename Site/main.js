var quantidade = [0]*10;

function add(id)
{
    quantidade[id] += 1;
    document.getElementById(id).innerHTML = quantidade[id];
}

function sub(id)
{
    if(quantidade[id] - 1 >= 0)
        quantidade[id] -= 1;

    document.getElementById(id).innerHTML = quantidade[id];
}