let inforarry = [];
let pathlist = [];

// define a constructor to create User's information objects
let inforObject = function (pName, pGender, pBirth, pEmail, pSituation, pSymptoms, pPath, pInformation) {
    //this.ID = Math.random().toString(16).slice(5)  // tiny chance could get duplicates!
    this.ID = Math.random().toString(16).slice(5)
    this.Name = pName;
    this.Gender = pGender;
    this.Birth = pBirth; 
    this.Email = pEmail;
    this.Situation = pSituation;
    this.Symptoms = pSymptoms;
    this.Path = pPath;

    this.Information = pInformation;
}



inforarry.push(new inforObject(
    'Kay', 
    'Male', 
    '1994.12.15', 
    'kay1215@gmail.com', 
    'General', 
    'Fever, Cough', 
    ["BellevueCollege",
    "2021. 02. 10",
    "AM 08:30",
    "PM 2:30"],
    "I am Kay"))

document.addEventListener("DOMContentLoaded", function() {


    createList()

    // HealthCondition -> Submibutton -> Push informaion to inforarry
    document.getElementById('submitButton').addEventListener("click", function() {

        let symptoms = [];
        $("input[name='symptoms']:checked").each(function(e){
            var value = $(this).val();
            symptoms.push(value);        
        })   


        $("input[name='path']").each(function(e){
            var value = $(this).val()
            pathlist.push(value);        
        })

        inforarry.push(new inforObject(
            document.getElementById('userName').value, 
            document.getElementById('gender').value, 
            document.getElementById('birth').value, 
            document.getElementById('email').value, 
            document.getElementById('select-condition').value, 
            symptoms,
            pathlist,
            document.getElementById('firstComment').value))

        alert('Completed')
        console.log(inforarry)
        createList()
        delinput()

    })

    document.getElementById("buttonAdd").addEventListener('click', function() {
        let addPathList = document.getElementById("path_list")
        var form = document.createElement('form')
        form.className = "js_form"

    

        for(let i = 0; i < 4; i++){
            if (i == 0) {
                let input = document.createElement('input')
                input.setAttribute("type", "text")
                input.setAttribute('name', 'path')
                input.setAttribute('value', "Add Location")
                input.setAttribute('id', 'path')

                form.appendChild(input)
            }
            else if (i == 1) {
                let input = document.createElement('input')
                input.setAttribute("type", "date")
                input.setAttribute('name', 'path')
                input.setAttribute('id', 'path')

                form.appendChild(input)
            }
            else if (i == 2) {
                let input = document.createElement('input')
                input.setAttribute("type", "time")
                input.setAttribute('name', 'path')
                input.setAttribute('id', 'path')

                form.appendChild(input)
            }
            else if (i == 3) {
                let input = document.createElement('input')
                input.setAttribute("type", "time")
                input.setAttribute('name', 'path')
                input.setAttribute('id', 'path')

                form.appendChild(input)
            }
        }
        addPathList.appendChild(form)

    })

    document.getElementById('buttonDel').addEventListener('click', function() {
        //let elements = document.getElementsByClassName('js_form')
        //let path = document.getElementById('path');
        //elements.removeChild(path);
        for (i=0; i<4; i++){
            $("#path").remove();
        }
    })


    $(document).on("pagebeforeshow", "#details", function (event) {   // have to use jQuery 
        let localID = document.getElementById("IDparmHere").innerHTML;
        let arrayPointer = GetArrayPointer(localID);
        console.log(inforarry[arrayPointer])
        document.getElementById("oneName").innerHTML = "Name: " + inforarry[arrayPointer].Name;
        document.getElementById("oneBirth").innerHTML = "Birth: " + inforarry[arrayPointer].Birth;
        document.getElementById("oneGender").innerHTML = "Gender: " + inforarry[arrayPointer].Gender;
        document.getElementById("oneEmail").innerHTML = "Email: " + inforarry[arrayPointer].Email;
    });
 



});



function createList() {
    let PathList = document.getElementById('divPathList');
    while (PathList.firstChild) {
        PathList.removeChild(PathList.firstChild)
    }

    let ul = document.createElement("ul");


    inforarry.forEach(function (element,) {
        let li = document.createElement('li');
        li.classList.add('onePath'); //디테일 떄문에
        li.setAttribute("data-parm", element.ID); // 디테일 떄문에
        li.innerHTML = "Location:  " + element.Path + " Situation: " + element.Situation + " (" + element.Symptoms + ")"; 
        ul.appendChild(li);
    });

    PathList.appendChild(ul);



    var liArray = document.getElementsByClassName("onePath");
    Array.from(liArray).forEach(function (element) {
        element.addEventListener('click', function () {
        // get that data-parm we added for THIS particular li as we loop thru them
        var parm = this.getAttribute("data-parm");  // passing in the record.Id
        // get our hidden <p> and write THIS ID value there
        document.getElementById("IDparmHere").innerHTML = parm;
        // now jump to our page that will use that one item
        document.location.href = "index.html#details";
        });
    });

    }


function delinput() {
    document.getElementById('userName').value = "",
    document.getElementById('gender').value = "",
    document.getElementById('birth').value = "",
    document.getElementById('email').value = "",
    document.getElementById('firstComment').value = ""
    $(document).bind("change", "#select-condition", function (event, ui) {
        selectedGenre = $('#select-genre').val();
    });
}


function GetArrayPointer(localID) {
    for (let i = 0; i < inforarry.length; i++) {
        if (localID === inforarry[i].ID) {
            return i;
        }
    }
}