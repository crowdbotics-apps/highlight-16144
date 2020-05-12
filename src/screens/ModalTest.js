import React, { Component } from 'react'
import Modal from 'react-native-modal';
import { View, Text, Button } from 'react-native';
import { ModalContent } from 'react-native-modals';

export default class ModalTest extends Component {
    state = {
        isModalVisible: false
    }
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };    
    render() {
        return (
            <View style={{ flex: 1, marginTop: '10%' }}>
                <Button title="Show modal" onPress={this.toggleModal} />

                <Modal isVisible={this.state.isModalVisible}>
                    <ModalContent style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text>Hello!</Text>

                        <Button title="Hide modal" onPress={this.toggleModal} />
                    </ModalContent>
                </Modal>
            </View>
        )
    }
}
