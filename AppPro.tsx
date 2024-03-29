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

function App() {
  const [selectedIPC, setSelectedIPC] = useState(null);
  const [currentSection, setCurrentSection] = useState('laws');
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false); // New state for sidebar visibility

  const goBackToMain = () => {
    setCurrentSection('laws');
    setSelectedIPC(null);
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
      setSidebarVisible(false); // Close sidebar when navigating to home
    }
    // Add more navigation logic for other sidebar items as needed
  };

  const renderSidebarItem = (item) => (
    <TouchableOpacity key={item.id} onPress={() => console.log(`Clicked on ${item.label}`)}>
      <View style={styles.sidebarItem}>
        <Text style={styles.sidebarItemText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );


  const dummySidebarData = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Book Your Lawyer' },
    { id: 3, label: 'Logout' },
    // Add more dummy sections as needed
  ];

  // Dummy data for the boxes
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
      title: "Offenses against Property",
      ipc: "IPC 2",
      sections: [
        { sectionNumber: 4, sectionTitle: "Robbery", details: "Robbery is the unlawful taking of another person's property with the intent to permanently deprive them of it." },
        { sectionNumber: 5, sectionTitle: "Armed Robbery", details: "Armed Robbery involves using a weapon to commit robbery and is considered a more serious offense." },
        { sectionNumber: 6, sectionTitle: "Aggravated Robbery", details: "Aggravated Robbery involves the use of a deadly weapon or causing serious bodily harm during a robbery." },
        { sectionNumber: 7, sectionTitle: "Theft", details: "Theft involves the unlawful taking of someone else's property with the intent to permanently deprive them of it." },
        { sectionNumber: 8, sectionTitle: "Dacoity", details: "Dacoity involves a group of people using violence to rob others." },
      ],
    },
    {
      title: "Offenses Relating to Marriage",
      ipc: "IPC 3",
      sections: [
        { sectionNumber: 9, sectionTitle: "Burglary", details: "Burglary is the unauthorized entry into a building or property with the intent to commit a crime, usually theft." },
        { sectionNumber: 10, sectionTitle: "Aggravated Burglary", details: "Aggravated Burglary involves entering a building with a weapon or causing injury to someone inside." },
        { sectionNumber: 11, sectionTitle: "Bigamy", details: "Bigamy involves the act of marrying someone while already being legally married to another person." },
        { sectionNumber: 12, sectionTitle: "Adultery", details: "Adultery involves a married person engaging in consensual sexual relations with someone other than their spouse." },
      ],
    },
    {
      title: "Offenses against the State",
      ipc: "IPC 4",
      sections: [
        { sectionNumber: 13, sectionTitle: "Assault", details: "Assault is the intentional infliction of bodily harm or the threat of harm to another person." },
        { sectionNumber: 14, sectionTitle: "Aggravated Assault", details: "Aggravated Assault involves the use of a weapon or causing serious injury during an assault." },
        { sectionNumber: 15, sectionTitle: "Sedition", details: "Sedition involves the act of inciting revolt or violence against a lawful authority with the intent to undermine or overthrow it." },
        { sectionNumber: 16, sectionTitle: "Waging War against the State", details: "Waging War against the State involves engaging in war or using violence to overthrow the government." },
      ],
    },
    {
      title: "Offenses Relating to Religion",
      ipc: "IPC 5",
      sections: [
        { sectionNumber: 17, sectionTitle: "Forgery", details: "Forgery involves creating fake documents or signatures with the intent to deceive." },
        { sectionNumber: 18, sectionTitle: "Uttering Forged Documents", details: "Uttering Forged Documents involves knowingly using fake documents to deceive others." },
        { sectionNumber: 19, sectionTitle: "Promoting Enmity between Religious Groups", details: "Promoting Enmity between Religious Groups involves acts intended to create hatred or hostility between different religious groups." },
      ],
    },
    {
      title: "Offenses against Public Tranquility",
      ipc: "IPC 6",
      sections: [
        { sectionNumber: 20, sectionTitle: "Rioting", details: "Rioting involves the use of violence by an unlawful assembly of people with a common intent." },
        { sectionNumber: 21, sectionTitle: "Affray", details: "Affray involves the use of violence or threats of violence by individuals that causes fear in the public." },
      ],
    },
    {
      title: "Offenses against Public Health, Safety, and Convenience",
      ipc: "IPC 7",
      sections: [
        { sectionNumber: 22, sectionTitle: "Negligent Conduct with Respect to Poisonous Substances", details: "Negligent Conduct with Respect to Poisonous Substances involves the careless handling of poisonous substances that may endanger public safety." },
        { sectionNumber: 23, sectionTitle: "Causing Grievous Hurt by Act Endangering Life or Personal Safety", details: "Causing Grievous Hurt by Act Endangering Life or Personal Safety involves causing severe injuries through an act that endangers life or personal safety." },
      ],
    },
    {
      title: "Offenses by or Relating to Public Servants",
      ipc: "IPC 8",
      sections: [
        { sectionNumber: 24, sectionTitle: "Bribery", details: "Bribery involves offering, giving, receiving, or soliciting something of value with the aim of influencing the actions of an official or other person in a position of authority." },
        { sectionNumber: 25, sectionTitle: "Corruption", details: "Corruption involves dishonest or fraudulent conduct by those in power, typically involving bribery or similar illegal practices." },
      ],
    },
    {
      title: "Contempts of the Lawful Authority of Public Servants",
      ipc: "IPC 9",
      sections: [
        { sectionNumber: 26, sectionTitle: "Disobedience of Public Servant's Lawful Order", details: "Disobedience of Public Servant's Lawful Order involves the refusal to comply with the legal orders of a public servant." },
      ],
    },
    {
      title: "False Evidence and Offenses Against Public Justice",
      ipc: "IPC 10",
      sections: [
        { sectionNumber: 27, sectionTitle: "Perjury", details: "Perjury involves deliberately providing false information while under oath during legal proceedings." },
        { sectionNumber: 28, sectionTitle: "Fabricating False Evidence", details: "Fabricating False Evidence involves creating or presenting false evidence with the intent to deceive." },
      ],
    },
    {
      title: "Offenses against Public Tranquility",
      ipc: "IPC 6",
      sections: [
        { sectionNumber: 20, sectionTitle: "Rioting", details: "Rioting involves the act of participating in a violent disturbance of the peace by an assemblage of persons." },
        { sectionNumber: 21, sectionTitle: "Affray", details: "Affray involves the act of using or threatening violence to create fear in the public." },
      ],
    },
    {
      title: "Offenses against Public Health, Safety, and Convenience",
      ipc: "IPC 7",
      sections: [
        { sectionNumber: 22, sectionTitle: "Negligent Conduct with Respect to Poisonous Substances", details: "Negligent Conduct with Respect to Poisonous Substances involves negligently handling or using poisonous substances, endangering public safety." },
        { sectionNumber: 23, sectionTitle: "Causing Grievous Hurt by Act Endangering Life or Personal Safety", details: "Causing Grievous Hurt by Act Endangering Life or Personal Safety involves causing severe harm through actions that endanger life or personal safety." },
      ],
    },
    // ... (previous boxes)
    {
      title: "Offenses Relating to Currency Notes and Bank Notes",
      ipc: "IPC 11",
      sections: [
        { sectionNumber: 45, sectionTitle: "Counterfeiting Currency Notes", details: "Counterfeiting Currency Notes involves creating fake currency notes with the intent to deceive." },
      ],
    },
    {
      title: "Offenses Relating to Weights and Measures",
      ipc: "IPC 12",
      sections: [
        { sectionNumber: 46, sectionTitle: "False Weights and Measures", details: "False Weights and Measures involves using inaccurate weights or measures for fraudulent purposes." },
      ],
    },
    {
      title: "Offenses Affecting the Public Health, Safety, Convenience, Decency, and Morals",
      ipc: "IPC 13",
      sections: [
        { sectionNumber: 47, sectionTitle: "Adulteration of Food or Drink Intended for Sale", details: "Adulteration of Food or Drink Intended for Sale involves mixing impurities with food or drink with the intent to deceive consumers." },
        { sectionNumber: 48, sectionTitle: "Sale of Noxious Food or Drink", details: "Sale of Noxious Food or Drink involves selling food or drink that is harmful to health." },
      ],
    },
    {
      title: "Attempts to Commit Offenses",
      ipc: "IPC 9",
      sections: [
        { sectionNumber: 29, sectionTitle: "Attempt to Commit Murder", details: "Attempt to Commit Murder involves the act of trying to unlawfully cause the death of another person." },
        { sectionNumber: 30, sectionTitle: "Attempt to Commit Robbery", details: "Attempt to Commit Robbery involves the act of trying to unlawfully take another person's property with the intent to permanently deprive them of it." },
      ],
    },
    {
      title: "Offenses Relating to Documents",
      ipc: "IPC 10",
      sections: [
        { sectionNumber: 31, sectionTitle: "Forgery", details: "Forgery involves creating fake documents or signatures with the intent to deceive." },
        { sectionNumber: 32, sectionTitle: "Use of Forged Document as Genuine", details: "Use of Forged Document as Genuine involves knowingly using fake documents to deceive others." },
      ],
    },
    {
      title: "Defamation",
      ipc: "IPC 11",
      sections: [
        { sectionNumber: 33, sectionTitle: "Defamation", details: "Defamation involves making false statements about someone that harm their reputation." },
        { sectionNumber: 34, sectionTitle: "Punishment for Defamation", details: "Punishment for Defamation involves penalties for making false statements that harm someone's reputation." },
      ],
    },
    {
      title: "Offenses Affecting the Human Body",
      ipc: "IPC 12",
      sections: [
        { sectionNumber: 35, sectionTitle: "Grievous Hurt", details: "Grievous Hurt involves causing severe injuries that endanger life or cause permanent damage." },
        { sectionNumber: 36, sectionTitle: "Voluntarily Causing Hurt", details: "Voluntarily Causing Hurt involves intentionally causing bodily harm to another person." },
      ],
    },
    {
      title: "Offenses Against the Family",
      ipc: "IPC 13",
      sections: [
        { sectionNumber: 37, sectionTitle: "Cruelty by Husband or Relatives of Husband", details: "Cruelty by Husband or Relatives of Husband involves subjecting a woman to cruelty by her husband or his relatives." },
      ],
    },
    {
      title: "Criminal Conspiracy",
      ipc: "IPC 14",
      sections: [
        { sectionNumber: 38, sectionTitle: "Criminal Conspiracy", details: "Criminal Conspiracy involves an agreement between two or more people to commit a crime." },
      ],
    },
    {
      title: "Attempts to Commit Offenses",
      ipc: "IPC 15",
      sections: [
        { sectionNumber: 39, sectionTitle: "Attempt to Commit Offenses", details: "Attempt to Commit Offenses involves the act of trying to commit various criminal offenses." },
      ],
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Sidebar */}
      {sidebarVisible && (
        <ScrollView style={styles.sidebar}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.sidebarLogo}>
            {/* Add the sidebar icon */}
            <Text style={styles.sidebarLogoText}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.sidebarHeader}>Sidebar</Text>
          {dummySidebarData.map(renderSidebarItem)}
        </ScrollView>
      )}

      {/* Main Content */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar}>
            {/* Add the sidebar icon */}
            <Text style={styles.headerText}>LawEase ☰</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.breadcrumb}>
          {currentSection === 'laws' ? (
            <Text style={[styles.breadcrumbItem, styles.activeBreadcrumb]}>Laws</Text>
          ) : (
            <TouchableOpacity onPress={goBackToMain}>
              <Text style={[styles.breadcrumbItem, styles.activeBreadcrumb]}>Back to Laws</Text>
            </TouchableOpacity>
          )}
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
        {currentSection !== 'laws' && (
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
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
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'flex-start', // Align to the right
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Header text color
  },
  breadcrumb: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  breadcrumbItem: {
    fontSize: 16,
    color: '#3498db',
  },
  activeBreadcrumb: {
    fontWeight: 'bold',
  },
  verticalBoxes: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    flex: 1, // Add flex: 1 to make the view take the available space
    marginBottom: 10, // Add marginBottom to avoid the last box being partially hidden
  },
  box: {
    width: 350,
    height: 50,
    backgroundColor: '#3498db',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Add margin to separate boxes
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
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
    color: '#3498db',
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
    color: '#333',
  },
  sectionDetails: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  detailsText: {
    color: '#555',
    fontSize: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row', // Use flexDirection 'row' to arrange the sidebar and content side by side
    backgroundColor: '#ecf0f1',
  },
  sidebar: {
    width: 1000000, // Set a fixed width for the sidebar
    backgroundColor: 'black', // Change sidebar background color
    padding: 10,
    paddingTop: 20, // Add padding at the top for the header
  },
  sidebarHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sidebarItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  sidebarItemText: {
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  sidebarLogo: {
    position: 'absolute',
    top: 15,
    right: 15, // Adjust the position to the right
    zIndex: 1,
    color: '#fff', // Add text color
    fontSize: 24, // Add font size
  },
  sidebarLogoText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default App;