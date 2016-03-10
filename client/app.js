import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { fromJS } from 'immutable';

import Root from './containers/Root';
import { ProfileContainer } from './containers/Profile';
import { MainContainer } from './containers/Main';
import rootReducer from './reducers/rootReducer';

const dummyState = {
  user: {
    id: 1,
    avatar: 'https://i.ytimg.com/vi/1v6M41Divso/maxresdefault.jpg',
    fullName: 'Kim Panda',
    street: 'back handle lane',
    city: 'Austin',
    state: 'Virginia',
    zip: '56352',
  },
  friends: [
    {
      id: 2,
      avatar: 'http://www.spirit-animals.com/wp-content/uploads/2012/09/Dolphin.jpg',
      fullName: 'Flipp',
    },
    {
      id: 7,
      avatar: 'http://vignette3.wikia.nocookie.net/pokemon/images/1/' +
              '16/025Pikachu_OS_anime_10.png/revision/20150102074354',
      fullName: 'PIKA',
    },
    {
      id: 8,
      avatar: 'http://vignette1.wikia.nocookie.net/pokemon/images/b/b8/' +
        '001Bulbasaur_Dream.png/revision/latest?cb=20140903033758',
      fullName: 'Bulb',
    },
    {
      id: 9,
      avatar: 'http://petupon.com/wp-content/uploads/2014/05/259758xcitefun-cute-animals-0.jpg',
      fullName: 'Ears',
    },
    {
      id: 11,
      avatar: 'https://s-media-cache-ak0.pinimg.com/236x/b6/83/9d/' +
        'b6839df8dc84c73e6f641f8a05cf7347.jpg',
      fullName: 'Bunneh',
    },
    {
      id: 12,
      avatar: 'http://www.funcage.com/blog/wp-content/uploads/2013/'
       + '11/Cute-Animals-Saying-Hi-To-You-001.jpg',
      fullName: 'Lazy Harp Seal',
    },
  ],
  profileInfoItems: [
    { itemTitle: 'Austin' },
    { itemDesc: 'Virginia' },
  ],
  drivers: [
    {
      id: 10,
      avatar: 'http://animaliaz-life.com/data_images/dog/dog7.jpg',
      fullName: 'Barkdog',
    },
    {
      id: 15,
      avatar: 'http://media4.popsugar-assets.com/files/2014/08/08/878/n/1922507' +
      '/caef16ec354ca23b_thumb_temp_cover_file32304521407524949.xxxlarge/i/Funny-Cat-GIFs.jpg',
      fullName: 'Mrowr',
    },
  ],
  isDriver: false,
  isRider: false,
  isMatched: false,
  isConfirmed: false,
  isWaitingForMatch: false,
  match: null,
  displaySettings: false,
  displayMatchInfo: false,
};

const store = createStore(rootReducer, fromJS(dummyState));

/**
 *  Containers can be placed in routers:
 *   <Route path="/" component={TopNavBarContainer} >
 *     <Header />
 *   </Route>
**/

// Update /profile to /profile/:userId when ready. react-router.Link helps with this.
const routes = <Route component={Root}>
  <Route path="/" component={MainContainer} />
  <Route path="/profile" component={ProfileContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
