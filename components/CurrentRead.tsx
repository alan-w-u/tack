import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

interface Book {
  title: string;
}

const CurrentlyRead = ({ books }: { books: Book[] }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.currentlyReading}
    >
      {books.map((book, index) => (
        <View key={index} style={styles.currentlyReadingItem}>
          <View style={styles.readingInfo}>
            <View style={styles.avatar}></View>
            <Text>Currently reading:</Text>
            <Text style={styles.bookTitle}>{book.title}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  currentlyReading: {
    paddingHorizontal: 10,
  },
  currentlyReadingItem: {
    marginRight: 20,
  },
  readingInfo: {
    flexDirection: 'column',
  },
  bookTitle: {
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
    marginBottom: 10,
  },
});

export default CurrentlyRead;
