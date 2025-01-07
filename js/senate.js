
var ABI = [{"inputs":[{"internalType":"address","name":"_forWallet","type":"address"}],"name":"proxySetDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forID","type":"uint256"}],"name":"proxyVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTXToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]


var senateABI = [{"inputs":[{"internalType":"address","name":"_newSenator","type":"address"}],"name":"addSenator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"senator","type":"address"}],"name":"AddSenator","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"AddVote","type":"event"},{"inputs":[{"internalType":"address","name":"_newSenator","type":"address"}],"name":"expandSenate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_senator","type":"address"}],"name":"expellSenator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"grantVotingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_senators","type":"address[]"}],"name":"massAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"senator","type":"address"}],"name":"RemoveSenator","type":"event"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"removeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"RemoveVote","type":"event"},{"inputs":[{"internalType":"address","name":"_newSenator","type":"address"}],"name":"selfReplaceSenator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setSenatorCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"consensusProposalId","type":"uint256"},{"internalType":"uint256","name":"treasuryProposalId","type":"uint256"}],"name":"vetoProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addedSenator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isSenator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTotalPublished","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastVotingCreditGrant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSenators","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minSenators","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiCall","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[][]","name":"","type":"uint256[][]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"senatorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"senators","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"senatorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"self","type":"address"}],"name":"toUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"viewSenators","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votesForProposal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
var chefABI = [{"inputs":[{"internalType":"contract IDTX","name":"_DTX","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_DTXPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferCredit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"newEmissions","type":"uint256"}],"name":"UpdateEmissions","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DTXPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"address","name":"_participant","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_a","type":"uint256"}],"name":"az","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"credit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dtx","outputs":[{"internalType":"contract IDTX","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"existingParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fairMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fairMintSenate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fairMintSenate2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fairMintSenate3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fairTokensPublished","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fairTokensPublishedToSenate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governorFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itsOnlyFair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_allocPoint","type":"uint256[]"},{"internalType":"address[]","name":"_participant","type":"address[]"},{"internalType":"bool[]","name":"_withUpdate","type":"bool[]"}],"name":"massAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDtx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"address","name":"participant","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"publishTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setGovernorFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_participant","type":"address"},{"internalType":"uint256","name":"_alloc","type":"uint256"}],"name":"startPublishing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"stopPublishing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"tokenChangeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPublished","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_DTXPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"name":"updateStartBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var senateContract = "0x147B43930283d1DDe43d805B7f17E4604b7ca493"
var chefContract = "0x486fEa20eA242456b450B005ED7D019E3E984f28"



checkVotingPower();

var allSenators

async function checkVotingPower() {
    await auth();

    let accounts = await provider.send("eth_requestAccounts", []);
    let userWalletAddress = accounts[0];

    var result = await getAddresses();
    console.log(result)

    let isSenator = false

    allSenators = result[0]

    let newArray1
    allSenators = allSenators.map(item => item.toLowerCase());

    let senatorIndex;
    if (allSenators.includes(userWalletAddress)) {
        console.log("WE ARE A SENATOR!!")
        isSenator = true;
        senatorIndex = allSenators.indexOf(userWalletAddress)

    } else {
        console.log(userWalletAddress);
    }

    let displayTable = `
  <table class="table" id="callFee-table-active">
                      <thead>
                        <tr>
					  <th>User Wallet</th>
					     <th>Voting Credit</th>
                        <th>`+tokenTicker+` <small>reward</small></th>
						<th>Social Media Profile</th>
                        </tr>
                      </thead>
                      <tbody>
			
			    `


    for (let i = 0; i < allSenators.length; i++) {

        displayTable += `
					  <tr> 
  <td onclick="displayUserReputation('`+result[0][i]+`')" style="cursor:pointer;"><small><small>` + result[0][i] + `</small></small></td>
						
					  <td>` + Math.round(Number(result[2][i]) / 10 ** 18).toLocaleString() + `</td>
			  <td>` + Math.round(Number(result[4][i]) / 10 ** 18).toLocaleString() + ` `+tokenTicker+`</td>
                        
						    
						  <td><small>N/A</small></td>
                        </tr>
						
					 `
    }


    
    let additionalContent = '';
	
    if (isSenator) {
		document.getElementById("displayThere").innerHTML = `
		<div class="row">
		
		 <div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                    <center>  <h4 class="card-title">Vote For Proposal</h4>
                   
                      
                      <button type="button" class="btn btn-outline-success btn-sm" onclick="vetoProposal()">Vote</button>
                     </center>
                    </div>
                  </div>
                </div>
				
				
               		 <div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                    <center>  <h4 class="card-title">Add Senator</h4>
                   
                      
                      <button type="button" class="btn btn-outline-success btn-sm" onclick="addSenator()">Add</button>
                     </center>
                    </div>
                  </div>
                </div>
				
						 <div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                    <center>  <h4 class="card-title">Expell From Senate</h4>
                   
                      
                      <button type="button" class="btn btn-outline-success btn-sm" onclick="expellSenate()">Expell</button>
                     </center>
                    </div>
                  </div>
                </div>


             
               
             
              </div>`
			  
			 let mintable = await getMintableTokens(userWalletAddress)
			  console.log("mintable : " + mintable)
			   console.log("mintable : " + Number(mintable))
			   console.log(result[senatorIndex][4])
			   console.log("index is " + senatorIndex)
			   console.log(Number(result[4][4]))
			  
        additionalContent = `<center><div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Your Tokens Available:</h4>
                    
                  ` + Math.round(Number(BigInt(mintable) / BigInt(10 ** 18))).toLocaleString() + ` `+tokenTicker+` &nbsp&nbsp<button type="button" class="btn btn-outline-success btn-sm" onclick="mintTokens()">Mint `+tokenTicker+`</button>
                    </div>
                  </div>
                </div></center>
				`
    }
	




    //CHECK IF USER IS SENATOR, DISPLAY HIM AT TOP.
    //?THEN DISPLAY ALL OTHER SENATORS and their USER credit
    // Also check how much everyone is eligible for(and button to harvest)

    document.getElementById("replaceThisContent").innerHTML = `<center><div class="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Pending Rewards for Senators:</h4>
                    
                  ` + Math.round(Number(result[3]) / 10 ** 18).toLocaleString() + ` Voting Credit</br> 
				  ` + Math.round(Number(result[3]) / 10 ** 20).toLocaleString() + ` `+tokenTicker+`</br></br><button type="button" class="btn btn-outline-success btn-sm" onclick="harvestForSenators()">Harvest</button></br>
				  &nbsp</br><button type="button" class="btn btn-outline-success btn-sm" onclick="grantVotingCredit()">Grant Voting Credit</button>
                    </div>
                  </div>
                </div></center>
				` + additionalContent + displayTable
}




async function getAddresses() {
	try {
    const contractAbi = [
        "function multiCall() public view returns (address[] memory, uint256[][] memory, uint256[] memory, uint256, uint256[] memory)"
    ];
    const timeDepositContract = new ethers.Contract(senateContract, contractAbi, provider)
    const userShares = await timeDepositContract.multiCall()
    return userShares
	} catch (e) {
		console.log(" errored here")
	}
    //console.log(userShares);
}

async function getMintableTokens(theAddress) {
    const contractAbi = [
        "function credit(address) external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(chefContract, chefABI, provider)
    const userShares = await timeDepositContract.credit(theAddress)
	 console.log(userShares);
    return userShares
   
}

async function harvestForSenators() {
    toDisplay = 'Sign transaction in wallet to harvest the senator rewards. This will increase the eligible '+tokenTicker+' credit for all senators. Senators then have to manually mint the tokens into existence.</br></br><div class="pixel-loader"></div>';
    Swal.fire({
        title: '<strong>Congratulations! Confirm transaction to finalize.',
        html: toDisplay,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })


    try {
        const transaction = new ethers.Contract(chefContract, chefABI, provider.getSigner());
        const doIt = await transaction.fairMintSenate();

        await doIt.wait();

        Swal.close();
        sleep(610).then(() => {
            triggerConfetti2();
        })


        sleep(2100).then(() => {
            Swal.fire({
                title: '<strong>Hoorah! Transaction confirmed!',
                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Rewards have been <strong>successfully credited</strong>.</br></br> <small>You can close this window.</small>',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
			checkVotingPower();
        })

    } catch (e) {
        errorMessage(e)
    }

}


async function harvestForSenators() {
    toDisplay = 'Sign transaction in wallet to harvest the senator rewards. This will increase the eligible '+tokenTicker+' credit for all senators. Senators then have to manually mint the tokens into existence.</br></br><div class="pixel-loader"></div>';
    Swal.fire({
        title: '<strong>Congratulations! Confirm transaction to finalize.',
        html: toDisplay,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })


    try {
        const transaction = new ethers.Contract(chefContract, chefABI, provider.getSigner());
        const doIt = await transaction.fairMintSenate();

        await doIt.wait();

        Swal.close();
        sleep(610).then(() => {
            triggerConfetti2();
        })


        sleep(2100).then(() => {
            Swal.fire({
                title: '<strong>Hoorah! Transaction confirmed!',
                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Rewards have been <strong>successfully credited</strong>.</br></br> <small>You can close this window.</small>',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
			checkVotingPower();
        })

    } catch (e) {
        errorMessage(e)
    }

}



async function mintTokens() {
    toDisplay = 'Sign transaction in wallet to mint <div id="changeThis" style="display:inline"></div> '+tokenTicker+' tokens to your wallet</br></br><div class="pixel-loader"></div>';
    Swal.fire({
        title: '<strong>Congratulations! Confirm transaction to finalize.',
        html: toDisplay,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })

    //HERE GET TOKENS...and perhaps

    let accounts = await provider.send("eth_requestAccounts", []);
    let userWalletAddress = accounts[0];
    console.log(userWalletAddress)
    const contractAbi = [
        "function credit(address) external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(chefContract, contractAbi, provider)
    const userShares = await timeDepositContract.credit(userWalletAddress);

    document.getElementById("changeThis").innerHTML = '<strong>' + (Number(userShares) / 10 ** 18).toLocaleString() + '</strong>'




    try {
        const transaction = new ethers.Contract(chefContract, chefABI, provider.getSigner());
        const doIt = await transaction.publishTokens(userWalletAddress, userShares);

        await doIt.wait();

        Swal.close();
        sleep(610).then(() => {
            triggerConfetti2();
        })


        sleep(2100).then(() => {
            Swal.fire({
                title: '<strong>Hoorah! Transaction confirmed!',
                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Tokens have been <strong>successfully minted</strong>.</br></br> <small>You can close this window.</small>',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
        })

    } catch (e) {
        errorMessage(e)
    }

}

async function vetoProposal() {
await auth();
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

    let swalio = Swal.fire({
        title: '<strong>Vote For Proposal</strong>',
        html: '<img src="img/pulse-dao.png" style="max-width: 150px"></br></br>Atleast 50% of the senate members must vote on the proposal to succesfully veto and reject.</br></br><strong> Vote For Proposal: </br><input id="walletAddress" autocapitalize="off" class="swal2-input" placeholder="enter proposal ID" type="text" style="display: flex; max-width: 250px;">',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cast Vote'
    })


        swalio.then(async (result) => {
            if (result.isConfirmed) {
            
                    let proposalToVoteFor = document.getElementById("walletAddress").value
       

                    Swal.fire({
                        title: '<strong>Confirm transaction in wallet</strong>',
                        html: '</br> Confirm transaction in wallet to cast vote for proposal ID: <strong> ' + proposalToVoteFor + ' </strong></br></br><div class="pixel-loader"></div>',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })


                    try {
	
                        const transaction = new ethers.Contract(senateContract, senateABI, provider.getSigner());
                        const doIt = await transaction.vote(proposalToVoteFor);
                        await doIt.wait();
						
				
                        Swal.close();

                        sleep(610).then(() => {
                            triggerConfetti();
                        })

				

                        sleep(2100).then(() => {
                            Swal.fire({
                                title: '<strong>Congratulations! Vote Has Been Casted!',
                                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Vote has been casted. </br></br><small>You can close this window</small> ',
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: true,
								confirmButtonText: 'Close'
                            })
                        })
                    } catch (e) {
                        errorMessage(e)
                    }

          


            }
        })

    }
	
	
async function addSenator() {
await auth();
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

    let swalio = Swal.fire({
        title: '<strong>Add User To Senate</strong>',
        html: '<img src="img/pulse-dao.png" style="max-width: 150px"></br></br>Atleast 50% of the senate members must vote in favor before new member can be added into the senate.</br></br><strong> User Address: </br><input id="walletAddress" autocapitalize="off" class="swal2-input" placeholder="wallet address" type="text" style="display: flex; max-width: 350px;">',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cast Vote'
    })


        swalio.then(async (result) => {
            if (result.isConfirmed) {
				
				let walletAddress = document.getElementById("walletAddress").value
				
					if (allSenators.includes(walletAddress.toLowerCase())) {
				console.log("already in")

                            Swal.fire({
                                title: '<strong>User is already in Senate</strong>',
                                html: '<strong>User is already a member of the senate!</strong> ',
                                icon: 'warning',
                                showCancelButton: false,
                                showConfirmButton: true,
								confirmButtonText: 'Close'
                            })
                       
						
						
		} else {
			console.log("not in senate")
            
			const contractAbi = [
        "function toUint(address self) public pure returns(uint256)"
    ];
    const timeDepositContract = new ethers.Contract(senateContract, senateABI, provider)
    const addressuint = await timeDepositContract.toUint(walletAddress);
	
	
                    console.log(addressuint)
       

                    Swal.fire({
                        title: '<strong>Confirm transaction in wallet</strong>',
                        html: '</br> Confirm transaction in wallet to vote for user:</br></small> <strong> ' + walletAddress + ' </small></strong></br> ... To be added into the senate.</br><div class="pixel-loader"></div>',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })


                    try {
	
                        const transaction = new ethers.Contract(senateContract, senateABI, provider.getSigner());
                        const doIt = await transaction.vote(addressuint);
                        await doIt.wait();
						
				
                        Swal.close();

                        sleep(610).then(() => {
                            triggerConfetti();
                        })

				

                        sleep(2100).then(() => {
                            Swal.fire({
                                title: '<strong>Congratulations! Vote Has Been Casted!',
                                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Vote has been casted. </br></br><small>You can close this window</small> ',
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: true,
								confirmButtonText: 'Close'
                            })
                        })
                    } catch (e) {
                        errorMessage(e)
                    }

          
		}

            }
        })

    }




async function expellSenate() {
await auth();
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

    let swalio = Swal.fire({
        title: '<strong>Expell From Senate</strong>',
        html: '<img src="img/pulse-dao.png" style="max-width: 150px"></br></br>Atleast 75% of the senate members must vote to expell before the member can be removed from the senate.</br></br><strong> User Address: </br><input id="walletAddress" autocapitalize="off" class="swal2-input" placeholder="wallet address" type="text" style="display: flex; max-width: 350px;">',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cast Vote'
    })

	

        swalio.then(async (result) => {
			let walletAddress = document.getElementById("walletAddress").value
			
            if (result.isConfirmed) {
				
			if (!allSenators.includes(walletAddress.toLowerCase())) {
			console.log("not in senate: " + walletAddress.toLowerCase())

                            Swal.fire({
                                title: '<strong>User not in senate</strong>',
                                html: '<strong>User is not a member of the senate!</strong> ',
                                icon: 'warning',
                                showCancelButton: false,
                                showConfirmButton: true,
								confirmButtonText: 'Close'
                            })
                       
						
						
		} else {
					
				
			
            
			const contractAbi = [
        "function toUint(address self) public pure returns(uint256)"
    ];
    const timeDepositContract = new ethers.Contract(senateContract, senateABI, provider)
    const addressuint = await timeDepositContract.toUint(walletAddress);
	
	let actual = BigInt(addressuint) + BigInt(1)
	
	
                    console.log(addressuint)
       

                    Swal.fire({
                        title: '<strong>Confirm transaction in wallet</strong>',
                        html: '</br> Confirm transaction in wallet to vote in favor of expelling:</br></small> <strong> ' + walletAddress + ' </small></strong></br> ... from the senate.</br><div class="pixel-loader"></div>',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })


                    try {
	
                        const transaction = new ethers.Contract(senateContract, senateABI, provider.getSigner());
                        const doIt = await transaction.vote(actual);
                        await doIt.wait();
						
				
                        Swal.close();

                        sleep(610).then(() => {
                            triggerConfetti();
                        })

				

                        sleep(2100).then(() => {
                            Swal.fire({
                                title: '<strong>Congratulations! Vote Has Been Casted!',
                                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Vote has been casted. </br></br><small>You can close this window</small> ',
                                icon: 'success',
                                showCancelButton: false,
                                showConfirmButton: true,
								confirmButtonText: 'Close'
                            })
                        })
                    } catch (e) {
                        errorMessage(e)
                    }

          
		}

            }
        })

    }
	
	async function grantVotingCredit() {
   toDisplay = 'This action will grant voting credit to all senators. Senators receive voting credit in the size of 1% of all published tokens each. Voting credits can be used to vote on proposals and protect the system.</br></br>';
   let swalio = Swal.fire({
        title: '<strong>Grant Voting Credit To Senators',
        html: toDisplay,
		showCancelButton: true,
		showConfirmButton: true,
		confirmButtonText: 'Grant Credit',
		confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    })

     swalio.then(async (result) => {
		  if (result.isConfirmed) {
		       Swal.fire({
                        title: '<strong>Confirm transaction in wallet</strong>',
                        html: '</br> Confirm transaction in wallet to grant voting credit to members of the senate.</br><div class="pixel-loader"></div>',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })
					
    try {
        const transaction = new ethers.Contract(senateContract, senateABI, provider.getSigner());
        const doIt = await transaction.grantVotingCredit();

        await doIt.wait();

        Swal.close();
        sleep(610).then(() => {
            triggerConfetti2();
        })


        sleep(2100).then(() => {
            Swal.fire({
                title: '<strong>Hoorah! Transaction confirmed!',
                html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Voting credit has been <strong>successfully credited</strong> to all senator members.</br></br> <small>You can close this window.</small>',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
        })

    } catch (e) {
        errorMessage(e)
    }
	 }
	})
}
	
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
