const product = [
    {
        id: 0 ,
        image:'pg1.jpg',
        title:'Foldable Mobile',
        price:100,
    },
    {
        id: 1 ,
        image:'pg2.jpg',
        title:'Air Pods Pro',
        price:1000,
    },
    {
        id: 2 ,
        image:'pg3.jpg',
        title:'250D DSLR Camera',
        price:1200,
    },
    {
        id: 3 ,
        image:'pg4.jpg',
        title:'Headphones',
        price:1300,
    },
    {
        id: 4 ,
        image:'pg5.jpg',
        title:'Smart Watch',
        price:700,
    }
]
const categories = [...new Set(product.map((item)=> {
    return item;
}))]
document.querySelector(".search_bar").addEventListener('keyup' , (e) => {  
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData);
})
const displayItem = (items) => {
    document.querySelector(".product").innerHTML = items.map((item)=> {
        var{title,price,image} = item;
        return (
            `
                <div class="box">
                    <div class="img_box">
                        <img src=${image}></img>
                    </div>
                    <div class = "bottom">
                        <p>${title}</p>
                        <h4>$${price}</h4>
                        <button>Add to cart</button>
                    </div>
                </div>
            `
        )
    }).join('')
}
displayItem(categories)