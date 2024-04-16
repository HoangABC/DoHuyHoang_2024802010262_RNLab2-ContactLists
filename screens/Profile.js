import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { fetchRandomContact } from '../utility/api';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import colors from '../utility/colors';

const Profile = ({ route }) => {
    const { contact } = route.params;
    const { avatar, name, email, phone, cell } = contact;

    // Define state for the fetched random contact
    const [randomContact, setRandomContact] = useState(null);

    useEffect(() => {
        fetchRandomContact().then(
            // Update the randomContact state with the fetched contact
            contact => setRandomContact(contact)
        ).catch(error => console.error('Error fetching random contact:', error));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
            </View>
            <View style={styles.detailsSection}>
                <DetailListItem icon="mail" title="Email" subtitle={email}/>
                <DetailListItem icon="phone" title="Work" subtitle={phone}/>
                <DetailListItem icon="smartphone" title="Personal" subtitle={cell}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    avatarSection:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.blue,
    },
    detailsSection:{
        flex: 1,
        backgroundColor:'white',    
    },
});

export default Profile;
