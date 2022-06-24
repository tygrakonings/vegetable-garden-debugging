const getYieldForPlant = (vegetable, environmentFactors) => {
let result = 0 
//     waardeDieWeWillenHebben = vegetable.factor.sun.low

// console.log("waardeDieWeWillenHebben",waardeDieWeWillenHebben)

// parseIntVanDieWaarde = parseInt(vegetable.factor.sun.low)

// console.log("parseIntVanDieWaarde",parseIntVanDieWaarde)

if (environmentFactors.sun === "low") {
    console.log(vegetable.factor.sun)
    result = vegetable.yield *(1+(vegetable.factor.sun.low/100))
    console.log(result)

} else if (environmentFactors.sun === "high") {
    console.log(vegetable.factor.sun)
    result = vegetable.yield *(1+(vegetable.factor.sun.high/100))
    console.log(result)
} else if (environmentFactors.sun === "medium") {
    console.log(vegetable.factor.sun)
    result = vegetable.yield *(1+(vegetable.factor.sun.medium/100))
    console.log(result)
} else {
    result = vegetable.yield
}

if (environmentFactors.wind === "lots") {
    console.log(result)
    result = result * (1+(vegetable.factor.wind.lots/100))
console.log(result)
}
    // vegetable.yield   environmentFactors.sun.low
  return result
};

const getYieldForCrop = (vegetable, environmentFactors) => {
    console.log(environmentFactors)
    
    let result = 0
    result = getYieldForPlant(vegetable.crop, environmentFactors) * vegetable.numCrops
    console.log(result)
//   return vegetable.crop.yield * vegetable.numCrops;
return result 

  
};




const getTotalYield = (vegetable) => {
  let result = 0;
  vegetable.crops.map((crops) => {
    result += crops.crop.yield * crops.numCrops;
  });
  return result;
};

const getCostsForCrop = (vegetable) => {
  return vegetable.crop.costs * vegetable.numCrops;
};

const getRevenueForCrop = (vegetable) => {
  return vegetable.crop.salePrice * vegetable.crop.yield * vegetable.numCrops;
};

const getProfitForCrop = (vegetable) => {
  return getRevenueForCrop(vegetable) - getCostsForCrop(vegetable);
};

const getTotalProfit = (crops) => {
//   console.log(typeof crops);
//   console.log(typeof crop);
//   console.log(Object.keys(crops));

  let totalProfit = 0;

  crops.crops.forEach((crops) => {
    totalProfit += getProfitForCrop(crops);

    // for (i = 0; i < crops.crops.length; i++) {
  });
  return totalProfit;
};

// const getTotalProfit = (vegetable) => {
//     let result = 0
//     vegetable.crops.forEach((crops)) => {
//         result += crops.crop.yied * crops.nuMCrops
//     }
// }

// const firstCrop = crops[0].crop.yield * crops[0].numCrops
// const secondCrop = crops[1].crop.yield * crops[1].numCrops
// return firstCrop + secondCrop

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalYield,
  getTotalProfit,
};
