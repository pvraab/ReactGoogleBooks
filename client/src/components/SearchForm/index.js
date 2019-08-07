import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.books array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book">Book Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in a book keyword"
          id="book"
        />
        <datalist id="books">
          {props.books.map(book => (
            <option value={book} key={book} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
