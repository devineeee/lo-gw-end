import React from "react";
import { Text, View, Image, TextInput } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 2000, height: 80, backgroundColor: 'grey'}}></View>
      <Text>Azizah</Text>
      <Text>Shafa</Text>
      <Text>Amina</Text>
      <Text>Devine</Text>
      <Mahasiswa />
      <Text>Cek Khodam</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Mahasiswa = () => {
  return <Text>Mahasiswa STTP</Text>;
};

const Photo = () => {
  return (
    <Image
    source={{uri: 'https://i.pinimg.com/736x/58/b8/5c/58b85c1b8157306eac14511c5a4f7d27.jpg'}}
    style={{width: 200, height: 200}}
    />
  );
};

export default App;