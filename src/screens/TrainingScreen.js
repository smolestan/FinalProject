import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native';
import Constants from 'expo-constants'
import { vibrate } from '../util'

const CountDown = (props) => {
  return (
    <View>
      <Text style={styles.timerTitle}>{props.sessionName} Timer</Text>
      <Text style={styles.timer}>{props.time}:{props.seconds}</Text>
    </View>
  )
}  

const Details = (props) => {
  return (
    <View>
      <Text style={styles.details}>You are now on {props.currentSession}
      </Text>
    </View>
  )
}  

const Buttons = (props) => {
  return (
    <View style={{ width: '90%', margin: 10, backgroundColor: 'green' }}>
      <Button color='white' 
              onPress={props.startStop} 
              title={props.startStopButton} />
    </View>
  )
}

const Work = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.title}>Work Time: </Text>
      <TextInput
        style={styles.title}
        placeholder="25"
        onChangeText={props.work} 
        required 
        keyboardType={'numeric'}
      />
      <Text style={styles.title}> minutes</Text>
    </View>
  )
}

const ShortBreak = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.title}>Short Break: </Text>
      <TextInput
        style={styles.title}
        placeholder="5"
        onChangeText={props.shortBreak} 
        required 
        keyboardType={'numeric'}
      />
      <Text style={styles.title}> minutes</Text>
    </View>
  )
}

const LongBreak = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.title}>Long Break: </Text>
      <TextInput
        style={styles.title}
        placeholder="20"
        onChangeText={props.longBreak} 
        required 
        keyboardType={'numeric'}
      />
      <Text style={styles.title}> minutes</Text>
    </View>
  )
}

class TrainingScreeen extends React.Component {
  state = {
    time: '--',
    workTime: 25,
    longBreakTime: 20,
    shortBreakTime: '05',
    seconds: '--',
    currentSession: 'First work session',
    startStopButton: 'Start',
  }
  
  sessionCounter
  intervalHandle
  secondsRemaining

  tick = () => {

    let min = Math.floor(this.secondsRemaining / 60)
    let sec = this.secondsRemaining - (min * 60)

    this.setState({
      time: min,
      seconds: sec,
    })

    sec < 10 && this.setState({ seconds: "0" + this.state.seconds })

    min < 10 && this.setState({ time: "0" + min })

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle)
      this.changeSession()
    }

    this.secondsRemaining--
  }

  startCountDown = () => {
    this.sessionCounter = 0
    this.setState({
      sessionName: 'Work',
      startStopButton: 'Stop'
    })
    Keyboard.dismiss()
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.workTime;
    this.secondsRemaining = (time * 60) - 1;
  }

  changeSession = () => {
    vibrate()
    this.sessionCounter++

    switch (this.sessionCounter) {
      case 1:
        this.setState({ currentSession: 'First short break' })      
        this.shortBreakCountDown()
        break
      case 2:
        this.setState({ currentSession: 'Second work session' })          
        this.workCountDown()
        break
      case 3:
        this.setState({ currentSession: 'Second short break' })        
        this.shortBreakCountDown()
        break
      case 4:
        this.setState({ currentSession: 'Third work session' })          
        this.workCountDown()
        break
      case 5:
        this.setState({ currentSession: 'Third short break' })        
        this.shortBreakCountDown()
        break
      case 6:
        this.setState({ currentSession: 'Fourth work session' })          
        this.workCountDown()
        break
      case 7:
        this.setState({ currentSession: 'Long break' })        
        this.longBreakCountDown()
        break
      default:
        this.setState({ currentSession: 'First work session' })        
        this.startCountDown()
    }
  }

  workCountDown = () => {
    this.setState({ sessionName: 'Work' })
    Keyboard.dismiss()
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.workTime;
    this.secondsRemaining = (time * 60) - 1;
  }

  shortBreakCountDown = () => {
    this.setState({ sessionName: 'Short Break' })
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.shortBreakTime;
    this.secondsRemaining = time * 60;
  }

  longBreakCountDown = () => {
    this.setState({ sessionName: 'Long Break' })
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.longBreakTime;
    this.secondsRemaining = time * 60;
  }

  stopCountDown = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      currentSession: 'First work session',
      time: '--',
      seconds: '--',
      startStopButton: 'Start'
    })
  }

  startStop = () => {
    this.state.startStopButton === 'Start' ? this.startCountDown() : this.stopCountDown()
  }

  shortBreak = (time) => {
    this.setState({
      shortBreakTime: time,
      time: '--',
      seconds: '--'
    })
  }

  longBreak = (time) => {
    this.setState({
      longBreakTime: time,
      time: '--',
      seconds: '--'
    })
  }

  work = (time) => {
    this.setState({
      workTime: time,
      time: '--',
      seconds: '--'
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <CountDown sessionName={this.state.sessionName} time={this.state.time} seconds={this.state.seconds} />
          <Buttons startStop={this.startStop} startStopButton={this.state.startStopButton} />
          <Work work={this.work} />
          <ShortBreak shortBreak={this.shortBreak} />
          <LongBreak longBreak={this.longBreak} />
          <Details currentSession={this.state.currentSession} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    margin: 10,
  },
  details: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 30
  },
  timerTitle: {
    fontSize: 40,
    textAlign: 'center',
  },
  timer: {
    fontSize: 60,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    margin: 5,
  },
})

export default TrainingScreeen