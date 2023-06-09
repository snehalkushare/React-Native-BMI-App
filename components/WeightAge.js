import { View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

const WeightAge = (props) => {
    return (
        <View className="bg-black w-full flex flex-row items-center justify-evenly" style={styles.container}>
           
            <View className="bg-gray-700 h-4/5 w-2/5 rounded-xl flex justify-start">
                <View className="h-2/5 flex">
                    <Text className="text-gray-500 text-center mt-3 text-xl">
                        Weight
                    </Text>
                </View>
                <View>
                    <Text className="text-center font-bold text-3xl text-gray-400">
                        {props.weight} kg
                    </Text>
                    </View>


                <View className="flex-row items-center justify-evenly mt-3">
                    <View className="bg-gray-400 p-2 rounded-full" onStartShouldSetResponder={() => props.changeWeight(props.weight+1)}>
                        <Entypo name="plus" size={30} color="black" />
                    </View>
                    <View className="bg-gray-400 p-2 rounded-full" onStartShouldSetResponder={() => props.changeWeight(props.weight-1)}>
                        <Entypo name="minus" size={30} color="black" />
                    </View>
                </View>
            </View>
        
            <View className="bg-gray-700 h-4/5 w-2/5 rounded-xl flex justify-start  ">
                <View className="h-2/5 flex">
                    <Text className="text-gray-500 text-center mt-3 text-xl">
                        Age
                    </Text>
                </View>
                <View>
                    <Text className="text-center font-bold text-3xl text-gray-400 ">
                        {props.age} yrs
                    </Text>
                    </View>


               
                    <View className="flex-row items-center justify-evenly mt-3">
                    <View className="bg-gray-400 p-2 rounded-full" onStartShouldSetResponder={() => props.changeAge(props.age+1)}>
                        <Entypo name="plus" size={30} color="black" />
                    </View>
                    <View className="bg-gray-400 p-2 rounded-full" onStartShouldSetResponder={() => props.changeAge(props.age-1)}>
                        <Entypo name="minus" size={30} color="black" />
                    </View>
                </View>
            
            </View>

    </View>
    )
}

export default WeightAge;

const styles = StyleSheet.create({
    container: {
      height:"30%"
    },
});