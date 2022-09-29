import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import {
  Table,
  TableWrapper,
} from '../../components/materials/TableComponent/components/table.js';
import {Cell} from '../../components/materials/TableComponent/components/cell';
import {Row} from '../../components/materials/TableComponent/components/rows';
import LaunchIcon from 'react-native-vector-icons/MaterialIcons';

const OrdersMarkup = props => {
  const headerRow = ['Order ID', 'Status', 'Items Qty', 'Amount', 'Actions'];

  const rows = [];

  props?.orders &&
    props?.orders?.forEach(item =>
      rows.push([
        item._id,
        item.ordersStatus,
        item.orderItems?.length,
        item.totalPrice,
        item.button,
      ]),
    );

  const element = (data, index, rowData) => (
    <TouchableOpacity
      style={{flex: 1, paddingTop: 5, alignSelf: 'center'}}
      onPress={() =>
        props.navigation.navigate('OrdersDetails', {id: rowData[0]})
      }>
      <LaunchIcon name="launch" size={25} color="#b3b3b3" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Home" />

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }>
        <View style={styles.tableContainer}>
          <Table borderStyle={styles.tableMain}>
            <Row
              data={headerRow}
              style={styles.head}
              textStyle={styles.headerText}
            />
            {props.orders.length === 0 ? (
              <Text style={styles.noStyle}>No Orders yet</Text>
            ) : (
              rows.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={
                        cellIndex === 4
                          ? element(cellData, index, rowData)
                          : cellData
                      }
                      textStyle={[
                        styles.text,
                        cellData === 'Processing' && {color: 'red'},
                        cellData === 'Delivered' && {color: 'green'},
                      ]}
                    />
                  ))}
                </TableWrapper>
              ))
            )}
          </Table>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {props?.user && `${props?.user?.name}'s`} Orders
        </Text>
      </View>
    </View>
  );
};

export default OrdersMarkup;
