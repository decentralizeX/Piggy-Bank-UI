//simply replace API url and use the governance panel on your local device
var isTestnet = false
var apiURL = "https://pulsedao.org/"; //for proposals, votes.
var rpcLink = "https://rpc-pulsechain.g4mm4.io"
var provider = new ethers.providers.Web3Provider(window.ethereum, "any");