import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import DashboardTopBar from '../../../components/materials/DashboardTopBar/DashboardTopBar';
import StarIcon from 'react-native-vector-icons/Entypo';
import {Input} from '@rneui/themed';
import MyButton from '../../../components/Layouts/Button/Button';
import {
  Table,
  TableWrapper,
} from '../../../components/materials/TableComponent/components/table.js';
import {Cell} from '../../../components/materials/TableComponent/components/cell';
import {Row} from '../../../components/materials/TableComponent/components/rows';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AllReviewsMarkup = props => {
  const headerRow = ['Review ID', 'User', 'Comment', 'Rating', 'Actions'];

  const rows = [];

  props?.reviews &&
    props?.reviews?.forEach((item, i) =>
      rows.push([item._id, item.name, item.comment, item.rating, 'button']),
    );

  const element = (data, index, rowData) => (
    <View style={styles.elementContainer}>
      <TouchableOpacity onPress={() => {}}>
        <DeleteIcon
          name="delete"
          size={25}
          color="#b3b3b3"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Home" />

      <DashboardTopBar {...props} />

      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.allReviewsHeadingContainer}>
            <Text
              style={[
                styles.allReviewsHeadingText,
                {fontFamily: 'AbrilFatface-Regular'},
              ]}>
              All Reviews
            </Text>
          </View>

          <View style={styles.inputsSectionContainer}>
            <View style={styles.marginTop}>
              <Input
                style={[styles.input, {fontFamily: 'DancingScript-Regular'}]}
                placeholder="Product id"
                leftIcon={
                  <StarIcon name="star" size={25} color="rgba(0,0,0,0.623)" />
                }
                value={props.productId}
                onChangeText={props.productOnChangeText}
              />
            </View>
          </View>

          <MyButton
            title="SEARCH"
            buttonStyle={styles.buttonStyle}
            onPress={() => props.searchOnPressHandler()}
            size="lg"
          />

          {props?.reviews?.length === 0 ? (
            <Text style={{textAlign: 'center'}}>No Reviews Found</Text>
          ) : (
            <View style={styles.table}>
              <Table borderStyle={styles.tableMain}>
                <Row
                  data={headerRow}
                  style={styles.head}
                  textStyle={styles.headerText}
                />
                {rows.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        textStyle={[
                          styles.text,
                          cellData >= 3 && rowData[3] >= 3 && {color: 'green'},
                          cellData <= 3 && rowData[3] <= 3 && {color: 'red'},
                        ]}
                        data={
                          cellIndex === 4
                            ? element(cellData, index, rowData)
                            : cellData
                        }
                      />
                    ))}
                  </TableWrapper>
                ))}
              </Table>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllReviewsMarkup;
