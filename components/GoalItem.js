import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    overflow: 'hidden'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalItemText: {
    color: '#fff',
    margin: 8,
    padding: 8,
  }
})