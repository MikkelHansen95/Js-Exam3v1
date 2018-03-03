var personList = [];
var globalList = [];
function fetchFromServer(g,r,a){
    var url = "http://uinames.com/api/?amount="+a+"&region="+r+"&gender="+g;
    console.log(url);
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        if (response.status >= 400){
            alert("Cant do that");
            return 'error';
        }else{
            return response.json();
        }
    }).then(function (data) {
          if(data === 'error'){
              console.log("Something requested isn't possible");
          }else{
            var person = data;
            globalList = person;
            toTable(person);
        }
    });
    
}

var btn = document.getElementById("btnsend");
btn.onclick = function () {
    getDetails();   
};

function getDetails(){
    var g = document.getElementById("gender").value;
    var r = document.getElementById("region").value;
    var a = document.getElementById("amount").value;
    fetchFromServer(g,r,a);
}
function toTable(person) {
     var list = person.map(function (person) {
        return '<tr><td>' + person.name + '</td>'
                + '<td>' + person.surname + '</td>'
                + '<td>' + person.gender + '</td>'

                + '</tr>';
    });
    document.getElementById("tblbody").innerHTML = list;
}

var sqlbtn = document.getElementById("btnsql");
sqlbtn.onclick = function(){
    getSQL();
};

function getSQL(){
    var person = globalList;
    for (var i =0;i<person.length;i++){
         var sql = "INSERT INTO names (name,surname,gender) VALUES ('" + person[i].name + "','" +person[i].surname + "','"  +person[i].gender + "');";
         document.getElementById("sql").value += sql + "\n";
    }
 
}