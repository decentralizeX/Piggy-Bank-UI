	
var ABI = [{"inputs":[{"internalType":"address","name":"_forWallet","type":"address"}],"name":"proxySetDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"proxyVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTXToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

var ABI2 = [{"inputs":[{"internalType":"address","name":"_recipientAddr","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"_lockUpTokensInSeconds","type":"uint256"}],"name":"addAndExtendStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialTransfers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_dummyToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"uint256","name":"_poolID","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"AddAndExtendStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"AddVotes","type":"event"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"allowTxOrigin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"votingAddress","type":"address[]"},{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"delegateeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"Deposit","type":"event"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_minToServeInSecs","type":"uint256"}],"name":"giftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"GiftDeposit","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"giveStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"},{"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"_mandatoryTime","type":"uint256"}],"name":"hopDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"HopDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"XVMCamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"newPool","type":"address"}],"name":"HopPool","type":"event"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_poolAddress","type":"address"}],"name":"hopStakeToAnotherPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"migrateAllStakes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"migrateStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"goodSamaritan","type":"address"},{"indexed":false,"internalType":"uint256","name":"XVMCamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"MigrateStake","type":"event"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialWithdrawals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"regulateVotingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"RemoveVotes","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"revokeStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_callFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_delegate","type":"address"}],"name":"setDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userDelegating","type":"address"},{"indexed":false,"internalType":"address","name":"delegatee","type":"address"}],"name":"SetDelegate","type":"event"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPool","type":"address"}],"name":"setMigrationPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setMinimumGiftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"StakeAllowanceRevoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shareAllowance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDeposit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"StakeApproval","type":"event"},{"inputs":[{"internalType":"address","name":"_poolInto","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"stakeRollover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"}],"name":"stopEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"}],"name":"TransferStake","type":"event"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"allowanceID","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"transferStakeFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_allowanceID","type":"uint256"}],"name":"TransferStakeFrom","type":"event"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"}],"name":"transferStakeToAnotherWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedSender","type":"event"},{"inputs":[],"name":"updateMinimumGift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"voteForProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"votingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawDummy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowOrigin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateHarvestXVMCRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingXVMCRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dummyToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNrOfStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"getUserShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserTotalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gracePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrationPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumGift","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"nrOfstakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialTransfers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialWithdrawals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"stakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalVotesForID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedPoolCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedSenderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateMinGiftGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDelegate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"lastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"xvmcAtLastUserAction","type":"uint256"},{"internalType":"uint256","name":"lastUserActionTime","type":"uint256"},{"internalType":"uint256","name":"mandatoryTimeToServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userVote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingCreditAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFeePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]



var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"


		    fetch(apiURL+'api/rollOverBonuses.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
		let x = JSON.parse(html)
			document.getElementById("bonus0").innerHTML = x[0]
			document.getElementById("bonus1").innerHTML = x[1]
			document.getElementById("bonus2").innerHTML = x[2]
			document.getElementById("bonus3").innerHTML = x[3]
			document.getElementById("bonus4").innerHTML = x[4]
			document.getElementById("bonus5").innerHTML = x[5]
		})

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function getTimestamp() {
    const currentDate = new Date();
    return currentDate.getTime();
}




var savedContent = "";
var header = '<table id="latestActions" class="table table-striped"><thead><tr><th>Miner Duration</th><th>Tokens (Principal)</th><th>Earned <small>(since last action)</small></th><th>Time Served </th><th>Penalty</th><th>Actions</th></tr></thead><tbody>'
var footer = '</tbody></table>'
var timestamp = getTimestamp() / 1000;
var elementz = document.getElementById("viewAllStakes");
var stakeArray;
var allStakes = [];
var totalStaked = 0;
var consecutiveStake = 0

var price = document.getElementById("DTX-price").innerHTML;

if (localStorage.getItem('allStakes') === null || localStorage.getItem('userAddress') === null) {
    elementz.innerHTML = '<button type="submit" id="btn-ViewAllStakes" class="btn btn-light mr-2">View All Of My Active Miners</button> </br></br> <button type="submit" id="btn-viewProxy" class="btn btn-light mr-2">View Miners Of Another User</button>'
} else {
    if (localStorage.getItem('lastRefresh') < 86400) {
        localStorage.removeItem('userAddress')
        localStorage.removeItem('allStakes')
        viewAllStakes();
    } else {
        allStakes = JSON.parse(localStorage.getItem('allStakes'), reviver)
		sleep(1500).then(() => {
        displaySaved()
		})
    }
}

async function viewAllStakes() {
	consecutiveStake = 0
    localStorage.setItem('lastRefresh', getTimestamp());
    totalStaked = 0;
    await auth();
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

    elementz.innerHTML = '<center><small>Please await while checking miners...</small></br></center><div class="pixel-loader"></div>';

    let nrOfStakes;
    nrOfStakes = await checkNrOfStakes(account, pool1Month);
    if (nrOfStakes > 0) {
        await displayStakes(nrOfStakes, account, pool1Month, "1 Month Miner", "2592000", false);
        allStakes.push(stakeArray);
    } else {
        allStakes.push([]);
    }

    nrOfStakes = await checkNrOfStakes(account, pool3Month);
    if (nrOfStakes > 0) {
        await displayStakes(nrOfStakes, account, pool3Month, "3 Month Miner", "7862400", false);
        allStakes.push(stakeArray);
    } else {
        allStakes.push([]);
    }

    nrOfStakes = await checkNrOfStakes(account, pool6Month);
    if (nrOfStakes > 0) {
        await displayStakes(nrOfStakes, account, pool6Month, "6 Month Miner", "15811200", false);
        allStakes.push(stakeArray);
    } else {
        allStakes.push([]);
    }

    nrOfStakes = await checkNrOfStakes(account, pool1Year);
    if (nrOfStakes > 0) {
        await displayStakes(nrOfStakes, account, pool1Year, "1 Year Miner", "31536000", false);
        allStakes.push(stakeArray);
    } else {
        allStakes.push([]);
    }

    nrOfStakes = await checkNrOfStakes(account, pool3Year);
    if (nrOfStakes > 0) {
        await displayStakes(nrOfStakes, account, pool3Year, "3 Year Miner", "94608000", false);
        allStakes.push(stakeArray);
    } else {
        allStakes.push([]);
    }

    nrOfStakes = await checkNrOfStakes(account, pool5Year);
    if (nrOfStakes > 0) {
        await displayStakes(nrOfStakes, account, pool5Year, "5 Year Miner", "157766400", false);
        allStakes.push(stakeArray);
    } else {
        allStakes.push([]);
    }

    let userBalance = await checkBalance(account)

    localStorage.setItem('userAddress', account);
    localStorage.setItem('allStakes', JSON.stringify(allStakes));
	
    triggerConfetti();
    sleep(1337).then(() => {
        elementz.innerHTML = '<center><div class="table-responsive" id="nothingMuch" style="max-width: 900px;"><table class="table table-striped table-bordered"><thead><tr><th> Wallet Balance:</th> <th>Total Miners: </th> <th> Total Balance:</th> </tr></thead><tbody><tr><td>' + Math.round(userBalance).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round(userBalance * price * 100) / 100).toLocaleString() + ')</small></td><td>' + Math.round(totalStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round(totalStaked * price * 100) / 100).toLocaleString() + ')</small></td><td>' + Math.round(userBalance + totalStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round((userBalance + totalStaked) * price * 100) / 100).toLocaleString() + ')</small></td></tr></table></div></br></br></center>';
        document.getElementById("textInfo").innerHTML = '<i class="fa fa-refresh fa-lg" onclick="refreshAll()" style="cursor: pointer;"></i>Click to refresh.'
    })

if(isTestnet) {
							let actionToLog = 'viewStakes'
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

}

async function viewProxyStakes() {
	consecutiveStake = 0
    header = '<table id="latestActions" class="table table-striped"><thead><tr><th>Miner Duration</th><th>Tokens (Principal)</th><th>Earned <small>(since last action)</small></th><th>Time Served </th><th>Penalty</th></tr></thead><tbody>'
    await auth();
    Swal.fire({
        title: 'User Wallet Address: ',
        html: '<input id="userAddress" autocapitalize="off" class="swal2-input" placeholder="enter wallet address" type="text" style="display: flex;">',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'View Users Miners!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            let addr = document.getElementById('userAddress').value;

            if (addr.length != 42) {
                Swal.fire({
                    title: 'Invalid address!',
                    html: 'Enter Ethereum(EVM compatitible) address</br> (eg. 0x12345.....6789)',
                    icon: 'error',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            } else {


                elementz.innerHTML = '<center><small>Please await while checking miners...</small></br></center><div class="pixel-loader"></div>';

                let nrOfStakes;
                nrOfStakes = await checkNrOfStakes(addr, pool1Month);
                if (nrOfStakes > 0) {
                    await displayStakes(nrOfStakes, addr, pool1Month, "1 Month Miner", "2592000", true);
                }

                nrOfStakes = await checkNrOfStakes(addr, pool3Month);
                if (nrOfStakes > 0) {
                    await displayStakes(nrOfStakes, addr, pool3Month, "3 Month Miner", "7862400", true);
                }

                nrOfStakes = await checkNrOfStakes(addr, pool6Month);
                if (nrOfStakes > 0) {
                    await displayStakes(nrOfStakes, addr, pool6Month, "6 Month Miner", "15811200", true);
                }

                nrOfStakes = await checkNrOfStakes(addr, pool1Year);
                if (nrOfStakes > 0) {
                    await displayStakes(nrOfStakes, addr, pool1Year, "1 Year Miner", "31536000", true);
                }

                nrOfStakes = await checkNrOfStakes(addr, pool3Year);
                if (nrOfStakes > 0) {
                    await displayStakes(nrOfStakes, addr, pool3Year, "3 Year Miner", "94608000", true);
                }

                nrOfStakes = await checkNrOfStakes(addr, pool5Year);
                if (nrOfStakes > 0) {
                    await displayStakes(nrOfStakes, addr, pool5Year, "5 Year Miner", "157766400", true);
                }

                let userBalance = await checkBalance(addr)


                triggerConfetti();
                sleep(1337).then(() => {
                    elementz.innerHTML = '<center><div class="table-responsive" id="nothingMuch" style="max-width: 900px;"><table class="table table-striped table-bordered"><thead><tr><th> Wallet Balance:</th> <th>Total Miners: </th> <th> Total Balance:</th> </tr></thead><tbody><tr><td>' + Math.round(userBalance).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round(userBalance * price * 100) / 100).toLocaleString() + ')</small></td><td>' + Math.round(totalStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round(totalStaked * price * 100) / 100).toLocaleString() + ')</small></td><td>' + Math.round(userBalance + totalStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round((userBalance + totalStaked) * price * 100) / 100).toLocaleString() + ')</small></td></tr></table></div></br></br></center>';
                })
            }
        }
    });

}

async function displayStakes(nrOf, userAddress, contractAddress, duration, serveTime, isProxy) {
    let htmlContent = document.getElementById("displayStakes");


    let sharePrice = BigInt(await getSharePrice(contractAddress));

    let stakeInfo;
    let tokensStaked;
    let lastDeposit;
    let progress;
    let progressAmount;
    let progressAmount2;
    let tokensEarned;
    let mandatoryServe;
    let penalty;

    stakeArray = []

    for (let i = 0; i < nrOf; i++) {
        stakeInfo = await getUserInfo(userAddress, contractAddress, i);
        tokensStaked = Number(BigInt(stakeInfo[0]) * sharePrice / BigInt(10 ** 36));
		if(Math.round(tokensStaked) == 0) { continue; }
        totalStaked += tokensStaked;
        lastDeposit = Number(BigInt(stakeInfo[1]));
        mandatoryServe = Number(BigInt(stakeInfo[4]));

        tokensEarned = tokensStaked - Number(BigInt(stakeInfo[2]) / BigInt(10 ** 18));
        if (tokensEarned < 0) {
            tokensEarned = 0
        }

        progressAmount = timestamp - (lastDeposit + serveTime);
        if (progressAmount < 0) {
            progressAmount = timestamp - lastDeposit //seconds served
            progressAmount = Math.round(progressAmount / serveTime * 100)
        } else {
            progressAmount = 100
        }
        if (mandatoryServe == 0) {
            progress = '<div class="progress" onclick="stakeExpiry('+(Number(lastDeposit*1000)+Number(serveTime*1000))+')" style="cursor: pointer;"><div class="progress-bar bg-success" role="progressbar" style="width: ' + progressAmount + '%;" aria-valuenow="' + progressAmount + '" aria-valuemin="0" aria-valuemax="100"></div></div>'
        } else {
            progressAmount2 = timestamp - (lastDeposit + mandatoryServe)
            if (progressAmount2 < 0) {
                progressAmount2 = Math.round((timestamp - lastDeposit) / mandatoryServe * 100)
            } else {
                progressAmount2 = 100
            }
            progress = '<div class="progress" onclick="stakeExpiry('+(lastDeposit+serveTime)+')" style="cursor: pointer;"><div class="progress-bar bg-success" role="progressbar" style="width: ' + progressAmount + '%;" aria-valuenow="' + progressAmount + '" aria-valuemin="0" aria-valuemax="100"></div></div>'
            progress += '<div style="display:inline;cursor: pointer;" onclick="mandatoryServe(' + mandatoryServe + ', ' + (timestamp - lastDeposit) + ')"><small>Mandatory Serve <i id="delayInfo" class="mdi mdi-information-outline"></i></div></small></br><div class="progress"><div class="progress-bar bg-info" role="progressbar" style="width: ' + progressAmount2 + '%" aria-valuenow="' + progressAmount2 + '" aria-valuemin="0" aria-valuemax="100"></div></div>'
        }
        penalty = calculatePenalty(contractAddress, (timestamp - lastDeposit), serveTime);
        if (!isProxy) {
            let stakeShares = BigInt(stakeInfo[0]);
            let additionalContent; //don't display additional content on 5yr pool(ability to transfer to another pool)
            if (contractAddress != pool5Year) {
                additionalContent = '<a class="dropdown-item" href="#" onclick="hopPools(' + tokensStaked + ', \'' + contractAddress + '\', \'' + stakeShares.toString() + '\', ' + i + ');">Transfer Miner To Another Pool</a>'
            } else {
                additionalContent = ''
            }
            if (progressAmount < 100) { //can't extend
                savedContent = savedContent + ' <tr><td>' + duration + '</td> <td>' + Math.round(tokensStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + Math.round(tokensStaked * price).toLocaleString() + ')</small></td> <td id="earnedCell'+consecutiveStake+'"><span id="earnedSpan'+consecutiveStake+'">' +Math.round(Number(tokensEarned)).toLocaleString() + '</span> '+tokenTicker+' <small>(<font color="green">$</font>' + ((Number(tokensEarned) * price * 100) / 100).toFixed(2).toLocaleString() + ')</small></td><td>' + progress + '</td> <td>' + (Math.round(penalty * 100) / 100) + ' %</td><td><div class="dropdown"><button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button><div class="dropdown-menu" aria-labelledby="dropdownMenuIconButton3">' + additionalContent + '<a class="dropdown-item" href="#" onclick="transferToAnotherWallet(\'' + contractAddress + '\', ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Transfer Miner To Another Wallet</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#" onclick="withdraw(\'' + contractAddress + '\', false,  ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Withdraw</a></div></div></td>'
            } else { // check if has penalty (then no grace)
                let withinGrace
                if (penalty == 0) {
                    withinGrace = true
                } else {
                    withinGrace = false
                }
                savedContent = savedContent + ' <tr><td>' + duration + '</td> <td>' + Math.round(tokensStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + Math.round(tokensStaked * price).toLocaleString() + ')</small></td> <td id="earnedCell'+consecutiveStake+'"><span id="earnedSpan'+consecutiveStake+'">' +Math.round(Number(tokensEarned)).toLocaleString() + '</span> '+tokenTicker+' <small>(<font color="green">$</font>' + ((Number(tokensEarned) * price * 100) / 100).toFixed(2).toLocaleString() + ')</small></td><td>' + progress + '</td> <td><div class="badge badge-outline-success" onclick="rollOver(' + tokensStaked + ', \'' + contractAddress + '\', ' + i + ', ' + withinGrace + ');" style="cursor: pointer;">Roll-Over</div></td><td><div class="dropdown"><button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button><div class="dropdown-menu" aria-labelledby="dropdownMenuIconButton3"><a class="dropdown-item" href="#" onclick="rollOver(' + tokensStaked + ', \'' + contractAddress + '\', ' + i + ', ' + withinGrace + ');">Rollover (Extend) Stake</a><div class="dropdown-divider"></div>' + additionalContent + '<a class="dropdown-item" href="#" onclick="transferToAnotherWallet(\'' + contractAddress + '\', ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Transfer Miner To Another Wallet</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#" onclick="withdraw(\'' + contractAddress + '\', ' + withinGrace + ',  ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Withdraw</a></div></div></td>'
            }
        } else {
            savedContent = savedContent + ' <tr><td>' + duration + '</td> <td>' + Math.round(tokensStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + Math.round(tokensStaked * price).toLocaleString() + ')</small></td> <td id="earnedCell'+consecutiveStake+'"><span id="earnedSpan'+consecutiveStake+'">' +Math.round(Number(tokensEarned)).toLocaleString() + '</span> '+tokenTicker+' <small>(<font color="green">$</font>' + ((Number(tokensEarned) * price * 100) / 100).toFixed(2).toLocaleString() + ')</small></td><td>' + progress + '</td> <td>' + (Math.round(penalty * 100) / 100) + ' %</td>'
        }

        htmlContent.innerHTML = header + savedContent + footer;

        stakeArray.push([BigInt(stakeInfo[0]), BigInt(stakeInfo[1]), BigInt(stakeInfo[2]), BigInt(stakeInfo[3]), BigInt(stakeInfo[4])])
		consecutiveStake++
	}

}

async function displaySavedStakes(poolID, nrOf, userAddress, contractAddress, duration, serveTime) {

    let htmlContent = document.getElementById("displayStakes");


    let sharePrice = BigInt(await getSharePrice(contractAddress));

    let stakeInfo;
    let tokensStaked;
    let lastDeposit;
    let progress;
    let progressAmount;
    let progressAmount2;
    let tokensEarned;
    let mandatoryServe;
    let penalty;

    for (let i = 0; i < nrOf; i++) {
        stakeInfo = allStakes[poolID][i]
        tokensStaked = Number(BigInt(stakeInfo[0]) * sharePrice / BigInt(10 ** 36));
		if(Math.round(tokensStaked) == 0) { continue; }
        totalStaked += tokensStaked;
        lastDeposit = Number(BigInt(stakeInfo[1]));
        mandatoryServe = Number(BigInt(stakeInfo[4]));

        tokensEarned = tokensStaked - Number(BigInt(stakeInfo[2]) / BigInt(10 ** 18));
        if (tokensEarned < 0) {
            tokensEarned = 0
        }

        progressAmount = timestamp - (lastDeposit + serveTime);
        if (progressAmount < 0) {
            progressAmount = timestamp - lastDeposit //seconds served
            progressAmount = Math.round(progressAmount / serveTime * 100)
        } else {
            progressAmount = 100
        }
        if (mandatoryServe == 0) {
            progress = '<div class="progress" onclick="stakeExpiry('+(Number(lastDeposit*1000)+Number(serveTime*1000))+')" style="cursor: pointer;"><div class="progress-bar bg-success" role="progressbar" style="width: ' + progressAmount + '%" aria-valuenow="' + progressAmount + '" aria-valuemin="0" aria-valuemax="100"></div></div>'
        } else {
            progressAmount2 = timestamp - (lastDeposit + mandatoryServe)
            if (progressAmount2 < 0) {
                progressAmount2 = Math.round((timestamp - lastDeposit) / mandatoryServe * 100)
            } else {
                progressAmount2 = 100
            }
            progress = '<div class="progress" onclick="stakeExpiry('+(Number(lastDeposit*1000)+Number(serveTime*1000))+')" style="cursor: pointer;"><div class="progress-bar bg-success" role="progressbar" style="width: ' + progressAmount + '%" aria-valuenow="' + progressAmount + '" aria-valuemin="0" aria-valuemax="100"></div></div>'
            progress += '<div style="display:inline;cursor: pointer;" onclick="mandatoryServe(' + mandatoryServe + ', ' + (timestamp - lastDeposit) + ')"><small>Mandatory Serve <i id="delayInfo" class="mdi mdi-information-outline"></i></div></small></br><div class="progress"><div class="progress-bar bg-info" role="progressbar" style="width: ' + progressAmount2 + '%" aria-valuenow="' + progressAmount2 + '" aria-valuemin="0" aria-valuemax="100"></div></div>'
        }
        penalty = calculatePenalty(contractAddress, (timestamp - lastDeposit), serveTime);
		console.log("PRICE IS : "+price)
        let stakeShares = BigInt(stakeInfo[0]);
        let additionalContent; //don't display additional content on 5yr pool(ability to transfer to another pool)
        if (contractAddress != pool5Year) {
            additionalContent = '<a class="dropdown-item" href="#" onclick="hopPools(' + tokensStaked + ', \'' + contractAddress + '\', \'' + stakeShares.toString() + '\', ' + i + ');">Transfer Miner To Another Pool</a>'
        } else {
            additionalContent = ''
        }
        if (progressAmount < 100) { //can't extend
            savedContent = savedContent + ' <tr><td>' + duration + '</td> <td>' + Math.round(tokensStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + Math.round(tokensStaked * price).toLocaleString() + ')</small></td> <td id="earnedCell'+consecutiveStake+'"><span id="earnedSpan'+consecutiveStake+'">' +Math.round(Number(tokensEarned)).toLocaleString() + '</span> '+tokenTicker+' <small>(<font color="green">$</font>' + ((Number(tokensEarned) * price * 100) / 100).toFixed(2).toLocaleString() + ')</small></td><td>' + progress + '</td> <td>' + (Math.round(penalty * 100) / 100) + ' %</td><td><div class="dropdown"><button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button><div class="dropdown-menu" aria-labelledby="dropdownMenuIconButton3">' + additionalContent + '<a class="dropdown-item" href="#" onclick="transferToAnotherWallet(\'' + contractAddress + '\', ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Transfer Miner To Another Wallet</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#" onclick="withdraw(\'' + contractAddress + '\', false,  ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Withdraw</a></div></div></td>'
        } else { // check if has penalty (then no grace)
            let withinGrace
            if (penalty == 0) {
                withinGrace = true
            } else {
                withinGrace = false
            }
            savedContent = savedContent + ' <tr><td>' + duration + '</td> <td>' + Math.round(tokensStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + Math.round(tokensStaked * price).toLocaleString() + ')</small></td> <td id="earnedCell'+consecutiveStake+'"><span id="earnedSpan'+consecutiveStake+'">' +Math.round(Number(tokensEarned)).toLocaleString() + '</span> '+tokenTicker+' <small>(<font color="green">$</font>' + ((Number(tokensEarned) * price * 100) / 100).toFixed(2).toLocaleString() + ')</small></td><td>' + progress + '</td> <td><div class="badge badge-outline-success" onclick="rollOver(' + tokensStaked + ', \'' + contractAddress + '\', ' + i + ', ' + withinGrace + ');" style="cursor: pointer;">Roll-Over</div></td><td><div class="dropdown"><button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button><div class="dropdown-menu" aria-labelledby="dropdownMenuIconButton3"><a class="dropdown-item" href="#" onclick="rollOver(' + tokensStaked + ', \'' + contractAddress + '\', ' + i + ', ' + withinGrace + ');">Rollover (Extend) Stake</a><div class="dropdown-divider"></div>' + additionalContent + '<a class="dropdown-item" href="#" onclick="transferToAnotherWallet(\'' + contractAddress + '\', ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Transfer Miner To Another Wallet</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#" onclick="withdraw(\'' + contractAddress + '\', ' + withinGrace + ',  ' + i + ', ' + tokensStaked + ', \'' + (BigInt(stakeInfo[0])) + '\', \'' + sharePrice + '\');">Withdraw</a></div></div></td>'
        }

        htmlContent.innerHTML = header + savedContent + footer;
		consecutiveStake++
    }

}

async function displaySaved() {
	totalStaked = 0;
    let nrOfStakes;
    let addr = localStorage.getItem('userAddress');

    nrOfStakes = allStakes[0].length;
    if (nrOfStakes > 0) {
        await displaySavedStakes(0, nrOfStakes, addr, pool1Month, "1 Month Miner", "2592000");
    }

    nrOfStakes = allStakes[1].length;
    if (nrOfStakes > 0) {
        await displaySavedStakes(1, nrOfStakes, addr, pool3Month, "3 Month Miner", "7862400");
    }

    nrOfStakes = allStakes[2].length;
    if (nrOfStakes > 0) {
        await displaySavedStakes(2, nrOfStakes, addr, pool6Month, "6 Month Miner", "15811200");
    }

    nrOfStakes = allStakes[3].length;
    if (nrOfStakes > 0) {
        await displaySavedStakes(3, nrOfStakes, addr, pool1Year, "1 Year Miner", "31536000");
    }

    nrOfStakes = allStakes[4].length;
    if (nrOfStakes > 0) {
        await displaySavedStakes(4, nrOfStakes, addr, pool3Year, "3 Year Miner", "94608000");
    }

    nrOfStakes = allStakes[5].length;
    if (nrOfStakes > 0) {
        await displaySavedStakes(5, nrOfStakes, addr, pool5Year, "5 Year Miner", "157766400");
    }

    let userBalance = await checkBalance(addr)

    elementz.innerHTML = '<center><div class="table-responsive" id="nothingMuch" style="max-width: 900px;"><table class="table table-striped table-bordered"><thead><tr><th> Wallet Balance:</th> <th>Total Staked: </th> <th> Total Balance:</th> </tr></thead><tbody><tr><td>' + Math.round(userBalance).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round(userBalance * price * 100) / 100).toLocaleString() + ')</small></td><td>' + Math.round(totalStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round(totalStaked * price * 100) / 100).toLocaleString() + ')</small></td><td>' + Math.round(userBalance + totalStaked).toLocaleString() + ' '+tokenTicker+' <small>(<font color="green">$</font>' + (Math.round((userBalance + totalStaked) * price * 100) / 100).toLocaleString() + ')</small></td></tr></table></div></br></br></center>';
    document.getElementById("textInfo").innerHTML = '<i class="fa fa-refresh fa-lg" onclick="refreshAll()" style="cursor: pointer;"></i>Click to refresh.'
}

function refreshAll() {
    localStorage.removeItem('userAddress')
    localStorage.removeItem('allStakes')
    location.reload();
}

function mandatoryServe(timeToServe, timeServed) {
    let timeLeft = (Math.round((timeToServe - timeServed) / 86400))
    let percentComplete = (Math.round(timeServed / timeToServe * 100))
    if (timeLeft != 0) {
        timeLeft = timeLeft + ' days'
    } else {
        timeLeft = (((timeToServe - timeServed) % 86400) / 3600).toFixed(1)
        percentComplete = (timeServed / timeToServe * 100).toFixed(2)
    }
    Swal.fire({ // + (Math.round((timeToServe - timeServed) / 86400)) + ' days
        title: 'Mandatory Time-Lock',
        html: 'This miner has a mandatory time lock of <strong>' + (Math.round(timeToServe / 86400)) + ' days</strong>.</br> Miner has served <strong>' + (Math.round(timeServed / 86400)) + ' days</strong> so far. </br></br><strong> ' + percentComplete + '%</strong> complete <strong>(' + timeLeft + '</strong> left).</br></br><small></small>Normal miner can be withdrawn at any time. If withdrawn prematurely, penalties will apply. "Mandatory serve" is an additional option to irreversibly lock the miner. The miner can not be withdrawn until mandatory time has been served.',
        icon: 'info',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
}

function calculatePenalty(pool, timeServed, serveTime) {
    let penalty;
    if (pool == pool1Month) {
        if (timeServed < serveTime) {
            penalty = 25 - Math.round(timeServed / 86400) * 0.786
        } else {
            timeServed = Math.abs(timeServed)
            console.log(timeServed);
            if (timeServed < 259200) {
                penalty = 0
            } else {
                penalty = Math.round(timeServed / 86400) * 0.786;
                if (penalty > 25) {
                    penalty = 25;
                }
            }
        }
    } else if (pool == pool3Month) {
        if (timeServed < serveTime) {
            penalty = 35 - Math.round(timeServed / 86400) * 0.382
        } else {
            timeServed = Math.abs(timeServed)
            if (timeServed < 432000) {
                penalty = 0
            } else {
                penalty = Math.round(timeServed / 86400) * 0.382;
                if (penalty > 35) {
                    penalty = 35;
                }
            }
        }
    } else if (pool == pool6Month) {
        if (timeServed < serveTime) {
            penalty = 42 - Math.round(timeServed / 86400) * 0.231
        } else {
            timeServed = Math.abs(timeServed)
            if (timeServed < 604800) {
                penalty = 0
            } else {
                penalty = Math.round(timeServed / 86400) * 0.231;
                if (penalty > 42) {
                    penalty = 42;
                }
            }
        }
    } else if (pool == pool1Year) {
        if (timeServed < serveTime) {
            penalty = 50 - Math.round(timeServed / 86400) * 0.1337
        } else {
            timeServed = Math.abs(timeServed)
            if (timeServed < 1209600) {
                penalty = 0
            } else {
                penalty = Math.round(timeServed / 86400) * 0.1337;
                if (penalty > 50) {
                    penalty = 50;
                }
            }
        }
    } else if (pool == pool3Year) {
        if (timeServed < serveTime) {
            penalty = 69 - Math.round(timeServed / 86400) * 0.0629
        } else {
            timeServed = Math.abs(timeServed)
            if (timeServed < 1209600) {
                penalty = 0
            } else {
                penalty = Math.round(timeServed / 86400) * 0.0629;
                if (penalty > 69) {
                    penalty = 69;
                }
            }
        }
    } else if (pool == pool5Year) {
        if (timeServed < serveTime) {
            penalty = 82 - Math.round(timeServed / 86400) * 0.04269
        } else {
            timeServed = Math.abs(timeServed)
            if (timeServed < 1814400) {
                penalty = 0
            } else {
                penalty = Math.round(timeServed / 86400) * 0.04269;
                if (penalty > 82) {
                    penalty = 82;
                }
            }
        }
    }

    return penalty;
}

async function checkNrOfStakes(userAddress, contractAddress) {
    const contractAbi2 = [
        "function getNrOfStakes(address _user) external view returns (uint256)"
    ];
    const OINKContract2 = new ethers.Contract(contractAddress, contractAbi2, provider);
    const balance2 = Number(await OINKContract2.getNrOfStakes(userAddress));
    return balance2;
}

async function getSharePrice(chosenPool) {
    const contractAbi2 = [
        "function getPricePerFullShare() external view returns (uint256)"
    ];
    const OINKContract2 = new ethers.Contract(chosenPool, contractAbi2, provider);
    const balance2 = BigInt(await OINKContract2.getPricePerFullShare());
    return balance2;
}

async function getUserInfo(user, chosenPool, stakeID) {
    const contractAbi3 = [
        "function userInfo(address _address, uint256 _stakeID) public view returns (uint256, uint256, uint256, uint256, uint256)"
    ];
    const OINKContract3 = new ethers.Contract(chosenPool, contractAbi3, provider);
    let balance3 = await OINKContract3.userInfo(user, stakeID);
    return balance3;
}


document.getElementById("btn-ViewAllStakes").onclick = viewAllStakes;

document.getElementById("btn-viewProxy").onclick = viewProxyStakes;


function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function isSuccess() {
    Swal.close();
    sleep(610).then(() => {
        triggerConfetti();
    })


    sleep(2100).then(() => {
        Swal.fire({
            title: '<strong>Hoorah! Transaction confirmed!',
            html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Updated records will display within a few seconds...</br> <small>You can close this window.</small>',
            icon: 'success',
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })
    })
}

async function rollOver(tokens, fromPool, stakeID, isWithinGrace) {
    let htmlToDisplay = 'You can roll-over(extend) your existing miner and get paid bonus for doing so. Rolling-over will deposit bonus tokens to your miner and reset the time served on your CD.</br>';

    let bonus0 = document.getElementById("bonus0").innerHTML
    let bonus1 = document.getElementById("bonus1").innerHTML
    let bonus2 = document.getElementById("bonus2").innerHTML
    let bonus3 = document.getElementById("bonus3").innerHTML
    let bonus4 = document.getElementById("bonus4").innerHTML
    let bonus5 = document.getElementById("bonus5").innerHTML
    if (isWithinGrace || fromPool == pool1Month) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> <option value="'+pool1Month+'">1 Month (+' + bonus0 + '% Bonus)</option> <option value="'+pool3Month+'">3 Month (+' + bonus1 + '% Bonus)</option> <option value="'+pool6Month+'">6 Month (+' + bonus2 + '% Bonus)</option> <option value="'+pool1Year+'">1 Year (+' + bonus3 + '% Bonus)</option> <option value="'+pool3Year+'">3 Year (+' + bonus4 + '% Bonus)</option> <option value="'+pool5Year+'">5 Year (+' + bonus5 + '% Bonus)</option> </select></br> <div id="availableBonus"><strong>Available Bonuses</strong> </br></br>1Month: <strong> +' + (Math.round(bonus0 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>3Month: <strong> +' + (Math.round(bonus1 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>6Month: <strong> +' + (Math.round(bonus2 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>1Year: <strong> +' + (Math.round(bonus3 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+' </strong>bonus</br>3Year: <strong> +' + (Math.round(bonus4 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>5Year: <strong> +' + (Math.round(bonus5 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br> </br></div>'
    } else if (fromPool == pool3Month) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> <option value="'+pool3Month+'">3 Month (+' + bonus1 + '% Bonus)</option> <option value="'+pool6Month+'">6 Month (+' + bonus1 + '% Bonus)</option> <option value="'+pool1Year+'">1 Year  (+' + bonus1 + '% Bonus)</option> <option value="'+pool3Year+'">3 Year  (+' + bonus1 + '% Bonus)</option> <option value="'+pool5Year+'">5 Year  (+' + bonus1 + '% Bonus)</option> </select></br> <div id="availableBonus"><strong>Available Bonuses</strong> </br></br>3Month: <strong> +' + (Math.round(bonus1 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>6Month: <strong> +' + (Math.round(bonus2 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>1Year: <strong> +' + (Math.round(bonus3 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+' </strong>bonus</br>3Year: <strong> +' + (Math.round(bonus4 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>5Year: <strong> +' + (Math.round(bonus5 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br> </br></div>'
    } else if (fromPool == pool6Month) {
        htmlToDisplay += '</br><strong>Select Miner Duration </strong><select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">  <option value="'+pool6Month+'">6 Month (+' + bonus1 + '% Bonus)</option> <option value="'+pool1Year+'">1 Year  (+' + bonus1 + '% Bonus)</option> <option value="'+pool3Year+'">3 Year  (+' + bonus1 + '% Bonus)</option> <option value="'+pool5Year+'">5 Year  (+' + bonus1 + '% Bonus)</option> </select></br> <div id="availableBonus"><strong>Available Bonuses</strong> </br></br>6Month: <strong> +' + (Math.round(bonus2 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>1Year: <strong> +' + (Math.round(bonus3 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+' </strong>bonus</br>3Year: <strong> +' + (Math.round(bonus4 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>5Year: <strong> +' + (Math.round(bonus5 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br> </br></div>'
    } else if (fromPool == pool1Year) {
        htmlToDisplay += '</br><strong>Select Miner Duration </strong><select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> <option value="'+pool1Year+'">1 Year  (+' + bonus1 + '% Bonus)</option> <option value="'+pool3Year+'">3 Year  (+' + bonus1 + '% Bonus)</option> <option value="'+pool5Year+'">5 Year  (+' + bonus1 + '% Bonus)</option> </select></br> <div id="availableBonus"><strong>Available Bonuses</strong> </br></br>1Year: <strong> +' + (Math.round(bonus3 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+' </strong>bonus</br>3Year: <strong> +' + (Math.round(bonus4 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>5Year: <strong> +' + (Math.round(bonus5 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br> </br></div>'
    } else if (fromPool == pool3Year) {
        htmlToDisplay += '</br><strong>Select Miner Duration </strong><select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> 3 Year  (+' + bonus1 + '% Bonus)</option> <option value="'+pool5Year+'">5 Year  (+' + bonus1 + '% Bonus)</option> </select></br> <div id="availableBonus"><strong>Available Bonuses</strong> </br></br>3Year: <strong> +' + (Math.round(bonus4 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br>5Year: <strong> +' + (Math.round(bonus5 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br> </br></div>'
    } else if (fromPool == pool5Year) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> <option value="'+pool5Year+'">5 Year  (+' + bonus1 + '% Bonus)</option> </select></br> <div id="availableBonus"><strong>Available Bonuses</strong> </br></br>5Year: <strong> +' + (Math.round(bonus5 / 100 * tokens)).toLocaleString() + ' '+tokenTicker+'</strong> bonus</br> </br></div>'
    }

    await auth();
    Swal.fire({
        title: 'Roll-over (extend) Stake: ',
        html: htmlToDisplay,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Extend My Stake!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            let poolInto = document.getElementById("tdOption").value
            let bonusToPay
            let poolString
            if (poolInto == pool1Month) {
                bonusToPay = Math.round(bonus0 / 100 * tokens).toLocaleString()
                poolString = "1 Month"
            } else if (poolInto == pool3Month) {
                bonusToPay = Math.round(bonus1 / 100 * tokens).toLocaleString()
                poolString = "3 Month"
            } else if (poolInto == pool6Month) {
                bonusToPay = Math.round(bonus2 / 100 * tokens).toLocaleString()
                poolString = "6 Month"
            } else if (poolInto == pool1Year) {
                bonusToPay = Math.round(bonus3 / 100 * tokens).toLocaleString()
                poolString = "1 Year"
            } else if (poolInto == pool3Year) {
                bonusToPay = Math.round(bonus4 / 100 * tokens).toLocaleString()
                poolString = "3 Year"
            } else if (poolInto == pool5Year) {
                bonusToPay = Math.round(bonus5 / 100 * tokens).toLocaleString()
                poolString = "5 Year"
            }
            extendStake(fromPool, poolInto, stakeID, bonusToPay, poolString)
        }
    });



}

async function extendStake(poolContract, poolInto, stakeID, bonusPaid, stringPool) {
    Swal.fire({
        title: '<strong>Awaiting confirmation in wallet...',
        html: 'You are rolling-over(extending) your miner into a <strong>' + stringPool + '</strong> Miner. </br></br>You will receive a bonus of &asymp;<strong>' + bonusPaid + ' '+tokenTicker+'</strong> tokens</string> added to your miner.<div class="pixel-loader"></div>',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
    try {
        const transaction = new ethers.Contract(poolContract, ABI2, provider.getSigner());
        const doIt = await transaction.stakeRollover(poolInto, stakeID);
        await doIt.wait();
        savedContent = "";
        document.getElementById("displayStakes").innerHTML = "";
        stakeArray = [];
        allStakes = []
        Swal.close();
        viewAllStakes();
        sleep(610).then(() => {
            triggerConfetti();
        })

if(isTestnet) {
let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

							let actionToLog = 'stakeRollover'
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
                title: '<strong>Congratulations! Miner has been rolled-over!',
                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Your miner has been successfully rolled-over and bonus of &asymp;<strong>' + bonusPaid + ' '+tokenTicker+'</strong> tokens have been added to the miner!</br></br> <small>You can close this window.</small>',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
        })
    } catch (e) {
        errorMessage(e)
    }
}
/*
   async function transferToAnotherWallet(tdOption) {
			   if(tdOption == pool1Month) {
				   tdOption = "1month"
			   } else if(tdOption == pool3Month) {
				   tdOption = "3month"
			   } else if(tdOption == pool6Month) {
				   tdOption = "6month"
			   } else if(tdOption == pool1Year) {
				   tdOption = "1year"
			   } else if(tdOption == pool3Year) {
				   tdOption = "3year"
			   } else if(tdOption == pool5Year) {
				   tdOption = "5year"
			   }
				Swal.fire({
				  title: 'Transfer Miner To Another Wallet',
				  html: ' &#128128;&#128128;&#128128;<strong>WARNING:</strong>  &#128128;&#128128;&#128128;</br>You will transfer your miner to another wallet. Please make sure you are transferring to the wallet you own and control(else somebody might be attempting to steal your tokens!)</br></br> You can transfer your miner to another wallet on the</br><a href="https://Piggy Bank.app/'+tdOption+'"><button type="button" class="swal2-confirm swal2-styled" style="display: inline-block;">Staking Platform</button></a>',
				  icon: 'warning',
				  focusConfirm: false,
				  confirmButtonText:
					'<i class="fa fa-thumbs-up"></i> Close'
				})
   }
   */


async function transferToAnotherWallet(tdOption, stakeID, tokens, shares, rate) {
    await auth();

    Swal.fire({
        title: 'Transfer Miner To Another Wallet',
        html: ' &#128128;&#128128;&#128128;<strong>WARNING:</strong>  &#128128;&#128128;&#128128;</br>You will transfer your miner to another wallet. Please make sure you are transferring to the wallet you own and control(else somebody might be attempting to steal your tokens!)</br></br> ',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Proceed!'
    }).then(async (result) => {
        if (result.isConfirmed) {

            Swal.fire({
                title: 'Transfer Miner To Another Wallet',
                html: ' &#128128;&#128128;&#128128;<strong>WARNING:</strong>  &#128128;&#128128;&#128128;</br>You will transfer your miner to another wallet. Please make sure you are transferring to the wallet you own and control(else somebody might be attempting to steal your tokens!)</br></br> Recipient Address: </br><input id="recipient" name="recipient" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"><strong>Amount to transfer<strong><select class="swal2-select" style="display: flex;" name="transferAmount" id="transferAmount"><option value="0">Transfer Full Miner (' + Math.round(tokens).toLocaleString() + ' '+tokenTicker+')</option><option value="1">Transfer Partial (Custom Amount)</option></select>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Proceed'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let fullOrNo = document.getElementById("transferAmount").value
                    let recipient = document.getElementById("recipient").value
                    if (fullOrNo == 0) {
                        if (tokens < Number(minCostToVote)) {
                            Swal.fire({
                                title: '<strong>Error!',
                                html: 'Must transfer a minimum threshold of atleast 1,001,000 '+tokenTicker+'!',
                                icon: 'warning',
                                focusConfirm: false,
                                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                            })
                        } else {
                            transferFinal(tdOption, stakeID, tokens, shares, recipient)
                        }
                    } else {
                        transferPartial(tdOption, stakeID, tokens, shares, rate, recipient)
                    }
                }
            });

        }
    });
}

async function transferFinal(tdOption, stakeID, tokens, shares, address) {
    Swal.fire({
        title: '<strong>Awaiting confirmation in wallet...',
        html: '</br>You are transferring <strong>' + tokens.toLocaleString() + ' '+tokenTicker+'</strong> to address:</br> <strong>' + address + '</strong></br></br>Please make sure the address is correct and the address is trusted as this action is irreversible.<div class="pixel-loader"></div>',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })



    const transaction = new ethers.Contract(tdOption, ABI2, provider.getSigner());
    try {
        let doIt = await transaction.transferStakeToAnotherWallet(shares, stakeID, address)
        await doIt.wait()

        savedContent = "";
        document.getElementById("displayStakes").innerHTML = "";
        stakeArray = [];
        allStakes = []
        Swal.close();
        viewAllStakes();
        sleep(610).then(() => {
            triggerConfetti();
        })


if(isTestnet) {
let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

							let actionToLog = 'transferStake'
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
                title: '<strong>Congratulations! Miner Transferred',
                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Your miner has been successfully transferred to another wallet!</br></br> <small>You can close this window.</small>',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
        })

    } catch (e) {
        errorMessage(e)
    }


}

async function transferPartial(tdOption, stakeID, tokens, shares, rate, address) {
    let htmlToDisplay = '</br>You are transferring your miner to: </br><small><strong>' + address + '</strong></small></br> Maximum transfer Amount: <strong>' + tokens.toLocaleString() + ' '+tokenTicker+'</strong> </br></br>Enter <img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>DTX</strong> amount to Transfer:</br><input id="toTransferAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex; max-width: 150px;"><div style="display: none;" id="minimumTransfer"><font color="red">Minimum 1,001,000 '+tokenTicker+' required</font></div>';

    Swal.fire({
        title: 'Transfer to Another Wallet',
        html: htmlToDisplay,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Finalize & Transfer Stake!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            let theAmount = document.getElementById("toTransferAmount").value
            if (theAmount < 1001000) {
                Swal.fire({
                    title: '<strong>Error!',
                    html: 'Must transfer a minimum threshold of atleast 1,001,000 '+tokenTicker+'!',
                    icon: 'warning',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            } else if (theAmount > tokens) {
                Swal.fire({
                    title: '<strong>Error!',
                    html: 'You can\'t transfer more tokens than your miner holds!',
                    icon: 'warning',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })

            } else {
                let shareAmount
                if (theAmount == tokens) {
                    shareAmount = shares
                } else {
                    shareAmount = BigInt(parseInt(theAmount / tokens * 100000)) * BigInt(shares) / BigInt(10 ** 5)
                }
                transferFinal(tdOption, stakeID, theAmount, shareAmount, address)
            }
        }
    });
}
/*
   async function withdraw() {
	   			Swal.fire({
				  title: 'Withdrawing Stake',
				  html: ' &#128128;&#128128;&#128128;<strong>WARNING:</strong>  &#128128;&#128128;&#128128;</br> Withdrawing before maturation date will result in early-withdraw penalties.</br></br> You can withdraw your miner from the</br><a href="https://Piggy Bank.app"><button type="button" class="swal2-confirm swal2-styled" style="display: inline-block;">Staking Platform</button></a>',
				  icon: 'warning',
				  focusConfirm: false,
				  confirmButtonText:
					'<i class="fa fa-thumbs-up"></i> Close'
				})
   }
   */



async function withdraw(tdOption, isMature, stakeID, tokens, shares, rate) {
    let instructions = 'Your miner has matured and can be withdrawn. Please choose your withdrawal option.</br></br><strong>Amount to transfer<strong><select class="swal2-select" style="display: flex;" name="withdrawAmount" id="withdrawAmount"><option value="0">Withdraw All (' + Math.round(tokens).toLocaleString() + ' '+tokenTicker+')</option><option value="1">Withdraw Partially (Custom Amount)</option></select>'
    let daIcon = 'info'
    console.log(typeof isMature)
    console.log(isMature)
    if (!isMature) {
        instructions = ' &#128128;&#128128;&#128128;<strong>WARNING:</strong>  &#128128;&#128128;&#128128;</br> The miner either hasn\'t matured or is already past grace period. You are attempting to perform an emergency withdrawal. Withdraw penalties will Apply. You have been warned.</br></br> <strong>Amount to transfer<strong><select class="swal2-select" style="display: flex;" name="withdrawAmount" id="withdrawAmount"><option value="0">Withdraw All (' + Math.round(tokens).toLocaleString() + ' '+tokenTicker+')</option><option value="1">Withdraw Partially (Custom Amount)</option></select>',
            daIcon = 'warning';
    }
    Swal.fire({
        title: 'Withdrawing Stake',
        html: instructions,
        icon: daIcon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Proceed'
    }).then(async (result) => {
        if (result.isConfirmed) {
            let fullOrNo = document.getElementById("withdrawAmount").value
            try {
                if (fullOrNo == 0) {
                    //full stake, trigger transaction
                    Swal.fire({
                        title: '<strong>Awaiting confirmation in wallet...',
                        html: '</br>Please confirm transaction in wallet to complete the withdrawal... <div class="pixel-loader"></div>',
                        focusConfirm: false,
                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                    })

                    const transaction = new ethers.Contract(tdOption, ABI2, provider.getSigner());
                    let doIt = await transaction.withdrawAll(stakeID)
                    await doIt.wait()

                } else {

                    console.log("triggering transaction");
                    let htmlToDisplay = '</br> Maximum Withdraw Amount: <strong>' + tokens.toLocaleString() + ' '+tokenTicker+'</strong> </br></br>Enter <img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>DTX</strong> amount to Withdraw:</br><input id="toTransferAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex; max-width: 150px;">';

                    await Swal.fire({
                        title: 'Partial Miner Withdrawal',
                        html: htmlToDisplay,
                        icon: 'info',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Finalize & Withdraw!'
                    }).then(async (result2) => {
                        if (result2.isConfirmed) {
                            let theAmount = document.getElementById("toTransferAmount").value

                            let shareAmount
                            if (theAmount == tokens) {
                                shareAmount = shares
                            } else {
                                shareAmount = BigInt(parseInt(theAmount / tokens * 100000)) * BigInt(shares) / BigInt(10 ** 5)
                            }

                            Swal.fire({
                                title: '<strong>Awaiting confirmation in wallet...',
                                html: '</br>Please confirm transaction in wallet to complete the withdrawal... <div class="pixel-loader"></div>',
                                focusConfirm: false,
                                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                            })

                            const transaction = new ethers.Contract(tdOption, ABI2, provider.getSigner());
                            let doIt = await transaction.withdraw(shareAmount, stakeID)
                            await doIt.wait()
                        }
                    });



                }


                savedContent = "";
                document.getElementById("displayStakes").innerHTML = "";
                stakeArray = [];
                allStakes = []
                Swal.close();
                viewAllStakes();
                sleep(610).then(() => {
                    triggerConfetti();
                })


                console.log("we here didnt wait broski")
                sleep(2100).then(() => {
                    Swal.fire({
                        title: '<strong>Congratulations! Miner Withdrawn',
                        html: '</br></br><h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Your miner has been successfully withdrawn to your wallet!</br></br> <small>You can close this window.</small>',
                        icon: 'success',
                        focusConfirm: false,
                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                    })
                })


            } catch (e) {
                errorMessage(e)
            }
            //here depending on selection (withdraw partial or withdraw full)

        }
    })

}

async function hopPools(tokens, fromAddress, stakeShares, stakeID) {
    let htmlToDisplay = 'You can always transfer your miner into a pool with longer-lockup period and get rewarded with higher APYs and more voting power.</br> Your time served, as well as principal and earned interest will be transferred into a miner with new lock-up duration.</br>';
    stakeShares = BigInt(stakeShares)
    if (fromAddress == pool1Month) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">  <option value="'+pool3Month+'">3 Month </option> <option value="'+pool6Month+'">6 Month</option> <option value="'+pool1Year+'">1 Year </option> <option value="'+pool3Year+'">3 Year </option> <option value="'+pool5Year+'">5 Year </option> </select> '
    } else if (fromAddress == pool3Month) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">  <option value="'+pool6Month+'">6 Month</option> <option value="'+pool1Year+'">1 Year </option> <option value="'+pool3Year+'">3 Year </option> <option value="'+pool5Year+'">5 Year </option> </select> '
    } else if (fromAddress == pool6Month) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">  <option value="'+pool1Year+'">1 Year </option> <option value="'+pool3Year+'">3 Year </option> <option value="'+pool5Year+'">5 Year </option> </select> '
    } else if (fromAddress == pool1Year) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> <option value="'+pool3Year+'">3 Year </option> <option value="'+pool5Year+'">5 Year </option> </select> '
    } else if (fromAddress == pool3Year) {
        htmlToDisplay += '</br><strong>Select Miner Duration</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> 3 Year </option> <option value="'+pool5Year+'">5 Year </option> </select> '
    }

    htmlToDisplay += '<strong>Amount to transfer<strong><select class="swal2-select" style="display: flex;" name="stakeAmount" id="stakeAmount"><option value="0">Transfer Full Miner (' + Math.round(tokens).toLocaleString() + ' '+tokenTicker+')</option><option value="1">Transfer Partial (Custom Amount)</option></select>';
    await auth();
    Swal.fire({
        title: 'Hop Miner to Another Pool',
        html: htmlToDisplay,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hop Pools!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            let poolInto = document.getElementById("tdOption").value
            let stakeAmount = document.getElementById("stakeAmount").value
            let poolString
            if (poolInto == pool1Month) {
                poolString = "1 Month"
            } else if (poolInto == pool3Month) {
                poolString = "3 Month"
            } else if (poolInto == pool6Month) {
                poolString = "6 Month"
            } else if (poolInto == pool1Year) {
                poolString = "1 Year"
            } else if (poolInto == pool3Year) {
                poolString = "3 Year"
            } else if (poolInto == pool5Year) {
                poolString = "5 Year"
            }

            if (stakeAmount == 0) {
                hopPoolsFinal(fromAddress, poolInto, stakeShares, stakeID, poolString)
            } else {
                hopIntermediary(tokens, fromAddress, stakeShares, stakeID, poolInto, poolString)
            }
        }
    });
}

async function hopIntermediary(tokens, fromAddress, stakeShares, stakeID, poolInto, poolString) {
    let htmlToDisplay = '</br>You are transferring your miner into ' + poolString + ' Miner option.</br> Selected miner has <strong>' + tokens.toLocaleString() + ' '+tokenTicker+'</strong> available.</br></br>Enter <img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>DTX</strong> amount to Transfer:</br><input id="hopAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex; max-width: 150px;">';
    await auth();
    Swal.fire({
        title: 'Hop Miner to Another Pool',
        html: htmlToDisplay,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hop Pools!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            let hopAmount = document.getElementById("hopAmount").value
            let shareAmount
            if (hopAmount == tokens) {
                shareAmount = stakeShares
            } else {
                shareAmount = BigInt(parseInt(hopAmount / tokens * 100000)) * BigInt(stakeShares) / BigInt(10 ** 5)
            }
            hopPoolsFinal(fromAddress, poolInto, shareAmount, stakeID, poolString)
        }
    });
}

async function hopPoolsFinal(poolContract, poolInto, shares, stakeID, stringPool) {
    Swal.fire({
        title: '<strong>Awaiting confirmation in wallet...',
        html: '</br>You are transferring your miner into a <strong>' + stringPool + '</strong>Miner option. </br></br>Your time served as well as interest earned will be transferred.<div class="pixel-loader"></div>',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
    console.log(shares)
    try {
        const transaction = new ethers.Contract(poolContract, ABI2, provider.getSigner());
        const doIt = await transaction.hopStakeToAnotherPool(shares, stakeID, poolInto);
        await doIt.wait();
        savedContent = "";
        document.getElementById("displayStakes").innerHTML = "";
        stakeArray = [];
        allStakes = []
        Swal.close();
        viewAllStakes();
        sleep(610).then(() => {
            triggerConfetti();
        })

if(isTestnet) {
let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

							let actionToLog = 'hopStake'
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
                title: '<strong>Congratulations! Pools hopped!',
                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Your miner has been successfully transferred!</br></br> <small>You can close this window.</small>',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
        })
    } catch (e) {
        errorMessage(e)
    }

}
 sleep(7000).then(() => {
           updateEarnings()
        })
		

setInterval(updateEarnings, 45000);
	
async function updateEarnings() {
	if (localStorage.getItem('allStakes') !== null) {
		let ourDataz = JSON.parse(localStorage.getItem('allStakes'), reviver)
		//console.log(ourDataz)
		let count = 0;
		let price = document.getElementById("DTX-price")
		for(let i=0; i < ourDataz.length; i++) {
			let poolToUse
			if(i==0) {
				poolToUse = pool1Month
			} else if(i==1) {
				poolToUse = pool3Month
			} else if(i==2) {
				poolToUse = pool6Month
			} else if(i==3) {
				poolToUse = pool1Year
			} else if(i==4) {
				poolToUse = pool3Year
			} else if(i==5) {
				poolToUse = pool5Year
			}
			
			let sharePrice = BigInt(await getSharePrice(poolToUse));
			
			for(let j=0; j < ourDataz[i].length; j++) {
				//here we have the shares, need to check how much we have earned and update cell..ezpz..
				let shares = BigInt(ourDataz[i][j][0])
				let lastBalance = BigInt(ourDataz[i][j][2])
				//console.log("i is" + i)
				//console.log("j is " + j)
				
				let tokensStaked = Number(shares * sharePrice / BigInt(10 ** 36));
				if(Math.round(tokensStaked) == 0) { continue; }

				tokensEarned = tokensStaked - Number(BigInt(lastBalance) / BigInt(10 ** 18));

				if (tokensEarned < 0) {
					tokensEarned = 0
				}
			
				//document.getElementById('earnedCell'+String(count)).innerHTML = Math.round(Number(tokensEarned)).toLocaleString() + ' OINK <small>(<font color="green">$</font>' + (Math.round(Number(tokensEarned) * price * 100) / 100).toFixed(2).toLocaleString() + ')</small>'
				if(Number(document.getElementById('earnedSpan'+count).innerHTML) != Number(tokensEarned)) {
					console.log("previously earned: " + document.getElementById('earnedSpan'+count).innerHTML + " ...and new: " + tokensEarned)
					countUp(Number(document.getElementById('earnedSpan'+count).innerHTML), document.getElementById('earnedSpan'+count), Number(tokensEarned), count)
				}
				
				count++
			}
		}
		
	}
}

function stakeExpiry(timestamp) {
	let d = new Date(timestamp);
	Swal.fire({
        title: 'Miner Expiry Date:',
        html: '<strong>'+d.toString()+'</strong>',
        icon: 'info',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
}

BigInt.prototype.toJSON = function() {
    return this.toString()
}

function reviver(key, value) {
    if (key === 'big') {
        return BigInt(value);
    }
    return value;
}


		

function countUp(count, element, endNr, elementId) {
	element.innerHTML = count
	
	if(count < endNr) {
		setTimeout(() => countUp((count + 1), element, endNr, elementId))
	} else {
		document.getElementById('earnedCell'+elementId).innerHTML = '<span id="earnedSpan'+elementId+'"</span>' +Math.round(endNr).toLocaleString() + '</span> '+tokenTicker+' <small>(<font color="green">$</font>' + ((Number(endNr) * Number(document.getElementById("DTX-price").innerHTML) * 100) / 100).toFixed(2) + ')</small>'
	}
}

