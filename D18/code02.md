## Sual 1 ##


[1]. İlk öncə "sortProducts" funksiyasında digər funksiydan parametr ötürürük. 

[2]. Verilən data-nı sort edirik və callback function ilə cavabı return edirik.

[3]. Sonra  "filterEmployees" funkisyasında callback function ilə sort olunmuş datanı çağırırıq.

[4]. showPrice funksiyasında product name-i oxuyur.

[5]. "sortProducts" ilk öncə products-ı, sonra showPrice funksiyasını, sonra result funksiyasını daxil edirik.



## Sual 2 ##

[1] filterEmployees funckisyasında return olunan item.condition səhvdir. Çünki, condition bir funksiyadır. Onu item.consition yazmaq olmaz. Kod belə olacaq: 

[////] function sortProducts(data, isPrice , callback) {
[////]     const sortData = data.sort((a, b) => {
[////]         return isPrice(a) - isPrice(b);
[////]     })
[////]     callback(sortData)
[////] }


## Sual 3 ##

[////] const products = [
[////]     {name: "Laptop", price: 1000},
[////]     {name: "Mouse", price: 50},
[////]     {name: "Keyboard", price: 75},
[////]     {name: "Monitor", price: 200}
[////] ]
[////] function sortProducts(data, isPrice , callback) {
[////]     const sortData = data.sort((a, b) => {
[////]         return isPrice(a) - isPrice(b);
[////]     })
[////]     callback(sortData)
[////] }
[////] function showPrice(product){
[////]     return product.price
[////] }
[////] sortProducts(products, showPrice, function(result){
[////]     console.log(result);
[////] })