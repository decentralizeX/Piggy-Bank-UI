		var ABI = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"approveTreasuryTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ChangeGovernor","type":"event"},{"inputs":[{"internalType":"uint256","name":"fibonacciHaltID","type":"uint256"}],"name":"enforceDelay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"consensusProposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"EnforceDelay","type":"event"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"enforceGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amountToSend","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateTreasuryTransferProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"killTreasuryTransferProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"HaltID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"consensusProposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delayInSeconds","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"ProposalAgainstCommonEnemy","type":"event"},{"inputs":[{"internalType":"address","name":"_newGovernor","type":"address"}],"name":"proposeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"address","name":"newGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"ProposeGovernor","type":"event"},{"inputs":[{"internalType":"uint256","name":"haltProposalID","type":"uint256"}],"name":"removeDelay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"consensusProposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"RemoveDelay","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sacrificedTokens","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"consensusVoteID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"TreasuryProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"TreasuryProposalRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"TreasuryProposalVeto","type":"event"},{"inputs":[{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"delayInSeconds","type":"uint256"}],"name":"uniteAgainstTheCommonEnemy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovernor2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoTreasuryTransferProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteTreasuryTransferProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteTreasuryTransferProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"consensusProposal","outputs":[{"internalType":"uint16","name":"typeOfChange","type":"uint16"},{"internalType":"address","name":"beneficiaryAddress","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"goldenRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"haltProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"bool","name":"enforced","type":"bool"},{"internalType":"uint256","name":"consensusVoteID","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"delayInSeconds","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isGovInvalidated","outputs":[{"internalType":"bool","name":"isInvalidated","type":"bool"},{"internalType":"bool","name":"hasPassed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"tokensCastedPerVote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDTXStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"treasuryProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"amountToSend","type":"uint256"},{"internalType":"uint256","name":"consensusProposalID","type":"uint256"}],"stateMutability":"view","type":"function"}]
		
		var ABI2 = [{"inputs":[{"internalType":"address","name":"_forWallet","type":"address"}],"name":"proxySetDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"proxyVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTXToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
	var ABI3 = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ChangeGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"address","name":"newGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"ProposeGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"TreasuryEnforce","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sacrificedTokens","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"consensusVoteID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"TreasuryProposal","type":"event"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"approveTreasuryTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"consensusProposal","outputs":[{"internalType":"uint16","name":"typeOfChange","type":"uint16"},{"internalType":"address","name":"beneficiaryAddress","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"enforceGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"governorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"highestConsensusVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amountToSend","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateTreasuryTransferProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isGovInvalidated","outputs":[{"internalType":"bool","name":"isInvalidated","type":"bool"},{"internalType":"bool","name":"hasPassed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"killTreasuryTransferProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposalLengths","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newGovernor","type":"address"}],"name":"proposeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"senateVeto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"senateVetoTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncCreditContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"tokensCastedPerVote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDTXStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"treasuryProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"amountToSend","type":"uint256"},{"internalType":"uint256","name":"consensusProposalID","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryRequestsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"consensusID","type":"uint256"}],"name":"updateHighestConsensusVotes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"vetoGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"vetoGovernor2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoTreasuryTransferProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteTreasuryTransferProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteTreasuryTransferProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var consensusContract = "0x7917e04Eb4463CF80Cc00040BA0f1fF125926eF3"
var proxyContract = "0x003F5d5bB97028AF17B0925B08cb184a74F9030f"

		var tokenAddress = "0xFAaC6a85C3e123AB2CF7669B1024f146cFef0b38"
		var treasuryAddress = "0x3a4DA32dc29b146F26D8527e37FeaAe45fBebe69";

				
				const tokenTicker = "OINK"
		  
const range = document.getElementById('formControlRange');
const client = document.getElementById('client');

range.addEventListener('change', (e) => {
  const clientValue = e.target.value;
  client.textContent = Math.round(clientValue / 100 * delayBE);
});

function changeFunc(option) {
	if(option == "other") {
		document.getElementById("dependOnOption").style.display = "block";
	} else {
		document.getElementById("dependOnOption").style.display = "none";
	}
}

function changeFunc2(option) {
	if(option == "custom") {
		document.getElementById("recipientAddress").value = "";
	} else {
		document.getElementById("recipientAddress").value = option;
	}
}

	
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
	let delayBeforeEnforce
	
	fetch(apiURL+'api/delayBeforeEnforce.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			delayBeforeEnforce = Number(html)
		})

	fetch(apiURL+'proposals/treasuryTransfer.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("treasuryTransferTable").innerHTML = html
		})

		
		async function requestTreasuryWithdraw() {
			var entry = document.getElementById("tokenAmount").value;
			const pricer = BigInt(entry) * BigInt(10**18);
			const commitValue = parseInt(document.getElementById("treasuryWithdraw-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			const delayBEval = document.getElementById("client").innerText * 3600;

			let tokenContractAddress
			if(document.getElementById("tokenContractAddress").value != "other") {
				if(document.getElementById("tokenContractAddress").value == "0x0000000000000000000000000000000000001010") {
					tokenContractAddress = "0x0000000000000000000000000000000000001010"
				} else {
					tokenContractAddress = tokenAddress;
				}
			} else	{
				tokenContractAddress = document.getElementById("tCa").value;
			}
			const recipientAddress = document.getElementById("recipientAddress").value;
			

			const treasuryAmount = await treasuryBalance(tokenContractAddress);

			if(entry === "" || tokenContractAddress === "" || recipientAddress === "" || commitValue === "") {
						Swal.fire(
						  'Error!',
						  'Please fill all fields before submitting!!',
						  'warning'
						)
			} else if(commitValue < minCostToVote*10) {
						Swal.fire('Error!',
						  'A minimum commitment of <strong>' + (minCostToVote*10).toLocaleString() + tokenTicker+'</strong> is required to request a treasury withdrawal!',
						  'warning'
						)
			} else if(treasuryAmount < pricer) {
					Swal.fire({
				  title: 'Error!',
				  html: 'Insufficient balance in the treasury wallet! </br></br>Available Balance: <strong>'+(Number(BigInt(treasuryAmount)/BigInt(10**18)).toLocaleString())+'</strong> Tokens',
				  icon: 'warning',
})
	
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
					try {
				const transaction = new ethers.Contract(consensusContract, ABI, provider.getSigner());
				const doIt = await transaction.initiateTreasuryTransferProposal(commit,tokenContractAddress,recipientAddress,pricer,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshTreasuryTransfer();
				} catch(e) {
							errorMessage(e)
						  }
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
				const transaction = new ethers.Contract(consensusContract, ABI, provider.getSigner());
				const doIt = await transaction.approveTreasuryTransfer(proposalNumber);
			
				await doIt.wait();
				await isSuccess2();
				
				refreshTreasuryTransfer();
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
				const transaction = new ethers.Contract(consensusContract, ABI, provider.getSigner());
				const doIt = await transaction.vetoTreasuryTransfer(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				
				refreshTreasuryTransfer();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
		


				
				
						
async function voteTreasuryTransfer(propID, forOrAgainst, isRejectPossible, requiredToReject) {
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
												var transaction = new ethers.Contract(consensusContract, ABI, provider.getSigner());
				var doIt = await transaction.voteTreasuryTransferProposalY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
				
							} else {
							
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
var transaction = new ethers.Contract(consensusContract, ABI, provider.getSigner());
				var doIt = await transaction.voteTreasuryTransferProposalN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
							}
							
			
				await doIt.wait();
						
							if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
							
							refreshTreasuryTransfer();
							} catch(e) {
							errorMessage(e)
						  }
						  }
						  })
				
					  }
				})	
				}		
						
	
				
				
		async function killTreasuryTransfer(proposalNumber) {
			  await auth();

						let msgSuccess= 'Sufficient stake voting has been provided. Proposal can be killed.</br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						try {
const transaction = new ethers.Contract(consensusContract, ABI, provider.getSigner());
				const doIt = await transaction.killTreasuryTransferProposal(proposalNumber);
				
								await doIt.wait();
				await isSuccess3();
				refreshTreasuryTransfer();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
async function treasuryWithdrawStatus(proposalID) {
	Swal.fire({
						  title: '<strong>Await while loading votes...</strong>',
						  html: '</br></br><div class="pixel-loader"></div>',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
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
			let htmlMessage = "";
			const totalBalance1 = pool1 * 0.2 + pool2 * 0.3 + pool3 * 0.5 + pool4 * 0.75 + pool5 * 1.15 + pool6 * 1.5;
			const totalBalance2 = pool1x * 0.2 + pool2x * 0.3 + pool3x * 0.5 + pool4x * 0.75 + pool5x * 1.15 + pool6x * 1.5;
			
			const savedVotesFor = await getSavedVotes(proposalID)
			const savedVotesAgainst = await getSavedVotes(proposalID+1)
			
			if(totalBalance1 < savedVotesFor) { totalBalance1 = savedVotesFor }
			if(totalBalance2 < savedVotesAgainst) { totalBalance2 = savedVotesAgainst }
			
			if(totalBalance1 == 0) { htmlMessage+='&#9989; no '+tokenTicker+' vote allocated in favor of this proposal</br>'; } else { htmlMessage+= '</br>&#9989; Votes For: ' + Intl.NumberFormat().format(Math.round(totalBalance1)) + ' <img src="favicon/favicon-32x32.png" width="15px" height="15px">DTX(<small>weighted</small>)</br>'; }
			if(totalBalance2 == 0) { htmlMessage+='&#10060; no '+tokenTicker+' vote allocated against this proposal'; } else { htmlMessage+= '</br>&#10060; Votes Against: ' + Intl.NumberFormat().format(Math.round(totalBalance2)) + ' <img src="favicon/favicon-32x32.png" width="15px" height="15px">DTX(<small>weighted</small>)</br>'; }

			let totalStaked = await totalStaked2(consensusContract)
			console.log(totalStaked)
			let requiredTokens = Number(totalStaked) / 10**18 * 0.15
			htmlMessage+='</br>Required: '+requiredTokens.toLocaleString()+' DTX'
			
	let msgSuccess= '</br></br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="voteFor('+proposalID+')"> Vote For</button><button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(221, 51, 51);" onclick="voteFor('+(proposalID+1)+'">Vote against</button></br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="updateHighestConsensusVotes('+proposalID+')"> Save Votes</button>';
						Swal.fire({
						  title: 'Treasury Withdrawal',
						  html: 'Current status:</br>'+htmlMessage+msgSuccess+ '</br></br><li>Atleast 15%(weighted) '+tokenTicker+' tokens must be committed for the proposal to pass</li><li> If atleast 33% of the votes are against, the proposal is rejected</li><li>15% of weighted vote is sufficient to kill any treasury transfer proposal</li><li>Treasury Transfer proposal can be finalized(enforced or rejected) after 2x Delay Before Enforce period ('+(delayBeforeEnforce*2/24)+' Days)</li>',
						  icon: 'info',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
}

async function updateHighestConsensusVotes(proposalID) {
	//get consensus ID 
	//and call the function
	
	
	

				
				Swal.fire({
						  title: '<strong>Updating votes....</strong>',
						  html: '</br></br>Using miners you can only vote for one proposal simultaneously. However, votes can be saved, allowing you to vote for another proposal. 2 transactions are triggered to update the highest count of votes for and votes against.</br><div class="pixel-loader"></div>',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						/*
						const contractAbi = [
				  `function treasuryProposal(uint256)
        external
        view
        returns (
            bool valid,
            uint256 firstCallTimestamp,
            uint256 valueSacrificedForVote,
            uint256 valueSacrificedAgainst,
            uint256 delay,
            address tokenAddress,
            address beneficiary,
            uint256 amountToSend,
            uint256 consensusProposalID
        )`
				];
				
				const timeDepositContract = new ethers.Contract(consensusContract, contractAbi, provider)
				const userShares = await timeDepositContract.treasuryProposal(proposalID)
				const userShares2 = Number(userShares[8])
				*/

	
				
				
						try {
				var transaction = new ethers.Contract(consensusContract, ABI3, provider.getSigner());
				var doIt = await transaction.updateHighestConsensusVotes(proposalID);
				await doIt.wait();
				
				var transaction = new ethers.Contract(consensusContract, ABI3, provider.getSigner());
				var doIt = await transaction.updateHighestConsensusVotes(proposalID+1);
				await doIt.wait();
				
				Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Votes updated!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Your staking power has been allocated to the proposal</strong>. </br></br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				} catch(e) {
							errorMessage(e)
						  }
						  
						  
						  
}

async function voteFor(proposalID) {
	//call the contract (proxy vote)
	//and on success show the success message
	Swal.fire({
						  title: '<strong>Committing vote</strong>',
						  html: '</br></br>Awaiting confirmation in wallet...</br><div class="pixel-loader"></div>',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						try {
				var transaction = new ethers.Contract(proxyContract, ABI2, provider.getSigner());
				var doIt = await transaction.proxyVote(proposalID);
				await doIt.wait();
				
				Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Vote committed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Your staking power has been allocated to the proposal</strong>. </br></br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				} catch(e) {
							errorMessage(e)
						  }
}
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
			
		
			
			async function getSavedVotes(proposalID) {
				const contractAbi = [
				  "function highestConsensusVotes(uint256) external view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(consensusContract, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.highestConsensusVotes(proposalID))
				//console.log(actualTokens)
				return Number(userShares / BigInt(10**18));
			}
			
			async function approveTransfer(proposalID) {
				Swal.fire({
						  title: '<strong>Enforcing Treasury Transfer</strong>',
						  html: '</br></br>Awaiting confirmation in wallet...</br><div class="pixel-loader"></div>',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						try {
				var transaction = new ethers.Contract(consensusContract, ABI, provider.getSigner());
				var doIt = await transaction.approveTreasuryTransfer(proposalID);
				await doIt.wait();
				
				await isSuccess2;
				refreshTreasuryTransfer();
				} catch(e) {
							errorMessage(e)
						  }
			}

  async function totalStaked2(contractAddress) {
    const contractAbi = [
        "function totalDTXStaked() public view returns(uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = await OINKContract.totalDTXStaked();
    return balance;
}
   
   function refreshTreasuryTransfer() {
	     fetch(apiURL+'proposals/treasuryTransfer.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('treasuryTransferTable').innerHTML = html;
		}).catch(function (err) {

			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   
   		
		async function treasuryBalance(contractAddress) {
			if(contractAddress == "0x0000000000000000000000000000000000001010" || contractAddress == "0x0000000000000000000000000000000000000000") {
				let returno = await provider.getBalance(treasuryAddress).then((reselt) => {


return (BigInt(ethers.utils.formatUnits(reselt, "wei")))
})			

return returno
			} else {
				const contractAbi = [
				  "function balanceOf(address account) external view returns (uint256)"
				];
				const OINKContract = new ethers.Contract(contractAddress, contractAbi, provider);
				const balance = Number(BigInt(await OINKContract.balanceOf(treasuryAddress)));
				return balance;
			}
		}
		
		  
		document.getElementById("btn-treasuryWithdraw").onclick = requestTreasuryWithdraw;
		  
		  
		