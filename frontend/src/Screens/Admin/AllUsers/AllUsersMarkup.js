import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import DashboardTopBar from '../../../components/materials/DashboardTopBar/DashboardTopBar';
import {
  Table,
  TableWrapper,
} from '../../../components/materials/TableComponent/components/table.js';
import {Cell} from '../../../components/materials/TableComponent/components/cell';
import {Row} from '../../../components/materials/TableComponent/components/rows';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AllUsersMarkup = props => {
  const headerRow = ['User ID', 'Email', 'Name', 'Role', 'Actions'];
  let param = props?.route?.params?.backRouteName;

  const rows = [];

  props?.users &&
    props?.users?.forEach((item, i) =>
      rows.push([item._id, item.email, item.name, item.role, 'button']),
    );

  const element = (data, index, rowData) => (
    <View style={styles.elementContainer}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('UpdateUser', {id: rowData[0]});
        }}>
        <EditIcon name="edit" size={25} color="#b3b3b3" style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.deleteUserOnPressHandler(rowData)}>
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
      <Header {...props} backRouteName={param ? param : 'Home'} />

      <DashboardTopBar {...props} />

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }>
        <View>
          <View style={styles.headingContainer}>
            <Text
              style={[
                styles.headingText,
                {fontFamily: 'AbrilFatface-Regular'},
              ]}>
              All Users
            </Text>
          </View>

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
                        cellData === 'user' && {color: 'red'},
                        cellData === 'admin' && {color: 'green'},
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
        </View>
      </ScrollView>
    </View>
  );
};

export default AllUsersMarkup;
