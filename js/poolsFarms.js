
	var ABI = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"},{"internalType":"address","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_launch","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"EnforceProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAllocation","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"depositFee","type":"uint16"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateFarmProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedTax","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovTax","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isBurn","type":"bool"},{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovernorTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"farmMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"memeMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeRewardReduction","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeVault","type":"event"},{"inputs":[{"internalType":"uint256","name":"_lp","type":"uint256"},{"internalType":"uint256","name":"_nft","type":"uint256"},{"internalType":"uint256","name":"_maxPulse","type":"uint256"},{"internalType":"uint256","name":"_maxPulseTotal","type":"uint256"}],"name":"changeMaxAllocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"govTaxProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"governorTransferProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"bool","name":"isBurn","type":"bool"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint16","name":"depositFee","type":"uint16"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastReducePulseAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNftAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPulseEcoAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPulseEcoTotalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalFarmUpdate","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint16","name":"newDepositFee","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposalLengths","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_isBurn","type":"bool"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_type","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rebalancePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reduceMaxPulseAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncCreditContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedType","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteFarmProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteFarmProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovTaxN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovTaxY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovernorTransferN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovernorTransferY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteVaultN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteVaultY","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var farmsContract = "0x0dc0Fabe4c9d57cCaD055b4cD627D0d24fA3C98E"

	fetch(apiURL+'api/pool-options.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("show-options").innerHTML = html
		})
		
		
				  	  
const range = document.getElementById('formControlRange3');
const client = document.getElementById('client3');

range.addEventListener('change', (e) => {
  const clientValue = e.target.value;
  client.textContent = Math.round(clientValue / 100 * delayBE);
});


		
function poolAllocationShowExpired() {
	var a = document.getElementById("poolAllocation-expired");
	var b = document.getElementById("poolAllocation-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("poolAllocation-table-active");
	var d = document.getElementById("poolAllocation-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function poolAllocationShowActive() {
	var a = document.getElementById("poolAllocation-expired");
	var b = document.getElementById("poolAllocation-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("poolAllocation-table-active");
	var d = document.getElementById("poolAllocation-table-expired");
	d.style.display="none";
	c.style.display="block";
}

function rewardReductionShowExpired() {
	var a = document.getElementById("rewardReduction-expired");
	var b = document.getElementById("rewardReduction-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("rewardReduction-table-active");
	var d = document.getElementById("rewardReduction-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function rewardReductionShowActive() {
	var a = document.getElementById("rewardReduction-expired");
	var b = document.getElementById("rewardReduction-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("rewardReduction-table-active");
	var d = document.getElementById("rewardReduction-table-expired");
	d.style.display="none";
	c.style.display="block";
}
	 

		

	fetch(apiURL+'proposals/poolAllocation.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("poolAllocationTable").innerHTML = html
		})
		
		
		

	
		async function setPoolAllocation() {
			var entry = parseFloat(document.getElementById("poolAllocation").value);
			
			const commitValue = parseInt(document.getElementById("poolAllocation-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			const depFee = 0
			const delayBEval = document.getElementById("client3").innerText * 3600;
			//const totalAllocation = document.getElementById("totalPoolAllocation").innerHTML;
			
			const bonus = Math.round(entry * 100);
			
			const selectedPool = document.getElementById("poolID").value;
			
			if(entry === "" || commitValue === "") {
						Swal.fire(
						  'Error!',
						  'Please fill the entry fields!!',
						  'warning'
						)
			} else if(commitValue <  minCostToVote) {
				const displayMsg = 'Minimum commited has to be above current minimum of ' + minCostToVote.toLocaleString() + 'DTX';
						Swal.fire('Error!',
						  displayMsg,
						  'warning'
						)
			} else {
			  await auth();
			  
const displayText = "You will sacrifice<strong> " + commitValue.toLocaleString() + " "+tokenTicker+" </strong>tokens to initiate the proposal";
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
					
				try {
				const transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				const doIt = await transaction.initiateFarmProposal(commit,selectedPool,bonus,depFee,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshPoolAllocation();
				} catch(e) {
							errorMessage(e)
						  }
				  }
				})
				}
			}
			
		async function enforcePoolAllocation(proposalNumber) {
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
				const doIt = await transaction.updateFarm(proposalNumber, true);
			
				await doIt.wait();
				
				await isSuccess2();
				
				refreshPoolAllocation();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				async function vetoPoolAllocation(proposalNumber) {
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
				const doIt = await transaction.vetoFarmProposal(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				refreshPoolAllocation();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				
	
async function votePoolAllocation(propID, forOrAgainst, isRejectPossible, requiredToReject) {
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
							
															let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote.  ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small>';
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
				var doIt = await transaction.voteFarmProposalY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
				
							} else {
						
								if(isRejectPossible && sacrificeAmount >= requiredToReject) {
									 withUpdate = true;
								} 
				var transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				var doIt = await transaction.voteFarmProposalN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
				
							}
							
			
				await doIt.wait();
						
						if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshPoolAllocation();
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}
				
				
				
		async function setRewardReduction() {
			const farmReduction = document.getElementById("formControlRange").value * 100;
			const memeReduction =  document.getElementById("formControlRange2").value * 100;
			const commitValue = parseInt(document.getElementById("rewardReduction-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			const delayBEval = document.getElementById("client4").innerText * 3600;
			
			if(commitValue === "") {
						Swal.fire(
						  'Error!',
						  'Please enter your commitment amount!',
						  'warning'
						)
			} else if(commitValue <  minCostToVote) {
				const displayMsg = 'Minimum commited has to be above current minimum of ' + minCostToVote.toLocaleString() + 'DTX';
						Swal.fire('Error!',
						  displayMsg,
						  'warning'
						)
			} else {
			  await auth();

const displayText = "You will sacrifice<strong> " + commitValue.toLocaleString() + " "+tokenTicker+" </strong>tokens to initiate the proposal";
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
					
				try {
				const transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				const doIt = await transaction.initiateRewardsReduction(commit,farmReduction,memeReduction,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshRewardReduction();
				} catch(e) {
							errorMessage(e)
						  }
					  }
					})
				
				}
			}
			
			async function enforceRewardReduction(proposalNumber) {
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
				const doIt = await transaction.executeRewardsReduction(proposalNumber);
			
				await doIt.wait();
				await isSuccess2();
				
				refreshRewardReduction();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				async function vetoRewardReduction(proposalNumber) {
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
				const doIt = await transaction.vetoRewardsReduction(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				refreshRewardReduction();
				} catch(e) {
							errorMessage(e)
						  }
				}
		

async function voteRewardReduction(propID, forOrAgainst, isRejectPossible, requiredToReject) {
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
						
						
														let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote.  ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small>';
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
				var doIt = await transaction.voteRewardsReductionY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
				
							} else {
						
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 

																	var transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				var doIt = await transaction.voteRewardsReductionN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
				
							}
			
				await doIt.wait();
						
							if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshRewardReduction();
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}		

   
   function refreshPoolAllocation() {
	     fetch(apiURL+'proposals/poolAllocation.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('poolAllocationTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   
     function refreshRewardReduction() {
	     fetch(apiURL+'proposals/rewardReduction.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('rewardReductionTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   
   async function rebalancePools() {
	   				Swal.fire({
						  title: '<strong> Confirm Transaction to Rebalance',
						  html: 'This action will rebalance so as to correct the allocations for all pools.<div class="pixel-loader"></div>',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						try {
			
				var transaction = new ethers.Contract(farmsContract, ABI, provider.getSigner());
				var doIt = await transaction.rebalancePool([6,7,8,9,10,11,12,13,14,15]);
				
						

			
				await doIt.wait();
					
					await isSuccess();
			
				
				} catch(e) {
							errorMessage(e)
						  }
   }

   

		  
		document.getElementById("btn-poolAllocation").onclick = setPoolAllocation;

		  