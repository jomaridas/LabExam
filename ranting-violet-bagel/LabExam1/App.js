import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const resumeData = {
    imageUrl: require('./assets/Joms.png'),
    name: 'Jomari Abubo',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'Sampalukan Elementary School',
      elementaryYear: '2007',
      highSchool: 'Kasarinlan High School',
      highSchoolYear: '2010',
      college: 'Global Reciprocal College',
      collegeYear: '2024',
    },

    about: `Eager to secure a challenging position within a reputable organiztion leverging my drive for continues learning and passion for skill development. My goal is to contribute effective while expanding my knowledge and capabilities, enhancing both personal growth and the organization's success.`,

    projects: {
      projectName: 'Travel',
      imageSrc: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/711826fe8e0717353f3edb4c8f5afa56',
      link: 'https://www.canva.com/design/DAF9DmLSEQc/B-0f6Td5I9Ts2pGju4tq2w/edit',
      description: 'Absolutely! Could you provide me with some details about your travel advertisement? Things like the destination, the target audience, unique features of the trip, or any specific highlights you like to emphasize would be helpful..',
    },

    projects1: {
      projectName1: 'Tour',
      imageSrc1: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7374d2829c33027facdad2b8c0188869',
      link1: 'https://www.canva.com/design/DAF87b-XUPw/So6M1CTX_E65VnasWCkeVw/edit',
      description1: 'Absolutely, Id be happy to help! Could you provide some details about the destination, the target audience, and any specific features or highlights youd like to emphasize in the advertisement?.',
    },

    contact: {
      mobile: '0965-951-6196', // Replace with your actual mobile phone number
      email: 'jomariabubo.grc@gmail.com', // Replace with your actual email address
    },
  };

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'projects'; // Move to the 'projects' section
        case 'projects':
          return 'projects1'; // Move to 'projects1'
        case 'projects1':
          return 'contact'; // Move to the 'contact' section
        case 'contact':
          return 'name'; // Loop back to the start
        default:
          return 'name';
      }
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <>
              <Image source={resumeData.imageUrl} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.header}>{resumeData.name}</Text>
                <Text style={styles.info}>{resumeData.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>Education:</Text>
              <Text style={styles.projectTitle}>
                {'\n'}College:
                {'\n'}
              </Text>
              <Text style={styles.info1}>{resumeData.education.college}</Text>
              {' | '}
              {resumeData.education.collegeYear}

              <Text style={styles.projectTitle}>
                {'\n'}High School:
                {'\n'}
              </Text>
              <Text style={styles.info1}>
                {resumeData.education.highSchool}
              </Text>
              {' | '}
              {resumeData.education.highSchoolYear}

              <Text style={styles.projectTitle}>
                {'\n'}Elementary:
                {'\n'}
              </Text>
              <Text style={styles.info1}>
                {resumeData.education.elementary}
              </Text>
              {' | '}
              {resumeData.education.elementaryYear}
            </View>
          )}

          {currentSection === 'about' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>About me:{'\n'}</Text>
              <Text style={styles.about}>{resumeData.about}</Text>
            </View>
          )}

          {currentSection === 'projects' && (
            <View style={styles.projectsContainer}>
              <Text style={styles.header1}>Projects:</Text>
              <Text style={styles.projectTitle}>
                {resumeData.projects.projectName}
              </Text>
              <Image
                source={{ uri: resumeData.projects.imageSrc }}
                style={styles.projectImage}
              />
              <Text style={styles.projectLink}>
              {resumeData.projects.link}</Text>
              <Text style={styles.projectDescription}>
                {' '}
                {resumeData.projects.description}
              </Text>
            </View>
          )}

          {currentSection === 'projects1' && (
            <View style={styles.projectsContainer}>
              <Text style={styles.header1}>Projects:</Text>
              <Text style={styles.projectTitle}>
                {resumeData.projects1.projectName1}
              </Text>
              <Image
                source={{ uri: resumeData.projects1.imageSrc1 }}
                style={styles.projectImage}
              />
              <Text style={styles.projectLink}>
                {resumeData.projects1.link1}
              </Text>
              <Text style={styles.projectDescription}>
                {resumeData.projects1.description1}
              </Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View style={styles.contactContainer}>
              <Text style={styles.header1}>Contact Me:{'\n'}</Text>
              <Text style={styles.info1}>
                {'\n'}Mobile: {resumeData.contact.mobile}
                {'\n'}Email: {resumeData.contact.email}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F4D03F'
  },
  contentContainer: {
    alignItems: 'center',
    maxWidth: 600,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  textContainer: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  header1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  info: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  info1: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  about: {
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  projectsContainer: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  projectImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: 'center',
  },
  projectLink: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  projectDescription: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'justify',
    textAlign: 'center',
  },

});

export default App;