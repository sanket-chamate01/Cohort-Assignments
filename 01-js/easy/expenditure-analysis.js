/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  let a = {};
  for(let items of transactions){
    let key = items.category;
    if(a[key] == undefined){
      a[key] = items.price;
    }else{
      a[key] += items.price;
    }
  }

  for(let i in a){
    let temp = {};
    temp['category'] = i;
    temp['totalSpent'] = a[i];
    ans.push(temp);
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
