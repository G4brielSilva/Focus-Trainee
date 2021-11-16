
function send()
{
    var msg = document.getElementById('input').value;
    const BOT_TOKEN = "<TOKEN>";
    const CHAT_ID = "<CHAT_ID>";
    const Url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Url, false );
    xmlHttp.send( null );
}
