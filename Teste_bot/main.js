
function send()
{
    var msg = document.getElementById('msg').value;
    const BOT_TOKEN = document.getElementById('token').value;
    const CHAT_ID = document.getElementById('id').value;
    //const BOT_TOKEN = "<TOKEN>";
    //const CHAT_ID = "<CHAT_ID>";
    const Url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Url, false );
    xmlHttp.send( null );
}
