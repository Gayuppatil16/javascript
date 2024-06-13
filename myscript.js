const addbtn=document.querySelector("#addbtn")
const container=document.querySelector("#container")

const savenotes=()=>{
    const notes1=documents.querySelectorAll(".notes textarea")
    console.log(notes1);
    const data=[];
    notes1.foreach(
        (note)=>{
            data.push(note)
        }
    )

}

addbtn.addEventListener(
    "click",
    function()
    {
        addnote()
    }
)
// <!-- <div class="notes">
//             <div class="toolbar">
//                 <i class="fas fa-save"></i>
//                 <i class="fas fa-trash"></i>
//             </div>
//             <textarea></textarea>

//         </div> -->
const addnote=()=>{
    const note=document.createElement("div");
    note.classList.add("notes")
    note.innerHTML=` <div class="toolbar">
        <i class="save fas fa-save"></i>
       <i class="trash fas fa-trash"></i>
    </div>
    <textarea></textarea>
    `;

    note.querySelector(".trash").addEventListener(                    //delete notes//
        "Click",
        function()
        {
            note.remove();

        }
    )
    note.querySelector(".save").addEventListener(
        "Click",
        function()
        {

        }
    )

    container.appendChild(note);
}