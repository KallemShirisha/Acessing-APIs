function covid(){
var request=new XMLHttpRequest();
        const uname=document.getElementById("c").value
        const url=`https://api.github.com/users/${uname}/repos`
        request.open('GET',url,true);
        request.send();
        request.onload=function(){
            var res=JSON.parse(request.response)
           
           
            if(res.message!="Not Found"){
            t=document.createElement("TABLE")
            t.style.backgroundColor = 'pink';
            t.style.padding="20px";
            t.border="1"
            t.style.fontSize="30px";
            t.border="1"
            var row=t.insertRow(-1);
            var ch1=row.insertCell(-1);
            var ch2=row.insertCell(-1);
            ch1.innerHTML="Repository";
            ch2.innerHTML="Description";
            res.forEach((data)=>{
                var r1=t.insertRow(-1);
                var c1=r1.insertCell(-1);
                var c2=r1.insertCell(-1);
                c1.innerHTML=data.name;
                c2.innerHTML=data.description;
             })
            tableDiv=document.getElementById("tempTable")
            document.getElementById("tempTable").innerHTML="";
            tableDiv.append(t);
            }
            else{
                tableDiv=document.getElementById("tempTable");
                var style=document.createElement('style');
                    tableDiv.innerHTML="Enter proper user name";
                    tableDiv.style.backgroundColor="pink";
                    tableDiv.style.width ="530px";
                    tableDiv.style.borderRadius="15px 50px";
                    tableDiv.style.margin="100px";
                    tableDiv.style.fontSize="40px";
                }
}}