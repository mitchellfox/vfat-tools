
$(function() {
consoleInit(main)
  });

const EXC_CHEF_ABI = [{"inputs":[{"internalType":"contract IEXCToken","name":"excToken_","type":"address"},{"internalType":"contract IERC20Mintable","name":"grailToken_","type":"address"},{"internalType":"uint256","name":"startTime_","type":"uint256"},{"internalType":"address","name":"devAddress_","type":"address"},{"internalType":"address","name":"feeAddress_","type":"address"},{"internalType":"uint256","name":"maxLockDuration","type":"uint256"},{"internalType":"uint256","name":"minLockDuration","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slotId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDurationSeconds","type":"uint256"}],"name":"DepositOnLockSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"DevAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isDisable","type":"bool"}],"name":"DisableLockSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slotId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdrawOnLockSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"previousEmissionRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newEmissionRate","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"FeeAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slotId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"HarvestOnLockSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositFeeBP","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isGrailRewards","type":"bool"}],"name":"PoolAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositFeeBP","type":"uint256"}],"name":"PoolConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"}],"name":"PoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slotId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDurationSeconds","type":"uint256"}],"name":"RenewLockSlot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slotId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawOnLockSlot","type":"event"},{"inputs":[],"name":"INITIAL_EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DEPOSIT_FEE_BP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_LOCK_DURATION_SECONDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_USER_LOCK_SLOT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_LOCK_DURATION_SECONDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"depositFeeBP","type":"uint256"},{"internalType":"bool","name":"isGrailRewards","type":"bool"},{"internalType":"bool","name":"withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lockDurationSeconds","type":"uint256"},{"internalType":"bool","name":"fromRegularDeposit","type":"bool"}],"name":"depositOnLockSlot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableLockSlot","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"slotId","type":"uint256"}],"name":"emergencyWithdrawOnLockSlot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"excToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockDurationSeconds","type":"uint256"}],"name":"getMultiplierByLockDurationSeconds","outputs":[{"internalType":"uint256","name":"multiplier","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"getPoolInfo","outputs":[{"internalType":"address","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"},{"internalType":"uint256","name":"depositFeeBP","type":"uint256"},{"internalType":"bool","name":"isGrailRewards","type":"bool"},{"internalType":"uint256","name":"lpSupply","type":"uint256"},{"internalType":"uint256","name":"lpSupplyWithMultiplier","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"slotId","type":"uint256"}],"name":"getUserLockSlotInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lockDurationSeconds","type":"uint256"},{"internalType":"uint256","name":"depositTime","type":"uint256"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"uint256","name":"amountWithMultiplier","type":"uint256"},{"internalType":"uint256","name":"bonusRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"getUserSlotLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"grailToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"slotId","type":"uint256"}],"name":"harvestOnLockSlot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"isPoolClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"slotId","type":"uint256"}],"name":"pendingRewardsOnLockSlot","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"},{"internalType":"uint256","name":"bonusRewards","type":"uint256"},{"internalType":"bool","name":"canHarvestBonusRewards","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"lpSupply","type":"uint256"},{"internalType":"uint256","name":"lpSupplyWithMultiplier","type":"uint256"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"},{"internalType":"uint256","name":"depositFeeBP","type":"uint256"},{"internalType":"bool","name":"isGrailRewards","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"slotId","type":"uint256"},{"internalType":"uint256","name":"amountToAdd","type":"uint256"},{"internalType":"bool","name":"fromRegularDeposit","type":"bool"}],"name":"redepositOnLockSlot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"slotId","type":"uint256"},{"internalType":"uint256","name":"lockDurationSeconds","type":"uint256"}],"name":"renewLockSlot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"depositFeeBP","type":"uint256"},{"internalType":"bool","name":"withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDevAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isDisable","type":"bool"}],"name":"setDisableLockSlot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newEmissionRate","type":"uint256"},{"internalType":"bool","name":"withUpdate","type":"bool"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userLockSlotInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lockDurationSeconds","type":"uint256"},{"internalType":"uint256","name":"depositTime","type":"uint256"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"uint256","name":"amountWithMultiplier","type":"uint256"},{"internalType":"uint256","name":"bonusRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"slotId","type":"uint256"}],"name":"withdrawOnLockSlot","outputs":[],"stateMutability":"nonpayable","type":"function"}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

   const EXC_CHEF_ADDR = "0x70B9611f3cd33e686ee7535927cE420C2A111005";

   const rewardTokenTicker = "EXC";
   const EXC_CHEF = new ethers.Contract(EXC_CHEF_ADDR, EXC_CHEF_ABI, App.provider);

   let rewardsPerWeek = 0
   const startTime = await EXC_CHEF.startTime();
   const currentTime = Date.now() / 1000;

   if(currentTime < startTime){
    _print(`Rewards start at block <a href="https://ftmscan.com/block/countdown/${startBlock}" target="_blank">${startBlock}</a>\n`);
   }else{
    rewardsPerWeek = await EXC_CHEF.rewardsPerSecond() /1e18 * 604800 ;
   }

    const tokens = {};
    const prices = await getFantomPrices();

    await loadGeneralEthcallChefContract(App, tokens, prices, EXC_CHEF, EXC_CHEF_ADDR, EXC_CHEF_ABI, rewardTokenTicker,
      "excToken", null, rewardsPerWeek, "pendingRewards", [1], "fantom");

    hideLoading();
  }