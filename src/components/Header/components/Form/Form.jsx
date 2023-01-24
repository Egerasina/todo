import { useState } from "react";

export const Form = ({addNewTodo}) => {
  const [input, setInput] = useState('')

  const changeHandler = (e) => {
setInput(e.target.value)

  }

const submitHandler = (e) => {
e.preventDefault()

if (input.length) {
  addNewTodo(input)
  // console.log({input})
  setInput('')
}
}

    return(
      <div className="d-flex justify-content-center">
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
  <div className="mb-2">
    <input value={input} onChange={changeHandler}  placeholder="Title..." type="text" className="form-control" />
    </div>
  <button type="submit" className="btn btn-primary">
    Add
    </button>
</form>
</div>
);
};