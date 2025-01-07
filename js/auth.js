var minCostToVote
var delayBE

var tokenContract = "0xFAaC6a85C3e123AB2CF7669B1024f146cFef0b38"

var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"

var blockExplorerURL = "https://scan.mypinata.cloud/ipfs/bafybeidn64pd2u525lmoipjl4nh3ooa2imd7huionjsdepdsphl5slfowy/#"
var blockExplorerName = "PulseScan"
var twitterURL = ""
var tokenTicker = "OINK" 
var telegramLink = "https://t.me/OINK-pls"
var projectName = "Piggy Bank"

var price

fetch(apiURL + 'api/costToVote.txt', {
    cache: "no-cache"
}).then(function(response) {
    return response.text();
}).then(function(html) {
	minCostToVote = html;
})

fetch(apiURL + 'api/delayBeforeEnforce.txt', {
    cache: "no-cache"
}).then(function(response) {
    return response.text();
}).then(function(html) {
    delayBE = html
}) 


function nothingHere() {
    Swal.fire({
        title: '<strong>Nothing there....</strong>',
        html: 'No '+tokenTicker+' NFTs exist at this point. </br>Follow social media below to stay notified.</br></br><a href="'+twitterURL+'" target="_blank"><img src="img/twitter.svg" height="50px"></a>&nbsp&nbsp<a href="'+telegramLink+'" target="_blank"><img src="img/telegram.svg" height="40px"></a>',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
}

function showAudit() {
    Swal.fire({
        title: '<strong>Security Audit</strong>',
        icon: 'success',
        html: projectName+` protocol consists of multiple smart contracts. The entire protocol has been reviewed by an independent security analyst.
</br></br>The vaults where users deposit their tokens (PLS, PLSX, HEX, INC,...) and require higher level of
 security assurance have been audited by 2 professional security auditing firms.</br></br>
 <h4>#1 Security Audit by SolidProof: <a href="https://oink-pls.com/SmartContract_Audit_Solidproof_Piggy Bank.pdf" target="_blank">Security Audit</a></h4>
<h4>#2 Security Audit by RD Auditors: <a href="https://oink-pls.com/Piggy Bank - Smart Contract Security Report.pdf" target="_blank">Security Audit</a></h4>
<h4>#3 Protocol Review by Independent Security Researcher: <a href="https://oink-pls.com/Piggy Bank-Security-Review.pdf" target="_blank">Extensive Security Review</a></h4>
</br> <img style="max-width:95%" src="img/audit.png">
`,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
}


function socials() {
    Swal.fire({
        title: '<strong>Social Media</strong>',
        html: '<a href="'+twitterURL+'" target="_blank"><img src="img/twitter.svg" height="100px"></a></br><a href="'+telegramLink+'" target="_blank"><img src="img/telegram.svg" height="85px"></a></br></br>',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
}

function noNFTs() {
    Swal.fire({
        title: '<strong>Sorry! No Mining rewards for NFTs right now!</strong>',
        html: `Apologies, but at this moment, NFTs do not yield any mining rewards. Presently, there are no NFT tokens that meet the criteria for receiving mining rewards.
</br></br>
Our protocol operates in a permissionless manner, allowing the community to determine which NFT collections should be eligible for mining rewards through a democratic process.
</br></br>
To initiate this process, you can propose a specific collection to be considered for mining rewards eligibility. If your proposal garners community support and approval, you can then allocate rewards for mining using NFTs.`,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
}


const directProvider = new ethers.providers.JsonRpcProvider(rpcLink);

// Uniswap V2 Pair ABI (or just the relevant parts for getReserves function)
const uniswapV2PairAbi = [
    // ...
    "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
    // ...
];

// Uniswap V2 Pair address (Replace with actual address)
const uniswapV2PairAddress = "0xEf9Ea3d72e28c7140481209190601C085027D6fE";

// Connect to the pair contract
const pairContract = new ethers.Contract(uniswapV2PairAddress, uniswapV2PairAbi, directProvider);

// Token Addresses (Replace with actual addresses)
const token0Address = "0xFAaC6a85C3e123AB2CF7669B1024f146cFef0b38";
const token1Address = "0xA1077a294dDE1B09bB078844df40758a5D0f9a27";

const uniswapV2WethUsdcPairAddress = "0xE56043671df55dE5CDf8459710433C10324DE0aE";

// Connect to the WETH/USDC pair contract
const wethUsdcPairContract = new ethers.Contract(uniswapV2WethUsdcPairAddress, uniswapV2PairAbi, directProvider);

async function getTokenPriceInUsdc() {
    // Get reserves for the Token0/WETH pair
    const tokenPairReserves = await pairContract.getReserves();
    const priceOfToken0InWeth = tokenPairReserves[0] / tokenPairReserves[1];

    // Get reserves for the WETH/USDC pair
    const wethUsdcReserves = await wethUsdcPairContract.getReserves();
    // Assume WETH is reserve0 and USDC is reserve1
    // Be careful with the order, it might be the opposite
    const priceOfWethInUsdc = wethUsdcReserves[1] / wethUsdcReserves[0];

    // Now, multiply the two prices to get the price of Token0 in USDC
    const priceOfToken0InUsdc = priceOfToken0InWeth * priceOfWethInUsdc;
	const roundedPriceOfToken0InUsdc = parseFloat(priceOfToken0InUsdc.toFixed(8));

	price = roundedPriceOfToken0InUsdc
	 document.getElementById("DTX-price").innerHTML = price
    console.log(roundedPriceOfToken0InUsdc);
}

getTokenPriceInUsdc();
setInterval(getTokenPriceInUsdc, 30000);





document.getElementById("showAdvancedButton").addEventListener("click", function() {
    document.getElementById("showGovernance").style.display = "block";
    document.getElementById("showAdvancedButton").style.display = "none";
});



var isTestnet = false;
//console.log(provider);

var Web3Modal = window.Web3Modal.default;
var WalletConnectProvider = window.WalletConnectProvider.default;

let Web3Provider;
let Web3Instance;

ethereum.on('accountsChanged', function(accounts) {
    localStorage.removeItem('userAddress')
    localStorage.removeItem('allStakes')
    window.location.reload();
})
ethereum.on('chainChanged', (_chainId) => window.location.reload());

const providerOptions = {
    /*walletconnect: {
            package: WalletConnectProvider,
            options: {
			    rpc: {
					943: 'https://rpc.v4.testnet.pulsechain.com',
				},
                chainId: 943,
            }
        },*/
    'custom-walletlink': {
        display: {
            logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
            name: 'Coinbase',
            description: 'Connect to Coinbase Wallet (not Coinbase App)',
        },
        options: {
            appName: 'Coinbase', // Your app name
            networkUrl: 'https://rpc.v4.testnet.pulsechain.com',
            rpc: {
                369: 'https://rpc.v4.testnet.pulsechain.com',
            },
        },
        package: WalletLink,
        connector: async (_, options) => {
            const {
                appName,
                networkUrl,
                chainId
            } = options
            const walletLink = new WalletLink({
                appName,
            })
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
            await provider.enable()
            return provider
        },
    },
    /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions // required
});


async function auth() {
    var userLength = 0;
    if (typeof ethereum === 'undefined') {
        Swal.fire(
            'Error',
            'No web3 wallet detected in your browser! Please install web3 wallet to continue.</br></br> Visit <a href="https://metamask.io" target="_blank">Metamask</a>',
            'error'
        )
    } else {
        if (typeof provider !== 'undefined') {
            userLength = await provider.listAccounts();
        }
        if (userLength == 0) {
            const instance = await web3Modal.connect();

            provider = new ethers.providers.Web3Provider(instance);

            let signer = provider.getSigner();
            let address = await signer.getAddress();
            //console.log('address: '+address);
        }

        const network = await provider.getNetwork();
        if (network.chainId != 369) {
            Swal.fire({
                title: 'PulseChain Mainnet Only!',
                html: 'Please connect to PulseChain Mainnet!</br></br> Pulsechain Network details: <a href="https://pulsechain.com/" target="_blank">info</a>',
                icon: 'error',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{
                        chainId: '0x171'
                    }], // 943 chainId must be in hexadecimal numbers
                });

            } catch (error) {
                if (error.code === 4902) {
                    try {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x171', // Hexadecimal version of 80001, prefixed with 0x
                                chainName: "PulseChain",
                                nativeCurrency: {
                                    name: "PULSE",
                                    symbol: "PLS",
                                    decimals: 18,
                                },
                                rpcUrls: ["https://rpc.pulsechain.com"],
                                blockExplorerUrls: ["https://scan.pulsechain.com"],
                                iconUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/PulseChainLogoTransparent.png/450px-PulseChainLogoTransparent.png"],

                            }],
                        });
                    } catch (addError) {
                        console.log('Did not add network');
                    }
                }
            }

        }
    }
}




async function checkBalance(userAddress) {
    const contractAddress = tokenContract;
    const contractAbi = [
        "function balanceOf(address account) external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = Number(BigInt(await OINKContract.balanceOf(userAddress)) / BigInt(10 ** 18));
    return balance;
}

async function displayUserReputation(userWalletAddress) {
    const network = await provider.getNetwork();
    await auth()
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

    displayMessage = '<div id="while-loading">Loading balances....</br><small><small>Can take up to 30seconds.</small></small></br><div class="pixel-loader"></div></div><div id="display-balances"></div>';
    Swal.fire({
        title: '<strong>User Wallet Holdings</strong>',
        html: displayMessage,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
    let htmlMessage = '';

    let walletBalance = await checkBalance(userWalletAddress);
    if (walletBalance != 0) {
        document.getElementById("display-balances").innerHTML += 'Wallet Balance: </br><strong>' + walletBalance.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="15px" height="15px"> <small>'+tokenTicker+'</small></br>';
    }

    const pool1 = await getUserBalanceInPool(userWalletAddress, pool1Month);
    if (pool1 != 0) {
        document.getElementById("display-balances").innerHTML += '</br>1 Month: <strong>' + pool1.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="15px" height="15px"> <small>'+tokenTicker+'</strong> Staked</small>';
    }


    const pool2 = await getUserBalanceInPool(userWalletAddress, pool3Month);
    if (pool2 != 0) {
        document.getElementById("display-balances").innerHTML += '</br>3 Month: <strong>' + pool2.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="15px" height="15px"> <small>'+tokenTicker+'</strong> Staked</small>';
    }

    const pool3 = await getUserBalanceInPool(userWalletAddress, pool6Month);
    if (pool3 != 0) {
        document.getElementById("display-balances").innerHTML += '</br>6 Month: <strong>' + pool3.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="15px" height="15px"> <small>'+tokenTicker+'</strong> Staked</small>';
    }

    const pool4 = await getUserBalanceInPool(userWalletAddress, pool1Year);
    if (pool4 != 0) {
        document.getElementById("display-balances").innerHTML += '</br>1 Year: <strong>' + pool4.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="15px" height="15px"> <small>'+tokenTicker+'</strong> Staked</small>';
    }


    const pool5 = await getUserBalanceInPool(userWalletAddress, pool3Year);
    if (pool5 != 0) {
        document.getElementById("display-balances").innerHTML += '</br>3 Year: <strong>' + pool5.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="15px" height="15px"> <small>'+tokenTicker+'</strong> Staked</small>';
    }


    const pool6 = await getUserBalanceInPool(userWalletAddress, pool5Year);
    if (pool6 != 0) {
        document.getElementById("display-balances").innerHTML += '</br>5 Year: <strong>' + pool6.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="15px" height="15px"> <small>'+tokenTicker+'</strong> Staked</small>';
    }

    document.getElementById("while-loading").innerHTML = ""

    const totalBalance = walletBalance + pool1 + pool2 + pool3 + pool4 + pool5 + pool6;

    if (isTestnet) {
        let actionToLog
        if (userWalletAddress.toLowerCase() == account.toLowerCase()) {
            actionToLog = 'checkYourReputation'
        } else {
            actionToLog = 'checkUserReputation'
        }
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


    if (totalBalance > 0) {
        document.getElementById("display-balances").innerHTML += '</br></br>Total balance: </br>' + totalBalance.toLocaleString() + '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> '+tokenTicker+' <small></br>($' + (Math.round(totalBalance * document.getElementById("DTX-price").innerHTML)).toLocaleString() + ')</small>';
    } else {
        document.getElementById("display-balances").innerHTML += "User doesn't hold any '+tokenTicker+' and has no active '+tokenTicker+' time deposits!";
    }
    document.getElementById("display-balances").innerHTML += '</br></br>Wallet: <small>' + userWalletAddress.toLocaleString() + '</small>';

}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function getUserBalanceInPool(walletAddress, contractAddress) {
    const contractAbi = [
        "function getUserTotalShares(address _user) external view returns (uint256)",
        "function getPricePerFullShare() external view returns (uint256)"
    ];
    const timeDepositContract = new ethers.Contract(contractAddress, contractAbi, provider)
    const userShares = BigInt(await timeDepositContract.getUserTotalShares(walletAddress))
    const OINKPerShare = BigInt(await timeDepositContract.getPricePerFullShare())
    //const userShares2 = Number(userShares / BigInt(10**18))
    //const actualTokens = Math.round(userShares2 + userShares2 * (Number(OINKPerShare / BigInt(10**14) % BigInt(10000)) / 10000))
    //console.log(actualTokens)
    const actualTokens = Math.round(Number(userShares * OINKPerShare / BigInt(10 ** 36)));
    return actualTokens;
}


function viewVotes(fetchUrl) {

    fetch(fetchUrl, {
        cache: "no-cache"
    }).then(function(response) {
        // The API call was successful!
        return response.text();

    }).then(function(htmlContent) {
        if (htmlContent.includes("Not Found")) {
            htmlContent = "There are currently no votes for this proposal";
        }

        Swal.fire({
            title: 'View All Votes',
            html: htmlContent,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })
    }).catch(function(err) {
        Swal.fire(
            'Error',
            'Something went wrong! Please notify in the Telegram channel!',
            'error'
        )
    });
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

async function isSuccess2() {
    Swal.close();
    sleep(610).then(() => {
        triggerConfetti2();
    })


    sleep(2100).then(() => {
        Swal.fire({
            title: '<strong>Hoorah! Transaction confirmed!',
            html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Proposal has been <strong>successfully enforced</strong>. </br>The system has updated immediately. </br></br><small>Proposal has been moved to "expired" proposals and can be viewed by clicking the top right corner of the tab.</small></br></br> <small>You can close this window.</small>',
            icon: 'success',
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })
    })
}

async function isSuccess3() {
    Swal.close();
    sleep(610).then(() => {
        triggerConfetti3();
    })


    sleep(2100).then(() => {
        Swal.fire({
            title: '<strong>Hoorah! Transaction confirmed!',
            html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br> The proposal has been <strong>successfully rejected!</strong>.<small> Proposal has been moved to "expired" proposals and can be viewed by clicking the top right corner of the tab.</small></br> <small>You can close this window.</small>',
            icon: 'success',
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })
    })
}

function displayDelayInfo() {
    Swal.fire(
        'Delay',
        'After you submit a proposal, it can be rejected if the votes committed against the proposal outnumber the votes committed in favor of the proposal. </br></br>If the proposal is not rejected, it can be enforced after "Delay Before Enforce"(currently ' + delayBE + ' Hours).</br></br> The DELAY slider is optional and creates a period of time during which the proposal <strong>CAN NOT</strong> be rejected, giving time to accumulate votes in favor fo the proposal.',
        'info'
    )
}

function errorMessage(e) {
    let msg
    if (typeof e.data === 'undefined') {
        msg = e.message
    } else {
        msg = e.data.message
    }

    Swal.fire({
        title: '<strong>Something went wrong</strong>',
        html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="'+telegramLink+'" target="_blank">Telegram</a>',
        icon: 'error',
        showCancelButton: true,
        showConfirmButton: false
    })
}

async function addToMetamask() {
    const tokenAddress = tokenContract;
    const tokenSymbol = tokenTicker;
    const tokenDecimals = 18;
    const tokenImage = 'https://oink-pls.com/img/plsdao.png';

    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                },
            },
        });

        if (wasAdded) {
            sleep(610).then(() => {
                triggerConfetti();
            })


        } else {
            console.log('Your loss!');
        }
    } catch (error) {
        console.log(error);
    }
}

function getToken() {
Swal.fire({
						  title: 'OINK token contract address:',
						  html: 'Import the '+tokenTicker+' contract address on the decentralized exchange: </br><strong>0xFAaC6a85C3e123AB2CF7669B1024f146cFef0b38</strong></small></br></br><a href="https://app.pulsex.com/swap?outputCurrency=0xFAaC6a85C3e123AB2CF7669B1024f146cFef0b38" target="_blank"><button type="button" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Get '+tokenTicker+' on PulseX</button></a></br></br><strong></br><h3>Disclaimer & Associated Risks</strong></h3> Piggy Bank (OINK) is a utility token utilized for securing and governing a decentralized autonomous protocol. It is important to note that Piggy Bank (OINK) is not an investment, and you should not anticipate any financial returns. There is no assurance of future token value, and it is crucial to understand that token prices can exhibit significant volatility, potentially resulting in a total loss of value. Please refrain from investing funds that you cannot afford to lose.',
						  icon: 'info',
						  focusConfirm: false,
						allowOutsideClick: false,
						  confirmButtonText:
							'Close message.'
						})
}