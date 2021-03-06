
import {createElement, Component} from 'rax';
import {
  View,
  Text,
  Image,
  Link,
  TextInput,
  Button,
  Switch,
  Video,
  ScrollView,
  TouchableWithoutFeedback} from 'rax-components';
import Calendar from 'rax-calendar';

class CalendarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '2017-03-15',
    };
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Calendar
            ref="calendar"
            eventDates={['2017-02-06', '2017-02-07', '2017-03-09']}
            startDate={'2017-02-01'}
            endDate={'2017-05-20'}
            titleFormat={'YYYY年MM月'}
            prevButtonText={'上一月'}
            nextButtonText={'下一月'}
            weekStart={0}
            onDateSelect={(date) => this.setState({ selectedDate: date })}
            onTouchPrev={() => console.log('Back TOUCH')}
            onTouchNext={() => console.log('Forward TOUCH')}
          />
          <Text style={styles.date}>Selected Date: {this.state.selectedDate}</Text>
        </View>
      </View>
    );
  }
}

let styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  date: {
    padding: 20,
  },
};

export default CalendarDemo;
