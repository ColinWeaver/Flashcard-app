import React from "react"

function DeckForms(props){
  const {
    name,
    description,
    changeHandler,
    submitHandler,
    title,
    cancelHandler,
    renderForm,
    deckId
  } = props;

    if (renderForm || !deckId) return (
      <>
        <h1>{title}</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">
            Name <br />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              onChange={changeHandler}
              value={name}
              required
            />
          </label>
        <br />
          <label htmlFor="description">
            Description
            <br />
            <textarea
              id="description"
              type="text"
              name="description"
              placeholder="description"
              onChange={changeHandler}
              value={description}
            />
          </label>
          <br />
          <br />
          <button type="cancel" onClick={cancelHandler}>Cancel
          </button>
          {"  "}
          <button type="submit" name="submit">
            Submit
          </button>
        </form>
      </>

     
    )
    else return null;
  }



export default DeckForms;
