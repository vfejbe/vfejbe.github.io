var a =[]
function addMe() {
 var b=document.getElementById("food").value;
 document.getElementById("food").value="";
 a.push(b);
 }
function listMe(){
 for(i=0; i<a.length;i++){
   var newP = document.createElement('p');
   var newText=document.createTextNode(a[i]);
   newP.appendChild(newText);
   document.body.appendChild(newP);
 }
a=[] ;
}
