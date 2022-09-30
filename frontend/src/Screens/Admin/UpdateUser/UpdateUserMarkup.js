import React from 'react';
import {View, Text, ScrollView, Platform} from 'react-native';
import Header from '../../../components/Layouts/Header/Header';
import styles from './styles';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import EmailOutLineIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from '@rneui/themed';
import {Picker} from '@react-native-picker/picker';
import VerifiedUserIcon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../../../components/Layouts/Button/Button';

const UpdateUserMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="AllUsers" />

      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.updateUserHeadingContainer}>
            <Text
              style={[
                styles.updateUserHeadingText,
                {fontFamily: 'AbrilFatface-Regular'},
              ]}>
              Update User
            </Text>
          </View>

          <View style={styles.inputsSectionContainer}>
            <View style={styles.marginTop}>
              <Input
                style={styles.input}
                placeholder="Name"
                leftIcon={
                  <PersonIcon
                    name="person"
                    size={25}
                    color="rgba(0,0,0,0.623)"
                  />
                }
                value={props.name}
                onChangeText={props.setName}
              />
            </View>

            <View style={styles.marginTop}>
              <Input
                style={styles.input}
                keyboardType="email-address"
                placeholder="Email"
                leftIcon={
                  <EmailOutLineIcon
                    name="email-outline"
                    size={25}
                    color="rgba(0,0,0,0.623)"
                  />
                }
                value={props.email}
                onChangeText={props.setEmail}
              />
            </View>

            <View style={[Platform.OS === 'android' && styles.picker]}>
              <VerifiedUserIcon
                name="verified-user"
                size={20}
                color="rgba(0,0,0,0.623)"
                style={
                  Platform.OS === 'ios' ? styles.iOSIconTwo : styles.iconTwo
                }
              />
              <Picker
                selectedValue={props.role}
                onValueChange={(itemValue, itemIndex) =>
                  props.setRole(itemValue)
                }
                mode="dropdown">
                <Picker.Item label="Choose Category" value="null" />
                <Picker.Item label="Admin" value="admin" />
                <Picker.Item label="User" value="user" />
              </Picker>
            </View>

            <MyButton
              title="UPDATE"
              buttonStyle={styles.buttonStyle}
              onPress={() => props.updateUserOnPressHandler()}
              size="lg"
              disabled={!props.name || !props.email || props.role === 'null'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateUserMarkup;
