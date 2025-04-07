## Sual 1 ##


[1]. İlk öncə "filterEmployees" funksiyasında digər funksiydan parametr ötürürük. 

[2]. Verilən data-nı filter edirik və callback function ilə cavabı return edirik.

[3]. Sonra  "filterEmployees" funkisyasında callback function ilə filter olunmuş datanı çağırırıq.

[4]. isMarketing funksiyasında employee department-nı oxuyur.

[5]. "filterEmployees" ilk öncə data-nı, sonra isMarketing funksiyasını, sonra result funksiyasını daxil edirik.



## Sual 2 ##

[1] filterEmployees funckisyasında return olunan item.condition səhvdir. Çünki, condition bir funksiyadır. Onu item.consition yazmaq olmaz. Kod belə olacaq: 

[////] function filterEmployees(data, condition, callback) {
[////] const filteredData = data.filter(function (item) {
[////]     return condition(item);
[////] });
[////] callback(filteredData);
[////] }


## Sual 3 ##

[////] const employees = [
[////]     { name: 'John', age: 30, department: 'Marketing' },
[////]     { name: 'Jane', age: 25, department: 'Finance' },
[////]     { name: 'Jim', age: 35, department: 'Sales' },
[////]     { name: 'Bob', age: 40, department: 'Marketing' },
[////]     { name: 'Sue', age: 28, department: 'Finance' }
[////] ];
[////] function filterEmployees(data, condition, callback) {
[////]     const filteredData = data.filter(function (item) {
[////]         return condition(item);
[////]     });
[////] 
[////]     callback(filteredData);
[////] }
[////] function isMarketing(employee) {
[////]     return employee.department === 'Marketing';
[////] }
[////] filterEmployees(employees, isMarketing, function (result) {
[////]     console.log(result);
[////] });