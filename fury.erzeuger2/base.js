var abilocation="https://cdn.rawgit.com/energychain/StromDAO-BusinessObject/master/smart_contracts/";

function resolve(address) {
	name=address;
	if(window.localStorage.getItem("address_"+address.toLowerCase())!=null) {
			name=window.localStorage.getItem("address_"+address.toLowerCase());
	}
	if(name.length<1) name=address;
	if(name.length>17) name=name.substr(0,17)+"...";
	return name;
}

$.qparams = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}

var extid="fury.network";

if($.qparams("extid")!=null) {
		extid=$.qparams("extid");
}
var node = new document.StromDAOBO.Node({external_id:extid,testMode:true,rpc:"https://demo.stromdao.de/rpc",abilocation:abilocation});
$('.account').html(node.wallet.address);

function app(frm) {
	if((typeof frm == "undefined")||(frm ==null)) {
		frm="./login_frm.html";
	}
	$.get(frm+"?nonce="+Math.random(),function(data) {
		$('#app').html(data);
	});	
}
$(document).ready(app("./login_frm.html"));
