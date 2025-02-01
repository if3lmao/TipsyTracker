import React, { useState } from 'react';
import { ScrollView, Text, Linking, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const resources = [
    {
        title: "Safety Tips When Going Out!",
        links:[
            {text: 'Safety Lines in Your Area', url:"https://www.safety.pitt.edu/police"}
        ],
    },
    {
        title: "Alcohol BAC FAQ",
        links:[
            {text: 'Common drinks and their BAC', url:"https://www.safety.pitt.edu/police"}
        ],
    },
];

const ResourcesScreen = () => {
    const [expanded, setExpanded] = useState(null); //keep track of which sections are expanded

    return (
        <ScrollView style = {styles.container}> 
            <Text style={styles.header}>Helpful Resources</Text> 
            {resources.map((section, index) => (
                <List.Accordion
                    key={index}
                    title={section.title}
                    expanded={expanded === index}
                    onPress={() => setExpanded(expanded === index ? null : index)}
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

