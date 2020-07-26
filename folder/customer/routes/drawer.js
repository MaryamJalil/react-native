import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
// import { createSwitchNavigator, createAppContainer} from "react-navigation";

// import { createStackNavigator } from 'react-navigation-stack';

// stacks
import HomeStack from './Stack/homeStack';
import AboutStack from './Stack/aboutStack';
import ShopStack from './Stack/shopStack';
import LoginStack from './Stack/loginStack';
// import FrontLogo from '../screens/frontlogo';
import HealthStack from './Stack/healthStack';
import docDetailStack from './Stack/docdetailStack';
import PetPortfolioStack from './Stack/portfolioStack';
import NotificationStack from './Stack/notificationStack';
import ChatStack from './Stack/chatStack';
import SignupStack from './Stack/signupStack';
import RecommendationsStack from './Stack/recommendationStack';
import PetLostStack from './Stack/petlostStack';
 




const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    // screen:FrontLogo,
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
