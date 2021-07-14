import React from "react";
import { Link } from "react-router-dom";

function CardForms(props) {
  const {
    title,
    cards,
    cardId,
    deckId,
    deck,
    front,
    back,
    changeHandler,
    submitHandler,
    submitButtonTitle,
    cancelButtonTitle,
    breadCrumbTitle
  } = props;

  
  if (cards || cardId) {
    return (
      <>
        <span>
          <Link to="/">Home</Link>/
          <Link to={`/decks/${deckId}`}>
            {deck.name}
            </Link>/ {breadCrumbTitle}
        </span>
        <br/>
        <h1 style={{textAlign: "left", float: "left"}}>{deck.name}: </h1><h1 align="left">{title}</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">
            Question (front) <br />
            <textarea
              id="name"
              type="text"
              name="front"
              placeholder="type question here"
              onChange={changeHandler}
              value={front}
              required
            />
          </label>
          <br />
          <label htmlFor="name">
            Answer (back)
            <br />
            <textarea
              id="description"
              type="text"
              name="back"
              placeholder="type answer here"
              onChange={changeHandler}
              value={back}
              required
            />
          </label>
          <br />
          <br />
          <Link to={`/decks/${deckId}`}>
            <button type="cancel">{cancelButtonTitle}</button>
          </Link>
          <button type="submit" name="submit">
            {submitButtonTitle}
          </button>
        </form>
      </>
    );
  }
}

export default CardForms;
