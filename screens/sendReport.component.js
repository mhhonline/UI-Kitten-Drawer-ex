import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Divider,
  Layout,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

export const SendReportScreen = ({ navigation }) => {
  const navigateToggle = () => {
    navigation.toggleDrawer();
  };

  const ToggleAction = () => <TopNavigationAction icon={MenuIcon} />;

  const MenuIcon = (props) => (
    <Icon {...props} name="menu-2" onPress={navigateToggle} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Send Report"
        alignment="center"
        accessoryLeft={ToggleAction}
      />
      <Divider />
      {/* Content of the page ... */}
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>SEND REPORT PAGE</Text>
      </Layout>
    </SafeAreaView>
  );
};
