import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
// import { createSwitchNavigator, createAppContainer} from "react-navigation";

// import { createStackNavigator } from 'react-navigation-stack';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import ShopStack from './shopStack';
import LoginStack from './loginStack';
import FrontLogo from '../screens/frontlogo';
import HealthStack from './healthStack';
import docDetailStack from './docdetailStack';
import PetPortfolioStack from './portfolioStack';
import NotificationStack from './notificationStack';
import ChatStack from './chatStack';
import SignupStack from './signupStack';
import RecommendationsStack from './recommendationStack';
import PetLostStack from './petlostStack';


const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen:FrontLogo,
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Shop:{
    screen: ShopStack,
  },
 
  Health:{
    screen:HealthStack,
  },
  DoctorDetails:{
    screen:docDetailStack,
  },
  PetPortfolio:{
    screen:PetPortfolioStack,
  },
  Recommendations:{
    screen:RecommendationsStack,
  },
  Notifications:{
    screen:NotificationStack,
  },
  PetLost:{
    screen:PetLostStack,
  },
  Inbox:{
    screen:ChatStack,
  },
  Login:{
    screen:LoginStack, 
   },
   Signup:{
     screen:SignupStack,
   }

});

export default createAppContainer(RootDrawerNavigator);
