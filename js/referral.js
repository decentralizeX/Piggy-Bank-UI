

var rewardContractABI = '[{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"claimInto","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ClaimReferralReward","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"amountRedeemed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fakeRecord","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"insertFakeREcord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_into","type":"address"}],"name":"redeemRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"totalUserRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'


var rewardContract = "0x066F0a45801bcbc5232b11ed4b97c39E1369fe59"	
	
		var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"

		var pool5yr = pool5Year
		var pool3yr = pool3Year
		var pool1yr = pool1Year
		var pool6mo = pool6Month
		var pool3mo = pool3Month
		var pool1mo = pool1Month
		
		
		var governingContract = "0x331146b366c0Cd2AcA542ce71E5D6fb66bf07D16";
		
		showRefLink();
		

async function showRefLink() {
if (typeof provider !== 'undefined') {
	var userLength = await provider.listAccounts(); 
	} else {
		var userLength  = 0;
	}
	trigger();
	if(userLength > 0) {
		displayRefRewards();
	}
}
  
 


 async function trigger() {
	if (typeof provider !== 'undefined') {
	var userLength = await provider.listAccounts(); 
	} else {
		var userLength  = 0;
	}
  
  let userWallet
  
  if(userLength > 0) {
   let accounts = await provider.send("eth_requestAccounts", []);
account = accounts[0];
userWallet = account
  } else {
  
	 userWallet = document.getElementById("referralLink").value
	
  }
	if(userWallet.length == 0) {
		
	} else if(userWallet.length != 42) {
			Swal.fire({
						  title: 'Incorrect Ethereum Wallet Address',
						  icon: 'error',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
	} else {
	
	userWallet = encodeBase58(userWallet)
	console.log("https://oink-pls.com/mine?r="+userWallet)
	
		  	Swal.fire({
						  title: '<strong>Your Referral Link:</strong>',
						  html: '<strong>https://oink-pls.com/mine?r='+userWallet+'</strong></br></br>Link has been copied to clipboard.',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						document.getElementById("referralLink").value = 'https://oink-pls.com/mine?r='+userWallet
						navigator.clipboard.writeText('https://oink-pls.com/mine?r='+userWallet)
						document.cookie = "is="+userWallet;
						document.getElementById("btn-link").style= "display: none;"
	}
}

async function displayRefRewards() {
	
	   let accounts = await provider.send("eth_requestAccounts", []);
		let account = accounts[0];
		
		let available = await getAmountAvailable(account)
		let redeemed = await getAmountRedeemed(account)
		
		let redeemable = available - redeemed;
		let reedemableNumber = Number((available - redeemed)/BigInt(10**18));
		
		if(available > BigInt(0)) {
			
			let refShare = Number(await getReferralShare())
	//let refShare = 1000
	
				document.getElementById("displayIfLogged").innerHTML = `
				 <label for="exampleInputUsername1">Your Total Points Earned</label>
					 
					 <input type="text" class="form-control" id="pointsEarned" style="max-width: 650px;text-align: center;" value="`+Math.round(Number(available/BigInt(10**18))).toLocaleString()+`">
					 
					 
						</br>
						
						 <label for="exampleInputUsername1">Points Redeemed</label>
					 
					 <input type="text" class="form-control" id="pointsEarned" style="max-width: 650px;text-align: center;" value="`+Math.round(Number(redeemed/BigInt(10**18))).toLocaleString()+`">
					 
					 
						</br>
						 <label for="exampleInputUsername1">Referral Bonus</label>
					 
					 <input type="text" class="form-control" id="pointsEarned" style="max-width: 650px;text-align: center;" value="`+(refShare / 100).toLocaleString()+`%">
					 
					 
						</br>
						
						`
						
						if(available > redeemed) {
							
	
	
							document.getElementById("displayIfLogged").innerHTML = 
							`
				 <label for="exampleInputUsername1">`+tokenTicker+` Reward Available for Publishing</label>
					 
					 <input type="text" class="form-control" id="pointsEarned" style="max-width: 650px;text-align: center;" value="`+Math.round(reedemableNumber * refShare / 10000).toLocaleString()+`">
					 
					 
						</br>
						
						` + document.getElementById("displayIfLogged").innerHTML + `
						
						
		
						
						<button type="button" class="btn btn-outline-success btn-sm" onclick="publishTokens('`+redeemable+`')">Publish `+tokenTicker+`</button>`
		
		
						} else {
							document.getElementById("displayIfLogged").innerHTML+= `      <div class="alert alert-fill-primary" role="alert" style="max-width: 350px">
		No points are available for redemption. </br>Referr more users to earn!	</div>`
						}
		} else {
		

						
			document.getElementById("displayIfLogged").innerHTML = `      <div class="alert alert-fill-primary" role="alert" style="max-width: 690px">
		You have no referral rewards available. Referr other users to earn!	</div>`
		}
	//check available credit, check amount claimed
	//if bigger than 0, option to redeem (publish)

}

async function publishTokens(amount) {
	amount = BigInt(amount)
	 let accounts = await provider.send("eth_requestAccounts", []);
		let account = accounts[0];
		
	let balance = Number(amount/BigInt(10**18))
	
	let refShare = Number(await getReferralShare())
	//let refShare = 1000
	  	 	  	    let toDisplay = `Select CD option to harvest rewards into</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">   <option value="`+pool5yr+`">5 Year (Receive 100%)</option><option value="`+pool3yr+`">3 Year (-75% Penalty)</option><option value="`+pool1yr+`">1 Year (-90% Penalty)</option> <option value="`+pool6mo+`">6 Month (-92.5% Penalty)</option>   <option value="`+pool3mo+`">3 Month (-95% Penalty)</option><option value="`+pool1mo+`">1 Month (-97% Penalty)</option>  <option value="` + account + `">Into Wallet (-98% Penalty)</option> </select></br>Referral Rewards: `+(refShare/100)+`%</br></br><strong>Harvest Rewards</strong>:</br>5 Year: ` + (Math.round(balance * refShare / 10000)).toLocaleString() + ` `+tokenTicker+`(100%)</br> 3 Year: ` + (Math.round(balance * refShare / 10000 * 0.25)).toLocaleString() + ` `+tokenTicker+`(-75%)</br>1 Year: ` + (Math.round(balance * refShare / 10000 * 0.1)).toLocaleString() + ` `+tokenTicker+`(-90%)</br> 6 Month: ` + (Math.round(balance * refShare / 10000 * 0.075)).toLocaleString() + ` `+tokenTicker+`(-92.5%)</br> 3 Month: ` + (Math.round(balance * refShare / 10000 * 0.05)).toLocaleString() + ` `+tokenTicker+`(-95%)</br> 1 Month: ` + (Math.round(balance * refShare / 10000 * 0.03)).toLocaleString() + ` `+tokenTicker+`(-98%)
		
		</br></br>To Publish:  <input id="client2" value="` + balance + `" autocapitalize="off" class="swal2-input" placeholder="enter wallet" type="text" style="display: flex; max-width: 300px;"></input> </label><input type="range" class="form-control-range" id="formControlRange2" style="max-width:300px;" value="100">
		`


    let swalio = Swal.fire({
        title: 'Publish Tokens or Create CD Lock',
        html: toDisplay,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Harvest!'
    })

var delayBE = balance;

        const range2 = document.getElementById('formControlRange2');
        const client2 = document.getElementById('client2');

        range2.addEventListener('change', (d) => {
            const clientValue2 = d.target.value;
            client2.value = Math.round(clientValue2 / 100 * delayBE);
        });
		
		
    swalio.then(async (result) => {
        if (result.isConfirmed) {
            let poolInto = document.getElementById("tdOption").value
			let stakeAmount = BigInt(document.getElementById("client2").value) * BigInt(10**18) 

            Swal.fire({
                title: '<strong>Awaiting confirmation in wallet</strong>',
                html: '<div id="allowanceCheck"> Please confirm transaction in wallet to complete the harvest...<div class="pixel-loader"></div></div>',
                showCancelButton: false,
                showConfirmButton: false
            })
            try {
				
				
				
                const transaction = new ethers.Contract(rewardContract, rewardContractABI, provider.getSigner());
                let doIt = await transaction.redeemRewards(stakeAmount, poolInto);

                await doIt.wait();

                Swal.close();

                sleep(610).then(() => {
                    triggerConfetti();
                })


                sleep(2100).then(() => {
                    Swal.fire({
                        title: '<strong>Congratulations! Harvest Complete!',
                        html: 'You can view your '+tokenTicker+' time deposits on the </br></br><a href="view-all-CD.html"><button class="swal2-confirm swal2-styled" style="display: inline-block;"> Mining Platform</button></a> </br></br> <small>Or refresh page to view updated status</small> </br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="window.location.reload();"> Refresh</button> ',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })
                })
            } catch (e) {
                errorMessage(e)
            }
        }
    })
}

async function connectWallet() {
	try {
		await auth();
		displayRefRewards()
	} catch (e) {
		
	}
}

	async function getAmountAvailable(user) {
    const contractAbi = [
        "function totalUserRewards(address _user) public view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(rewardContract, contractAbi, provider)
    const userShares = BigInt(await timeDepositContract.totalUserRewards(user))
    return userShares;
}	

	async function getAmountRedeemed(user) {
    const contractAbi = [
        "function amountRedeemed(address) external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(rewardContract, contractAbi, provider)
    const userShares = BigInt(await timeDepositContract.amountRedeemed(user))
    return userShares;
}	

async function getReferralShare() {
    const contractAbi = [
        "function referralBonus() external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(governingContract, contractAbi, provider)
    const userShares = BigInt(await timeDepositContract.referralBonus())
    return userShares;
}	

document.getElementById("btn-link").addEventListener("click", trigger);

document.getElementById("btn-connect").addEventListener("click", connectWallet);

const base58Alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';


function encodeBase58(ethereumAddress) {
  let encoded = '';
  let value = BigInt('0x' + ethereumAddress.slice(2).toString('hex'));
  const base = BigInt(base58Alphabet.length);

  while (value > 0n) {
    const rem = value % base;
    encoded = base58Alphabet.charAt(Number(rem)) + encoded;
    value = value / base;
  }

  for (let i = 0; i < ethereumAddress.length; i++) {
    if (ethereumAddress[i] !== 0x00) break;
    encoded = base58Alphabet.charAt(0) + encoded;
  }

  return encoded;
}


//WHAT IS NEEDED: Display how much credit he has

/*

function decodeBase58(encodedAddress) {
  let decoded = BigInt(0n);
  const base = BigInt(base58Alphabet.length);

  for (let i = 0; i < encodedAddress.length; i++) {
    const char = encodedAddress[i];
    const index = base58Alphabet.indexOf(char);
    if (index === -1) {
      throw new Error('Invalid character in base58 string');
    }
    decoded = decoded * base + BigInt(index);
  }

  const decodedHex = decoded.toString(16);
  const hexString = (decodedHex.length % 2 === 0) ? decodedHex : '0' + decodedHex;
  return '0x' + hexString;
}

// Usage example
const ethereumAddress = '0x1234567890123456789012345678901234567890';

const encodedAddress = encodeBase58(ethereumAddress);
console.log(encodedAddress); // Outputs: 3W8mu9T5XWqSaL7PL9R

const decodedAddress = decodeBase58(encodedAddress).toString('hex');
console.log(decodedAddress); // Outputs: 0x1234567890123456789012345678901234567890
*/
