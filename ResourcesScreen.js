import React, { useState } from 'react';
import { ScrollView, Text, Linking, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const resources = [
    {
        title: "Alchoholic Anonymous",
        links:[
            {text: 'AA Faq', url:"https://www.samhsa.gov/find-help/helplines/national-helpline"},
            {text: 'Why Go to AA?', url:"https://boardwalkrecoverycenter.com/what-is-the-purpose-and-goal-of-aa/#:~:text=While%20it%20is%20well%2Dknown,addiction%2C%20A.A.%20is%20not%20exclusive."},
            {text: 'Find AA Near You', url:"https://www.aa.org/find-aa"}
        ],
    },
    {
        title: "Safety Tips When Going Out!",
        links:[
            {text: 'Safety Lines in Your Area', url:"https://www.safety.pitt.edu/police"},
            {text: 'Top Three Taxi Driving Services', url:"https://www.safety.pitt.edu/police"},
            {text: 'Top Three Taxi Driving Services', url:"https://www.safety.pitt.edu/police"}
        ],
    },
    {
        title: "Blood Alcohol Concentration FAQ",
        links:[
            {text: 'Common drinks and their BAC', url:"https://www.safety.pitt.edu/police"},
            {text: 'How to Track Your BAC', url:"https://www.safety.pitt.edu/police"}
        ],
    },
    {
        title: "What To Do If: ",
        links:[
            {text: 'Your drink was spiked', url:"https://www.safety.pitt.edu/police"},
            {text: 'You Think Youre an Alcoholic', url:"https://www.safety.pitt.edu/police"}
        ],
    },
];

const ResourcesScreen = () => {
    const [expandedSections, setExpandedSections] = useState([]); 

    const toggleSection = (index) => {
        setExpandedSections((prevExpanded) => 
            prevExpanded.includes(index) 
                ? prevExpanded.filter((i) => i !== index) // Close if it's already open
                : [...prevExpanded, index] // Otherwise, add it to the expanded list
        );
    };

    return (
        <ScrollView style = {styles.container}> 
            <Text style={styles.header}>Helpful Resources</Text> 
            {resources.map((section, index) => (
                <List.Accordion
                    key={index}
                    title={section.title}
                    expanded={expandedSections.includes(index)}
                    onPress={() => toggleSection(index)}
                >
                    {section.links.map((link, linkIndex)=> (
                        <List.Item
                            key={linkIndex}
                            title = {link.text}
                            onPress={() => Linking.openURL(link.url)}
                        />
                    ))}
                </List.Accordion>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create ({
    container:{
        flex:1,
        padding: 16,
    },
    header:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default ResourcesScreen;

