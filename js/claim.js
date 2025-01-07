

var ABI = [{"inputs":[{"internalType":"contract IDTX","name":"_dtx","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"withdrawInto","type":"address"}],"name":"RedeemCredit","type":"event"},{"inputs":[],"name":"CLAIM_PERIOD_DAYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTX","outputs":[{"internalType":"contract IDTX","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"amountRedeemed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_claimAmount","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"claimInto","type":"address"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claimAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"directPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"isValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minToServe","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"payout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkle","type":"bytes32"}],"name":"setMerkle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRedeemed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkle","type":"bytes32"}],"name":"updateMerkle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"votingCreditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"


var checking = false;
//to make this work make it a trusted inside votingCreditContract and must send tokens to it


claimAirdrop(false);


var distributionContractToContributors = "0xE87C806f8AFA1cE543ab3C44D1c4b130B83574CE"
var distributionContractToLocked = "0x51Aeb56C05a2BD781207B63D395475b7185c5fd7"

var sacList
var sacList2
var total
var total2
var remainingCredit
var remainingCredit2
var totalClaimed
var totalClaimed2


var saveCredit1
var saveCredit2
var merkleLine1
var merkleLine2
var amountClaimed1
var amountClaimed2

var minDeposit

 fetch(apiURL+'api/costToVote.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			minDeposit = Number(html)
		})


async function claimAirdrop(already) {
    document.getElementById("showLoader").style = "display: block;"
    try {
        await auth();
        claimFaucet()
    } catch (e) {
        return claimAirdrop(already);
    }
}


/* WHAT WE NEED TO DO IS Check
1.) His sacrifice points
2.) his referral points 
//we loop through eligible address(have list), find his ID, get that line and then on that line you have amount and proofs
//display amounts, use proofs when redeeming
Today to do:  finish so that Claim works (for referrals as well as giveaways); locked and less locked
Then procceed with contract launches etc
must first check if proofs work etc tbh.
*/

async function claimFaucet() {
    document.getElementById("showLoader").style = "display: block;"
    await auth();

    let sacrificeExists = false;
    let referralEarningsExist = false;
    let sacrificeIndex
    let referralIndex

    let signer = provider.getSigner();
    var address = await signer.getAddress();

    console.log(address)

    await fetch(apiURL+'api/merkleContributionAddresses.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        sacList = html
    })


    const result = sacList.split(/\r?\n/);
    let indexNr = result.length;

    for (let i = 0; i < indexNr; i++) {


        if (result[i] == 0) {
            ;
            continue;
        }

        if (result[i].toLowerCase() != address.toLowerCase()) {
            continue;
        } else {
            sacrificeExists = true;
            sacrificeIndex = i;
            console.log("FOUND IT! (Contributor)");
            break;
        }

    }


    await fetch(apiURL+'api/merkleRewardAddresses.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        sacList2 = html
    })


    const result2 = sacList2.split(/\r?\n/);
    indexNr = result2.length;

    for (let i = 0; i < indexNr; i++) {


        if (result2[i] == 0) {
            ;
            continue;
        }

        if (result2[i].toLowerCase() != address.toLowerCase()) {
            continue;
        } else {
            referralEarningsExist = true;
            referralIndex = i;
            console.log("FOUND IT! (Referral/giveaway)")
        }

    }



    //IF exists, retrieve their amounts claimed 
    let amountClaimed = 0;
    let amountClaimedLocked = 0;
    remainingCredit = 0;
    remainingCredit2 = 0;



    //retrieve merkles
    if (sacrificeExists) {
        amountClaimed = await amountClaimedF(address)
		//amountClaimed1 = BigInt(amountClaimed)

        await fetch(apiURL+'/api/merkleContributionProofs.txt', {
                cache: "no-cache"
            }).then(function(response) {
                return response.text();
            })
            .then(function(html) {
                // Split the file content into lines
                const lines = html.split('\n');

                // Define the line number you want to retrieve (replace X with the desired line number)
                const lineNumber = sacrificeIndex;

                // Check if the specified line number exists
                if (lineNumber >= 0 && lineNumber < lines.length) {
                    const line = lines[lineNumber];

                    // Split the line by comma to get parameters
                    const params = line.split(',');

                    // Extract the first parameter
                    const firstParam = parseFloat(params[0]);
                    remainingCredit = firstParam
                    saveCredit1 = BigInt(params[0])

                    // Put the other parameters into an array
                    const otherParams = params.slice(1); // Exclude the first parameter
                    merkleLine1 = []
                    for (let i = 0; i < otherParams.length; i++) {
                        const element = otherParams[i];
                        if (element !== '') {
                            merkleLine1.push(element);
                        }
                    }



                    // Now you can use firstParam and otherParams as needed
                    // console.log("First Parameter:", firstParam);
                    //console.log("Other Parameters:", otherParams);
                } else {
                    console.log("Line number out of range.");
                }
            })
            .catch(function(error) {
                console.error("Error fetching file:", error);
            });




        remainingCredit = remainingCredit - amountClaimed


    }

    if (referralEarningsExist) {
        amountClaimedLocked = await amountClaimedL(address)
		//amountClaimed2 = BigInt(amountClaimedLocked)
        await fetch(apiURL+'/api/merkleRewardProofs.txt', {
                cache: "no-cache"
            }).then(function(response) {
                return response.text();
            })
            .then(function(html) {
                // Split the file content into lines
                const lines = html.split('\n');

                // Define the line number you want to retrieve (replace X with the desired line number)
                const lineNumber = referralIndex;

                // Check if the specified line number exists
                if (lineNumber >= 0 && lineNumber < lines.length) {
                    const line = lines[lineNumber];

                    // Split the line by comma to get parameters
                    const params = line.split(',');

                    // Extract the first parameter
                    const firstParam = parseFloat(params[0]);
                    remainingCredit2 = firstParam
                    saveCredit2 = BigInt(params[0])

                    // Put the other parameters into an array
                    const otherParams = params.slice(1); // Exclude the first parameter
                    merkleLine2 = []
                    for (let i = 0; i < otherParams.length; i++) {
                        const element = otherParams[i];
                        if (element !== '') {
                            merkleLine2.push(element);
                        }
                    }

                    // Now you can use firstParam and otherParams as needed
                    console.log("First Parameter:", firstParam);
                    console.log("Other Parameters:", otherParams);
                } else {
                    console.log("Line number out of range.");
                }
            })
            .catch(function(error) {
                console.error("Error fetching file:", error);
            });



    }

    document.getElementById("showLoader").style = "display: none;"
    document.getElementById("connect-wallet-div").style = "display:none;"

    remainingCredit2 = remainingCredit2 - amountClaimedLocked



    if (localStorage.getItem("claimedFull") != undefined) {
        totalClaimed = Number(localStorage.getItem("claimedFull"))
        console.log(totalClaimed)
    } else {
        totalClaimed = 0
    }

    if (localStorage.getItem("claimedLocked") != undefined) {
        totalClaimed2 = Number(localStorage.getItem("claimedLocked"))
    } else {
        totalClaimed2 = 0
    }

    console.log(remainingCredit)
    console.log(remainingCredit2)

    remainingCredit = remainingCredit / 10 ** 18
    remainingCredit2 = remainingCredit2 / 10 ** 18


    if ((remainingCredit <= 0 && remainingCredit2 <= 0) && amountClaimed == 0) {

        Swal.fire({
            html: '<h4><font color="#0EC9AC">You do not have any tokens available for claiming. Seems like you did not participate as a contributor or in the reward program!</h4></font></br></br><a href="pulse-ecosystem-mining.html" target="_blank"><button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(221, 51, 51);">Start Mining</button></a><a href="buy.html" target="_blank"><button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(221, 51, 51);">Acquire Tokens From PulseX </button></a></br></br></br></br>Add Token to <a href="#" onclick="addToMetamask();"><img src="img/metamask.png" width="120px"></a></br><small><strong>0x633372eFFEd18f98CE7DdF2f0A58312609fbfEA5</small></strong></br>',
            focusConfirm: false,
            icon: 'warning',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })

    } else if ((remainingCredit <= 0 && remainingCredit2 <= 0) && amountClaimed != 0) {
        console.log(remainingCredit)
        console.log(remainingCredit2)
        Swal.fire({
            html: '<h4><font color="#0EC9AC">Seems like you have 0 available credit left!</h4></font></br></br></a></br></br></br></br>Add Token to <a href="#" onclick="addToMetamask();"><img src="img/metamask.png" width="120px"></a></br><small><strong>0x633372eFFEd18f98CE7DdF2f0A58312609fbfEA5</small></strong></br>',
            focusConfirm: false,
            icon: 'warning',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })




    } else {


        console.log(address)

        Swal.fire({
            html: '<h4><font color="#0EC9AC">You are Eligible. Claim your '+tokenTicker+' Tokens!</font></h4><select class="swal2-select" style="display: flex;" name="packageOption" id="packageOption">   <option value="full">Contribution (' + Math.round(remainingCredit).toLocaleString() + ' '+tokenTicker+' Available)</option> <option value="locked">Rewards (' + Math.round(remainingCredit2).toLocaleString() + ' '+tokenTicker+' Available)</option> </select></br><strong>Amount to claim:</strong> </br><input id="amountToClaim" type="number" autocapitalize="off" class="swal2-input" style="display: flex; max-width: 250px;"placeholder="Amount to claim"></br> <strong>Choose claim option:</strong><div id="fullOrLocked"> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">   <option value="' + pool5Year + '">5 Year (Receive 100%)</option><option value="' + pool3Year + '">3 Year (Receive 97.5%)</option><option value="' + pool1Year + '">1 Year (Receive 95%)</option> <option value="' + pool6Month + '">6 Month (Receive 90%)</option>   <option value="' + pool3Month + '">3 Month (Receive 87.5%)</option><option value="' + pool1Month + '">1 Month (Receive 85%)</option>  <option value="' + address + '">Into Wallet (Receive 80%)</option> </select></div> </br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="claim()"><strong>Click to Claim</strong></button>',

            icon: 'success',
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: false
        })

        document.getElementById('packageOption').addEventListener('change', function() {
            let selectedValue = this.value;
            if (this.value == "full") {
                document.getElementById('fullOrLocked').innerHTML = '<select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">   <option value="' + pool5Year + '">5 Year (Receive 100%)</option><option value="' + pool3Year + '">3 Year (Receive 97.5%)</option><option value="' + pool1Year + '">1 Year (Receive 95%)</option> <option value="' + pool6Month + '">6 Month (Receive 90%)</option>   <option value="' + pool3Month + '">3 Month (Receive 87.5%)</option><option value="' + pool1Month + '">1 Month (Receive 85%)</option>  <option value="' + address + '">Into Wallet (Receive 80%)</option> </select>'
            } else {
                document.getElementById('fullOrLocked').innerHTML = '<select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">   <option value="' + pool5Year + '">5 Year (Receive 100%)</option><option value="' + pool3Year + '">3 Year (-25% Penalty)</option><option value="' + pool1Year + '">1 Year (-90% Penalty)</option> <option value="' + pool6Month + '">6 Month (-95% Penalty)</option>   <option value="' + pool3Month + '">3 Month (-97% Penalty)</option><option value="' + pool1Month + '">1 Month (-99% Penalty)</option>  <option value="' + address + '">Into Wallet (-99.5% Penalty)</option> </select>'

            }
        });




    }

}

var poolInto 
var amount
async function claim() {
    poolInto = document.getElementById("tdOption").value
    amount = Number(Math.round(Number(document.getElementById("amountToClaim").value)))
    let typeOfg = document.getElementById("packageOption").value

    console.log("amount is " + amount)
    console.log("pool into: " + poolInto)
    console.log(typeOfg)


    if (typeOfg == "full") {
		if (amount >= remainingCredit) {
			console.log("TRIGGERING THAT!!")
			amount = BigInt(BigInt(saveCredit1) - BigInt(amountClaimed1))
			console.log("SAVED CREDIT: "+saveCredit1)
			console.log("Amount claimed: "+amountClaimed1)
			console.log("amount to redeem "+amount)
		} else {
			amount = BigInt(amount) * BigInt(10 ** 18)
		}
			
		let lockupPeriod = "No Lockup"
		let penalty = 0
		if(poolInto == pool1Month) {
			lockupPeriod = "1 Month"
			penalty = 0.15
		} else if(poolInto == pool3Month) {
			lockupPeriod = "3 Months"
			penalty = 0.125
		} else if(poolInto == pool6Month) {
			lockupPeriod = "6 Months"
			penalty = 0.1
		} else if(poolInto == pool1Year) {
			lockupPeriod = "1 Year"
			penalty = 0.05
		} else if(poolInto == pool3Year) {
			lockupPeriod = "3 Year"
			penalty = 0.025
		} else if(poolInto == pool5Year) {
			lockupPeriod = "5 Year"
			penalty = 0
		} else {
			penalty = 0.2
		}
		if((Number(amount)/10**18 - (Number(amount)/10**18)*penalty) < minDeposit) {
			Swal.fire({
                title: '<strong>Claim Amount Below Minimum</strong>',
                html: 'After penalties your claim amounts to <strong>'+(Number(amount)/10**18 - (Number(amount)/10**18)*penalty).toLocaleString()+' '+tokenTicker+'</strong>.</br></br>Minimum claim amount as a stake is <strong>'+minDeposit.toLocaleString()+' '+tokenTicker+' </strong></br> With your selected option(<strong><small>'+lockupPeriod+'</small></strong>), you need to claim a minimum of <strong>'+Math.ceil(minDeposit / (1 - penalty)).toLocaleString()+'</strong> '+tokenTicker+'.</br></br> Claim more tokens or choose an option with lesser penalty.',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })
		} else {
					let textDetails = "</br>Lock-up Period: <strong>"+lockupPeriod+"</strong></br></br>Receive "+tokenTicker+": <strong>"+(Number(amount)/10**18 - (Number(amount)/10**18)*penalty).toLocaleString()+" '+tokenTicker+'</strong></br></br> Penalty: <strong>"+((Number(amount)/10**18)*penalty).toLocaleString()+" '+tokenTicker+'</strong>"
					
					if(lockupPeriod != "No Lockup") {
					textDetails+= "</br></br></br><small>You can withdraw the stake at any time. </br>If withdrawn prematurely, additional emergency-end penalties will apply."	
					}
					
					 Swal.fire({
				  title: '<strong>Review Claim Details</strong>',
				  html: textDetails,
				  icon: 'question',
				  showCancelButton: true,
				  confirmButtonText: 'Yes, Claim!',
				  cancelButtonText: 'Cancel'
				}).then((result) => {
				  if (result.isConfirmed) {
					
					finalizeFullClaim();
					
					
					
				  } else if (result.dismiss === Swal.DismissReason.cancel) {
					
					
				  }
				});
	
	}
	
	

    

    } else {
        if (amount >= remainingCredit2) {
            console.log("TRIGGERING THAT!!")
            amount = BigInt(saveCredit2 - amountClaimed2)
			console.log("SAVED CREDIT: "+saveCredit2)
			console.log("Amount claimed: "+amountClaimed2)
			console.log("amount to redeem "+amount)
        } else {
			amount = BigInt(amount) * BigInt(10 ** 18)
		}

		let lockupPeriod = "No Lockup"
		let penalty = 0
		let mandatoryLock
		if(poolInto == pool1Month) {
			lockupPeriod = "1 Month"
			penalty = 0.99
			mandatoryLock = "10 Days"
		} else if(poolInto == pool3Month) {
			lockupPeriod = "3 Months"
			penalty = 0.97
			mandatoryLock = "30 Days"
		} else if(poolInto == pool6Month) {
			lockupPeriod = "6 Months"
			penalty = 0.95
			mandatoryLock = "60 Days"
		} else if(poolInto == pool1Year) {
			lockupPeriod = "1 Year"
			penalty = 0.9
			mandatoryLock = "100 Days"
		} else if(poolInto == pool3Year) {
			lockupPeriod = "3 Year"
			penalty = 0.75
			mandatoryLock = "240 Days"
		} else if(poolInto == pool5Year) {
			lockupPeriod = "5 Year"
			penalty = 0
			mandatoryLock = "365 Days"
		} else {
			penalty = 0.995
		} 
		console.log("penalty is "+penalty)
		console.log("pool into is "+poolInto)
		if((Number(amount)/10**18 - (Number(amount)/10**18)*penalty) < minDeposit) {
			Swal.fire({
                title: '<strong>Claim Amount Below Minimum</strong>',
                html: 'After penalties your claim amounts to <strong>'+(Number(amount)/10**18 - (Number(amount)/10**18)*penalty).toLocaleString()+' '+tokenTicker+'</strong>.</br></br>Minimum claim amount as a stake is <strong>'+minDeposit.toLocaleString()+' '+tokenTicker+' </strong></br> With your selected option(<strong><small>'+lockupPeriod+'</small></strong>), you need to claim a minimum of <strong>'+Math.ceil(minDeposit / (1 - penalty)).toLocaleString()+'</strong> '+tokenTicker+'.</br></br> Claim more tokens or choose an option with lesser penalty.',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })
		} else {
		
		let textDetails = "</br>Lock-up Period: <strong>"+lockupPeriod+"</strong></br></br>Receive "+tokenTicker+": <strong>"+(Number(amount)/10**18 - (Number(amount)/10**18)*penalty).toLocaleString()+" '+tokenTicker+'</strong></br></br> Penalty: <strong>"+((Number(amount)/10**18)*penalty).toLocaleString()+" "+tokenTicker+"</strong>"
		
		if(lockupPeriod != "No Lockup") {
		textDetails+= "</br></br></br><small>The stake must serve atleast "+mandatoryLock+" before it can be withdrawn. </br>If withdrawn prematurely, additional emergency-end penalties will apply.</small>"	
		}
		
		 Swal.fire({
      title: '<strong>Review Claim Details</strong>',
      html: textDetails,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Claim!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        
		finalizeLockedClaim();
		
		
		
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
		
      }
    });
	
	}
        
    }


}


async function finalizeFullClaim() {
	console.log("amount is " + amount)
    console.log("pool into: " + poolInto)
	
	Swal.fire({
            title: '<strong>Awaiting confirmation in wallet</strong>',
            html: '<div id="allowanceCheck"> Please confirm transaction in wallet to finalize the claim....<div class="pixel-loader"></div></div>',
            showCancelButton: false,
            showConfirmButton: false
        })
        try {
            console.log(BigInt(amount) * BigInt(10 ** 18))
            const transaction = new ethers.Contract(distributionContractToContributors, ABI, provider.getSigner());
            console.log("parameter1: " + BigInt(amount) * BigInt(10 ** 18))
            console.log("parameter2: " + saveCredit1)
            console.log("parameter3: " + poolInto)
            console.log("parameter4: ");
            console.log(merkleLine1)
            let doIt = await transaction.claimAirdrop(amount, saveCredit1, poolInto, merkleLine1);

            await doIt.wait();
            localStorage.removeItem('userAddress')
            localStorage.removeItem('allStakes')

            Swal.close();

            sleep(610).then(() => {
                triggerConfetti();
            })

            

            if (isTestnet) {
                console.log("sendingTg")
                let accounts = await provider.send("eth_requestAccounts", []);
                let account = accounts[0];
                let actionToLog = 'airdropClaimedFull'
                if (localStorage.getItem(actionToLog) != undefined) {
                    const now = new Date();
                    const dayNumber = now.getDay() + (now.getYear() * 365)
                    if (localStorage.getItem(actionToLog) != dayNumber) {
                        localStorage.setItem(actionToLog, dayNumber)
                        fetch('/callback/papi.html?wallet=' + account + '&action=' + actionToLog);
                    }
                } else {
                    const now = new Date();
                    const dayNumber = now.getDay() + (now.getYear() * 365);
                    localStorage.setItem(actionToLog, dayNumber)
                    fetch('/callback/papi.html?wallet=' + account + '&action=' + actionToLog);
                }
            }

            sleep(2100).then(() => {
                Swal.fire({
                    title: '<strong>Congratulations! Tokens have been claimed!!',
                    html: ' Add Token to <a href="#" onclick="addToMetamask();"><img src="img/metamask.png" width="120px"></a> </br></br><a href="view-all-CD.html"><button class="swal2-confirm swal2-styled" style="display: inline-block;"> View Your Stakes</button></a></br></br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="claimFaucet();"> Claim Another</button>  ',
                    icon: 'success',
                    showCancelButton: false,
                    showConfirmButton: false
                })
            })
        } catch (e) {
            let msg
            if (typeof e.data === 'undefined') {
                msg = e.message
            } else {
                msg = e.data.message
            }
            Swal.fire({
                title: '<strong>Something went wrong</strong>',
                html: '<code>Error: </code>' + msg + '</br></br>Contact us in Telegram if you believe this to be a mistake on our end!',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })
        }
}


async function finalizeLockedClaim () {
	console.log("amount is " + amount)
    console.log("pool into: " + poolInto)
	
	
	Swal.fire({
            title: '<strong>Awaiting confirmation in wallet</strong>',
            html: '<div id="allowanceCheck"> Please confirm transaction in wallet to finalize the claim....<div class="pixel-loader"></div></div>',
            showCancelButton: false,
            showConfirmButton: false
        })
        try {
            console.log(BigInt(amount) * BigInt(10 ** 18))
            const transaction = new ethers.Contract(distributionContractToLocked, ABI, provider.getSigner());
            console.log("parameter1: " + BigInt(amount) * BigInt(10 ** 18))
            console.log("parameter2: " + saveCredit2)
            console.log("parameter3: " + poolInto)
            console.log("parameter4: ");
            console.log(merkleLine1)
            let doIt = await transaction.claimAirdrop(amount, saveCredit2, poolInto, merkleLine2);

            await doIt.wait();
            localStorage.removeItem('userAddress')
            localStorage.removeItem('allStakes')

            Swal.close();

            sleep(610).then(() => {
                triggerConfetti();
            })

            

            if (isTestnet) {
                console.log("sendingTg")
                let accounts = await provider.send("eth_requestAccounts", []);
                let account = accounts[0];
                let actionToLog = 'airdropClaimLocked'
                if (localStorage.getItem(actionToLog) != undefined) {
                    const now = new Date();
                    const dayNumber = now.getDay() + (now.getYear() * 365)
                    if (localStorage.getItem(actionToLog) != dayNumber) {
                        localStorage.setItem(actionToLog, dayNumber)
                        fetch('/callback/papi.html?wallet=' + account + '&action=' + actionToLog);
                    }
                } else {
                    const now = new Date();
                    const dayNumber = now.getDay() + (now.getYear() * 365);
                    localStorage.setItem(actionToLog, dayNumber)
                    fetch('/callback/papi.html?wallet=' + account + '&action=' + actionToLog);
                }
            }

            sleep(2100).then(() => {
                Swal.fire({
                    title: '<strong>Congratulations! Tokens have been claimed!!',
                    html: ' Add Token to <a href="#" onclick="addToMetamask();"><img src="img/metamask.png" width="120px"></a> </br></br><a href="view-all-CD.html"><button class="swal2-confirm swal2-styled" style="display: inline-block;"> View Stakes</button></a></br></br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="claimFaucet();"> Claim Another</button>  ',
                    icon: 'success',
                    showCancelButton: false,
                    showConfirmButton: false
                })
            })
        } catch (e) {
            let msg
            if (typeof e.data === 'undefined') {
                msg = e.message
            } else {
                msg = e.data.message
            }
            Swal.fire({
                title: '<strong>Something went wrong</strong>',
                html: '<code>Error: </code>' + msg + '</br></br>Contact us in Telegram if you believe this to be a mistake on our end!',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })
        }
	
}

async function amountClaimedF(address) {
    const contractAbi2 = [
        "function amountRedeemed(address) public view returns (uint256)"
    ];
    const OINKContract2 = new ethers.Contract(distributionContractToContributors, contractAbi2, provider);
    amountClaimed1 = BigInt(await OINKContract2.amountRedeemed(address));
    return Number(amountClaimed1);
}

async function amountClaimedL(address) {
    const contractAbi2 = [
        "function amountRedeemed(address) public view returns (uint256)"
    ];
    const OINKContract2 = new ethers.Contract(distributionContractToLocked, contractAbi2, provider);
    amountClaimed2 = BigInt(await OINKContract2.amountRedeemed(address));
    return Number(amountClaimed2);
}