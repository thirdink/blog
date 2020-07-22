import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    // console.log(navigation.getParam('id'));
    const {state} = useContext(BlogContext);
    // console.log(state);

    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    return <View>
        <Text>
            {blogPost.title}
        </Text>
        <Text>
            {blogPost.content}
        </Text>
    </View>
}

const syles = StyleSheet.create({

});

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit',{id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

export default ShowScreen;