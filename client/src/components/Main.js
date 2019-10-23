import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CreateItem from './CreateItem';
import CreateOutfit from './CreateOutfit';
import ItemList from './ItemList';
import OutfitList from './OutfitList';
import ItemDetails from './ItemDetails';
import OutfitDetail from './OutfitDetail';
import NotFound from './NotFound';

function Main() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create-clothing' component={CreateItem} />
        <Route exact path='/create-outfit' component={CreateOutfit} />
        <Route exact path='/clothing' component={ItemList} />
        <Route exact path='/outfits' component={OutfitList} />
        <Route exact path='/clothing/:id' component={ItemDetails} />
        <Route exact path='/outfits/:id' component={OutfitDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default () =>
  <Router>
    <Main />
  </Router>
