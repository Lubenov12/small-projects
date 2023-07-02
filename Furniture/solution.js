function solve() {
let generate = document.querySelector("button")
let [items, output] = [...document.querySelectorAll("textarea")]
generate.addEventListener("click", function(){
const arrayValue = JSON.parse(items.value)
for (const el of arrayValue) {
  let tr = document.createElement("tr")
  let imgTd = document.createElement("td")
  let img = document.createElement("img")
  img.src = el.img
  imgTd.appendChild(img)
  tr.appendChild(imgTd)
  let nameTd = document.createElement("td")
  let pName = document.createElement("p")
  pName.textContent = el.name
  nameTd.appendChild(pName)
  tr.appendChild(nameTd)
  let priceTd =  document.createElement("td")
  let priceP = document.createElement("p")
  priceP.textContent = el.price
  priceTd.appendChild(priceP)
  tr.appendChild(priceTd)
  let decFactorTD = document.createElement("td")
  let factorP = document.createElement("p")
  factorP.textContent = el.decFactor
  decFactorTD.appendChild(factorP)
  tr.appendChild(decFactorTD)
  let checkTD = document.createElement("td")
  let input = document.createElement("input")
  input.type = "checkbox"
  checkTD.appendChild(input)
  tr.appendChild(checkTD)
  let bossTR = document.querySelector("tbody")
  bossTR.appendChild(tr)
}
})
let buyButton = document.querySelectorAll("button")[1]
buyButton.addEventListener("click", function(){
  output.value = ""
let testing = document.querySelectorAll("tbody td input")
let arr = Array.from(testing).filter((x) => {if (x.checked){
  return x
}})
arr =  arr.map((x) => x.offsetParent).map((x) => x.parentElement)
let BoughtThings = []
let totalPrice = 0
let countFactor = 0
for (const el of arr) {
  let ItemsBought = el.querySelectorAll("td")[1]
  BoughtThings.push(ItemsBought.children[0].textContent)
  let price = el.querySelectorAll("td")[2]
  price = price.children[0].textContent
 totalPrice += Number(price)
 let factor = el.querySelectorAll("td")[3]
 countFactor += Number(factor.children[0].textContent)
}

output.value += `Bought furniture: ${BoughtThings.join(", ")}\n`
output.value += `Total price: ${totalPrice.toFixed(2)}\n`
output.value += `Average decoration factor: ${countFactor / arr.length}`
})
  //TODO...
}

// [{"name": "Sofa", "img":
// "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/
// grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]