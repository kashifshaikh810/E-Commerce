import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Header from '../../components/Layouts/Header/Header';
import styles from './styles';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import {Avatar, Card} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyButton from '../../components/Layouts/Button/Button';

const EditProfileMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Profile" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Update Profile</Text>
        </View>

        <View>
          <ProfileIcon
            name="face-man-profile"
            size={22}
            color="rgba(0,0,0,0.623)"
            style={styles.icon}
          />
          <TextInput
            placeholder="Name"
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
            placeholder="Email"
            style={styles.textInput}
            keyboardType="email-address"
            value={props.email}
            onChangeText={text => props.setEmail(text)}
          />
        </View>

        <View style={styles.imgPreviewContainer}>
          {props?.imagePreview ? (
            <View style={styles.marginTop}>
              <Avatar size={60} rounded source={{uri: props?.imagePreview}} />
            </View>
          ) : (
            <View style={styles.marginTop}>
              <Avatar
                size={60}
                rounded
                source={require('../../components/images/Profile.png')}
              />
            </View>
          )}
          <View style={styles.card}>
            <TouchableOpacity onPress={() => props?.openFile()}>
              <Card>
                <Text style={[styles.chooseFileTitle, styles.gray]}>
                  Choose File
                </Text>
              </Card>
            </TouchableOpacity>
          </View>
        </View>

        <MyButton
          {...props}
          title="Update"
          onPress={() => props.updatePressHandler()}
          loading={props.loading}
          buttonStyle={styles.buttonStyle}
          size="lg"
        />
      </ScrollView>
    </View>
  );
};

export default EditProfileMarkup;
