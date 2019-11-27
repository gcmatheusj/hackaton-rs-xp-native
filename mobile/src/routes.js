import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import New from './pages/Activities/New';
import Detail from './pages/Activities/Detail';
import Material from './pages/Material';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Teacher,
      New,
      Student: createBottomTabNavigator({
        Activities: {
          screen: createSwitchNavigator({
            Student,
            Detail,
          }),
        },
        Material,
      }),
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
