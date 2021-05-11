var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url7 = urlBase + 'casamento/tres-anos-casamento-MG';
let xhr7 = new XMLHttpRequest();
xhr7.responseType = "json";
xhr7.open('GET', url7, true);
var casamentoMG;


xhr7.onreadystatechange = function () {
  if (xhr7.readyState == 4) {
    if (xhr7.status == 200) {
      var request7 = xhr7.response;
      casamentoMG = new Array(request7.length);
      for (i = 1; i < request7.length; i++) {
        casamentoMG[i] = parseFloat((request7[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
  }
}
xhr7.send();


let url8 = urlBase + 'casamento/tres-anos-casamento-BH';
let xhr8 = new XMLHttpRequest();
xhr8.responseType = "json";
xhr8.open('GET', url8, true);
var casamentoBH;

xhr8.onreadystatechange = function () {
  if (xhr8.readyState == 4) {
    if (xhr8.status == 200) {
      var request8 = xhr8.response;
      casamentoBH = new Array(request8.length);

      for (i = 1; i < request8.length; i++) {
        casamentoBH[i] = parseFloat((request8[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
    
  }
}
xhr8.send();

// Graficos
function graficosCasamento() {
  let url = urlBase + 'casamento/tres-anos-casamento-MG';
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

        var ctx = document.getElementById('graficosCasamento').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: vetMes.reverse(),
            datasets: [
              {
                label: 'Numeros de casamentos em Minas gerais',
                data: casamentoMG.reverse(),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
              },
              {
                label: 'Numeros de casamentos em Belo Horizonte',
                data: casamentoBH.reverse(),
                backgroundColor: [
                  'rgba(70 , 70, 230, 0.2)',
                ],
                borderColor: [
                  'rgba(70 , 70, 230, 1)',
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