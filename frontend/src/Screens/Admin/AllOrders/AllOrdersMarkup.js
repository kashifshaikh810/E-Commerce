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

const AllOrdersMarkup = props => {
  const headerRow = ['Order ID', 'Status', 'ItemsQty', 'Amount', 'Actions'];
  let param = props?.route?.params;

  const rows = [];

  props?.orders &&
    props?.orders?.forEach((item, i) =>
      rows.push([
        item._id,
        item.ordersStatus,
        item.orderItems.length,
        item.totalPrice,
        'button',
      ]),
    );

  const element = (data, index, rowData) => (
    <View style={styles.elementContainer}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AdminOrdersDetails', {
            id: rowData[0],
          });
        }}>
        <EditIcon name="edit" size={25} color="#b3b3b3" style={styles.icon} />
      </TouchableOpacity>

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
      <Header
        {...props}
        backRouteName={param ? param?.backRouteName : 'Home'}
      />

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
              All Orders
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
                        cellData === 'Processing' && {color: 'red'},
                        cellData === 'Delivered' && {color: 'green'},
                        cellData === 'Shipped' && {color: 'red'},
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

export default AllOrdersMarkup;
