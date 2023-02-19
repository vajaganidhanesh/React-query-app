import React,{useState} from "react";

function Form({onSubmit}) {
    const [data,setData] = useState('');
    const FormSubmit = (e)=>{
        setData(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(data)
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={data} name="" id="" onChange={FormSubmit} />
            <button type="submit">submit</button>
        </form>
    </div>
    </>
  );
}

export default Form;
