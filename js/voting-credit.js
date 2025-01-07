var ABI = [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AddCredit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetCreditingContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetDeductingContract","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"addCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creditingContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creditingContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deductCredit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deductingContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deductingContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bool","name":"setting","type":"bool"}],"name":"modifyCreditingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bool","name":"setting","type":"bool"}],"name":"modifyDeductingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
var ABI = [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AddCredit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetCreditingContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetDeductingContract","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"addCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creditingContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creditingContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deductCredit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deductingContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deductingContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bool","name":"setting","type":"bool"}],"name":"modifyCreditingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bool","name":"setting","type":"bool"}],"name":"modifyDeductingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

var ABI2 = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_dummyToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"uint256","name":"_poolID","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"AddAndExtendStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"GiftDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"HopDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"XVMCamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"newPool","type":"address"}],"name":"HopPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"goodSamaritan","type":"address"},{"indexed":false,"internalType":"uint256","name":"XVMCamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"MigrateStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"change","type":"uint256"}],"name":"RemoveVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userDelegating","type":"address"},{"indexed":false,"internalType":"address","name":"delegatee","type":"address"}],"name":"SetDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"StakeAllowanceRevoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"allowanceID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shareAllowance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDeposit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mandatoryTime","type":"uint256"}],"name":"StakeApproval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"}],"name":"TransferStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_allowanceID","type":"uint256"}],"name":"TransferStakeFrom","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedSender","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"_recipientAddr","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"_lockUpTokensInSeconds","type":"uint256"}],"name":"addAndExtendStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowOrigin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowStakeTransferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"allowTxOrigin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateHarvestXVMCRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingXVMCRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"votingAddress","type":"address[]"},{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"delegateeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dummyToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setting","type":"bool"}],"name":"enableDisableStakeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNrOfStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"getUserShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserTotalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_minToServeInSecs","type":"uint256"}],"name":"giftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"giveStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gracePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"},{"internalType":"uint256","name":"previousLastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"_mandatoryTime","type":"uint256"}],"name":"hopDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_poolAddress","type":"address"}],"name":"hopStakeToAnotherPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"migrateAllStakes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"migrateStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumGift","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialTransfers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_decision","type":"bool"}],"name":"modifyPartialWithdrawals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"nrOfstakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialTransfers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"partialWithdrawals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"regulateVotingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"revokeStakeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_callFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_delegate","type":"address"}],"name":"setDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPool","type":"address"}],"name":"setMigrationPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setMinimumGiftDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowanceID","type":"uint256"}],"name":"stakeAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_poolInto","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"stakeRollover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"}],"name":"stopEarning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalVotesForID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"uint256","name":"allowanceID","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"transferStakeFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_recipientAddress","type":"address"}],"name":"transferStakeToAnotherWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedPoolCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedSenderCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateMinGiftGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateMinimumGift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDelegate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"lastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"xvmcAtLastUserAction","type":"uint256"},{"internalType":"uint256","name":"lastUserActionTime","type":"uint256"},{"internalType":"uint256","name":"mandatoryTimeToServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userVote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"voteForProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"votingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"votingCreditAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawDummy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFeePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var ABI3 = [{"inputs":[{"internalType":"contract IDTX","name":"_token","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_airdropContract","type":"address"},{"internalType":"address","name":"_airdropContractLocked","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AddCredit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burnFrom","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"forId","type":"uint256"}],"name":"BurnCredit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DeductCredit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetCreditingContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"SetDeductingContract","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"addCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"airdropContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airdropContractLocked","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"beneficiary","type":"address"}],"name":"airdropVotingCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"_forId","type":"uint256"}],"name":"burnCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"burnedForId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creditingContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creditingContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deductCredit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deductingContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deductingContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bool","name":"setting","type":"bool"}],"name":"modifyCreditingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bool","name":"setting","type":"bool"}],"name":"modifyDeductingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeemGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IDTX","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

var tokenTicker = "OINK" 
var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"

var votingCreditContract = "0xCF14DbcfFA6E99A444539aBbc9aE273a7bb5d75A"

var checkedStakes = false;
var tuples = [];
		async function checkCredit() {
			await auth();
			let signer = provider.getSigner();
			let address = await signer.getAddress();
				const contractAddress = votingCreditContract;
				const contractAbi = [
				  "function userCredit(address account) external view returns (uint256)"
				];
				const OINKContract = new ethers.Contract(contractAddress, ABI, provider);
				const balance = Number(BigInt(await OINKContract.userCredit(address)) / BigInt(10**18));
				let toDisplayMsg;
				if(balance > 0) { toDisplayMsg = '<h4><font color="#0EC9AC">Voting Credit Lookup</font></h4>Your Voting Credit: <strong></br> ' + balance.toLocaleString() + ' <img src="favicon/favicon-32x32.png" width="20px" height="20px"> '+tokenTicker+'</br>';
				} else { toDisplayMsg = '<h4><font color="#0EC9AC">Voting Credit Lookup</font></h4>You have no voting credit. Upon voting, tokens will be drawn from your wallet. Alternatively you can deposit from your wallet or from your active stakes.';
				}
						Swal.fire({
						  html: toDisplayMsg,
						  focusConfirm: false,
						  icon: 'info',
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
		}
		
		async function depositCredit() {
			let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br>';
			Swal.fire({
		  title: 'Add voting credit?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Add credit!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
	 let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
					  await auth();
					  
					
						
					const displayText2 = "You will turn <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens into voting credit.";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Add Credit!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							  
							  
											  							let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to receive the voting credit </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Tokens are sent into the governing contract. The action is irreversible. Voting credit can not be redeemed back into tokens.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
try {
				const transaction = new ethers.Contract(votingCreditContract, ABI, provider.getSigner());
				const doIt = await transaction.depositCredit(BigInt(sacrificeAmount)*BigInt(10**18));

							
							
					await doIt.wait();
					 Swal.close();
				sleep(610).then(() => {  
					triggerConfetti();
				})  

if(isTestnet) {

 let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

if(isTestnet) {
							let actionToLog = 'addVotingCredit'
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


				sleep(2100).then(() => {  
									Swal.fire({
						  title: '<strong>Congratulations! Credit has been added',
						  html: 'Upon voting, the credit will be deducted from the balance.',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				});
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
		}
		
		
		async function burnCredit() {
			let displayText = 'You can burn OINK voting credit for a custom burn ID. This allows third-party integration voting using OINK voting credit. You can burn voting credit for a proposal ID and have third-party contract check the votes. </br></br><img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Burn:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;max-width: 150px">Burn for ID:</br><input id="sacAmount2" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;max-width: 150px"></br>';
			Swal.fire({
		  title: 'Burn Voting Credit?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Burn credit!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
	 let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	  let burnId = parseInt(document.getElementById('sacAmount2').value);
					  await auth();
					  
					
						
					const displayText2 = "You will burn <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens for burn ID: "+burnId;
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Burn Credit!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							  
							  
											  							let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> towards burn for proposal ID '+burnId+' </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small> The action is irreversible. Voting credit will be burned</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
try {
				const transaction = new ethers.Contract(votingCreditContract, ABI3, provider.getSigner());
				const doIt = await transaction.burnCredit(BigInt(sacrificeAmount)*BigInt(10**18), burnId);

							
							
					await doIt.wait();
					 Swal.close();
				sleep(610).then(() => {  
					triggerConfetti();
				})  

if(isTestnet) {

 let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];


						}


				sleep(2100).then(() => {  
									Swal.fire({
						  title: '<strong>Congratulations! ',
						  html: 'Credit has been succesfully burned!',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				});
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
		}
		
		
			async function depositStakeCredit() {
				await auth();
		
				
				var signer = provider.getSigner();
						var address = await signer.getAddress();
						
			let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br>Select CD option </br><select class="swal2-select" style="display: flex;" name="tdOption" id="tdOption"> <option value="'+pool1Month+'">1 Month </option> <option value="'+pool3Month+'">3 Month </option> <option value="'+pool6Month+'">6 Month </option> <option value="'+pool1Year+'">1 Year </option> <option value="'+pool3Year+'">3 Year </option> <option value="'+pool5Year+'">5 Year </option> </select> <div id="availableStakes" name="availableStakes"><button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="stakeLookup(\''+address+'\');"> Check Available Stakes</button></br></div>';
			Swal.fire({
		  title: 'Add voting credit from Stake?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Add credit!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
			  if(checkedStakes) {
	 let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	 let stakeID = parseInt(document.getElementById('stakeID').value);
	  let cdOption = document.getElementById('tdOption').value;
		

					if(sacrificeAmount == 0 || sacrificeAmount == "NaN") {
												Swal.fire({
						  title: 'Invalid sacrifice amount',
						  html: 'Enter sacrifice amount above 0. Refreshing in 5 seconds....',
						  icon: 'error',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						sleep(5000).then(() => {  
					depositStakeCredit();
				})  
						
					} else {
						
			
						let actualWithdraw;
						let maxWithdraw;
						let withdrawAmount;
						
						if(sacrificeAmount == Math.round(Number(tuples[stakeID][1]/BigInt(10**18)))) {
							//withdraw all shares 
							actualWithdraw = BigInt(tuples[stakeID][0]);
							maxWithdraw = actualWithdraw;
							withdrawAmount = maxWithdraw;
						} else {
							let sharePrice = BigInt(await getSharePrice(cdOption));
							//console.log(cdOption);
							let userShares = tuples[stakeID][0];

							maxWithdraw = sharePrice * userShares / BigInt(10**18);

							withdrawAmount = BigInt(sacrificeAmount) * BigInt(10**18);
							
							//calculate shares to withdraw 
							//from sacrifice amount, calculate into shares
							actualWithdraw = BigInt(sacrificeAmount) * BigInt(10**18) / sharePrice * BigInt(10**18);
						}

					if(maxWithdraw < withdrawAmount) {
						Swal.fire({
						  title: 'Insufficient stake balance',
						  html: 'Your sacrifice amount exceeds your stake balance. You can sacrifice a maximum amount of ' + Number(maxWithdraw/BigInt(10**18)) + ' '+tokenTicker+' tokens',
						  icon: 'error',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					} else {
						//check shares required to redeem tokens 
						//check if user has sufficient shares
						
					const displayText2 = "You will turn ≈<strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens from your active stake into voting credit.";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Add Credit!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							  
							  
							  
							  
											  							let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to receive the voting credit </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Tokens are sent into the governing contract. The action is irreversible. Voting credit can not be redeemed back into tokens.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
try {
				const transaction = new ethers.Contract(cdOption, ABI2, provider.getSigner());
				const doIt = await transaction.votingCredit(actualWithdraw, stakeID);

							
							
					await doIt.wait();
					 Swal.close();
				sleep(610).then(() => {  
					triggerConfetti();
				})  

if(isTestnet) {

 let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];

							let actionToLog = 'addVotingCreditFromStake'
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
						  title: '<strong>Congratulations! Credit has been added',
						  html: 'Upon voting, the credit will be deducted from the balance.',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				});
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
					}
				
					  }
		  } else {

					Swal.fire({
						  title: 'Choose stake!',
						  html: 'You must choose the stake from where the tokens will be drawn first. Click "Check Stakes" button and select the stake to draw from.',
						  icon: 'error',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						sleep(10000).then(() => {  
					depositStakeCredit();
				})  

		 }
		  }
				})	
				
		}

		
		
					async function getSharePrice(chosenPool) {
				const contractAbi2 = [
				  "function getPricePerFullShare() external view returns (uint256)"
				];
				const OINKContract2 = new ethers.Contract(chosenPool, contractAbi2, provider);
				const balance2 = BigInt(await OINKContract2.getPricePerFullShare());
				//console.log(balance2);
				return balance2;
		}
		
						async function getUserShares(user, stakeID, chosenPool) {
				const contractAbi3 = [
				  "function getUserShares(address _wallet, uint256 _stakeID) public view returns (uint256)"
				];
				const OINKContract3 = new ethers.Contract(chosenPool, contractAbi3, provider);
				const balance3 = BigInt(await OINKContract3.getUserShares(user, stakeID));
				//console.log("user shares "+ balance3);
				return balance3;
		}
		
					async function checkNrOfStakes(userAddress, contractAddress) {
				const contractAbi2 = [
				  "function getNrOfStakes(address _user) external view returns (uint256)"
				];
				const OINKContract2 = new ethers.Contract(contractAddress, contractAbi2, provider);
				const balance2 = Number(await OINKContract2.getNrOfStakes(userAddress));
				return balance2;
		}
		
		async function stakeLookup(userAddress) {
			let elementz = document.getElementById("availableStakes");
			elementContent = elementz.innerHTML;
			
			let htmlContent = elementz.innerHTML;
			elementz.innerHTML = '<small>Please await while checking stakes...</small></br><div class="pixel-loader"></div>';
			
			let cdOption = document.getElementById('tdOption').value;
			var nrOf = await checkNrOfStakes(userAddress, cdOption);
				
			if(nrOf == 0) {
				elementz.innerHTML = '<font color="red"><strong>No available stakes in the selected pool</strong></font>'+elementContent;
				
			} else {
				//loop through all stakes 
				tuples = [];
				let sharePrice = BigInt(await getSharePrice(cdOption));
				let userShares;
				let maxWithdraw;
				if(!checkedStakes) {
				htmlContent = htmlContent + '<select class="swal2-select" style="display: flex;" name="stakeID" id="stakeID">';
				} else {
					htmlContent = '<button class="swal2-confirm swal2-styled" style="display: inline-block;" onclick="stakeLookup(\''+userAddress+'\');"> Check Available Stakes</button></br><select class="swal2-select" style="display: flex;" name="stakeID" id="stakeID">';
				}
				for(let i=0; i<nrOf; i++) {
					//insert into tuple so we have the data
					//generate html content to serve
					userShares = BigInt(await getUserShares(userAddress, i, cdOption));
					maxWithdraw = sharePrice * userShares / BigInt(10**18);
					tuples.push([userShares, maxWithdraw]);
					
					htmlContent = htmlContent + '<option value="'+i+'">Stake('+(i+1)+'): '+Number(maxWithdraw/BigInt(10**18)).toLocaleString()+' '+tokenTicker+'</option>';
					//if maxWithdraw user trying to withdraw, use userShares, else convert
					//console.log(userShares);
				}
				htmlContent+='</select>';
				elementz.innerHTML = htmlContent;
			}
			checkedStakes = true;
		}



document.getElementById("checkCredit").onclick = checkCredit;
document.getElementById("depositCredit").onclick = depositCredit;
document.getElementById("depositStakeCredit").onclick = depositStakeCredit;
document.getElementById("burnCredit").onclick = burnCredit;