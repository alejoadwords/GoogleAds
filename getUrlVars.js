function obtenerValorParametro(sParametroNombre) {
var sPaginaURL = window.location.search.substring(1);
 var sURLVariables = sPaginaURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParametro = sURLVariables[i].split('=');
    vars[key] = decodeURI(value);
    if (sParametro[0] == sParametroNombre) {
      return sParametro[1];
    }
  }
 return null;
}

var parametro = obtenerValorParametro('kw');
document.getElementsByTagName('h1’)[0].innerHTML = parametro
