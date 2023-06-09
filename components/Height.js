import { View, Text, StyleSheet } from "react-native"
import Slider from '@react-native-community/slider';

const Height = (props) => {
    return (
        <View className=" w-full flex justify-evenly items-center" style={styles.container}>
            <View className="w-full">
                <Text className="font-bold text-xl text-center text-gray-600">
                    Height
                </Text>
                <Text className="font-bold text-3xl text-center text-gray-400 mt-3">
                   {props.height} cm
                </Text>
            </View>
            
            <View className="w-full">
                <Slider
                    value={props.height}
                    minimumValue={20}
                    maximumValue={210} 
                    step={1}
                    thumbTintColor="pink"
                    minimumTrackTintColor="lightpink"
                    maximumTrackTintColor="gray"          
                    onValueChange={(value)=>props.changeHeight(value)}/>
            </View>
            
        </View>
    )
}

export default Height;

const styles = StyleSheet.create({
    container: {
      height:"20%"
    },
});