window.addEventListener("load", solve);

function solve() {
  //TODO ...
  let title = document.getElementById("post-title")
  let category = document.getElementById("post-category")
  let content = document.getElementById("post-content")

  function Publish (){
    if(title.value == "" && category.value == "" && content.value == ""){
      return
    }

    let ul = document.getElementById("review-list")
    let li = document.createElement("li")
    li.className = "rpost"
    let article = document.createElement("article")
    let h4 = document.createElement("h4")
    h4.textContent = title.value
    title.value = ""
    article.appendChild(h4)
    let p = document.createElement("p")
    p.textContent = "Category: " + category.value
    category.value = ""
    article.appendChild(p)
    let contentP = document.createElement("p")
    contentP.textContent = "Content: " + content.value
    content.value = ""

    article.appendChild(contentP)
    li.appendChild(article)

    function returnValues (){
      title.value = h4.textContent
      category.value = p.textContent.slice(10)
      content.value = contentP.textContent.slice(9)
      ul.removeChild(li)
    }

    let editBTN = document.createElement("button")
    editBTN.addEventListener("click",returnValues)
    editBTN.textContent = "Edit"
    editBTN.classList.add("action-btn")
    editBTN.classList.add("edit")
    let approveBTN = document.createElement("button")
    approveBTN.addEventListener("click", function(){
      let publish = document.getElementById("published-list")
     approveBTN.remove()
      editBTN.remove()
      ul.removeChild(li)
      publish.appendChild(li)
      
    })
    approveBTN.textContent = "Approve"

    approveBTN.classList.add("action-btn")
    approveBTN.classList.add("approve")
    li.appendChild(editBTN)
    li.appendChild(approveBTN)
    ul.appendChild(li)
    
  }
document.getElementById("publish-btn").addEventListener("click", Publish)
function clearForum (){
  let publish = document.getElementById("published-list")
  publish.innerHTML = ""
  

  


}

document.getElementById("clear-btn").addEventListener("click", clearForum)
 
}


{/* <ul id="published-list">

<li class="rpost">
<article>
<h4>asd</h4>
<p>Category: asd</p>
<p>Content: asd</p>
</article>
</li>
</ul> */}