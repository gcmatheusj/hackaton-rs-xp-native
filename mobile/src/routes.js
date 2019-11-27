import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Professor from './pages/Professor';
import Aluno from './pages/Aluno';
import Detail from './pages/Activities/Detail';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Professor,
      Aluno,
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
