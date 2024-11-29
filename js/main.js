var nam = document.getElementById("name");
var url  = document.getElementById("url");
var x = document.getElementById("x");




var allSites = [];
if(localStorage.getItem("all")!=null){
    allSites = JSON.parse(localStorage.getItem("all"));
    display();
}
//*catch values and add
function getValues()
{
    if(validName()==true&&validUrl()==true)
    {
        var obj = {
            siteName:nam.value,    //*getter
            websiteUrl:url.value,
         }
         allSites.push(obj);
         localStorage.setItem("all",JSON.stringify(allSites));
         display();
         clearInputs();
    }
   else
   {
    window.alert(`
Site Name or Url is not valid, Please follow the rules below :

Site name must contain at least 3 characters
Site URL must be a valid one`)
   }

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
                    <td><button class="btn btn-success px-4 " onclick = "visit"><i class="fa-solid fa-eye"></i> Visit</button></td>
                    <td><button class="btn btn-danger px-4" onclick = "deleteElements(${i})"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
                </tr>
                `
x.innerHTML =cartona;

}


function deleteElements(index)
{
 allSites.splice(index,1) ;
 display();
 localStorage.setItem("all",JSON.stringify(allSites));
}

function validName()
{
    var regex = /^[a-z]{3,15}$/;
    if(regex.test(nam.value)==true)
    {
        return true;
    }
    return false;
}
function validUrl(){
var regex = /((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
if(regex.test(url.value)==true){
    return true;
    
}
return false;
}

