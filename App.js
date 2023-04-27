import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import  {useState} from 'react';

export default function App() {
  const [sliderValue, setSliderValue] = useState(15);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(40);
  const [age, setAge] = useState(21);

  return (
    <View style={styles.container} className="h-full bg-black">
      
      <View className="h-2/5 w-full bg-black">
        <View className="h-2/6">
          <Text className="mt-12 text-center text-white text-xl font-bold">BMI Calculator</Text>
        </View>
        <View className="flex w-full flex-row h-4/6">
          <View className="w-1/2 h-full py-2 pl-2 pr-1">
            <Pressable
              onPress={() => {setGender("male")}}
              className="bg-slate-800 w-full h-full rounded-xl"
              >
              {({ pressed }) => (
                <View className="flex items-center justify-center w-full h-full">
                  <View><Ionicons name="male" size={100} color={gender=="male"?"pink":"white"} /></View>
                </View>
              )}
            </Pressable>
          </View>
          <View className="w-1/2 h-full py-2 pr-2 pl-1">
            <Pressable
              onPress={() => {setGender("female")}}
              className="bg-slate-800 w-full h-full rounded-xl"
              >
              {({ pressed }) => (
                <View className="flex items-center justify-center w-full h-full">
                  <View><Ionicons name="female" size={100} color={gender=="female"?"pink":"white"} /></View>
                </View>
              )}
            </Pressable>
          </View>
        </View>
      </View>
      
      <View className="h-1/5 w-full flex bg-black items-center justify-center w-full">
        <View className="text-white font-bold text-xl">
          <Text className="text-slate-700 text-center text-sm">
            HEIGHT
          </Text>
          <Text className="text-white mt-2 text-center text-2xl font-bold">
            {sliderValue}cm
          </Text>
        </View>
        <Slider
          style={{width: 250, height: 40}}
          step={1}
          value={150}
          minimumValue={50}
          maximumValue={250}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="gray"
          onValueChange={setSliderValue}
          thumbTintColor='pink'
        />
      </View>
      
      <View className="h-2/5 w-full bg-black">
        <View className="flex w-full flex-row h-5/6">
          <View className="w-1/2 h-full py-2 pl-2 pr-1">
            <View className="bg-slate-800 w-full h-full rounded-xl">
              <View>
                <Text className="w-full text-center text-slate-500 mt-1">WEIGHT</Text>
                <Text className="text-white font-bold text-4xl text-center mt-16">{weight} kg</Text>
              </View>
              <View className="flex flex-row items-center justify-evenly mt-10">
                <Pressable
                  onPress={() => {setWeight(weight+1)}}
                  className=""
                  >
                  {({ pressed }) => (
                    <View className="flex items-center justify-center bg-slate-400 rounded-full">
                      <Entypo name="plus" size={40} color="white" />
                    </View>
                  )}
                </Pressable>
                <Pressable
                  onPress={() => {setWeight(weight-1)}}
                  className=""
                  >
                  {({ pressed }) => (
                    <View className="flex items-center justify-center bg-slate-400 rounded-full">
                      <Entypo name="minus" size={40} color="white" />
                    </View>
                  )}
                </Pressable>
              </View>
            </View>
          </View>
          <View className="w-1/2 h-full py-2 pl-2 pr-1">
            <View className="bg-slate-800 w-full h-full rounded-xl">
              <View>
                <Text className="w-full text-center text-slate-500 mt-1">AGE</Text>
                <Text className="text-white font-bold text-4xl text-center mt-16">{age} y</Text>
              </View>
              <View className="flex flex-row items-center justify-evenly mt-10">
                <Pressable
                  onPress={() => {setAge(age+1)}}
                  className=""
                  >
                  {({ pressed }) => (
                    <View className="flex items-center justify-center bg-slate-400 rounded-full">
                      <Entypo name="plus" size={40} color="white" />
                    </View>
                  )}
                </Pressable>
                <Pressable
                  onPress={() => {setAge(age-1)}}
                  className=""
                  >
                  {({ pressed }) => (
                    <View className="flex items-center justify-center bg-slate-400 rounded-full">
                      <Entypo name="minus" size={40} color="white" />
                    </View>
                  )}
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View className="w-full h-1/6">
          <Pressable
                  onPress={() => {
                    let res = calculateBMI(gender, weight, sliderValue, age);
                    let bmi = res.bmi;
                    let category = res.category;
                    Alert.alert('BMI Information', `BMI: ${bmi} \nCategory: ${category}`);
                  }}
                  className=""
                  >
                  {({ pressed }) => (
                    <View className="flex items-center justify-center bg-slate-400 rounded-full py-2">
                      <Text className="text-xl font-bold">Calculate</Text>
                    </View>
                  )}
          </Pressable>
        </View>

      </View>

      <StatusBar style="auto"  backgroundColor='gray'/>
    </View>
  );
}

const calculateBMI = (gender, weight, height, age) => {
  let bmi = weight * (100 * 100) / (height * height)
  if (gender == 'female'){
      if (bmi < 18.5){
          category = 'Underweight'
      }
      else if (18.5 <= bmi && bmi < 24.9){
          category = 'Normal weight'
      }
      else if(25 <= bmi && bmi < 29.9){
          category = 'Overweight'
      }
      else {
          category = 'Obese'
      }
  }
  else if(gender == 'male'){
      if(bmi < 18.5)
          category = 'Underweight'
      else if(18.5 <= bmi && bmi < 24.9)
          category = 'Normal weight'
      else if(25 <= bmi && bmi < 29.9)
          category = 'Overweight'
      else
          category = 'Obese'
  }
  else{
      category = 'Invalid gender'
  }
  return {
    bmi,
    category
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
