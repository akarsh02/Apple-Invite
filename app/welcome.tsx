import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center bg-yellow-950">
      <View className=" h-3/5 w-full bg-gray-400" />
      <View className=" flex-1 items-center justify-center gap-4 bg-yellow-800 p-4">
        <Text className="text-2xl  font-bold text-gray-300/60 ">Welcome to</Text>
        <Text className="text-5xl font-bold text-white">Apple Invite</Text>
        <Text className="r text-center text-lg  text-white/60">
          Create beautiful invitations for your eveents. Anyone can receive invitations.
        </Text>
        <Pressable className="self-center rounded-full bg-gray-50 px-8 py-4">
          <Text className="text-lg">Create an Event</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
