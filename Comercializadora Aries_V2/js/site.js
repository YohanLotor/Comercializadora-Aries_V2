// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


/*$(function () {
    $('.ui.modal').modal('show');
});*/


function MostrarOcultarElementoByCheck(Check, Elemento) {
    if ($("#" + Check).is(':checked')) {
        $("#" + Elemento).show();
    } else {
        $("#" + Elemento).hide();
    }
}
function MostrarOcultarElementoByDropDownList(DropDown, Elemento, Value) {
    if ($("#" + DropDown).val() == Value) {
        $('#' + Elemento).show();
    } else {
        $('#' + Elemento).hide();
    }
}
function MostrarOcultarElementoByDropDownList(DropDown, Elemento, Value, Input) {
    if ($("#" + DropDown).val() == Value) {
        $('#' + Elemento).show();
        $("#" + Input).prop("required", true);
        $("#" + Input).prop("required", false);
        $("#" + Input).val("");
    } else {
        $('#' + Elemento).hide();
    }
}
function MostrarOcultarElementoNumeroByCheck(Check, Elemento, Input) {
    if ($("#" + Check).is(':checked')) {
        $("#" + Elemento).show();
        $("#" + Input).prop("required", true);
    } else {
        $("#" + Elemento).hide();
        $("#" + Input).prop("required", false);
        $("#" + Input).val(0);
    }
}
function MostrarOcultarElementoTextoByCheck(Check, Elemento, Input) {
    if ($("#" + Check).is(':checked')) {
        $("#" + Elemento).show();
        $("#" + Input).prop("required", true);
    } else {
        $("#" + Elemento).hide();
        $("#" + Input).prop("required", false);
        $("#" + Input).val("");
    }
}
