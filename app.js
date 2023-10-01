const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://picsum.photos/id/312/180/120",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://picsum.photos/id/292/180/120",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://picsum.photos/id/225/180/120",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://picsum.photos/id/102/180/120",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://picsum.photos/id/75/180/120",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://picsum.photos/id/63/180/120",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    }
];

const article = document.querySelector('article');
const btns = document.querySelectorAll('.btn-menu');

for(let btn of btns) {
    btn.addEventListener('click', (e) => {
        let new_menu;
        switch (e.target.innerHTML) {
            case 'All':
                new_menu = menu.filter((a) => a);
                break;
            
            case 'Shakes':
                new_menu = menu.filter((a) => a.category == 'shakes');
                break;
            
            case 'Breakfast':
                new_menu = menu.filter((a) => a.category == 'breakfast');
                break;

            case 'Lunch':
                new_menu = menu.filter((a) => a.category == 'lunch');
                break;
        }

        return addMenu(new_menu);
    })
}

const addMenu = (menu) => {
    let menus = menu.map((a) => {
        return `<div class="article-card">
        <div class="article-img">
            <img src="${a.img}" alt="Food">
        </div>
        <div class="article-child-card">
            <div class="article-title">
                <h1>${a.title}</h1>
                <span>${a.price}</span>
            </div>
            <hr>
            <div class="article-text">
                ${a.desc}
            </div>    
        </div>
    </div>`
    })

    menus = menus.join('');
    article.innerHTML = menus;
}

window.addEventListener('DOMContentLoaded', () => {
    addMenu(menu);
})



