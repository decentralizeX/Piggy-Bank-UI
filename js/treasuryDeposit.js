
		var ABI = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"},{"internalType":"address","name":"_masterchef","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"ExecuteProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAllocation","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"depositFee","type":"uint16"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateFarmProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedBurn","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedTax","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovTax","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isBurn","type":"bool"},{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovernorTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"farmMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"memeMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeRewardReduction","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"VetoProposal","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"burnProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"withUpdate","type":"bool"}],"name":"enforceRewardReduction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeRewardsReduction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmMultiplierDuringBoost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"govTaxProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"governorTransferProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"bool","name":"isBurn","type":"bool"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint16","name":"depositFee","type":"uint16"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"multiplierFarms","type":"uint256"},{"internalType":"uint256","name":"multiplierMemePools","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateRewardsReduction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isReductionEnforced","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"memeMultiplierDuringBoost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldChef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalFarmUpdate","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint16","name":"newDepositFee","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_isBurn","type":"bool"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposeRewardReduction","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"farmMultiplier","type":"uint256"},{"internalType":"uint256","name":"memeMultiplier","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateAllPools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"updateFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoRewardsReduction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteBurnN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteBurnY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteFarmProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteFarmProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovTaxN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovTaxY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovernorTransferN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovernorTransferY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteRewardsReductionN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteRewardsReductionY","outputs":[],"stateMutability":"nonpayable","type":"function"}]
//abi frm farms


var farmsContract = "0x0dc0Fabe4c9d57cCaD055b4cD627D0d24fA3C98E"

		  
const range = document.getElementById('formControlRange');
const client = document.getElementById('client');

range.addEventListener('change', (e) => {
  const clientValue = e.target.value;
  client.textContent = Math.round(clientValue / 100 * delayBE);
});



function showExpired() {
	var a = document.getElementById("treasuryTransfer-expired");
	var b = document.getElementById("treasuryTransfer-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("treasuryTransfer-table-active");
	var d = document.getElementById("treasuryTransfer-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function showActive() {
	var a = document.getElementById("treasuryTransfer-expired");
	var b = document.getElementById("treasuryTransfer-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("treasuryTransfer-table-active");
	var d = document.getElementById("treasuryTransfer-table-expired");
	d.style.display="none";
	c.style.display="block";
}

		
			fetch(apiURL+'proposals/treasuryDeposit.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("treasuryDepositTable").innerHTML = html
		})
		
			  fetch(apiURL+'api/governorBalance.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("availableTokens").innerHTML = '<input type="text" class="form-control" id="govBalance" value="'+Number(html).toLocaleString()+' '+tokenTicker+'">'  
		})


		async function requestTreasuryWithdraw() {
			var entry = document.getElementById("tokenAmount").value;
			const pricer = BigInt(entry) * BigInt(10**18);
			const commitValue = parseInt(document.getElementById("treasuryWithdraw-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			const delayBEval = document.getElementById("client").innerText * 3600;
			
			
			if(entry === "" || commitValue === "") {
						Swal.fire(
						  'Error!',
						  'Please fill all fields before submitting!!',
						  'warning'
						)
			} else if(commitValue < minCostToVote) {
						Swal.fire('Error!',
						  'A minimum commitment of ' + minCostToVote.toLocaleString() + ''+tokenTicker+' is required to request a treasury transfer!',
						  'warning'
						)
			} else {
			  await auth();

			  const displayText = "You will sacrifice <strong>" + commitValue.toLocaleString() + " "+tokenTicker+"</strong> tokens to initiate the proposal";
			  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, submit proposal!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
					  	let msgSuccess= 'You will sacrifice <strong>' + commitValue.toLocaleString() + ' '+tokenTicker+'</strong> to initiate the proposal. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
							
											
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				};

						
					try {
				
				const transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				const doIt = await transaction.proposeGovernorTransfer(commit,pricer,false,0,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshTreasuryDeposit();
				} catch(e) {
							errorMessage(e)
						  }
				  })
				}
			}

		async function enforce(proposalNumber) {
			  await auth();

	let msgSuccess= 'Proposal can be enforced. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						try {
				const transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				const doIt = await transaction.executeGovernorTransfer(proposalNumber);
			
				await doIt.wait();
				await isSuccess2();
				refreshTreasuryDeposit();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
					async function veto(proposalNumber) {
			  await auth();

				let msgSuccess= 'Proposal can be rejected. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						try {
				const transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				const doIt = await transaction.vetoGovernorTransfer(proposalNumber);
			
				await doIt.wait();
				await isSuccess3();
				
				refreshTreasuryDeposit();
				} catch(e) {
							errorMessage(e)
						  }
				}
		
		
		
		
			
						
async function voteGovernorTransfer(propID, forOrAgainst, isRejectPossible, requiredToReject) {
	   let decisionText = 'Voting <strong>in favor of</strong> the proposal';
	   if(!forOrAgainst) { decisionText = 'Voting <strong>Against</strong> the proposal'; }
	   let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>DTX</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br><small>' + decisionText + '</small> ';
		let withUpdate = false;
Swal.fire({
		  title: 'Add votes to proposal?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Cast Vote!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
					  let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	
					  await auth();
					  
						let displayView = "against"; 
						if(forOrAgainst) { 
						 displayView = "in favor of";
						} 
						
					const displayText2 = "You will sacrifice <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens to vote <strong>" + displayView + "</strong> the proposal";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Vote now!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							
							
																			let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote. </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Freedom comes with a price.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						try {
							if(forOrAgainst) {
								
												var transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				var doIt = await transaction.voteGovernorTransferY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
				
				
							} else {
								
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
												var transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				var doIt = await transaction.voteGovernorTransferN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
							}
			
			
				await doIt.wait();
						
							if(!withUpdate) {
	await isSuccess();
} else {
	await isSuccess3();
}

						refreshTreasuryDeposit();
						} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}		

   
   function refreshTreasuryDeposit() {
	     fetch(apiURL+'proposals/treasuryDeposit.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('treasuryDepositTable').innerHTML = html;
		}).catch(function (err) {

			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
  
		  
		document.getElementById("btn-treasuryWithdraw").onclick = requestTreasuryWithdraw;
		  