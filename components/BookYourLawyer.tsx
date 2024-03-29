import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const BookYourLawyer = () => {
  const lawyerData = [
    { id: '1', name: 'John Doe', specialization: 'Criminal Law', email: 'john.doe@example.com', phoneNumber: '123-456-7890', image: require('./images/lawyer1.jpg') },
    // Add more lawyer entries as needed
  ];

  const renderLawyerItem = ({ item }) => (
    <View style={styles.lawyerItem}>
      <Image source={item.image} style={styles.lawyerImage} />
      <View style={styles.lawyerDetails}>
        <Text style={styles.lawyerName}>{item.name}</Text>
        <Text style={styles.lawyerSpecialization}>{item.specialization}</Text>
        <Text style={styles.lawyerContact}>{item.email}</Text>
        <Text style={styles.lawyerContact}>{item.phoneNumber}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Lawyer</Text>
      <FlatList
        data={lawyerData}
        keyExtractor={(item) => item.id.toString()} // Ensure id is converted to string
        renderItem={renderLawyerItem}
        contentContainerStyle={styles.lawyerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  lawyerList: {
    width: '100%',
  },
  lawyerItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lawyerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  lawyerDetails: {
    flex: 1,
  },
  lawyerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  lawyerSpecialization: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  lawyerContact: {
    fontSize: 14,
    color: '#999',
  },
});

export default BookYourLawyer;
