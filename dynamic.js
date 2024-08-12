// making input div1 by default hidden and display on clicking note-down button
// notes-container = content-div
// input-box = input-div
// 
const notesDivision = document.querySelector(".content-div");
const createBtn = document.querySelector(".btn");


// selecting all input-div div using  document.querySelectorAll

let notes = document.querySelectorAll(".input-div");

function showNotes(){
    notesDivision.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes" , notesDivision.innerHTML);
// is it takes some time to update storage 
}




//    creating and setting attributes as were in html using js of notesDivison or content-div in html as below 


createBtn.addEventListener("click", () => {

 
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-div"; // not add . in starting while naming class using doc
    inputBox.setAttribute("contenteditable","true");

    img.src = "images/delete.png";
    notesDivision.appendChild(inputBox).appendChild(img);
 
});

// above code equivalent to below html code
/*  <button  class="btn" ><img src="images/edit.png" alt="">Note down </button>
    
        <div class="content-div">
            <!-- this para detects spelling of word correct or not  -->
            <p contenteditable="true" class="input-div" >
                <img src="images/delete.png" alt="">
            </p>
             
        </div>*/


 notesDivision.addEventListener("click", function(e){

    //  MAKING DELETE BUTTON WORKING USING target and tagNamr and making fucntion passes argument 
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if (e.target.tagName === "p" ){
        notes = document.querySelectorAll(".input-div");
        notes.forEach(nt => {
            nt.onkeyup = function (){
                updateStorage();
            }
        })
    }
 })

// making line to next line if enter hit
 document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
 })
 