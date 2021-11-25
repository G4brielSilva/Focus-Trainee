var quantidade = 0;

function conta(n)
{
    if(quantidade + n >= 0)
        quantidade += n
    document.getElementById("0").innerHTML = quantidade;
}