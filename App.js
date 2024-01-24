import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Router, Stack, Route } from 'expo-router'; // Import from expo-router
import Layout from './_layout'; // Import the Layout component
import IndexPage from './index'; // Import the IndexPage component
import Page2 from './page2'; // Import the Page2 component

export default function App() {
  return (
    <Router>
      <Layout>
        <Stack>
          <Route exact path="/" component={IndexPage} />
          <Route path="/page2" component={Page2} />
        </Stack>
        <StatusBar style="auto" />
      </Layout>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

