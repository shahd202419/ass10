var nam = document.getElementById("name");
var url  = document.getElementById("url");
var x = document.getElementById("x");




var allSites = [];
// if(localStorage.getItem("sites")=!null){
//     allSites = JSON.parse(localStorage.getItem("sites"));
//     display();
// }
//*catch values and add
function getValues()
{
 var obj = {
    siteName:nam.value,    //*getter
    websiteUrl:url.value,
 }
 allSites.push(obj);
 localStorage.setItem("sites",JSON.stringify(allSites));
 display();
 clearInputs();
}


//*clear values
function clearInputs()
{
nam.value = "";
url.value = "";
}


//*display values
function display(){

    var cartona = ``;
    for(var i = 0 ; i< allSites.length; i++)
        cartona+=`
                    <tr>
                    <td>${i}</td>
                    <td>${allSites[i].siteName}</td>
                    <td><button class="btn btn-success px-4 "><i class="fa-solid fa-eye"></i> Visit</button></td>
                    <td><button class="btn btn-danger px-4"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
                </tr>
                `
x.innerHTML =cartona;

}

//*localStorage