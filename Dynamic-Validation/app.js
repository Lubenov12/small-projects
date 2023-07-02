function validate() {
    // TODO
    const regex = /[a-z]+@[a-z]+.[a-z]+/gm;
    function addOrRemoveError(e){
        if(!regex.test(e.target.value)){
          return  e.target.className = "error"
        }
        return e.target.className = ""
    }
    let input = document.getElementById("email").addEventListener("change", addOrRemoveError)
    
    
}