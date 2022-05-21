// const modal = document.querySelector(".modal");
// const closeModal = document.querySelectorAll(".icon-close");
// const openModal = document.querySelector(".header__user");

// // popup modal
// openModal.addEventListener("click", () => {
//   modal.classList.add("show-modal");
// });

// closeModal.forEach((e) => {
//   e.addEventListener("click", () => {
//     modal.classList.remove("show-modal");
//   });
// });
const sidebar = document.querySelector('.sidebar');

const API_KEY = 'a1d6ce5998e940968e384a2f8f3ee9eb';

async function getNews() {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-04-21&sortBy=publishedAt&apiKey=a1d6ce5998e940968e384a2f8f3ee9eb'
    const url_2 = 'https://newsapi.org/v2/everything?q=apple&from=2022-05-20&to=2022-05-20&sortBy=popularity&apiKey=a1d6ce5998e940968e384a2f8f3ee9eb';
    fetch(url, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((data) => {return render(data.articles);})
    fetch(url_2, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((data) => {return render(data.articles);})
}
getNews();

function render(news) {
    for(let element of news) {
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'sidebar__item');
        divElement.innerHTML = `
            <div class="sidebar__item">
                    <img src="${element.urlToImage}" alt="" >
               <div class="sidebar__item-text">
                    <div class="sidebar__item-title">
                        <h2>${element.title}</h2>
                    </div>
                    <div class="sidebar__item-content">
                        <p>${element.content}
                    </p>
                    </div>
                    <div class="sidebar__item-end">
                        <div class="sidebar__item-time">
                            ${element.publishedAt}
                        </div>
                        <div class="sidebar__item-author">
                            <span style="font-weight: 500;">By:</span> ${element.author}
                        </div>
                    </div>
               </div>
        `
        sidebar.appendChild(divElement)
       
    }
}

