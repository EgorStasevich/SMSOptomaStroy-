function toBase64(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    document.getElementById('Base64Code').value = reader.result;
  }
  reader.readAsDataURL(file);
}
window.onload = function() {
  function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
  }
  document.getElementById('mainPage').onclick = function() {
    window.location.href = getBaseUrl();
  }
  document.getElementById('catalog').onclick = function() {
    window.location.href = getBaseUrl() + "catalog";
  }
  document.getElementById('account').onclick = function() {
    window.location.href = getBaseUrl() + "account";
  }
  document.getElementById('contacts').onclick = function() {
    window.location.href = getBaseUrl() + "contacts";
  }
  document.getElementById('heaters').onclick = function() {
    window.location.href = getBaseUrl();
  }
  document.getElementById('usage').onclick = function() {
    window.location.href = getBaseUrl() + "usage";
  }
  document.getElementById('itemImage').onchange = function(e) {
    toBase64(this);
  }

}
