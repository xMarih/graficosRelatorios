var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url1 = urlBase + 'obito/tres-anos-covid-MG';
let xhr1 = new XMLHttpRequest();
xhr1.responseType = "json";
xhr1.open('GET', url1, true);
var mortesCovidMG;


xhr1.onreadystatechange = function () {
  if (xhr1.readyState == 4) {
    if (xhr1.status == 200) {
      var request1 = xhr1.response;
      mortesCovidMG = new Array(request1.length);
      for (i = 1; i < request1.length; i++) {
        mortesCovidMG[i] = parseFloat((request1[i]["quantidadeDeRegistro"]).replace('.', ''))
      }

    }
    else {
      alert("Erro ao carregar!")
    }
    
  }
}
xhr1.send();


let url2 = urlBase + 'obito/tres-anos-covid-BH';
let xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open('GET', url2, true);
var mortesCovidBH;

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      var request2 = xhr.response;
      mortesCovidBH = new Array(request2.length);

      for (i = 1; i < request2.length; i++) {
        mortesCovidBH[i] = parseFloat((request2[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
    
  }
}
xhr.send();

var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url3 = urlBase + 'obito/tres-anos-geral-MG';
let xhr3 = new XMLHttpRequest();
xhr3.responseType = "json";
xhr3.open('GET', url3, true);
var mortesGeralMG;

xhr3.onreadystatechange = function () {
  if (xhr3.readyState == 4) {
    if (xhr3.status == 200) {
      var request3 = xhr3.response;
      
      mortesGeralMG = new Array(request3.length);

      for (i = 1; i < request3.length; i++) {
        mortesGeralMG[i] = parseFloat((request3[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }

  }
}
xhr3.send();

var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url4 = urlBase + 'obito/tres-anos-geral-BH';
let xhr4 = new XMLHttpRequest();
xhr4.responseType = "json";
xhr4.open('GET', url4, true);
var mortesGeralBH;

xhr4.onreadystatechange = function () {
  if (xhr4.readyState == 4) {
    if (xhr4.status == 200) {
      var request4 = xhr4.response;
      
      mortesGeralBH = new Array(request4.length);

      for (i = 1; i < request4.length; i++) {
        mortesGeralBH[i] = parseFloat((request4[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
  }
}
xhr4.send();





// Graficos

function graficosObito() {
  let url = urlBase + 'obito/tres-anos-covid-MG';
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open('GET', url, true);


  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var request = xhr.response;

      

        var vetMes = new Array(request.length);
        for (i = 1; i < request.length; i++) {
          vetMes[i] = request[i]["mes"]
        }

        var ctx = document.getElementById('graficosObito').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: vetMes.reverse(),
            datasets: [
              {
                label: 'Numeros de Mortes por COVID em Minas gerais',
                data: mortesCovidMG.reverse(),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
              },
              {
                label: 'Numeros de Mortes por COVID em Belo Horizonte',
                data: mortesCovidBH.reverse(),
                backgroundColor: [
                  'rgba(70 , 70, 230, 0.2)',
                ],
                borderColor: [
                  'rgba(70 , 70, 230, 1)',
                ],
                borderWidth: 1
              },
              {
                label: 'Numeros de Mortes em Minas gerais',
                data: mortesGeralMG.reverse(),
                backgroundColor: [
                  'rgba(70, 230, 90, 0.2)',
                ],
                borderColor: [
                  'rgba(70, 230, 90, 1)',
                ],
                borderWidth: 1
              },
              {
                label: 'Numeros de Mortes em Belo Horizonte',
                data: mortesGeralBH.reverse(),
                backgroundColor: [
                  'rgba(0 , 0, 0, 0.2)',
                ],
                borderColor: [
                  'rgba(0 , 0, 0, 1)',
                ],
                borderWidth: 1
              },

            ]
          },
          options: {
            scales: {
              y: {
                Min: 50,
                Max: 15000
              }
            }
          }
        });
      } else {
        alert("Erro ao carregar!")
      }
    }
    return request;
  }
  xhr.send();
}