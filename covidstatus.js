function covid(){
    var request=new XMLHttpRequest();
            const country=document.getElementById("c").value
            const url=`https://api.covid19api.com/country/${country}`
            request.open('GET',url,true);
            request.send();
            request.onload=function(){
                var res=JSON.parse(request.response)
              
                if(res.length>0){
                t=document.createElement("TABLE")
                t.border="1"
                var row=t.insertRow(-1);
                var ch1=row.insertCell(-1);
                var ch2=row.insertCell(-1);
                var ch3=row.insertCell(-1);
                t.style.backgroundColor = 'pink';
                t.style.padding="20px";
                t.border="1"
                t.style.fontSize="30px";
                ch1.innerHTML="active cases";
                ch2.innerHTML="deaths";
                ch3.innerHTML="recovered";
                console.log(res);
                 res.forEach((data)=>{
                    var r1=t.insertRow(-1);
                    var c1=r1.insertCell(-1);
                    var c2=r1.insertCell(-1);
                    var c3=r1.insertCell(-1);
                    c1.innerHTML=data.Active;
                    c2.innerHTML=data.Deaths;
                    c3.innerHTML=data.Recovered;
                 })
                tableDiv=document.getElementById("tempTable")
                document.getElementById("tempTable").innerHTML="";
                tableDiv.append(t);
                }
                else{
                    tableDiv=document.getElementById("tempTable");
                    var style=document.createElement('style');
                        tableDiv.innerHTML="Enter proper country name";
                        tableDiv.style.backgroundColor="pink";
                        tableDiv.style.width ="530px";
                        tableDiv.style.borderRadius="15px 50px";
                        tableDiv.style.margin="100px";
                        tableDiv.style.fontSize="40px";
                    }
               
                
            }}