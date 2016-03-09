import { DriveButton } from './DriveButton';
import { DriverItemList } from './DriverItemList';

export function TopNavBarMiddleButton({ isDriver, isRider, isMatched,
  isWaitingForMatch, drivers, onMiddleButtonClick, }) {
  return (
    <div className="topNavBarMiddleButton">
      {
        // Main page (not yet driver or rider)
        isDriver === false && isRider === false ?
          <DriveButton onClick={onMiddleButtonClick('isDriver')} /> :

        // Choosing page (user is now a rider but not matched)
        // isRider === true && isMatched === null ?
          <DriverItemList drivers={drivers} />

        // // User has been matched
        // isMatched !== null && isConfirmed === true && isWaitingForMatch === false ?

        //   // User is driver
        //   isDriver === true ?
        //     <RiderInfo onClick={onMiddleButtonClick('riderInfo')} /> :

        //   // User is rider
        //     <DriverInfo onClick={onMiddleButtonClick('driverInfo')} />
        // : <Error />
      }
    </div>
  );
}
