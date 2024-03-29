import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import BookYourLawyer from './components/BookYourLawyer';

function App() {
  const [selectedIPC, setSelectedIPC] = useState(null);
  const [currentSection, setCurrentSection] = useState('laws');
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showBookYourLawyer, setShowBookYourLawyer] = useState(false); // State to control visibility of BookYourLawyer component

  const goBackToMain = () => {
    setCurrentSection('laws');
    setSelectedIPC(null);
    setShowBookYourLawyer(false); // Hide BookYourLawyer component when navigating back
  };

  const handleBoxClick = (boxData) => {
    setCurrentSection(boxData.title);
    setSelectedIPC(boxData);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleSidebarItemClick = (item) => {
    if (item.label === 'Home') {
      setCurrentSection('laws');
      setSelectedIPC(null);
      setSidebarVisible(false);
      setShowBookYourLawyer(false); // Hide BookYourLawyer component when navigating home
    } else if (item.label === 'Book Your Lawyer') {
      setCurrentSection('bookYourLawyer');
      setShowBookYourLawyer(true); // Show BookYourLawyer component when navigating to 'Book Your Lawyer' page
    }
    // You can add logic for other sidebar items here
  };

  const renderSidebarItem = (item) => (
    <TouchableOpacity key={item.id} onPress={() => handleSidebarItemClick(item)}>
      <View style={styles.sidebarItem}>
        <Text style={styles.sidebarItemText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  const dummySidebarData = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Book Your Lawyer' },
    { id: 3, label: 'Logout' },
  ];
  
  const boxesData = [
    {
      title: "Offenses against the Person",
      ipc: "IPC 1",
      sections: [
        { sectionNumber: 1, sectionTitle: "Murder", details: "Murder is the unlawful killing of another person with malice aforethought." },
        { sectionNumber: 2, sectionTitle: "Culpable Homicide", details: "Culpable Homicide is the causing of death by an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death." },
        { sectionNumber: 3, sectionTitle: "Assault", details: "Assault is the intentional infliction of bodily harm or the threat of harm to another person." },
      ],
    },
    {
      title: "Offenses against the Person",
      ipc: "IPC 1",
      sections: [
        { sectionNumber: 1, sectionTitle: "Murder", details: "Murder is the unlawful killing of another person with malice aforethought." },
        { sectionNumber: 2, sectionTitle: "Culpable Homicide", details: "Culpable Homicide is the causing of death by an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death." },
        { sectionNumber: 3, sectionTitle: "Assault", details: "Assault is the intentional infliction of bodily harm or the threat of harm to another person." },
      ],
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      {sidebarVisible && (
        <ScrollView style={styles.sidebar}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.sidebarLogo}>
            <Text style={styles.sidebarLogoText}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.sidebarHeader}>Sidebar</Text>
          {dummySidebarData.map(renderSidebarItem)}
        </ScrollView>
      )}
      <ScrollView style={styles.contentContainer}>
  <View style={styles.header}>
    <TouchableOpacity onPress={toggleSidebar}>
      <Text style={styles.headerText}>LawEase ☰</Text>
    </TouchableOpacity>
  </View>
  {currentSection === 'laws' && ( // Conditionally render IPC laws section
    <>
      <View style={styles.breadcrumb}>
        <Text style={[styles.breadcrumbItem, styles.activeBreadcrumb]}>Laws</Text>
      </View>
      <View style={styles.verticalBoxes}>
        {boxesData.map((boxData, index) => (
          <TouchableOpacity key={index} onPress={() => handleBoxClick(boxData)}>
            <View style={styles.box}>
              <Text style={styles.boxText}>{boxData.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )}
  {showBookYourLawyer && ( // Render BookYourLawyer component
    <BookYourLawyer />
  )}
  {currentSection !== 'laws' && ( // Conditionally render modal for details when not in "laws" section
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View style={styles.detailsContainer}>
        {selectedIPC && (
          <>
            <Text style={styles.detailsTitle}>{selectedIPC.ipc}</Text>
            <FlatList
              data={selectedIPC.sections}
              keyExtractor={(item) => item.sectionNumber.toString()}
              renderItem={({ item }) => (
                <View style={styles.sectionDetails}>
                  <Text style={styles.sectionTitle}>{`Section ${item.sectionNumber}: ${item.sectionTitle}`}</Text>
                  <Text style={styles.detailsText}>{item.details}</Text>
                </View>
              )}
            />
            <Button title="Close" onPress={closeModal} />
          </>
        )}
      </View>
    </Modal>
  )}
</ScrollView>

    </SafeAreaView>
  );
}  
  
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#192A56',
    padding: 15,
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  breadcrumb: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  breadcrumbItem: {
    fontSize: 16,
    color: '#2F363F',
  },
  activeBreadcrumb: {
    fontWeight: 'bold',
  },
  verticalBoxes: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    marginBottom: 10,
  },
  box: {
    width: 350,
    height: 80,
    backgroundColor: '#6A89CC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8B78E6',
  },
  detailsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  sectionDetails: {
    marginBottom: 20,
  },
  detailsText: {
    color: '#555',
    fontSize: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#6A89CC',
    padding: 10,
    paddingTop: 20,
  },
  sidebarHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  sidebarItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  sidebarItemText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
  scrollView: {
    flex: 1,
  },
  sidebarLogo: {
    position: 'absolute',
    top: 0.5,
    left: 100,
    zIndex: 1,
    color: '#fff',
    fontSize: 24,
  },
  sidebarLogoText: {
    color: '#fff',
    fontSize: 24,
  },
  contentContainer:{}
});

export default App;
