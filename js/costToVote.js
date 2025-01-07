	var ABI = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newGovernor","type":"address"}],"name":"ChangeGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedMinDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"DelayBeforeEnforce","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"EnforceProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"address","name":"forPool","type":"address"},{"indexed":false,"internalType":"uint256","name":"newBonus","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateRolloverBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCallFee","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateSetCallFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedMinDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeMinDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delayBetween","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"ProposeSetGrandParameters","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedMinDeposit","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeSetMinThresholdFibonaccening","type":"event"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"callFeeProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"delayProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeDelayBeforeEnforceProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeProposalRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetGrandParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetMinThresholdFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"grandSettingProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue1","type":"uint256"},{"internalType":"uint256","name":"proposedValue2","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newDelay","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateDelayBeforeEnforceProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"address","name":"_forPoolAddress","type":"address"},{"internalType":"uint256","name":"_newBonus","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateProposalRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newCallFee","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateSetCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newMinDeposit","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateSetMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minDepositProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minThresholdFibonacceningProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposalLengths","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"_delayBetween","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"proposeSetGrandParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newMinimum","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeSetMinThresholdFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rolloverBonuses","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"address","name":"poolAddress","type":"address"},{"internalType":"uint256","name":"newBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syncCreditContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoDelayBeforeEnforceProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoProposalRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetGrandParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetMinThresholdFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteDelayBeforeEnforceProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteDelayBeforeEnforceProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteProposalRolloverBonusN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteProposalRolloverBonusY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetCallFeeN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetCallFeeY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetGrandParametersN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetGrandParametersY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetMinDepositN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetMinDepositY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetMinThresholdFibonacceningN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetMinThresholdFibonacceningY","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var farmsABI = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"},{"internalType":"address","name":"_masterchef","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"inputs":[{"internalType":"uint256","name":"_lp","type":"uint256"},{"internalType":"uint256","name":"_nft","type":"uint256"},{"internalType":"uint256","name":"_maxPulse","type":"uint256"},{"internalType":"uint256","name":"_maxPulseTotal","type":"uint256"}],"name":"changeMaxAllocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"EnforceProposal","type":"event"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint16","name":"depositFee","type":"uint16"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAllocation","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"depositFee","type":"uint16"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateFarmProposal","type":"event"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_isBurn","type":"bool"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedTax","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovTax","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"bool","name":"isBurn","type":"bool"},{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeGovernorTransfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"farmMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"memeMultiplier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeRewardReduction","type":"event"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"_type","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeVault","type":"event"},{"inputs":[{"internalType":"uint256[]","name":"_poolId","type":"uint256[]"}],"name":"rebalancePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncCreditContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"updateFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoFarmProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovernorTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoGovTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteFarmProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteFarmProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovernorTransferN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovernorTransferY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGovTaxN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGovTaxY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteVaultN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteVaultY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creditContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"governorTransferProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"bool","name":"isBurn","type":"bool"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"govTaxProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isReductionEnforced","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxLpAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNftAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPulseEcoAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPulseEcoTotalAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposalFarmUpdate","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"poolid","type":"uint256"},{"internalType":"uint256","name":"newAllocation","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint16","name":"newDepositFee","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposalLengths","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"proposedType","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"}]

var contractSyncABI = [{"inputs":[{"internalType":"address","name":"_dtx","type":"address"},{"internalType":"address","name":"_proxyVoting","type":"address"},{"internalType":"address","name":"_plsx","type":"address"},{"internalType":"address","name":"_inc","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"HEX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLSX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proxyVoting","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setBalanceAbove0","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"syncCreditContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syncOwners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenDTX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updateAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateAllInitialize","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"updateFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePoolsDistributionContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePoolsOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"}]


var farmsContract = "0x0dc0Fabe4c9d57cCaD055b4cD627D0d24fA3C98E"
var basicContract = "0x5DebADaf41ED55270e0F9944FD389745e73d29B9"
var syncContract = "0x506D24B519AC4Af9724Cc5F9eaf006e987e753d6"
var referralContract = "0x066F0a45801bcbc5232b11ed4b97c39E1369fe59"

var pool1Month = "0x39b3E852D6fFA1aF6694Ef87C062450de6778da8"
var pool3Month = "0x9013B1067C52E897E713044dE36c56BfdA8Ec9B4"
var pool6Month = "0xb180450f064E79adBFD71Bc2fB086F9CD0Af0D67"
var pool1Year = "0xc0483f1b0dcf601888fFD0d3A44b7124e80DB7D1"
var pool3Year = "0x15b51Ece819f3B51ce814de67bB2419660701a3c"
var pool5Year = "0xf3E82f4123d4262a2baEC25b03652f3932A91739"

	
		  
const range = document.getElementById('formControlRange');
const client = document.getElementById('client');

range.addEventListener('change', (e) => {
  const clientValue = e.target.value;
  client.textContent = Math.round(clientValue / 100 * delayBE);
});

const range2 = document.getElementById('formControlRange2');
const client2 = document.getElementById('client2');

range2.addEventListener('change', (d) => {
  const clientValue2 = d.target.value;
  client2.textContent = Math.round(clientValue2 / 100 * delayBE);
});

const range3 = document.getElementById('formControlRange3');
const client3 = document.getElementById('client3');

range3.addEventListener('change', (g) => {
  const clientValue3 = g.target.value;
  client3.textContent = Math.round(clientValue3 / 100 * delayBE);
});


const range4 = document.getElementById('formControlRange4');
const client4 = document.getElementById('client4');

range4.addEventListener('change', (h) => {
  const clientValue4 = h.target.value;
  client4.textContent = Math.round(clientValue4 / 100 * delayBE);
});

const range5 = document.getElementById('formControlRange5');
const client5 = document.getElementById('client5');

range5.addEventListener('change', (m) => {
  const clientValue5 = m.target.value;
  client5.textContent = Math.round(clientValue5 / 100 * delayBE);
});


function showExpired() {
	var a = document.getElementById("costToVote-expired");
	var b = document.getElementById("costToVote-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("costToVote-table-active");
	var d = document.getElementById("costToVote-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function showActive() {
	var a = document.getElementById("costToVote-expired");
	var b = document.getElementById("costToVote-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("costToVote-table-active");
	var d = document.getElementById("costToVote-table-expired");
	d.style.display="none";
	c.style.display="block";
}

function delayShowExpired() {
	var a = document.getElementById("delayBeforeEnforce-expired");
	var b = document.getElementById("delayBeforeEnforce-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("delayBeforeEnforce-table-active");
	var d = document.getElementById("delayBeforeEnforce-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function delayShowActive() {
	var a = document.getElementById("delayBeforeEnforce-expired");
	var b = document.getElementById("delayBeforeEnforce-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("delayBeforeEnforce-table-active");
	var d = document.getElementById("delayBeforeEnforce-table-expired");
	d.style.display="none";
	c.style.display="block";
}


function rollOverBonusShowExpired() {
	var a = document.getElementById("rollOverBonus-expired");
	var b = document.getElementById("rollOverBonus-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("rollOverBonus-table-active");
	var d = document.getElementById("rollOverBonus-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function rollOverBonusShowActive() {
	var a = document.getElementById("rollOverBonus-expired");
	var b = document.getElementById("rollOverBonus-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("rollOverBonus-table-active");
	var d = document.getElementById("rollOverBonus-table-expired");
	d.style.display="none";
	c.style.display="block";
}

function miningFeeShowExpired() {
	var a = document.getElementById("miningFee-expired");
	var b = document.getElementById("miningFee-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("miningFeetable-active");
	var d = document.getElementById("miningFeetable-expired");
	c.style.display="none";
	d.style.display="block";
}
function miningFeeShowActive() {
	var a = document.getElementById("miningFee-expired");
	var b = document.getElementById("miningFee-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("miningFeetable-active");
	var d = document.getElementById("miningFeetable-expired");
	d.style.display="none";
	c.style.display="block";
}


function callFeeShowExpired() {
	var a = document.getElementById("callFee-expired");
	var b = document.getElementById("callFee-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("callFee-table-active");
	var d = document.getElementById("callFee-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function callFeeShowActive() {
	var a = document.getElementById("callFee-expired");
	var b = document.getElementById("callFee-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("callFee-table-active");
	var d = document.getElementById("callFee-table-expired");
	d.style.display="none";
	c.style.display="block";
}
		
		  fetch(apiURL+'proposals/costToVote.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("costToVoteTable").innerHTML = html
		})
		
		  fetch(apiURL+'proposals/delayBeforeEnforce.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("delayBeforeEnforceTable").innerHTML = html
		})
		
		
  fetch(apiURL+'proposals/rollOverBonus.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("rollOverBonusTable").innerHTML = html
		})
		
		  fetch(apiURL+'proposals/miningFees.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("miningFeeTable").innerHTML = html
		})
		
		
  fetch(apiURL+'proposals/callFee.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("callFeeTable").innerHTML = html
		})
		
  fetch(apiURL+'api/costToVote.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("minCostToVote").innerHTML = html
		})
		
  fetch(apiURL+'api/delayBeforeEnforce.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
		let numb = Number(html)
			delayBE = numb
			document.getElementById("current-delay").innerHTML = '<span id="delayBeforeEnforceValue" style="display:inline;">'+numb+'</span>Hours['+(numb/24).toFixed(1)+' Days]'
		})
		
  fetch(apiURL+'api/rollOverBonuses.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
		let x = JSON.parse(html)
			document.getElementById("current-bonuses").innerHTML = x[0] + "%, " + x[1] + "%, "+ x[2] + "%, " + x[3] + "%, " + x[4] + "%" + x[5] + "%" 
			document.getElementById("select-pool").innerHTML = `
			<option value="1">1 Month Deposit (Current: `+x[0]+`%)</option>
                      <option value="2">3 Month Deposit (Current: `+x[1]+`%)</option>
                      <option value="3">6 Month Deposit (Current: `+x[2]+`%)</option>
                      <option value="4">1 Year Deposit (Current: `+x[3]+`%)</option>
                      <option value="5">3 Year Deposit (Current: `+x[4]+`%)</option>
					  <option value="6">5 Year Deposit (Current: `+x[5]+`%)</option>
		   `
		})
		
		fetch(apiURL+'api/miningFees.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
		let x = JSON.parse(html)
			document.getElementById("select-mining-fee").innerHTML = `
			 <option disabled selected>Choose Fee Type</option>
                      <option value="0">Deposit Fee (Current: `+x[0]/100+`%)</option>
                      <option value="1">Funding Rate (Current: `+x[1]/10000+`%)</option>
					   <option value="2">Referral Bonus (Current: `+x[2]/100+`%)</option>
					 
		   `
		})
		
  fetch(apiURL+'api/callFee.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("current-callFee").innerHTML = html
		})

		
		
		async function setCostToVote() {
			var entry = parseInt(document.getElementById("costToVote").value);
			const delayBEval = document.getElementById("client").innerText * 3600;
			
			const pricer = BigInt(entry) * BigInt(10**18);
			const commitValue = parseInt(document.getElementById("costToVote-commit").value);
			const commit = BigInt(commitValue) * BigInt(10 **18);

			
			if(entry === "") {
						Swal.fire(
						  'Error!',
						  'Please enter amount!',
						  'warning'
						)
			} else if((entry > minCostToVote) && (commitValue < entry)) {
				Swal.fire('Error!',
						  'When increasing cost to vote, you have to commit atleast equal to the new proposed amount or higher.',
						  'warning'
						)
		}else if(commitValue < minCostToVote) {
				//console.log("shouldn't be here")
				//console.log("commit value is " + commitValue.toLocaleString() + "  ....and mincost to vote is " + minCostToVote.toLocaleString())
						Swal.fire('Error!',
						  'When decreasing rewards below current threshold, you have to commit atleast the current minimum(' + minCostToVote.toLocaleString() + 'DTX)',
						  'warning'
						)
			} else {
			  await auth();
			  
			const displayText = "You will sacrifice <strong>" + commitValue.toLocaleString() + " "+tokenTicker+"</strong> tokens to initiate the proposal";
			  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, submit proposal!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
					

				let msgSuccess= 'You will sacrifice <strong>' + commitValue.toLocaleString() + ' '+tokenTicker+'</strong> to initiate the proposal. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
							
											
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
			try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.initiateSetMinDeposit(commit,pricer,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshCostToVote();
						
					} catch(e) {
							errorMessage(e)
						  }
				  }
				})
	
				}
			}
			
		
async function voteCostToVote(propID, forOrAgainst, isRejectPossible, requiredToReject) {
	   let decisionText = 'Voting <strong>in favor of</strong> the proposal';
	   if(!forOrAgainst) { decisionText = 'Voting <strong>Against</strong> the proposal'; }
	   let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br><small>' + decisionText + '</small> ';
		
		let withUpdate = false;
Swal.fire({
		  title: 'Add votes to proposal?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Cast Vote!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
					  let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	
					  await auth();
					  
						let displayView = "against"; 
						if(forOrAgainst) { 
						 displayView = "in favor of";
						} 
						
					const displayText2 = "You will sacrifice <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens to vote <strong>" + displayView + "</strong> the proposal";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Vote now!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							
							let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote. </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Freedom comes with a price.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
							
						try {
						
							if(forOrAgainst) {
								
				var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteSetMinDepositY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
	
							} else {
								
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
					
				var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteSetMinDepositN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)), withUpdate);
	
							}
							
				await doIt.wait();
				
				if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshCostToVote();
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}
	
				
				
		async function enforceCostToVote(proposalNumber) {
			  await auth();


						let msgSuccess= 'Proposal can be enforced. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.executeSetMinDeposit(proposalNumber);
			
				await doIt.wait();				

				
				await isSuccess2();
				
				refreshCostToVote();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
						
		async function vetoCostToVote(proposalNumber) {
			  await auth();

				
						let msgSuccess= 'Proposal can be rejected. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.vetoSetMinDeposit(proposalNumber);
			
				await doIt.wait();
				
				
				await isSuccess3();
				
				refreshCostToVote();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				
					async function setVaultProposal() {
				
			var entry = document.getElementById("miningFee").value;
			const delayBEval = document.getElementById("client5").innerText * 3600;
			//const delay2 = parseInt(entry) * 3600;
			const commitValue = parseInt(document.getElementById("miningFee-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			const selectedType = parseInt(document.getElementById("select-mining-fee").value);
		
			entry = parseInt(parseFloat(entry) * 100)
			if(selectedType == 1) {
				entry = entry * 100;
			}
			console.log(entry)
		
			if(entry === "") {
						Swal.fire(
						  'Error!',
						  'Please enter amount (fee in %)!',
						  'warning'
						)
			} else if(isNaN(selectedType)) {
					const displayMsg = 'You must select the type of fee from the dropdown menu!'
						Swal.fire('Error!',
						  displayMsg,
						  'warning'
						)
			}else if(commitValue <  minCostToVote) {
				const displayMsg = 'Minimum commited has to be above current minimum of ' + minCostToVote.toLocaleString() + ''+tokenTicker+'';
						Swal.fire('Error!',
						  displayMsg,
						  'warning'
						)
			} else {
			  await auth();
			const displayText = "You will sacrifice <strong>" + commitValue.toLocaleString() + "</strong> "+tokenTicker+" tokens to initiate the proposal";
			  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, submit proposal!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
				

						let msgSuccess= 'You will sacrifice <strong>' + commitValue.toLocaleString() + ' '+tokenTicker+'</strong> to initiate the proposal. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				
					console.log(typeof commit)
					console.log(typeof selectedType)
					console.log(typeof entry)
					console.log(typeof delayBEval)
				const transaction = new ethers.Contract(farmsContract, farmsABI, provider.getSigner());
				const doIt = await transaction.proposeVault(commit,selectedType,entry,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshMiningFee();
				} catch(e) {
							errorMessage(e)
						  }
				
				  }
				})
				}
			}
			
				

		async function setDelayBeforeEnforce() {
			var entry = document.getElementById("delayBeforeEnforce").value;
			const delayBEval = document.getElementById("client2").innerText * 3600;
			const delay2 = parseInt(entry) * 3600;
			const commitValue = parseInt(document.getElementById("delayBeforeEnforce-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			
			
			if(entry === "") {
						Swal.fire(
						  'Error!',
						  'Please enter amount (number of hours)!',
						  'warning'
						)
			} else if(commitValue <  minCostToVote) {
				const displayMsg = 'Minimum commited has to be above current minimum of ' + minCostToVote.toLocaleString() + ''+tokenTicker+'';
						Swal.fire('Error!',
						  displayMsg,
						  'warning'
						)
			} else {
			  await auth();
			const displayText = "You will sacrifice <strong>" + commitValue.toLocaleString() + "</strong> "+tokenTicker+" tokens to initiate the proposal";
			  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, submit proposal!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
				

						let msgSuccess= 'You will sacrifice <strong>' + commitValue.toLocaleString() + ' '+tokenTicker+'</strong> to initiate the proposal. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.initiateDelayBeforeEnforceProposal(commit,delay2,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshMiningFee();
				} catch(e) {
							errorMessage(e)
						  }
				
				  }
				})
				}
			}
			
			
			
				
async function voteMiningFee(propID, forOrAgainst, isRejectPossible, requiredToReject) {
	   let decisionText = 'Voting <strong>in favor of</strong> the proposal';
	   if(!forOrAgainst) { decisionText = 'Voting <strong>Against</strong> the proposal'; }
	   let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br><small>' + decisionText + '</small> ';
		
		let withUpdate = false;
Swal.fire({
		  title: 'Add votes to proposal?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Cast Vote!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
					  let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	
					  await auth();
					  
						let displayView = "against"; 
						if(forOrAgainst) { 
						 displayView = "in favor of";
						} 
						
					const displayText2 = "You will sacrifice <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens to vote <strong>" + displayView + "</strong> the proposal";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Vote now!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							
							let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote. </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Freedom comes with a price.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
							
						try {
						
							if(forOrAgainst) {
								
				var transaction = new ethers.Contract(farmsContract, farmsABI, provider.getSigner());
				var doIt = await transaction.voteVaultY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
	
							} else {
								
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
				
				var transaction = new ethers.Contract(farmsContract, farmsABI, provider.getSigner());
				var doIt = await transaction.voteVaultN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)), withUpdate);
	
							}
							
				await doIt.wait();
				
				if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshMiningFee();
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}
	
				
				
		async function enforceMiningFee(proposalNumber) {
			  await auth();


						let msgSuccess= 'Proposal can be enforced. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					try {
				const transaction = new ethers.Contract(farmsContract, farmsABI, provider.getSigner());
				const doIt = await transaction.executeVault(proposalNumber);
			
				await doIt.wait();				

			let msgSuccess= 'New Fee has been succesfully enforced. Please confirm one more transaction. This action will sync and actually enforce the updated fees accross all vaults! </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
				const transaction2 = new ethers.Contract(syncContract, contractSyncABI, provider.getSigner());
				//const allVaults = getVaults();
				const doIt2 = await transaction2.updateFees();
				
				await isSuccess2();
				
				refreshMiningFee();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
						
		async function vetoMiningFee(proposalNumber) {
			  await auth();

				
						let msgSuccess= 'Proposal can be rejected. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					try {
				const transaction = new ethers.Contract(farmsContract, farmsABI, provider.getSigner());
				const doIt = await transaction.vetoVault(proposalNumber);
			
				await doIt.wait();
				
				
				await isSuccess3();
				
				refreshMiningFee();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				
					
			
			
async function voteDelayBeforeEnforce(propID, forOrAgainst, isRejectPossible, requiredToReject) {
	   let decisionText = 'Voting <strong>in favor of</strong> the proposal';
	   if(!forOrAgainst) { decisionText = 'Voting <strong>Against</strong> the proposal'; }
	   let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br><small>' + decisionText + '</small> ';
		let withUpdate = false;
Swal.fire({
		  title: 'Add votes to proposal?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Cast Vote!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
					  let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	
					  await auth();
					  
						let displayView = "against"; 
						if(forOrAgainst) { 
						 displayView = "in favor of";
						} 
						
					const displayText2 = "You will sacrifice <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens to vote <strong>" + displayView + "</strong> the proposal";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Vote now!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							  
										let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote. </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Freedom comes with a price.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
	try {
							if(forOrAgainst) {
				
					var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteDelayBeforeEnforceProposalY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
		
				
							} else {
								
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
						
							var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteDelayBeforeEnforceProposalN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)), withUpdate);
		
							}
						
						await doIt.wait();
				
				if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshDelayBeforeEnforce();
				} catch(e) {
							errorMessage(e)
						  }
						  
						  }
						})
				
					  }
				})	
				}
				
		
		
			
			
			
		async function enforceDelayBeforeEnforce(proposalNumber) {
			  await auth();
			
						let msgSuccess= 'Proposal can be enforced. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.executeDelayBeforeEnforceProposal(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess2();
				
				refreshDelayBeforeEnforce();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				async function vetoDelayBeforeEnforce(proposalNumber) {
			  await auth();

						let msgSuccess= 'Proposal can be rejected. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.vetoDelayBeforeEnforceProposal(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				refreshDelayBeforeEnforce();
				} catch(e) {
							errorMessage(e)
						  }
				}
				

			
		async function setRollOverBonus() {
			var entry = parseFloat(document.getElementById("rollOverBonus").value);
			const delayBEval = document.getElementById("client3").innerText * 3600;
			
			const bonus = Math.round(entry * 100);
			const commitValue = parseInt(document.getElementById("rollOverBonus-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			
			const selectedPool = parseInt(document.getElementById("select-pool").value);
			let poolAddress;
			switch(selectedPool) {
			  case 1:
				poolAddress = pool1Month;
				break;
			  case 2:
				poolAddress = pool3Month;
				break;
			  case 3:
				poolAddress = pool6Month;
				break;
			   case 4:
				poolAddress = pool1Year;
				break;
				case 5:
				poolAddress = pool3Year;
				break;
				case 6:
				poolAddress = pool5Year;
				break;
			}
			
			if(entry === "") {
						Swal.fire(
						  'Error!',
						  'Please enter amount for new bonus!',
						  'warning'
						)
			} else if(bonus > 2000) {
				Swal.fire(
						  'Error!',
						  'Maximum 20% bonus allowed!',
						  'warning'
						)
			} else if(commitValue <  minCostToVote) {
				const displayMsg = 'Minimum commited has to be above current minimum of ' + minCostToVote.toLocaleString() + ''+tokenTicker+'';
						Swal.fire('Error!',
						  displayMsg,
						  'warning'
						)
			} else {
			  await auth();
			const displayText = "You will sacrifice <strong>" + commitValue.toLocaleString() + " "+tokenTicker+"</strong> tokens to initiate the proposal";
			  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, submit proposal!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
					
					let msgSuccess= 'You will sacrifice <strong>' + commitValue.toLocaleString() + ' '+tokenTicker+'</strong> to initiate the proposal. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
							
											
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.initiateProposalRolloverBonus(commit,poolAddress,bonus,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshRollOverBonus();
				
				} catch(e) {
							errorMessage(e)
						  }
				  }
				})
		

				}
			}
			
	async function voteRollOverBonus(propID, forOrAgainst, isRejectPossible, requiredToReject) {
	   let decisionText = 'Voting <strong>in favor of</strong> the proposal';
	   if(!forOrAgainst) { decisionText = 'Voting <strong>Against</strong> the proposal'; }
	   let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br><small>' + decisionText + '</small> ';
		let withUpdate = false;
Swal.fire({
		  title: 'Add votes to proposal?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Cast Vote!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
					  let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	
					  await auth();
					  
						let displayView = "against"; 
						if(forOrAgainst) { 
						 displayView = "in favor of";
						} 
						
					const displayText2 = "You will sacrifice <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens to vote <strong>" + displayView + "</strong> the proposal";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Vote now!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							
														let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote. </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Freedom comes with a price.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
							
							try {
							if(forOrAgainst) {
	
								
												var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteProposalRolloverBonusY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
		
				
							} else {
								
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
			
						
																var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteProposalRolloverBonusN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
		
							}

						
				await doIt.wait();
				
				if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshCostToVote();
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}
				
		
				
			
		async function enforceRollOverBonus(proposalNumber) {
			  await auth();

		
						let msgSuccess= 'Proposal can be enforced. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.executeProposalRolloverBonus(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess2();
				
				refreshRollOverBonus();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				
		async function vetoRollOverBonus(proposalNumber) {
			  await auth();

	
						let msgSuccess= 'Proposal can be rejected. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.vetoProposalRolloverBonus(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				refreshRollOverBonus();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
	
				
				
		async function setCallFee() {
			var entry = parseFloat(document.getElementById("callFee").value);
			const delayBEval = document.getElementById("client4").innerText * 3600;
			
			const callFee = entry * 100;
			const commitValue = parseInt(document.getElementById("callFee-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			
			if(entry === "") {
						Swal.fire(
						  'Error!',
						  'Please enter amount for new callFee!',
						  'warning'
						)
			} else if(commitValue <  minCostToVote) {
				const displayMsg = 'Minimum commited has to be above current minimum of ' + minCostToVote.toLocaleString() + ''+tokenTicker+'';
						Swal.fire('Error!',
						  displayMsg,
						  'warning'
						)
			} else {
			  await auth();

		const displayText = "You will sacrifice <strong>" + commitValue.toLocaleString() + " "+tokenTicker+"</strong> tokens to initiate the proposal";
			  Swal.fire({
				  title: 'Are you sure?',
				  html: displayText,
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, submit proposal!'
				}).then(async(result) => {
				  if (result.isConfirmed) {
				

					let msgSuccess= 'You will sacrifice <strong>' + commitValue.toLocaleString() + ' '+tokenTicker+'</strong> to initiate the proposal. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
							
											
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.initiateSetCallFee(commit,callFee,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshCallFee();
				} catch(e) {
							errorMessage(e)
						  }
				  }
				})
				
			
				}
			}
			
	async function voteCallFee(propID, forOrAgainst, isRejectPossible, requiredToReject) {
	   let decisionText = 'Voting <strong>in favor of</strong> the proposal';
	   if(!forOrAgainst) { decisionText = 'Voting <strong>Against</strong> the proposal'; }
	   let displayText = '<img src="favicon/favicon-32x32.png" width="20px" height="20px"> <strong>'+tokenTicker+'</strong> to Sacrifice:</br><input id="sacAmount" autocapitalize="off" class="swal2-input" placeholder="" type="text" style="display: flex;"></br><small>' + decisionText + '</small> ';
		let withUpdate = false;
Swal.fire({
		  title: 'Add votes to proposal?',
		  html: displayText,
		  icon: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Cast Vote!'
		}).then(async(result) => {
		  if (result.isConfirmed) {
					  let sacrificeAmount = parseInt(document.getElementById('sacAmount').value);
	
					  await auth();
					  
						let displayView = "against"; 
						if(forOrAgainst) { 
						 displayView = "in favor of";
						} 
						
					const displayText2 = "You will sacrifice <strong>" + sacrificeAmount.toLocaleString() + " "+tokenTicker+"</strong> tokens to vote <strong>" + displayView + "</strong> the proposal";
					  Swal.fire({
						  title: 'Are you sure?',
						  html: displayText2,
						  icon: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Yes, Vote now!'
						}).then(async(result) => {
						  if (result.isConfirmed) {
							
							let msgAfter= 'You will sacrifice <strong>' + sacrificeAmount.toLocaleString() + ' '+tokenTicker+'</strong> to cast the vote. </br> ';
							
												toDisplay = msgAfter + '</br><div class="pixel-loader"></div><small>Freedom comes with a price.</small>';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: toDisplay,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
						
						try {
							if(forOrAgainst) {

												var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteSetCallFeeY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
				
				
							} else {
								
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
			
														var transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				var doIt = await transaction.voteSetCallFeeN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
			
			
							}

						
					await doIt.wait();
				
				if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshCallFee();
				} catch(e) {
							errorMessage(e)
						  }
						  
						  }
						})
				
					  }
				})	
				}
			
				
			
			async function enforceCallFee(proposalNumber) {
			  await auth();

						let msgSuccess= 'Proposal can be rejected. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.executeSetCallFee(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess2();
				
				refreshCallFee();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				async function vetoCallFee(proposalNumber) {
			  await auth();

						let msgSuccess= 'Proposal can be rejected. No '+tokenTicker+' required. </br></br><div class="pixel-loader"></div></br><small>Freedom comes with a price.</small> ';
						Swal.fire({
						  title: '<strong>Congratulations! Confirm transaction to finalize.',
						  html: msgSuccess,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
					
				try {
				const transaction = new ethers.Contract(basicContract, ABI, provider.getSigner());
				const doIt = await transaction.vetoSetCallFee(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				refreshCallFee();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				async function getVaults() {
    const contractAbi = [
        "function viewVaults() external view returns(address[] memory)"
    ];
    const timeDepositContract = new ethers.Contract(referralContract, contractAbi, provider)
    const userShares = BigInt(await timeDepositContract.viewVaults())
    return userShares;
}
   
   function refreshCostToVote() {
	     fetch(apiURL+'proposals/costToVote.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('costToVoteTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
     function refreshMiningFee() {
	     fetch(apiURL+'proposals/miningFees.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('miningFeeTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   function refreshDelayBeforeEnforce() {
	     fetch(apiURL+'proposals/delayBeforeEnforce.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('delayBeforeEnforceTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   function refreshRollOverBonus() {
	     fetch(apiURL+'proposals/rollOverBonus.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('rollOverBonusTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   function refreshCallFee() {
	     fetch(apiURL+'proposals/callFee.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('callFeeTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   
 
   
		  document.getElementById("btn-miningFee").onclick = setVaultProposal;
		document.getElementById("btn-costToVote").onclick = setCostToVote;
		document.getElementById("btn-delayBeforeEnforce").onclick = setDelayBeforeEnforce;
		document.getElementById("btn-rollOverBonus").onclick = setRollOverBonus;
		document.getElementById("btn-callFee").onclick = setCallFee;