		var ABI = [{"inputs":[{"internalType":"address","name":"_pool","type":"address"}],"name":"addNewPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"beginMintingPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newGovernor","type":"address"}],"name":"changeGovernorForSecurityPriorMintingBegins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enforceGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_acPool1","type":"address"},{"internalType":"address","name":"_acPool2","type":"address"},{"internalType":"address","name":"_acPool3","type":"address"},{"internalType":"address","name":"_acPool4","type":"address"},{"internalType":"address","name":"_acPool5","type":"address"},{"internalType":"address","name":"_acPool6","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_newGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"EnforceGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"poolInto","type":"address"}],"name":"GiveRolloverBonus","type":"event"},{"inputs":[],"name":"governorRejected","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"callFee","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[],"name":"postGrandFibIncreaseCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rebalancePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rememberReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_arg","type":"bool"}],"name":"setActivateFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_acPool","type":"address"},{"internalType":"uint256","name":"_newCallFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setGovernorTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"setInflation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"SetInflation","type":"event"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"setNewGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newThreshold","type":"uint256"}],"name":"setThresholdFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"address","name":"_depositToPool","type":"address"},{"internalType":"uint256","name":"_bonusToPay","type":"uint256"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"stakeRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"testnetSwitch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenContract","type":"address"}],"name":"transferCollectedFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"TransferOwner","type":"event"},{"inputs":[],"name":"transferRewardBoostThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferToReferralContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferToTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amountToSend","type":"uint256"}],"name":"treasuryRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newCostToVote","type":"uint256"}],"name":"updateCostToVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDelay","type":"uint256"}],"name":"updateDelayBeforeEnforce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_forPool","type":"address"},{"internalType":"uint256","name":"_bonus","type":"uint256"}],"name":"updateRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_type","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"updateVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool1ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocationPercentages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"basicContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"changeGovernorActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"consensusContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costToVote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayBeforeEnforce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eligibleNewGovernor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eventFibonacceningActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farmContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fibonacceningContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundingRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_bonusForPool","type":"address"}],"name":"getRollBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hexVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isInflationStatic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastHarvestedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRegularReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTotalCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintingPhaseLaunchDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newGovernorBlockDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newGovernorRequestBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAllocationContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftStakingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftStakingPoolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingHarvestRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsxVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"senateContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"thresholdFibonaccening","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDistributionContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDistributionContractExtraPenalty","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFibonacciEventsAfterGrand","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshareVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

		var farmABI = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"},{"internalType":"address","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_launch","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"EnforceProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAllocation","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"depositFee","type":"uint16"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateFarmProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedTax","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovTax","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isBurn","type":"bool"},{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovernorTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"farmMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"memeMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeRewardReduction","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeVault","type":"event"},{"inputs":[{"internalType":"uint256","name":"_lp","type":"uint256"},{"internalType":"uint256","name":"_nft","type":"uint256"},{"internalType":"uint256","name":"_maxPulse","type":"uint256"},{"internalType":"uint256","name":"_maxPulseTotal","type":"uint256"}],"name":"changeMaxAllocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"govTaxProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"governorTransferProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"bool","name":"isBurn","type":"bool"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint16","name":"depositFee","type":"uint16"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastReducePulseAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNftAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPulseEcoAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPulseEcoTotalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalFarmUpdate","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint16","name":"newDepositFee","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposalLengths","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_isBurn","type":"bool"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_type","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rebalanceIfPulseAllocationExceedsMaximum","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rebalancePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reduceMaxPulseAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncCreditContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"updateFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedType","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteFarmProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteFarmProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovTaxN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovTaxY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovernorTransferN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovernorTransferY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteVaultN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteVaultY","outputs":[],"stateMutability":"nonpayable","type":"function"}]

		var eventABI = [{"inputs":[{"internalType":"contract IERC20","name":"_DTX","type":"address"},{"internalType":"address","name":"_masterchef","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"CancleFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newGovernor","type":"address"}],"name":"ChangeGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"EndFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"EnforceProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eventDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finalSupply","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateProposeGrandFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"durationInBlocks","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"}],"name":"RebalanceInflation","type":"event"},{"inputs":[],"name":"calculateUpcomingRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"cancleFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"delayBetweenEvents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"desiredSupplyAfterGrandFibonaccening","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eligibleGrandFibonaccening","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"expireLastPrintGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"expiredGrandFibonaccening","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fibonacceningActivatedBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fibonacceningActiveID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fibonacceningProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"goldenRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grandEventLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grandFibonacceningActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"grandFibonacceningEnforce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"grandFibonacceningProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"eventDate","type":"uint256"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"finalSupply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grandFibonacceningRunning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"eventDate","type":"uint256"},{"internalType":"uint256","name":"finalSupply","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateProposeGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isGrandFibonacceningReady","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isRunningGrand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastCallFibonaccening","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"leverPullFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldMasterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"durationInBlocks","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rebalanceInflation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startLastPrintGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"targetBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensForBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_delay","type":"uint256"}],"name":"updateDelayBetweenEvents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_length","type":"uint256"}],"name":"updateGrandEventLength","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoProposeGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteFibonacceningN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteFibonacceningY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGrandFibonacceningN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGrandFibonacceningY","outputs":[],"stateMutability":"nonpayable","type":"function"}]
		var chefABI = [{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"address","name":"_participant","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fairMintSenate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_allocPoint","type":"uint256[]"},{"internalType":"address[]","name":"_participant","type":"address[]"},{"internalType":"bool[]","name":"_withUpdate","type":"bool[]"}],"name":"massAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"publishTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_e","type":"bool"}],"name":"rewardSenators","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setGovernorFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"stopPublishing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferCredit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IDTX","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"bool","name":"_setting","type":"bool"}],"name":"setTrustedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_participant","type":"address"},{"internalType":"uint256","name":"_alloc","type":"uint256"}],"name":"startPublishing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"tokenChangeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferCredit","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"setting","type":"bool"}],"name":"TrustedContract","type":"event"},{"inputs":[{"internalType":"uint256","name":"_DTXPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"newEmissions","type":"uint256"}],"name":"UpdateEmissions","type":"event"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"name":"updateStartBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"credit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dtx","outputs":[{"internalType":"contract IDTX","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DTXPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"existingParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fairTokensPublishedToSenate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governorFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDtx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"address","name":"participant","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"senatorRewards","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCreditRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPrincipalBurned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPublished","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"virtualTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

var rewardBoostContractABI = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"},{"internalType":"address","name":"_masterchef","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"CancleFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"EndFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"EnforceProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"durationInBlocks","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeFibonaccening","type":"event"},{"inputs":[],"name":"calculateUpcomingRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"cancleFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"expiredGrandFibonaccening","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fibonacceningActivatedBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fibonacceningActiveID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fibonacceningProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"leverPullFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposalLengths","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"durationInBlocks","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardReduceBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setRewardReduceBy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncCreditContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteFibonacceningN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteFibonacceningY","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var farmerABI = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"inputs":[],"name":"DTX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyandburn","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"endStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"haltStakingByGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"incMasterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initiateHaltOfStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"sendToTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"startStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingCreditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]

var incChefABI = [{"inputs":[{"internalType":"contract Incentive","name":"_inc","type":"address"},{"internalType":"uint256","name":"_incPerSecond","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"type":"constructor"},{"inputs":[],"name":"MaxAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inc","outputs":[{"internalType":"contract Incentive","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxIncPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingInc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accIncPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_incPerSecond","type":"uint256"}],"name":"setIncPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"pid","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"pid","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"pid","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"}]

var projectName = "Piggy Bank"
var buybackABIold = [{"inputs":[],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_pls","type":"bool"}],"name":"buybackAndBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buybackPLS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_option","type":"bool"}],"name":"switchBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"DTX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEstimatedDTXforETH","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toBurn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_ROUTER_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
var buybackABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"DTX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SWAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_ROUTER_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyWithPLS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"enableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getEstimatedDTXforETH","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getEstimatedPLSforToken","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"swapTokenForPLS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wPLS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_a","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

var vaultABI = [{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectedFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"referral","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"harvestInto","type":"address"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"SelfHarvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"stakeID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"harvestAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"Withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"accDtxPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingDTXRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_beneficiary","type":"address[]"},{"internalType":"uint256[][]","name":"_stakeID","type":"uint256[][]"}],"name":"collectCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_beneficiary","type":"address[]"}],"name":"collectCommissionAuto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defaultDirectPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"referral","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fundingRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNrOfStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastFundingChangeTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFundingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"multiCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolPayout","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minServe","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referredBy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_stakeID","type":"uint256[]"},{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"selfHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"uint256","name":"_newPoolID","type":"uint256"}],"name":"setMasterChefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_minServe","type":"uint256"}],"name":"setPoolPayout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_defaultDirectHarvest","type":"uint256"}],"name":"updateSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"debt","type":"uint256"},{"internalType":"uint256","name":"feesPaid","type":"uint256"},{"internalType":"uint256","name":"lastAction","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"viewPoolMinServe","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"viewPoolPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeID","type":"uint256"}],"name":"viewStakeEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"viewUserTotalEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"virtualAccDtxPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeID","type":"uint256"},{"internalType":"address","name":"_harvestInto","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
var plsVault = "0xE145932f6b010B0166aA6860D56b2730744B7d6f";
var PLSXVault = "0x16233F6d7398f134EbCec11101e792c03ED296a4";
var INCVault = "0x852443CB5b5f5B10e514CA74104bBF2Cd6CeF868";
var hexVault = "0x164D4C1fDd74A5b7256Fd9Eca958c9ff70617c03";
var hoaVault = "0x9E70665aDee807f262Ae59Dc1f8D4Dd878320C21"

var ATROPAVault = "0x7c61919AccF037975bbD3a91b0F5811c640018b1"
var PDAIVault = "0xc13b8974CD5caa67D7e539D2654C872b5AcA5105"
var SOLIDXVault = "0x2057dd1687eafCD809386a41012748AC509df542"

var farmerContract = "0xc6E9924Ea3141b5555b18b82f7Bd66f9BB084C2D"
var incMasterchef = "0xB2Ca4A66d3e57a5a9A12043B6bAD28249fE302d4"
var buybackContract = "0xa36d037B01C148025C54e4f86C0032F05a93D4Ce"

var tokenTicker = "OINK"

	var blocksPerSecond = 10
	var governingContract = "0x331146b366c0Cd2AcA542ce71E5D6fb66bf07D16"
	// old: var ourContract = "0x2515bfDE277546f06871a024E43E7CF2aA842b34" //buyback contract
	var ourContract = buybackContract
	var rewardBoostContract = "0xc77c66913B5f60522Ccb98857228511930da7403"
	var farmContract = "0x0dc0Fabe4c9d57cCaD055b4cD627D0d24fA3C98E"
	var chefContract = "0x486fEa20eA242456b450B005ED7D019E3E984f28"
	var referralContract = "0x066F0a45801bcbc5232b11ed4b97c39E1369fe59"
	
	var OINKPrice = document.getElementById("DTX-price").innerHTML;
	
	
	var plsxContract = "0x95B303987A60C71504D99Aa1b13B4DA07b0790ab"
var incContract = "0x2fa878Ab3F87CC1C9737Fc071108F904c0B0C95d"
var hexContract = "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"


	var allstakes
	var allstakes2 
	var allstakes3 
	var allstakes4
	
	var maximumStakesHarvestAtOnce = 20



async function harvestPulseX() {
			await auth();
				let swalio = Swal.fire({
				  title: '<strong>Harvest Rewards</strong>',
				  html: '<div id="checkRewards"> Checking available rewards...<div class="pixel-loader"></div></div>',
				  icon: 'info',
				  showCancelButton: true,
			confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Harvest Rewards!'
				})
				let reward = await getPendingIncRewards(9,farmerContract);
				console.log("pending reward: "+reward)
				document.getElementById("checkRewards").innerHTML = "</br></br><strong>Available Rewards: "+(Number(reward)/(10**18)).toFixed(6)+" <img src=\"img/inc.png\" width=\"20px\" height=\"20px\"> INC</strong> "

				swalio.then(async(result) => {
		  if (result.isConfirmed) {
			  
			  	  			Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to harvest the reward...<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			  const transaction = new ethers.Contract(farmerContract, farmerABI, provider.getSigner());
			  let doIt = await transaction.harvest(9);
			  await doIt.wait();

				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Reward has been harvested!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				
				} catch(e) {
							errorMessage(e)
						  }
				
		  }
				})
		}

		
		async function harvest() {
			await auth();
				let swalio = Swal.fire({
				  title: '<strong>Harvest Rewards</strong>',
				  html: '<div id="checkRewards"> Checking available rewards...<div class="pixel-loader"></div></div></br></br><small>You get paid a harvest fee for performing the on-chain transaction which re-calculates rewards accordingly and makes sure longer always pays better and compounds faster.</small>',
				  icon: 'info',
				  showCancelButton: true,
			confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Harvest Rewards!'
				})
				let reward = await getPendingRewards();
				document.getElementById("checkRewards").innerHTML = "</br></br><strong>Available Rewards: "+reward+" <img src=\"img/DTX.png\" width=\"20px\" height=\"20px\"> "+tokenTicker+"</strong> <small>($"+(OINKPrice * reward).toFixed(4)+")</small>"

				swalio.then(async(result) => {
		  if (result.isConfirmed) {
			  
			  	  			Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to harvest the reward...<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			  const transaction = new ethers.Contract(governingContract, ABI, provider.getSigner());
			  let doIt = await transaction.harvest();
			  await doIt.wait();

				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Reward has been harvested!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				
				} catch(e) {
							errorMessage(e)
						  }
				
		  }
				})
		}
		
		async function giveToRewardContract() {
			await auth();
				let swalio = Swal.fire({
				  title: '<strong>Grant Rewards For Referrals</strong>',
				  html: '<div id="checkRewards"> Checking available tokens...<div class="pixel-loader"></div></div></br></br><small>Referral rewards are built into contract and paid through inflation.</small>',
				  icon: 'info',
				  showCancelButton: true,
			confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Send Tokens To Reward Contract!'
				})
				let total = await getPendingReferralRewards1();
				let lastTotal = await getPendingReferralRewards2();
				
				let reward = (total - lastTotal) * 25 / 1000
				 
				let governorBalance = await bOfWETH(tokenContract, governingContract) / 10**18
				let rewardContractBalance = await bOfWETH(tokenContract, referralContract) / 10**18
				document.getElementById("checkRewards").innerHTML = `During the first 2 months, 2.5% of rewards minted to the governing contract can be transferred to the referral reward contract. 
				</br></br>These rewards come from inflation and are used to reward the referral and the invitees!</br></br> After first 2 months 
				, the rewards will have to be manually transferred through the treasury!</br></br><strong>Available Rewards: `+Math.round(reward)+` 
				<img src=\"img/DTX.png\" width=\"20px\" height=\"20px\"> `+tokenTicker+`</strong> <small>($`+Math.round(OINKPrice * reward)+`)</small>
				
				</br></br><strong>Referral Reward Contract Balance: `+Math.round(rewardContractBalance)+` 
				<img src=\"img/DTX.png\" width=\"20px\" height=\"20px\"> `+tokenTicker+`</strong> <small>($`+Math.round(OINKPrice * rewardContractBalance).toLocaleString()+`)</small>
				
				</br></br><strong>Governing Contract Balance: `+Math.round(governorBalance)+` 
				<img src=\"img/DTX.png\" width=\"20px\" height=\"20px\"> `+tokenTicker+`</strong> <small>($`+Math.round(OINKPrice * governorBalance).toLocaleString()+`)</small>
				
				`

				swalio.then(async(result) => {
		  if (result.isConfirmed) {
			  
			  	  			Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to harvest the reward...<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			  const transaction = new ethers.Contract(governingContract, ABI, provider.getSigner());
			  let doIt = await transaction.transferToReferralContract();
			  await doIt.wait();

				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Rewards have been issued to the contract!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				
				} catch(e) {
							errorMessage(e)
						  }
				
		  }
				})
		}
		
		
		async function rebalance() {
			await auth();
				let swalio = Swal.fire({
				  title: '<strong>Rebalance Pulse Ecosystem Rewards</strong>',
				  html: '<div id="checkRewards"> This action will rebalance rewards for the PulseChain ecosystem to their allocated percentages</br></div></br></br>',
				  icon: 'info',
				  showCancelButton: true,
			confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Rebalance!'
				})
			
				swalio.then(async(result) => {
		  if (result.isConfirmed) {
			  
			  	  			Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Confirm transaction in wallet to rebalance the rewards...<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			  const transaction = new ethers.Contract(farmContract, farmABI, provider.getSigner());
			  let doIt = await transaction.rebalancePools();
			  await doIt.wait();

				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Reward has been harvested!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				
				} catch(e) {
							errorMessage(e)
						  }
				
		  }
				})
		}
	
	async function checkupEvents() {
		await auth()
		let swalio = Swal.fire({
				  title: '<strong>Reward Boost Events</strong>',
				  html: '<div id="checkRewards"> Checking Reward Boost Events data...<div class="pixel-loader"></div></div></br></br>',
				  icon: 'info',
				  showCancelButton: true,
				  showConfirmButton: false,
				cancelButtonColor: '#d33'
				})
				let event = await getEventStatus();
				let farm = await getFarmAddress();
				let reductionStatus = false;
			
				let newMsg;
				if(event) {
					console.log("EVENT IS ACTIVE")
					//get contract address 
					//get event ID 
					//checkup data for ID
					//check activated block 
					//calculate when cancle
					let eventContract = rewardBoostContract
					let eventId = await getEventID(eventContract)
					let eventData = await eventDatar(eventContract, eventId)
					let rpb = Number(BigInt(eventData[5]) / BigInt(10**18))
					console.log(eventData)
					console.log(rpb)
					console.log(eventData[5])
					let duration = Number(BigInt(eventData[6]))
					let startTime = Number(BigInt(eventData[7]))
					let currentBlock = await provider.getBlockNumber()
					newMsg = "<strong>Reward boost is currently <font color='green'>ACTIVE</font>.</br></br>Current Rewards "+rpb.toLocaleString()+" "+tokenTicker+"/block</br>"
					
					if(startTime + duration > currentBlock) { //can be CLOSED
						newMsg+= "Reward boost has expired and can be now ENDED. </br> <button onclick=\"endBoost('"+eventContract+"')\">End Reward Boost</button>"
					} else {
						let blocksLeft = currentBlock-startTime-duration
						let hoursLeft = Math.round((blocksLeft * blocksPerSecond) / 3600)
						newMsg+= "Reward boost will expire in: "+blocksLeft+" blocks</br><strong>Estimated time left:  "+hoursLeft+" Hours.</strong>"
					}

					//and ofcourse reward reduction 
					document.getElementById("checkRewards").innerHTML = newMsg
				} else {
					newMsg = "There are currently no active events.</br></br> You can schedule and trigger new events below</br><a href=\"reward-boost.html\"><button class=\"swal2-confirm swal2-styled\">Schedule event</button></a>"
				
					
					document.getElementById("checkRewards").innerHTML = newMsg
					//not active, check if reward reduction
				}
	}
			

async function reduceRewards() {
		await auth()
		let swalio = Swal.fire({
				  title: '<strong>Reduce PulseChain Ecosystem Rewards</strong>',
				  html: `Every 7 days, the maximum allowed rewards for the PulseChain Ecosystem can be reduced by 1%. The maximum allowed rewards starts at 90% and reduces over time. </br></br>
				  This is meant to simulate Bitcoin mining, where early on there was no investment required to mine coins - they could be mined using a regular computer. </br></br>
				  Over time, as more people participated in the process, it required sophisticated equipment and raised barrier to entry. </br></br>
				  Similarly, with `+projectName+` at the very beginning any PulseChain user will be able to mine using the assets they already posses, and over time,
				  the native `+projectName+`(`+tokenTicker+`) tokens will be required to mine substantial rewards. 
				  </br></br><div id="checkRewards"> Checking Last Update Data...<div class="pixel-loader"></div></div></br></br><div id="checkAboveMax"></div></br></br>`,
				  icon: 'info',
				  showCancelButton: true,
				  showConfirmButton: false,
				cancelButtonColor: '#d33'
				})
				//let event = await getEventStatus();
				//let farm = await getFarmAddress();
				//let reductionStatus = false;
				let newMsg;
				let lastReduction = await lastReduce();
				let currentMax = await currentMaxAlloc();
				currentMax = Math.round(currentMax / 100)
			let timestamp = Math.floor(Date.now() / 1000);
			console.log(timestamp - lastReduction)
			console.log(currentMax)
			console.log(lastReduction)
				if(timestamp - lastReduction > 86400*7) {
					newMsg = "</br></br>Current Maximum Allocation For PulseChain Ecosystem: <strong>"+currentMax+"%</strong></br></br>The rewards can be reduced by 1%:</br><a href=\"#\" onclick='reduceRewardsReal();'><button class=\"swal2-confirm swal2-styled\">Click To Reduce Allowed Maximum</button></a>"
				} else {
					let addon = formatTime((timestamp+86400*7)-lastReduction)
					newMsg = "</br></br>Current Maximum Allocation For PulseChain Ecosystem: <strong>"+currentMax+"%</strong></br></br>Seems like rewards have been reduced just recently!</br></br> Rewards can be reduced again in: <strong>"+addon+"</strong>"
				}
					
					document.getElementById("checkRewards").innerHTML = newMsg
					//not active, check if reward reduction
					
					let isOver = await checkIfOverMax()
					if(isOver) {
						document.getElementById("checkAboveMax").innerHTML = "<font color='red'>PulseChain ecosystem rewards are exceeding maximum allowed.<strong></strong></font> <a href=\"#\" onclick='reduceRewardsActual();'><button class=\"swal2-confirm swal2-styled\">Click To Reduce Rewards</button></a>"
					}
			
	}			
				
				
				function formatTime(t) {
    var days = Math.floor(t / (24 * 60 * 60));
    var hours = Math.floor(t % (24 * 60 * 60) / (60 * 60));
   // var minutes = Math.floor(t % (24 * 60 * 60) % (60 * 60) / 60);
return days + " days " + hours + " hours ";
   // return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
				}

	async function reduceRewardsActual() {
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to reduce the rewards allocated towards pulsechain...<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			  const transaction = new ethers.Contract(farmContract, farmABI, provider.getSigner());
			  let doIt = await transaction.rebalanceIfPulseAllocationExceedsMaximum();
			  await doIt.wait();
			  
				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Rewards have been reduced!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				} catch(e) {
							errorMessage(e)
						  }
	}
	
	async function updateFees() {
		Swal.fire({
				  title: '<strong>Checking contracts...</strong>',
				  html: 'Checking if the Vault fees are up to date...</br></br> <div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
		//get fees from governing contract 
		//check if they are the same in vaults 
		//if not, update them
		const contractAbi = [
				  "function fundingRate() public view returns (uint256)",
				   "function depositFee() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(governingContract, contractAbi, provider)
				const depositFee = await timeDepositContract.depositFee()
				const fundingFee = await timeDepositContract.fundingRate()
				
		
		
			const timeDepositContract2 = new ethers.Contract(plsVault, contractAbi, provider)
				const depositFee2 = await timeDepositContract2.depositFee()
				const fundingFee2 = await timeDepositContract2.fundingRate()
				
					const timeDepositContract3 = new ethers.Contract(PLSXVault, contractAbi, provider)
				const depositFee3 = await timeDepositContract3.depositFee()
				const fundingFee3 = await timeDepositContract3.fundingRate()
				
					const timeDepositContract4 = new ethers.Contract(INCVault, contractAbi, provider)
				const depositFee4 = await timeDepositContract4.depositFee()
				const fundingFee4 = await timeDepositContract4.fundingRate()
				
				const timeDepositContract5 = new ethers.Contract(hexVault, contractAbi, provider)
				const depositFee5 = await timeDepositContract5.depositFee()
				const fundingFee5 = await timeDepositContract5.fundingRate()
				
				let do2 = false
				let do3 = false 
				let do4 = false
				let do5 = false
				
				if(BigInt(depositFee) != BigInt(depositFee2) || BigInt(fundingFee) != BigInt(fundingFee2)) {
					
					do2 = true
					/*if(BigInt(depositFee) != BigInt(depositFee2)) {
						console.log("biginta work")
					} else {
							console.log("biginta notwork")
					}
						console.log(depositFee)
		
					console.log(fundingFee)
	
					console.log(depositFee2)
				console.log(fundingFee2)
				*/
				}
				if(BigInt(depositFee) != BigInt(depositFee3) || BigInt(fundingFee) != BigInt(fundingFee3)) {
					do3 = true
				}
				if(BigInt(depositFee) != BigInt(depositFee4) || BigInt(fundingFee) != BigInt(fundingFee4)) {
					do4 = true
				}
				if(BigInt(depositFee) != BigInt(depositFee5) || BigInt(fundingFee) != BigInt(fundingFee5)){
					do5 = true
				}
				
					console.log(do2)
					console.log(do3)
					console.log(do4)
					console.log(do5)
					
				/*
				console.log(do2)
				console.log(depositFee2)
				console.log(fundingFee2)
				
				console.log(do3)
				console.log(depositFee3)
				console.log(fundingFee3)
				
				
				console.log(do4)
				console.log(depositFee4)
				console.log(fundingFee4)
				
				console.log(do5)
				console.log(depositFee5)
				console.log(fundingFee5)
				*/
				if(do2 || do3 || do4 || do5) {
					updateFees2(do2,do3,do4,do5)
				} else {
					//nothing to do already synced
					Swal.fire({
						  title: '<strong>Fees seem to be up to date!',
						  html: 'There is nothing to do! Vault fees seem to be up to date</br></br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				}
				
	}
	
	
	async function updateFees2(do1, do2, do3, do4) {
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to update the fees...</br></br> You must confirm a transaction for each vault separately!<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			if(do1) {
			  const transaction1 = new ethers.Contract(plsVault, vaultABI, provider.getSigner());
			  let doIt1 = await transaction1.updateFees();
			}
			
			if(do2) {
			  const transaction2 = new ethers.Contract(PLSXVault, vaultABI, provider.getSigner());
			  let doIt2 = await transaction2.updateFees();
			}
			
			if(do3) {
			  
			  const transaction3 = new ethers.Contract(INCVault, vaultABI, provider.getSigner());
			  let doIt3 = await transaction3.updateFees();
			}
			
			if(do4) {
			  
			  const transaction4 = new ethers.Contract(hexVault, vaultABI, provider.getSigner());
			  let doIt4 = await transaction4.updateFees();
			}
			 
			 
				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Confirm the transaction(s) to update the fees!',
						  html: 'Confirm transactions in wallet to update the fees!!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						sleep(8000).then(() => {  
							reduceRewardsActual()
						})
				})
				} catch(e) {
							errorMessage(e)
						  }
	}
	
	
		async function reduceRewardsReal() {
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to regulate reward reduction...<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			  const transaction = new ethers.Contract(farmContract, farmABI, provider.getSigner());
			  let doIt = await transaction.reduceMaxPulseAllocation();
			  await doIt.wait();
			  
				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Maximum allowed rewards have been reduced!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						sleep(8000).then(() => {  
							reduceRewardsActual()
						})
				})
				} catch(e) {
							errorMessage(e)
						  }
	}
	async function activateRewardReduction(contractAddress) {
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to regulate reward reduction...<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
			  const transaction = new ethers.Contract(contractAddress, farmABI, provider.getSigner());
			  let doIt = await transaction.enforceRewardReduction(true);
			  await doIt.wait();
			  
				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Transaction confirmed!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Reward Reduction has been enforced!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				} catch(e) {
							errorMessage(e)
						  }
	}
	
	
	async function collectFees() {
		Swal.fire({
				  title: '<strong>Collect Mining Fees</strong>',
				  html: `
				  <button onclick="harvestPLS2()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect PLS fees</button></a>
				  <button onclick="harvestPLSX2()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect PLSX fees</button></a>
				  <button onclick="harvestINC2()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect INC fees</button></a>
				  <button onclick="harvestHEX2()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect HEX fees</button></a>
				  <button onclick="harvestATROPA()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect ATROPA fees</button></a>
				  <button onclick="harvestPDAI()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect pDAI fees</button></a>
				  <button onclick="harvestSOLIDX()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect SOLIDX fees</button></a>
				  
				  <button onclick="harvestHOA()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect HOA fees</button></a>
				  `,
				  showCancelButton: false,
				  showConfirmButton: false
				})
	}
	
	
	async function collectFeesOld() {
		//to-do: get list of addresses, check available rewards... Display all available
		// display how much is available where 
		// then user selects which vault to harvest from and the minimum fee (so that it's viable)
		// and then transactioon is initiated collectCommission
		
		//must create proxy contract...
		// that contract does
		// 1.) loops through all users and gets their nr of stakes 
		// then loops through viewStakeEarnings for all stakes 
		// that's it... and contract returns results
	Swal.fire({
				  title: '<strong>Checking Eligible Fees...</strong>',
				  html: '<div id="fillContent"></div><div id="displayedContent"> Checking available fees accross all miners. This might take a while...<div class="pixel-loader"></div></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
				
				
				
				let plsMiners
				let plsxMiners
				let incMiners
				let hexMiners
				let atropaMiners 
				let pdaiMiners
				let solidxMiners
				
				let fundingFee
				
			fetch(apiURL+'api/miningFees.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
		let x = JSON.parse(html)
			fundingFee = Number(x[1]) / 1000000
		})
				
				 await fetch(apiURL + 'api/depositPls.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        plsMiners = html
    })
	
	
	
	 await fetch(apiURL + 'api/depositPlsx.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        plsxMiners = html
    })
	
	await fetch(apiURL + 'api/depositInc.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        incMiners = html
    })
	
	await fetch(apiURL + 'api/depositHex.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        hexMiners = html
    })
	
	await fetch(apiURL + 'api/depositAtropa.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        atropaMiners = html
    })
	
	await fetch(apiURL + 'api/depositPdai.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        pdaiMiners = html
    })
	await fetch(apiURL + 'api/depositSolidx.txt', {
        cache: "no-cache"
    }).then(function(response) {
        return response.text();
    }).then(function(html) {
        solidxMiners = html
    })
	
	
	
	let lines = plsMiners.split('\n')
	let nrOfStakes = []
	for(let i=0; i< lines.length-1; i++) {
		//get nr of stakes for each address
		lines[i] = lines[i].split(',')
		lines[i] = lines[i][0]
		console.log(lines[i])
		nrOfStakes.push(await checkNrOfStakes(lines[i] , plsVault))
	}
	
	
	lines = lines.join("\n")
	lines = removeDuplicateLinesFromText(lines)
	allstakes = []
	
	//console.log(nrOfStakes)
	
	let totalFees = 0
	let latestFeeDate = await getLatestFeeUpdate(plsVault)
	let dateToUse = 0
	for(let i=0; i< 5; i++) {
		//get nr of stakes for each address
		let reward
		for(let j=0; j < nrOfStakes[i]; j++) {
			reward = await userInfo(lines[i], j, plsVault)
			//if after last fee update, use that number
			if(latestFeeDate > Number(reward[3])) {
				dateToUse = latestFeeDate
			} else {
				dateToUse = Number(reward[3])
			}
			reward = Number(reward[0]) * ((((Date.now()/1000)) - dateToUse) / 3600) * fundingFee
			allstakes.push(lines[i], j, reward)
			totalFees+= reward
			
		}
		
	}
	
	const myDiv = document.getElementById("fillContent");
	myDiv.innerHTML = Math.round(totalFees/10**18).toLocaleString() + '<strong> PLS</strong> <input id="input1" autocapitalize="off" class="swal2-input" placeholder="minimum" type="text" style="display: inline; max-width: 100px;"></input> <button onclick="harvestPLS()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect Fees</button></a>';

	
	/*
	let lines2 = plsxMiners.split('\n')
	let nrOfStakes2 = []
	for(let i=0; i< lines2.length-1; i++) {
		//get nr of stakes for each address
		nrOfStakes2.push(await checkNrOfStakes(lines2[i] , PLSXVault))
	}
	
	allstakes2 = []
	
	//console.log(nrOfStakes)
	
	let totalFees2 = 0
	let latestFeeDate2 = await getLatestFeeUpdate(PLSXVault)
	let dateToUse2 = 0
	for(let i=0; i< lines2.length-1; i++) {
		//get nr of stakes for each address
		let reward2
		for(let j=0; j < nrOfStakes2[i]; j++) {
			reward = await userInfo(lines2[i], j, PLSXVault)
			//if after last fee update, use that number
			if(latestFeeDate2 > Number(reward[3])) {
				dateToUse2 = latestFeeDate2
			} else {
				dateToUse2 = Number(reward[3])
			}
			reward = Number(reward[0]) * ((((Date.now()/1000)) - dateToUse2) / 3600) * fundingFee
			allstakes2.push(lines2[i], j, reward)
			totalFees2+= reward
			
		}
		
	}
	
	myDiv.innerHTML+= "</br>" + Math.round(totalFees2/10**18).toLocaleString() + '<strong> PLSX</strong> <input id="input2" autocapitalize="off" class="swal2-input" placeholder="minimum" type="text" style="display: inline; max-width: 100px;"></input> <button onclick="harvestPLSX()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect Fees</button></a>';


let lines3 = incMiners.split('\n')
	let nrOfStakes3 = []
	for(let i=0; i< lines3.length-1; i++) {
		//get nr of stakes for each address
		nrOfStakes3.push(await checkNrOfStakes(lines3[i] , INCVault))
	}
	
	allstakes3 = []
	
	//console.log(nrOfStakes)
	
	let totalFees3 = 0
	let latestFeeDate3 = await getLatestFeeUpdate(INCVault)
	let dateToUse3 = 0
	for(let i=0; i< lines3.length-1; i++) {
		//get nr of stakes for each address
		let reward3
		for(let j=0; j < nrOfStakes3[i]; j++) {
			reward = await userInfo(lines3[i], j, INCVault)
			//if after last fee update, use that number
			if(latestFeeDate3 > Number(reward[3])) {
				dateToUse3 = latestFeeDate3
			} else {
				dateToUse3 = Number(reward[3])
			}
			reward = Number(reward[0]) * ((((Date.now()/1000)) - dateToUse3) / 3600) * fundingFee
			allstakes3.push(lines3[i], j, reward)
			totalFees3+= reward
			
		}
		
	}
	
	myDiv.innerHTML+= "</br>" + Math.round(totalFees3/10**18).toLocaleString() + '<strong> INC</strong> <input id="input3" autocapitalize="off" class="swal2-input" placeholder="minimum" type="text" style="display: inline; max-width: 100px;"></input> <button onclick="harvestINC()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect Fees</button></a>';




let lines4 = hexMiners.split('\n')
	let nrOfStakes4 = []
	for(let i=0; i< lines4.length-1; i++) {
		//get nr of stakes for each address
		nrOfStakes4.push(await checkNrOfStakes(lines4[i] , hexVault))
	}
	
	allstakes4 = []
	
	//console.log(nrOfStakes)
	
	let totalFees4 = 0
	let latestFeeDate4 = await getLatestFeeUpdate(INCVault)
	let dateToUse4 = 0
	for(let i=0; i< lines4.length-1; i++) {
		//get nr of stakes for each address
		let reward4
		for(let j=0; j < nrOfStakes4[i]; j++) {
			reward = await userInfo(lines4[i], j, hexVault)
			//if after last fee update, use that number
			if(latestFeeDate4 > Number(reward[3])) {
				dateToUse4 = latestFeeDate4
			} else {
				dateToUse4 = Number(reward[3])
			}
			reward = Number(reward[0]) * ((((Date.now()/1000)) - dateToUse4) / 3600) * fundingFee
			allstakes4.push(lines4[i], j, reward)
			totalFees4+= reward
			
		}
		
	}
	
	myDiv.innerHTML+= "</br>" + Math.round(totalFees4/10**8).toLocaleString() + '<strong> HEX</strong> <input id="input4" autocapitalize="off" class="swal2-input" placeholder="minimum" type="text" style="display: inline; max-width: 100px;"></input> <button onclick="harvestHEX()" class="swal2-confirm swal2-styled" style="display: inline-block;"> Collect Fees</button></a>';
*/

const myDiv2 = document.getElementById("displayedContent");
	myDiv2.innerHTML = "The fees available for collection are shown above. This action can collect fees from multiple miners at once. The MINIMUM is the threshold above which the transaction will be harvested. This is useful so you can only harvest miners where sufficient fees can be collected. Otherwise your transaction fee might exceed the value of the fees collected."

				
/*	Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 	'Create Stake To:</strong><select class="swal2-select" style="display: flex;" name="useDefault" id="useDefault" onchange="displayCustom(value);">   <option value="0">PulseChain (PLS)</option><option value="1">PulseX (PLSX)</option><option value="2">Incentive (INC)</option><option value="3">Hex (Hex)</option></select>',
					showCancelButton: false,
				  showConfirmButton: false
				})
				*/
	}
	
	function removeDuplicateLinesFromText(text) {
  const lines = text.split('\n'); // Split the text into lines based on newline characters
  const uniqueLines = new Set(lines); // Create a Set from the lines to remove duplicates
  return Array.from(uniqueLines).join('\n'); // Join the unique lines back into a text format
}


async function getLatestFeeUpdate(daContract) {
				const contractAbi = [
				  "function lastFundingChangeTimestamp() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(daContract, contractAbi, provider)
				const userShares = await timeDepositContract.lastFundingChangeTimestamp()
				return userShares;
			}


async function checkNrOfStakes(userAddress, contractAddress) {
    const contractAbi2 = [
        "function getNrOfStakes(address _user) external view returns (uint256)"
    ];

    const OINKContract2 = new ethers.Contract(contractAddress, contractAbi2, provider);
    const balance2 = Number(await OINKContract2.getNrOfStakes(userAddress));
    return balance2;
}

async function userInfo(userAddress, stakeId, contractAddress) {
    const contractAbi2 = [
        "function userInfo(address, uint256) external view returns (uint256, uint256, uint256, uint256)"
    ];
    const OINKContract2 = new ethers.Contract(contractAddress, contractAbi2, provider);
    const balance2 = await OINKContract2.userInfo(userAddress, stakeId);
	//console.log(balance2)
    return balance2;
}

async function harvestPLS2() {
	//get addresses 
	//set max amount per tx 
	// trigger all txes at once..that's it 
	
	
}

async function fetchLogFile(filename) {
    const response = await fetch(filename);
    const text = await response.text();
    return text.split('\n').filter(Boolean).map(line => {
        const [user, amount, time] = line.split(',');
        return { user, amount: parseFloat(amount), time: parseInt(time) };
    });
}

// Calculate fees
async function harvestPLS2() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositPls.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawPls.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feePls.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. </br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(plsVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
				
				document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}

async function harvestPLSX2() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositPlsx.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawPlsx.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feePlsx.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. You can close this window once transactions are triggered.</br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(PLSXVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
				
						document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}

async function harvestINC2() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositInc.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawInc.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feeInc.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. You can close this window once transactions are triggered.</br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(INCVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
						document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}

async function harvestHEX2() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositHex.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawHex.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feeHex.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. You can close this window once transactions are triggered.</br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(hexVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
				
						document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}

async function harvestATROPA() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositAtropa.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawAtropa.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feeAtropa.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. You can close this window once transactions are triggered.</br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(ATROPAVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
						document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}

async function harvestPDAI() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositPdai.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawPdai.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feePdai.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. You can close this window once transactions are triggered.</br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(PDAIVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
						document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}

async function harvestSOLIDX() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositSolidx.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawSolidx.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feeSolidx.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. You can close this window once transactions are triggered.</br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(SOLIDXVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
						document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}


async function harvestHOA() {
	
    try {
        // Fetch log files
        const [deposits, withdrawals, collectedFees] = await Promise.all([
            fetchLogFile('https://Piggy Bank.org/api/depositHoa.txt'),
            fetchLogFile('https://Piggy Bank.org/api/withdrawHoa.txt'),
            fetchLogFile('https://Piggy Bank.org/api/feeHoa.txt')
        ]);

        const users = {};
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Process deposits
        for (const deposit of deposits) {
            const userKey = deposit.user.toLowerCase(); // Case-insensitive user key
            if (!users[userKey]) {
                users[userKey] = { stakes: {}, totalOwed: 0, totalPaid: 0, displayName: deposit.user };
            }
            const stakeId = `${userKey}-${deposit.time}`; // Create a unique stake ID
            users[userKey].stakes[stakeId] = { amount: deposit.amount, time: deposit.time };
        }

        // Process withdrawals
        for (const withdrawal of withdrawals) {
            const userKey = withdrawal.user.toLowerCase();
            const user = users[userKey];
            if (user && user.stakes[withdrawal.amount]) { // Use amount as stakeId
                delete user.stakes[withdrawal.amount];
            }
        }

        // Calculate owed fees
        for (const userKey in users) {
            for (const stakeId in users[userKey].stakes) {
                const stake = users[userKey].stakes[stakeId];
                const hoursSinceDeposit = (currentTime - stake.time) / 3600;
                users[userKey].totalOwed += stake.amount * hoursSinceDeposit * 0.0002;
            }
        }

        // Process collected fees
        for (const fee of collectedFees) {
            const userKey = fee.user.toLowerCase();
            if (users[userKey]) {
                users[userKey].totalPaid += fee.amount;
            }
        }

        // Calculate final owed amount and filter users
        let usersOwingFees = Object.values(users)
            .filter(userData => Object.keys(userData.stakes).length > 0)
            .map(userData => ({
                user: userData.displayName,
                totalOwed: userData.totalOwed,
                totalPaid: userData.totalPaid,
                finalOwed: Math.max(0, userData.totalOwed - userData.totalPaid)
            }))
            .filter(userData => userData.finalOwed > 0)
            .sort((a, b) => b.finalOwed - a.finalOwed); // Sort by finalOwed, descending

       // return usersOwingFees;
		//trigger TXES here 
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Several transactions might be required to harvest accross all users. Confirm transactions in wallet to harvest fees. You can close this window once transactions are triggered.</br><div id="showNo" class="pixel-loader"></div>',
				  showCancelButton: true,
				  showConfirmButton: false
				})
				
				
				let transaction
				let doIt 
				let maxPerTx = 50
				usersOwingFees = getUniqueUsersSorted(usersOwingFees)
				for(i=0 ; i < Math.ceil(usersOwingFees.length / maxPerTx); i++) { 
					const transaction = new ethers.Contract(hoaVault, vaultABI, provider.getSigner());
					
					let newBatch = usersOwingFees.slice(i*maxPerTx, i*maxPerTx + maxPerTx-1)
					//first iteration === from 
					console.log("harvesting...")
					console.log(newBatch)
					let doIt = transaction.collectCommissionAuto(newBatch);
				}
				
						document.getElementById("showNo").style= "display: none;"
				triggerConfetti2();
		
    } catch (error) {
        console.log("Error calculating fees:", error);
        return null;
    }
}


// Function to get unique users who owe fees, sorted by amount owed
function getUniqueUsersSorted(usersOwingFees) {
    return usersOwingFees.map(userData => userData.user);
}

// Function to calculate total owed
function calculateTotalOwed(usersOwingFees) {
    return usersOwingFees.reduce((total, userData) => total + userData.finalOwed, 0);
}



async function harvestPLS() {
	let minimum = Number(document.getElementById("input1").value)
	console.log(minimum)
	let stakesToHarvest = []
	console.log(allstakes)
	let latestStaker = ""
	let _stakers = []
	let stakerId = 0
	let _stakeIDs = []
	let tempStake = []
	let tempStakeCount = 0
	let allStakeCount = 0;
	for(i=0; i< allstakes.length/3; i++) {
		console.log(Number(allstakes[i*3+2]))
		console.log(Number(allstakes[i*3+2]) / 10**18)
		console.log(minimum)
		if(Number(allstakes[i*3+2]) / 10**18 >= minimum) {
			allStakeCount++
			if(latestStaker != allstakes[i*3]) {
				if(i > 0) {
					_stakeIDs.push(tempStake)
				}
				tempStake = [0]
				tempStakeCount = 0
				_stakers.push(allstakes[i*3])
				console.log("inserting staker" + allstakes[i*3])
				console.log("his profitable stake")
				console.log(allstakes)
				stakerId++
			} else {
				tempStakeCount++
				tempStake.push(tempStakeCount)
			}
			stakesToHarvest.push(allstakes[i], allstakes[i+1] , allstakes[i+2] )
			latestStaker = allstakes[i*3]
			//pushing data for last one 
			if( i == allstakes.length/3 ) {
				_stakeIDs.push(tempStake)
			}
		}
	}
	console.log(stakesToHarvest)
	console.log(_stakers)
	console.log(_stakeIDs)

// JUST LOOP THROUGH STAKES TO HARVEST to create stakes?

	let totalTransactions = 0
	let currentTxes = 0;
	let requiredBatches = 1;
	for(i=0; i< stakesToHarvest.length/3; i++) {
		if(currentTxes + _stakeIDs[i].length > maximumStakesHarvestAtOnce) {
			if(_stakeIDs[i].length > maximumStakesHarvestAtOnce) {
				throw new Error("Something went wrong! Staker has too many stakes!");
			}
			requiredBatches++
			currentTxes = 0
		} else {
			currentTxes+= _stakeIDs[i].length
		}
	}
	
	console.log("required batches: " + requiredBatches)
	
	let alreadyHarvested = 0
	let atStaker = -1
		for(i=0; i < requiredBatches; i++) {
	currentTxes = 0;
	let newStakers = []
	let txStakeIDs = []
	let counter = 0;
	let lastStakerNow = ""
	Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to collect the fees...</br></br>This is transaction: <strong>'+(i+1)+' / '+requiredBatches+'</strong></br>Total harvests required: <strong>'+stakesToHarvest.length+'</strong> </br>Maximum harvests per transaction: <strong>'+maximumStakesHarvestAtOnce+'</strong></br><div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
				
				await sleep(1000);
			
			  try {
				  
				  console.log("yay we here")
				  console.log(_stakeIDs)
				  
				  while(counter < maximumStakesHarvestAtOnce) {
					if(counter + _stakeIDs[counter] >= maximumStakesHarvestAtOnce) { break; }
					if(lastStakerNow == stakesToHarvest[counter*3]) {
						newStakers.push(stakesToHarvest[counter*3])
						atStaker++
						console.log(atStaker)
						let currentArray = []
						for(j=0; j < _stakeIDs[atStaker].length; j++) {
							currentArray.push(_stakeIDs[atStaker][j])
							counter++;
						}
						txStakeIDs.push(currentArray)
						
					}
					
				  }
				  // accumulate HERE the stakes and how many
				  console.log("do we get there")
				  console.log(newStakers)
				  console.log(txStakeIDs)
			  const transaction = new ethers.Contract(plsVault, vaultABI, provider.getSigner());
			  let doIt = await transaction.collectCommission(newStakers, txStakeIDs);
			  await doIt.wait();
			  

			
					triggerConfetti2();
				
				
				
				} catch(e) {
			errorMessage(e)
		}
	
		
		
		}
		
	}

	async function endBoost(contractAddress) {
		Swal.fire({
				  title: '<strong>Sign in wallet to finalize</strong>',
				  html: 'Please confirm transaction in wallet to end the reward boost event..<div class="pixel-loader"></div>',
				  showCancelButton: false,
				  showConfirmButton: false
				})
			  try {
				  console.log(contractAddress)
			  const transaction = new ethers.Contract(contractAddress, rewardBoostContractABI, provider.getSigner());
			  let doIt = await transaction.endFibonaccening();
			  await doIt.wait();
			  

				
					   Swal.close();
				sleep(610).then(() => {  
					triggerConfetti2();
				})  
				
				
				sleep(2100).then(() => {  
					Swal.fire({
						  title: '<strong>Hoorah! Reward Boost Event has ended!',
						  html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br>Reward Boost event has ended!</br> <small>You can close this window.</small>',
						  icon: 'success',
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
				})
				
				} catch(e) {
			errorMessage(e)
		}
	}

	// get totalCreditREwards
	
	async function getPendingReferralRewards1() {
				const contractAbi = [
				  "function totalCreditRewards() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(chefContract, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.totalCreditRewards())
				const userShares2 = Number(userShares / BigInt(10**18))
				return userShares2;
			}
			
			async function getPendingReferralRewards2() {
				const contractAbi = [
				  "function lastTotalCredit() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(governingContract, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.lastTotalCredit())
				const userShares2 = Number(userShares / BigInt(10**18))
				return userShares2;
			}
			
			
			
			async function getPendingIncRewards(poolID, contractAddy) {
				const contractAbi = [
				  "function pendingInc(uint256,address) public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(incMasterchef, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.pendingInc(poolID,contractAddy))
				return userShares;
			}
			
			
				async function getPendingRewards() {
				const contractAbi = [
				  "function pendingHarvestRewards() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(governingContract, contractAbi, provider)
				const userShares = BigInt(await timeDepositContract.pendingHarvestRewards())
				const userShares2 = Number(userShares / BigInt(10**18))
				return userShares2;
			}
			

				
				
				async function getEventStatus() {
				const contractAbi = [
				  "function eventFibonacceningActive() public view returns (bool)"
				];
				const timeDepositContract = new ethers.Contract(governingContract, contractAbi, provider)
				const userShares = await timeDepositContract.eventFibonacceningActive()
				return userShares;
			}
			
			async function getFarmAddress() {
				const contractAbi = [
				  "function farmContract() public view returns (address)"
				];
				const timeDepositContract = new ethers.Contract(governingContract, contractAbi, provider)
				const userShares = await timeDepositContract.farmContract()
				return userShares;
			}
			

			async function checkIfOverMax() {
				const contractAbi = [
				  "function percentageAllocatedToPulseEcosystem() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(farmContract, contractAbi, provider)
				const userShares = await timeDepositContract.percentageAllocatedToPulseEcosystem()
				
				const contractAbi2 = [
				  "function maxPulseEcoTotalAllocation() public view returns (uint256)"
				];
				const timeDepositContract2 = new ethers.Contract(farmContract, contractAbi2, provider)
				const userShares2 = await timeDepositContract2.maxPulseEcoTotalAllocation()
				
				if(userShares > userShares2) {
					return true
				}
				return false
			}
			
			
			async function getEventID(daContract) {
				const contractAbi = [
				  "function fibonacceningActiveID() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(daContract, contractAbi, provider)
				const userShares = await timeDepositContract.fibonacceningActiveID()
				return userShares;
			}
			
			async function eventDatar(daContract, eventId) {
				const contractAbi = [
				  "function fibonacceningProposals(uint256) public view returns (bool, uint256, uint256, uint256, uint256, uint256, uint256, uint256)"
				];
				const timeDepositContract = new ethers.Contract(daContract, contractAbi, provider)
				const userShares = await timeDepositContract.fibonacceningProposals(eventId)
				return userShares;
			}
			
			async function getActivedBlock(daContract) {
				const contractAbi = [
				  "function fibonacceningActivatedBlock() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(daContract, contractAbi, provider)
				const userShares = await timeDepositContract.fibonacceningActivatedBlock()
				return userShares;
			}
			
			async function getReductionStatus(daFarmContract) {
				const contractAbi = [
				  "function isReductionEnforced() public view returns (bool)"
				];
				const timeDepositContract = new ethers.Contract(daFarmContract, contractAbi, provider)
				const userShares = await timeDepositContract.isReductionEnforced()
				return userShares;
			}
				
				async function lastReduce() {
				const contractAbi = [
				  "function lastReducePulseAllocation() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(farmContract, contractAbi, provider)
				const userShares = await timeDepositContract.lastReducePulseAllocation()
				return userShares;
			}
			async function currentMaxAlloc() {
				const contractAbi = [
				  "function maxPulseEcoTotalAllocation() public view returns (uint256)"
				];
				const timeDepositContract = new ethers.Contract(farmContract, contractAbi, provider)
				const userShares = await timeDepositContract.maxPulseEcoTotalAllocation()
				return userShares;
			}
				



		
	   function sleep(milliseconds) {  
      return new Promise(resolve => setTimeout(resolve, milliseconds));  
   }  
   
 
		



async function loadBalancios() {
    //get totalSupply() and alreadyMinted == to mint XD available 
    let total = await getSupply()
    let already = await getAlreadyMinted()

    let toMint = total / 10 - already


    let datas = await getRewards()
    let reward = Number(BigInt(datas[0]) / BigInt(10 ** 18));
    let ourStake = Number(BigInt(datas[1]) / BigInt(10 ** 18));
    let totals = Number(BigInt(datas[2]) / BigInt(10 ** 18));

    let xvmcShare = (ourStake / totals * 100)

    document.getElementById("availableXD").innerHTML = "Share in the network: <strong>" + xvmcShare.toFixed(2) + "%</strong></br>Available Tokens to Mint: <strong>" + Math.round(toMint).toLocaleString() + " XD</strong>"

    document.getElementById("availableMATIC").innerHTML = "Available for Harvest: <strong>" + reward.toLocaleString() + " MATIC</strong>"
}





async function buyback() {

    loadBuyBackContractBalances();
    Swal.fire({
        title: '<strong>Buy-Back OINK</strong>',
        html: 'This contract allows you to <strong>BUY-BACK</strong> '+tokenTicker+' from market using PLS inside the contract.</br></br>Tokens can also be sent from treasury to this contract in order to perform the buyback.</br></br><div id="contractHoldings">Loading contract balances... <div class="pixel-loader"></div></div></br></br><button class="swal2-confirm swal2-styled" style="display: inline-block; background-color: rgb(221, 51, 51);" onclick="buybackNburn(\'PLS\');"> Buy-Back '+tokenTicker+' with PLS!</button>',
        icon: 'info',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
}
var balanceM
var USDCam
var WETHam

//get pls, plsx, inc, hex balances
async function loadBuyBackContractBalances() {
    await auth()
	/*
    USDCam = await bOfUSDC("0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", ourContract)
	USDCam = Number(USDCam) / 10**6
    WETHam = await bOfWETH("0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", ourContract)
	WETHam = Number(WETHam) / 10**18
	*/

    await provider.getBalance(ourContract).then((reselt) => {
        // convert a currency unit from wei to ether
        balanceM = ethers.utils.formatUnits(reselt, "ether")
    })
	
	let plsxBalance = await bOfWETH(plsxContract, ourContract)
	let hexBalance = await bOfWETH(hexContract, ourContract)
	let incBalance = await bOfWETH(incContract, ourContract)
	
	let displayPlsx
	let displayInc 
	let displayHex
	
	if(plsxBalance >= 10**18) { displayPlsx = Math.round((Number(plsxBalance) / 10**18)) + ' <img src="img/plsx.png" width="20px" height="20px"> PLSX <button class=\"swal2-confirm swal2-styled\" onclick="buybackNburn(\'PLSX\')">Swap for PLS</button></a></br>' } else { displayPlsx = '0 <img src="img/plsx.png" width="20px" height="20px"> PLSX</br>'}
	if(incBalance > 0) { displayInc = ((Number(incBalance) / 10**18)).toFixed(3) + ' <img src="img/inc.png" width="20px" height="20px"> INC  <button class=\"swal2-confirm swal2-styled\" onclick="buybackNburn(\'INC\')">Swap for PLS</button></a></br>' } else { displayInc = '0 <img src="img/inc.png" width="20px" height="20px"> INC</br>' }
	if(hexBalance >= 10**8) { displayHex = Math.round((Number(hexBalance) / 10**8)) + ' <img src="img/hex.png" width="20px" height="20px"> HEX  <button class=\"swal2-confirm swal2-styled\" onclick="buybackNburn(\'HEX\')">Swap for PLS</button></a></br>' } else { displayHex = '0 <img src="img/hex.png" width="20px" height="20px"> HEX</br>' }

    document.getElementById("contractHoldings").innerHTML = `<strong>Tokens in contract:</strong></br>(<small><small>` + ourContract + `</small></small>)<strong></br></br>` + Number(balanceM).toFixed(2) + ` <img src="img/pls.png" width="20px" height="20px"> PLS</br></strong>
	
    ` + displayPlsx + `
	` + displayInc + `
	
	` + displayHex
	
	
}

async function bOfWETH(contractAddress, wallet) {
    const contractAbi = [
        "function balanceOf(address account) external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = await OINKContract.balanceOf(wallet);
    return balance;
}

async function bOfUSDC(contractAddress, wallet) {
    const contractAbi = [
        "function balanceOf(address account) external view returns (uint256)"
    ];
    const OINKContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = (await OINKContract.balanceOf(wallet));
    return balance;
}

async function buybackNburn(tokenToSwap) {
	let thiTitle
	let thiContent
	if(tokenToSwap == "PLS") {
		thiTitle = '<strong>Buy-Back OINK with PLS</strong>'
		thiContent = 'To perform the Buy-Back of OINK, please confirm the transaction in wallet...</br></br>PLS balance will be swapped for OINK and accumulated tokens sent to the treasury wallet.<div class="pixel-loader"></div>'
	} else {
		thiTitle = '<strong>Swap '+tokenToSwap+' for PLS</strong>'
		thiContent = 'To swap tokens to PLS, please confirm the transaction in wallet...</br></br>Tokens will be swapped for PLS. Afterwards you can swap PLS for OINK.<div class="pixel-loader"></div>'
	}
    Swal.fire({
        title: thiTitle,
        html: thiContent,
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
    })

		if(tokenToSwap == "PLS") {
        try {
            const transaction = new ethers.Contract(buybackContract, buybackABI, provider.getSigner());
            let doIt = await transaction.buyWithPLS();
            await doIt.wait();


            Swal.close();
            sleep(610).then(() => {
                triggerConfetti2();
            })


            sleep(2100).then(() => {
                Swal.fire({
                    title: '<strong>Hoorah! Transaction confirmed!',
                    html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br> <small>You can close this window.</small>',
                    icon: 'success',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            })

        } catch (e) {
            errorMessage(e)
        }
    } else if(tokenToSwap == "PLSX") {
try {
	
	let amountToConvert = await bOfWETH(plsxContract, buybackContract)
            const transaction = new ethers.Contract(buybackContract, buybackABI, provider.getSigner());
            let doIt = await transaction.swapTokenForPLS(plsxContract, amountToConvert);
            await doIt.wait();


            Swal.close();
            sleep(610).then(() => {
                triggerConfetti2();
            })


            sleep(2100).then(() => {
                Swal.fire({
                    title: '<strong>Hoorah! Transaction confirmed!',
                    html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br> <small>You can close this window.</small>',
                    icon: 'success',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            })

        } catch (e) {
            errorMessage(e)
        }

	} else if(tokenToSwap == "INC") {
try {
let amountToConvert = await bOfWETH(incContract, buybackContract)
   const transaction = new ethers.Contract(buybackContract, buybackABI, provider.getSigner());
            let doIt = await transaction.swapTokenForPLS(incContract, amountToConvert);
            await doIt.wait();


            Swal.close();
            sleep(610).then(() => {
                triggerConfetti2();
            })


            sleep(2100).then(() => {
                Swal.fire({
                    title: '<strong>Hoorah! Transaction confirmed!',
                    html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br> <small>You can close this window.</small>',
                    icon: 'success',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            })

        } catch (e) {
            errorMessage(e)
        }
		
		
		
} else if(tokenToSwap == "HEX") {
	try {
let amountToConvert = await bOfWETH(hexContract, buybackContract)

   const transaction = new ethers.Contract(buybackContract, buybackABI, provider.getSigner());
            let doIt = await transaction.swapTokenForPLS(hexContract, amountToConvert);
            await doIt.wait();


            Swal.close();
            sleep(610).then(() => {
                triggerConfetti2();
            })


            sleep(2100).then(() => {
                Swal.fire({
                    title: '<strong>Hoorah! Transaction confirmed!',
                    html: '<h2 class="swal2-title" id="swal2-title" style="display: block;"><strong>Good Job.</strong></h2></br></br> <small>You can close this window.</small>',
                    icon: 'success',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            })

        } catch (e) {
            errorMessage(e)
        }
		
		
} else	{
        Swal.fire({
            title: '<strong>Empty Contract Balance</strong>',
            html: 'Contract has currently no token balance to perform the Buyback.',
            icon: 'error',
            showCancelButton: true,
            showConfirmButton: false
        })
    }
}
		  