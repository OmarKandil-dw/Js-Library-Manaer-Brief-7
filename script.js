var Titre = document.getElementById("title");
var Auteur = document.getElementById("auteur");
var Prix = document.getElementById("prix");
var date = document.getElementById("date");
var valida= document.getElementsByClassName("validation");
var radioCheck=document.getElementById("radiobtn");
var input = document.getElementsByTagName("input");
var langue=document.getElementById("langue");
var table = document.getElementById("table");
var type=document.getElementsByClassName("type");
var email = document.getElementById("email")


function validation(e){
    var no_valide=0;
    //////require:

    e.preventDefault();
    for(var i = 0; i<4;i++){
        if (input[i].value == ""){
            input[i].style.borderColor="red";
            no_valide++;
        }
        else{
            // input[i].nextElementSibling.innerHTML="valider";
            input[i].style.borderColor="green"
        }
    }     
    //////require RADIO
    var getSelectedValue = document.querySelector(   
         'input[name="season"]:checked');   
        
    if(getSelectedValue !== null) {   
        document.getElementById("radiobtn").innerHTML = getSelectedValue.value + "type  is selected";   
    }   
    else {   
        document.getElementById("radiobtn").innerHTML = "*You have not selected any type";  
        no_valide++; 
    } 
    
    //////require drop

    if(langue.value=="0")
    {
        lng.innerHTML="Please select an option!";
        langue.style.borderColor="red"
        no_valide++;
    }
    else{
        lng.innerHTML="valider";
        langue.style.borderColor="green"
        
    }
    /////////////////prix

    if(Prix.value !=="" )
    {
        if(!isNaN(Prix.value))
        {
            if(Prix.value>0)
            {
                msgPrix.innerHTML="valider";
            }
            else
            {
                msgPrix.innerHTML="nigatif";
            }
        }
      
       
    }
    
    ///////////////table/////////////////

if(no_valide==0)
{


    var newRow = table.insertRow(-1);
            cell1 = newRow.insertCell(0);
            cell2 = newRow.insertCell(1);
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
            cell6 = newRow.insertCell(5);
            cell7 = newRow.insertCell(6);
            cell8 = newRow.insertCell(7);
        var CellType="";
        for(i=0;i<type.length;i++)
        {
            if(type[i].checked)
            {
                CellType=type[i].value;
            }
        }




        cell1.innerHTML = Titre.value;
        cell2.innerHTML = Auteur.value;
        cell3.innerHTML = Prix.value;
        cell4.innerHTML = date.value;
        cell5.innerHTML = langue.options[langue.selectedIndex].value;
        cell6.innerHTML = email.value;
        cell7.innerHTML= CellType;
        cell8.innerHTML='<input type="button"  value="Edit" onclick="EditRow(this)" class="btn1">'
        + '<input type="button" onclick="deleteRow(this)"  value="Delete" class="btn2">';





       
}
for(var i = 0; i<4;i++){
    input[i].value = "";
}  

}
document.getElementsByTagName("form")[0].addEventListener('submit', validation);



  
function EditRow(r){
   ed = r.parentNode.parentNode
    
   if(r.value=="Edit"){
       
  document.getElementById("title").value = ed.cells[0].innerHTML;
  document.getElementById("auteur").value= ed.cells[1].innerHTML;
  document.getElementById("prix").value= ed.cells[2].innerHTML;
  document.getElementById("date").value= ed.cells[3].innerHTML;
  document.getElementById("langue").value=ed.cells[4].innerHTML;
  document.getElementById("email").value=ed.cells[5].innerHTML;
  document.getElementsByClassName("type").value=ed.cells[6].innerHTML;
    
    r.value = "save"
    document.getElementById("btn").setAttribute("disabled" , "true");
   }
   else {
    ed.cells[0].innerHTML= document.getElementById("title").value 
    ed.cells[1].innerHTML= document.getElementById("auteur").value
    ed.cells[2].innerHTML= document.getElementById("prix").value
    ed.cells[3].innerHTML= document.getElementById("date").value
    ed.cells[4].innerHTML= document.getElementById("langue").value
    ed.cells[5].innerHTML= document.getElementById("email").value
    CellType="";
    for(i=0;i<type.length;i++)
    {
        if(type[i].checked)
        {
            CellType=type[i].value;
        }
    }

    
    ed.cells[6].innerHTML= CellType
    alert(CellType)


    r.value = "Edit"

    document.getElementById("btn").removeAttribute("disabled");
    for(var i = 0; i<4;i++){
        input[i].value = "";
    }  
    
   }

    }

 /////////////////////////////////////DELETE/////////////////////////////////////////////

function deleteRow(r) {
    var xx = r.parentNode.parentNode.rowIndex;
    
    if(confirm("Do you want to delete this ???"))
    {
        table.deleteRow(xx);  
    }
  
}


  
    

