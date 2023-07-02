window.addEventListener("load", solve);

function solve() {
  //TODO ....
  let tBody = document.getElementById("table-body")
  function makingOffer(e){
    e.preventDefault()
    let make = document.getElementById("make")
    let model = document.getElementById("model")
    let year = document.getElementById("year")
    let fuel = document.getElementById("fuel")
    let originalCost = document.getElementById("original-cost")
    let sellingPrice = document.getElementById("selling-price")
    
    if(Number(originalCost.value) > Number(sellingPrice.value) ||
     make.value == "" 
     || model.value == "" 
     || year.value == "" 
     || originalCost.value == "" 
     ||  sellingPrice.value == ""){
      return
    }
    let arr = [make.value, model.value, year.value, fuel.value, originalCost.value, sellingPrice.value]
    make.value = ""
    model.value = ""
    year.value = ""
    fuel.value = ""
    originalCost.value = ""
    sellingPrice.value = ""
    let tr = document.createElement("tr")
    tr.classList.add("row")
    for(let i = 0; i < arr.length; i++){
      let td = document.createElement("td")
      td.textContent = arr[i]
      tr.appendChild(td)
    }
    let td = document.createElement("td")
    let buttonEdit = document.createElement("button")
    buttonEdit.classList.add("action-btn")
    function returnEveryValue (e){
      e.preventDefault()
      tBody.removeChild(tr)
      make.value = arr[0]
      model.value  =arr[1]
      year.value = arr[2]
      fuel.value = arr[3]
      originalCost.value = arr[4]
      sellingPrice.value = arr[5]
    }
    buttonEdit.addEventListener("click", returnEveryValue)
    buttonEdit.classList.add("edit")
    buttonEdit.textContent = "Edit"
    let buttonSell = document.createElement("button")
    buttonSell.addEventListener("click", function(e){
      e.preventDefault()
      tBody.removeChild(tr)
      let ul = document.getElementById("cars-list")
      let profit = document.getElementById("profit")
      let li = document.createElement("li")
      li.classList.add("each-list")
      let spanModelndMark = document.createElement("span")
      spanModelndMark.textContent = arr[0] + " " + arr[1]
      li.appendChild(spanModelndMark)
      let yearSpan = document.createElement("span")
      yearSpan.textContent = arr[2]
      li.appendChild(yearSpan)
      let profitMade = document.createElement("span")
      let check = Number(arr[5]) - Number(arr[4])
      profitMade.textContent = check
      li.appendChild(profitMade)
      ul.appendChild(li)
      debugger
      let sum = Number(profit.textContent) + Number(profitMade.textContent)
      profit.textContent = sum.toFixed(2)
    })
    buttonSell.textContent = "Sell"
    buttonSell.classList.add("action-btn")
    buttonSell.classList.add("sell")
    td.appendChild(buttonEdit)
    td.appendChild(buttonSell)
    tr.appendChild(td)
    tBody.appendChild(tr)
    
    

  }
  document.getElementById("publish").addEventListener("click", makingOffer)
}
