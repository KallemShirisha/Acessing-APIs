
function display(){
    var request=new XMLHttpRequest();
    let city=document.getElementById("city").value
   var apikey='5efc2a270243044daa181e47bb804b95'
   let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`
     request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var res=JSON.parse(request.responseText)
        console.log(res.cod)
        console.log(res)
       if(res.cod==200){
        t=document.createElement("TABLE")
        var style=document.createElement('style');
        t.style.backgroundColor = 'pink';
        t.style.padding="20px";
        t.border="1"
        t.style.fontSize="30px";
        var row=t.insertRow(-1);
        var ch1=row.insertCell(-1);
        var ch2=row.insertCell(-1);
        var ch3=row.insertCell(-1);
        var ch4=row.insertCell(-1);
        var ch5=row.insertCell(-1);
        ch1.innerHTML="Date";
        ch2.innerHTML="Time";
        ch3.innerHTML="Temp";
        ch4.innerHTML="Min-Temp";
        ch5.innerHTML="Max-Temp";
        res.list.forEach((day)=>{
            var r1=t.insertRow(-1);
            var c1=r1.insertCell(-1);
            var c2=r1.insertCell(-1);
            var c3=r1.insertCell(-1);
            var c4=r1.insertCell(-1);
            var c5=r1.insertCell(-1);
            var a=day.dt_txt.split(" ");
            c1.innerHTML=a[0];
            c2.innerHTML=a[1];
            c3.innerHTML=day.main.temp;
            c4.innerHTML=day.main.temp_min;
            c5.innerHTML=day.main.temp_max;
            
        })
        tableDiv=document.getElementById("tempTable");
     
        tableDiv.append("Enter proper city name");
        document.getElementById("tempTable").innerHTML="";
        tableDiv.append(t);
    }
    else{
    tableDiv=document.getElementById("tempTable");
    var style=document.createElement('style');
        tableDiv.innerHTML="Enter proper city name";
        tableDiv.style.backgroundColor="pink";
        tableDiv.style.width ="530px";
        tableDiv.style.borderRadius="15px 50px";
        tableDiv.style.margin="100px";
        tableDiv.style.fontSize="40px";
    }
    }
   
}