import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();
import {Text} from 'react-native';
import Yesterday from '../src/TopTab/Yesterday';
import Today from '../src/TopTab/Today';
import Tomorrow from '../src/TopTab/Tomorrow';

function MyTabs() {
    const getTabBarDate = (route, currentDate) => {
      let date = currentDate;

      if (route.name === 'Yesterday') {
        date = new Date(currentDate);
        date.setDate(date.getDate() - 1); // Subtract 1 day
      } else if (route.name === 'Tomorrow') {
        date = new Date(currentDate);
        date.setDate(date.getDate() + 1); // Add 1 day
      }

      // Format the date to display in the tab
      const options = {day: 'numeric', month: 'short'};
      const formattedDate = date.toLocaleDateString('en-US', options);
      return formattedDate;
    };

    return (
      <TopTab.Navigator
        screenOptions={({route}) => ({
          tabBarLabel: () => (
            <>
              <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
                {route.name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {getTabBarDate(route, new Date())}
              </Text>
            </>
          ),
          tabBarLabelStyle: {color: '#000'},
          tabBarItemStyle: {width: 120, shadowColor: '#000'},
          tabBarStyle: {backgroundColor: 'white'},
        })}>
        <TopTab.Screen name="Yesterday" component={Yesterday} />
        <TopTab.Screen name="Today" component={Today} />
        <TopTab.Screen name="Tomorrow" component={Tomorrow} />
      </TopTab.Navigator>
    );
  }
  export default MyTabs;