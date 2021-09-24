
    /* Маска для номера телефона */
    $(function($){
        $('[name="phone"]').mask("+7(999) 999-9999");
    });

    /* Валидация */
    const email = document.getElementById("email");
    const nameUser = document.getElementById("name");

    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Введите верный email! \n Допустимы только буквы латинского алфавита и строковые символы.")
        } else {
            email.setCustomValidity("");
        };
    }),

    nameUser.addEventListener("input", function (event) {
        if (nameUser.validity.patternMismatch) {
            nameUser.setCustomValidity("Введите верное имя! \n Допустимы только буквы русского алфавита, пробелы, тире.");
        } else {
            nameUser.setCustomValidity("");
        };
    });


