
class Util {

  fetchJson(url) {
    return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
  }

}