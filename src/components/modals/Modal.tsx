'use client';

import { Button, Flex, Modal as BaseModal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  title, 
  body, 
  actionLabel, 
  footer, 
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }
  
    setShowModal(false);
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose, disabled])

  const handleSubmit = useCallback(() => {
    console.log('opa :>> ');
    console.log('onSubmit', onSubmit)
    if (disabled) {
      return
    }

    onSubmit()
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <BaseModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {body}
          </ModalBody>

          <ModalFooter>
            <Flex
              direction={'column'}
              align={'center'}
              justify={'center'}
            >
              {secondaryAction && secondaryActionLabel && (
                <Button
                  disabled={disabled}
                  onClick={handleSecondaryAction}
                  variant='outline'
                >
                  {secondaryActionLabel} 
                </Button>
              )}
              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                width={200}
                disabled={disabled} 
                onClick={handleSubmit}
              >
                {actionLabel}
              </Button>
              {footer}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </BaseModal>
    </>
  );
}
