import React, { Component } from 'react'
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ModalContent } from 'react-native-modals';

export default class ModalComponent extends Component {
    render() {
        return (
            <View>
                <Modal isVisible={true}>
                    <View style={styles.content}>
                        {/* <Text style={styles.contentTitle}>Hi �!</Text>
                        <Button testID={'close-button'} title="Close" /> */}
                        {this.props.children}
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});
