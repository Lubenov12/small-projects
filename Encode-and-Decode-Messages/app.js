function encodeAndDecodeMessages() {
 let meesageToEncode = document.querySelector("textarea") 
 let buttonEncode = document.querySelectorAll("button")[0]
 buttonEncode.addEventListener("click", function(){
let arr = Array.from(meesageToEncode.value)
meesageToEncode.value = ""
arr = arr.map((x) => x.charCodeAt(0) + 1).map((x) => String.fromCharCode(x))
let messageToDecode =  document.querySelectorAll("textarea")[1]
messageToDecode.value = arr.join("")
 })
 let buttonDecode = document.querySelectorAll("button")[1]

 buttonDecode.addEventListener("click", function(){
    let messageToDecode =  document.querySelectorAll("textarea")[1]
    let arr = Array.from(messageToDecode.value)
    arr = arr.map((x) => x.charCodeAt(0) - 1).map((x) => String.fromCharCode(x))
    messageToDecode.value = arr.join("")
 })
}