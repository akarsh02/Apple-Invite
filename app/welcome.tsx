import {BlurView} from 'expo-blur';
import React, { act, useState } from 'react';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView } from 'react-native';

export default function WelcomeScreen() {
  const [activeindex,setActiveIndex] = useState(0)
  const onButtonPress = () =>{
    if(activeindex >= events.length-1) {
      setActiveIndex(0)
    } else{
       setActiveIndex(activeindex +1)


    }
  }
  const events = [
    {
      id: 1,
      image: require('../assets/1.png'),
    },
    {
      id: 2,
      image: require('../assets/2.png'),
    },
    {
      id: 3,
      image: require('../assets/3.png'),
    },
    {
      id: 4,
      image: require('../assets/4.png'),
    },
    {
      id: 5,
      image: require('../assets/5.png'),
    },
    {
      id: 6,
      image: require('../assets/6.png'),
    },
    {
      id: 7,
      image: require('../assets/7.png'),
    },
    {
      id: 8,
      image: require('../assets/8.png'),
    },
    {
      id: 9,
      image: require('../assets/9.png'),
    },
  ];
  return (
    <View className="flex-1 items-center bg-yellow-950">
      <Image source={events[activeindex].image} className='absolute inset-0'/>
      <View className='absolute bg-black/50 inset-0'/>
      <BlurView intensity={100}>
      <SafeAreaView className='h-3/5 w-full'>
      <View>
        <ScrollView horizontal>
          {events.map((event) => (
            <View key={event.id} className="h-full w-96 p-5">
              <Image
                style={{ width: '100%', height: '100%' }}
                className="h-full w-full rounded-3xl"
                source={event.image}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      </SafeAreaView>
     
      <View className=" flex-1 items-center justify-center gap-4 p-4">
        <Text className="text-2xl  font-bold text-gray-300/60 ">Welcome to</Text>
        <Text className="text-5xl font-bold text-white">Apple Invite</Text>
        <Text className="mb-5 text-center text-lg  text-white/60">
          Create beautiful invitations for your eveents. Anyone can receive invitations.
        </Text>
        <Pressable onPress={onButtonPress} className="self-center rounded-full bg-gray-50 px-8 py-4">
          <Text className="text-lg">Create an Event</Text>
        </Pressable>
      </View>
      </BlurView>
    </View>
  );
}
