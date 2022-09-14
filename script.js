var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()) 
 .then((value)=>bar(value))
    
  function bar(value) {
    
  
   for(var i=0;i<value.length;i++){
           
      var div=document.createElement("div");  
      div.style.color="blue";
      div.style.fontSize="20px";
       div.innerHTML= `<div class="card border-secondary mb-3" style="max-width: 18rem;">
             <div class="card-header">${value[i].name}</div>
           <div class="card-body text-secondary">
           <h5 class="card-title">${value[i].capital}</h5>
           <img src="${value[i].flag}" class="card-img-top" 
    
       </div>
     </div>`;
       document.body.append(div);
   } ;
};