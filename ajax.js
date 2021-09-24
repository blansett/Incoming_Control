/* Ajax-запрос */
$("#button").click(
    function(){
        sendAjaxForm('result_form', 'ajax_form', 'https://60376bfd5435040017722533.mockapi.io/form');
            return false;
    }
);

let res = document.getElementById("result_form").innerHTML;

function sendAjaxForm(result_form, ajax_form, url) {
    jQuery.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        data: jQuery("#"+ajax_form).serialize(),
        success: function(response) {
        result = jQuery.parseJSON(response);
        },
        error: function(response) {
            document.getElementById('result_form').innerHTML = "Ошибка. Данные не отправлены.";
        }
    });
};
