import { Modal } from "react-native";
import React from "react";

const CustomModal = ({ children, visible, animationType, onRequestClose }) => {
    return (
        <Modal
        animationType={animationType}
        visible={visible}
        onRequestClose={onRequestClose}
        >
        {children}
        </Modal>
    );
};

export default CustomModal;
