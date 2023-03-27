function addNewWEField(){
 // we have to creat a new node
 let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("weField");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter Here");

 newNode.style.width="500px";
 newNode.style.marginTop="10px";

 let weOb=document.getElementById("we");
//  console.log(weOb);
 let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewEqField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter Here");

   newNode.style.width="500px";
   newNode.style.marginTop="10px";

   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode,aqAddButtonOb);
 
}

// function removeBox(){
//    let newButton=document.createElement("button");
//    newButton.innerHTML="Remove";
//    newButton.style.width="70px";
//    newButton.style.height="40px";
//    newButton.style.border="2px";
//    newButton.style.borderRadius="5px";
//    let aqAddButton=document.getElementById("aqAddButton");
//    aqAddButton.appendChild(newButton);
// }

//----------------------------------------Genrating cv-------------------------------------------------------

function genrateCv(){
   // console.log("genrating cv"); cheking 
//setting the name fields====================
   let nameField=document.getElementById("nameField");
   let nameFieldT1=document.getElementById("nameT1");
   nameFieldT1.innerHTML=nameField.value;
   //or
   document.getElementById("nameT2").innerHTML=nameField.value;
 

   //setting the contact No field===========

   let contactField=document.getElementById("contactField").value;
   document.getElementById("contactT").innerHTML=contactField;

   //setting the value of address

   //setting  address value
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
   
   //now for id========================
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
   document.getElementById("lkdnT").innerHTML=document.getElementById("lkdnField").value;

// code for uploading image
//this forms array and we need only one pic(at zero index only on will be there)
let file=document.getElementById("imgField").files[0];
let reader=new FileReader();
reader.readAsDataURL(file);
 reader.onload=function(){
   document.getElementById("imgFieldT").src=reader.result;
}



// seting the image to template

   // personal infromation field(end) completed---------------------------------

// start profession information field code------------------------

// objetive 
document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

// now work exp imp logic here work experience
// array then loop 
let weF=document.getElementsByClassName("weField");
let strWeF="";
for(let e of weF){
   strWeF=strWeF+`<li>${e.value}</li>`;
}
document.getElementById("weT").innerHTML=strWeF;



// Acadmic qualification 
// array then loop 
let eqF=document.getElementsByClassName("eqField");
let strAq="";
for(let e of eqF){
   strAq=strAq+`<li>${e.value}</li>`;
   // console.log(strAq);
}
document.getElementById("aqT").innerHTML=strAq;

//now cv form hide and show cv temp
document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display="block";

}
// printig CV

const printCv=()=>{
   window.print();
}

