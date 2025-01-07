
  		ABIerc20 = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

		vaultABI = [{"inputs":[{"internalType":"contract IERC20","name":"_stakeToken","type":"address"},{"internalType":"contract IERC20","name":"_dummyToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_poolId","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectedFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositFee","type":"uint256"},{"indexed":false,"internalType":"address","name":"referral","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"harvester","type":"address"},{"indexed":true,"internalType":"address","name":"benficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"address","name":"harvestInto","type":"address"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"callFee","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"harvestInto","type":"address"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"SelfHarvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"poolAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeToPay","type":"uint256"}],"name":"UserSettingUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"accOINKPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingOINKRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_beneficiary","type":"address[]"},{"internalType":"uint256[][]","name":"_stakeID","type":"uint256[][]"}],"name":"collectCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_beneficiary","type":"address[]"}],"name":"collectCommissionAuto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defaultDirectPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"referral","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dummyToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fundingRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNrOfStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFundingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"multiCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolPayout","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refShare1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refShare2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_stakeID","type":"uint256[]"},{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"selfHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fundingRate","type":"uint256"}],"name":"setFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_minServe","type":"uint256"}],"name":"setPoolPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_refShare1","type":"uint256"}],"name":"setRefShare1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_refShare2","type":"uint256"}],"name":"setRefShare2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTreasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"}],"name":"stopEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_defaultDirectHarvest","type":"uint256"}],"name":"updateSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"debt","type":"uint256"},{"internalType":"uint256","name":"feesPaid","type":"uint256"},{"internalType":"address","name":"referredBy","type":"address"},{"internalType":"uint256","name":"lastAction","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"viewStakeEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"viewUserTotalEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"virtualAccOINKPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawDummy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]

		PLSvaultABI = [{"inputs":[{"internalType":"contract IERC20","name":"_dummyToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"address","name":"_buybackContract","type":"address"},{"internalType":"uint256","name":"_poolID","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectedFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositFee","type":"uint256"},{"indexed":false,"internalType":"address","name":"referral","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"harvester","type":"address"},{"indexed":true,"internalType":"address","name":"benficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"address","name":"harvestInto","type":"address"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"callFee","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"harvestInto","type":"address"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"SelfHarvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"poolAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeToPay","type":"uint256"}],"name":"UserSettingUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"Withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"accOINKPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingOINKRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_beneficiary","type":"address[]"},{"internalType":"uint256[][]","name":"_stakeID","type":"uint256[][]"}],"name":"collectCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_beneficiary","type":"address[]"}],"name":"collectCommissionAuto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defaultDirectPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"referral","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dummyToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fundingRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNrOfStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFundingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"multiCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolPayout","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refShare1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refShare2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_stakeID","type":"uint256[]"},{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"selfHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fundingRate","type":"uint256"}],"name":"setFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_minServe","type":"uint256"}],"name":"setPoolPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_refShare1","type":"uint256"}],"name":"setRefShare1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_refShare2","type":"uint256"}],"name":"setRefShare2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTreasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"}],"name":"stopEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_defaultDirectHarvest","type":"uint256"}],"name":"updateSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"debt","type":"uint256"},{"internalType":"uint256","name":"feesPaid","type":"uint256"},{"internalType":"address","name":"referredBy","type":"address"},{"internalType":"uint256","name":"lastAction","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"viewStakeEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"viewUserTotalEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"virtualAccOINKPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawDummy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

		hexStakeAbi = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debt","type":"uint256"},{"indexed":true,"internalType":"address","name":"referredBy","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"harvestInto","type":"address"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"accDtxPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingDTXRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultDirectPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hexC","outputs":[{"internalType":"contract ILookup","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"massRecalculate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"multiCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolPayout","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"recalculate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referredBy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"safePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"selfHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxStakes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_minServe","type":"uint256"}],"name":"setPoolPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSafePeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referral","type":"address"}],"name":"stakeHexShares","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTshares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_defaultDirectHarvest","type":"uint256"}],"name":"updateSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"debt","type":"uint256"},{"internalType":"uint256","name":"lastAction","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"viewPoolMinServe","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"viewPoolPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"viewStakeEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"virtualAccDtxPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var tokenTicker = "OINK" 
var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"


var PLSVault = "0xE145932f6b010B0166aA6860D56b2730744B7d6f";
var PLSXVault = "0x16233F6d7398f134EbCec11101e792c03ED296a4";
var INCVault = "0x852443CB5b5f5B10e514CA74104bBF2Cd6CeF868";
var hexVault = "0x164D4C1fDd74A5b7256Fd9Eca958c9ff70617c03";
var hexShareVault = "0x6b465C480CD590852f90c8f1b41Ab22922a1BF85";
var HOAVault = "0x9E70665aDee807f262Ae59Dc1f8D4Dd878320C21"

var atropaVault = "0x7c61919AccF037975bbD3a91b0F5811c640018b1"
var pdaiVault = "0xc13b8974CD5caa67D7e539D2654C872b5AcA5105"
var solidxVault = "0x2057dd1687eafCD809386a41012748AC509df542"


var blocksPerDay = 8000

var rewardPerBlock
var totalAllocation
var hexShareAllocation
var hexAllocation
var plsAllocation
var plsxAllocation
var incAllocation
var hoaAllocation
var atropaAllocation
var pdaiAllocation
var solidxAllocation



async function loadData() {

    await fetch(apiURL + 'api/rewardPerBlock.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        rewardPerBlock = Number(html)
    })


    await fetch(apiURL + 'api/poolAllocations.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        let x = JSON.parse(html)

        hexAllocation = x[9]
        plsAllocation = x[6]
        plsxAllocation = x[7]
        incAllocation = x[8]
        hexShareAllocation = x[10]
		hoaAllocation = x[11]
		atropaAllocation = x[13]
		pdaiAllocation = x[14]
		solidxAllocation = x[15]
    })

    await fetch(apiURL + 'api/totalAllocation.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        totalAllocation = Number(html)
    })



}

showStakes();

var account

async function showStakes() {
	await loadData();
    try {
        await auth();
    } catch (e) {
        return showStakes();
    }


    var noStakes = true;

    let accounts = await provider.send("eth_requestAccounts", []);
    account = accounts[0];



	


    let PLSstakes = await checkNrOfStakes(account, PLSVault)
    if (PLSstakes > 0) {
        noStakes = false
        let userShares = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
		let totalStaked
        for (let i = 0; i < PLSstakes; i++) {
            stakeDetails = await userInfore(PLSVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10**18)
            totalStaked = Number(BigInt(stakeDetails[2])) / (10**18)

            interestEarned = stakeDetails[3]
            interestEarned = Number(BigInt(interestEarned) / BigInt(10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalStaked * (rewardPerBlock * blocksPerDay * (plsAllocation / totalAllocation)))

            //display CARD

            let displayHtml = `
	     <div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                        <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
                            <h3>Pulsechain</h3>
                            <p>Mining with PLS</p>
                            <img src="https://ipfs.io/ipfs/QmYqkn8pJUaV9KcEPYEvRPwgbfeozLEvcQ9aEwKNRUL3cR" style="max-width: 64px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">PLS Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (PLS)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('PLS', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('PLS', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }


 let PLSXStakes = await checkNrOfStakes(account, PLSXVault)
    if (PLSXStakes > 0) {
        noStakes = false
        let totalStaked = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
        for (let i = 0; i < PLSXStakes; i++) {
            stakeDetails = await userInfore(PLSXVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10**18)
            totalStaked = Number(BigInt(stakeDetails[2])) / (10**18)

            interestEarned = stakeDetails[3]
            interestEarned = Number(BigInt(interestEarned) / BigInt(10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalStaked * (rewardPerBlock * blocksPerDay * (plsxAllocation / totalAllocation)))
		
            //display CARD
            let displayHtml = `
	 			     <div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                        <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
                            <h3>PulseX</h3>
                            <p>Mining with PLSX</p>
                            <img src="img/plsx2.png" style="max-width: 64px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">PLSX Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (PLSX)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('PLSX', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('PLSX', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }



 let HexShareStakes = await checkHexStakedShares(account)
 
    if (HexShareStakes != BigInt(0)) {
        noStakes = false
        let data = await multiCall(account)
        let sharesStaked = ((Number(BigInt(data[0])) / (10 ** 8)));
		console.log(((Number(BigInt(data[0])) / (10 ** 8)) / 10000))
		console.log(((Number(BigInt(data[0])) / (10 ** 8)) / 10000).toLocaleString())
		console.log(BigInt(data[0]))
		console.log(Number(BigInt(data[0])) / 10**8)
        let interestEarned = data[2];
        interestEarned = Math.round(Number(BigInt(interestEarned)) / (10 ** 18))
        let userShares = Number(BigInt(data[0])) / (10 ** 8)
        let totalShares = Number(BigInt(data[1])) / (10 ** 8)
		let dailyInterest = Math.round(userShares / totalShares * (rewardPerBlock * blocksPerDay * (hexShareAllocation / totalAllocation)))
        let displayHtml = `
			<div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                        <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
              <h3 class="text-success">HEX Double Interest</h3>
                            <p>Mining with Hex T-Shares</p>
                           <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/5015.png" style="max-width: 64px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">Shares Staked:</br>
			 ` + sharesStaked.toLocaleString() + ` (T-share)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('HEXSHARE', 0, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('HEXSHARE', 0, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                              <a class="dropdown-item" href="#" onclick="recalculate('` + account + `');">Recalculate</a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
        document.getElementById("displayStakes").innerHTML += displayHtml;

    }


    let HEXStakes = await checkNrOfStakes(account, hexVault)

    if (HEXStakes > 0) {
        noStakes = false
        let totalShares;
        let userShares = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
        for (let i = 0; i < HEXStakes; i++) {
            stakeDetails = await userInfore(hexVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10 ** 8)
            totalShares = Number(BigInt(stakeDetails[2])) / (10 ** 8)
            interestEarned = Math.round(Number(BigInt(stakeDetails[3])) / (10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalShares * (rewardPerBlock * blocksPerDay * (hexAllocation / totalAllocation)))

            //display CARD
            let displayHtml = `
			<div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                        <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                         <div class="text-center pricing-card-head">
              <h3 class="text-success">HEX</h3>
                            <p>Mining with Hex Tokens</p>
                           <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/5015.png" style="max-width: 64px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">Hex Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (Hex)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('HEX', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('HEX', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>  </div>  </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }
	
	let INCStakes = await checkNrOfStakes(account, INCVault)

    if (INCStakes > 0) {
        noStakes = false
        let userShares = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
		let totalStaked
        for (let i = 0; i < INCStakes; i++) {
            stakeDetails = await userInfore(INCVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10**18)
            totalStaked = Number(BigInt(stakeDetails[2])) / (10**18)

            interestEarned = stakeDetails[3]
            interestEarned = Number(BigInt(interestEarned) / BigInt(10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalStaked * (rewardPerBlock * blocksPerDay * (incAllocation / totalAllocation)))

            //display CARD
            let displayHtml = `
	 			                <div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                       <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
                            <h3>Pulse Reward Token</h3>
                            <p>Mining with Incentive (INC)</p>
                            <img src="img/incentive.png">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">INC Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (INC)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('INC', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('INC', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }
	
	let HOAStakes = await checkNrOfStakes(account, HOAVault)

    if (HOAStakes > 0) {
        noStakes = false
        let userShares = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
		let totalStaked
        for (let i = 0; i < HOAStakes; i++) {
            stakeDetails = await userInfore(HOAVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10**18)
            totalStaked = Number(BigInt(stakeDetails[2])) / (10**18)

            interestEarned = stakeDetails[3]
            interestEarned = Number(BigInt(interestEarned) / BigInt(10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalStaked * (rewardPerBlock * blocksPerDay * (hoaAllocation / totalAllocation)))

            //display CARD
            let displayHtml = `
	 			                <div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                       <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
                            <h3>Hex Orange Address</h3>
                            <p>Mining with HOA</p>
                            <img src="img/hoa.png" style="max-width:175px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">HOA Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (HOA)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('HOA', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('HOA', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }
	
	
	let atropaStakes = await checkNrOfStakes(account, atropaVault)

    if (atropaStakes > 0) {
        noStakes = false
        let userShares = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
		let totalStaked
        for (let i = 0; i < atropaStakes; i++) {
            stakeDetails = await userInfore(atropaVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10**18)
            totalStaked = Number(BigInt(stakeDetails[2])) / (10**18)

            interestEarned = stakeDetails[3]
            interestEarned = Number(BigInt(interestEarned) / BigInt(10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalStaked * (rewardPerBlock * blocksPerDay * (atropaAllocation / totalAllocation)))

            //display CARD
            let displayHtml = `
	 			                <div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                       <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
                            <h3>ATROPA</h3>
                            <p>Mining with ATROPA</p>
                            <img src="img/atropa.png" style="max-width:175px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">ATROPA Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (ATROPA)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('ATROPA', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('ATROPA', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }
	
	
	let pdaiStakes = await checkNrOfStakes(account, pdaiVault)

    if (pdaiStakes > 0) {
        noStakes = false
        let userShares = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
		let totalStaked
        for (let i = 0; i < pdaiStakes; i++) {
            stakeDetails = await userInfore(pdaiVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10**18)
            totalStaked = Number(BigInt(stakeDetails[2])) / (10**18)

            interestEarned = stakeDetails[3]
            interestEarned = Number(BigInt(interestEarned) / BigInt(10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalStaked * (rewardPerBlock * blocksPerDay * (pdaiAllocation / totalAllocation)))

            //display CARD
            let displayHtml = `
	 			                <div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                       <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
                            <h3>pDAI</h3>
                            <p>Mining with pDAI</p>
                            <img src="img/pdai.png" style="max-width:175px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">pDAI Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (pDAI)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('PDAI', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('PDAI', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }
	
	
	let solidxStakes = await checkNrOfStakes(account, solidxVault)

    if (solidxStakes > 0) {
        noStakes = false
        let userShares = 0;
        let stakedTokens = 0;
        let stakeDetails;
        let maxHarvest = 0;
        let interestEarned
		let totalStaked
        for (let i = 0; i < solidxStakes; i++) {
            stakeDetails = await userInfore(solidxVault, account, i)
            stakedTokens = Number(BigInt(stakeDetails[0])) / (10**18)
            totalStaked = Number(BigInt(stakeDetails[2])) / (10**18)

            interestEarned = stakeDetails[3]
            interestEarned = Number(BigInt(interestEarned) / BigInt(10 ** 18))

            let dailyInterest = Math.round(stakedTokens / totalStaked * (rewardPerBlock * blocksPerDay * (solidxAllocation / totalAllocation)))

            //display CARD
            let displayHtml = `
	 			                <div class="col-md-6 col-xl-4 grid-margin stretch-card pricing-card">
                       <div class="card border-primary border pricing-card-body block-containing-element" style="padding: 0px;"><div class="block-holder"><div class="block">
                          <div class="text-center pricing-card-head">
                            <h3>SOLIDX</h3>
                            <p>Mining with SOLIDX</p>
                            <img src="img/solidx.png" style="max-width:175px">
                          </div>
              </br></br>
			  <h3 class="font-weight-normal mb-4">Rewards earned:</br>
			 ` + interestEarned.toLocaleString() + ` <img src=\"img/DTX.png\" width=\"23px\" height=\"23px\"> `+tokenTicker+`</h3>
			  <h7 class="font-weight-normal mb-4">Estimated Daily Reward:</br>
			 ` + dailyInterest.toLocaleString() + ` (`+tokenTicker+`)</h7></br>
			 <h9 class="font-weight-normal mb-4">SOLIDX Staked:</br>
			 ` + stakedTokens.toLocaleString() + ` (SOLIDX)</h9></br></br>
                  
                        
						 
						 <div class="dropdown">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="width: 100%">Actions</button>
                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);">
                              <a class="dropdown-item" href="#" onclick="harvest('SOLIDX', ` + i + `, ` + interestEarned + `)"><center>Harvest</center></a>
                              <a class="dropdown-item" href="#" onclick="withdraw('SOLIDX', ` + i + `, ` + interestEarned + `)"><center>Stop Mining (Withdraw)</center></a>
                            </div>                          
                          </div>
                        </div>   </div>
                        </div>
                      </div>
		
		`
            document.getElementById("displayStakes").innerHTML += displayHtml;
        }

    }


    if (noStakes) {
        document.getElementById("displayStakes").className = "";
        document.getElementById("viewAllStakes").style = "display: none;";
        document.getElementById("displayStakes").innerHTML = `
			<div class="alert alert-fill-danger" role="alert">
                    <i class="mdi mdi-alert-circle"></i>
                    You have no active virtual miners (PLS, PLSX, INC, HEX, ATROPA, pDAI, SolidX or T-shares!)
                  </div>
				  <a href="pulse-ecosystem-mining.html"><button type="button" class="btn btn-success btn-fw">Create New Virtual Miner</button></a>
				  `
    } else {
        document.getElementById("viewAllStakes").style = "display: none;";
    }

}


async function harvest(token, id, balance) {
    let vault;
    let vaultABI2;
    if (token == "PLS") {
        vault = PLSVault
        vaultABI2 = PLSvaultABI
    } else if (token == "PLSX") {
        vault = PLSXVault
        vaultABI2 = vaultABI
    } else if (token == "HEX") {
        vault = hexVault
        vaultABI2 = vaultABI
    } else if (token == "HEXSHARE") {
        vault = hexShareVault
        vaultABI2 = hexStakeAbi
    } else if (token == "INC") {
        vault = INCVault
        vaultABI2 = vaultABI
    } else if (token == "HOA") {
        vault = HOAVault
        vaultABI2 = vaultABI
    } else if (token == "ATROPA") {
        vault = atropaVault
        vaultABI2 = vaultABI
    } else if (token == "PDAI") {
        vault = pdaiVault
        vaultABI2 = vaultABI
    } else if (token == "SOLIDX") {
        vault = solidxVault
        vaultABI2 = vaultABI
    }

    let toDisplay = 'Select CD option to harvest rewards into</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">   <option value="'+pool5Year+'">5 Year (Receive 100%)</option><option value="'+pool3Year+'">3 Year (-75% Penalty)</option><option value="'+pool1Year+'">1 Year (-90% Penalty)</option> <option value="'+pool6Month+'">6 Month (-95% Penalty)</option>   <option value="'+pool3Month+'">3 Month (-97% Penalty)</option><option value="'+pool1Month+'">1 Month (-99% Penalty)</option>  <option value="' + account + '">Into Wallet (-99.5% Penalty)</option> </select></br><strong>Harvest Rewards</strong>:</br>5 Year: ' + (Math.round(balance)).toLocaleString() + ' '+tokenTicker+'(100%)</br> 3 Year: ' + (Math.round(balance * 0.25)).toLocaleString() + ' '+tokenTicker+'(-75%)</br>1 Year: ' + (Math.round(balance * 0.1)).toLocaleString() + ' '+tokenTicker+'(-90%)</br> 6 Month: ' + (Math.round(balance * 0.05)).toLocaleString() + ' '+tokenTicker+'(-95%)</br> 3 Month: ' + (Math.round(balance * 0.03)).toLocaleString() + ' '+tokenTicker+'(-97%)</br> 1 Month: ' + (Math.round(balance * 0.01)).toLocaleString() + ' '+tokenTicker+'(-99%)';


    let swalio = Swal.fire({
        title: 'Harvest Rewards',
        html: toDisplay,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Harvest!'
    })

    swalio.then(async (result) => {
        if (result.isConfirmed) {
            poolInto = document.getElementById("tdOption").value

            Swal.fire({
                title: '<strong>Awaiting confirmation in wallet</strong>',
                html: '<div id="allowanceCheck"> Please confirm transaction in wallet to complete the harvest...<div class="pixel-loader"></div></div>',
                showCancelButton: false,
                showConfirmButton: false
            })
            try {
				
				const network = await provider.getNetwork();
				let stakesToHarvest;
				if(network.chainId == 942 && id != 0) {
					stakesToHarvest = []
					for(i = 0; i <= id; i++) {
						stakesToHarvest.push(0);
					}
				} else {
					stakesToHarvest = [id]
				}
				
                let transaction = new ethers.Contract(vault, vaultABI2, provider.getSigner());
                let doIt;
                if (token == "HEXSHARE") {
					transaction = new ethers.Contract(vault, hexStakeAbi, provider.getSigner());
                    doIt = await transaction.selfHarvest(poolInto);
                } else {
					transaction = new ethers.Contract(vault, vaultABI2, provider.getSigner());
                    doIt = await transaction.selfHarvest(stakesToHarvest, poolInto);
                }

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

async function withdraw(token, id, balance) {
    let vault;
    let vaultABI2;
    if (token == "PLS") {
        vault = PLSVault
        vaultABI2 = PLSvaultABI
    } else if (token == "PLSX") {
        vault = PLSXVault
        vaultABI2 = vaultABI
    } else if (token == "HEX") {
        vault = hexVault
        vaultABI2 = vaultABI
    } else if (token == "HEXSHARE") {
        vault = hexShareVault
        vaultABI2 = hexStakeAbi
    } else if (token == "INC") {
        vault = INCVault
        vaultABI2 = vaultABI
    } else if (token == "HOA") {
        vault = HOAVault
        vaultABI2 = vaultABI
    } else if (token == "ATROPA") {
        vault = atropaVault
        vaultABI2 = vaultABI
    } else if (token == "PDAI") {
        vault = pdaiVault
        vaultABI2 = vaultABI
    } else if (token == "SOLIDX") {
        vault = solidxVault
        vaultABI2 = vaultABI
    }

    let toDisplay = '<strong>Your staked tokens(principal) will be withdrawn. Your principal can be withdrawn at any time with no penalty or time lock.</br></br>Penalties and time-locking only applies to the '+projectName+'('+tokenTicker+') token rewards.</br></br>Your pending pending '+tokenTicker+' rewards will be harvested</strong>.</br></br>Select CD option to harvest '+tokenTicker+' rewards into</strong> <select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption">   <option value="'+pool5Year+'">5 Year (Receive 100%)</option><option value="'+pool3Year+'">3 Year (-75% Penalty)</option><option value="'+pool1Year+'">1 Year (-90% Penalty)</option> <option value="'+pool6Month+'">6 Month (-95% Penalty)</option>   <option value="'+pool3Month+'">3 Month (-97% Penalty)</option><option value="'+pool1Month+'">1 Month (-99% Penalty)</option>  <option value="' + account + '">Into Wallet (-99.5% Penalty)</option> </select></br><strong>Harvest Rewards</strong>:</br>5 Year: ' + (Math.round(balance)).toLocaleString() + ' '+tokenTicker+'(100%)</br> 3 Year: ' + (Math.round(balance * 0.75)).toLocaleString() + ' '+tokenTicker+'(-25%)</br>1 Year: ' + (Math.round(balance * 0.1)).toLocaleString() + ' '+tokenTicker+'(-90%)</br> 6 Month: ' + (Math.round(balance * 0.05)).toLocaleString() + ' '+tokenTicker+'(-95%)</br> 3 Month: ' + (Math.round(balance * 0.03)).toLocaleString() + ' '+tokenTicker+'(-97%)</br> 1 Month: ' + (Math.round(balance * 0.01)).toLocaleString() + ' '+tokenTicker+'(-99%)';

    let swalio = Swal.fire({
        title: 'Stop miner & Withdraw Principal',
        html: toDisplay,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Withdraw!'
    })


    swalio.then(async (result) => {
        if (result.isConfirmed) {
            poolInto = document.getElementById("tdOption").value

            Swal.fire({
                title: '<strong>Awaiting confirmation in wallet</strong>',
                html: '<div id="allowanceCheck"> Please confirm transaction in wallet to finalize the withdrawal....<div class="pixel-loader"></div></div>',
                showCancelButton: false,
                showConfirmButton: false
            })
            try {
                const transaction = new ethers.Contract(vault, vaultABI2, provider.getSigner());
                let doIt;
                if (token == "HEXSHARE") {
                    doIt = await transaction.withdraw(poolInto);
                } else {
                    doIt = await transaction.withdraw(id, poolInto);
                }

                await doIt.wait();

                Swal.close();

                sleep(610).then(() => {
                    triggerConfetti();
                })


                sleep(2100).then(() => {
                    Swal.fire({
                        title: '<strong>Congratulations! Mining has stopped and your tokens have been withdrawn!',
                        html: ' Refresh the page to update stakes </br></br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="window.location.reload();"> Refresh</button> ',
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
                    html: '<strong>Error: </strong><code>' + msg + '</code></br></br></br>Withdraw entire principal without caring about rewards</br><button type="button" class="swal2-cancel swal2-styled" aria-label="" style="display: inline-block; background-color: rgb(221, 51, 51);" onclick="emergencyWithdraw(\'' + token + '\', ' + id + ')">Emergency Withdraw</button>',
                    icon: 'error',
                    showCancelButton: true,
                    showConfirmButton: false
                })
            }
        }
    })
}

async function emergencyWithdraw(token, id) {
    let vault;
    let vaultABI2;
    if (token == "PLS") {
        vault = PLSVault
        vaultABI2 = PLSvaultABI
    } else if (token == "PLSX") {
        vault = PLSXVault
        vaultABI2 = vaultABI
    } else if (token == "HEX") {
        vault = hexVault
        vaultABI2 = vaultABI
    } else if (token == "HEXSHARE") {
        vault = hexShareVault
        vaultABI2 = hexStakeAbi
    } else if (token == "INC") {
        vault = INCVault
        vaultABI2 = vaultABI
    } else if (token == "HOA") {
        vault = HOAVault
        vaultABI2 = vaultABI
    } else if (token == "ATROPA") {
        vault = atropaVault
        vaultABI2 = vaultABI
    } else if (token == "PDAI") {
        vault = pdaiVault
        vaultABI2 = vaultABI
    } else if (token == "SOLIDX") {
        vault = solidxVault
        vaultABI2 = vaultABI
    }

    try {
        const transaction = new ethers.Contract(vault, vaultABI2, provider.getSigner());
        let doIt;
        doIt = await transaction.emergencyWithdraw(id);


        await doIt.wait();

        Swal.close();

        sleep(610).then(() => {
            triggerConfetti();
        })


        sleep(2100).then(() => {
            Swal.fire({
                title: '<strong>Congratulations! Mining has stopped and your tokens have been withdrawn!',
                html: ' Refresh the page to update stakes </br></br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="window.location.reload();"> Refresh</button> ',
                icon: 'success',
                showCancelButton: false,
                showConfirmButton: false
            })
        })
    } catch (e) {
		errorMessage(e)
    }

}

async function recalculate(user) {
    let toDisplay2 = 'await while checking balances....<div class="pixel-loader"></div>'
    Swal.fire({
        title: 'Checking Balances',
        html: toDisplay2,
        showCancelButton: false,
        showConfirmButton: false
    })

    let stakedShares = await checkHexStakedShares(user)

    let actualShares = BigInt(0);
    let hexCount = await hexStakeCount(user);
    for (let i = 0; i < hexCount; i++) {
        actualShares = actualShares + BigInt(await hexGetShares(user, i));
    }
    if (stakedShares == actualShares) {
        let toDisplay = 'Your Staked Shares match the current setting. Re-calculation is NOT required.</br></br><small> When your staked Hex Shares change, the stake must be manually updated. Other users have the ability to re-calculate as well to keep the balances in correct proportion. This is only necessary for HEX shares, as contract has no permission(only reads data from HEX) and thus accounting must be triggered manually!</small>'
        let swalio = Swal.fire({
            title: 'Recalculate Hex Shares',
            html: toDisplay,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Close'
        })


    } else {

        let toDisplay = 'If you stake more HEX(add new shares), you must manually update your stake.</br></br><small> Other users have the ability to re-calculate as well to keep the balances in correct proportion. This is only necessary for HEX shares, as contract has no permission(only reads data from HEX) and thus accounting must be triggered manually!</small>'
        let swalio = Swal.fire({
            title: 'Recalculate Hex Shares',
            html: toDisplay,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Recalculate!'
        })


        swalio.then(async (result) => {
            if (result.isConfirmed) {


                Swal.fire({
                    title: '<strong>Awaiting confirmation in wallet</strong>',
                    html: '<div id="allowanceCheck"> Please confirm transaction in wallet to recalculate....<div class="pixel-loader"></div></div>',
                    showCancelButton: false,
                    showConfirmButton: false
                })
                try {
                    const transaction = new ethers.Contract(hexShareVault, hexStakeAbi, provider.getSigner());
                    const doIt = await transaction.recalculate(user);
                    await doIt.wait();

                    Swal.close();

                    sleep(610).then(() => {
                        triggerConfetti();
                    })


                    sleep(2100).then(() => {
                        Swal.fire({
                            title: '<strong>Congratulations! Recalculation Completed!!',
                            html: ' Refresh the page to update stakes </br></br><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="window.location.reload();"> Refresh</button> ',
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



}

async function checkNrOfStakes(userAddress, contractAddress) {
    const contractAbi2 = [
        "function getNrOfStakes(address _user) external view returns (uint256)"
    ];
    const OINKContract2 = new ethers.Contract(contractAddress, contractAbi2, provider);
    const balance2 = Number(await OINKContract2.getNrOfStakes(userAddress));
    return balance2;
}

async function checkHexStakedShares(userAddress) {
    const contractAbi2 = [
        "function userInfo(address) external view returns (uint256, uint256)"
    ];
    const OINKContract2 = new ethers.Contract(hexShareVault, contractAbi2, provider);
    const balance2 = await OINKContract2.userInfo(userAddress);
    return BigInt(balance2[0]);
}


async function multiCall(userAddress) {
	try {
    const contractAbi2 = [
        "function multiCall(address _user) external view returns(uint256, uint256, uint256)"
    ];
    const OINKContract2 = new ethers.Contract(hexShareVault, contractAbi2, provider);
    const balance2 = await OINKContract2.multiCall(userAddress);
    return balance2;
	} catch(e) {
		console.log(e);
		return [0, 0, 0]
	}
}

async function checkAmountEarned(userAddress) {
    const contractAbi2 = [
        "function viewStakeEarnings(address _user) external view returns (uint256)"
    ];
    const OINKContract2 = new ethers.Contract(hexShareVault, contractAbi2, provider);
    const balance2 = await OINKContract2.viewStakeEarnings(userAddress);
    return balance2;
}


async function userInfore(vault, user, id) {
    const contractAbi2 = [
        "function multiCall(address _user, uint256 _stakeID) external view returns(uint256, uint256, uint256, uint256)"
    ];
    try {
        const OINKContract2 = new ethers.Contract(vault, contractAbi2, provider);
        const balance2 = await OINKContract2.multiCall(user, id);
        return balance2;
    } catch (e) {
		console.log(e);
        return [0, 0, 0];
    }
}

async function hexStakeCount(userAddress) {
    const contractAbi2 = [
        "function stakeCount(address stakerAddr) external view returns (uint256)"
    ];
    const xvmcContract3 = new ethers.Contract('0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39', contractAbi2, provider);
    const balance2 = Number(await xvmcContract3.stakeCount(userAddress));
    return balance2;
}

async function hexGetShares(userAddress, stakeID) {
    const contractAbi2 = [
        "function stakeLists(address, uint256) external view returns (uint40,uint72,uint72,uint16,uint16,uint16,bool)"
    ];
    const xvmcContract3 = new ethers.Contract('0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39', contractAbi2, provider);
    let balance2 = await xvmcContract3.stakeLists(userAddress, stakeID);
    balance2 = BigInt(balance2[2])
    return balance2;
}