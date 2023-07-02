function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
let search = document.getElementById("searchField")
let tables = document.getElementsByTagName("tr")

for(let i = 2 ; i < tables.length; i++){
   tables[i].className = ""
}



let arr = Array.from(tables)
arr.shift()
arr.shift()
let result = []
for (const el of arr) {
   result.push(el.innerText)
}
for(let i = 0 ; i < result.length; i++){
   let split = result[i].split("\t")
   let [name, email, course] = [split[0], split[1], split[2]]
   if(name.includes(search.value) || email.includes(search.value)|| course.includes(search.value)){
      tables[i + 2].className = "select"
   }
}

search.value = ""
}
}