function submitForm() {
    let form = document.getElementById('myForm');

    let formData = new FormData(form);

    formData.forEach(function(value, key) {
        console.log(key + ': ' + value);
    });

    form.username.value = '';
    form.email.value = '';
    form.profilePic.value = '';

}
