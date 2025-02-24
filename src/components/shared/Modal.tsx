"use client"
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

type CustomModalProps = {
    modalButton: string;
    modalTitle: string;
    children: React.ReactNode;
    };

const CustomModal = ({modalButton,modalTitle,children}:CustomModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <>
        <Button onPress={onOpen}>{modalButton}</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {modalTitle}
                </ModalHeader>
                <ModalBody>
                  {children}
                </ModalBody>
                
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default CustomModal;
