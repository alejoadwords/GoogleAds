//Obtiene las variables GET de la URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = decodeURI(value);
    });
    return vars;
}

//El texto de la etiqueta h2 es el valor de la variable 'var'(nombre de la varible GET)
jQuery(function($){
    $('h1').text(getUrlVars()["kw"])
});
