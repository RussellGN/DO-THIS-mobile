import { Modal } from "react-native";
import React, { ReactNode } from "react";

type propsTypes = {
  isOpen: boolean;
  closeModal: () => void;
  onShow?: () => void;
  children: ReactNode;
};

export default function CustomModal({ isOpen, closeModal, onShow, children }: propsTypes) {
  return (
    <Modal
      onShow={onShow}
      visible={isOpen}
      animationType="slide"
      transparent
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  );
}
