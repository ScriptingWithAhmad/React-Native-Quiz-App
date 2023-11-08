import { View, Text, Button, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'

export default function Questions() {
    // const [dbQuestions,setDbQuestions]:any=useState([]);
    // const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
    // const loadQuestions:any =async () =>{
    //     // const data= await fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple');
    //     const response= await fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple');
    //     const questions=await response.json();
    //     //console.log(questions?.results[0].question);
    //     setDbQuestions(questions?.results);
    // }
    // const setNextQuestion=()=>{
    //     console.log("set")
    //     const updatedIndex=currentQuestionIndex+1
    //     setCurrentQuestionIndex(updatedIndex);
    // }
    // useEffect(loadQuestions,[]);
  return (
    <View></View>
    // <View>
    //     <ScrollView>
    //     {
    //         dbQuestions.map((item:any)=><View>
    //             <Text style={{backgroundColor:'blue',padding:5,margin:10,    ,borderRadius:7}}>Question . {item?.question}</Text>
    //             <TouchableOpacity>
    //                 <View style={{backgroundColor:'blue',margin:10,borderRadius:50,flexDirection:'row',padding:5}}>
    //                     <Text style={{textAlign:'center',height:30,width:30,backgroundColor:'white',color:'black',borderRadius:50}}>A</Text>
    //                     <Text style={{color:'white'}}>Correct Answer: {item?.correct_answer}</Text>
    //                 </View>
    //             </TouchableOpacity>
    //             <Text>Wrong Answer: {item?.incorrect_answers}</Text>

    //         </View>)
    //     }
    //     </ScrollView>
    //     <Text>Question {currentQuestionIndex+1}. {dbQuestions[currentQuestionIndex]?.question}</Text>
    //   <TouchableOpacity onPress={setNextQuestion}><Text style={{padding:5,backgroundColor:'blue',color:'white',textAlign:'center'}}>Next question</Text></TouchableOpacity>
    //   {/* <Button title={'Next question'} onPress={setNextQuestion}></Button> */}
    // </View>
  );
}