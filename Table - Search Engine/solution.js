function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
let search = document.getElementById("searchField")
let tables = document.getElementsByTagName("tr")
let removeTwoTables = []
for(let i = 2 ; i < tables.length; i++){
   tables[i].className = ""
   removeTwoTables.push(tables[i])
}

let result = []

for (const el of removeTwoTables) {
   result.push(el.innerText)
}

for(let i = 0 ; i < result.length; i++){
   let split = result[i].split("\t")
   let [name, email, course] = [split[0], split[1], split[2]]
   if(name.includes(search.value) 
   || email.includes(search.value)
   || course.includes(search.value)){
      removeTwoTables[i].className = "select"
   }
}

search.value = ""
}
}