import { useState } from "react"

function AddArticle(props){

const [formData,setFormData]=useState({
    title:'',
    date:'',
    author:''
})

const handelFormData=(e)=>{
    e.preventDefault()
    for (const key in formData) {
        if(formData[key]==="")
        {
            alert("You need to fill all the inputs")
            return
        }
    }
    props.addArticle(formData)
}

const changeData=(input)=>{
 formData[input.name]=input.value

setFormData({...formData})

console.log(formData);
}

return(
    <div className="add-article">
       <form>
        <div className="row">
            <span>Title</span>
            <input name="title" onInput={(e)=>changeData(e.target)} required type="text" />
        </div>
        <div className="row">
            <span>Date</span>
            <input name="date" onInput={(e)=>changeData(e.target)} required type="date" />
        </div>
        <div className="row">
            <span>Author</span>
            <input name="author" onInput={(e)=>changeData(e.target)} required type="text" />
        </div>
        <button onClick={handelFormData}>Add Article</button>
       </form>
    </div>
)
}

export default AddArticle