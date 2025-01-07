var ABI = [{"inputs":[{"internalType":"address","name":"_forWallet","type":"address"}],"name":"proxySetDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"proxyVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTXToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
var ABImining = [{"inputs":[{"internalType":"contract IDTX","name":"_token","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"AddAndExtendStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"GiftDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"HopDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"DTXamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"newPool","type":"address"}],"name":"HopPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"goodSamaritan","type":"address"},{"indexed":false,"internalType":"uint256","name":"DTXamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"MigrateStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"RemoveVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userDelegating","type":"address"},{"indexed":false,"internalType":"address","name":"delegatee","type":"address"}],"name":"SetDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"StakeAllowanceRevoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shareAllowance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDeposit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"StakeApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"}],"name":"TransferStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_allowanceID","type":"uint256"}],"name":"TransferStakeFrom","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedSender","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"_recipientAddr","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"_lockUpTokensInSeconds","type":"uint256"}],"name":"addAndExtendStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowOrigin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"allowTxOrigin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateHarvestDTXRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingDTXRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"votingAddress","type":"address[]"},{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"delegateeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNrOfStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"getUserShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserTotalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_minToServeInSecs","type":"uint256"}],"name":"giftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"giveStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gracePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"},{"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"_mandatoryTime","type":"uint256"}],"name":"hopDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_poolAddress","type":"address"}],"name":"hopStakeToAnotherPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"migrateAllStakes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"migrateStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumGift","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialTransfers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialWithdrawals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"nrOfstakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialTransfers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialWithdrawals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"revokeStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_callFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_delegate","type":"address"},{"internalType":"bool","name":"asProxy","type":"bool"}],"name":"setDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPool","type":"address"}],"name":"setMigrationPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setMinimumGiftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_pool","type":"address[]"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_sender","type":"address[]"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"stakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_poolInto","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"stakeRollover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IDTX","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalVotesForID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"allowanceID","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"transferStakeFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"}],"name":"transferStakeToAnotherWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedPoolCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedSenderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateMinGiftGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateMinimumGift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDelegate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"lastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"dtxAtLastUserAction","type":"uint256"},{"internalType":"uint256","name":"lastUserActionTime","type":"uint256"},{"internalType":"uint256","name":"mandatoryTimeToServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userVote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"bool","name":"asProxy","type":"bool"}],"name":"voteForProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"votingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"votingCreditAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFeePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]


	var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"	

var proxyContract = "0x003F5d5bB97028AF17B0925B08cb184a74F9030f"
		
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
	const delegateeWallet = document.getElementById("delegateeAddress").value;
				htmlMessage+='</br></br><div class="alert alert-fill-info" role="alert"><strong>Delegate Vote: </strong> You are about to delegate your voting power to wallet '+ delegateeWallet + ' with the following stakes</div></br>'
		
			if(pool1 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (' + Intl.NumberFormat().format(Math.round(pool1)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool2 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (' + Intl.NumberFormat().format(Math.round(pool2)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool3 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (' + Intl.NumberFormat().format(Math.round(pool3)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 6 Month (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool4 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (' + Intl.NumberFormat().format(Math.round(pool4)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 1 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool5 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (' + Intl.NumberFormat().format(Math.round(pool5)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 3 Year (No active stake) <i class="input-helper"></i></label></br>'; }
			if(pool6 != 0) { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (' + Intl.NumberFormat().format(Math.round(pool6)) + ' '+tokenTicker+' staked) <i class="input-helper"></i></label></br>'; } else { htmlMessage+= '<label class="form-check-label"><i class="mdi mdi-vector-circle"></i> 5 Year (No active stake) <i class="input-helper"></i></label></br>'; }

			htmlMessage+='</br>';
			const totalBalance = Math.round(pool1*0.2 + pool2*0.3 + pool3*0.5 + pool4*0.75 + pool5*1.15 + pool6*1.5);
	
			if(totalBalance == 0) { htmlMessage = 'You have 0 '+tokenTicker+' staked and thus no power. Time to get some '+tokenTicker+' and stake them! What are you waiting for? </br></br><button onclick="window.location=\'https://Piggy Bank.pro\';" class="btn btn-primary mr-2">Get '+tokenTicker+' & Increase your power NOW</div></br>'; }

		
	document.getElementById("btn-delegateVoteFinish").style = "display: block;";
	document.getElementById("btn-delegateVote").style = "display: none;";
			document.getElementById("display-votingPower").innerHTML = htmlMessage;
		}
		
		
		//TO-DO: Change ABI AND.....change contract address
		
		async function checkVotingPowerFinish() {
			const delegatee = document.getElementById("delegateeAddress").value;
			const displayText = "You are about to delegate your voting power to wallet <strong>" + delegatee + "</strong>";
				  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Delegate my voting!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
					 

							let msgSuccess= 'You will delegate your voting power to wallet <strong>' + delegatee + ' </strong>  </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
							
											
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
try {
				const transaction = new ethers.Contract(proxyContract, ABI, provider.getSigner());
				const doIt = await transaction.proxySetDelegate(delegatee);
			
				await doIt.wait();
				
	   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Delegatee has been <strong>successfully set</strong>. </br></br>Delegatee can now cast votes using your shares(voting power).</br> </br> <small>You can close this window.</small>',
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
				})

		}
		
		 const STORAGE_KEY = 'savedAddresses';
		 var propID
		 var textarea
		
	
   async function voteAsDelegate() {
	  
	   //open swal with multilines
	    propID = Number(document.getElementById("voteAsDelegate").value);
			
			var displayText
		
					let savedAddresses = localStorage.getItem(STORAGE_KEY);
    if (savedAddresses) {
      
			 displayText = `
		To vote as a delegate, enter addresses you wish to vote for. Enter one address per line</br></br><textarea id="addresses" rows="10" cols="50">
`+savedAddresses+`
</textarea>
`
    } else {
			 displayText = `
		To vote as a delegate, enter addresses you wish to vote for. Enter one address per line</br></br><textarea id="addresses" rows="10" cols="50" value="`+savedAddresses+`">

</textarea>
`
	}
	
	   

	
			

				  Swal.fire({
				  title: 'Vote As Delegate',
				  html: displayText,
				  icon: 'info',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Vote as Delegate!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
					 
					  textarea = document.getElementById('addresses');
					  
					 try {
        localStorage.setItem(STORAGE_KEY, textarea.value);
    } catch (error) {
        console.error('Error saving addresses:', error);
    }
					 
					 
					     const addresses = textarea.value.split('\n')
						// Remove any empty lines and trim whitespace
						.filter(address => address.trim() !== '')
						.map(address => address.trim());

							let msgSuccess= 'You will vote as a delegate for ID <strong>' + propID + ' </strong> </br> A transaction is required for each mining contract. You can close the windows once you sign transactions.</br></br><div class="pixel-loader"></div></br> ';
								Swal.fire({
						  title: '<strong> Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
											
			
					
try {
				const transaction1 = new ethers.Contract(pool1Month, ABImining, provider.getSigner());
				const doIt1 = transaction1.delegateeVote(addresses, propID);
				
				const transaction2 = new ethers.Contract(pool3Month, ABImining, provider.getSigner());
				const doIt2 = transaction1.delegateeVote(addresses, propID);
				
				const transaction3 = new ethers.Contract(pool6Month, ABImining, provider.getSigner());
				const doIt3 = transaction1.delegateeVote(addresses, propID);
				
				const transaction4 = new ethers.Contract(pool1Year, ABImining, provider.getSigner());
				const doIt4 = transaction1.delegateeVote(addresses, propID);
				
				const transaction5 = new ethers.Contract(pool3Year, ABImining, provider.getSigner());
				const doIt5 = transaction1.delegateeVote(addresses, propID);
				
				const transaction6 = new ethers.Contract(pool5Year, ABImining, provider.getSigner());
				const doIt6 = transaction1.delegateeVote(addresses, propID);
			
				
				
	
				
				/*
				   Swal.close();
				   
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction(s) confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Delegatee has been <strong>successfully set</strong>. </br></br>Delegatee can now cast votes using your shares(voting power).</br> </br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				*/
				
				} catch(e) {
							errorMessage(e)
						  }
				
				  }
				})
   }

			function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
		  
		document.getElementById("btn-delegateVote").onclick = checkVotingPower;
		document.getElementById("btn-delegateVoteFinish").onclick = checkVotingPowerFinish;
		  	document.getElementById("btn-voteAsDelegate").onclick = voteAsDelegate;