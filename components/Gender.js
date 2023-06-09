import { StyleSheet, Text, View } from 'react-native';
import { Foundation } from '@expo/vector-icons'; 

const Gender = (props) => {
    return (
        <View className="bg-black w-full flex flex-row items-center justify-evenly" style={styles.container}>

            <View className="bg-gray-700 h-4/5 w-2/5 rounded-xl flex items-center justify-evenly" onStartShouldSetResponder={() => props.changeGender("male")}>
                <Foundation name="male" size={100} color={props.gender=="male"?"pink":"white"}  />
            </View>
            
            <View className="bg-gray-700 h-4/5 w-2/5 rounded-xl flex items-center justify-evenly" onStartShouldSetResponder={() => props.changeGender("female")}>
                <Foundation name="female" size={100} color={props.gender=="female"?"pink":"white"} />
            </View>
            

        </View>
    )
}

export default Gender;

const styles = StyleSheet.create({
    container: {
      height:"30%"
    },
});