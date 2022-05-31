const FormEdit = ({ handleOnChange, handleOnSubmit }) => {
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Name</label>
        <input name="name" type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => handleOnChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Description</label>
        <textarea name="description" onChange={(e) => handleOnChange(e)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Weight</label>
        <input name="weight" type="number" onChange={(e) => handleOnChange(e)} className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Image</label>
        <input name="image" type="text" onChange={(e) => handleOnChange(e)} className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Type</label>
        <select name="type" onChange={(e) => handleOnChange(e)} className="form-control">
          <option defaultValue>--Select Category--</option>
          <option>Water</option>
          <option>Fire</option>
          <option>Grass</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormEdit;
