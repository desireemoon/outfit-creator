import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/create-clothing' component={CreateItem} />
        <Route exact path='/create-outfit' component={CreateOutfit} />
        <Route exact path='/clothing' component={ItemList} />
        <Route exact path='/outfits' component={OutfitList} />
        <Route exact path='/clothing/:id' 
        render={ routeProps => {
          const {location, match, history} = routeProps
          const { article } = location
            return(
              <ItemDetails  {...{ article}}/>
            )
        }}
        />
        <Route exact path='/outfits/:id' component={OutfitDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main
