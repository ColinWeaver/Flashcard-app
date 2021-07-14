import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import HomeScreen from "./RoutedRenderComps/HomeScreen/HomeScreen";
import AddEditDeck from "./RoutedRenderComps/AddEditDeck/AddEditDeck";
import Study from "./RoutedRenderComps/Study/Study";
import ViewDeck from "./RoutedRenderComps/ViewDeck/ViewDeck";
import AddEditCard from "./RoutedRenderComps/AddEditCard/AddEditCard";

function Layout() {
  const [deckId, setDeckId] = useState(null);
  const [decks, setDecks] = useState(null);

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <HomeScreen
              deckId={deckId}
              setDeckId={setDeckId}
              decks={decks}
              setDecks={setDecks}
            />
          </Route>

          <Route exact path="/decks/new">
            <AddEditDeck decks={decks} setDecks={setDecks} />
          </Route>

          <Route exact path="/decks/:deckId/cards/new">
            <AddEditCard decks={decks} setDecks={setDecks} />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <AddEditCard decks={decks} setDecks={setDecks} />
          </Route>

          <Route exact path="/decks/:deckId/study">
            <Study deckId={deckId} />
          </Route>

          <Route exact path="/decks/:deckId/edit">
            <AddEditDeck decks={decks} setDecks={setDecks} />
          </Route>

          <Route exact path="/decks/:deckId">
            <ViewDeck setDecks={setDecks} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
