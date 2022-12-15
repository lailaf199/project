
        /* Remove spaces from Captcha Code */  
        function removeSpaces(string) {  
            return string.split(' ').join('');  
        }
         function ValidCaptcha() {  
            var str1 = removeSpaces(document.getElementById('txtCaptcha').value);  
            var str2 = removeSpaces(document.getElementById('txtCompare').value);  
  
            if (str1 == str2) return true;  
            return false;  
        }  
  function scheduleA(event) {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("programflitter");

  filter = input.value.toUpperCase();
  if(filter!="ALL")
  {table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }}else{
        table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
       
          tr[i].style.display = "";
         
      }       
    

    }
}
}

            function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;

  var radios = document.getElementsByName('sortmytable');
  var indexofsort=0;
for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    //alert(radios[i].value);
     if(radios[i].value=="name"){
   indexofsort=2;
  }else if(radios[i].value=="Program"){
 indexofsort=3;
  }else{
 indexofsort=0;
  }

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
   

 
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[indexofsort];
      y = rows[i + 1].getElementsByTagName("TD")[indexofsort];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
              function converttableToJosn() {
        var _table = document.getElementById("myTable");
var _trLength = _table.getElementsByTagName("tr").length;
var _jsonData = [];
var _obj = {};

var _htmlToJSON = function(index){

    var _tr = _table.getElementsByTagName("tr")[index];
    var _td = _tr.getElementsByTagName("td");
    var _arr = [].map.call( _td, function( td ) {
        return td.innerHTML;
    }).join( ',' );
    var _data = _arr.split(",");
var myJSON = "{متسلسل  :"+ _data[0] +",اسم المستخدم :"+_data[1] +",اسم الطالب  :" +_data[2]+",البرنامج  :"+_data[3]+"}  ";
    _jsonData.push(myJSON);
    
};

for(var i = 1; i < _trLength; i++){
    _htmlToJSON(i);
}

document.getElementById("w3review").value= _jsonData;

        }
        function myFunction() {
var isArabic = /[\u0600-\u06FF\u0750-\u077F]/;
  var re = /^[a-z]+_+.*[0-9]+$/;
    var re1 = /^[ء-ي ]+$/;
      var re2 = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
           var re3 = /\+[0-9]{3}[0-9]{9}/;


      



      if(ValidCaptcha()) {     
 if (re.test(document.getElementsByTagName('input')[0].value) &&  re1.test(document.getElementsByTagName('input')[1].value) &&  re2.test(document.getElementsByTagName('input')[2].value) &&  document.getElementsByTagName('input')[4].value!=""  &&  re3.test(document.getElementsByTagName('input')[3].value) && isArabic.test(document.getElementsByTagName('input')[1].value)) {

    
    var name =  document.getElementsByTagName('input')[0].value;
    var student =  document.getElementsByTagName('input')[1].value;
       var e = document.getElementById("programselected");
     var program = e.value;
     
         var table = document.getElementById("myTable");
       var row = table.insertRow( table.rows.length);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       cell4.innerHTML = program;
       cell3.innerHTML = student;
         cell2.innerHTML =name;
       cell1.innerHTML = table.rows.length-1;}
  }else{
       alert('Captcha incrrect');
      }}

  function GenerateCaptcha() {  
            var chr1 = Math.ceil(Math.random() * 10) + '';  
            var chr2 = Math.ceil(Math.random() * 10) + '';  
            var chr3 = Math.ceil(Math.random() * 10) + '';  
  
            var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
            var captchaCode = str + chr1 + ' ' + chr2+ chr3;  
            document.getElementById("txtCaptcha").value = captchaCode  
        }  
  
      
