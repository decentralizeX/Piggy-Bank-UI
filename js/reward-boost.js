	$(function(){
    
    $('#reward-duration').on('input', function() {
      calculate();
    });
   $('#reward-per-block').on('input', function() {
      calculate();
    });

    function calculate(){
        var dur = $('#reward-duration').val(); 
		var rPB = $('#reward-per-block').val();
		if(dur === "" || rPB === "") {
			$('#estimated-inflation').val("Enter reward & duration to calculate...");	
		} else {

			var perc = dur * 3600 / 10.8 * rPB;
			
			$('#estimated-inflation').val(new Intl.NumberFormat().format(Math.round(perc)) + " "+tokenTicker+"");	
			
			//var totalStaked = document.getElementById("totalStaked").innerHTML;
			var annual = rPB*2920000; // rPB * blocks in a year = rewards printed in a year
			
			
			/*
				HOW TO CALCULATE APY:
				Allocation for pool / total allocation
				That percentage * annual inflation
				That number / total staked in that pool for APY (+ bonuses )
			*/
			
			//MISSING: This is approximate 
//console.log(allocations)
//console.log(totalAllocation)
//console.log(poolBalances)
			$('#1month').val(Math.round((annual * (allocations[0] / totalAllocation) / poolBalances[0])*100).toLocaleString() + "%");
			$('#3month').val(Math.round((annual * (allocations[1] / totalAllocation) / poolBalances[1])*100).toLocaleString() + "%");
			$('#6month').val(Math.round((annual * (allocations[2] / totalAllocation) / poolBalances[2])*100).toLocaleString() + "%");
			$('#1year').val(Math.round((annual * (allocations[3] / totalAllocation)  / poolBalances[3])*100).toLocaleString() + "%");
			$('#3year').val(Math.round((annual * (allocations[4] / totalAllocation)  / poolBalances[4])*100).toLocaleString() + "%");
			$('#5year').val(Math.round((annual * (allocations[5] / totalAllocation)  / poolBalances[5])*100).toLocaleString() + "%");
		}
    }

});

	var ABI1 = [{"inputs":[{"internalType":"contract IERC20","name":"_DTX","type":"address"},{"internalType":"address","name":"_masterchef","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"CancleFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newGovernor","type":"address"}],"name":"ChangeGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"EndFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"ExecuteProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eventDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finalSupply","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateProposeGrandFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"durationInBlocks","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"}],"name":"RebalanceInflation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"VetoProposal","type":"event"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateUpcomingRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"cancleFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"delayBetweenEvents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"desiredSupplyAfterGrandFibonaccening","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eligibleGrandFibonaccening","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"expireLastPrintGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"expiredGrandFibonaccening","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fibonacceningActivatedBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fibonacceningActiveID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fibonacceningProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"goldenRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grandEventLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grandFibonacceningActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"grandFibonacceningEnforce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"grandFibonacceningProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"eventDate","type":"uint256"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"finalSupply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grandFibonacceningRunning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"eventDate","type":"uint256"},{"internalType":"uint256","name":"finalSupply","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateProposeGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isGrandFibonacceningReady","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isRunningGrand","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastCallFibonaccening","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"leverPullFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldMasterchef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newRewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"durationInBlocks","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rebalanceInflation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setMasterchef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startLastPrintGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"targetBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensForBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_delay","type":"uint256"}],"name":"updateDelayBetweenEvents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_length","type":"uint256"}],"name":"updateGrandEventLength","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoProposeGrandFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteFibonacceningN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteFibonacceningY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteGrandFibonacceningN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteGrandFibonacceningY","outputs":[],"stateMutability":"nonpayable","type":"function"}]

	var ABI2 = [{"inputs":[{"internalType":"address","name":"_DTX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificed","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_for","type":"bool"}],"name":"AddVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newGovernor","type":"address"}],"name":"ChangeGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedMinDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"DelayBeforeEnforce","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"ExecuteProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensSacrificedForVoting","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateProposalDurationForCalculation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"address","name":"forPool","type":"address"},{"indexed":false,"internalType":"uint256","name":"newBonus","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateRolloverBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCallFee","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"InitiateSetCallFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedMinDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeMinDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"delayBetween","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"ProposeSetGrandParameters","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposedMinDeposit","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"ProposeSetMinThresholdFibonaccening","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_type","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"proposalID","type":"uint256"},{"indexed":true,"internalType":"address","name":"enforcer","type":"address"}],"name":"VetoProposal","type":"event"},{"inputs":[],"name":"acPool1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool4","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool5","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acPool6","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"callFeeProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"changeGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"delayProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeDelayBeforeEnforceProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeProposalDurationForCalculation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeProposalRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetGrandParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"executeSetMinThresholdFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"grandSettingProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue1","type":"uint256"},{"internalType":"uint256","name":"proposedValue2","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newDelay","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateDelayBeforeEnforceProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateProposalDurationForCalculation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"address","name":"_forPoolAddress","type":"address"},{"internalType":"uint256","name":"_newBonus","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateProposalRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newCallFee","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateSetCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newMinDeposit","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"initiateSetMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minDepositProposals","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minThresholdFibonacceningProposal","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposeDurationCalculation","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"proposedValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"_delayBetween","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"proposeSetGrandParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositingTokens","type":"uint256"},{"internalType":"uint256","name":"newMinimum","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"proposeSetMinThresholdFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rolloverBonuses","outputs":[{"internalType":"bool","name":"valid","type":"bool"},{"internalType":"uint256","name":"firstCallTimestamp","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedForVote","type":"uint256"},{"internalType":"uint256","name":"valueSacrificedAgainst","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"address","name":"poolAddress","type":"address"},{"internalType":"uint256","name":"newBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoDelayBeforeEnforceProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoProposalDurationForCalculation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoProposalRolloverBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetGrandParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"vetoSetMinThresholdFibonaccening","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteDelayBeforeEnforceProposalN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteDelayBeforeEnforceProposalY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteProposalDurationForCalculationN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteProposalDurationForCalculationY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteProposalRolloverBonusN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteProposalRolloverBonusY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetCallFeeN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetCallFeeY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetGrandParametersN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetGrandParametersY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetMinDepositN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetMinDepositY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"},{"internalType":"bool","name":"withAction","type":"bool"}],"name":"voteSetMinThresholdFibonacceningN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"},{"internalType":"uint256","name":"withTokens","type":"uint256"}],"name":"voteSetMinThresholdFibonacceningY","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var rewardContract = "0xc77c66913B5f60522Ccb98857228511930da7403" //rewardBoost broski
var basicContract = "0x5DebADaf41ED55270e0F9944FD389745e73d29B9" 

var rewardPerBlock
var totalAllocation
var allocations 
var poolBalances

var govBalance 
var eventThreshold
var totalSupply

fetch(apiURL+'api/rewardPerBlock.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			rewardPerBlock = html;
		})
		fetch(apiURL+'api/totalAllocation.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			totalAllocation = html;
		})

fetch(apiURL+'api/totalSupply.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			totalSupply = html;
			document.getElementById("minThresholdFill").innerHTML = "&nbsp (" + (Number(totalSupply)*0.001).toLocaleString() + " "+tokenTicker+")"
		})

		fetch(apiURL+'api/poolAllocations.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			allocations = JSON.parse(html);
		})
		fetch(apiURL+'api/poolBalances.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			poolBalances = JSON.parse(html);
		})
		
		fetch(apiURL+'api/governorBalance.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			govBalance = JSON.parse(html);
			fetch(apiURL+'api/eventThreshold.txt', {cache: "no-cache"}).then(function (response) {
				return response.text();
			}).then(function (html) {
				eventThreshold = JSON.parse(html);
				updateThreshold()
			})
		})
		
		function updateThreshold() {
			let amount = Math.round(govBalance / eventThreshold * 100)
			let moreString = '' 
			if(amount < 100) {
				moreString = '<small></br><span class="badge badge-pill badge-danger"><strong>Notice:</strong> </span> Reward Boost can not be enforced until the '+tokenTicker+' threshold is collected in the governing contract.</small>'
			}
			document.getElementById("thresholdProgress").innerHTML = `
			</br> <label for="exampleInputUsername1">Event Requirement Threshold:</br><small>Governor Balance: `+govBalance.toLocaleString()+`'+tokenTicker+' </br> Required Threshold: `+eventThreshold.toLocaleString()+`'+tokenTicker+'</small></label>
<div class="progress-bar">
  <div class="progress-bar-fill" style="width: `+amount+`%;"><strong>`+amount+`% Ready</strong></div>
</div>
`+moreString+`
<style>
  .progress-bar {
    width: 100%;
    height: 20px;
    background: #ddd;
  }

  .progress-bar-fill {
    background: #1abc9c;
    height: 20px;
  }
</style></br></br>`
		}
		
				
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


function rewardBoostShowExpired() {
	var a = document.getElementById("rewardBoost-expired");
	var b = document.getElementById("rewardBoost-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("rewardBoost-table-active");
	var d = document.getElementById("rewardBoost-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function rewardBoostShowActive() {
	var a = document.getElementById("rewardBoost-expired");
	var b = document.getElementById("rewardBoost-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("rewardBoost-table-active");
	var d = document.getElementById("rewardBoost-table-expired");
	d.style.display="none";
	c.style.display="block";
}

function eventThresholdShowExpired() {
	var a = document.getElementById("eventThreshold-expired");
	var b = document.getElementById("eventThreshold-active");
	
	a.className="badge badge-danger";
	a.style.cursor="auto";
	b.className="badge badge-outline-success";
	b.style.cursor="pointer";
	
	var c = document.getElementById("eventThreshold-table-active");
	var d = document.getElementById("eventThreshold-table-expired");
	c.style.display="none";
	d.style.display="block";
}
function eventThresholdShowActive() {
	var a = document.getElementById("eventThreshold-expired");
	var b = document.getElementById("eventThreshold-active");
	
	a.className="badge badge-outline-danger";
	a.style.cursor="pointer";
	b.className="badge badge-success";
	b.style.cursor="auto";
	
	var c = document.getElementById("eventThreshold-table-active");
	var d = document.getElementById("eventThreshold-table-expired");
	d.style.display="none";
	c.style.display="block";
}


	


		
	fetch(apiURL+'proposals/rewardBoost.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("rewardBoostTable").innerHTML = html
		})
		
			fetch(apiURL+'proposals/eventThreshold.html', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("eventThresholdTable").innerHTML = html
		})

fetch(apiURL+'api/eventThreshold.txt', {cache: "no-cache"}).then(function (response) {
			return response.text();
		}).then(function (html) {
			document.getElementById("threshold-now").innerHTML = Number(html).toLocaleString()
		})
		

		async function setRewardBoost() {
			const entry = document.getElementById("reward-per-block").value;
			const pricer = BigInt(entry) * BigInt(10**18);
			const commitValue = parseInt(document.getElementById("reward-per-block-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			const delayBEval = document.getElementById("client").innerText * 3600;
			
			const selectedDate = document.getElementById("picked-date").value;
			const selectedHour = document.getElementById("picked-hour").value;

			const timestamp = (Date.parse(selectedDate + ', ' + selectedHour)) / 1000;
			
			const duration = Math.round(parseInt(document.getElementById("reward-duration").value) * 3600 / 3); //in blocks
			
			if(entry === "" || commitValue === "" || duration === "" || selectedDate === "" || selectedHour === "") {
						Swal.fire(
						  'Error!',
						  'Please enter start date, new reward per block, duration and your commitment!',
						  'warning'
						)
			} else if(commitValue < minCostToVote) {
						Swal.fire('Error!',
						  'You have to commit atleast the current minimum(' + minCostToVote + ''+tokenTicker+')',
						  'warning'
						)
			} else if(pricer < (BigInt(33) * BigInt(10**18))) {
					Swal.fire('Error!',
						  'Reward per block must be above 33',
						  'warning'
						)
			} else if(timestamp - (Date.now()/1000) >= 1814400) {
				Swal.fire('Error!',
						  'Event can be scheduled maximum 21 days in advance. Start date must be less than 21 days from todays date.',
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
				const transaction = new ethers.Contract(rewardContract, ABI1, provider.getSigner());
				const doIt = await transaction.proposeFibonaccening(commit,pricer,duration,timestamp,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshRewardBoost();
				} catch(e) {
							errorMessage(e)
						  }
				  }
				})
				}
			}

		async function vetoRewardBoost(proposalNumber) {
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
				const transaction = new ethers.Contract(rewardContract, ABI1, provider.getSigner());
				const doIt = await transaction.vetoFibonaccening(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				refreshRewardBoost();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				async function enforceRewardBoost(proposalNumber) {
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
				const transaction = new ethers.Contract(rewardContract, ABI1, provider.getSigner());
				const doIt = await transaction.leverPullFibonaccening(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess2();
				
				refreshRewardBoost();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
	
async function voteRewardBoost(propID, forOrAgainst, isRejectPossible, requiredToReject) {
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

								
				var transaction = new ethers.Contract(rewardContract, ABI1, provider.getSigner());
				var doIt = await transaction.voteFibonacceningY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));

							} else {
								
								if(isRejectPossible && sacrificeAmount >= requiredToReject) {
									 withUpdate = true;
								} 

												var transaction = new ethers.Contract(rewardContract, ABI1, provider.getSigner());
				var doIt = await transaction.voteFibonacceningN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
							}
						
					await doIt.wait();
						
						if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshRewardBoost();
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}
		

		async function setEventThreshold() {
			const entry = parseInt(document.getElementById("eventThreshold").value);
			const threshold = BigInt(entry) * BigInt(10**18);
			const commitValue = parseInt(document.getElementById("eventThreshold-commit").value);
			const commit = BigInt(commitValue) * BigInt(10**18);
			const delayBEval = document.getElementById("client2").innerText * 3600;
			
			if(entry === "" || commitValue === "") {
						Swal.fire(
						  'Error!',
						  'Please enter number of tokens required and your commitment!',
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
				const transaction = new ethers.Contract(basicContract, ABI2, provider.getSigner());
				const doIt = await transaction.proposeSetMinThresholdFibonaccening(commit,threshold,delayBEval);
			
				await doIt.wait();
				
				await isSuccess();
				
				refreshEventThreshold();
				} catch(e) {
							errorMessage(e)
						  }
					  }
					})
				
				}
			}
			
			
			
		
		async function estimateTheAPY(rewardPBlock) {
						
						
						//$('#estimated-inflation').val(new Intl.NumberFormat().format(Math.round(perc)) + " OINK");	
						
						//let totalStaked2 = document.getElementById("totalStaked").innerHTML;
						let annual = rewardPBlock*2920000; // rPB * blocks in a year = rewards printed in a year
						
			let displayMsg2 = '<strong>1 Month:</strong> ' + Math.round((annual * (allocations[2] / totalAllocation) / poolBalances[0])*100).toLocaleString() + '% (Estimated APY)</br></br><strong>3 Month:</strong> ' + Math.round((annual * (allocations[3] / totalAllocation) / poolBalances[1])*100).toLocaleString() + '% (Estimated APY)</br></br><strong>6 Month:</strong> ' + Math.round((annual * (allocations[4] / totalAllocation) / poolBalances[2])*100).toLocaleString() + '% (Estimated APY)</br></br><strong>1 Year:</strong> ' + Math.round((annual * (allocations[5] / totalAllocation) / poolBalances[3])*100).toLocaleString() + '% (Estimated APY)</br></br><strong>3 Year:</strong> ' + Math.round((annual * (allocations[6] / totalAllocation) / poolBalances[4])*100).toLocaleString() + '% (Estimated APY)</br></br><strong>5 Year:</strong> ' + Math.round((annual * (allocations[7] / totalAllocation) / poolBalances[5])*100).toLocaleString() + '% (Estimated APY)</br></br>';  
			
						Swal.fire({
						  title: 'Estimated Boosted Rewards',
						  html: displayMsg2,
						  focusConfirm: false,
						  confirmButtonText:
							'<i class="fa fa-thumbs-up"></i> Close'
						})
		}
			
		async function enforceEventThreshold(proposalNumber) {
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
				const transaction = new ethers.Contract(basicContract, ABI2, provider.getSigner());
				const doIt = await transaction.executeSetMinThresholdFibonaccening(proposalNumber);
			
				await doIt.wait();
				await isSuccess2();
				
				refreshEventThreshold();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
				async function vetoEventThreshold(proposalNumber) {
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
				const transaction = new ethers.Contract(basicContract, ABI2, provider.getSigner());
				const doIt = await transaction.vetoSetMinThresholdFibonaccening(proposalNumber);
			
				await doIt.wait();
				
				await isSuccess3();
				
				refreshEventThreshold();
				} catch(e) {
							errorMessage(e)
						  }
				}
				
	
	
	
async function voteEventThreshold(propID, forOrAgainst, isRejectPossible, requiredToReject) {
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
												var transaction = new ethers.Contract(basicContract, ABI2, provider.getSigner());
				var doIt = await transaction.voteSetMinThresholdFibonacceningY(propID,(BigInt(sacrificeAmount) * BigInt(10**18)));
			
							} else {
						
								if(isRejectPossible && sacrificeAmount > requiredToReject) {
									 withUpdate = true;
								} 
																			var transaction = new ethers.Contract(basicContract, ABI2, provider.getSigner());
				var doIt = await transaction.voteSetMinThresholdFibonacceningN(propID,(BigInt(sacrificeAmount) * BigInt(10**18)),withUpdate);
			
							}
							
				await doIt.wait();
						
					if(!withUpdate) {
					await isSuccess();
				} else {
					await isSuccess3();
				}
				
				refreshEventThreshold();
				} catch(e) {
							errorMessage(e)
						  }
						  }
						})
				
					  }
				})	
				}
				
   
   function refreshRewardBoost() {
	     fetch(apiURL+'proposals/rewardBoost.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('rewardBoostTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }
   
     function refreshEventThreshold() {
	     fetch(apiURL+'proposals/eventThreshold.html', {cache: "no-cache"}).then(function (response) {
			// The API call was successful!
			return response.text();
			
		}).then(function (html) {
			document.getElementById('eventThresholdTable').innerHTML = html;
		}).catch(function (err) {
			Swal.fire(
		  'Error',
		  'Something went wrong! Please notify us in our Telegram channel!',
		  'error'
		)
		});
   }

   

	
		  
		document.getElementById("btn-rewardBoost").onclick = setRewardBoost;
		document.getElementById("btn-eventThreshold").onclick = setEventThreshold;
		  