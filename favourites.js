// write js code here corresponding to favourites.html
// write js code here corresponding to matches.html
var favArr = JSON.parse(localStorage.getItem("favourites"));
displaydata(favArr);
function display(data){
    data.forEach(function(element,index){
        var tr =document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerHTML=element.macthNo;
        var td2=document.createElement("td")
        td2.innerHTML=element.teamA;
        var td3=document.createElement("td")
        td3.innerHTML=element.teamB;
        var td4=document.createElement("td")
        td4.innerHTML=element.Date;
        var td5=document.createElement("td")
        td5.innerText=element.venue;
        var td6=document.createElement("td")
        td6.innerText = "remove as Favourites";
        td6.style.color = " red";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function () {
        function deleteItem(elem, index) {
            favArr.splice(index, 1);
            localStorage.setItem("favourites", JSON.stringify(favArr));
          
            window.location.reload();
        }
        
