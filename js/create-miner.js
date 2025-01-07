  		ABI = [{"inputs":[{"internalType":"contract IDTX","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_dummyToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"uint256","name":"_poolID","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"AddAndExtendStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"GiftDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"HopDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"DTXamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"newPool","type":"address"}],"name":"HopPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"goodSamaritan","type":"address"},{"indexed":false,"internalType":"uint256","name":"DTXamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"MigrateStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"RemoveVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userDelegating","type":"address"},{"indexed":false,"internalType":"address","name":"delegatee","type":"address"}],"name":"SetDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"StakeAllowanceRevoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shareAllowance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDeposit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"StakeApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"}],"name":"TransferStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_allowanceID","type":"uint256"}],"name":"TransferStakeFrom","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedSender","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"_recipientAddr","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"_lockUpTokensInSeconds","type":"uint256"}],"name":"addAndExtendStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowOrigin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"allowTxOrigin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateHarvestDTXRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingDTXRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"votingAddress","type":"address[]"},{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"delegateeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dummyToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNrOfStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"getUserShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserTotalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_minToServeInSecs","type":"uint256"}],"name":"giftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"giveStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gracePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"},{"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"_mandatoryTime","type":"uint256"}],"name":"hopDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_poolAddress","type":"address"}],"name":"hopStakeToAnotherPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"migrateAllStakes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"migrateStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumGift","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialTransfers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialWithdrawals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"nrOfstakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialTransfers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialWithdrawals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"revokeStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_callFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_delegate","type":"address"},{"internalType":"bool","name":"asProxy","type":"bool"}],"name":"setDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPool","type":"address"}],"name":"setMigrationPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setMinimumGiftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"stakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_poolInto","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"stakeRollover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"}],"name":"stopEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IDTX","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalVotesForID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"allowanceID","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"transferStakeFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"}],"name":"transferStakeToAnotherWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedPoolCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedSenderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateMinGiftGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateMinimumGift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDelegate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"lastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"dtxAtLastUserAction","type":"uint256"},{"internalType":"uint256","name":"lastUserActionTime","type":"uint256"},{"internalType":"uint256","name":"mandatoryTimeToServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userVote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"bool","name":"asProxy","type":"bool"}],"name":"voteForProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"votingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"votingCreditAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawDummy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFeePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]



var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"
/*
				HOW TO CALCULATE APY:
				annual inflation = blocks in year * reward per block
				Allocation for pool / total allocation
				That percentage * annual inflation
				That number / total staked in that pool for APY (+ bonuses )
				
				need total allocation 
				allocation for each pool 
				
			*/
			
			
			function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
			
			var blocksInYear = 2920000
			
			var rewardPerBlock
			
			var allocations
			
			var poolBalances
			
			var bonuses
			
			fetch(apiURL+'api/rewardPerBlock.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			rewardPerBlock = html;
		})
		fetch(apiURL+'api/totalAllocation.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			totalAllocation = html;
		})
		fetch(apiURL+'api/poolAllocations.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			allocations = JSON.parse(html);
		})
		fetch(apiURL+'api/poolBalances.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			poolBalances = JSON.parse(html);
		})
		
		fetch(apiURL+'api/rollOverBonuses.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			bonuses = JSON.parse(html);
		})
		
		
		sleep(3000).then(() => {
			console.log(allocations)
			console.log(rewardPerBlock)
			console.log(blocksInYear * rewardPerBlock) 
			console.log(allocations[7] / totalAllocation)
			console.log(poolBalances[5])
			//console.log("rewards for pool1: " + ((blocksInYear * rewardPerBlock) * (allocations[2] / totalAllocation)))
			//console.log("and balance in the pool: " + poolBalances[0])
			document.getElementById("apy1").innerHTML = 'Estimated APY: '+Math.round((((blocksInYear * rewardPerBlock) * (allocations[0] / totalAllocation)) / poolBalances[0])*100 + 12 * Number(bonuses[0]))+'%'
			document.getElementById("apy2").innerHTML = 'Estimated APY: '+Math.round((((blocksInYear * rewardPerBlock) * (allocations[1] / totalAllocation)) / poolBalances[1])*100 + 4 * Number(bonuses[1]))+'%'
			document.getElementById("apy3").innerHTML = 'Estimated APY: '+Math.round((((blocksInYear * rewardPerBlock) * (allocations[2] / totalAllocation)) / poolBalances[2])*100 + 2 * Number(bonuses[2]))+'%'
			document.getElementById("apy4").innerHTML = 'Estimated APY: '+Math.round((((blocksInYear * rewardPerBlock) * (allocations[3] / totalAllocation)) / poolBalances[3])*100 + 1 * Number(bonuses[3]))+'%'
			document.getElementById("apy5").innerHTML = 'Estimated APY: '+Math.round((((blocksInYear * rewardPerBlock) * (allocations[4] / totalAllocation)) / poolBalances[4])*100 + 1/3 * Number(bonuses[4]))+'%'
			document.getElementById("apy6").innerHTML = 'Estimated APY: '+Math.round((((blocksInYear * rewardPerBlock) * (allocations[5] / totalAllocation)) / poolBalances[5])*100 + 1/5 * Number(bonuses[5]))+'%'
    })
		

			
var xpdToken = tokenContract;


var pool1 = pool1Month
var pool2 = pool3Month
var pool3 = pool6Month
var pool4 = pool1Year
var pool5 = pool3Year
var pool6 = pool5Year

var poolInto


async function createStake(option) {
    await auth();
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

    let swalio = Swal.fire({
        title: '<strong>Stake '+projectName+' Currency('+tokenTicker+')</strong>',
        html: '<img src="img/pulse-dao.png" style="max-width: 150px"></br></br><div id="replace"><div class="pixel-loader"></div></div>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Create Stake!'
    })

    let balance = await checkBalance2(account, xpdToken);
    let raw = BigInt(balance[0])
    balance = balance[1] / 100


    if (balance == 0) {
        Swal.fire({
            title: 'Insufficient '+projectName+'('+tokenTicker+')',
            html: '<img src="img/pulse-dao.png" style="max-width: 150px"></br></br> You have no '+projectName+' ('+tokenTicker+') tokens in your wallet',
            showCancelButton: true,
            showConfirmButton: false
        })

    } else {
        document.getElementById("replace").innerHTML = 'Your Balance:<strong> <div id="userBalance" style="display: inline;">' + balance.toLocaleString() + '</div> '+tokenTicker+'</strong></br></br></br><strong>'+tokenTicker+'</strong> To Stake:  <input id="client2" value="' + balance + '" autocapitalize="off" class="swal2-input" placeholder="enter wallet" type="text" style="display: flex; max-width: 300px;"></input> </label><input type="range" class="form-control-range" id="formControlRange2" style="max-width:300px;" value="100"></br></br><strong>Create Stake To:</strong><select class="swal2-select" style="display: flex;" name="useDefault" id="useDefault" onchange="displayCustom(value);">   <option value="0">Your Wallet</option><option value="1">to Another Wallet(Gift)</option></select><div id="displayingCustom" style="display: none;"><small>Gift a stake to another wallet</br> Mandatory Serve is an optional period of days during which stake can not be withdrawn under any circumstances(no emergency end possible)</small></br></br>Wallet Address:</br><input id="walletAddress" autocapitalize="off" class="swal2-input" placeholder="enter wallet" type="text" style="display: flex; max-width: 300px;"> Mandatory Serve (Days)</br><input id="mandatoryServe" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex; max-width: 75px;" value="0"></div>';

        var delayBE = balance;

        const range2 = document.getElementById('formControlRange2');
        const client2 = document.getElementById('client2');

        range2.addEventListener('change', (d) => {
            const clientValue2 = d.target.value;
            client2.value = Math.round(clientValue2 / 100 * delayBE);
        });


        swalio.then(async (result) => {
            if (result.isConfirmed) {
                let duration
                if (option == 1) {
                    poolInto = pool1
                    duration = "1 Month"
                } else if (option == 2) {
                    poolInto = pool2
                    duration = "3 Month"
                } else if (option == 3) {
                    poolInto = pool3
                    duration = "6 Month"
                } else if (option == 4) {
                    poolInto = pool4
                    duration = "1 Year"
                } else if (option == 5) {
                    poolInto = pool5
                    duration = "3 Year"
                } else if (option == 6) {
                    poolInto = pool6
                    duration = "5 Year"
                }
                //add here other pools 
                //what we need done is...
				let stakeAmount 
				if (!document.getElementById("client2").value.isInteger) {
                stakeAmount = BigInt(Math.round(document.getElementById("client2").value*(10**8))) * BigInt(10**10) 
				} else {
					 stakeAmount = BigInt(document.getElementById("client2").value) * BigInt(10**18)
				}

                if (document.getElementById("useDefault").value == 1) { //is GIFT
                    let giftWallet = document.getElementById("walletAddress").value
                    let serveAmount = document.getElementById("mandatoryServe").value
                    //trigger GIFT stake here 

                    Swal.fire({
                        title: '<strong>Confirm transaction in wallet</strong>',
                        html: '</br> You are about to <strong>GIFT</strong> a stake to wallet:</br><small><strong>' + giftWallet + '</strong></small></br></br>Stake Amount: <strong>' + Number(document.getElementById("client2").value).toLocaleString() + ' '+tokenTicker+'</strong></br> time-deposited for <strong>' + duration + '</strong> with mandatory serve of <strong>' + serveAmount + '</strong> days<div class="pixel-loader"></div>',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })


                    try {
	
                        const transaction = new ethers.Contract(poolInto, ABI, provider.getSigner());
                        const doIt = await transaction.giftDeposit(stakeAmount, giftWallet, serveAmount*86400);
                        await doIt.wait();
						
						localStorage.removeItem('userAddress')
						localStorage.removeItem('allStakes')
						
                        Swal.close();

                        sleep(610).then(() => {
                            triggerConfetti();
                        })

						
						if(isTestnet) {
							let actionToLog = 'giftStake'
							if(localStorage.getItem(actionToLog) != undefined) {
							const now = new Date();
							const dayNumber = now.getDay() + (now.getYear() * 365)
								if(localStorage.getItem(actionToLog) != dayNumber) {
									localStorage.setItem(actionToLog, dayNumber)
									fetch('/callback/papi.html?wallet='+account+'&action='+actionToLog);
								} 
							} else {
								const now = new Date();
								const dayNumber = now.getDay() + (now.getYear() * 365);
									localStorage.setItem(actionToLog, dayNumber)
									fetch('/callback/papi.html?wallet='+account+'&action='+actionToLog);
							}
						}

                        sleep(2100).then(() => {
                            Swal.fire({
                                title: '<strong>Congratulations! Stake has been created!',
                                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Stake has been created. You can view your stake by clicking on the button below</br></br> <a href="view-all-CD.html"><button class="swal2-confirm swal2-styled" style="display: inline-block;"> View Stakes</button></a> ',
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: false
                            })
                        })
                    } catch (e) {
                        errorMessage(e)
                    }

                } else {
                    //trigger regullar stake here

                    Swal.fire({
                        title: '<strong>Confirm transaction in wallet</strong>',
                        html: '</br> You are about to create a stake of <strong>' + Number(document.getElementById("client2").value).toLocaleString() + ' '+tokenTicker+'</strong> time-deposited for <strong>' + duration + '</strong><div class="pixel-loader"></div>',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })


                    try {
						//console.log("staking.... " + stakeAmount)
                        const transaction = new ethers.Contract(poolInto, ABI, provider.getSigner());
                        const doIt = await transaction.deposit(stakeAmount);
                        await doIt.wait();
						
						localStorage.removeItem('userAddress')
						localStorage.removeItem('allStakes')

                        Swal.close();

                        sleep(610).then(() => {
                            triggerConfetti();
                        })

						
						if(isTestnet) {
							let actionToLog = 'stakeCD'
							if(localStorage.getItem(actionToLog) != undefined) {
							const now = new Date();
							const dayNumber = now.getDay() + (now.getYear() * 365)
								if(localStorage.getItem(actionToLog) != dayNumber) {
									localStorage.setItem(actionToLog, dayNumber)
									fetch('/callback/papi.html?wallet='+account+'&action='+actionToLog);
								} 
							} else {
								const now = new Date();
								const dayNumber = now.getDay() + (now.getYear() * 365);
									localStorage.setItem(actionToLog, dayNumber)
									fetch('/callback/papi.html?wallet='+account+'&action='+actionToLog);
							}
						}
						
                        sleep(2100).then(() => {
                            Swal.fire({
                                title: '<strong>Congratulations! Stake has been created!',
                                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Stake has been created. You can view your stake by clicking on the button below</br></br> <a href="view-all-stakes.html"><button class="swal2-confirm swal2-styled" style="display: inline-block;"> View Stakes</button></a> ',
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: false
                            })
                        })
                    } catch (e) {
                        errorMessage(e)
                    }

                }




            }
        })

    }
}




function displayCustom(value) {
    if (value == 0) {
        document.getElementById("displayingCustom").style = "display: none"
    } else {
        document.getElementById("displayingCustom").style = "display: block"
    }
}




async function checkBalance2(userAddress, contractAddress) {
    const contractAbi = [
        "function balanceOf(address account) external view returns (uint256)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const resultLookup = await DTXContract.balanceOf(userAddress);
    const balance = Number(BigInt(resultLookup) / BigInt(10 ** 16));
    return [resultLookup, balance];
}