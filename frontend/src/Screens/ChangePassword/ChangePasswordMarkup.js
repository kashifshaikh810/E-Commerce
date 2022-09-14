import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import MyButton from '../../components/Layouts/Button/Button';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailIcon from 'react-native-vector-icons/Fontisto';

const ChangePasswordMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Change Password</Text>
        </View>

        <View>
          <ProfileIcon
            name="face-man-profile"
            size={22}
            color="rgba(0,0,0,0.623)"
            style={styles.icon}
          />
          <TextInput
            placeholder="Old Password"
            style={styles.textInput}
            value={props.name}
            onChangeText={text => props.setName(text)}
          />
        </View>

        <View>
          <EmailIcon
            name="email"
            size={22}
            color="rgba(0,0,0,0.623)"
            style={styles.icon}
          />
          <TextInput
            placeholder="New Password"
            style={styles.textInput}
            keyboardType="email-address"
            value={props.email}
            onChangeText={text => props.setEmail(text)}
          />
        </View>

        <View>
          <EmailIcon
            name="email"
            size={22}
            color="rgba(0,0,0,0.623)"
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            keyboardType="email-address"
            value={props.email}
            onChangeText={text => props.setEmail(text)}
          />
        </View>

        <MyButton
          {...props}
          title="Change"
          onPress={() => props.updatePressHandler()}
          loading={props.loading}
          buttonStyle={styles.buttonStyle}
          size="lg"
        />
      </ScrollView>
    </View>
  );
};

export default ChangePasswordMarkup;
