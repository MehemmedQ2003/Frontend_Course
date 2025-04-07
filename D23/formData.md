1. # Yeni bir FormData obyekti yaratmaq üçün istifadə olunur.

var form = document.querySelector('form');
var formData = new FormData(form);


2. # Yeni bir açar-dəyər cütü əlavə etmək üçün istifadə olunur.

formData.append('username', 'john');
formData.append('profilePic', fileInput.files[0], 'profile.jpg');


3. # Müəyyən bir açar ilə əlaqəli bütün cütləri silmək üçün istifadə olunur.

formData.delete('username');


4. # Müəyyən bir açar ilə əlaqəli ilk dəyəri almaq üçün istifadə olunur.

var username = formData.get('username');


5. # Müəyyən bir açar ilə əlaqəli bütün dəyərləri almaq üçün istifadə olunur

var allUsernames = formData.getAll('username');


6. # Müəyyən bir açar ilə əlaqəli cütlərin olub-olmadığını yoxlamaq üçün istifadə 

var hasUsername = formData.has('username');


7. #  Müəyyən bir açar ilə əlaqəli cütü əlavə etmək və ya mövcud açar varsa, onu yeniləmək üçün istifadə olunur.

formData.set('username', 'john');
formData.set('profilePic', fileInput.files[0], 'profile.jpg');


8. # Hər bir açar-dəyər cütü üzərində təkrarlamaq və müəyyən bir funksiyanı icra etmək üçün istifadə olunur.

formData.forEach(function(value, key) {
  console.log(key + ': ' + value);
});