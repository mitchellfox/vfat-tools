$(function () {
  consoleInit(main)
});

const TX_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"token0Fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"token1Fee","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"manager","type":"address"}],"name":"ManagerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"RewardsDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"address","name":"_manager","type":"address"}],"name":"addManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"adminStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"_0for1","type":"bool"}],"name":"adminSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"inputAsset","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateAmountsMintedSingleToken","outputs":[{"internalType":"uint256","name":"amount0Minted","type":"uint256"},{"internalType":"uint256","name":"amount1Minted","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"calculateMintAmount","outputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"calculatePoolMintedAmounts","outputs":[{"internalType":"uint256","name":"amount0Minted","type":"uint256"},{"internalType":"uint256","name":"amount1Minted","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collect","outputs":[{"internalType":"uint256","name":"collected0","type":"uint256"},{"internalType":"uint256","name":"collected1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectAndReinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"inputAsset","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"}],"name":"getAmountsForLiquidity","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBufferToken0Balance","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBufferToken1Balance","outputs":[{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBufferTokenBalance","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"getLiquidityForAmounts","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPositionLiquidity","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardTokensCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakedTokenBalance","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTicks","outputs":[{"internalType":"int24","name":"tick0","type":"int24"},{"internalType":"int24","name":"tick1","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"int24","name":"_tickLower","type":"int24"},{"internalType":"int24","name":"_tickUpper","type":"int24"},{"internalType":"uint24","name":"_poolFee","type":"uint24"},{"internalType":"uint256","name":"_tradeFee","type":"uint256"},{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"address","name":"_stakedToken","type":"address"},{"internalType":"address","name":"_terminal","type":"address"},{"internalType":"address","name":"_uniswapPool","type":"address"},{"components":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"quoter","type":"address"},{"internalType":"address","name":"positionManager","type":"address"}],"internalType":"struct CLR.UniswapContracts","name":"contracts","type":"tuple"},{"components":[{"internalType":"address[]","name":"rewardTokens","type":"address[]"},{"internalType":"address","name":"rewardEscrow","type":"address"},{"internalType":"bool","name":"rewardsAreEscrowed","type":"bool"}],"internalType":"struct CLR.StakingDetails","name":"stakingParams","type":"tuple"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"initializeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"mintInitial","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolFee","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardEscrow","outputs":[{"internalType":"contract IRewardEscrow","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardInfo","outputs":[{"internalType":"uint256","name":"rewardRate","type":"uint256"},{"internalType":"uint256","name":"rewardPerTokenStored","type":"uint256"},{"internalType":"uint256","name":"totalRewardAmount","type":"uint256"},{"internalType":"uint256","name":"remainingRewardAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsAreEscrowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"setRewardsDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"stakedBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IStakedCLRToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0DecimalMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0Decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1DecimalMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1Decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradeFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniContracts","outputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"quoter","type":"address"},{"internalType":"address","name":"positionManager","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawAndClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const HND_GAUGE_ABI = [{"name":"Deposit","inputs":[{"name":"provider","type":"address","indexed":true},{"name":"value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Withdraw","inputs":[{"name":"provider","type":"address","indexed":true},{"name":"value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateLiquidityLimit","inputs":[{"name":"user","type":"address","indexed":false},{"name":"original_balance","type":"uint256","indexed":false},{"name":"original_supply","type":"uint256","indexed":false},{"name":"working_balance","type":"uint256","indexed":false},{"name":"working_supply","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"CommitOwnership","inputs":[{"name":"admin","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"ApplyOwnership","inputs":[{"name":"admin","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"name":"_from","type":"address","indexed":true},{"name":"_to","type":"address","indexed":true},{"name":"_value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"name":"_owner","type":"address","indexed":true},{"name":"_spender","type":"address","indexed":true},{"name":"_value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"stateMutability":"nonpayable","type":"constructor","inputs":[{"name":"_lp_token","type":"address"},{"name":"_minter","type":"address"},{"name":"_admin","type":"address"},{"name":"_reward_policy_maker","type":"address"}],"outputs":[]},{"stateMutability":"view","type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":288},{"stateMutability":"view","type":"function","name":"integrate_checkpoint","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4624},{"stateMutability":"nonpayable","type":"function","name":"user_checkpoint","inputs":[{"name":"addr","type":"address"}],"outputs":[{"name":"","type":"bool"}],"gas":9161388},{"stateMutability":"view","type":"function","name":"claimable_tokens","inputs":[{"name":"addr","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":9074455},{"stateMutability":"view","type":"function","name":"reward_contract","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2718},{"stateMutability":"view","type":"function","name":"last_claim","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":2544},{"stateMutability":"view","type":"function","name":"claimed_reward","inputs":[{"name":"_addr","type":"address"},{"name":"_token","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3066},{"stateMutability":"view","type":"function","name":"claimable_reward","inputs":[{"name":"_addr","type":"address"},{"name":"_token","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3034},{"stateMutability":"nonpayable","type":"function","name":"claimable_reward_write","inputs":[{"name":"_addr","type":"address"},{"name":"_token","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":1211018},{"stateMutability":"nonpayable","type":"function","name":"set_rewards_receiver","inputs":[{"name":"_receiver","type":"address"}],"outputs":[],"gas":35733},{"stateMutability":"nonpayable","type":"function","name":"claim_rewards","inputs":[],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"claim_rewards","inputs":[{"name":"_addr","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"claim_rewards","inputs":[{"name":"_addr","type":"address"},{"name":"_receiver","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"kick","inputs":[{"name":"addr","type":"address"}],"outputs":[],"gas":9175979},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_value","type":"uint256"},{"name":"_addr","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_value","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_claim_rewards","type":"bool"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"_value","type":"uint256"},{"name":"_claim_rewards","type":"bool"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"transfer","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":41283316},{"stateMutability":"nonpayable","type":"function","name":"transferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":41321266},{"stateMutability":"nonpayable","type":"function","name":"approve","inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":38211},{"stateMutability":"nonpayable","type":"function","name":"increaseAllowance","inputs":[{"name":"_spender","type":"address"},{"name":"_added_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":40755},{"stateMutability":"nonpayable","type":"function","name":"decreaseAllowance","inputs":[{"name":"_spender","type":"address"},{"name":"_subtracted_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":40779},{"stateMutability":"nonpayable","type":"function","name":"set_rewards","inputs":[{"name":"_reward_contract","type":"address"},{"name":"_sigs","type":"bytes32"},{"name":"_reward_tokens","type":"address[8]"}],"outputs":[],"gas":2743591},{"stateMutability":"nonpayable","type":"function","name":"set_killed","inputs":[{"name":"_is_killed","type":"bool"}],"outputs":[],"gas":38145},{"stateMutability":"nonpayable","type":"function","name":"commit_transfer_ownership","inputs":[{"name":"addr","type":"address"}],"outputs":[],"gas":39525},{"stateMutability":"nonpayable","type":"function","name":"accept_transfer_ownership","inputs":[],"outputs":[],"gas":39470},{"stateMutability":"view","type":"function","name":"minter","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3078},{"stateMutability":"view","type":"function","name":"reward_policy_maker","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3108},{"stateMutability":"view","type":"function","name":"lp_token","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3138},{"stateMutability":"view","type":"function","name":"controller","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3168},{"stateMutability":"view","type":"function","name":"voting_escrow","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3198},{"stateMutability":"view","type":"function","name":"balanceOf","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3443},{"stateMutability":"view","type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3258},{"stateMutability":"view","type":"function","name":"allowance","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3718},{"stateMutability":"view","type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":13620},{"stateMutability":"view","type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":11373},{"stateMutability":"view","type":"function","name":"working_balances","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3593},{"stateMutability":"view","type":"function","name":"working_supply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3408},{"stateMutability":"view","type":"function","name":"period","inputs":[],"outputs":[{"name":"","type":"int128"}],"gas":3438},{"stateMutability":"view","type":"function","name":"period_timestamp","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3577},{"stateMutability":"view","type":"function","name":"integrate_inv_supply","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3607},{"stateMutability":"view","type":"function","name":"integrate_inv_supply_of","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3743},{"stateMutability":"view","type":"function","name":"integrate_checkpoint_of","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3773},{"stateMutability":"view","type":"function","name":"integrate_fraction","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3803},{"stateMutability":"view","type":"function","name":"reward_tokens","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":3727},{"stateMutability":"view","type":"function","name":"rewards_receiver","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"address"}],"gas":3863},{"stateMutability":"view","type":"function","name":"reward_integral","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3893},{"stateMutability":"view","type":"function","name":"reward_integral_for","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":4138},{"stateMutability":"view","type":"function","name":"admin","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3738},{"stateMutability":"view","type":"function","name":"future_admin","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3768},{"stateMutability":"view","type":"function","name":"is_killed","inputs":[],"outputs":[{"name":"","type":"bool"}],"gas":3798}]
const HUNDRED_ABI = {
  comptroller: [
      {
          inputs: [],
          name: 'getAllMarkets',
          outputs: [{ internalType: 'contract PToken[]', name: '', type: 'address[]' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [{"internalType":"address","name":"","type":"address"}],
          name: 'compSpeeds',
          outputs: [{"internalType":"uint256","name":"","type":"uint256"}],
          stateMutability: 'view',
          type: 'function',
      }
  ],
  pToken: [
      {
          inputs: [],
          name: 'totalReserves',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'totalSupply',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'exchangeRateStored',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'supplyRatePerBlock',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'totalBorrows',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
          name: 'borrowBalanceStored',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'borrowRatePerBlock',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'getCash',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'interestRateModel',
          outputs: [{ internalType: 'contract IInterestRateModel', name: '', type: 'address' }],
          stateMutability: 'view',
          type: 'function',
      },
      {
          inputs: [],
          name: 'underlying',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          stateMutability: 'view',
          type: 'function',
      },
  ],
  erc20: [
      {
          constant: true,
          inputs: [],
          name: 'symbol',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
      },
      {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
      },
  ],
  oracle: [
      {
          inputs: [{ internalType: 'address', name: '_pToken', type: 'address' }],
          name: 'getUnderlyingPrice',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
  ],
  rate: [
      {
          inputs: [],
          name: 'blocksPerYear',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
      },
  ],
}

const contracts = {
  comptroller: '0x0f390559f258eb8591c8e31cf0905e97cf36ace2',
  oracle: '0x10010069DE6bD5408A6dEd075Cf6ae2498073c73',
  gas: {
      p_address: '0xE8F12f5492Ec28609D2932519456b7436d6c93bD',
      symbol: 'ETH',
      decimals: 18,
  },
};

async function main() {
  const App = await init_ethers();
  _print(`Initialized ${App.YOUR_ADDRESS}\n`);
  _print("Reading smart contracts...\n");

  const tokens = {};
  const prices = await getOptimisticPrices();

  /*================================      GAUGES      ====================================================== */
  const HND_GAUGES_CONTROLLER_ABI = [{"name":"CommitOwnership","inputs":[{"name":"admin","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"ApplyOwnership","inputs":[{"name":"admin","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"AddType","inputs":[{"name":"name","type":"string","indexed":false},{"name":"type_id","type":"int128","indexed":false}],"anonymous":false,"type":"event"},{"name":"NewTypeWeight","inputs":[{"name":"type_id","type":"int128","indexed":false},{"name":"time","type":"uint256","indexed":false},{"name":"weight","type":"uint256","indexed":false},{"name":"total_weight","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"NewGaugeWeight","inputs":[{"name":"gauge_address","type":"address","indexed":false},{"name":"time","type":"uint256","indexed":false},{"name":"weight","type":"uint256","indexed":false},{"name":"total_weight","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"VoteForGauge","inputs":[{"name":"time","type":"uint256","indexed":false},{"name":"user","type":"address","indexed":false},{"name":"gauge_addr","type":"address","indexed":false},{"name":"weight","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"NewGauge","inputs":[{"name":"addr","type":"address","indexed":false},{"name":"gauge_type","type":"int128","indexed":false},{"name":"weight","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"stateMutability":"nonpayable","type":"constructor","inputs":[{"name":"_token","type":"address"},{"name":"_voting_escrow","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"commit_transfer_ownership","inputs":[{"name":"addr","type":"address"}],"outputs":[],"gas":38895},{"stateMutability":"nonpayable","type":"function","name":"apply_transfer_ownership","inputs":[],"outputs":[],"gas":41034},{"stateMutability":"view","type":"function","name":"gauge_types","inputs":[{"name":"_addr","type":"address"}],"outputs":[{"name":"","type":"int128"}],"gas":3014},{"stateMutability":"nonpayable","type":"function","name":"add_gauge","inputs":[{"name":"addr","type":"address"},{"name":"gauge_type","type":"int128"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"add_gauge","inputs":[{"name":"addr","type":"address"},{"name":"gauge_type","type":"int128"},{"name":"weight","type":"uint256"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"checkpoint","inputs":[],"outputs":[],"gas":18295064817},{"stateMutability":"nonpayable","type":"function","name":"checkpoint_gauge","inputs":[{"name":"addr","type":"address"}],"outputs":[],"gas":18349612985},{"stateMutability":"view","type":"function","name":"gauge_relative_weight","inputs":[{"name":"addr","type":"address"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"view","type":"function","name":"gauge_relative_weight","inputs":[{"name":"addr","type":"address"},{"name":"time","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"gauge_relative_weight_write","inputs":[{"name":"addr","type":"address"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"gauge_relative_weight_write","inputs":[{"name":"addr","type":"address"},{"name":"time","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}]},{"stateMutability":"nonpayable","type":"function","name":"add_type","inputs":[{"name":"_name","type":"string"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"add_type","inputs":[{"name":"_name","type":"string"},{"name":"weight","type":"uint256"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"change_type_weight","inputs":[{"name":"type_id","type":"int128"},{"name":"weight","type":"uint256"}],"outputs":[],"gas":36770184806},{"stateMutability":"nonpayable","type":"function","name":"change_gauge_weight","inputs":[{"name":"addr","type":"address"},{"name":"weight","type":"uint256"}],"outputs":[],"gas":36879354313},{"stateMutability":"nonpayable","type":"function","name":"vote_for_gauge_weights","inputs":[{"name":"_gauge_addr","type":"address"},{"name":"_user_weight","type":"uint256"}],"outputs":[],"gas":18404662719},{"stateMutability":"view","type":"function","name":"get_gauge_weight","inputs":[{"name":"addr","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":5362},{"stateMutability":"view","type":"function","name":"get_type_weight","inputs":[{"name":"type_id","type":"int128"}],"outputs":[{"name":"","type":"uint256"}],"gas":5395},{"stateMutability":"view","type":"function","name":"get_total_weight","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":5020},{"stateMutability":"view","type":"function","name":"get_weights_sum_per_type","inputs":[{"name":"type_id","type":"int128"}],"outputs":[{"name":"","type":"uint256"}],"gas":5527},{"stateMutability":"view","type":"function","name":"admin","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2868},{"stateMutability":"view","type":"function","name":"future_admin","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2898},{"stateMutability":"view","type":"function","name":"token","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2928},{"stateMutability":"view","type":"function","name":"voting_escrow","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2958},{"stateMutability":"view","type":"function","name":"n_gauge_types","inputs":[],"outputs":[{"name":"","type":"int128"}],"gas":2988},{"stateMutability":"view","type":"function","name":"n_gauges","inputs":[],"outputs":[{"name":"","type":"int128"}],"gas":3018},{"stateMutability":"view","type":"function","name":"gauge_type_names","inputs":[{"name":"arg0","type":"int128"}],"outputs":[{"name":"","type":"string"}],"gas":13646},{"stateMutability":"view","type":"function","name":"gauges","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":3187},{"stateMutability":"view","type":"function","name":"vote_user_slopes","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"slope","type":"uint256"},{"name":"power","type":"uint256"},{"name":"end","type":"uint256"}],"gas":8354},{"stateMutability":"view","type":"function","name":"vote_user_power","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3353},{"stateMutability":"view","type":"function","name":"last_user_vote","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3598},{"stateMutability":"view","type":"function","name":"points_weight","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"uint256"}],"outputs":[{"name":"bias","type":"uint256"},{"name":"slope","type":"uint256"}],"gas":6062},{"stateMutability":"view","type":"function","name":"time_weight","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3443},{"stateMutability":"view","type":"function","name":"points_sum","inputs":[{"name":"arg0","type":"int128"},{"name":"arg1","type":"uint256"}],"outputs":[{"name":"bias","type":"uint256"},{"name":"slope","type":"uint256"}],"gas":6203},{"stateMutability":"view","type":"function","name":"time_sum","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3397},{"stateMutability":"view","type":"function","name":"points_total","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3433},{"stateMutability":"view","type":"function","name":"time_total","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3348},{"stateMutability":"view","type":"function","name":"points_type_weight","inputs":[{"name":"arg0","type":"int128"},{"name":"arg1","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3789},{"stateMutability":"view","type":"function","name":"time_type_weight","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3517}]
  const HND_GAUGE_ABI = [{"name":"Deposit","inputs":[{"name":"provider","type":"address","indexed":true},{"name":"value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Withdraw","inputs":[{"name":"provider","type":"address","indexed":true},{"name":"value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateLiquidityLimit","inputs":[{"name":"user","type":"address","indexed":false},{"name":"original_balance","type":"uint256","indexed":false},{"name":"original_supply","type":"uint256","indexed":false},{"name":"working_balance","type":"uint256","indexed":false},{"name":"working_supply","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"CommitOwnership","inputs":[{"name":"admin","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"ApplyOwnership","inputs":[{"name":"admin","type":"address","indexed":false}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"name":"_from","type":"address","indexed":true},{"name":"_to","type":"address","indexed":true},{"name":"_value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"name":"_owner","type":"address","indexed":true},{"name":"_spender","type":"address","indexed":true},{"name":"_value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"stateMutability":"nonpayable","type":"constructor","inputs":[{"name":"_lp_token","type":"address"},{"name":"_minter","type":"address"},{"name":"_admin","type":"address"},{"name":"_reward_policy_maker","type":"address"}],"outputs":[]},{"stateMutability":"view","type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":288},{"stateMutability":"view","type":"function","name":"integrate_checkpoint","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":4624},{"stateMutability":"nonpayable","type":"function","name":"user_checkpoint","inputs":[{"name":"addr","type":"address"}],"outputs":[{"name":"","type":"bool"}],"gas":9161388},{"stateMutability":"view","type":"function","name":"claimable_tokens","inputs":[{"name":"addr","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":9074455},{"stateMutability":"view","type":"function","name":"reward_contract","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2718},{"stateMutability":"view","type":"function","name":"last_claim","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":2544},{"stateMutability":"view","type":"function","name":"claimed_reward","inputs":[{"name":"_addr","type":"address"},{"name":"_token","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3066},{"stateMutability":"view","type":"function","name":"claimable_reward","inputs":[{"name":"_addr","type":"address"},{"name":"_token","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3034},{"stateMutability":"nonpayable","type":"function","name":"claimable_reward_write","inputs":[{"name":"_addr","type":"address"},{"name":"_token","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":1211018},{"stateMutability":"nonpayable","type":"function","name":"set_rewards_receiver","inputs":[{"name":"_receiver","type":"address"}],"outputs":[],"gas":35733},{"stateMutability":"nonpayable","type":"function","name":"claim_rewards","inputs":[],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"claim_rewards","inputs":[{"name":"_addr","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"claim_rewards","inputs":[{"name":"_addr","type":"address"},{"name":"_receiver","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"kick","inputs":[{"name":"addr","type":"address"}],"outputs":[],"gas":9175979},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_value","type":"uint256"},{"name":"_addr","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"deposit","inputs":[{"name":"_value","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_claim_rewards","type":"bool"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"_value","type":"uint256"},{"name":"_claim_rewards","type":"bool"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"transfer","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":41283316},{"stateMutability":"nonpayable","type":"function","name":"transferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":41321266},{"stateMutability":"nonpayable","type":"function","name":"approve","inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":38211},{"stateMutability":"nonpayable","type":"function","name":"increaseAllowance","inputs":[{"name":"_spender","type":"address"},{"name":"_added_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":40755},{"stateMutability":"nonpayable","type":"function","name":"decreaseAllowance","inputs":[{"name":"_spender","type":"address"},{"name":"_subtracted_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":40779},{"stateMutability":"nonpayable","type":"function","name":"set_rewards","inputs":[{"name":"_reward_contract","type":"address"},{"name":"_sigs","type":"bytes32"},{"name":"_reward_tokens","type":"address[8]"}],"outputs":[],"gas":2743591},{"stateMutability":"nonpayable","type":"function","name":"set_killed","inputs":[{"name":"_is_killed","type":"bool"}],"outputs":[],"gas":38145},{"stateMutability":"nonpayable","type":"function","name":"commit_transfer_ownership","inputs":[{"name":"addr","type":"address"}],"outputs":[],"gas":39525},{"stateMutability":"nonpayable","type":"function","name":"accept_transfer_ownership","inputs":[],"outputs":[],"gas":39470},{"stateMutability":"view","type":"function","name":"minter","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3078},{"stateMutability":"view","type":"function","name":"reward_policy_maker","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3108},{"stateMutability":"view","type":"function","name":"lp_token","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3138},{"stateMutability":"view","type":"function","name":"controller","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3168},{"stateMutability":"view","type":"function","name":"voting_escrow","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3198},{"stateMutability":"view","type":"function","name":"balanceOf","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3443},{"stateMutability":"view","type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3258},{"stateMutability":"view","type":"function","name":"allowance","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3718},{"stateMutability":"view","type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":13620},{"stateMutability":"view","type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":11373},{"stateMutability":"view","type":"function","name":"working_balances","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3593},{"stateMutability":"view","type":"function","name":"working_supply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3408},{"stateMutability":"view","type":"function","name":"period","inputs":[],"outputs":[{"name":"","type":"int128"}],"gas":3438},{"stateMutability":"view","type":"function","name":"period_timestamp","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3577},{"stateMutability":"view","type":"function","name":"integrate_inv_supply","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3607},{"stateMutability":"view","type":"function","name":"integrate_inv_supply_of","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3743},{"stateMutability":"view","type":"function","name":"integrate_checkpoint_of","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3773},{"stateMutability":"view","type":"function","name":"integrate_fraction","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3803},{"stateMutability":"view","type":"function","name":"reward_tokens","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":3727},{"stateMutability":"view","type":"function","name":"rewards_receiver","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"address"}],"gas":3863},{"stateMutability":"view","type":"function","name":"reward_integral","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3893},{"stateMutability":"view","type":"function","name":"reward_integral_for","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":4138},{"stateMutability":"view","type":"function","name":"admin","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3738},{"stateMutability":"view","type":"function","name":"future_admin","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3768},{"stateMutability":"view","type":"function","name":"is_killed","inputs":[],"outputs":[{"name":"","type":"bool"}],"gas":3798}]

  /*const HND_GAUGES_CONTROLLER_ADDR = "0xBa57440fA35Fdb671E58F6F56c1A4447aB1f6C2B";
  const HND_GAUGES_CONTROLLER = new ethcall.Contract(HND_GAUGES_CONTROLLER_ADDR, HND_GAUGES_CONTROLLER_ABI);

  const [_gaugesCount] = await App.ethcallProvider.all([HND_GAUGES_CONTROLLER.n_gauges()]);
  const gaugesCount = _gaugesCount / 1;
  const calls = [...Array(gaugesCount).keys()].map(i => HND_GAUGES_CONTROLLER.gauges(i));
  const gaugeAddresses = await App.ethcallProvider.all(calls);*/
  const gaugeAddresses = ["0x1dB11Cf7C332E797ac912e11b8762e0A4b24a836", "0xd7f3Bf2085AD32ff95E1bCC408d37F10f6949270", "0x5734BB74cFac69f1c34bA66eA6608cCdEe6b81F2"]

  const gaugeContracts = gaugeAddresses.map(a => new ethcall.Contract(a, HND_GAUGE_ABI));
  const gaugeCalls = gaugeContracts.map(c => [c.lp_token(), c.totalSupply(), c.balanceOf(App.YOUR_ADDRESS)]).flat();
  const gaugeValues = await App.ethcallProvider.all(gaugeCalls);

  let gageInfos = []
  for(let i = 0; i < gaugeValues.length; i++){
    const gageInfo = {
      lpTokenAddress : gaugeValues[i],
      totalSupply    : gaugeValues[i+1],
      balance        : gaugeValues[i+2]
    }
    gageInfos.push(gageInfo);
    i=i+2
  }

  //HND reward token
  const rewradToken = await getOptimisticToken(App, "0x10010078a54396F62c96dF8532dc2B4847d47ED3", App.YOUR_ADDRESS);
  const rewardTokenPrice = getParameterCaseInsensitive(prices, "0x10010078a54396F62c96dF8532dc2B4847d47ED3")?.usd;

  let staked_tvl = 0;
  let userTvl = 0;
  for(let i = 0; i < gageInfos.length; i++){
    const lpToken = await getToken(App, gageInfos[i].lpTokenAddress, gaugeAddresses[i]);
    const totalSupply = gageInfos[i].totalSupply / 10 ** lpToken.decimals;
    const usersStaked = gageInfos[i].balance / 10 ** lpToken.decimals;
    const _claimableRewards = await App.ethcallProvider.all([gaugeContracts[i].claimable_tokens(App.YOUR_ADDRESS)]);
    const claimableTokens = _claimableRewards / 10 ** rewradToken.decimals;
    const poolPrice = getPoolPrices(tokens, prices, lpToken, "optimism")
    staked_tvl += totalSupply * poolPrice.price;
    userTvl += usersStaked * poolPrice.price;
    await printHndContract(App, lpToken, poolPrice, gageInfos[i], gaugeAddresses[i], claimableTokens, rewradToken, rewardTokenPrice);
  }
  _print_bold(`\nTotal Value Staked: $${formatMoney(staked_tvl)}`);
  if (userTvl > 0) {
    _print_bold(`You are staking a total of $${formatMoney(userTvl)}`);
  }
  _print("");
  
  /*================================      GAUGES      ====================================================== */

  const COMPTROLLER = new ethcall.Contract(contracts.comptroller, HUNDRED_ABI.comptroller, App.provider);

  const [allMarkets] = await App.ethcallProvider.all([COMPTROLLER.getAllMarkets()]);

  // console.log(allMarkets);

  const data = await Promise.all(allMarkets.map(token => loadData(App, token, COMPTROLLER, prices)));

  // console.log(data);

  let [totalSupply, totalBorrow, totalCash] = [0, 0, 0];

  for (const market of data) {
      totalSupply += market.totalSupply * market.underlyingPrice;
      totalBorrow += market.totalBorrows * market.underlyingPrice;
      totalCash += market.cash * market.underlyingPrice;
  }
  _print_bold(`Deposit Market Size : $${formatMoney(totalSupply)}`);
  _print_bold(`Borrow Market Size : $${formatMoney(totalBorrow)}`);
  _print_bold(`TVL : $${formatMoney(totalCash)}`);
  _print("");

  for (const market of data) {
      printData(market);
  }

  const Pools = [
    "0x7CC778c9b8fB55Bb874D0EaEf0751ff465f80498", //WETH-HND
  
  ].map(a => ({
        address: a,
        abi: TX_ABI,
        stakeTokenFunction: "stakedToken",
        rewardTokenFunction: "rewardTokens"
    }))

  _print("");

  let p = await loadMultipleTxOptimisticSynthetixPools(App, tokens, prices, Pools)
  _print_bold(`Total staked: $${formatMoney(p.staked_tvl)}`);
  if (p.totalUserStaked > 0) {
  _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalApr * 100).toFixed(2)}%\n`);
  }

  hideLoading();
}

async function loadMultipleTxOptimisticSynthetixPools(App, tokens, prices, pools) {
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [];
  const infos = await Promise.all(pools.map(p =>
    loadTxOptimisticSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction)));
  for (const i of infos) {
    let p = await printSynthetixPool(App, i, "optimism");
    totalStaked += p.staked_tvl || 0;
    totalUserStaked += p.userStaked || 0;
    if (p.userStaked > 0) {
      individualAPRs.push(p.userStaked * p.apr / 100);
    }
  }
  let totalApr = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x,y)=>x+y, 0) / totalUserStaked;
  return { staked_tvl : totalStaked, totalUserStaked, totalApr };
}

async function loadTxOptimisticSynthetixPoolInfo(App, tokens, prices, stakingAbi, stakingAddress,
  rewardTokenFunction, stakeTokenFunction) {
    const STAKING_POOL = new ethers.Contract(stakingAddress, stakingAbi, App.provider);
    const STAKING_MULTI = new ethcall.Contract(stakingAddress, stakingAbi);

    if (!STAKING_POOL.callStatic[stakeTokenFunction]) {
      console.log("Couldn't find stake function ", stakeTokenFunction);
    }
    //const stakeTokenAddress = await STAKING_POOL.callStatic[stakeTokenFunction]();
    const stakeTokenAddress = stakingAddress;

    const rewardTokenAddress = await STAKING_POOL.callStatic[rewardTokenFunction](0);

    var stakeToken = await getOptimisticToken(App, stakeTokenAddress, stakingAddress);
    stakeToken.staked = await STAKING_POOL.stakedTotalSupply() / 10 ** stakeToken.decimals;

    if (stakeTokenAddress.toLowerCase() === rewardTokenAddress.toLowerCase()) {
      stakeToken.staked = await STAKING_POOL.totalSupply() / 10 ** stakeToken.decimals;
    }

    var newPriceAddresses = stakeToken.tokens.filter(x =>
      !getParameterCaseInsensitive(prices, x));
    var newPrices = await lookUpTokenPrices(newPriceAddresses);
    for (const key in newPrices) {
      if (newPrices[key]?.usd)
          prices[key] = newPrices[key];
    }
    var newTokenAddresses = stakeToken.tokens.filter(x =>
      !getParameterCaseInsensitive(tokens,x));
    for (const address of newTokenAddresses) {
        tokens[address] = await getOptimisticToken(App, address, stakingAddress);
    }
    if (!getParameterCaseInsensitive(tokens, rewardTokenAddress)) {
        tokens[rewardTokenAddress] = await getOptimisticToken(App, rewardTokenAddress, stakingAddress);
    }
    const rewardToken = getParameterCaseInsensitive(tokens, rewardTokenAddress);

    const rewardTokenTicker = rewardToken.symbol;

    const poolPrices = getPoolPrices(tokens, prices, stakeToken, "optimistic");

    if (!poolPrices)
    {
      console.log(`Couldn't calculate prices for pool ${stakeTokenAddress}`);
      return null;
    }

    const stakeTokenTicker = poolPrices.stakeTokenTicker;

    const stakeTokenPrice =
        prices[stakeTokenAddress]?.usd ?? getParameterCaseInsensitive(prices, stakeTokenAddress)?.usd;
    const rewardTokenPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;

    const calls = [STAKING_MULTI.periodFinish(), STAKING_MULTI.rewardInfo(rewardTokenAddress),
      STAKING_MULTI.balanceOf(App.YOUR_ADDRESS), STAKING_MULTI.earned(App.YOUR_ADDRESS, rewardTokenAddress)]
    const [periodFinish, rewardInfo, balance, earned_] = await App.ethcallProvider.all(calls);

    const weeklyRewards = (Date.now() / 1000 > periodFinish) ? 0 : rewardInfo.rewardRate / 10 ** rewardToken.decimals * 604800;

    const usdPerWeek = weeklyRewards * rewardTokenPrice;

    const staked_tvl = poolPrices.staked_tvl;

    const userStaked = balance / 10 ** stakeToken.decimals;

    const userUnstaked = stakeToken.unstaked;

    const earned = earned_ / 10 ** rewardToken.decimals;

    return  {
      stakingAddress,
      poolPrices,
      stakeTokenAddress,
      rewardTokenAddress,
      stakeTokenTicker,
      rewardTokenTicker,
      stakeTokenPrice,
      rewardTokenPrice,
      weeklyRewards,
      usdPerWeek,
      staked_tvl,
      userStaked,
      userUnstaked,
      earned
    }
}

async function printHndContract(App, lpToken, poolPrice, gaugeResult, gauge, claimableTokens, rewradToken, rewardTokenPrice) {
  poolPrice.print_price();
  const userStaked = gaugeResult.balance / 10 ** lpToken.decimals;
  var userStakedUsd = userStaked * poolPrice.price;
  var userStakedPct = userStakedUsd / poolPrice.tvl * 100;
  _print(`You are staking ${userStaked.toFixed(4)} ${poolPrice.stakeTokenTicker} ($${formatMoney(userStakedUsd)}), ${userStakedPct.toFixed(2)}% of the pool.`);
  if (userStaked > 0) {
    _print(`Your stake comprises of ${userStaked} ${poolPrice.stakeTokenTicker}.`)
  }
  const deposit = async function() {
    return hndGaugetDeposit(App, gauge, lpToken)
  }
  const withdraw = async function() {
    return hndGaugeWithdraw(App, gauge, lpToken)
  }
  const claim = async function() {
    return hndGaugeClaim(App, gauge, rewradToken)
  }
  _print_link(`Deposit ${lpToken.unstaked.toFixed(6)} ${lpToken.symbol}`, deposit);
  _print_link(`Withdraw ${userStaked.toFixed(6)} ${lpToken.symbol}`, withdraw);
  _print_link(`Claim ${claimableTokens.toFixed(6)} ${rewradToken.symbol} ($${formatMoney(claimableTokens*rewardTokenPrice)})`, claim);
  _print("");
}

async function hndGaugetDeposit(App, gauge, token){
  const signer = await App.provider.getSigner();

  const STAKING_TOKEN = new ethers.Contract(token.address, ERC20_ABI, signer)
  const GAUGE_CONTRACT = new ethers.Contract(gauge, HND_GAUGE_ABI, signer)

  const balanceToStake = await STAKING_TOKEN.balanceOf(App.YOUR_ADDRESS)
  const allowedTokens = await STAKING_TOKEN.allowance(App.YOUR_ADDRESS, gauge)

  const decimals = await STAKING_TOKEN.decimals();
  let allow = Promise.resolve()

  if (allowedTokens / 10 ** decimals < balanceToStake / 10 ** decimals) {
    showLoading()
    allow = STAKING_TOKEN.approve(gauge, ethers.constants.MaxUint256)
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
        alert('Try resetting your approval to 0 first')
      })
  }

  if (balanceToStake / 10 ** decimals > 0) {
    showLoading()
    allow
      .then(async function() {
        GAUGE_CONTRACT["deposit(uint256)"](balanceToStake, {gasLimit: 500000})
          .then(function(t) {
            App.provider.waitForTransaction(t.hash).then(function() {
              hideLoading()
            })
          })
          .catch(function() {
            hideLoading()
            _print('Something went wrong.\n')
          })
      })
      .catch(function(ex) {
        hideLoading()
        _print('Something went wrong.')
        _print(ex)
      })
  } else {
    alert('You have no tokens to stake!!')
  }
}

async function hndGaugeWithdraw(App, gauge, token){
  const signer = App.provider.getSigner()
  const GAUGE_CONTRACT = new ethers.Contract(gauge, HND_GAUGE_ABI, signer)

  const currentStakedAmount = await GAUGE_CONTRACT.balanceOf(App.YOUR_ADDRESS);

  if (currentStakedAmount / 10 ** token.decimals > 0) {
    showLoading()
    GAUGE_CONTRACT["withdraw(uint256,bool)"](currentStakedAmount, true, {gasLimit: 500000})
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
      })
  }
}

async function hndGaugeClaim(App, gauge, rewradToken) {
  const signer = App.provider.getSigner()
  const GAUGE_CONTRACT = new ethers.Contract(gauge, HND_GAUGE_ABI, signer)

  const earnedTokenAmount = await GAUGE_CONTRACT.claimable_reward(App.YOUR_ADDRESS, rewradToken.address) / 1e18

  if (earnedTokenAmount > 0) {
    showLoading()
    GAUGE_CONTRACT["claim_rewards()"]({gasLimit: 500000})
        .then(function(t) {
          return App.provider.waitForTransaction(t.hash)
        })
        .catch(function() {
          hideLoading()
        })
  }
}

async function loadData(App, token, comptroller, prices) {

  const PTOKEN_CONTRACT = new ethcall.Contract(token, HUNDRED_ABI.pToken, App.provider);

  const [
      totalReserves_,
      totalSupply_,
      supply_,
      exchangeRate_,
      supplyRatePerBlock_,
      totalBorrows_,
      borrowBalanceOf_,
      borrowRatePerBlock_,
      cash_,
      interestRateModel,
  ] = await App.ethcallProvider.all([
      PTOKEN_CONTRACT.totalReserves(),
      PTOKEN_CONTRACT.totalSupply(),
      PTOKEN_CONTRACT.balanceOf(App.YOUR_ADDRESS),
      PTOKEN_CONTRACT.exchangeRateStored(),
      PTOKEN_CONTRACT.supplyRatePerBlock(),
      PTOKEN_CONTRACT.totalBorrows(),
      PTOKEN_CONTRACT.borrowBalanceStored(App.YOUR_ADDRESS),
      PTOKEN_CONTRACT.borrowRatePerBlock(),
      PTOKEN_CONTRACT.getCash(),
      PTOKEN_CONTRACT.interestRateModel(),
  ]);

  let underlyingSymbol, underlyingDecimals;

  if (token.toLowerCase() === contracts.gas.p_address.toLowerCase()) {
      underlyingSymbol = contracts.gas.symbol;
      underlyingDecimals = contracts.gas.decimals;
  } else {
      const [underlying] = await App.ethcallProvider.all([PTOKEN_CONTRACT.underlying()]);
      const UNDERLYING_CONTRACT = new ethcall.Contract(underlying, HUNDRED_ABI.erc20, App.provider);
      [underlyingSymbol, underlyingDecimals] = await App.ethcallProvider.all([UNDERLYING_CONTRACT.symbol(), UNDERLYING_CONTRACT.decimals()]);
  }

  const ORACLE_CONTRACT = new ethcall.Contract(contracts.oracle, HUNDRED_ABI.oracle, App.provider);
  const [underlyingPrice_] = await App.ethcallProvider.all([ORACLE_CONTRACT.getUnderlyingPrice(token)]);
  const underlyingPrice = underlyingPrice_ / 10 ** (18 + 18 - underlyingDecimals);

  const totalReserves = totalReserves_ / 10 ** underlyingDecimals;

  const exchangeRate = exchangeRate_ / 1e18;
  const totalSupply = totalSupply_ * exchangeRate / 10 ** underlyingDecimals;
  const supply = supply_ * exchangeRate / 10 ** underlyingDecimals;
  const supplyPct = supply / totalSupply * 100;

  const totalBorrows = totalBorrows_ / 10 ** underlyingDecimals;
  const borrow = borrowBalanceOf_ / 10 ** underlyingDecimals;
  const borrowPct = borrow / totalBorrows * 100;

  const cash = cash_ / 10 ** underlyingDecimals;

  const RATE_CONTRACT = new ethcall.Contract(interestRateModel, HUNDRED_ABI.rate, App.provider);
  const [blocksPerYear] = await App.ethcallProvider.all([RATE_CONTRACT.blocksPerYear()]);

  const supplyAPY = ((1 + supplyRatePerBlock_ / 1e18) ** blocksPerYear - 1) * 100;
  const borrowAPY = ((1 + borrowRatePerBlock_ / 1e18) ** blocksPerYear - 1) * 100;

  let supplyFarmingAPY = 0;
  const [farmingRewards_] = await App.ethcallProvider.all([comptroller.compSpeeds(token)])
  const farmingRewards = farmingRewards_ / 1e18;
  const blocksPerYear_ = blocksPerYear * 1
  const tvl = totalSupply * underlyingPrice;
  const rewardPrice = getParameterCaseInsensitive(prices, "0x10010078a54396f62c96df8532dc2b4847d47ed3")?.usd;
  if(farmingRewards > 0){
    supplyFarmingAPY = farmingRewards * blocksPerYear_ * rewardPrice / tvl * 100
  }
  const borrowFarmingAPY = 0;

  const supplyNetAPY = supplyAPY + supplyFarmingAPY
  const borrowNetAPY = borrowFarmingAPY - borrowAPY

  const supplyUsdPerYear = supply * underlyingPrice * supplyNetAPY / 100;
  const supplyUsdPerWeek = supplyUsdPerYear / 52;
  const supplyUsdPerDay = supplyUsdPerYear / 365;

  const borrowUsdPerYear = borrow * underlyingPrice * borrowNetAPY / 100;
  const borrowUsdPerWeek = borrowUsdPerYear / 52;
  const borrowUsdPerDay = borrowUsdPerYear / 365;


  return {
      underlyingSymbol,
      underlyingPrice,
      totalSupply,
      totalBorrows,
      totalReserves,
      cash,
      supplyAPY,
      borrowAPY,
      supplyFarmingAPY,
      borrowFarmingAPY,
      supplyNetAPY,
      borrowNetAPY,
      supply,
      supplyUsdPerDay,
      supplyUsdPerWeek,
      supplyUsdPerYear,
      borrow,
      borrowUsdPerDay,
      borrowUsdPerWeek,
      borrowUsdPerYear,
      supplyPct,
      borrowPct
  }
}

async function printData(data) {
  _print_bold(`${data.underlyingSymbol} ($${formatMoney(data.underlyingPrice)})`);
  _print(`Supplied : ${formatMoney(data.totalSupply)} ($${formatMoney(data.totalSupply * data.underlyingPrice)}) at ${data.supplyAPY.toFixed(2)}% APY`)
  _print(`Borrowed : ${formatMoney(data.totalBorrows)} ($${formatMoney(data.totalBorrows * data.underlyingPrice)}) at ${data.borrowAPY.toFixed(2)}% APY`)
  _print(`Reserves : ${formatMoney(data.totalReserves)} ($${formatMoney(data.totalReserves * data.underlyingPrice)})`);
  _print(`Farming APR Supply ${data.supplyFarmingAPY.toFixed(2)}% Borrow ${data.borrowFarmingAPY.toFixed(2)}%`);
  _print(`Net APY Supply ${data.supplyNetAPY.toFixed(2)}% Borrow ${data.borrowNetAPY.toFixed(2)}%`);
  if (data.supply > 0) {
      _print(`You are supplying ${formatMoney(data.supply)} ${data.underlyingSymbol} ($${formatMoney(data.supply * data.underlyingPrice)}), ${(data.supplyPct).toFixed(2)}% of the pool.`)
      _print(`Estimated Supply earnings: Day ($${formatMoney(data.supplyUsdPerDay)}) Week ($${formatMoney(data.supplyUsdPerWeek)}) Year: ($${formatMoney(data.supplyUsdPerYear)})`);
  }
  if (data.borrow > 0) {
      _print(`You are borrowing ${formatMoney(data.borrow)} ${data.underlyingSymbol} ($${formatMoney(data.borrow * data.underlyingPrice)}), ${(data.borrowPct).toFixed(2)}% of the pool.`)
      _print(`Estimated Borrow earnings: Day ($${formatMoney(data.borrowUsdPerDay)}) Week ($${formatMoney(data.borrowUsdPerWeek)}) Year: ($${formatMoney(data.borrowUsdPerYear)})`);
  }
  _print("");
}
