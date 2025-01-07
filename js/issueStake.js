// If your contract constructor requires parameters, the ABI
// must include the constructor
async function createContract() {
const abi = [
  "constructor(address _recipient, address _pool, uint256 _minServe)",
  "function giftStake() external"
];
var bytecode = "6101006040527f633372effed18f98ce7ddf2f0a58312609fbfea500000000000000000000000060805234801561003557600080fd5b5060405161044b38038061044b83398101604081905261005491610093565b6001600160601b0319606093841b811660c0529190921b1660a05260e0526100ce565b80516001600160a01b038116811461008e57600080fd5b919050565b6000806000606084860312156100a7578283fd5b6100b084610077565b92506100be60208501610077565b9150604084015190509250925092565b60805160601c60a05160601c60c05160601c60e0516103226101296000396000818160cf015261020301526000818160f301526101e201526000818160ab0152610117015260008181610146015261027601526103226000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806316f0115b1461005c578063478c6e581461007a57806366d003ac1461008f57806372c20fae14610097578063fc0c546a146100a1575b600080fd5b6100646100a9565b60405161007191906102b0565b60405180910390f35b6100826100cd565b60405161007191906102c4565b6100646100f1565b61009f610115565b005b610064610274565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663859f267f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161019091906102b0565b60206040518083038186803b1580156101a857600080fd5b505afa1580156101bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e09190610298565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006040518463ffffffff1660e01b8152600401610240939291906102cd565b600060405180830381600087803b15801561025a57600080fd5b505af115801561026e573d6000803e3d6000fd5b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000602082840312156102a9578081fd5b5051919050565b6001600160a01b0391909116815260200190565b90815260200190565b9283526001600160a01b0391909116602083015260408201526060019056fea26469706673582212201bc52eb8a7769a4ff63204bf3d61ffbcd2bbd36d583e0cfdf861d136a76800aa64736f6c63430008000033"
// The factory we use for deploying contracts
var factory = new ethers.ContractFactory(abi, bytecode, provider.getSigner())

var recipient = document.getElementById("recipientAddress").value
var pool = document.getElementById("timeOption").value
var mandatoryServe = document.getElementById("mandatoryServe").value

Swal.fire({
        title: '<strong>Awaiting confirmation...',
        html: 'Confirm the transaction in wallet to deploy the contract and await for confirmation on the blockchain...<div class="pixel-loader"></div>',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
// Deploy an instance of the contract
contract = await factory.deploy(recipient, pool, mandatoryServe);

//fire swal... awaiting confirmation ...then when deployed, copy the address to clipboard and give them button to request treasury payment
await contract.deployTransaction.wait()

console.log(contract.address)

                    triggerConfetti();
					
if(isTestnet) {

    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];
							let actionToLog = 'requestStake'
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


			//navigator.clipboard.writeText(contract.address)
			if (window.isSecureContext && navigator.clipboard) {
                sleep(2100).then(() => {
					navigator.clipboard.writeText(contract.address)
                    Swal.fire({
                        title: '<strong>Congratulations! Contract Launched!',
                        html: 'Deployed contract address: </br><small><strong>'+contract.address+'</strong></small> </br></br>Copy the contract Address. </br>Request a treasury withdrawal to the deployed contract address to initiate the stake donation process. </br><a href="treasury.html"><button class="swal2-confirm swal2-styled" style="display: inline-block;"> Request Withdraw</button></a> </br></br> ',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })
                })
			} else {
				   sleep(2100).then(() => {
                    Swal.fire({
                        title: '<strong>Congratulations! Contract Launched!',
                        html: 'Deployed contract address: </br><small><strong>'+contract.address+'</strong></small> </br></br>Copy the contract Address. </br></br>Request a treasury withdrawal to the deployed contract address to initiate the stake donation process. </br><a href="treasury.html"><button class="swal2-confirm swal2-styled" style="display: inline-block;"> Request Withdraw</button></a> </br></br> ',
                        icon: 'success',
                        showCancelButton: false,
                        showConfirmButton: false
                    })
                })
			}
}

document.getElementById("btn-donateStake").onclick = createContract;