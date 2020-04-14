import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, View } from 'react-native';
import { SendReportScreen } from '../screens/sendReport.component';
import { RssFeedScreen } from '../screens/rssFeed.component';
import { Drawer, DrawerItem, DrawerGroup } from '@ui-kitten/components';
import { HomeScreen } from '../screens/home.component';

/* ************************************* */
/* **** Drawer Implementation ********** */
/* ************************************* */

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
  >
    <DrawerItem title="News" />
    <DrawerItem title="Send Report" />
    <DrawerGroup title="PUBLICATION">
      <DrawerItem title="ITEM#1" />
      <DrawerItem title="ITEM#2" />
    </DrawerGroup>
    <DrawerItem title="Home" />
  </Drawer>
);

const SideMenu = createDrawerNavigator();

const DrawerNavigator = () => (
  <SideMenu.Navigator
    drawerContent={(props) => {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerContent {...props} />
            {/* <DrawerItemList {...props} /> */}
          </SafeAreaView>
        </View>
      );
    }}
  >
    <SideMenu.Screen
      name="News" //
      component={RssFeedScreen} // component we called
      options={{ title: 'News XX' }} // title in the drawer, seems is not working if i use DrawerItem
    />
    <SideMenu.Screen name="SendReport" component={SendReportScreen} />
    <SideMenu.Screen name="Home" component={SendReportScreen} />
    <SideMenu.Screen name="Home2" component={HomeScreen} />
  </SideMenu.Navigator>
);

export const HomeNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);
