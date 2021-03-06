import {
  createStackNavigator,
} from 'react-navigation';
import EventList from './EventList';
import EventForm from './EventForm';

export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event',
    }),
  },
});

