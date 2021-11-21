/*================================== Funciones formulario Registrar Usuario ===================================*/

// validaciones campos registrar 
$("#formularioReg").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 80,
        },
        email: {
            required: true,
            minlength: 3,
            maxlength: 50,
            email: true,
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 16,
        },
        password_confirm: {
            required: true,
            minlength: 6,
            maxlength: 16,
            equalTo: "#password",
        }
    }
})

$("#registrar").click(function () {
    if ($("#formularioReg").valid() == false) {
        return;
    }
    let name = $("#name").val()
    let email = $("#email").val()
    let password = $("#password").val()
    let password_confirm = $("#password_confirm").val()
})// fin validaciones 

//// Post
function guardarUsuarios() {
    let var1 = {
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var1),

        url: "http://localhost:8080/api/user/new",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            swal("Validación","Cuenta creada de forma correcta","success");

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            swal("Validación","No se guardo correctamente","error");
        }
    });

} //// fin Post



/*================================== Funciones formulario Login ===================================*/

// validaciones campos login
$("#formulario").validate({
    rules: {
        email: {
            required: true,
            minlength: 3,
            maxlength: 50,
            email: true,
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 16,
        }
    }
})

$("#login").click(function () {
    if ($("#formulario").valid() == false) {
        return;
    }
    let email = $("#email").val()
    let password = $("#password").val()
})// fin validaciones

//// GET
function traerUsuarios() {
    var email = $("#email").val();
    var password = $("#password").val();

    $.ajax({
        url: "http://localhost:8080/api/user/all",
        type: "GET",
        datatype: "JSON",
        data: JSON.stringify(email),
        success: function () {
            if (form.email.value == "#email" && form.password.value == "#password") {
                swal("Validación","Bienvenido", "success");
        
            } else {
                swal("Validación","El usuario no existe, por favor ingrese los datos correctos", "error");
            }
        }
    });
     
    


}