
var ABI = [{"inputs":[{"internalType":"address","name":"_forWallet","type":"address"}],"name":"proxySetDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"proxyVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTXToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

		var tokenTicker = 'OINK'
		var consensusContract = "0x7917e04Eb4463CF80Cc00040BA0f1fF125926eF3"
		var helperContract = "0x003F5d5bB97028AF17B0925B08cb184a74F9030f"
		var governorContract = "0x331146b366c0Cd2AcA542ce71E5D6fb66bf07D16"
		
		

fetch(apiURL+'proposals/proposeGovernor.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("gov-proposals").innerHTML = html
		})
		
var totalVotingPower
		
		fetch(apiURL+'api/totalVotingPower.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			totalVotingPower = html
		})
		
		
					//gets shares allocated for vote ID, turns them into actual tokens
				async function getVotes(proposalID, contractAddress) {
				const contractAbi = [
				  "function totalVotesForID(uint256) external view returns (uint256)",
				  "function getPricePerFullShare() external view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(contractAddress, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.totalVotesForID(proposalID))
				const XPDPerShare = BigInt(await timeDepositContract.getPricePerFullShare())
				const userShares2 = Number(userShares / BigInt(10**18))
				const XPDPerShare2 = Number(XPDPerShare / BigInt(10**18));
				const actualTokens = Math.round(userShares2 * XPDPerShare2)
				//console.log(actualTokens)
				return actualTokens;
			}
			
	async function checkVotingPower() {
			await auth();
			
			
		
			
			let accounts = await provider.send("eth_requestAccounts", []);
			let userWalletAddress = accounts[0];
			
			document.getElementById("display-votingPower").innerHTML = '<div class="pixel-loader"></div>';
			
			let htmlMessage = '';
		
						const pool1 = await getUserBalanceInPool(userWalletAddress, pool1Month);
			const pool2 = await getUserBalanceInPool(userWalletAddress, pool3Month);
			const pool3 = await getUserBalanceInPool(userWalletAddress, pool6Month);
			const pool4 = await getUserBalanceInPool(userWalletAddress, pool1Year);
			const pool5 = await getUserBalanceInPool(userWalletAddress, pool3Year);
			const pool6 = await getUserBalanceInPool(userWalletAddress, pool5Year);

			if(pool1 != 0) { htmlMessage+= '<div class="form-group row"><div class="col"><label for="exampleInputUsername1">1 Month:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool1)) + ' '+tokenTicker+' staked"></div><div class="col"><label for="exampleInputUsername1">Effective:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool1*0.2)) + ' '+tokenTicker+'"></div></div>'; }
			if(pool2 != 0) { htmlMessage+= '<div class="form-group row"><div class="col"><label for="exampleInputUsername1">3 Month:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool2)) + ' '+tokenTicker+' staked"></div><div class="col"><label for="exampleInputUsername1">Effective:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool2*0.3)) + ' '+tokenTicker+'"></div></div>'; }
			if(pool3 != 0) { htmlMessage+= '<div class="form-group row"><div class="col"><label for="exampleInputUsername1">6 Month:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool3)) + ' '+tokenTicker+' staked"></div><div class="col"><label for="exampleInputUsername1">Effective:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool3*0.5)) + ' '+tokenTicker+'"></div></div>'; }
			if(pool4 != 0) { htmlMessage+= '<div class="form-group row"><div class="col"><label for="exampleInputUsername1">1 Year:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool4)) + ' '+tokenTicker+' staked"></div><div class="col"><label for="exampleInputUsername1">Effective:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool4*0.75)) + ' '+tokenTicker+'"></div></div>'; }
			if(pool5 != 0) { htmlMessage+= '<div class="form-group row"><div class="col"><label for="exampleInputUsername1">3 Year:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool5)) + ' '+tokenTicker+' staked"></div><div class="col"><label for="exampleInputUsername1">Effective:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool5*1.15)) + ' '+tokenTicker+'"></div></div>'; }
			if(pool6 != 0) { htmlMessage+= '<div class="form-group row"><div class="col"><label for="exampleInputUsername1">5 Year:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool6)) + ' '+tokenTicker+' staked"></div><div class="col"><label for="exampleInputUsername1">Effective:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(Math.round(pool6*1.5)) + ' '+tokenTicker+'"></div></div>'; }

			const totalBalance = Math.round(pool1*0.2 + pool2*0.3 + pool3*0.5 + pool4*0.75 + pool5*1.15 + pool6*1.5);
			
			if(totalBalance > 0) { htmlMessage+='</br><label for="exampleInputUsername1">Your Effective Voting Power:</label><input type="text" class="form-control" value="' + Intl.NumberFormat().format(totalBalance) + ' '+tokenTicker+' (' + round((totalBalance/totalVotingPower * 100), 5) + '% of total)">'} else { htmlMessage = "You have 0 '+tokenTicker+' staked and thus no power. Time to get some '+tokenTicker+' and start mining! What are you waiting for?"; }
	htmlMessage+= '</br></br><button onclick="window.location=\'buy.html\';" class="btn btn-primary mr-2">Get '+tokenTicker+' & Increase your power NOW</div>';
	document.getElementById("btn-checkVotingPower").style = "display: none;";
			document.getElementById("display-votingPower").innerHTML = '</br>'+htmlMessage;

			
			if(isTestnet) {
							let actionToLog = 'checkVotingPower'
							if(localStorage.getItem(actionToLog) != undefined) {
							const now = new Date();
							const dayNumber = now.getDay() + (now.getYear() * 365)
								if(localStorage.getItem(actionToLog) != dayNumber) {
									localStorage.setItem(actionToLog, dayNumber)
									fetch('/callback/papi.html?wallet='+userWalletAddress+'&action='+actionToLog);
								} 
							} else {
								const now = new Date();
								const dayNumber = now.getDay() + (now.getYear() * 365);
									localStorage.setItem(actionToLog, dayNumber)
									fetch('/callback/papi.html?wallet='+userWalletAddress+'&action='+actionToLog);
							}
						}
		}
		
		
		async function checkVotesFor(proposalID) {
    displayMessage = '<div id="display-votes">Loading status....</br><small><small>Can take up to 30seconds.</small></small></br><div class="pixel-loader"></div></div>';
    Swal.fire({
        title: '<strong>Current Vote Stats</strong>',
        html: displayMessage,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
    let htmlMessage = '';

	try {
		
		let daMsg = ""
		
			let alreadyPending = await checkIfChanged()
			//gets address for eligible new governor 
			//now get which is for proposal ID
			if(alreadyPending != "0x0000000000000000000000000000000000000000") {
				
				//check corresponding voernor for proposal ID 
				let newGov = await getGovernorAddress(proposalID)
				console.log("we here2")
				if(newGov == alreadyPending) {
					
					
					const blockNumber = await provider.getBlockNumber();
					console.log("we here3")
					let governorRequestBlock = await getRequestBlock()
					console.log("we here4")
					let timeWait = await getRemainingBlocks() //gets the block
					console.log("we here5")
						
					let newTimestamp = (Number(governorRequestBlock) + Number(timeWait)) - blockNumber 
					newTimestamp = Date.now() + newTimestamp * 10.2 * 1000
					let msg = formatDateAndCountdown(newTimestamp)

				daMsg+= 'SUCCESS! New Governing contract has passed and can be enforced! There is a delay for security reasons before the change can be enforced. The governor change is estimated to be finalized on: </br> '+msg+'</br></br>';
				} else {
					Swal.fire({
                title: '<strong>Something went wrong....',
                html: 'Something went wrong. Please try again.',
				icon: 'error',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
				}
			}
			console.log("alle oke")
    const pool1 = await getVotes(proposalID, pool1Month);
			const pool2 = await getVotes(proposalID, pool3Month);
			const pool3 = await getVotes(proposalID, pool6Month);
			const pool4 = await getVotes(proposalID, pool1Year);
			const pool5 = await getVotes(proposalID, pool3Year);
			const pool6 = await getVotes(proposalID, pool5Year);
			
			const pool1x = await getVotes(proposalID+1, pool1Month);
			const pool2x = await getVotes(proposalID+1, pool3Month);
			const pool3x = await getVotes(proposalID+1, pool6Month);
			const pool4x = await getVotes(proposalID+1, pool1Year);
			const pool5x = await getVotes(proposalID+1, pool3Year);
			const pool6x = await getVotes(proposalID+1, pool5Year);
			
			

    let totalBalance1 = pool1 * 0.2 + pool2 * 0.3 + pool3 * 0.5 + pool4 * 0.75 + pool5 * 1.15 + pool6 * 1.5;
	//console.log("total balance 1 is " + totalBalance1)
    let totalBalance2 = pool1x * 0.2 + pool2x * 0.3 + pool3x * 0.5 + pool4x * 0.75 + pool5x * 1.15 + pool6x * 1.5;
	
	const savedVotesFor = await getSavedVotes(proposalID)
			const savedVotesAgainst = await getSavedVotes(proposalID+1)
			
			if(totalBalance1 < savedVotesFor) { totalBalance1 = savedVotesFor }
			if(totalBalance2 < savedVotesAgainst) { totalBalance2 = savedVotesAgainst }
			
			htmlMessage = daMsg
    if (totalBalance1 == 0) {
        htmlMessage += '&#9989; There is no '+tokenTicker+' vote allocated in favor of this proposal</br>';
    } else {
        htmlMessage += '</br>&#9989; Votes For: ' + Intl.NumberFormat().format(Math.round(totalBalance1)) + ' <img src="favicon/favicon-32x32.png" width="15px" height="15px">'+tokenTicker+'(<small>weighted</small>)</br>';
    }
    if (totalBalance2 == 0) {
        htmlMessage += '&#10060; There is no '+tokenTicker+' vote allocated against this proposal';
    } else {
        htmlMessage += '</br>&#10060; Votes Against: ' + Intl.NumberFormat().format(Math.round(totalBalance2)) + ' <img src="favicon/favicon-32x32.png" width="15px" height="15px">'+tokenTicker+'(<small>weighted</small>)</br>';
    }
	
	let totalStaked = await getTotalStaked()
	totalStaked = Number(BigInt(totalStaked) / BigInt(10**18))
	let currentProgress = (totalBalance1 / (totalStaked*0.15)) * 100

	let displayRatios = `</br></br><div style="width: 100%; height: 20px; background-color: #D3D3D3; border-radius: 8px; overflow: hidden;">
  <div style="width: `+((totalBalance1/(totalBalance1+totalBalance2))*100)+`%; height: 20px; background-color: #4CAF50; float: left; color: white; font-weight: bold; text-align: center;">For</div>
  <div style="width: `+(100 - (totalBalance1/(totalBalance1+totalBalance2)*100))+`; height: 20px; background-color: #F44336; float: right; color: white; font-weight: bold; text-align: center;">Against</div>
</div>`

	let style = `<style>
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(76,175,80, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(76,175,80, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(76,175,80, 0);
    }
  }
</style>`
	htmlMessage+= '</br>'+displayRatios+'</br></br></br>Total '+tokenTicker+' Staked: ' + Intl.NumberFormat().format(Math.round(totalStaked / (10**6))) +'M</br> Required Threshold: ' + Intl.NumberFormat().format(Math.round(totalStaked * 0.15 / 10**6)) + 'M '+tokenTicker+'<small>(weighted)</small> </br></br> <strong>Current Progress:</strong><div style="max-width: 100%; width: '+Math.round(currentProgress*10)/10+'%; background-color:#4CAF50; padding: 3px; border-radius: 3px; font-weight: bold; text-align: center; animation: pulse 1s ease-in-out infinite; color: black; background-image: linear-gradient(to right, #4CAF50 0%, #4CAF50 '+Math.round(currentProgress*10)/10+'%, white '+Math.round(currentProgress*10)/10+'%);">' + Intl.NumberFormat().format(Math.round(currentProgress*10)/10) + '%</div>' + style

    document.getElementById("display-votes").innerHTML = htmlMessage;
	
	} catch(e) {
		console.log(e)
		Swal.fire({
                title: '<strong>Something went wrong....',
                html: 'Something went wrong. Please try again.',
				icon: 'error',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
	}
}

	async function getTotalStaked() {
    const contractAbi = [
        "function totalDTXStaked() external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(consensusContract, contractAbi, provider)
    const userShares = BigInt(await timeDepositContract.totalDTXStaked())
    return userShares;
}	

	async function checkIfChanged() {
    const contractAbi = [
        "function eligibleNewGovernor() external view returns (address)"
    ];
    const timeDepositContract = new ethers.Contract(governorContract, contractAbi, provider)
    const userShares = await timeDepositContract.eligibleNewGovernor()
    return userShares;
}	

async function getGovernorAddress(propId) {
    const contractAbi = [
        "function consensusProposal(uint256) external view returns (uint16,address,uint256)"
    ];
    const timeDepositContract = new ethers.Contract(consensusContract, contractAbi, provider)
    const userShares = await timeDepositContract.consensusProposal(propId)
    return userShares[1];
}	
	

async function getRemainingBlocks() {
    const contractAbi = [
        "function newGovernorBlockDelay() external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(governorContract, contractAbi, provider)
    const userShares = await timeDepositContract.newGovernorBlockDelay()
    return userShares;
}
			async function getSavedVotes(proposalID) {
				const contractAbi = [
				  "function highestConsensusVotes(uint256) external view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(consensusContract, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.highestConsensusVotes(proposalID))
				//console.log(actualTokens)
				return Number(userShares / BigInt(10**18));
			}
			
			
async function getRequestBlock() {
    const contractAbi = [
        "function newGovernorRequestBlock() external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(governorContract, contractAbi, provider)
    const userShares = await timeDepositContract.newGovernorRequestBlock()
    return userShares;
}	
			
	
			function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

		async function voteFor(proposalID) {
			
			await auth();
			
			let accounts = await provider.send("eth_requestAccounts", []);
			let userWalletAddress = accounts[0];

			
			document.getElementById("display-votingPower").innerHTML = '</br></br><center>Please await while loading balances...</center><div class="pixel-loader"></div>';
			
			let htmlMessage = '';
		
			const pool1 = await getUserBalanceInPool(userWalletAddress, pool1Month);
			const pool2 = await getUserBalanceInPool(userWalletAddress, pool3Month);
			const pool3 = await getUserBalanceInPool(userWalletAddress, pool6Month);
			const pool4 = await getUserBalanceInPool(userWalletAddress, pool1Year);
			const pool5 = await getUserBalanceInPool(userWalletAddress, pool3Year);
			const pool6 = await getUserBalanceInPool(userWalletAddress, pool5Year);
			let additionalMessage;
			if(proposalID % 2 == 1) {
				htmlMessage+='</br></br><div class="alert alert-fill-info" role="alert"><strong>Voting: </strong> You are about to vote for proposal('+ proposalID +') with the following stakes</br> You are voting <strong>in favor</strong> of the proposal.</div></br>'
			} else {
				htmlMessage+='</br></br><div class="alert alert-fill-info" role="alert"><strong>Voting: </strong> You are about to vote for proposal('+ proposalID +') with the following stakes</br>You are voting <strong>against</strong> the proposal.</div></br>'
			}

			if(pool1 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (' + Intl.NumberFormat().format(Math.round(pool1)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool2 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (' + Intl.NumberFormat().format(Math.round(pool2)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool3 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (' + Intl.NumberFormat().format(Math.round(pool3)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool4 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (' + Intl.NumberFormat().format(Math.round(pool4)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool5 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (' + Intl.NumberFormat().format(Math.round(pool5)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool6 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (' + Intl.NumberFormat().format(Math.round(pool6)) + ' X'+tokenTicker+'PD staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (No active stake) <i class="input-helper"></i></label></br>'; }

			htmlMessage+='</br>';
			const totalBalance = Math.round(pool1*0.2 + pool2*0.3 + pool3*0.5 + pool4*0.75 + pool5*1.15 + pool6*1.5);
	
			if(totalBalance == 0) { htmlMessage = 'You have 0 '+tokenTicker+' staked and thus no power. Time to get some '+tokenTicker+' and stake them! What are you waiting for? </br></br><button onclick="window.location=\'https://pulseDAO.pro\';" class="btn btn-primary mr-2">Get '+tokenTicker+' & Increase your power NOW</div>'; }

		
	document.getElementById("btn-finalizeVote").style = "display: block;";
	document.getElementById("btn-finalizeVote").value = proposalID;
	document.getElementById("btn-checkVotingPower").style = "display: none;";
			document.getElementById("display-votingPower").innerHTML = '</br>'+htmlMessage;
		}
		

		
		  document.getElementById("btn-checkVotingPower").onclick = checkVotingPower;
		document.getElementById("btn-finalizeVote").onclick = async function finalizeVote() {
			const proposalNumber = document.getElementById("btn-finalizeVote").value;
			let displayText = "You are about to vote for proposal ID " + proposalNumber;
			if(proposalNumber%2 == 1) {
				displayText+= "</br></br> Voting <strong>in favor</strong> of the proposal.";
			} else {
				displayText+= "</br></br> Voting <strong>against</strong> the proposal.";
			}
				  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Cast my Vote!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
				

	let msgAfter= 'You are about to allocate your voting power to the proposal....</br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						try {
				const transaction = new ethers.Contract(helperContract, ABI, provider.getSigner());
				const doIt = await transaction.proxyVote(proposalNumber);
			
				await doIt.wait();
				
	   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Your votes has been <strong>successfully casted</strong>.</br></br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				document.getElementById("btn-finalizeVote").style = "display: none;";
				document.getElementById("display-votingPower").innerHTML = '</br></br><div class="alert alert-fill-success" role="alert"><i class="mdi mdi-alert-circle"></i>Congratulations, your vote has been successfully casted!</div>'
				 
} catch(e) {
							errorMessage(e)
						  }
				 }
				})
			

		}
		
		
		
		function formatDateAndCountdown(timestamp) {
    // Convert timestamp to milliseconds if it's in seconds
    const timestampMs = timestamp.toString().length === 10 ? timestamp * 1000 : timestamp;
    const targetDate = new Date(timestampMs);
    const now = new Date();

    // Format the date
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZoneName: 'short'
    };
    const formattedDate = targetDate.toLocaleDateString('en-US', dateOptions);

    // Calculate time difference
    const timeDiff = timestampMs - now.getTime();
    
    // If date is in the past
    if (timeDiff < 0) {
        return `The date was ${formattedDate} (${Math.abs(Math.floor(timeDiff / 1000))} seconds ago)`;
    }

    // Calculate remaining time units
    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Build countdown string
    let countdown = [];
    if (days > 0) countdown.push(`${days} day${days !== 1 ? 's' : ''}`);
    if (hours > 0) countdown.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
    if (minutes > 0) countdown.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
    if (seconds > 0) countdown.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);
    
    const countdownText = countdown.join(', ');

    return `${formattedDate} (${countdownText} from now)`;
}
