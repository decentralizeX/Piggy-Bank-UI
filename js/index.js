	function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

var blockExplorerUrl = 'https://scan.pulsechain.com/'
var treasuryContract = '0x3a4DA32dc29b146F26D8527e37FeaAe45fBebe69'
var rpcLink = 'https://rpc-pulsechain.g4mm4.io'
var tokenTicker = 'OINK'

var pricePls
var pricePlsx
var priceHex
var priceInc
var priceXpd


const ourNetwork = {
    name: 'Pulsechain',
    chainId: 369,
};
			
			var blocksInYear = 2920000
			
			var rewardPerBlock
			
			var allocations
			
			var poolBalances
			
			var bonuses
			
			var treasuryBalances
	
		
		
		
		async function getData() {
			let response = await fetch(apiURL + 'api/rewardPerBlock.txt', { cache: "no-cache" });
			rewardPerBlock = await response.text();
			
			response = await fetch(apiURL + 'api/totalAllocation.txt', { cache: "no-cache" });
			totalAllocation = await response.text();
			
			response = await fetch(apiURL + 'api/rollOverBonuses.txt', { cache: "no-cache" });
			bonuses = await response.text();
			bonuses = JSON.parse(bonuses)
			
			response = await fetch(apiURL + 'api/poolBalances.txt', { cache: "no-cache" });
			poolBalances = await response.text();
			poolBalances = JSON.parse(poolBalances);
			
			fillAllocations();
		}
		
		fetch(apiURL+'api/staked-nonstaked-stats.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("staked-nonstaked").innerHTML = html;
		})
		fetch(apiURL+'api/timeDeposit-distributions.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("td-distributions").innerHTML = html;
		})
		
		getPoolAllocations()
		async function getPoolAllocations() {

		let response = await fetch(apiURL + 'api/poolAllocations.txt', { cache: "no-cache" });
        allocations = await response.text();
		allocations = JSON.parse(allocations)
		
		getData();
			
			let total = Number(allocations[0]) + Number(allocations[1]) + Number(allocations[2]) + Number(allocations[3]) + Number(allocations[4]) + Number(allocations[5]) + Number(allocations[6]) + Number(allocations[7]) + Number(allocations[8]) + Number(allocations[9]) + Number(allocations[10]) + Number(allocations[11]) + Number(allocations[12]) + Number(allocations[13]) + Number(allocations[14]) + Number(allocations[15])
			let xpdShare = Number(allocations[0]) + Number(allocations[1]) + Number(allocations[2]) + Number(allocations[3]) + Number(allocations[4]) + Number(allocations[5]) 
			console.log("total " + total)
			console.log(xpdShare)
			xpdShare = xpdShare / total * 100
			
			let plsShare = Number(allocations[6]) / total * 100
			let plsxShare = Number(allocations[7]) / total * 100
			let incShare = Number(allocations[8]) / total * 100
			let hexShare = Number(allocations[9]) / total * 100
			let tshareShare = Number(allocations[10]) / total * 100
			
			let hoaShare = Number(allocations[12]) / total * 100
			let atropaShare = Number(allocations[13]) / total * 100
			let pdaiShare = Number(allocations[14]) / total * 100
			let solidxShare = Number(allocations[15]) / total * 100
			
			let thyMsg = ""
			
			console.log("hoa is " + hoaShare)
	// Create an array of objects to store the shares
let shares = [
    {name: "OINK", share: xpdShare, icon: "favicon/favicon-32x32.png"},
    {name: "PLS", share: plsShare, icon: "img/pls.png"},
    {name: "PLSX", share: plsxShare, icon: "img/plsx.png"},
    {name: "INC", share: incShare, icon: "img/inc.png"},
    {name: "HEX", share: hexShare, icon: "img/hex.png"},
    {name: "Tshare", share: tshareShare, icon: "img/hex.png"},
    {name: "HOA", share: hoaShare, icon: "img/hoa.png"},
    {name: "ATROPA", share: atropaShare, icon: "img/atropa.png"},
    {name: "pDAI", share: pdaiShare, icon: "img/pdai.png"},
    {name: "SOLIDX", share: solidxShare, icon: "img/solidx.png"}
];

// Filter out shares that are 0 and sort from highest to lowest
let sortedShares = shares
    .filter(s => s.share > 0)
    .sort((a, b) => b.share - a.share);

// Reset thyMsg before populating
thyMsg = "";

// Populate thyMsg with sorted shares
sortedShares.forEach((s, index) => {
    thyMsg += (index > 0 ? " | " : " ") + (
        s.share >= 10 ? Math.round(s.share) : 
        Number.isInteger(s.share) ? Math.round(s.share) :
        s.share >= 1 && parseFloat(s.share.toFixed(1)) % 1 === 0 ? Math.round(s.share) :
        s.share >= 1 ? s.share.toFixed(1) : 
        s.share.toFixed(2)
    ) + "<strong>%</strong>  <img src=\"" + s.icon + "\" width=\"20px\" height=\"20px\">" + s.name + " Miners";
});

			
			document.getElementById("rewardAllocations").innerHTML = `
			<center>
          <h6 class="card-title">Piggy Bank Reward Allocation</h6>
                </center>  
				  
				<div class="col-sm-4 col-md-10 mg-t-30 mg-sm-t-0"><small>
  `+thyMsg+`
       </small></div></br>`
		}
		
		
		
	
		getTreasury();

setInterval(getTreasury, 60*1000)

async function getTreasury() {

		let response = await fetch(apiURL + 'api/treasuryBalances.txt', { cache: "no-cache" });
        let treasuryBalances = await response.text();
			
			let response2 = await fetch(apiURL + 'api/masterchefPool9.txt', { cache: "no-cache" });
        let chefBalances = await response2.text();
		chefBalances = JSON.parse(chefBalances)
		
		console.log(chefBalances)
		
		
		
		let response3 = await fetch(apiURL + 'api/treasuryLPbalance.txt', { cache: "no-cache" });
        let lpBalance = await response3.text();
		lpBalance = JSON.parse(lpBalance)
		
		let response4 = await fetch(apiURL + 'api/tokenPrices.txt', { cache: "no-cache" });
        let allPrices = await response4.text();
		allPrices = JSON.parse(allPrices)
		
		pricePls = Number(allPrices[0])
		pricePlsx = Number(allPrices[1])
		priceInc = Number(allPrices[2])
		priceHex = Number(allPrices[3])
		priceXpd = Number(allPrices[4])
		
		console.log("pls price" + pricePls)
		document.getElementById("PLS-price").innerHTML = pricePls
		document.getElementById("PLSX-price").innerHTML = pricePlsx
		document.getElementById("INC-price").innerHTML = priceInc.toFixed(2)
		document.getElementById("HEX-price").innerHTML = priceHex.toFixed(3)
		document.getElementById("DTX-price").innerHTML = priceXpd
		
			treasuryBalances = JSON.parse(treasuryBalances);
			
			let allTreasury = treasuryBalances[0]/10**18*pricePls + treasuryBalances[1]/10**18*pricePlsx + treasuryBalances[2]/10**18*priceInc + treasuryBalances[3]/10**18*priceHex + (Number(chefBalances[1])*pricePlsx+Number(chefBalances[0])*priceInc) //+ treasuryBalances[4]/10**18*priceXpd
			let htmlData = `
			<center>
          <h6 class="card-title">Piggy Bank Treasury Staked on PulseX</h6>
                </center>  
				  
				<div class="col-sm-4 col-md-10 mg-t-30 mg-sm-t-0">
            <ul class="list-unstyled">
			 <li><span class="d-inline-block p-1 mr-3" style="background: #0099C6;"></span> <img src="img/inc.png" width="20px" height="20px"> &nbsp`+Math.round(Number(chefBalances[0])).toLocaleString()+` INC  <img src="img/plsx.png" width="20px" height="20px"> &nbsp`+Math.round(Number(chefBalances[1])).toLocaleString()+` PLSX <small>(<font color="green">$</font>`+(Math.round(Number(chefBalances[1])*pricePlsx+Number(chefBalances[0])*priceInc)).toLocaleString()+`)</small></li>

</br><h6 class="card-title">Treasury Wallet Holdings</h6>  
`

const tokenData = [
    { 
        symbol: 'PLS', 
        balance: Math.round(treasuryBalances[0]/10**18), 
        value: Math.round(treasuryBalances[0]/10**18*pricePls),
        color: '#0099C6',
        img: 'img/pls.png'
    },
    { 
        symbol: 'PLSX', 
        balance: Math.round(treasuryBalances[1]/10**18), 
        value: Math.round(treasuryBalances[1]/10**18*pricePlsx),
        color: '#6F42C1',
        img: 'img/plsx.png'
    },
    { 
        symbol: 'INC', 
        balance: Math.round(treasuryBalances[2]/10**18), 
        value: Math.round(treasuryBalances[2]/10**18*priceInc),
        color: '#FE3365',
        img: 'img/inc.png'
    },
    { 
        symbol: 'HEX', 
        balance: Math.round(treasuryBalances[3]/10**8), 
        value: Math.round(treasuryBalances[3]/10**8*priceHex),
        color: '#FE9A33',
        img: 'img/hex.png'
    }/*,
    { 
        symbol: 'OINK', 
        balance: Math.round(treasuryBalances[4]/10**18), 
        value: Math.round(treasuryBalances[4]/10**18*priceXpd),
        color: '#FE9A33',
        img: 'favicon/favicon-32x32.png'
    }*/
];

// Sort the tokenData array by value in descending order
tokenData.sort((a, b) => b.value - a.value);

// Generate the HTML string with sorted tokens
 htmlData+= tokenData.map(token => 
    `<li><span class="d-inline-block p-1 mr-3" style="background: ${token.color};"></span> <img src="${token.img}" width="20px" height="20px"> &nbsp${token.balance.toLocaleString()} ${token.symbol} <small>(<font color="green">$</font>${token.value.toLocaleString()})</small></li>`
).join('');

  	 
		
        htmlData+= `     <li><span class="d-inline-block p-1 mr-3" style="background: #FE9A33;"></span><strong> Total:</strong> <font color="green">$</font>`+(Math.round(allTreasury)).toLocaleString()+`</li>
		
                      
					  </br><h6 class="card-title">Protocol-Owned Liquidity</h6>    
<li><span class="d-inline-block p-1 mr-3" style="background: #0099C6;"></span> <img src="img/pls.png" width="20px" height="20px"> &nbsp`+Math.round(Number(lpBalance[0])).toLocaleString()+` PLS  <img src="favicon/favicon-32x32.png" width="20px" height="20px"> &nbsp`+Math.round(Number(lpBalance[1])).toLocaleString()+` OINK <small>(<font color="green">$</font>`+(Math.round(Number(lpBalance[0])*pricePls+Number(lpBalance[1])*priceXpd)).toLocaleString()+`)</small></li>
					  <li><span class="d-inline-block p-1 mr-3" style="background: #FE9A33;"></span> <img src="favicon/favicon-32x32.png" width="20px" height="20px"> &nbsp`+Math.round(treasuryBalances[4]/10**18).toLocaleString()+` OINK <small>(<font color="green">$</font>`+(Math.round(treasuryBalances[4]/10**18*priceXpd)).toLocaleString()+`)</small></li>

</ul>
 </div>`
 
 document.getElementById("treasuryInfo").innerHTML = htmlData
	   
		
}
		
		
		
		
		function fillAllocations() {
			//console.log("rewards for pool1: " + ((blocksInYear * rewardPerBlock) * (allocations[2] / totalAllocation)))
			//console.log("and balance in the pool: " + poolBalances[0])
			document.getElementById("apy1").innerHTML = '&nbsp' + Math.round((((blocksInYear * rewardPerBlock) * (allocations[0] / totalAllocation)) / poolBalances[0])*100 + 12 * Number(bonuses[0]))+'%'
			document.getElementById("apy2").innerHTML = '&nbsp' + Math.round((((blocksInYear * rewardPerBlock) * (allocations[1] / totalAllocation)) / poolBalances[1])*100 + 4 * Number(bonuses[1]))+'%'
			document.getElementById("apy3").innerHTML = '&nbsp' + Math.round((((blocksInYear * rewardPerBlock) * (allocations[2] / totalAllocation)) / poolBalances[2])*100 + 2 * Number(bonuses[2]))+'%'
			document.getElementById("apy4").innerHTML = '&nbsp' + Math.round((((blocksInYear * rewardPerBlock) * (allocations[3] / totalAllocation)) / poolBalances[3])*100 + 1 * Number(bonuses[3]))+'%'
			document.getElementById("apy5").innerHTML = '&nbsp' + Math.round((((blocksInYear * rewardPerBlock) * (allocations[4] / totalAllocation)) / poolBalances[4])*100 + 1/3 * Number(bonuses[4]))+'%'
			document.getElementById("apy6").innerHTML = '&nbsp' + Math.round((((blocksInYear * rewardPerBlock) * (allocations[5] / totalAllocation)) / poolBalances[5])*100 + 1/5 * Number(bonuses[5]))+'%'
    }
	
	
      // Create a new script element
      var script = document.createElement('script');
      
      // Set the src attribute using the value of apiURL variable
      script.src = apiURL+'/api/stakedRatio.js';
      
      // Append the script element to the document's head or body
      document.head.appendChild(script);
	  
	   var script2 = document.createElement('script');
      
      // Set the src attribute using the value of apiURL variable
      script2.src = apiURL+'/api/timeDepositRatios.js';
      
      // Append the script element to the document's head or body
      document.head.appendChild(script2);
	  
	   var script3 = document.createElement('script');
      
      // Set the src attribute using the value of apiURL variable
      script3.src = apiURL+'/api/rewardAllocations.js';
      
      // Append the script element to the document's head or body
      document.head.appendChild(script3);
	  
	  /*
	  fetch(apiURL+'api/rewardAllocations.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("rewardAllocations").innerHTML = html;
		})*/
		
		var authGoverningContract = "0x331146b366c0Cd2AcA542ce71E5D6fb66bf07D16"
var authReferralContract = "0x066F0a45801bcbc5232b11ed4b97c39E1369fe59"
var authMasterchefContract = "0x486fEa20eA242456b450B005ED7D019E3E984f28"

var distroContract1 = "0xE87C806f8AFA1cE543ab3C44D1c4b130B83574CE"
var distroContract2 = "0x51Aeb56C05a2BD781207B63D395475b7185c5fd7"
		
		async function showAll() {
		Swal.fire({
						  title: '<strong>All Balances</strong>',
						  html: '<div id="bereplaced">Loading balances... <div class="pixel-loader"><div></div>',
						  icon: 'info',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						const govBalance =  await checkBalanceRPC(authGoverningContract)
						const refBalance = await checkBalanceRPC(authReferralContract)
						const treasuryBalance = await checkBalanceRPC(treasuryContract)
						const totalSupply = await totalSupplyF()
						const virtualSupply = await virtualSupplyF()
						const contributorCredit = await contributorCreditF()
						const rewardCredit = await rewardCreditF()
						
						document.getElementById("bereplaced").innerHTML = `
							Existing Supply: <strong>` + totalSupply.toLocaleString() + ` `+tokenTicker+`</strong> </br>
							Virtual Supply <strong>` + virtualSupply.toLocaleString() +` `+tokenTicker+`</strong> </br></br>
							Treasury Balance: <strong>`+treasuryBalance.toLocaleString()+` `+tokenTicker+`</strong></br>
							Governing Contract Balance: <strong>`+govBalance.toLocaleString()+` `+tokenTicker+`</strong></br>
							Reward Contract Balance: <strong>`+refBalance.toLocaleString()+` `+tokenTicker+`</strong></br></br> Unclaimed Tokens (<small><strong>`+Math.round((contributorCredit+rewardCredit)/900000000*100)+`%</strong></small>):</br>
							Contributors: <strong>`+contributorCredit.toLocaleString()+` `+tokenTicker+`</strong></br>
							Rewards: <strong>`+rewardCredit.toLocaleString()+` `+tokenTicker+`</strong> 
							</br></br> "Existing supply" is the amount of `+tokenTicker+` tokens in circulation. When tokens are used to mine with, they are burned and removed 
							from circulation. </br>"Virtual Supply" accounts for all tokens - including burned ones, as well as the pending rewards.</br></br>The "liquid" supply displayed in the charts deducts the governing contract balance and LP tokens from the total supply.`
							
						//get: Existing supply, virtual supply, governor balance, reward contract
		}
		
		async function totalSupplyF() {
			const directProvider = new ethers.providers.JsonRpcProvider(rpcLink,ourNetwork);
    const contractAddress = tokenContract;
    const contractAbi = [
        "function totalSupply() external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, directProvider);
    const balance = Number(BigInt(await OINKContract.totalSupply()) / BigInt(10 ** 18));
    return balance;
}

async function virtualSupplyF() {
	const directProvider = new ethers.providers.JsonRpcProvider(rpcLink,ourNetwork);
    const contractAddress = authMasterchefContract;
    const contractAbi = [
        "function virtualTotalSupply() external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, directProvider);
    const balance = Number(BigInt(await OINKContract.virtualTotalSupply()) / BigInt(10 ** 18));
    return balance;
}

async function contributorCreditF() {
	const directProvider = new ethers.providers.JsonRpcProvider(rpcLink,ourNetwork);
    const contractAddress = authMasterchefContract;
    const contractAbi = [
        "function credit(address) external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, directProvider);
    const balance = Number(BigInt(await OINKContract.credit(distroContract1)) / BigInt(10 ** 18));
    return balance;
}

async function rewardCreditF() {
	const directProvider = new ethers.providers.JsonRpcProvider(rpcLink,ourNetwork);
    const contractAddress = authMasterchefContract;
    const contractAbi = [
        "function credit(address) external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, directProvider);
    const balance = Number(BigInt(await OINKContract.credit(distroContract2)) / BigInt(10 ** 18));
    return balance;
}

async function checkBalanceRPC(userAddress) {
	const directProvider = new ethers.providers.JsonRpcProvider(rpcLink,ourNetwork);
    const contractAddress = tokenContract;
    const contractAbi = [
        "function balanceOf(address account) external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, directProvider);
    const balance = Number(BigInt(await OINKContract.balanceOf(userAddress)) / BigInt(10 ** 18));
    return balance;
}



    // Function to format time ago
        function formatTimeAgo(timestamp) {
            const now = Date.now();
            const diff = now - (new Date(timestamp * 1000).getTime());
            
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const months = Math.floor(days / 30);
            const years = Math.floor(months / 12);

            if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
            if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
            if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
            if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
            if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
        }

        // Main class to handle buyback data
      class TreasuryBuybacks {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.visibleLines = 5;
        this.buybackData = [];
    }

    async fetchData() {
        try {
            const response = await fetch(apiURL + '/api/swap.txt', { cache: "no-cache" });
            const text = await response.text();

            // Parse the text into an array of lines and reverse the order
            this.buybackData = text.trim().split('\n').map(line => {
                const parts = line.split(',');
                return {
                    x1: Number(parts[2])/10**18, // 3rd element
                    x2: Number(parts[5])/10**18, // 6th element
					txHash: parts[7],
                    timeAgo: formatTimeAgo(Number(parts[6])) // 7th element (timestamp)
                };
            }).reverse(); // Reverse the array here

            this.render();
        } catch (error) {
            console.log(`Error loading data: ${error.message}`);
        }
    }


	
	
    render() {
        // Clear any existing content and loading message
        this.container.innerHTML = '';

        // Slice and render visible lines from reversed data
        const visibleData = this.buybackData.slice(0, this.visibleLines);

        visibleData.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('buyback-item');
            itemEl.innerHTML = `Treasury used <img src="img/pls.png" width="20px" height="20px"><strong>${Math.round(item.x1).toLocaleString()}PLS</strong> to buy-back <img src="favicon/favicon-32x32.png" width="20px" height="20px"><strong>${Math.round(item.x2).toLocaleString()}OINK</strong> <span style="cursor: pointer;" onclick="window.open('`+blockExplorerUrl + `/tx/` + item.txHash +`', '_blank');"><small>(${item.timeAgo})</small></span>`;
            this.container.appendChild(itemEl);
        });

        // Add show more button if needed
        if (this.visibleLines < this.buybackData.length) {
            const showMoreBtn = document.createElement('button');
            showMoreBtn.classList.add('show-more-btn');
            showMoreBtn.textContent = 'Show More Buy-Backs';
            showMoreBtn.addEventListener('click', () => this.showMore());
            this.container.appendChild(showMoreBtn);
        }
    }

    showMore() {
        this.visibleLines += 5;
        this.render();
    }
}

class TreasuryInflows {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.visibleLines = 5;
        this.buybackData = [];
        this.originalData = []; // Store original data separately
    }

    async fetchData() {
        try {
            const response = await fetch(apiURL + '/api/treasuryInflows.txt', { cache: "no-cache" });
            const text = await response.text();

            // Parse the text into an array of lines and reverse the order
            this.originalData = text.trim().split('\n').map(line => {
                const parts = line.split(',');
                return {
                    from: parts[0],
                    to: parts[1],
                    token: parts[3],
                    x1: Number(parts[2]),
                    txHash: parts[4],
                    timeAgo: formatTimeAgo(Number(parts[5]))
                };
            }).reverse();

            this.render();
        } catch (error) {
            console.log(`Error loading data: ${error.message}`);
        }
    }

    render() {
        // Create a deep copy of the original data for this render
        this.buybackData = JSON.parse(JSON.stringify(this.originalData));
        
        this.container.innerHTML = '';
        let displayedLines = 0;
        
        // Iterate through the data
        for (let i = 0; i < this.buybackData.length && displayedLines < this.visibleLines; i++) {
            const item = this.buybackData[i];
            const nextItem = this.buybackData[i + 1];
            
            if (item.to.toLowerCase() != treasuryContract.toLowerCase()) {
                continue;
            }

            // If next item has same txHash, add its value to current item and skip displaying
            if (nextItem && nextItem.txHash === item.txHash && nextItem.token === item.token) {
                nextItem.x1 += item.x1;
                continue;
            }

            const itemEl = document.createElement('div');
            itemEl.classList.add('buyback-item');
            let icon;
            let ticker;
            
            let displayAmount = item.x1;
            if (item.token.toLowerCase() == "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39") {
                displayAmount = item.x1 / 10**8;
            } else {
                displayAmount = item.x1 / 10**18;
            }
            
            if (item.token.toLowerCase() == "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39") {
                icon = '<img src="img/hex.png" width="20px" height="20px">';
                ticker = "HEX";
            } else if (item.token.toLowerCase() == "pls") {
                icon = '<img src="img/pls.png" width="20px" height="20px">';
                ticker = "PLS";
            } else if (item.token.toLowerCase() == "0x95B303987A60C71504D99Aa1b13B4DA07b0790ab".toLowerCase()) {
                icon = '<img src="img/plsx.png" width="20px" height="20px">';
                ticker = "PLSX";
            } else if (item.token.toLowerCase() == "0x2fa878Ab3F87CC1C9737Fc071108F904c0B0C95d".toLowerCase()) {
                icon = '<img src="img/inc.png" width="20px" height="20px">';
                ticker = "INC";
            } else if (item.token.toLowerCase() == "0xFAaC6a85C3e123AB2CF7669B1024f146cFef0b38".toLowerCase()) {
                icon = '<img src="img/xpd.png" width="20px" height="20px">';
                ticker = "OINK";
            } else if (item.token.toLowerCase() == "0x6b175474e89094c44da98b954eedeac495271d0f".toLowerCase()) {
                icon = '<img src="img/pdai.png" width="20px" height="20px">';
                ticker = "pDAI";
            } else if (item.token.toLowerCase() == "0x7901a3569679AEc3501dbeC59399F327854a70fe".toLowerCase()) {
                icon = '<img src="img/hoa.png" width="20px" height="20px">';
                ticker = "HOA";
            } else if (item.token.toLowerCase() == "0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6".toLowerCase()) {
                icon = '<img src="img/atropa.png" width="20px" height="20px">';
                ticker = "ATROPA";
            } else if (item.token.toLowerCase() == "0x8Da17Db850315A34532108f0f5458fc0401525f6".toLowerCase()) {
                icon = '<img src="img/solidx.png" width="20px" height="20px">';
                ticker = "SOLIDX";
            } else {
                icon = '';
                ticker = "Unknown";
            }
            
            itemEl.innerHTML = `Treasury received ${icon}<strong>${formatAmount(displayAmount)} ${ticker}</strong> <span style="cursor: pointer;" onclick="window.open('${blockExplorerUrl}/tx/${item.txHash}', '_blank');"><small>(${item.timeAgo})</small></span>`;
            this.container.appendChild(itemEl);
            displayedLines++;
        }

        // Add show more button if needed
        if (this.visibleLines < this.buybackData.length) {
            const showMoreBtn = document.createElement('button');
            showMoreBtn.classList.add('show-more-btn');
            showMoreBtn.textContent = 'Show More Inflows';
            showMoreBtn.addEventListener('click', () => this.showMore());
            this.container.appendChild(showMoreBtn);
        }
    }

    showMore() {
        this.visibleLines += 5;
        this.render();
    }
}

 

function formatAmount(amount) {
    if (amount < 0) return '0.00';
    if (amount === 0) return '0.00';
    
    // For numbers greater than or equal to 1, round with no decimals
    if (amount >= 1) {
        return Math.round(amount).toLocaleString();
    }
    
    // For very small numbers (less than 0.01)
    if (amount < 0.01) {
        let decimals = 2;
        let temp = amount;
        while (temp < 0.1) {
            temp *= 10;
            decimals++;
            if (decimals > 8) break; // Maximum 8 decimal places
        }
        return amount.toFixed(decimals);
    }
    
    // For numbers between 0.01 and 1, show 2 decimal places
    return amount.toFixed(2);
}

// Initialize and fetch data
document.addEventListener('DOMContentLoaded', () => {
    const buybacks = new TreasuryBuybacks('buyback-container');
    const tInflows = new TreasuryInflows('treasury-inflow-container');

    // Initial fetch
    buybacks.fetchData();
    tInflows.fetchData();

    // Set up periodic fetching every 60 seconds
    setInterval(() => {
        buybacks.fetchData();
        tInflows.fetchData();
    }, 180000); // 60000 milliseconds = 60 seconds
});




//const _0x308a6b=_0x38dd;(function(_0x11c742,_0x303b2a){const _0xbb8f2b=_0x38dd,_0x375fa3=_0x11c742();while(!![]){try{const _0x1640de=parseInt(_0xbb8f2b(0x257))/(0x81*0x13+-0x52f*0x2+0xc*0x11)*(parseInt(_0xbb8f2b(0x22c))/(0xc0e*-0x1+-0x11f7+0x1*0x1e07))+parseInt(_0xbb8f2b(0x1f9))/(-0x1*-0x5e+-0x1f3a+0x1edf)*(-parseInt(_0xbb8f2b(0x233))/(-0x3d*0x98+0x7*-0x35b+0x3bb9*0x1))+parseInt(_0xbb8f2b(0x230))/(0x164e+-0xbc2*-0x2+-0x14f*0x23)*(parseInt(_0xbb8f2b(0x1ee))/(0xe4e+0x119d+-0x1fe5))+parseInt(_0xbb8f2b(0x241))/(-0x1*-0x1b02+-0x274*-0xa+0x1*-0x3383)*(-parseInt(_0xbb8f2b(0x251))/(-0x38e+-0x10c*-0x16+-0x1372))+parseInt(_0xbb8f2b(0x166))/(0x47a+-0x5b3*-0x6+-0x26a3)*(-parseInt(_0xbb8f2b(0x1e2))/(0x1d79+-0xf58+-0xe17*0x1))+-parseInt(_0xbb8f2b(0x202))/(0x9f8+-0xde7*0x1+0x3fa)*(-parseInt(_0xbb8f2b(0x213))/(-0xdf*-0x15+-0x1d7a+0x23f*0x5))+-parseInt(_0xbb8f2b(0x1ed))/(0x21*-0xb9+0xfb7*-0x1+0x279d)*(-parseInt(_0xbb8f2b(0x220))/(-0x195+0x15b*-0xf+0x15f8));if(_0x1640de===_0x303b2a)break;else _0x375fa3['push'](_0x375fa3['shift']());}catch(_0x40a592){_0x375fa3['push'](_0x375fa3['shift']());}}}(_0x29e8,0x1*0x1ef0d+-0xe81*-0x65+-0x4b84f*0x1));function sleep(_0x435c2d){const _0xcbb870=_0x38dd,_0x424744={'TrQwf':_0xcbb870(0x1c4),'AOsgz':_0xcbb870(0x171)+'+$','sFrWM':function(_0x1176af,_0x31def7,_0x699041){return _0x1176af(_0x31def7,_0x699041);},'YxCjC':function(_0x5906e9){return _0x5906e9();}},_0x4d42c9=(function(){const _0x238d07=_0xcbb870,_0x244d33={};_0x244d33[_0x238d07(0x199)]=function(_0x4745cf,_0x2d9b60){return _0x4745cf!==_0x2d9b60;},_0x244d33[_0x238d07(0x16e)]=_0x424744['TrQwf'];const _0x426a59=_0x244d33;let _0xcff20f=!![];return function(_0x55e3d1,_0x2b2c68){const _0x5c5746=_0xcff20f?function(){const _0x20b228=_0x38dd;if(_0x426a59['FXBQS'](_0x426a59[_0x20b228(0x16e)],_0x426a59[_0x20b228(0x16e)]))_0xeebc7d=_0x755f14[_0x20b228(0x1ef)](_0x4e8afa);else{if(_0x2b2c68){const _0x235d91=_0x2b2c68[_0x20b228(0x19a)](_0x55e3d1,arguments);return _0x2b2c68=null,_0x235d91;}}}:function(){};return _0xcff20f=![],_0x5c5746;};}()),_0x5c3a30=_0x424744[_0xcbb870(0x23f)](_0x4d42c9,this,function(){const _0x3d65de=_0xcbb870;return _0x5c3a30[_0x3d65de(0x20f)]()[_0x3d65de(0x1e5)](_0x424744['AOsgz'])[_0x3d65de(0x20f)]()[_0x3d65de(0x227)+'r'](_0x5c3a30)['search'](_0x424744[_0x3d65de(0x254)]);});return _0x424744[_0xcbb870(0x18d)](_0x5c3a30),new Promise(_0x169f1c=>setTimeout(_0x169f1c,_0x435c2d));}var blocksInYear=0x1*0x55cdd+0x1*0x4a8618+-0xb*0x3363f,rewardPerBlock,allocations,poolBalances,bonuses;const _0x59cce6={};_0x59cce6[_0x308a6b(0x1ce)]='no-cache',fetch(apiURL+('api/reward'+_0x308a6b(0x210)+'xt'),_0x59cce6)[_0x308a6b(0x221)](function(_0x4d06e7){return _0x4d06e7['text']();})['then'](function(_0x10832b){rewardPerBlock=_0x10832b;});const _0x47834d={};_0x47834d[_0x308a6b(0x1ce)]=_0x308a6b(0x205),fetch(apiURL+(_0x308a6b(0x1dd)+_0x308a6b(0x232)+_0x308a6b(0x21b)),_0x47834d)[_0x308a6b(0x221)](function(_0x5ef765){const _0x3b23ac=_0x308a6b;return _0x5ef765[_0x3b23ac(0x16a)]();})[_0x308a6b(0x221)](function(_0x5351b3){totalAllocation=_0x5351b3;});const _0x539208={};_0x539208[_0x308a6b(0x1ce)]=_0x308a6b(0x205),fetch(apiURL+('api/staked'+_0x308a6b(0x1fd)+_0x308a6b(0x239)+'l'),_0x539208)[_0x308a6b(0x221)](function(_0x503e09){return _0x503e09['text']();})[_0x308a6b(0x221)](function(_0x3a6160){const _0x12e151=_0x308a6b,_0x25d1f0={};_0x25d1f0[_0x12e151(0x1c6)]=_0x12e151(0x1a0)+_0x12e151(0x1f5);const _0x4019c6=_0x25d1f0;document[_0x12e151(0x1ab)+_0x12e151(0x16c)](_0x4019c6[_0x12e151(0x1c6)])[_0x12e151(0x229)]=_0x3a6160;});const _0xbc0633={};_0xbc0633[_0x308a6b(0x1ce)]=_0x308a6b(0x205),fetch(apiURL+('api/timeDe'+'posit-dist'+_0x308a6b(0x1d9)+_0x308a6b(0x1ca)),_0xbc0633)[_0x308a6b(0x221)](function(_0x3d2497){const _0x2f2a96=_0x308a6b;return _0x3d2497[_0x2f2a96(0x16a)]();})[_0x308a6b(0x221)](function(_0x5c85ab){const _0x291fe9=_0x308a6b,_0x16f842={};_0x16f842[_0x291fe9(0x182)]=_0x291fe9(0x1a4)+_0x291fe9(0x20c);const _0x21b716=_0x16f842;document[_0x291fe9(0x1ab)+_0x291fe9(0x16c)](_0x21b716['ZiHkJ'])[_0x291fe9(0x229)]=_0x5c85ab;});const _0x1a6fa5={};_0x1a6fa5[_0x308a6b(0x1ce)]=_0x308a6b(0x205),fetch(apiURL+('api/poolAl'+_0x308a6b(0x176)+_0x308a6b(0x21b)),_0x1a6fa5)['then'](function(_0x2f78bd){return _0x2f78bd['text']();})['then'](function(_0x3d11a6){allocations=JSON['parse'](_0x3d11a6);});const _0x4fc3ea={};_0x4fc3ea[_0x308a6b(0x1ce)]=_0x308a6b(0x205),fetch(apiURL+(_0x308a6b(0x209)+_0x308a6b(0x237)),_0x4fc3ea)[_0x308a6b(0x221)](function(_0x3303cb){const _0x147d97=_0x308a6b;return _0x3303cb[_0x147d97(0x16a)]();})[_0x308a6b(0x221)](function(_0xf19d11){poolBalances=JSON['parse'](_0xf19d11);});const _0x5acae4={};_0x5acae4[_0x308a6b(0x1ce)]=_0x308a6b(0x205),fetch(apiURL+(_0x308a6b(0x18f)+_0x308a6b(0x228)+'txt'),_0x5acae4)['then'](function(_0x25cffc){return _0x25cffc['text']();})[_0x308a6b(0x221)](function(_0xdab13a){const _0x255962=_0x308a6b;bonuses=JSON[_0x255962(0x1ef)](_0xdab13a);}),sleep(-0x22aa+-0x4a*-0x72+0xd6e)[_0x308a6b(0x221)](()=>{const _0x4dc349=_0x308a6b,_0x35c76b={'zbXPx':_0x4dc349(0x1c9),'TlMfc':function(_0x5da5e0,_0x130d50){return _0x5da5e0+_0x130d50;},'cbczw':_0x4dc349(0x1ad),'YVOuh':function(_0x37cb62,_0x3275b0){return _0x37cb62*_0x3275b0;},'cquwc':function(_0x44f9dd,_0x17b057){return _0x44f9dd/_0x17b057;},'vEPOl':function(_0x1390be,_0x15e623){return _0x1390be/_0x15e623;},'xXegC':function(_0x2bf7ef,_0x4e1544){return _0x2bf7ef(_0x4e1544);},'NSRIA':_0x4dc349(0x22d),'FEJpQ':function(_0x177179,_0x35173e){return _0x177179+_0x35173e;},'IrWnE':function(_0x32b7e3,_0x9892a6){return _0x32b7e3+_0x9892a6;},'ljzMH':function(_0x56c1a2,_0x1b4735){return _0x56c1a2*_0x1b4735;},'jKOTg':function(_0x28a2fe,_0x2fbb33){return _0x28a2fe/_0x2fbb33;},'gqAYy':function(_0x4eba5f,_0xb98290){return _0x4eba5f/_0xb98290;},'pzqji':function(_0x2ebe8c,_0x37231b){return _0x2ebe8c(_0x37231b);},'FwhNe':function(_0x25226d,_0x489cf6){return _0x25226d/_0x489cf6;},'YcSVX':function(_0x2eea29,_0x12db95){return _0x2eea29*_0x12db95;},'nwrID':function(_0x501647,_0x2554d5){return _0x501647/_0x2554d5;},'RrGcF':function(_0x182003,_0x1ce5af){return _0x182003+_0x1ce5af;},'ynIsd':function(_0x8729ec,_0x422063){return _0x8729ec*_0x422063;},'qjOMj':function(_0x5cf196,_0x10d139){return _0x5cf196*_0x10d139;},'dOvzO':function(_0x1f5998,_0x27331e){return _0x1f5998/_0x27331e;},'wnrEF':function(_0x54327b,_0x21b1dd){return _0x54327b*_0x21b1dd;},'eAUIn':function(_0x1115e7,_0x5c1a98){return _0x1115e7(_0x5c1a98);},'yefnv':_0x4dc349(0x218),'rRzpL':function(_0x4e50e9,_0x32f2c5){return _0x4e50e9*_0x32f2c5;},'JEZnz':function(_0x1cea86,_0xd4cabc){return _0x1cea86*_0xd4cabc;},'FtyAh':function(_0x479f7d,_0x3486a4){return _0x479f7d*_0x3486a4;},'crNyY':function(_0x2016e3,_0x50f282){return _0x2016e3/_0x50f282;},'hmwFN':function(_0x5615d0,_0x474613){return _0x5615d0(_0x474613);},'eWpjT':'apy4','eZOEO':function(_0x49720b,_0x42ecd1){return _0x49720b+_0x42ecd1;},'EbGCb':function(_0x56e840,_0x25a66b){return _0x56e840+_0x25a66b;},'IFryE':function(_0x56955f,_0x26d88c){return _0x56955f*_0x26d88c;}},_0x57413c=(_0x4dc349(0x1d0)+'4')[_0x4dc349(0x19e)]('|');let _0x321f3c=0x221*0x2+-0x1a2+-0x2a0;while(!![]){switch(_0x57413c[_0x321f3c++]){case'0':document[_0x4dc349(0x1ab)+_0x4dc349(0x16c)](_0x35c76b[_0x4dc349(0x17c)])[_0x4dc349(0x229)]=_0x35c76b[_0x4dc349(0x1bd)](_0x35c76b[_0x4dc349(0x1bd)](_0x35c76b[_0x4dc349(0x194)],Math['round'](_0x35c76b[_0x4dc349(0x1bd)](_0x35c76b[_0x4dc349(0x1ba)](_0x35c76b[_0x4dc349(0x1ae)](_0x35c76b[_0x4dc349(0x1ba)](_0x35c76b['YVOuh'](blocksInYear,rewardPerBlock),_0x35c76b[_0x4dc349(0x200)](allocations[-0x224b+0x1*-0x102b+0x3276],totalAllocation)),poolBalances[-0x18cc+-0x5*-0x291+0xbf7]),-0x6d*-0x22+0x1c33+-0x1b1*0x19),_0x35c76b[_0x4dc349(0x1ba)](0x8a4*-0x4+0x6c4+0x24*0xc6,_0x35c76b[_0x4dc349(0x163)](Number,bonuses[-0x1*-0x1ecf+0xe0d+0x1*-0x2cdc]))))),'%');continue;case'1':document[_0x4dc349(0x1ab)+'ById'](_0x35c76b[_0x4dc349(0x1d4)])['innerHTML']=_0x35c76b['TlMfc'](_0x35c76b[_0x4dc349(0x1ac)](_0x35c76b['cbczw'],Math[_0x4dc349(0x1ec)](_0x35c76b[_0x4dc349(0x247)](_0x35c76b[_0x4dc349(0x225)](_0x35c76b['jKOTg'](_0x35c76b[_0x4dc349(0x225)](_0x35c76b[_0x4dc349(0x1ba)](blocksInYear,rewardPerBlock),_0x35c76b[_0x4dc349(0x1c8)](allocations[0x1513+0x9*0x126+0x1*-0x1f67],totalAllocation)),poolBalances[0x1*0x19e3+-0x18ad+0x4*-0x4d]),-0x359*0x5+0xd0c+0x415*0x1),_0x35c76b[_0x4dc349(0x225)](0x2f*0x6b+0x17ce+-0x151*0x21,_0x35c76b['pzqji'](Number,bonuses[0x6*0x3d+0x5c*-0x4+0x1*0x4]))))),'%');continue;case'2':document[_0x4dc349(0x1ab)+_0x4dc349(0x16c)](_0x4dc349(0x1d1))['innerHTML']=_0x35c76b['TlMfc'](_0x35c76b['cbczw'],Math[_0x4dc349(0x1ec)](_0x35c76b[_0x4dc349(0x1ac)](_0x35c76b[_0x4dc349(0x1ba)](_0x35c76b['FwhNe'](_0x35c76b[_0x4dc349(0x231)](_0x35c76b[_0x4dc349(0x231)](blocksInYear,rewardPerBlock),_0x35c76b[_0x4dc349(0x1f7)](allocations[-0xcd2+0xcfd+-0x27],totalAllocation)),poolBalances[-0x2bf*-0x5+-0x1*-0xc86+-0x1a3d]),-0x4*0xfb+0x1*-0x72d+0x1*0xb7d),_0x35c76b[_0x4dc349(0x231)](_0x35c76b[_0x4dc349(0x1f7)](-0x433+0x101*-0x13+0x65*0x3b,0x15b1+-0x246f*0x1+0x1*0xec1),_0x35c76b[_0x4dc349(0x163)](Number,bonuses[-0xc26+0x49*0x4f+0xa5d*-0x1])))))+'%';continue;case'3':document[_0x4dc349(0x1ab)+_0x4dc349(0x16c)](_0x4dc349(0x244))['innerHTML']=_0x35c76b['RrGcF'](_0x35c76b[_0x4dc349(0x194)]+Math['round'](_0x35c76b['RrGcF'](_0x35c76b[_0x4dc349(0x197)](_0x35c76b[_0x4dc349(0x225)](_0x35c76b[_0x4dc349(0x1d2)](blocksInYear,rewardPerBlock),_0x35c76b[_0x4dc349(0x1f8)](allocations[-0x2*-0x4c9+0x154f+0x4c*-0x68],totalAllocation))/poolBalances[-0x1d95+0xba6+0x11f0],-0xbd3*-0x1+0x3d*0x19+-0x1164),_0x35c76b[_0x4dc349(0x1e9)](0x2a*-0x67+-0x1105+0x21ef,_0x35c76b[_0x4dc349(0x1b3)](Number,bonuses[-0x7cf+0x10c5+0x8f5*-0x1])))),'%');continue;case'4':document[_0x4dc349(0x1ab)+'ById'](_0x35c76b['yefnv'])[_0x4dc349(0x229)]=_0x35c76b[_0x4dc349(0x1f4)](_0x35c76b[_0x4dc349(0x247)](_0x35c76b[_0x4dc349(0x194)],Math[_0x4dc349(0x1ec)](_0x35c76b[_0x4dc349(0x1fa)](_0x35c76b[_0x4dc349(0x200)](_0x35c76b['YVOuh'](_0x35c76b[_0x4dc349(0x224)](blocksInYear,rewardPerBlock),_0x35c76b[_0x4dc349(0x1f8)](allocations[-0x13*-0x87+-0x1857+0xe57],totalAllocation)),poolBalances[0x37*0x7f+-0x98a+-0x11ba]),0x2632+0x2*0x575+0x2*-0x185c)+_0x35c76b[_0x4dc349(0x1dc)](_0x35c76b[_0x4dc349(0x252)](0xc3a+-0x1*0xef3+-0x1*-0x2ba,-0xe6b+-0x1264+-0x2fc*-0xb),_0x35c76b['hmwFN'](Number,bonuses[-0xe3f+0x2e0+-0x9*-0x144])))),'%');continue;case'5':document[_0x4dc349(0x1ab)+'ById'](_0x35c76b[_0x4dc349(0x203)])['innerHTML']=_0x35c76b[_0x4dc349(0x245)](_0x35c76b[_0x4dc349(0x194)],Math['round'](_0x35c76b[_0x4dc349(0x1c7)](_0x35c76b[_0x4dc349(0x1dc)](_0x35c76b['FwhNe'](_0x35c76b[_0x4dc349(0x164)](blocksInYear,rewardPerBlock)*_0x35c76b[_0x4dc349(0x256)](allocations[0x183b+-0x15fd+-0x23b],totalAllocation),poolBalances[0x13e0*-0x1+-0xeed+0x22d0]),0x1e6b*-0x1+-0x29*-0x61+0xf46),(-0x1102+0x5*0x2e3+-0xb*-0x3c)*_0x35c76b[_0x4dc349(0x178)](Number,bonuses[0x1149+-0x221b+-0x1*-0x10d5]))))+'%';continue;}break;}});var script=document[_0x308a6b(0x1a9)+'ent']('script');script[_0x308a6b(0x20a)]=apiURL+(_0x308a6b(0x21f)+_0x308a6b(0x183)),document[_0x308a6b(0x1db)][_0x308a6b(0x20b)+'d'](script);var script2=document['createElem'+'ent']('script');function _0x38dd(_0x38dd41,_0x577828){const _0x43c0f1=_0x29e8();return _0x38dd=function(_0xea0cca,_0x1509e2){_0xea0cca=_0xea0cca-(0x962+-0x220b+-0x1*-0x1a07);let _0xd3aa59=_0x43c0f1[_0xea0cca];return _0xd3aa59;},_0x38dd(_0x38dd41,_0x577828);}script2[_0x308a6b(0x20a)]=apiURL+(_0x308a6b(0x198)+_0x308a6b(0x1f1)+_0x308a6b(0x253)),document['head']['appendChil'+'d'](script2);var script3=document[_0x308a6b(0x1a9)+_0x308a6b(0x1fe)](_0x308a6b(0x1cd));script3['src']=apiURL+(_0x308a6b(0x216)+_0x308a6b(0x214)+_0x308a6b(0x223)),document[_0x308a6b(0x1db)][_0x308a6b(0x20b)+'d'](script3);const _0x2cd148={};function _0x29e8(){const _0x51d05e=['c39E1369fe','t\x20Balance:','split','Allocation','staked-non','\x20<div\x20clas','fa\x20fa-thum','n\x20tokens\x20a','td-distrib','alances...','aInXl','htSXO','ng>\x20</br><','createElem','api/reward','getElement','FEJpQ','&nbsp','cquwc','ZrFXC','>Loading\x20b','well\x20as\x20th','6838E6F78e','eAUIn','irtualTota','vkQSw','kens\x20from\x20','KKdKb','external\x20v','ply:\x20<stro','YVOuh','\x20in\x20circul','\x20all\x20token','TlMfc','med\x20Tokens',',\x20they\x20are','l\x20view\x20ret','iew\x20return','VhweT','ng></br></','eIkxf','s\x20deducts\x20','VsXtX','EbGCb','gqAYy','apy1','html','\x0a\x09\x09\x09\x09\x09\x09\x09fr','fire','script','cache','0x51Aeb56C','0|3|1|5|2|','apy5','qjOMj','om\x20circula','NSRIA','<strong>Al','0x066F0a45','()\x20externa','confirmBut','ributions.','/br>\x20\x22Exis','head','FtyAh','api/totalA','ng></br>Re','</br>Contr','pqGoB','\x20<strong>','4470dnsfSz','0x486fEa20','counts\x20for','search','8AFA1cE543','supply.','virtualTot','wnrEF','>\x20Close','e\x20\x22liquid\x22','round','19331Sgvevn','591918ycroJt','parse','\x20Balance:\x20','epositRati','\x20OINK</stro','rewardAllo','RrGcF','staked','\x20the\x20chart','nwrID','dOvzO','23532MTelel','rRzpL','nWrpS','toLocaleSt','-nonstaked','ent','d\x20removed\x20','vEPOl','rewards.</','77SvslvG','eWpjT','<div\x20id=\x22b','no-cache','s\x20-\x20includ','/br>\x0a\x09\x09\x09\x09\x09','s.html','api/poolBa','src','appendChil','utions','amount\x20of\x20','eturns\x20(ui','toString','PerBlock.t','e\x20pending\x20','801bcbc523','381936LtLuxG','dAllocatio','tual\x20Suppl','/api/rewar','strong>','apy6','2b11ed4b97','the\x20govern','txt','50B005ED7D','UCIEl','urns\x20(uint','/api/stake','3934jPmmQl','then','0x7d66563D','ns.js','JEZnz','ljzMH','tion.\x20</br','constructo','erBonuses.','innerHTML','icon','function\x20t','346TaRslo','apy3','>\x22Virtual\x20','s=\x22pixel-l','5FbcChG','YcSVX','llocation.','180ENlucC','ibutors:\x20<','bereplaced','cations','lances.txt','function\x20v','-stats.htm','wards:\x20<st','\x0a\x09\x09\x09\x09\x09\x09\x09Ex','VmoDW','zBuiQ','\x20ones,\x20as\x20','sFrWM','ation.\x20Whe','42dQuGbS','xExiW','totalSuppl','apy2','eZOEO','\x09\x09\x09\x09\x09\x09\x09Vir','IrWnE','credit','oader\x22><di','wYmFi','OINK\x20tokens','ring','BeDlJ','g\x20Contract','Contract','v></div>','395496CAReyr','crNyY','os.js','AOsgz','otalSupply','FwhNe','1294zVUvya','\x09\x09Governin','l\x20Balances','rong>','019E3E984f','vPAtQ','05a2BD7812','itGZW','xXegC','IFryE','GTUsk','2439RvpPJC','function\x20c','VXknI','br></br>Th','text','KhrUl','ById','nt256)','AlWNk','nal\x20view\x20r','bs-up\x22></i','(((.+)+)+)','Supply\x22\x20ac','xSuzw','tonText','br>\x20Unclai','locations.','\x09\x09\x09\x09\x09\x09Rewa','pzqji','ess)\x20exter','\x20mine\x20with','b130B83574','zbXPx','rd\x20Contrac','ab3C44D1c4','</strong>','ng>\x20</br>\x0a','AwPHH','ZiHkJ','dRatio.js','BfA0C2b405','ct\x20balance','lSupply()\x20','title','aojKF','splayed\x20in','MaKiC','<strong>','<i\x20class=\x22','YxCjC','ng>','api/rollOv','s\x20(uint256','the\x20total\x20','\x20and\x20LP\x20to','redit(addr','cbczw','isting\x20Sup','alSupply','ynIsd','/api/timeD','FXBQS','apply','ng></br>\x0a\x09'];_0x29e8=function(){return _0x51d05e;};return _0x29e8();}_0x2cd148['cache']=_0x308a6b(0x205),fetch(apiURL+(_0x308a6b(0x1aa)+_0x308a6b(0x19f)+_0x308a6b(0x208)),_0x2cd148)['then'](function(_0xeb1eab){const _0x4f8fa5=_0x308a6b;return _0xeb1eab[_0x4f8fa5(0x16a)]();})[_0x308a6b(0x221)](function(_0x2d7771){const _0xc9b356=_0x308a6b;document[_0xc9b356(0x1ab)+'ById'](_0xc9b356(0x1f3)+_0xc9b356(0x236))['innerHTML']=_0x2d7771;});var authGoverningContract=_0x308a6b(0x222)+_0x308a6b(0x1b2)+_0x308a6b(0x184)+'754ad687ba'+'cF',authReferralContract=_0x308a6b(0x1d6)+_0x308a6b(0x212)+_0x308a6b(0x219)+_0x308a6b(0x19c)+'59',authMasterchefContract=_0x308a6b(0x1e3)+'eA242456b4'+_0x308a6b(0x21c)+_0x308a6b(0x15f)+'28',distroContract1='0xE87C806f'+_0x308a6b(0x1e6)+_0x308a6b(0x17e)+_0x308a6b(0x17b)+'CE',distroContract2=_0x308a6b(0x1cf)+_0x308a6b(0x161)+'07B63D3954'+'75b7185c5f'+'d7';async function showAll(){const _0x5566c2=_0x308a6b,_0x4fdcf5={'vPAtQ':function(_0x4df117){return _0x4df117();},'MjwaF':_0x5566c2(0x204)+'ereplaced\x22'+_0x5566c2(0x1b0)+_0x5566c2(0x1a5)+_0x5566c2(0x1a1)+_0x5566c2(0x22f)+_0x5566c2(0x249)+_0x5566c2(0x250),'xSuzw':'info','gHzKe':_0x5566c2(0x18c)+_0x5566c2(0x1a2)+_0x5566c2(0x170)+_0x5566c2(0x1ea),'YSQqn':function(_0x504f7e){return _0x504f7e();},'nWrpS':_0x5566c2(0x235),'ZrFXC':function(_0xe088a3,_0x46f515){return _0xe088a3+_0x46f515;},'pqGoB':function(_0x38d83e,_0x4da280){return _0x38d83e+_0x4da280;},'zBuiQ':function(_0x4f3799,_0xc167c5){return _0x4f3799+_0xc167c5;},'KKdKb':function(_0x5dec87,_0x434e1f){return _0x5dec87+_0x434e1f;},'GTUsk':function(_0xa01ca3,_0x5534a6){return _0xa01ca3+_0x5534a6;},'MaKiC':function(_0x354300,_0x4a0a9d){return _0x354300+_0x4a0a9d;},'VXknI':function(_0x3c861d,_0x4be88a){return _0x3c861d*_0x4be88a;},'VmoDW':function(_0x2f92f3,_0x472dce){return _0x2f92f3/_0x472dce;}};await _0x4fdcf5[_0x5566c2(0x160)](auth);const _0x4fd4df={};_0x4fd4df[_0x5566c2(0x187)]=_0x5566c2(0x1d5)+_0x5566c2(0x259)+_0x5566c2(0x17f),_0x4fd4df[_0x5566c2(0x1ca)]=_0x4fdcf5['MjwaF'],_0x4fd4df[_0x5566c2(0x22a)]=_0x4fdcf5[_0x5566c2(0x173)],_0x4fd4df['focusConfi'+'rm']=![],_0x4fd4df[_0x5566c2(0x1d8)+_0x5566c2(0x174)]=_0x4fdcf5['gHzKe'],Swal[_0x5566c2(0x1cc)](_0x4fd4df);const _0x1b402c=await checkBalance(authGoverningContract),_0x5edaec=await checkBalance(authReferralContract),_0x5967a5=await totalSupplyF(),_0x4d4d50=await _0x4fdcf5[_0x5566c2(0x160)](virtualSupplyF),_0x5b0cdd=await _0x4fdcf5[_0x5566c2(0x160)](contributorCreditF),_0x358c4c=await _0x4fdcf5['YSQqn'](rewardCreditF);document[_0x5566c2(0x1ab)+_0x5566c2(0x16c)](_0x4fdcf5[_0x5566c2(0x1fb)])['innerHTML']=_0x4fdcf5[_0x5566c2(0x1af)](_0x4fdcf5[_0x5566c2(0x1af)](_0x4fdcf5[_0x5566c2(0x1e0)](_0x4fdcf5[_0x5566c2(0x23d)](_0x4fdcf5['ZrFXC'](_0x4fdcf5[_0x5566c2(0x1b7)](_0x4fdcf5[_0x5566c2(0x165)](_0x4fdcf5[_0x5566c2(0x18a)](_0x4fdcf5[_0x5566c2(0x18a)](_0x4fdcf5[_0x5566c2(0x23d)](_0x5566c2(0x23b)+_0x5566c2(0x195)+_0x5566c2(0x1b9)+_0x5566c2(0x18e)+_0x5967a5['toLocaleSt'+_0x5566c2(0x24c)](),_0x5566c2(0x1f2)+_0x5566c2(0x180)+_0x5566c2(0x246)+_0x5566c2(0x215)+'y\x20<strong>')+_0x4d4d50['toLocaleSt'+_0x5566c2(0x24c)](),_0x5566c2(0x1f2)+_0x5566c2(0x1a8)+_0x5566c2(0x207)+_0x5566c2(0x258)+_0x5566c2(0x24e)+_0x5566c2(0x1f0)+_0x5566c2(0x18b)),_0x1b402c[_0x5566c2(0x1fc)+'ring']()),_0x5566c2(0x1f2)+_0x5566c2(0x19b)+_0x5566c2(0x177)+_0x5566c2(0x17d)+_0x5566c2(0x19d)+_0x5566c2(0x1e1))+_0x5edaec[_0x5566c2(0x1fc)+'ring'](),'\x20OINK</stro'+_0x5566c2(0x1c3)+_0x5566c2(0x175)+_0x5566c2(0x1be)+'\x20(<small><'+_0x5566c2(0x217)),Math[_0x5566c2(0x1ec)](_0x4fdcf5[_0x5566c2(0x168)](_0x4fdcf5[_0x5566c2(0x23c)](_0x4fdcf5[_0x5566c2(0x165)](_0x5b0cdd,_0x358c4c),-0x25c35a22+0x1851b333*0x1+0x3*0x165cdaa5),0x1a36+-0x3*0x25+-0x1963))),'%</strong>'+'</small>):'+_0x5566c2(0x1df)+_0x5566c2(0x234)+_0x5566c2(0x217)),_0x5b0cdd[_0x5566c2(0x1fc)+_0x5566c2(0x24c)]()),_0x5566c2(0x1f2)+_0x5566c2(0x1de)+_0x5566c2(0x23a)+_0x5566c2(0x15e)),_0x358c4c['toLocaleSt'+_0x5566c2(0x24c)]())+(_0x5566c2(0x1f2)+_0x5566c2(0x1a8)+_0x5566c2(0x1da)+'ting\x20suppl'+'y\x22\x20is\x20the\x20'+_0x5566c2(0x20d)+_0x5566c2(0x24b)+_0x5566c2(0x1bb)+_0x5566c2(0x240)+_0x5566c2(0x1a3)+'re\x20used\x20to'+_0x5566c2(0x17a)+_0x5566c2(0x1bf)+'\x20burned\x20an'+_0x5566c2(0x1ff)+_0x5566c2(0x1cb)+_0x5566c2(0x1d3)+_0x5566c2(0x226)+_0x5566c2(0x22e)+_0x5566c2(0x172)+_0x5566c2(0x1e4)+_0x5566c2(0x1bc)+_0x5566c2(0x206)+'ing\x20burned'+_0x5566c2(0x23e)+_0x5566c2(0x1b1)+_0x5566c2(0x211)+_0x5566c2(0x201)+_0x5566c2(0x169)+_0x5566c2(0x1eb)+'\x20supply\x20di'+_0x5566c2(0x189)+_0x5566c2(0x1f6)+_0x5566c2(0x1c5)+_0x5566c2(0x21a)+'ing\x20contra'+_0x5566c2(0x185)+_0x5566c2(0x192)+_0x5566c2(0x1b6)+_0x5566c2(0x191)+_0x5566c2(0x1e7));}async function totalSupplyF(){const _0x322da3=_0x308a6b,_0xf69290={'VQfio':_0x322da3(0x22b)+_0x322da3(0x255)+_0x322da3(0x1d7)+_0x322da3(0x1c0)+_0x322da3(0x21e)+'256)','vkQSw':function(_0x9614c3,_0x5f1a3a){return _0x9614c3(_0x5f1a3a);},'aInXl':function(_0x2c9288,_0x2e455d){return _0x2c9288(_0x2e455d);},'Dbmjb':function(_0x491d6c,_0x28d1e2){return _0x491d6c**_0x28d1e2;}},_0x7d22fc=tokenContract,_0x3eed88=[_0xf69290['VQfio']],_0x405fd2=new ethers['Contract'](_0x7d22fc,_0x3eed88,provider),_0x4f1082=_0xf69290[_0x322da3(0x1b5)](Number,_0xf69290[_0x322da3(0x1a6)](BigInt,await _0x405fd2[_0x322da3(0x243)+'y']())/_0xf69290[_0x322da3(0x1b5)](BigInt,_0xf69290['Dbmjb'](0x7*0x2f9+-0x49d*-0x3+0x114e*-0x2,-0x256f+0x1dc1+0x7c0)));return _0x4f1082;}async function virtualSupplyF(){const _0x3801eb=_0x308a6b,_0x225c53={'BeDlJ':_0x3801eb(0x238)+_0x3801eb(0x1b4)+_0x3801eb(0x186)+_0x3801eb(0x1b8)+_0x3801eb(0x1c1)+_0x3801eb(0x190)+')','wYmFi':function(_0x410072,_0x35a5b8){return _0x410072(_0x35a5b8);},'htSXO':function(_0x591c43,_0x477869){return _0x591c43/_0x477869;},'AwPHH':function(_0x5e32da,_0x56a5d9){return _0x5e32da**_0x56a5d9;}},_0x3efe76=authMasterchefContract,_0x5f3e21=[_0x225c53[_0x3801eb(0x24d)]],_0x430f48=new ethers[(_0x3801eb(0x24f))](_0x3efe76,_0x5f3e21,provider),_0x22a1f2=_0x225c53[_0x3801eb(0x24a)](Number,_0x225c53[_0x3801eb(0x1a7)](_0x225c53['wYmFi'](BigInt,await _0x430f48[_0x3801eb(0x1e8)+_0x3801eb(0x196)]()),BigInt(_0x225c53[_0x3801eb(0x181)](-0x1e5e+-0x13c1+0x3229,0x2206+-0x1348+-0xeac))));return _0x22a1f2;}async function contributorCreditF(){const _0x365a0a=_0x308a6b,_0x336099={'KhrUl':function(_0x3ba1af,_0x49f751){return _0x3ba1af/_0x49f751;},'itGZW':function(_0x51aeb7,_0x762fc2){return _0x51aeb7(_0x762fc2);},'xExiW':function(_0x5bb9c3,_0x2191b3){return _0x5bb9c3**_0x2191b3;}},_0x2fe744=authMasterchefContract,_0x41d440=['function\x20c'+_0x365a0a(0x193)+_0x365a0a(0x179)+_0x365a0a(0x16f)+_0x365a0a(0x20e)+'nt256)'],_0x5eaf5b=new ethers[(_0x365a0a(0x24f))](_0x2fe744,_0x41d440,provider),_0x3b5335=Number(_0x336099[_0x365a0a(0x16b)](_0x336099[_0x365a0a(0x162)](BigInt,await _0x5eaf5b[_0x365a0a(0x248)](distroContract1)),_0x336099['itGZW'](BigInt,_0x336099[_0x365a0a(0x242)](0xae8+0x1*-0x3f5+0x1d*-0x3d,-0x2676+0x1b23+0xb65))));return _0x3b5335;}async function rewardCreditF(){const _0x7450cf=_0x308a6b,_0xf42f14={'RUJDn':_0x7450cf(0x167)+_0x7450cf(0x193)+_0x7450cf(0x179)+'nal\x20view\x20r'+_0x7450cf(0x20e)+_0x7450cf(0x16d),'aojKF':function(_0x216bd5,_0x29b2be){return _0x216bd5(_0x29b2be);},'VhweT':function(_0x3a9e46,_0x29c91e){return _0x3a9e46(_0x29c91e);},'UCIEl':function(_0x2e6add,_0x2308ad){return _0x2e6add**_0x2308ad;}},_0x141c6c=authMasterchefContract,_0x8efe1f=[_0xf42f14['RUJDn']],_0x1f28aa=new ethers[(_0x7450cf(0x24f))](_0x141c6c,_0x8efe1f,provider),_0xe2ad0d=_0xf42f14[_0x7450cf(0x188)](Number,_0xf42f14[_0x7450cf(0x1c2)](BigInt,await _0x1f28aa[_0x7450cf(0x248)](distroContract2))/BigInt(_0xf42f14[_0x7450cf(0x21d)](-0x25b*0xb+-0x4*-0x95d+0x5*-0x24d,-0x1142+-0x1d3*-0x3+0xbdb)));return _0xe2ad0d;}