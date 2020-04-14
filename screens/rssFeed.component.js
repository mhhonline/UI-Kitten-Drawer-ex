import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import {
  Divider,
  Layout,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

export const RssFeedScreen = ({ navigation }) => {
  const navigateToggle = () => {
    navigation.toggleDrawer();
  };

  const MenuIcon = (props) => (
    <Icon {...props} name="menu-2" onPress={navigateToggle} />
  );

  const ToggleAction = () => <TopNavigationAction icon={MenuIcon} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="RSS Feed Comp."
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
        <Text>RSS FEED</Text>
      </Layout>
    </SafeAreaView>
  );
};
