import { Button, Text, View, Dimensions, Pressable } from "react-native";
import Modal from "react-native-modal";

const ResultModal=(props)=>{
  const halfWindowsWidth = Dimensions.get('window').width
  const halfWindowsHeight = Dimensions.get('window').height/2-100;
    return (
      <View style={{ flex: 1, alignItems:"center", justifyContent:"center", position:"absolute", height:halfWindowsHeight/2, width:halfWindowsWidth}}>
        <View>
          <Modal isVisible={props.isModalVisible} style={{marginTop: halfWindowsHeight}} backdropOpacity={0.85}>
            <View style={{ flex: 1 }}>

            <View className="py-5 px-4">  
              <Text className="text-white text-2xl font-bold">BMI : {parseFloat(props.bmi).toFixed(2)}</Text>
              <Text className="text-white text-2xl font-bold">Category : {(props.category)}</Text>
            </View>
    
            <View className="w-full flex flex-row items-center justify-center rounded-md mt-2">
              <Pressable className="bg-pink-500 text-white w-3/5 rounded-2xl" onPress={props.toggleModal}>
                <Text className="text-white text-center text-xl p-2 ">Ok</Text>
              </Pressable>
            </View>
            </View>
          </Modal>
        </View>
      </View>
    )
}

export default ResultModal;