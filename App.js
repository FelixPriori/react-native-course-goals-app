import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => ([
      {
        text: enteredGoalText,
        id: Math.random().toString()
      },
      ...currentCourseGoals,
    ]));
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(
        goal => goal.id !== id
      ))
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <View style={styles.goalsTitle}>
            <Text style={styles.goalsTitleText}>Your course goals</Text>
          </View>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={itemData => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16
  },
  goalsTitle: {
    marginBottom: 12,
    alignSelf: 'center',
  },
  goalsTitleText: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: 'bold',
    color: '#fff',
  }
});