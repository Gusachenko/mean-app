$(document).ready(function(){
    $('.db-form-auth__btn-connect').click(e => {

        let dbFormAuth_inputName = $('.db-form-auth__input-name')[0].value;
        let dbFormAuth_inputPassword = $('.db-form-auth__input-password')[0].value;

        let sendedObject = { name: dbFormAuth_inputName, pass: dbFormAuth_inputPassword };
        console.log(sendedObject);
        console.log("sendedObject");
        let onSubmit = $.ajax({
                        type: "POST",
                        url: "api/products",
                        data: JSON.stringify(sendedObject),
                        contentType: 'application/json; charset=utf-8',
                        dataType: "json",
                        success: function(resData){
                                console.log("success");
                            }                       
                        })
        .done( res => {
            $('.response-block__result')[0].innerHTML = JSON.stringify(res);
        })
        .fail( fail => {
            $('.response-block__result')[0].innerHTML = fail.responseText;
        });

    });
});