import { connect } from 'react-redux';
import { curry } from 'ramda';
import { Grid, Row} from 'react-bootstrap'

import * as rideAction from '../actionCreators/ride';

import { RiderItem } from '../components/RiderItem';
import * as rideActions from '../actionCreators/ride';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function List({ ride, user, onRiderClick, }) {
  let _riders = [];

  ride.riders.forEach(function (rider) {
    user.friends.forEach(function (friend) {
      if (friend.user_id === rider.user_id) {
        let newRider = friend;
        newRider.location = rider.location;

        _riders.push(newRider);
      }
    });
  });

  return (
    <div className="riderListDiv">
      <Grid>
        <Row>
          {
            _riders.map(function (friendRider) {
              return (<RiderItem
                key={friendRider.user_id}
                onRiderItemClick={onRiderClick.bind(null, user, friendRider)}
                {...friendRider}
              />);
            })
          }
        </Row>
      </Grid>
    </div>
  );
};

const mapStateToProps = function (state) {
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onRiderClick: function (user, rider) {
      let filteredDriverProps = {
        user_id: user.user_id,
        location: user.location,
      };

      let filteredRiderProps = {
        user_id: rider.user_id,
        location: rider.location,
      };

      dispatch(rideAction.acceptRide(filteredDriverProps, filteredRiderProps));
    },
  };
};

export const RiderItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
