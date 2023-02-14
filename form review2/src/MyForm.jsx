function MyForm(props){
    return <form action="">
        <div>
          <label>First Name:</label>
          <input id='fn' onChange={props.handelChange}></input>
        </div>

        <div>
          <label>Last Name:</label>
          <input onChange={props.handelChange} id='ln'></input>
        </div>

        <div>
          <label>Age:</label>
          <select onChange={props.handelChange} id='age'>
            <option value="">Select Your Age</option>
            <option value="0-15">0-15</option>
            <option value="16-22">16-22</option>
            <option value="23-30">23-30</option>
          </select>
        </div>

        <div>
          <label>Free Text:</label>
          <textarea onChange={props.handelChange} id='text'></textarea>
        </div>
        
        <button onClick={props._showPreview}>Continue</button>
      </form>
}

export default MyForm