import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import React, { useState, useRef} from "react";
import { PropsWithChildren } from "react";
import { AccordionItem } from "../components/AccordianList";
import { Pressable } from "react-native";
import { redirect } from "react-router-dom";
import Modal from "react-native-modal";
import { WifiScreen } from "./KalvinsCode";
import useInterval from "../Polling/useInterval";
import { loadAsync } from "expo-font";

const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [
    {
      data: [6, 7, 1, 3, 9, 3, 4, 2, 6],
      //come back to the RGBA
      color: (opacity = 1) => `rgba(255,255,255 ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ["Restroom1"], // optional
};

 function getAverages() {
  console.log("getting info:");

   fetch("http://192.168.1.109/")
    .then((res) => {
      // console.log(res.body);
      return res.json()
    })
    .then((data) => {
      //   console.log('something')
      // console.log(data.body);
      // setData(data);
      // console.log('This is Main data')
      // console.log(mainData)
      // console.log("==="+data)
      console.log(data)
      return(data)
    })
    .catch((err) => {
      console.log(err);
    });
}
// function change(list){
//  console.log(list)

// }
function saving(vari){

  const result = getAverages()
  vari(result)
}
export default function DetailPageOne() {
  const[mainData, setData]= useState(null)
  // mainDataChange(getAverages)
  // useInterval(saving(mainData),10000)
  // mainDataChange(result)
  console.log(mainData)
  useInterval(getAverages , 2000)
  // let changePer = []
  // useInterval(getAverages, 6000);

  // useInterval(changePer,6000)
  // console.log('This is Change Per')

  // data.datasets.push(changePer[0])
  return (
    <SafeAreaView>
      <View>
        <AccordionItem
          title={"Restroom 1"}
          body1={"Floor: "}
          body2={"Restroom #:"}
          floorNum={1}
          restNum={251}
        />
      </View>
      <View>
        <WifiScreen />
      </View>
      <View style={style.that}>
        <View style={style.inner3}>
          <Text style={{ color: "white", fontSize: 25 }}>
            HCHO <Text style={{ color: "#FF4B4B" }}>Level</Text> : 6 PPM
          </Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          width={355}
          height={292}
          chartConfig={chartConfig}
          style={{ left: 25, top: -80, borderRadius: 10, padding: 2 }}
        />
      </View>
    </SafeAreaView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#3E3E3E",
  backgroundGradientTo: "#3E3E3E",
  color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
  strokeWidth: 5, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const style = StyleSheet.create({
  box: {
    width: 172,
    height: 88,
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#3E3E3E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    left: 19,
    top: 47,
  },
  row: {
    flexDirection: "row",
  },
  inner2: {
    flex: 1,
    backgroundColor: "#3E3E3E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    left: 40,
    top: 47,
  },
  inner3: {
    flex: 1,
    backgroundColor: "#3E3E3E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    right: -30,
    top: 320,
  },
  innter4: {
    backgroundColor: "red",
    top: 500,
  },
  that: {
    width: 355,
    height: 88,
    padding: 1,
  },
  container: {
    width: 369,
    height: 50,
    left: 26,
    top: 20,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "0,0,0,0.5",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 273,
    backgroundColor: "rgba(23, 23, 23, 0.80)",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
