import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from './src/components/Header'
import SubHeader from './src/components/SubHeader'
import ProductList from './src/components/ProductList';
import Tabs from './src/components/Tabs';

import styles from './src/styles/styles'

const App = () => (
  <View style={styles.container} >
    <Header />
    <ScrollView>
      <SubHeader />
      <ProductList />
    </ScrollView>
    <Tabs />
  </View>
)

export default App