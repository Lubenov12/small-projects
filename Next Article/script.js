function getArticleGenerator(articles) {
    // TODO
    let div = document.getElementById("content")
    let value = articles.shift()
    return function showNext(){

        if(value === undefined){
            return
        }
        
        let article = document.createElement("article")
        article.textContent = value
        div.appendChild(article)
        value = articles.shift()
    }
}
