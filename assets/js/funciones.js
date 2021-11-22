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
    var email = $("#email").val();

    $.ajax({
        url: "http://152.70.222.238:8081/api/user/"+email,
        type: "GET",
        datatype: "JSON",
        success: function (response) {
            console.log(response)
            if (response == true) {
                swal("El usuario ya existe, valide los datos o ingrese al sistema por el Login","Validación Incorrecta", "error");
            } else {
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
                    url: "http://152.70.222.238:8081/api/user/new",
                    success: function (response) {
                        console.log(response);
                        console.log("Se guardo correctamente");
                        swal("Cuenta creada de forma correcta","Validación Correcta", "success");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        swal("No se guardo correctamente, valido los campos","Validación Incorrecta","error");
                    }
                });
            }            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal("Validación","Error en la aplicacion, comuniquese conel administrador del sistema","error");
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

    $.ajax({
        url: "http://152.70.222.238:8081/api/user/"+email,
        type: "GET",
        datatype: "JSON",
        success: function (response) {
            console.log(response)
            if (response == true) {                
                swal("Bienvenido "+email, "Validación Correcta", "success");
            } else {
                swal("El usuario no existe, por favor valide los datos","Validación Incorrecta", "error");
            }            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal("Validación","Error en la aplicacion, comuniquese conel administrador del sistema","error");
        }
    });
}