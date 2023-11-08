import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

type dataType = {
  question: string;
};
export default function DataSet() {
  const [dbQuestions, setDbQuestions]: any = useState<dataType[]>([]);
  const [loading, setLoading]: any = useState(true);

  // const data = async () => {
  //   return new Promise(async (resolve, reject) => {
  const API = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';
  //     let get = await fetch(API);
  //     const result = await get.json();
  //     setDbQuestions(result);
  //     // console.warn(result);
  //     // console.warn(dbQuestions);
  //   });
  // };

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(json => setDbQuestions(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   data()
  //     .then((d: any) => {
  //       console.log(d);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <View>
      <ScrollView style={{backgroundColor: 'black'}}>
        {/* {
        loading ? (
          <Text>Loading ...</Text>
        ) : (
          dbQuestions.map((data:any) => (
            <View>
              <Text>{data.question}</Text>
            </View>
          ))
        )

        // dbQuestions.map((item: any) => {
        //   <View>
        //     <Text style={{color: 'black', backgroundColor: "blue"}}>{item.question}</Text>
        //   </View>
        // })
      } */}

        {
          <Text
            style={{
              backgroundColor: 'white',
              color: 'green',
              // textSize: '300',
              margin: 10,
              borderRadius: 50,
              flexDirection: 'row',
              padding: 5,
            }}>
            {dbQuestions.question}
          </Text>
        }
      </ScrollView>
    </View>
  );
}
