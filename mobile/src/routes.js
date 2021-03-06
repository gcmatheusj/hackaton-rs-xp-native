import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import New from './pages/Activities/New';
import Detail from './pages/Activities/Detail';
import Material from './pages/Material';
import DetailMaterial from './pages/Material/DetailMaterial';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Teacher,
      New,
      DetailMaterial,
      Student: createBottomTabNavigator(
        {
          Activities: {
            screen: createStackNavigator(
              {
                Student,
                Detail,
              },
              {
                defaultNavigationOptions: {
                  header: null,
                },
              }
            ),
          },
          Material,
        },
        {
          tabBarOptions: {
            activeTintColor: '#ccc',
            inactiveTintColor: '#666',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#333',
            },
          },
        }
      ),
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
