
		//for proxy vote
var ABI = [{"inputs":[{"internalType":"address","name":"_forWallet","type":"address"}],"name":"proxySetDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"proxyVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTXToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

//for nft allocation
var ABI2 = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"uint256","name":"uintValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"}],"name":"NotifyVote","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetAllocationContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"uintValue","type":"uint256"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetPendingContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"uintValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"weightedVote","type":"uint256"}],"name":"UpdateVotes","type":"event"},{"inputs":[],"name":"DTX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addressToUint256","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allocationContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"approveAllocationContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenID","type":"uint256"},{"internalType":"address","name":"_allocationContract","type":"address"}],"name":"getAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"notifyVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingContract","outputs":[{"internalType":"bool","name":"isValid","type":"bool"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"votesCommitted","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"proposeAllocationContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"rejectAllocationContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rejectThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rejectionPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setAllocationContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"setApproveThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"setRejectThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setRejectionPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"updateVotes","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var nftAllocationContract = "0xD8508461e8134e25dc630871566B1551e797E1a7"
var proxyContract = "0x003F5d5bB97028AF17B0925B08cb184a74F9030f"
var consensusContract = "0x7917e04Eb4463CF80Cc00040BA0f1fF125926eF3"

var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"

	fetch(apiURL+'proposals/nftAllocation.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("nftAllocation").innerHTML = html
		})
			
			//gets shares allocated for vote ID, turns them into actual tokens
				async function getVotes(proposalID, contractAddress) {
				const contractAbi = [
				  "function totalVotesForID(uint256) external view returns (uint256)",
				  "function getPricePerFullShare() external view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(contractAddress, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.totalVotesForID(proposalID))
				const OINKPerShare = BigInt(await timeDepositContract.getPricePerFullShare())
				const userShares2 = Number(userShares / BigInt(10**18))
				const OINKPerShare2 = Number(OINKPerShare / BigInt(10**18));
				const actualTokens = Math.round(userShares2 * OINKPerShare2)
				//console.log(actualTokens)
				return actualTokens;
			}
		

		
		
			async function checkVotesFor(proposalID) {
			displayMessage = '<div id="display-votes">Loading status....</br><small><small>Can take up to 30seconds.</small></small></br><div class="pixel-loader"></div></div>';
				Swal.fire({
				  title: '<strong>Current Vote Stats</strong>',
				  html: displayMessage,
				  focusConfirm: false,
				  confirmButtonText:
					'<i class="fa fa-thumbs-up"></i> Close'
				})
				proposalID = ethers.utils.getAddress(proposalID);
			proposalID = ethers.BigNumber.from(proposalID);
			proposalIDsaved = proposalID
			console.log(proposalID.toString(10))

			let htmlMessage = '';
			
			const pool1 = await getVotes(proposalID, pool1Month);
			const pool2 = await getVotes(proposalID, pool3Month);
			const pool3 = await getVotes(proposalID, pool6Month);
			const pool4 = await getVotes(proposalID, pool1Year);
			const pool5 = await getVotes(proposalID, pool3Year);
			const pool6 = await getVotes(proposalID, pool5Year);
			
			proposalID = proposalIDsaved.add(1).toString(10);
			console.log(proposalID)
			const pool1x = await getVotes(proposalID, pool1Month);
			const pool2x = await getVotes(proposalID, pool3Month);
			const pool3x = await getVotes(proposalID, pool6Month);
			const pool4x = await getVotes(proposalID, pool1Year);
			const pool5x = await getVotes(proposalID, pool3Year);
			const pool6x = await getVotes(proposalID, pool5Year);
			
			let threshold = await getThreshold()

			const totalBalance1 = pool1 * 0.2 + pool2 * 0.3 + pool3 * 0.5 + pool4 * 0.75 + pool5 * 1.15 + pool6 * 1.5;
			const totalBalance2 = pool1x * 0.2 + pool2x * 0.3 + pool3x * 0.5 + pool4x * 0.75 + pool5x * 1.15 + pool6x * 1.5;
			if(totalBalance1 == 0) { htmlMessage+='&#9989; There is no '+tokenTicker+' vote allocated in favor of this proposal</br>'; } else { htmlMessage+= '</br>&#9989; Votes For: ' + Intl.NumberFormat().format(Math.round(totalBalance1)) + ' <img src="img/DTX.png" width="15px" height="15px">DTX(<small>weighted</small>)</br>'; }
			if(totalBalance2 == 0) { htmlMessage+='&#10060; There is no '+tokenTicker+' vote allocated against this proposal'; } else { htmlMessage+= '</br>&#10060; Votes Against: ' + Intl.NumberFormat().format(Math.round(totalBalance2)) + ' <img src="img/DTX.png" width="15px" height="15px">DTX(<small>weighted</small>)</br>'; }
			htmlMessage += '</br></br>Votes Required: '+Intl.NumberFormat().format(Math.round(threshold))+' <img src="img/DTX.png" width="15px" height="15px">DTX</br></br><li>Atleast 10% of the weighted vote is required to approve the allocation contract</li><li> Once approved, users can vote against the proposal</li><li>If more than 50% vote against, the proposal is rejected</li><li>contract can be enforced 7 days after approval</li></small>'
			document.getElementById("display-votes").innerHTML = htmlMessage;
		
		}
	
			function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

		async function voteFor(proposalID) {
			let savedAddress = proposalID;
			await auth();
			let signer = provider.getSigner();
			let address = await signer.getAddress();
			
			const userWalletAddress = address;
			
			document.getElementById("display-votingPower").innerHTML = '<center>Please await while loading balances...</center><div class="pixel-loader"></div>';
			
			proposalID = ethers.utils.getAddress(proposalID);
			proposalID = ethers.BigNumber.from(proposalID);
			

			let htmlMessage = '';
	
			const pool1 = await getUserBalanceInPool(userWalletAddress, pool1Month);
			const pool2 = await getUserBalanceInPool(userWalletAddress, pool3Month);
			const pool3 = await getUserBalanceInPool(userWalletAddress, pool6Month);
			const pool4 = await getUserBalanceInPool(userWalletAddress, pool1Year);
			const pool5 = await getUserBalanceInPool(userWalletAddress, pool3Year);
			const pool6 = await getUserBalanceInPool(userWalletAddress, pool5Year);

			htmlMessage+='</br></br><div class="alert alert-fill-info" role="alert"><strong>Voting: </strong> You are about to vote IN FAVOR of the proposal('+ savedAddress +') with the following stakes</div></br>'
		
			if(pool1 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (' + Intl.NumberFormat().format(Math.round(pool1)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool2 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (' + Intl.NumberFormat().format(Math.round(pool2)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool3 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (' + Intl.NumberFormat().format(Math.round(pool3)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool4 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (' + Intl.NumberFormat().format(Math.round(pool4)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool5 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (' + Intl.NumberFormat().format(Math.round(pool5)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool6 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (' + Intl.NumberFormat().format(Math.round(pool6)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (No active stake) <i class="input-helper"></i></label></br>'; }

			htmlMessage+='</br>';
			const totalBalance = Math.round(pool1*0.2 + pool2*0.3 + pool3*0.5 + pool4*0.75 + pool5*1.15 + pool6*1.5);
	
			if(totalBalance == 0) { htmlMessage = 'You have 0 '+tokenTicker+' staked and thus no power. Time to get some '+tokenTicker+' and stake them! What are you waiting for? </br></br><button onclick="window.location=\'https://Piggy Bank.pro\';" class="btn btn-primary mr-2">Get '+tokenTicker+' & Increase your power NOW</div>'; }

		document.getElementById("display-votingPower").innerHTML = htmlMessage;
		
	document.getElementById("btn-finalizeVote").style = "display: block;";
	document.getElementById("btn-finalizeVote").value = proposalID;
document.getElementById("btn-costToVote").style = "display: none;";
		}
		
		
		async function voteAgainst(proposalID) {
			let savedAddress = proposalID;
			await auth();
			let signer = provider.getSigner();
			let address = await signer.getAddress();
			
			const userWalletAddress = address;
			
			document.getElementById("display-votingPower").innerHTML = '<center>Please await while loading balances...</center><div class="pixel-loader"></div>';
			
			
			proposalID = proposalID + BigInt(1)
			
			let threshold = await getThreshold()

			let htmlMessage = '';
	
			const pool1 = await getUserBalanceInPool(userWalletAddress, pool1Month);
			const pool2 = await getUserBalanceInPool(userWalletAddress, pool3Month);
			const pool3 = await getUserBalanceInPool(userWalletAddress, pool6Month);
			const pool4 = await getUserBalanceInPool(userWalletAddress, pool1Year);
			const pool5 = await getUserBalanceInPool(userWalletAddress, pool3Year);
			const pool6 = await getUserBalanceInPool(userWalletAddress, pool5Year);

			htmlMessage+='</br></br><div class="alert alert-fill-info" role="alert"><strong>Voting: </strong> You are about to vote AGAINST the proposal('+ savedAddress +') with the following stakes</div></br>'
		
			if(pool1 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (' + Intl.NumberFormat().format(Math.round(pool1)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool2 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (' + Intl.NumberFormat().format(Math.round(pool2)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool3 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (' + Intl.NumberFormat().format(Math.round(pool3)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool4 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (' + Intl.NumberFormat().format(Math.round(pool4)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool5 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (' + Intl.NumberFormat().format(Math.round(pool5)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool6 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (' + Intl.NumberFormat().format(Math.round(pool6)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (No active stake) <i class="input-helper"></i></label></br>'; }

			htmlMessage+='</br>';
			const totalBalance = Math.round(pool1*0.2 + pool2*0.3 + pool3*0.5 + pool4*0.75 + pool5*1.15 + pool6*1.5);
	
			if(totalBalance == 0) { htmlMessage = 'You have 0 '+tokenTicker+' staked and thus no power. Time to get some '+tokenTicker+' and stake them! What are you waiting for? </br></br><button onclick="window.location=\'https://Piggy Bank.pro\';" class="btn btn-primary mr-2">Get '+tokenTicker+' & Increase your power NOW</div>'; }

		document.getElementById("display-votingPower").innerHTML = htmlMessage;
		
	document.getElementById("btn-finalizeVote").style = "display: block;";
	document.getElementById("btn-finalizeVote").value = proposalID;
document.getElementById("btn-costToVote").style = "display: none;";
		}
		
		
		
	async function requestNFTallocation() {
			const contractAddr = document.getElementById("nftAllocationContract").value;
			
	//console.log(contractAddr);
			
			
			if(contractAddr === "") {
						Swal.fire(
						  'Error!',
						  'Please fill all fields before submitting!!',
						  'warning'
						)
			}  else {
			  await auth();



								let msgSuccess= 'Submitting new NFT allocation contract </br></br><div class="pixel-loader"></div></br> ';
							
											
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.</strong>',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(nftAllocationContract, ABI2, provider.getSigner());
				const doIt = await transaction.notifyVote(contractAddr);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshNFTallocation();
				} catch(e) {
							errorMessage(e)
						  }
				  }
				
				
			
				}
	
			
		

   
     function refreshNFTallocation() {
	     fetch(apiURL+'proposals/nftAllocation.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('nftAllocation').innerHTML = html;
		}).catch(function (err) {

			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   
   async function addressToUint(convertAddress) {
	   try {
				const contractAddress = nftAllocationContract;
				const contractAbi = [
				  "function addressToUint256(address _address) external view returns (uint256)"
				];
				const OINKContract = new ethers.Contract(contractAddress, contractAbi, provider);
				const balance = BigInt(await OINKContract.addressToUint256(convertAddress));
				return balance;
					} catch(e) {
							errorMessage(e)
						  }
   }
   
   async function getThreshold() {
				const contractAddress = consensusContract; //consensus contract imo
				const contractAbi = [
				  "function totalDTXStaked() public view returns(uint256)"
				];
				const OINKContract = new ethers.Contract(contractAddress, contractAbi, provider);
				const balance = Number(BigInt(await OINKContract.totalDTXStaked()) / BigInt(10**19));
				return balance;
   }

   document.getElementById("btn-costToVote").onclick = requestNFTallocation;
   document.getElementById("btn-finalizeVote").onclick = async function finalizeVote() {
			const proposalNumber = document.getElementById("btn-finalizeVote").value;
			const displayText = "You are about to vote for proposal ID:</br>" + proposalNumber + "</br></br><small>Note: For voting contract address is converted to number</small>";
				  Swal.fire({
				  html: 'Are you sure?',
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
				const transaction = new ethers.Contract(proxyContract, ABI, provider.getSigner());
				const doIt = await transaction.proxyVote(proposalNumber);
			
				await doIt.wait();
				
				Swal.close();
				await sleep(600);
				
				await isSuccess();
				} catch(e) {
							errorMessage(e)
						  }
				
				  }
				})
			

		}
		  