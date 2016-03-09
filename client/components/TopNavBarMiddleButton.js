import { DriveButton } from './DriveButton';
import { DriverItemList } from './DriverItemList';

export function TopNavBarMiddleButton({ isDriver, isRider, isMatched,
  isWaitingForMatch, drivers, onMiddleButtonClick, }) {
  console.log('rendering: isDriver?', isDriver);
  return (
    <div className="topNavBarMiddleButton">
      {
        // Main page (not yet driver or rider)
        isDriver === false && isRider === false ?
          <DriveButton onMiddleButtonClick={onMiddleButtonClick.bind(null, 'isDriver')} /> :

        // Choosing page (user is now a rider but not matched)
        // isRider === true && isMatched === null ?
          <DriverItemList drivers={drivers} />

        // // User has been matched
        // isMatched !== null && isConfirmed === true && isWaitingForMatch === false ?

        //   // User is driver
        //   isDriver === true ?
        //     <RiderInfo onClick={onMiddleButtonClick.bind(null, 'riderInfoView')} /> :

        //   // User is rider
        //     <DriverInfo onClick={onMiddleButtonClick.bind(null, 'driverInfoView')} />
        // : <Error />
      }
    </div>
  );
}
