  async function displaySettings() {

	if (typeof provider !== 'undefined') {
	var userLength = await provider.listAccounts(); 
	} else {
		var userLength  = 0;
	}
	let msgToDisplay = '<center><img src="img/profile100x100.png" style="display: block;border-radius: 105px;border: 5px solid #27293D;"></center></br><br>';
	if(userLength>0) {
		let signer2 = provider.getSigner();
		let address2 = await signer2.getAddress();
			
	msgToDisplay+= '<strong>Connected to Wallet: </strong></br><small><small>'+address2+'</small>(<a href="'+blockExplorerURL+'/address/'+address2+'" target="_blank">'+blockExplorerName+'</a>)</small></br></br> <button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="displayUserReputation(\''+address2+'\')"> View all balances</button></br> <a href="miner-voting.html"><button class="swal2-styled" style="display: inline-block;">View voting power</button></a></br> <button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="addToMetamask()"> Add '+tokenTicker+' to Metamask</button></br> </br>';
	} else {
		msgToDisplay+= '<strong>Wallet NOT connected:</br> </strong><button type="button" class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="auth2()"><i class="fa fa-thumbs-up"></i> Connect Wallet</button></br></br></br></br>'
	}

	msgToDisplay+= '<a href="#" onclick="getToken();"><button class="swal2-cancel btn btn-danger" style="display: inline-block;">Get '+tokenTicker+'</button> </br><a href="'+twitterURL+'" target="_blank"><img src="img/twitter.svg" height="50px"></a>&nbsp&nbsp<a href="'+telegramLink+'" target="_blank"><img src="img/telegram.svg" height="40px"></a></br></br>';
	//if(userLength>0) { msgToDisplay+='<button class="swal2-confirm swal2-styled" style="display: inline-block;"  onclick="logout();"> Logout</button>'; }
	msgToDisplay+= '<button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(221, 51, 51);" onclick="Swal.close()">Close Settings</button>';

	Swal.fire({
				  title: '<strong>User Wallet Settings</strong>',
				  html: msgToDisplay,
				  showCancelButton: false,
				  showConfirmButton: false
				})
					
				
}

async function auth2() {
	Swal.close();
	var isTrue = await auth();
	if(typeof provider !== 'undefined')  {
	Swal.close();
		sleep(113).then(() => {  
					triggerConfetti();
				})  
	sleep(1337).then(() => {  
					displaySettings();
				})  
	}
}

				
document.getElementById("userSettings").onclick = displaySettings;