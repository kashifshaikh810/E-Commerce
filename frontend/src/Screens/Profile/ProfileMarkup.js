import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import MyButton from '../../components/Layouts/Button/Button';
import {Skeleton} from '@rneui/themed';

const ProfileMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.myProfile,
              // {fontFamily: 'DynaPuff-VariableFont_wdth,wght'},
            ]}>
            My Profile
          </Text>
          {props.loading ? (
            <Skeleton
              circle
              animation="wave"
              style={[styles.profileImage, styles.paddingTop]}
            />
          ) : (
            <Image
              source={{uri: props?.user?.avatar?.url}}
              style={[styles.profileImage, styles.paddingTop]}
            />
          )}
          <MyButton
            title="Edit Profile"
            {...props}
            onPress={() =>
              props.navigation.navigate('EditProfile', {forUse: true})
            }
            color={{color: '#b3b3b3'}}
            buttonStyle={styles.buttonStyle}
            size="lg"
          />
        </View>
        <View style={styles.profileDetailsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Full Name :-</Text>
            <Text style={styles.subTitle}>
              {props.loading ? (
                <Skeleton animation="wave" width={200} height={20} />
              ) : (
                props?.user?.name
              )}
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Email :-</Text>
            <Text style={styles.subTitle}>
              {props.loading ? (
                <Skeleton animation="wave" width={230} height={20} />
              ) : (
                props?.user?.email
              )}
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Joined On :-</Text>
            <Text style={styles.subTitle}>
              {props.loading ? (
                <Skeleton animation="wave" width={200} height={20} />
              ) : (
                String(props?.user?.createdAt)?.substring(0, 10)
              )}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <MyButton
            title="My Orders"
            {...props}
            onPress={() => props.navigation.navigate('Orders')}
            color={{color: '#b3b3b3'}}
            buttonStyle={styles.myButtonStyle}
            size="lg"
          />

          <MyButton
            title="Change Password"
            {...props}
            onPress={() => props.navigation.navigate('ChangePassword')}
            color={{color: '#b3b3b3'}}
            buttonStyle={styles.myButtonStyle}
            size="lg"
          />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default ProfileMarkup;
