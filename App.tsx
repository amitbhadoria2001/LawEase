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

{
  title: "PUNISHMENTS",
  sections: [
    {
      sectionNumber: 53,
      sectionTitle: "Punishment",
      details: "The punishments to which offenders are liable under the provisions of this Code are— (a) Death; (b) Imprisonment for life; (c) [Omitted by the Indian Penal Code (Amendment) Act, 1949]; (d) Imprisonment, which is of two descriptions, namely:— (1) Rigorous, that is, with hard labor; (2) Simple; (e) [Omitted by the Repealing Act, 1870]; (f) Forfeiture of property; (g) Fine."
    },
    {
      sectionNumber: 54,
      sectionTitle: "Commuted sentences",
      details: "The following kinds of punishment may be inflicted by a Court Martial or in execution of a sentence of Court Martial, that is to say,— (a) Death; (b) Transportation; (c) Imprisonment; (d) Fine; (e) Forfeiture of service for specified periods."
    },
    {
      sectionNumber: 55,
      sectionTitle: "Commuted sentence",
      details: "When any person is sentenced to transportation, the Court may, if it think fit, adjudge that, instead of undergoing transportation, the offender shall be liable to be imprisoned for any term not exceeding the term of such transportation."
    },
    {
      sectionNumber: 56,
      sectionTitle: "Commuted sentence",
      details: "When a sentence of whipping is commuted, the Court may direct that the offender shall be imprisoned for any term not exceeding the term for which he might have been sentenced to imprisonment."
    },
    {
      sectionNumber: 57,
      sectionTitle: "Fractions of terms of punishment",
      details: "In calculating fractions of terms of punishment, imprisonment for life shall be reckoned as equivalent to imprisonment for twenty years."
    },
    {
      sectionNumber: 58,
      sectionTitle: "Offenders sentenced to transportation",
      details: "All persons sentenced under this Code to transportation for life, or for any shorter term, and all persons sentenced under any other law to transportation for any term, are liable, if at large, to be apprehended and detained in safe custody, wherever found, by any police officer, without warrant or other authority than this section."
    },
    {
      sectionNumber: 59,
      sectionTitle: "Offenders sentenced to transportation, how dealt with until transported",
      details: "Every person sentenced under this Code to transportation for any term, and every person sentenced under any other law to transportation for any term to which this Code is made applicable by section 71 of the Indian Penal Code (45 of 1860), shall, until he is transported, be dealt with in the same manner as if he were sentenced to rigorous imprisonment, and every rule made under the Prisons Act, 1894 (9 of 1894), for the regulation of rigorous imprisonment shall, so far as is consistent with such imprisonment, be deemed to apply to the imprisonment of such person."
    },
    {
      sectionNumber: 60,
      sectionTitle: "Sentence of Europeans and Americans to penal servitude.",
      details: "When any person liable, by any law other than this Code, to be tried for an offence committed beyond [India] is sentenced to penal servitude, the Court passing the sentence may direct that the offender shall be imprisoned in any place in [India] in which persons found guilty of offences committed within [India] may be lawfully imprisoned."
    }
  ]
},
    
 
{
  title: "GENERAL EXCEPTIONS",
  sections: [
    {
      sectionNumber: 76,
      sectionTitle: "Act done by a person bound, or by mistake of fact believing himself bound, by law.",
      details: "Nothing is an offence which is done by a person who is, or who by reason of a mistake of fact and not by reason of a mistake of law in good faith, believes himself to be, bound by law to do it."
    },
    {
      sectionNumber: 77,
      sectionTitle: "Act of Judge when acting judicially.",
      details: "Nothing is an offence which is done by a Judge when acting judicially in the exercise of any power which is, or which in good faith he believes to be, given to him by law."
    },
    {
      sectionNumber: 78,
      sectionTitle: "Act done pursuant to the judgment or order of Court.",
      details: "Nothing which is done in pursuance of, or which is warranted by the judgment or order of, a Court of justice, if done whilst such judgment or order remains in force, is an offence."
    },
    {
      sectionNumber: 79,
      sectionTitle: "Act done by a person justified, or by mistake of fact believing himself justified, by law.",
      details: "Nothing is an offence which is done by any person who is justified by law, or who by reason of a mistake of fact and not by reason of a mistake of law in good faith, believes himself to be justified by law, in doing it."
    },
    {
      sectionNumber: 80,
      sectionTitle: "Accident in doing a lawful act.",
      details: "Nothing is an offence which is done by accident or misfortune, and without any criminal intention or knowledge in the doing of a lawful act in a lawful manner by lawful means and with proper care and caution."
    },
    {
      sectionNumber: 81,
      sectionTitle: "Act likely to cause harm, but done without criminal intent, and to prevent other harm.",
      details: "Nothing is an offence merely by reason of its being done with the knowledge that it is likely to cause harm, if it be done without any criminal intention to cause harm, and in good faith for the purpose of preventing or avoiding other harm to person or property."
    },
    {
      sectionNumber: 82,
      sectionTitle: "Act of a child under seven years of age.",
      details: "Nothing is an offence which is done by a child under seven years of age."
    },
    {
      sectionNumber: 83,
      sectionTitle: "Act of a child above seven and under twelve of immature understanding.",
      details: "Nothing is an offence which is done by a child above seven years of age and under twelve, who has not attained sufficient maturity of understanding to judge of the nature and consequences of his conduct on that occasion."
    },
    {
      sectionNumber: 84,
      sectionTitle: "Act of a person of unsound mind.",
      details: "Nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that he is doing what is either wrong or contrary to law."
    },
    {
      sectionNumber: 85,
      sectionTitle: "Act of a person incapable of judgment by reason of intoxication caused against his will.",
      details: "Nothing is an offence which is done by a person who, at the time of doing it, is, by reason of intoxication, incapable of knowing the nature of the act, or that he is doing what is either wrong or contrary to law, provided that the thing which intoxicated him was administered to him without his knowledge or against his will."
    },
    {
      sectionNumber: 86,
      sectionTitle: "Offence requiring a particular intent or knowledge committed by one who is intoxicated.",
      details: "In cases where an act done is not an offence unless done with a particular knowledge or intent, a person who does the act in a state of intoxication shall be liable to be dealt with as if he had the same knowledge as he would have had if he had not been intoxicated, unless the thing which intoxicated him was administered to him without his knowledge or against his will."
    },
    {
      sectionNumber: 87,
      sectionTitle: "Act not intended and not known to be likely to cause death or grievous hurt, done by consent.",
      details: "Nothing which is not intended to cause death or grievous hurt, and which is not known by the doer to be likely to cause death or grievous hurt, is an offence by reason of any harm which it may cause, or be intended by the doer to cause, to any person, above eighteen years of age, who has given consent, whether express or implied, to suffer that harm; or by reason of any harm which it may be known by the doer to be likely to cause to any such person who has consented to take the risk of that harm."
    },
    {
      sectionNumber: 88,
      sectionTitle: "Act not intended to cause death, done by consent in good faith for person's benefit.",
      details: "Nothing which is not intended to cause death is an offence by reason of any harm which it may cause, or be intended by the doer to cause, or be known by the doer to be likely to cause, to any person for whose benefit it is done in good faith, and who has given a consent, whether express or implied, to suffer that harm, or to take the risk of that harm."
    },
    {
      sectionNumber: 89,
      sectionTitle: "Act done in good faith for benefit of child or insane person, by or by consent of guardian.",
      details: "Nothing which is done in good faith for the benefit of a person under twelve years of age, or of unsound mind, by or by consent, either express or implied, of the guardian or other person having lawful charge of that person, is an offence by any harm which it may cause, or be intended by the doer to cause or be known by the doer to be likely to cause to that person."
    },
    {
      sectionNumber: 90,
      sectionTitle: "Consent known to be given under fear or misconception.",
      details: "A consent is not such a consent as it intended by any section of this Code, if the consent is given by a person under fear of injury, or under a misconception of fact, and if the person doing the act knows, or has reason to believe, that the consent was given in consequence of such fear or misconception; or Consent of insane person: if the consent is given by a person who, from unsoundness of mind, or intoxication, is unable to understand the nature and consequence of that to which he gives his consent."
    },
    {
      sectionNumber: 91,
      sectionTitle: "Exclusion of acts which are offences independently of harm caused.",
      details: "Nothing is an offence by reason of any harm which it may cause to a person for whose benefit it is done in good faith, even without that person’s consent, if the circumstances are such that it is impossible for that person to signify consent, or if that person is incapable of giving consent, and has no guardian or other person in lawful charge of him from whom it is possible to obtain consent in time for the thing to be done with benefit."
    },
    {
      sectionNumber: 92,
      sectionTitle: "Act done in good faith for benefit of a person without consent.",
      details: "Nothing is an offence by reason of any harm which it may cause to a person for whose benefit it is done in good faith, even without that person’s consent, if the circumstances are such that it is impossible for that person to signify consent, or if that person is incapable of giving consent, and has no guardian or other person in lawful charge of him from whom it is possible to obtain consent in time for the thing to be done with benefit."
    },
    {
      sectionNumber: 93,
      sectionTitle: "Communication made in good faith.",
      details: "Nothing is an offence by reason of any harm which it may cause to a person for whose benefit it is done in good faith, even without that person’s consent, if the circumstances are such that it is impossible for that person to signify consent, or if that person is incapable of giving consent, and has no guardian or other person in lawful charge of him from whom it is possible to obtain consent in time for the thing to be done with benefit."
    },
    {
      sectionNumber: 94,
      sectionTitle: "Act to which a person is compelled by threats.",
      details: "Nothing is an offence by reason of any harm which it may cause to a person for whose benefit it is done in good faith, even without that person’s consent, if the circumstances are such that it is impossible for that person to signify consent, or if that person is incapable of giving consent, and has no guardian or other person in lawful charge of him from whom it is possible to obtain consent in time for the thing to be done with benefit."
    },
    {
      sectionNumber: 95,
      sectionTitle: "Act causing slight harm.",
      details: "Nothing is an offence by reason of any harm which it may cause to a person for whose benefit it is done in good faith, even without that person’s consent, if the circumstances are such that it is impossible for that person to signify consent, or if that person is incapable of giving consent, and has no guardian or other person in lawful charge of him from whom it is possible to obtain consent in time for the thing to be done with benefit."
    }
  ]
},



 

{
  title: "THE RIGHT OF PRIVATE DEFENSE",
  ipc: "IPC 15",
  sections: [
    {
      sectionNumber: 96,
      sectionTitle: "Things done in private defense",
      details: "Nothing is an offence which is done in the exercise of the right of private defense."
    },
    {
      sectionNumber: 97,
      sectionTitle: "Right of private defense of the body and of property",
      details: "Every person has a right, subject to the restrictions contained in section 99, to defend: (1) his own body, and the body of any other person, against any offence affecting the human body; (2) the property, whether movable or immovable, of himself or of any other person, against any act which is an offence falling under the definition of theft, robbery, mischief or criminal trespass, or which is an attempt to commit theft, robbery, mischief or criminal trespass."
    },
    {
      sectionNumber: 98,
      sectionTitle: "Right of private defense against the act of a person of unsound mind, etc.",
      details: "When an act, which would otherwise be a certain offence, is not that offence, by reason of the youth, the want of maturity of understanding, the unsoundness of mind or the intoxication of the person doing that act, or by reason of any misconception on the part of that person, every person has the same right of private defense against that act which he would have if the act were that offence."
    },
    {
      sectionNumber: 99,
      sectionTitle: "Acts against which there is no right of private defense",
      details: "There is no right of private defense against an act which does not reasonably cause the apprehension of death or of grievous hurt, if done, or attempted to be done, by a public servant acting in good faith under colour of his office, though that act may not be strictly justifiable by law."
    }
  ]
},

{
  title: "ABETMENT",
  ipc: "IPC 14",
  sections: [
    {
      sectionNumber: 107,
      sectionTitle: "Abetment of a thing",
      details: "A person abets the doing of a thing, who: First: Instigates any person to do that thing; or Secondly: Engages with one or more other person or persons in any conspiracy for the doing of that thing, if an act or illegal omission takes place in pursuance of that conspiracy, and in order to the doing of that thing; or Thirdly: Intentionally aids, by any act or illegal omission, the doing of that thing."
    },
    {
      sectionNumber: 108,
      sectionTitle: "Abettor when liable to punishment for act abetted and for act done",
      details: "A person abets an offence within the meaning of this Code who, in India, abets the commission of any act without and beyond India which would constitute an offence if committed in India."
    },
    {
      sectionNumber: 109,
      sectionTitle: "Punishment of abetment if the act abetted is committed in consequence and where no express provision is made for its punishment",
      details: "Whoever abets any offence shall, if the act abetted is committed in consequence of the abetment, and no express provision is made by this Code for the punishment of such abetment, be punished with the punishment provided for the offence."
    }
  ]
},
    

{
  title: "CRIMINAL CONSPIRACY",
  ipc: "IPC 13",
  sections: [
    {
      sectionNumber: 120A,
      sectionTitle: "Definition of criminal conspiracy",
      details: "When two or more persons agree to do, or cause to be done: (1) an illegal act, or (2) an act which is not illegal by illegal means, such an agreement is designated a criminal conspiracy: Provided that no agreement except an agreement to commit an offence shall amount to a criminal conspiracy unless some act besides the agreement is done by one or more parties to such agreement in pursuance thereof."
    },
    {
      sectionNumber: 120B,
      sectionTitle: "Punishment of criminal conspiracy",
      details: "Whoever is a party to a criminal conspiracy to commit an offence punishable with death, imprisonment for life or rigorous imprisonment for a term of two years or upwards, shall, where no express provision is made in this Code for the punishment of such a conspiracy, be punished in the same manner as if he had abetted such offence."
    }
  ]
},
  
{
  title: "OFFENCES AGAINST THE STATE",
  ipc: "IPC 12",
  sections: [
    {
      sectionNumber: 121,
      sectionTitle: "Waging, or attempting to wage war, or abetting waging of war, against the Government of India",
      details: "Whoever wages war against the Government of India, or attempts to wage such war, or abets the waging of such war, shall be punished with death, or imprisonment for life and shall also be liable to fine."
    },
    {
      sectionNumber: 121A,
      sectionTitle: "Conspiracy to commit offences punishable by section 121",
      details: "Whoever within or without India conspires to commit any of the offenses punishable by section 121, or conspires to overawe, by means of criminal force or the show of criminal force, the Central Government or any State Government, shall be punished with imprisonment for life, or with imprisonment of either description which may extend to ten years, and shall also be liable to fine."
    },
    {
      sectionNumber: 122,
      sectionTitle: "Collecting arms, etc., with intention of waging war against the Government of India",
      details: "Whoever collects men, arms or ammunition or otherwise prepares to wage war with the intention of either waging or being prepared to wage war against the Government of India, shall be punished with imprisonment for life, or imprisonment of either description which may extend to ten years, and shall also be liable to fine."
    },
    {
      sectionNumber: 123,
      sectionTitle: "Concealing with intent to facilitate design to wage war",
      details: "Whoever by any act, or by any illegal omission, conceals the existence of a design to wage war against the Government of India, intending by such concealment to facilitate, or knowing it to be likely that such concealment will facilitate, the waging of such war, shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."
    }
  ]
},

   
 {
  title: "OFFENCES BY OR RELATING TO PUBLIC SERVANTS",
  ipc: "IPC 9",
  sections: [
    {
      sectionNumber: 166,
      sectionTitle: "Public servant disobeying law, with intent to cause injury to any person",
      details: "Whoever, being a public servant, knowingly disobeys any direction of the law as to the way in which he is to conduct himself as such public servant, intending to cause, or knowing it to be likely that he will, by such disobedience, cause injury to any person, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both."
    },
    {
      sectionNumber: 167,
      sectionTitle: "Public servant framing an incorrect document with intent to cause injury",
      details: "Whoever, being a public servant, and being, as such public servant, charged with the preparation or translation of any document or electronic record, frames or translates that document or electronic record in a manner which he knows or believes to be incorrect, intending thereby to cause or knowing it to be likely that he may thereby cause injury to any person, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."
    },
    {
      sectionNumber: 168,
      sectionTitle: "Public servant unlawfully engaging in trade",
      details: "Whoever, being a public servant, and being legally bound as such public servant not to engage in trade, engages in trade, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both."
    }
  ]
}

{
  title: "OFFENCES BY OR RELATING TO PUBLIC SERVANTS",
  ipc: "IPC 9",
  sections: [
    {
      sectionNumber: 166,
      sectionTitle: "Public servant disobeying law, with intent to cause injury to any person",
      details: "Whoever, being a public servant, knowingly disobeys any direction of the law as to the way in which he is to conduct himself as such public servant, intending to cause, or knowing it to be likely that he will, by such disobedience, cause injury to any person, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both."
    },
    {
      sectionNumber: 167,
      sectionTitle: "Public servant framing an incorrect document with intent to cause injury",
      details: "Whoever, being a public servant, and being, as such public servant, charged with the preparation or translation of any document or electronic record, frames or translates that document or electronic record in a manner which he knows or believes to be incorrect, intending thereby to cause or knowing it to be likely that he may thereby cause injury to any person, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."
    },
    {
      sectionNumber: 168,
      sectionTitle: "Public servant unlawfully engaging in trade",
      details: "Whoever, being a public servant, and being legally bound as such public servant not to engage in trade, engages in trade, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both."
    }
  ]
},
    
 

    
    
{
  title: "OFFENCES RELATING TO ELECTIONS",
  ipc: "IPC 8",
  sections: [
    {
      sectionNumber: 171F,
      sectionTitle: "Undue influence or personation at an election",
      details: "Whoever at an election applies or threatens to apply any force or restraint, or inflicts or threatens to inflict any injury, damage, harm or loss, or in any manner practices intimidation upon or against any elector, candidate, chief election agent, election agent or any other person in order to induce or compel such elector, candidate, chief election agent, election agent or person to vote or refrain from voting, or vote or refrain from voting for any particular person, shall be punishable with imprisonment for a term which may extend to one year or with fine, or with both."
    },
    {
      sectionNumber: 171G,
      sectionTitle: "False statement in connection with an election",
      details: "Whoever with intent to affect the result of an election makes or publishes any false statement of fact in relation to the personal character or conduct of any candidate shall be punishable with fine."
    },
    {
      sectionNumber: 171H,
      sectionTitle: "Illegal payments in connection with an election",
      details: "Whoever without the general or special authority in writing of a candidate incurs or authorizes expenses on account of the holding of any public meeting, or upon any advertisement, circular or publication, or in any other way whatsoever for the purpose of promoting or procuring the election of such candidate, shall be punishable with fine."
    }
  ]
},


{
  title: "CONTEMPTS OF THE LAWFUL AUTHORITY OF PUBLIC SERVANTS",
  ipc: "IPC 7",
  sections: [
    {
      sectionNumber: 172,
      sectionTitle: "Absconding to Evade Service of Summons or Other Proceeding",
      details: "Whoever absconds in order to evade the service of a summons, notice or order proceeding from any public servant legally competent, as such public servant, to issue such summons, notice or order, shall be punished with simple imprisonment for a term which may extend to one month, or with fine which may extend to five hundred rupees, or with both."
    },
    {
      sectionNumber: 173,
      sectionTitle: "Preventing Service of Summons or Other Proceeding, or Preventing Publication Thereof",
      details: "Whoever, in order to cause the postponement or prevention of the service of any summons, notice or order proceeding from any public servant legally competent, as such public servant, to issue such summons, notice or order, or in order to cause the postponement or prevention of the publication of any proclamation or notice issued by any public servant legally competent, as such public servant, to issue such proclamation or notice, removes or obliterates, or attempts to remove or obliterate, any copy of such summons, notice, order or proclamation, from any place where it is or has been set up, published or affixed, or attempts to prevent the setting up, publication or affixing thereof, shall be punished with simple imprisonment for a term which may extend to one month, or with fine which may extend to five hundred rupees, or with both."
    },
    {
      sectionNumber: 174,
      sectionTitle: "Non-attendance in obedience to an order from public servant",
      details: "Whoever, being legally bound to attend in person or by an agent at a certain place and time in obedience to a summons, notice, order or proclamation proceeding from any public servant legally competent, as such public servant, to issue the same, intentionally omits to attend at that place or time, or departs from the place where he is bound to attend before the time at which it is lawful for him to depart, shall be punished with simple imprisonment for a term which may extend to one month, or with fine which may extend to five hundred rupees, or with both."
    }
  ]
},

 

{
  title: "FALSE EVIDENCE AND OFFENCES AGAINST PUBLIC JUSTICE",
  ipc: "IPC 6",
  sections: [
    {
      sectionNumber: 191,
      sectionTitle: "Giving False Evidence",
      details: "Whoever, being legally bound by an oath or affirmation to state the truth, or being bound by law to make a declaration upon any subject, makes any statement which is false, and which he either knows or believes to be false or does not believe to be true, is said to give false evidence."
    },
    {
      sectionNumber: 192,
      sectionTitle: "Fabricating False Evidence",
      details: "Whoever causes any circumstance to exist or makes any false entry in any book or record, or electronic record or makes any document or electronic record containing a false statement, intending that such circumstance, false entry or false statement may appear in evidence in a judicial proceeding, or in a proceeding taken by law before a public servant as such, or before an arbitrator, and that such circumstance, false entry or false statement, so appearing in evidence, may cause any person who in such proceeding is to form an opinion upon the evidence, to entertain an erroneous opinion touching any point material to the result of such proceeding, is said “to fabricate false evidence”."
    },
    {
      sectionNumber: 193,
      sectionTitle: "Punishment for False Evidence",
      details: "Whoever intentionally gives false evidence in any stage of a judicial proceeding, or fabricates false evidence for the purpose of being used in any stage of a judicial proceeding, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine, and whoever intentionally gives or fabricates false evidence in any other case, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
    },
    {
      sectionNumber: 195,
      sectionTitle: "Giving or Fabricating False Evidence with Intent to Procure Conviction of Offence Punishable with Imprisonment for Life or Imprisonment",
      details: "Whoever gives or fabricates false evidence intending thereby to cause, or knowing it to be likely that he will thereby cause, any person to be convicted of an offence which is capital by the law for the time being in force in India, or, subject to the provisions of the Indian Penal Code (45 of 1860), of any offence punishable with transportation for life or imprisonment for a term of seven years or upwards, shall be punished as a person convicted of that offence would be liable to be punished."
    }
  ]
},
      


  
    
{
  title: "OFFENCES RELATING TO COIN AND GOVERNMENT STAMPS",
  ipc: "IPC 5",
  sections: [
    {
      sectionNumber: 230,
      sectionTitle: "Coin, Possession of, by Knowing It to be Forged and Intending to Use It as Genuine",
      details: "Whoever fraudulently or with intent that fraud may be committed, delivers to any other person as genuine, or attempts to induce any other person to receive as genuine, any counterfeit coin which he knows to be counterfeit, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
    },
    {
      sectionNumber: 231,
      sectionTitle: "Counterfeiting Coin",
      details: "Whoever counterfeits coin, intending that the coin shall pass as genuine, or be used or knowing it to be likely that the coin shall be passed as genuine, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
    },
    {
      sectionNumber: 233,
      sectionTitle: "Making or Selling Instrument for Counterfeiting Coin",
      details: "Whoever makes, or mends, or performs any part of the process of making or mending, or buys, sells or disposes of, any die or instrument, for the purpose of being used, or knowing or having reason to believe that it is intended to be used, for the purpose of counterfeiting coin, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
    },
    {
      sectionNumber: 234,
      sectionTitle: "Making or Selling Instrument for Counterfeiting Government Stamp",
      details: "Whoever makes, or mends, or performs any part of the process of making or mending, or buys, sells or disposes of, any die or instrument, for the purpose of being used, or knowing or having reason to believe that it is intended to be used, for the purpose of counterfeiting any stamp issued by Government for the purpose of revenue, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
    }
  ]
},



{
  title: "OFFENCES RELATING TO WEIGHTS AND MEASURES",
  ipc: "IPC 4",
  sections: [
    {
      sectionNumber: 264,
      sectionTitle: "Fraudulent Use of False Instrument for Weighing",
      details: "Whoever fraudulently uses any false weight or other false instrument of weight or any false balance or other false instrument of measure, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both."
    },
    {
      sectionNumber: 265,
      sectionTitle: "Possession of False Weight or Measure",
      details: "Whoever has in his possession any weight or measure or any instrument for weighing, or for measuring, falsely made or altered, and intended to be fraudulently used, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both."
    },
    {
      sectionNumber: 266,
      sectionTitle: "Making or Selling False Weight or Measure",
      details: "Whoever makes, sells or disposes of any instrument of weight or of measure, knowing or having reason to believe that such instrument is false, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both."
    }
  ]
}

    

    

 
{
  title: "OFFENCES AFFECTING THE PUBLIC HEALTH, SAFETY, CONVENIENCE, DECENCY, AND MORALS",
  ipc: "IPC 3",
  sections: [
    {
      sectionNumber: 268,
      sectionTitle: "Public Nuisance",
      details: "A person is guilty of a public nuisance who does any act or is guilty of an illegal omission which causes any common injury, danger or annoyance to the public or to the people in general who dwell or occupy property in the vicinity, or which must necessarily cause injury, obstruction, danger or annoyance to persons who may have occasion to use any public right."
    },
    {
      sectionNumber: 269,
      sectionTitle: "Negligent Act Likely to Spread Infection of Disease Dangerous to Life",
      details: "Whoever unlawfully or negligently does any act which is, and which he knows or has reason to believe to be, likely to spread the infection of any disease dangerous to life, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both."
    },
    {
      sectionNumber: 270,
      sectionTitle: "Malignant Act Likely to Spread Infection of Disease Dangerous to Life",
      details: "Whoever malignantly does any act which is, and which he knows or has reason to believe to be, likely to spread the infection of any disease dangerous to life, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
    },
    {
      sectionNumber: 271,
      sectionTitle: "Disobedience to Quarantine Rule",
      details: "Whoever knowingly disobeys any rule made and promulgated by the government for putting any vessel into a state of quarantine, or for regulating the intercourse of vessels in quarantine with the shore or with other vessels, or for regulating the intercourse between places where an infectious disease prevails and other places, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both."
    },
    {
      sectionNumber: 272,
      sectionTitle: "Adulteration of Food or Drink Intended for Sale",
      details: "Whoever adulterates any article of food or drink, so as to make such article noxious as food or drink, intending to sell such article as food or drink, or knowing it to be likely that the same will be sold as food or drink, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both."
    }
  ]
},


  


  {
  title : "OFFENCESRELATING TO RELIGION",
  ipc : "IPC 2",
  sections : [
    {
      sectionNumber : 295A,
      sectionTitle : "Deliberate and Malicious Acts Intended to Outrage Religious Feelings",
      details : "Whoever, with deliberate and malicious intention of outraging the religious feelings of any class of citizens of India, by words, either spoken or written, or by signs or by visible representations or otherwise, insults or attempts to insult the religion or the religious beliefs of that class, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."
    },
    {
      sectionNumber: 296,
      sectionTitle: "Disturbing Religious Assembly",
      details: "Whoever voluntarily causes disturbance to any assembly lawfully engaged in the performance of religious worship, or religious ceremonies, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both."
    },
    {
      sectionNumber: 297,
      sectionTitle: "Trespassing on Burial Places, etc.",
      details: "Whoever, with the intention of wounding the feelings of any person, or of insulting the religion of any person, or with the knowledge that the feelings of any person are likely to be wounded, or that the religion of any person is likely to be insulted thereby, commits any trespass in any place of worship or on any place of sepulture, or any place set apart for the performance of funeral rites, or as a depository for the remains of the dead, or offers any indignity to any human corpse, or causes disturbance to any person assembled for the performance of funeral ceremonies, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both."
    }
  ]
},



   {
  title: "OFFENCES AFFECTINGTHE HUMAN BODY",
  ipc: "IPC 1",
  sections: [
    {
      sectionNumber: 299,
      sectionTitle: "Culpable Homicide",
      details: "Culpable Homicide is the causing of death by an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death."
    },
    {
      sectionNumber: 300,
      sectionTitle: "Murder",
      details: "Murder is the unlawful killing of another person with malice aforethought."
    },
    {
      sectionNumber: 304,
      sectionTitle: "Punishment for Culpable Homicide not amounting to Murder",
      details: "This section prescribes punishment for culpable homicide not amounting to murder. It provides different degrees of punishment based on the nature of the act."
    },
    {
      sectionNumber: 307,
      sectionTitle: "Attempt to Murder",
      details: "This section deals with attempts to commit murder. It penalizes individuals who try to commit murder but fail to do so."
    },
    {
      sectionNumber: 323,
      sectionTitle: "Punishment for Voluntarily Causing Hurt",
      details: "This section deals with voluntarily causing hurt to another person. It prescribes punishment for such acts."
    },
    {
      sectionNumber: 324,
      sectionTitle: "Voluntarily Causing Hurt by Dangerous Weapons or Means",
      details: "This section deals with voluntarily causing hurt using dangerous weapons or means. It provides for enhanced punishment in such cases."
    },
    {
      sectionNumber: 325,
      sectionTitle: "Punishment for Voluntarily Causing Grievous Hurt",
      details: "This section deals with voluntarily causing grievous hurt to another person. It prescribes punishment for such acts."
    },
    {
      sectionNumber: 326,
      sectionTitle: "Voluntarily Causing Grievous Hurt by Dangerous Weapons or Means",
      details: "This section deals with voluntarily causing grievous hurt using dangerous weapons or means. It provides for enhanced punishment in such cases."
    }
  ]
},


    {
     title: "Commutation of sentence of imprisonment for life",
     sections: [
    {
       sectionNumber: null,
       sectionTitle:  Section 432 : Power to suspend or remit sentences.",
       details : "This section grants the authority to suspend or remit sentences, including imprisonment for life, as provided under the Code of Criminal Procedure, 1973."
    },
    {
       sectionNumber: null,
       sectionTitle : "Section 433: Power to commute sentences.",
       details : "This section provides the power to commute sentences, including imprisonment for life, as provided under the Code of Criminal Procedure, 1973."
    },
    {
       sectionNumber : null,
       sectionTitle : "Section 434: Procedure for suspension, remission, or commutation of sentences.",
       details : "This section outlines the procedure for suspension, remission, or commutation of sentences, including imprisonment for life, as provided under the Code of Criminal Procedure, 1973."
    },
    {
       sectionNumber : null,
       sectionTitle : "Section 435: Consultation with the government by the appropriate authority before exercising its powers.",
       details : "This section mandates consultation with the government by the appropriate authority before exercising its powers related to suspension, remission, or commutation of sentences, including imprisonment for life, as provided under the Code of Criminal Procedure, 1973."
    }
  ],
},
      {
  title: "Offenses Against Property",
  ipc: "IPC 2",
  sections: [
    {
      sectionNumber: 378,
      sectionTitle: "Theft",
      details: "Theft is defined as dishonestly taking movable property out of the possession of any person without that person's consent."
    },
    {
      sectionNumber: 379,
      sectionTitle: "Punishment for Theft",
      details: "Punishment for theft includes imprisonment and/or a fine."
    },
    {
      sectionNumber: 380,
      sectionTitle: "Theft in dwelling house, etc.",
      details: "This section deals with theft committed in a dwelling house, building, tent, or vessel used as a human dwelling, and prescribes a higher punishment."
    },
    {
      sectionNumber: 381,
      sectionTitle: "Theft by clerk or servant of property in possession of master",
      details: "Deals with theft committed by a clerk or servant of property in the possession of their master."
    },
    {
      sectionNumber: 382,
      sectionTitle: "Theft after preparation made for causing death, hurt, or restraint in order to the committing of the theft",
      details: "This section deals with theft committed after preparation made for causing death, hurt, or restraint to facilitate the theft."
    },
    {
      sectionNumber: 383,
      sectionTitle: "Extortion",
      details: "Extortion involves intentionally putting a person in fear of any injury to that person or another, in order to commit extortion."
    },
    {
      sectionNumber: 384,
      sectionTitle: "Punishment for Extortion",
      details: "Punishment for extortion includes imprisonment and/or a fine."
    },
    {
      sectionNumber: 385,
      sectionTitle: "Putting person in fear of injury in order to commit extortion",
      details: "This section deals with putting a person in fear of injury in order to commit extortion."
    },
    {
      sectionNumber: 386,
      sectionTitle: "Extortion by putting a person in fear of death or grievous hurt",
      details: "Deals with extortion by putting a person in fear of death or grievous hurt."
    },
    {
      sectionNumber: 387,
      sectionTitle: "Putting person in fear of death or of grievous hurt, in order to commit extortion",
      details: "This section deals with putting a person in fear of death or grievous hurt in order to commit extortion."
    }
  ]
},

     {
   title: "Criminal Breach of Contracts of Service",
   ipc: "IPC 4",
   sections: [
    {
       sectionNumber: 405,
       sectionTitle: "Section 405 IPC - Criminal Breach of Trust",
       details: "This section deals with the offense of criminal breach of trust. It applies when a person who is entrusted with property or has control over it dishonestly misappropriates or converts it to their own use."
    },
    {
       sectionNumber: 406,
       sectionTitle: "Section 406 IPC - Punishment for Criminal Breach of Trust",
       details: "Provides punishment for criminal breach of trust, which includes imprisonment and/or a fine."
    },
    {
       sectionNumber: 407,
       sectionTitle: "Section 407 IPC - Criminal Breach of Trust by Carrier, etc.",
       details: "This section deals specifically with criminal breach of trust by carriers, warehousemen, or wharfingers."
    },
    {
       sectionNumber: 408,
       sectionTitle: "Section 408 IPC - Criminal Breach of Trust by Clerk or Servant",
       details: "Section 408 deals with criminal breach of trust by a clerk or servant, i.e., by someone who is employed to perform specific duties."
    },
    {
       sectionNumber: 409,
       sectionTitle: "Section 409 IPC - Criminal Breach of Trust by Public Servant, or by Banker, Merchant, or Agent",
       details: "This section deals with criminal breach of trust by public servants or by bankers, merchants, or agents."
    },
    {
       sectionNumber: 415,
       sectionTitle: "Section 415 IPC - Cheating",
       details: "This section defines cheating as deceiving another person either by making a false representation or by any other dishonest act, and thereby inducing that person to deliver any property."
    },
    {
       sectionNumber: 416,
       sectionTitle: "Section 416 IPC - Cheating by personation",
       details: "Deals with cheating by pretending to be someone else, with the intent to deceive."
    },
    {
       sectionNumber: 420,
       sectionTitle: "Section 420 IPC - Cheating and Dishonestly Inducing Delivery of Property",
       details: "Section 420 deals with the offense of cheating. It applies when a person cheats another person by deceiving them or inducing them to deliver property."
    }
  ]
},


  {
   title: "Offenses Relating to Documents and to Property Marks",
   ipc: "IPC 3",
   sections: [
    {
       sectionNumber: 463,
       sectionTitle: "Forgery",
       details: "Forgery involves making a false document or electronic record with the intent to cause damage or injury to the public or any person."
    },
    {
       sectionNumber: 464,
       sectionTitle: "Making a false document",
       details: "Making a false document with intent to cause damage or injury to the public or any person is punishable under this section."
    },
    {
       sectionNumber: 465,
       sectionTitle: "Punishment for forgery",
       details: "Punishment for forgery includes imprisonment and/or a fine."
    },
    {
      sectionNumber: 466,
      sectionTitle : "Forgery of record of court or of public register, etc.",
      details : "Forgery of a record of a court or a public register, etc., is punishable under this section."
    },
    {
       sectionNumber: 467,
       sectionTitle: "Forgery of valuable security, will, etc.",
       details: "Forgery of a valuable security, will, etc., is punishable under this section."
    },
    {
       sectionNumber: 468,
       sectionTitle: "Forgery for purpose of cheating",
       details: "Forgery for the purpose of cheating is punishable under this section."
    },
    {
       sectionNumber: 469,
       sectionTitle: "Forgery for purpose of harming reputation",
       details: "Forgery for the purpose of harming reputation is punishable under this section."
    },
    {
       sectionNumber: 470,
       sectionTitle: "Forgery of a document for the purpose of cheating",
       details: "Forgery of a document with the intent to use it for cheating is punishable under this section."
    },
    {
       sectionNumber: 471,
       sectionTitle: "Using as genuine a forged document or electronic record",
       details: "Using as genuine a forged document or electronic record is punishable under this section."
    },
    {
       sectionNumber: 472,
       sectionTitle: "Making or possessing counterfeit seal, etc., with intent to commit forgery punishable under section 467",
       details: "Making or possessing a counterfeit seal, etc., with the intent to commit forgery punishable under section 467 is punishable under this section."
    }
  ]
},
   
     
   {
   title: "Offenses Relating to Marriage",
   ipc : "IPC 5",
   sections : [
    {
       sectionNumber : 493,
       sectionTitle : "Cohabitation caused by a man deceitfully inducing a belief of lawful marriage",
       details : "This section deals with the offense of deceitfully inducing a belief of lawful marriage and causing cohabitation."
    },
    {
       sectionNumber : 494,
       sectionTitle : "Marrying again during lifetime of husband or wife",
       details": "Marrying again during the lifetime of a spouse is an offense under this section."
    },
    {
       sectionNumber: 495,
       sectionTitle : "Same offense with concealment of former marriage from person with whom subsequent marriage is contracted",
       details : "Concealing the existence of a former marriage from a person with whom a subsequent marriage is contracted constitutes an offense under this section."
    },
    {
       sectionNumber : 496,
       sectionTitle : "Marriage ceremony fraudulently gone through without lawful marriage",
       details : "Fraudulently going through a marriage ceremony without a lawful marriage constitutes an offense under this section."
    },
    {
       sectionNumber: 497,
       sectionTitle : "Adultery",
       details": "Adultery is defined as voluntary sexual intercourse between a married person and someone who is not their spouse."
    },
    {
       sectionNumber: 498,
       sectionTitle: "Enticing or taking away or detaining with criminal intent a married woman",
       details : "This section deals with enticing, taking away, or detaining a married woman with criminal intent."
    },
    {
       sectionNumber : 499,
       sectionTitle : "Defamation",
       details : "Defamation involves making false imputations concerning a person's chastity, whether they are alive or dead."
    }
  ]
},
      {
   title : "Cruelty by Husband or Relatives of Husband",
   ipc : "IPC 6",
   sections : [
    {
       sectionNumber : 498A,
       sectionTitle : "498A. Husband or relative of husband of a woman subjecting her to cruelty",
       details : "This section deals with the offense of cruelty by the husband or relatives of the husband towards a woman. Cruelty includes both physical and mental harassment."
    }
  ]
},
      {
   title : "Defamation",
   ipc : "IPC 7",
   sections : [
    {
       sectionNumber : 499,
       sectionTitle : "Section 499 IPC - Defamation",
       details : "Defamation involves making false imputations concerning a person's chastity, whether they are alive or dead."
    },
    {
       sectionNumber": 500,
       sectionTitle": "Section 500 IPC - Punishment for Defamation",
       details": "Punishment for defamation includes imprisonment and/or a fine."
    }
  ]
},

      {
  title : "Criminal Intimidation, Insult, and Annoyance",
  ipc : "IPC 8",
  sections : [
    {
      sectionNumber : 503,
      sectionTitle : "Section 503 IPC - Criminal Intimidation",
      details : "Criminal intimidation involves threatening another person with injury to their person, property, or reputation, with the intent to cause alarm to that person."
    },
    {
      sectionNumber : 504,
      sectionTitle :  "Section 504 IPC - Intentional insult with intent to provoke breach of the peace",
      details : "Intentional insult with intent to provoke a breach of the peace is punishable under this section."
    },
    {
      sectionNumber: 506,
      sectionTitle: "Section 506 IPC - Punishment for criminal intimidation",
      details: "Punishment for criminal intimidation includes imprisonment and/or a fine."
    }
  ]
},
      {
  title : "Attempts to Commit Offenses",
  ipc : "IPC 9",
  sections : [
    {
      sectionNumber: 511,
      sectionTitle: "Section 511 IPC - Punishment for Attempt to Commit Offenses",
      details: "This section deals with punishment for attempts to commit offenses punishable with imprisonment and/or fine, unless otherwise provided."
    }
  ]
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
