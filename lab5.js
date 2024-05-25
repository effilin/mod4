
let news =[
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
]


function printNews(array){

    for(let i=0; i <array.length; i++) {
   
    let title = array[i].title
    let content =array[i].content
    const template = document.getElementById("news-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = content;
    document.querySelector('#news_cards').appendChild(template);
}}

printNews(news);

function checkNews(array) {
    
    for(let i=0; i < array.length; i++ ) {

        let titles = document.querySelector(".card")
        if (titles[i] === array[i]) {
            console.log("up to date");
        }
        else {
        document.removeChild('#cards');
        }
    }
    return printNews(array)
}

setInterval(checkNews, 5000);

function NewsObject(titleInput, contentInput) {
  this.id = news.length++;
  this.title = titleInput;
  this.content = contentInput;

}

function newNews() {

}


