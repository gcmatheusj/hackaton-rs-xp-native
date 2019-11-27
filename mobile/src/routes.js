import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Detail from './pages/Activities/Detail';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Teacher,
      Student,
      Detail,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#D8A537',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
