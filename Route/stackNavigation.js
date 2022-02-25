import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HeadingSeeAll from '../App/Components/styles/HeadingSeeAll';
import BuyerInfo from '../App/Screen/BuyerInfo';
import BuyerRequest from '../App/Screen/BuyerRequest';
import GigCreation from '../App/Screen/GigCreation';
import GigView from '../App/Screen/GigView';
import GraphicsDesign from '../App/Screen/GraphicsDesign';
import LogInScreen from '../App/Screen/LogInScreen';
import MostRelevent from '../App/Screen/MostRelevent';
import RecentlyView from '../App/Screen/RecentlyView';
import ResultPage from '../App/Screen/ResultPage';
import SignUp from '../App/Screen/SignUp';
import Dashboard from '../InnerScreens/dashboard';
import GigSeller from '../InnerScreens/git_Seller';
import Payment from '../InnerScreens/payment';
import Setting from '../InnerScreens/settings';
import Support from '../InnerScreens/support';
import ManageOrder from '../TabViewScreens/manageOrder';
import MyProfile from '../TabViewScreens/myProfile';
import TimeLine from '../TabViewScreens/timeline';
import WritingTranslation from '../TabViewScreens/writing&translation';
import MyTabs from './tabNavigation';
import Gigswipper from '../App/Components/Gigswipper';
import MessageScreen from '../App/Screen/MessageScreen';
import FilterInbox from '../App/Screen/FilterInbox';
import Report from '../InnerScreens/Report';
import FAQ from '../InnerScreens/FAQ';
import Language from '../InnerScreens/languaeg';
import MyTicket from '../InnerScreens/MyTicket';
import InnerNotification from '../InnerScreens/InnerNotification';
import InnerSecurity from '../InnerScreens/InnerSecurity';
import PrivacynPolicy from '../InnerScreens/PrivacynPolicy';
import TermeandCon from '../InnerScreens/TermeandCon';
import ShareGig from '../InnerScreens/ShareGig';
import ManageGig from '../InnerScreens/ManageGig';
import Earning from '../InnerScreens/Earning';
import Postrequest from '../App/Screen/Postrequest';
const Stack = createNativeStackNavigator();


const StackScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
    headerShown: false
  }} >
                
                <Stack.Screen name="tab" component={MyTabs} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Support" component={Support} />
                <Stack.Screen name="GigSeller" component={GigSeller} />
                <Stack.Screen name="TimeLine" component={TimeLine} />
                <Stack.Screen name="GigView" component={GigView} />
                <Stack.Screen name="ManageOrder" component={ManageOrder} />
                <Stack.Screen name="MyProfile" component={MyProfile} />
                <Stack.Screen name="WritingTranslation" component={WritingTranslation} />
                <Stack.Screen name="GraphicsDesign" component={GraphicsDesign} />
                <Stack.Screen name="LoginScreen" component={LogInScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="BuyerInfo" component={BuyerInfo} />
                <Stack.Screen name="GigCreation" component={GigCreation} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="RecentlyView" component={RecentlyView} />
                <Stack.Screen name="MostRelevent" component={MostRelevent} />
                <Stack.Screen name="ResultPage" component={ResultPage} />
                <Stack.Screen name="BuyerRequest" component={BuyerRequest} />
                <Stack.Screen name="MessageScreen" component={MessageScreen} />
                <Stack.Screen name="FilterInbox" component={FilterInbox} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="language" component={Language} />
                <Stack.Screen name="Report" component={Report} />
                <Stack.Screen name="FAQ" component={FAQ} />
                <Stack.Screen name="MyTicket" component={MyTicket} />
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
                <Stack.Screen name="InnerNotification" component={InnerNotification} />
                <Stack.Screen name="InnerSecurity" component={InnerSecurity} />
                <Stack.Screen name="PrivacynPolicy" component={PrivacynPolicy} />
                <Stack.Screen name="TermeandCon" component={TermeandCon} />
                <Stack.Screen name="ShareGig" component={ShareGig} />
                <Stack.Screen name="ManageGig" component={ManageGig} />
                <Stack.Screen name="Earning" component={Earning} />
                <Stack.Screen name="Postrequest" component={Postrequest} />

                

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default  StackScreen