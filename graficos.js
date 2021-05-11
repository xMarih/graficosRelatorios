// function intercale(array1, array2) {
//   var arrayResult = [];
//   var total = 0;
//   if (array1.length > array2.length) {
//     total = array1.length;
//   } else {
//     total = array2.length;
//   }

//   for (var i = 0; i < total; i++) {
//     if (array1[i]) {
//       arrayResult.push(array1[i]);
//     }
//     if (array2[i]) {
//       arrayResult.push(array2[i]);
//     }
//   }

//   return arrayResult;
// }

var urlBase = 'https://registrocivilminas.org.br/relatorio/';

// let url2 = urlBase + 'obito/tres-anos-covid-quantidade-BH';
// let xhr = new XMLHttpRequest();
// xhr.responseType = "json";
// xhr.open('GET', url2, true);


// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//             var request2 = xhr.response;
//             console.log(request2);


//         } else {
//             alert("Erro ao carregar!")
//         }
//     }
// }
// xhr.send();


// var ano = request[i]["ano"];



// Graficos

function drawChart() {
  let url = urlBase + 'obito/tres-anos-covid-MG';
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open('GET', url, true);


  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var request = xhr.response;

        var totalRegistros = request[0]["totalRegistros"];

        var vetMes = new Array(totalRegistros);
        for (i = 0; i < totalRegistros; i++) {
          vetMes[i] = request[i]["mes"]
        }

        var vetquantidadeDeRegistro = new Array(totalRegistros);
        for (i = 0; i < totalRegistros; i++) {
          vetquantidadeDeRegistro[i] = parseFloat((request[i]["quantidadeDeRegistro"]).replace('.', ''))
        }
        // console.log(intercale(vetMes, vetquantidadeDeRegistro));
        

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: vetMes,
            datasets: [{
              label: '# of Votes',
              data: vetquantidadeDeRegistro,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
       




        // var data = google.visualization.arrayToDataTable(

        //   intercale(vetMes, vetquantidadeDeRegistro)
        // );


        // var data = google.visualization.arrayToDataTable([
        //   ['Mês', 'Mortes Gerais'],
        //   [ request[14]["mes"] ,       parseFloat((request[14]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[13]["mes"] ,       parseFloat((request[13]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[12]["mes"] ,       parseFloat((request[12]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[11]["mes"] ,       parseFloat((request[11]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[10]["mes"] ,       parseFloat((request[10]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[9]["mes"] ,       parseFloat((request[9]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[8]["mes"] ,       parseFloat((request[8]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[7]["mes"] ,       parseFloat((request[7]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[6]["mes"] ,       parseFloat((request[6]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[5]["mes"] ,       parseFloat((request[5]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[4]["mes"] ,       parseFloat((request[4]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[3]["mes"] ,       parseFloat((request[3]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[2]["mes"] ,       parseFloat((request[2]["quantidadeDeRegistro"]).replace('.' , ''))],
        //   [ request[1]["mes"] ,       parseFloat((request[1]["quantidadeDeRegistro"]).replace('.' , ''))],

        // ]);

        // var options = {
        //   title: 'Comparativo de Mortes em Minas Gerais',
        //   hAxis: { title: 'Ano', titleTextStyle: { color: '#333' } },
        //   vAxis: { minValue: 0 }
        // };

        // var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        // chart.draw(data, options);


      } else {
        alert("Erro ao carregar!")
      }
    }
    return request;
  }
  xhr.send();














}