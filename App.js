import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import Gender from './components/Gender';
import WeightAge from './components/WeightAge';
import Height from './components/Height';
import calculateBMI from './calculateBMI';
import ResultModal from './components/ResultModal';

export default function App() {

  const [gender, changeGender] = useState("female");
  const [height, changeHeight] = useState(100);
  const [weight, changeWeight] = useState(50);
  const [age, changeAge] = useState(20);

  const [bmi, setBMI] = useState(0);
  const [category, setCategory] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const checkBMI = () => {
    let res = calculateBMI(gender, weight, height, age);
    setBMI(res.bmi);
    setCategory(res.category);
    //Alert.alert('BMI Information', `BMI: ${bmi} \nCategory: ${category}`);
    toggleModal();
  }

  return (
    <View style={styles.container} className="bg-black ">
      
      <View>
        <Text className="px-4 text-white text-xl mt-3 ">BMI Calculator</Text>
      </View>

      <Gender gender={gender} changeGender={changeGender} />
      <Height height={height} changeHeight={changeHeight}/>
      <WeightAge weight={weight} changeWeight={changeWeight} age={age} changeAge={changeAge}/>
      
      <View className="w-full flex flex-row items-center justify-center rounded-md mt-2">
        <Pressable className="bg-pink-500 text-white w-3/5 rounded-2xl" onPress={() => checkBMI()}>
          <Text className="text-white text-center text-xl p-2 ">Calculate BMI</Text>
        </Pressable>
      </View>
      
      {isModalVisible?
        (<ResultModal isModalVisible={isModalVisible} bmi={bmi} category={category} toggleModal={toggleModal}/>)
        :(<></>)}

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
