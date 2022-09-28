import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import DashboardTopBar from '../../../components/materials/DashboardTopBar/DashboardTopBar';
import {Input} from '@rneui/themed';
import MyButton from '../../../components/Layouts/Button/Button';
import {Picker} from '@react-native-picker/picker';

// icons pack
import SpellCheckIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AttachMoneyIcon from 'react-native-vector-icons/MaterialIcons';
import DescriptionIcon from 'react-native-vector-icons/MaterialIcons';
import StorageIcon from 'react-native-vector-icons/MaterialIcons';
import AccountTreeIcon from 'react-native-vector-icons/MaterialIcons';

const pickerData = [
  {name: 'Laptop'},
  {name: 'Footwear'},
  {name: 'Bottom'},
  {name: 'Tops'},
  {name: 'Attire'},
  {name: 'Camera'},
  {name: 'SmartPhones'},
];

const UpdateProductMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="AllProducts" />

      <DashboardTopBar {...props} />

      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.createProductHeadingContainer}>
            <Text
              style={[
                styles.createProductHeadingText,
                {fontFamily: 'AbrilFatface-Regular'},
              ]}>
              Update Product
            </Text>
          </View>

          <View style={styles.inputsSectionContainer}>
            <View style={styles.marginTop}>
              <Input
                style={styles.input}
                placeholder="Product Name"
                leftIcon={
                  <SpellCheckIcon
                    name="spellcheck"
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
                placeholder="Price"
                leftIcon={
                  <AttachMoneyIcon
                    name="attach-money"
                    size={25}
                    color="rgba(0,0,0,0.623)"
                  />
                }
                value={props.price}
                onChangeText={num => props.setPrice(num)}
              />
            </View>

            <View style={styles.marginTop}>
              <Input
                style={[styles.input, {marginTop: 10}]}
                placeholder="Product Description"
                leftIcon={
                  <DescriptionIcon
                    name="description"
                    size={25}
                    color="rgba(0,0,0,0.623)"
                  />
                }
                value={props.description}
                onChangeText={props.setDescription}
                multiline
                returnKeyType="next"
              />
            </View>

            <View style={[Platform.OS === 'android' && styles.picker]}>
              <AccountTreeIcon
                name="account-tree"
                size={20}
                color="black"
                style={
                  Platform.OS === 'ios' ? styles.iOSIconTwo : styles.iconTwo
                }
              />
              <Picker
                selectedValue={props.category}
                onValueChange={(itemValue, itemIndex) =>
                  props.setCategory(itemValue)
                }
                mode="dropdown">
                <Picker.Item label="Choose Category" value="" />
                {pickerData.map((item, index) => (
                  <Picker.Item label={item.name} value={item.name} />
                ))}
              </Picker>
            </View>

            <View style={styles.marginTop}>
              <Input
                style={styles.input}
                placeholder="Stock"
                keyboardType="numeric"
                leftIcon={
                  <StorageIcon
                    name="storage"
                    size={25}
                    color="rgba(0,0,0,0.623)"
                  />
                }
                value={props.stock}
                onChangeText={props.setStock}
              />
            </View>

            <TouchableOpacity
              style={styles.chooseFileContainer}
              onPress={() => props.openFile()}>
              <Text style={styles.chooseFileText}>Choose File</Text>
            </TouchableOpacity>

            <ScrollView
              style={styles.scrollView}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              {props?.imagePreview &&
                props?.imagePreview?.map((image, i) => (
                  <View style={styles.map}>
                    <Image source={{uri: image.url}} style={styles.image} />
                  </View>
                ))}

              {props?.imagePreviewLocal &&
                props?.imagePreviewLocal?.map((image, i) => (
                  <View style={styles.map}>
                    <Image source={{uri: image.uri}} style={styles.image} />
                  </View>
                ))}
            </ScrollView>

            <MyButton
              title="UPDATE"
              buttonStyle={styles.buttonStyle}
              onPress={() => props.createOnPressHandler()}
              size="lg"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProductMarkup;
