function loveCalculate(){

let first=document.getElementById("first").value.trim().toLowerCase();
let second=document.getElementById("second").value.trim().toLowerCase();
let result=document.getElementById("result");

if(first==="" || second===""){
    result.innerText="Enter both names to see your Love % 😉"; 
return;
}

let combine=first+second;
let sum=0;
for(let i=0;i<combine.length;i++){

    sum+=combine.charCodeAt(i);

}
let percentage=(sum%61)+40;
result.innerText=`💘 Love Score: ${percentage} % 💝`;

}
const button = document.getElementById("button");

["first", "second"].forEach(id => {
  document.getElementById(id).addEventListener("keypress", (e) => {
    if (e.key === "Enter") button.click();
  });
});
