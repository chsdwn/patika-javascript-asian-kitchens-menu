const menu = [
  {
    id: 1,
    title: 'Tteokbokki',
    category: 'Korea',
    price: 10.99,
    img:
      'https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg',
    desc: `Spicy rice cakes, serving with fish cake.`
  },
  {
    id: 2,
    title: 'Chicken Ramen',
    category: 'Japan',
    price: 7.99,
    img:
      'https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg',
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `
  },
  {
    id: 3,
    title: 'Bibimbap',
    category: 'Korea',
    price: 8.99,
    img:
      'https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg',
    desc: `Boiling vegetables, serving with special hot sauce`
  },
  {
    id: 4,
    title: 'Dan Dan Mian',
    category: 'China',
    price: 5.99,
    img:
      'https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg',
    desc: `Dan dan noodle, serving with green onion `
  },
  {
    id: 5,
    title: 'Yangzhou Fried Rice',
    category: 'China',
    price: 12.99,
    img:
      'https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg',
    desc: `Yangzhou style fried rice, serving with bean and pickles `
  },
  {
    id: 6,
    title: 'Onigiri',
    category: 'Japan',
    price: 9.99,
    img:
      'https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg',
    desc: `Rice Sandwich, serving with soy sauce`
  },
  {
    id: 7,
    title: 'Jajangmyeon',
    category: 'Korea',
    price: 15.99,
    img:
      'https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg',
    desc: `Black bean sauce noodle, serving with green onion `
  },
  {
    id: 8,
    title: 'Ma Yi Shang Shu',
    category: 'China',
    price: 12.99,
    img:
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg',
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`
  },
  {
    id: 9,
    title: 'Doroyaki',
    category: 'Japan',
    price: 3.99,
    img:
      'https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg',
    desc: `Red bean paste dessert, serving with honey.`
  }
]

let activeButton
const section = document.querySelector('div.section-center.row')

function filterFoods(country) {
  return function() {
    section.innerHTML = ''
    activeButton.style.border = ''
    activeButton = this
    this.style.border = '1px solid #000'
    renderMenu((food) => !country || food.category === country)
  }
}

function renderButtons() { 
  const btnContainer = document.querySelector('div.btn-container')
  
  const allBtn = document.createElement('button')
  allBtn.innerText = 'All'
  allBtn.style.border = '1px solid #000'
  allBtn.onclick = filterFoods()
  activeButton = allBtn
  
  const chinaBtn = document.createElement('button')
  chinaBtn.innerText = 'China'
  chinaBtn.classList.add('btn-item')
  chinaBtn.onclick = filterFoods('China')
  
  const japanBtn = document.createElement('button')
  japanBtn.innerText = 'Japan'
  japanBtn.classList.add('btn-item')
  japanBtn.onclick = filterFoods('Japan')
  
  const koreaBtn = document.createElement('button')
  koreaBtn.innerText = 'Korea'
  koreaBtn.classList.add('btn-item')
  koreaBtn.onclick = filterFoods('Korea')
  
  btnContainer.append(allBtn, chinaBtn, japanBtn, koreaBtn)
}

function renderMenu(filterFn = (food) => food) {
  menu.filter(filterFn).map((food) => {
    const image = document.createElement('img')
    image.src = food.img
    image.classList.add('photo')
    
    const title = document.createElement('h4')
    title.innerText = food.title
    
    const price = document.createElement('h4')
    price.innerText = food.price
    
    const description = document.createElement('p')
    description.innerText = food.desc
    description.classList.add('menu-text')

    const titlePriceContainer = document.createElement('div')
    titlePriceContainer.classList.add('menu-title')
    titlePriceContainer.append(title, price)
    
    const infoContainer = document.createElement('div')
    infoContainer.classList.add('menu-info')
    infoContainer.append(titlePriceContainer, description)
    
    const container = document.createElement('div')
    container.classList.add('menu-items')
    container.append(image, infoContainer)
    
    section.appendChild(container)
  })
}

renderButtons()
renderMenu()
