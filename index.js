let inforarry = [];
let pathlist = [];

// define a constructor to create User's information objects
let inforObject = function (pName, pGender, pBirth, pEmail, pSituation, pSymptoms, pPath, pInformation) {
    //this.ID = Math.random().toString(16).slice(5)  // tiny chance could get duplicates!
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



        for(let i = 0; i < 4; i++){
            if (i == 0) {
                let input = document.createElement('input')
                input.setAttribute("type", "text")
                input.setAttribute('name', 'path')
                input.setAttribute('value', "Add Location")
                form.appendChild(input)
            }
            else if (i == 1) {
                let input = document.createElement('input')
                input.setAttribute("type", "date")
                input.setAttribute('name', 'path')
                form.appendChild(input)
            }
            else if (i == 2) {
                let input = document.createElement('input')
                input.setAttribute("type", "time")
                input.setAttribute('name', 'path')
                form.appendChild(input)
            }
            else if (i == 3) {
                let input = document.createElement('input')
                input.setAttribute("type", "time")
                input.setAttribute('name', 'path')
                form.appendChild(input)
            }
        }
        addPathList.appendChild(form)
    })



});



function createList() {
    let PathList = document.getElementById('divPathList');
    while (PathList.firstChild) {
        PathList.removeChild(PathList.firstChild)
    }

    let ul = document.createElement("ul");


    inforarry.forEach(function (element,) {
        let li = document.createElement('li');
        //li.classList.add('onePath');
        li.innerHTML = element.Path + " Situation: " + element.Situation + " (" + element.Symptoms + ")"; 
        ul.appendChild(li);
    });

    PathList.appendChild(ul);
    }


function delinput() {
    document.getElementById('userName').value = "",
    document.getElementById('gender').value = "",
    document.getElementById('birth').value = "",
    document.getElementById('email').value = "",
    document.getElementById('firstComment').value = ""
}
