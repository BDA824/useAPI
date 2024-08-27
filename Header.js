import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useEffect, useState } from 'react';

export default function Header() {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '868686',
      alignContent: 'center',
      justifyContent: 'center'
    },
})