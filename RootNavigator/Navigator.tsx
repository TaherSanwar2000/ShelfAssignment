import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../src/Home';
import Wallet from '../src/Wallet';
import Chart from '../src/Chart';
import MyTabs from './Tab';
import {Path, Svg} from 'react-native-svg';

const BottomTab = createBottomTabNavigator();

const Stack = createStackNavigator();

const ItineraryFormHeader = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ItineraryForm"
      component={MyTabs}
      options={{
        headerTitle: 'Itinerary Form',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

function MyBottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return focused ? <SelectedHome /> : <UnSelectedHome />;
          }
          if (route.name === 'Wallet') {
            return focused ? <SelectedWallet /> : <UnSelectedWallet />;
          }
          if (route.name === 'Guide') {
            return focused ? <SelectedGuide /> : <UnSelectedGuide />;
          }
          if (route.name === 'Chart') {
            return focused ? <SelectedChart /> : <UnSelectedChart />;
          }
        },
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Wallet" component={Wallet} />
      <BottomTab.Screen name="Guide" component={ItineraryFormHeader} />
      <BottomTab.Screen name="Chart" component={Chart} />
    </BottomTab.Navigator>
  );
}

export default MyBottomTabs;
function SelectedHome(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.657 24.235v-3.567c0-.91.744-1.649 1.661-1.649h3.353c.44 0 .863.174 1.175.483.311.31.486.729.486 1.166v3.567c-.003.38.147.743.416 1.012.268.268.634.42 1.015.42h2.288a4.036 4.036 0 002.85-1.166 3.978 3.978 0 001.182-2.827V11.511c0-.856-.382-1.67-1.044-2.219l-7.783-6.17a3.614 3.614 0 00-4.606.083L4.045 9.292a2.886 2.886 0 00-1.128 2.22v10.152c0 2.21 1.805 4.003 4.032 4.003h2.235c.792 0 1.436-.635 1.442-1.421l.031-.01z"
        fill="#0373F3"
      />
    </Svg>
  );
}
function UnSelectedHome(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.657 24.235v-3.567c0-.91.744-1.649 1.661-1.649h3.353c.44 0 .863.174 1.175.483.311.31.486.729.486 1.166v3.567c-.003.38.147.743.416 1.012.268.268.634.42 1.015.42h2.288a4.036 4.036 0 002.85-1.166 3.978 3.978 0 001.182-2.827V11.511c0-.856-.382-1.67-1.044-2.219l-7.783-6.17a3.614 3.614 0 00-4.606.083L4.045 9.292a2.886 2.886 0 00-1.128 2.22v10.152c0 2.21 1.805 4.003 4.032 4.003h2.235c.792 0 1.436-.635 1.442-1.421l.031-.01z"
        fill="#BCBCBC"
      />
    </Svg>
  );
}
function UnSelectedWallet(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.155 7.548h.239c3.14 0 5.69 2.625 5.69 5.845v6.44c0 3.22-2.55 5.834-5.69 5.834H8.606c-3.14 0-5.69-2.614-5.69-5.834v-6.44c0-3.22 2.55-5.845 5.69-5.845h.24c.022-1.4.557-2.706 1.524-3.686.979-.992 2.23-1.494 3.641-1.529 2.822 0 5.11 2.334 5.144 5.215zm-7.59-2.438a3.592 3.592 0 00-1.013 2.438h6.896c-.034-1.913-1.559-3.465-3.437-3.465-.876 0-1.786.362-2.446 1.027zm6.76 6.93a.863.863 0 00.853-.875V9.812a.863.863 0 00-.854-.875.87.87 0 00-.853.875v1.353a.87.87 0 00.853.875zm-7.898-.875a.863.863 0 01-.853.875.87.87 0 01-.854-.875V9.812a.87.87 0 01.854-.875c.477 0 .853.396.853.875v1.353z"
        fill="#BCBCBC"
      />
    </Svg>
  );
}
function SelectedWallet(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.155 7.548h.239c3.14 0 5.69 2.625 5.69 5.845v6.44c0 3.22-2.55 5.834-5.69 5.834H8.606c-3.14 0-5.69-2.614-5.69-5.834v-6.44c0-3.22 2.55-5.845 5.69-5.845h.24c.022-1.4.557-2.706 1.524-3.686.979-.992 2.23-1.494 3.641-1.529 2.822 0 5.11 2.334 5.144 5.215zm-7.59-2.438a3.592 3.592 0 00-1.013 2.438h6.896c-.034-1.913-1.56-3.465-3.437-3.465-.876 0-1.786.362-2.446 1.027zm6.76 6.93a.863.863 0 00.852-.875V9.812a.863.863 0 00-.853-.875.87.87 0 00-.853.875v1.353a.87.87 0 00.853.875zm-7.898-.875a.863.863 0 01-.854.875.87.87 0 01-.853-.875V9.812a.87.87 0 01.853-.875c.478 0 .854.396.854.875v1.353z"
        fill="#0373F3"
      />
    </Svg>
  );
}
function UnSelectedGuide(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.333 14C2.333 7.56 7.548 2.333 14 2.333c6.44 0 11.666 5.227 11.666 11.667 0 6.452-5.226 11.667-11.666 11.667A11.656 11.656 0 012.333 14zm14.269 2.135l1.89-5.973a.524.524 0 00-.654-.665l-5.973 1.866a.78.78 0 00-.514.514l-1.866 5.985a.522.522 0 00.653.653l5.95-1.867a.756.756 0 00.514-.513z"
        fill="#BCBCBC"
      />
    </Svg>
  );
}
function SelectedGuide(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.333 14C2.333 7.56 7.548 2.333 14 2.333c6.44 0 11.666 5.227 11.666 11.667 0 6.452-5.226 11.667-11.666 11.667A11.656 11.656 0 012.333 14zm14.269 2.135l1.89-5.973a.524.524 0 00-.654-.665l-5.973 1.866a.78.78 0 00-.514.514l-1.866 5.985a.522.522 0 00.653.653l5.95-1.867a.756.756 0 00.514-.513z"
        fill="#0373F3"
      />
    </Svg>
  );
}
function UnSelectedChart(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.043 5.145a2.813 2.813 0 012.812-2.812 2.813 2.813 0 012.811 2.812 2.813 2.813 0 01-2.811 2.812 2.813 2.813 0 01-2.812-2.812zm-4.492 12.074l3.372-4.35-.047.023a.874.874 0 00.094-.875.86.86 0 00-.71-.513.896.896 0 00-.819.361l-2.822 3.652-3.233-2.543a.921.921 0 00-.665-.187.904.904 0 00-.583.349l-3.452 4.493-.071.105a.872.872 0 00.245 1.108.98.98 0 00.536.175c.27.012.525-.13.689-.35l2.928-3.77 3.325 2.498.105.07a.873.873 0 001.108-.246zM18.025 4.41c-.047.292-.07.584-.07.875a4.742 4.742 0 004.736 4.748c.292 0 .572-.034.864-.081v9.414c0 3.956-2.334 6.301-6.3 6.301h-8.62c-3.969 0-6.302-2.345-6.302-6.301v-8.632c0-3.967 2.333-6.324 6.301-6.324h9.39z"
        fill="#BCBCBC"
      />
    </Svg>
  );
}
function SelectedChart(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.043 5.145a2.813 2.813 0 012.812-2.812 2.813 2.813 0 012.811 2.812 2.813 2.813 0 01-2.811 2.812 2.813 2.813 0 01-2.812-2.812zm-4.492 12.074l3.372-4.35-.047.023a.874.874 0 00.094-.875.86.86 0 00-.71-.513.896.896 0 00-.819.361l-2.822 3.652-3.233-2.543a.921.921 0 00-.665-.187.904.904 0 00-.583.349l-3.452 4.493-.071.105a.872.872 0 00.245 1.108.98.98 0 00.536.175c.27.012.525-.13.689-.35l2.928-3.77 3.325 2.498.105.07a.873.873 0 001.108-.246zM18.025 4.41c-.047.292-.07.584-.07.875a4.742 4.742 0 004.736 4.748c.292 0 .572-.034.864-.081v9.414c0 3.956-2.334 6.301-6.3 6.301h-8.62c-3.969 0-6.302-2.345-6.302-6.301v-8.632c0-3.967 2.333-6.324 6.301-6.324h9.39z"
        fill="#0373F3"
      />
    </Svg>
  );
}
