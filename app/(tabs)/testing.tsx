import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CurrentlyRead from '@/components/CurrentRead';
import ParallaxScrollView from '@/components/ParallaxScrollView';

interface Book {
  title: string;
}

const books = [
  { title: 'The ' },
  { title: '1984' },
  { title: 'To Kill a Mockingbird' },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerText}>Home</ThemedText>
      </ThemedView>

      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Ionicons name="menu" size={24} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Title, Author"
          />
          <Ionicons name="search" size={24} color="#888" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.currentlyReading}
        >
          {books.map((book, index) => (
            <CurrentlyRead key={index} books={[book]} />
          ))}
        </ScrollView>

        <View style={styles.bookEntry}>
          <View style={styles.avatar}></View>
          <View style={styles.bookInfo}>
            <ThemedText style={styles.userName}>Alan Wu</ThemedText>
            <ThemedText style={styles.timestamp}>October 18, 2024 at 11:09 PM</ThemedText>
            <ThemedText style={styles.bookTitle}>The Hobbit</ThemedText>
            <View style={styles.stats}>
              <View style={styles.statItem}>
                <ThemedText>Time</ThemedText>
                <ThemedText style={styles.statValue}>42m</ThemedText>
              </View>
              <View style={styles.statItem}>
                <ThemedText>Pages</ThemedText>
                <ThemedText style={styles.statValue}>38</ThemedText>
              </View>
              <View style={styles.statItem}>
                <ThemedText>Annotations</ThemedText>
                <ThemedText style={styles.statValue}>3</ThemedText>
              </View>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="thumbs-up" size={24} color="#888" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={24} color="#888" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={24} color="#888" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bookEntry}>
          <View style={styles.avatar}></View>
          <View style={styles.bookInfo}>
            <ThemedText style={styles.userName}>Tracy La</ThemedText>
            <ThemedText style={styles.timestamp}>October 16, 2024 at 2:38 PM</ThemedText>
          </View>
        </View>
      </ScrollView>
    </ThemedView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#D1E8E2',
    paddingTop: 50,
    padding: 30,
    alignItems: 'center',
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    padding: 8,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  currentlyReading: {
    flexDirection: 'row',
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D1E8E2',
    marginRight: 8,
  },
  readingInfo: {
    flex: 1,
  },
  bookEntry: {
    flexDirection: 'row',
    margin: 16,
    marginTop: 0,
  },
  bookInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#888',
    fontSize: 12,
  },
  bookTitle: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  actionButton: {
    padding: 8,
  },
});