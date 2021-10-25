function getSelectedEducation(){
    var Selectededucation=document.getElementById("education").value;
    console.log(Selectededucation);
    return Selectededucation;
}

function getSelectedNetworth(){
    var SelectedNetworth=document.getElementById("networth").value;
    console.log(SelectedNetworth);
    return SelectedNetworth;
}

function getSelectedCaste(){
    var SelectedCaste=document.getElementById("caste").value;
    console.log(SelectedCaste);
    return SelectedCaste;
}

function getSelectedAge() {
            var ele = document.getElementsByName('age');
            var age;
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                var age=ele[i].value;
                }
            }
    return age;
        }


function getSelectedCheck(){
    var myArray=[];
    var form = document.getElementById('forms');
  form.querySelectorAll('input').forEach(function (input) {
    if(input.type === 'checkbox' && input.checked) {
      myArray.push(input.value);
    }
  })
    console.log(myArray)
    return myArray;
}

document.getElementById('btn').addEventListener("click", function() {
    const element = document.getElementById("id01");
element.innerHTML = "Final price";
    

  var total=100;
  var education=getSelectedEducation();
  var networth=getSelectedNetworth();
  var caste=getSelectedCaste();
  var age=getSelectedAge();
  var Myarray=[];
  Myarray=getSelectedCheck();
    
    var coefficentEducation;
    if(education=="undergraduate"){
        coefficentEducation=1.5;
    }
    else if(education=="college"){
          coefficentEducation=1.2;  
            }
    else if(education=="high_school"){
        coefficentEducation=1.05;
    }
    else {
        coefficentEducation=0.95;
    }
    
    var coefficentNetworth;
    if(networth=="rich"){
        coefficentNetworth=2;
    }
    else if(networth=="medium"){
        coefficentNetworth=1.5;
    }
    else {
        coefficentNetworth=1.2;
    }
    
    var CasteIncrease;
    if(caste=="brahmin"){
        CasteIncrease=100;
    }
    else if(caste=="Kshatriya"){
        CasteIncrease=50;
    }
    else if(caste=="vaishya"){
        CasteIncrease=20;
    }
    else if(caste=="shudra"){
        CasteIncrease=10;
    }
    else CasteIncrease=-50;
    
    
    var coefficentAge;
    if(age=="1823"){
        coefficentAge=1.5;
    }
    else if(age=="2427"){
        coefficentAge=1.2;
    }
    else coefficentAge=0.95;
    
    var Myarray=[];
    var instrument=0,cooking=0,easygoing=0,singing=0,parents=0,charecter=0,person=0;
    Myarray=getSelectedCheck();
    
    for(var i=0;i<Myarray.length;i++){
        if(Myarray[i]=="instrument"){
            instrument=10;
        }
        else if(Myarray[i]=="cooking"){
            cooking=20;
        }
        else if(Myarray[i]=="easygoing"){
            easygoing=15;
        }
        else if(Myarray[i]=="singing"){
            singing=10;
        }
        
        else if(Myarray[i]=="parents"){
            total=total*0.85;
        }
        else if(Myarray[i]=="charecter"){
            total=total*0.9;
        }
        else if(Myarray[i]=="person"){
            person=-20;
        }
    }
    
    total=total*coefficentAge*coefficentEducation*coefficentNetworth+instrument+cooking+easygoing+singing+person;
    
    document.getElementById("demo").innerHTML ="Total price is "+ total + "$" ;
});



    



  

    
    
          
    
    
    
    
    
  


    

