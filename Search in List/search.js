function search() {
   // TODO
   //remove li styles
   let li = document.getElementsByTagName("li")
    Array.from(li).forEach((x) => {
      x.style.textDecoration = ""
     x.style.fontWeight = ""
   })

   
   let search = document.getElementById("towns")
   let find = document.getElementById("searchText").value
   let howMuchFound = document.getElementById("result")
   let arr = Array.from(search.children)
   let result = []
   for (const el of arr) {
      result.push(el.textContent)
   }
   let count = 0
   for(let i =0 ; i < result.length; i++){
      if(result[i].includes(find)){
         count++
        search.children[i].style.textDecoration = "underline"
        search.children[i].style.fontWeight = "bold"
      }
   }
 
   howMuchFound.textContent = count + " matches found"
  
}
