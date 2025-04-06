import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Task from './components/task'

const App = () => {
   
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<string[]>([]);
  

  const handleAddText = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask("");
  }

  const completeTask = (index: any) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        
        <ScrollView style={styles.items}>

          {
            taskItems.map((item, index) => {
              return( 
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                   <Task key={index} text={item}/>
                </TouchableOpacity>
              )
            })
          } 
        </ScrollView>

      </View>

         <KeyboardAvoidingView 
           behavior={Platform.OS === "ios" ? "padding" : "height"}
           style={styles.writeTaskWrapper}
         >
           <TextInput style={styles.input} placeholder={'Write a task'} value={task ?? ""} onChangeText={text => setTask(text)}/>

           <TouchableOpacity onPress={()=> handleAddText()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}> + </Text>
            </View>
           </TouchableOpacity>
         </KeyboardAvoidingView>

          
 
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f6f7',
  },
    tasksWrapper:{
      paddingTop: 43,
      paddingHorizontal: 20,
    },
    sectionTitle:{
      fontSize:24,
      fontWeight:'bold',   
      textAlign: 'center',
      color: '#9a7777'

    },
    items:{
       marginTop: 30,

    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems:'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: 'black',
      borderWidth: 1,
      width: 250
    },
    addWrapper: {
      width: 50,
      height:50,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
    },
    addText: {
     fontWeight:'bold'
    },


});