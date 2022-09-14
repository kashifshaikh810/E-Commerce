import React from 'react';
import {View, TextInput} from 'react-native';
import Header from '../../components/Layouts/Header/Header';
import Button from '../../components/Layouts/Button/Button';
import styles from './styles';

const SearchMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <View style={styles.searchingBox}>
        <TextInput
          placeholder="Search A Product..."
          placeholderTextColor="#b3b3b3"
          style={styles.textInput}
          value={props.keyword}
          onChangeText={text => props.setKeyword(text)}
        />

        <View>
          <Button
            title="Search"
            buttonStyle={styles.buttonStyle}
            size="lg"
            onPress={() => props.searchOnPressHandler()}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchMarkup;
