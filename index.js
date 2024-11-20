let data=[];

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    data = json;
    renderProducts(data);
  });

function renderProducts(products) {
  const resultbox= document.querySelector('.results');
  resultbox.innerHTML='';
  products.forEach(product => {
    renderSingleProduct(product);
  });
}

function renderSingleProduct(product) {
  let resultDiv = document.createElement('div');
  resultDiv.classList.add('result');

  let resultImage = document.createElement('img');
  resultImage.className = 'image';
  resultImage.src = product.image;

  let resultTitle = document.createElement('h5');
  resultTitle.innerText = product.title;
  resultTitle.className='title'

  let resultPrice = document.createElement('p');
  resultPrice.className='price'
  resultPrice.innerText = `Price: $${product.price}`;

  let buyNowButton = document.createElement('button');
  buyNowButton.innerText = 'Buy now';
  buyNowButton.className = 'BuyButton';

  resultDiv.appendChild(resultImage);
  resultDiv.appendChild(resultTitle);
  resultDiv.appendChild(resultPrice);
  resultDiv.appendChild(buyNowButton);

  document.querySelector('.results').appendChild(resultDiv);
}

function searchItem(product) {
  document.querySelector('.searchItem').addEventListener('input', () => {
    const searchinput= document.querySelector('.searchItem').value.toLowerCase();
    const searchedproducts= data.filter(product=> {
      return product.title.toLowerCase().includes(searchinput)
    })
    renderProducts(searchedproducts);
  })
}

searchItem();
