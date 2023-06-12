//get total price
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//grt total
function getTotal(){
    if(price.value != ''){
      let res=  (+price.value + +ads.value + +taxes.value ) - +discount.value;
       total.innerHTML = res;
       total.style.background = 'green';

    }else{
        total.innerHTML = '' ;
        total.style.background = 'brown';
    }
    

   

}

//create item

let dataPro;
if(localStorage.product != null){
   dataPro = JSON.parse(localStorage.product );
}else{
    dataPro = [];

}


submit.onclick = function(){
let newPro = {
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total :total.innerHTML,
    count :count.value,
    category :category.value


}
dataPro.push(newPro);
//save localstorage
localStorage.setItem('product', JSON.stringify(dataPro) );

clearItem();
showData();

}


//clear Item

function clearItem(){
    title.value = '';
    price.value = '' ;
    taxes.value = '';
    ads.value= '';
    discount.value = '';
    total.innerHTML = '';
    category.value = ''
    count.value = '';
    

}

//read data

function showData(){

    let table = '';
    for(let i = 0 ; i < dataPro.length ;i++){

    table += `
    <tr>
     <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td>${dataPro[i].count}</td> 
    <td><button id="update">update</button></td>
    <td><button id="delete">delete</button></td>
     </tr>
    
    `

 }

 document.getElementById('tbody').innerHTML = table;

}