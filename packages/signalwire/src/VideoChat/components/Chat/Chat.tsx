import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  IconSend,
  Input,
  IconChevronDown,
  IconChevronUp,
  Text,
  FlexProps,
  useBreakpointValue,
} from '@cmpsr/components';
import { List, ListItem } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { ChatProps } from './types';
import { useChat } from '../../hooks/useChat';

export const Chat = ({ userId, channel, floating = true, ...flexProps }: ChatProps) => {
  const containerRef = useRef<HTMLDivElement | null>();

  const { sendMessage, messages, fetchTokenAndStartChat, ready } = useChat({ channel });

  const [message, setMessage] = useState('');
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [showMessages, setShowMessages] = useState(true);

  useEffect(() => {
    if (containerRef.current && showMessages) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, showMessages]);

  useEffect(() => {
    fetchTokenAndStartChat(userId);
    setShowMessages(!isMobile || false);
  }, [isMobile, userId, fetchTokenAndStartChat]);

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage('');
  };

  const floatingProps: Partial<FlexProps> = floating
    ? {
        position: 'fixed',
        bottom: { base: '5rem', md: '3rem' },
        right: { base: '0', md: '3rem' },
        height: '442px',
      }
    : {};

  return (
    <Flex
      flexDir="column"
      padding={{ base: '0.5rem', md: '0' }}
      borderColor="gray"
      width={{ base: '100%', md: '320px' }}
      height="100%"
      maxHeight="calc(100% - 5rem)"
      color="white"
      justifyContent="end"
      {...floatingProps}
      {...flexProps}
    >
      {ready && (
        <>
          <Flex
            paddingX="16px"
            paddingY={{ base: '8px', md: '16px' }}
            borderTopRadius="6px"
            backgroundColor="background-dark"
            flexDir="row"
            onClick={() => setShowMessages((c) => !c)}
            cursor="pointer"
          >
            <Text flex="1" variant="text-body-bold" color="text-light">
              Chat
            </Text>
            {showMessages ? <IconChevronDown size="l" /> : <IconChevronUp size="l" />}
          </Flex>
          {showMessages && (
            <>
              <Flex
                flex="6"
                maxHeight="86%"
                overflowY="scroll"
                css={{
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
                ref={(ref) => {
                  containerRef.current = ref;
                }}
              >
                <List width="100%">
                  {messages &&
                    messages.map((message, index) => (
                      <ListItem mt="8px" key={index}>
                        <Flex py="8px" px="12px" flexDir="column" position="relative">
                          <Box
                            zIndex="-1"
                            position="absolute"
                            width="100%"
                            height="100%"
                            top="0"
                            left="0"
                            backgroundColor={message.member.id === userId ? 'accent-default' : 'rgba(0, 0, 0, 0.4)'}
                            borderRadius="6px"
                          />
                          <Box
                            color={message.member.id === userId ? 'black' : 'accent-default'}
                            fontStyle="bold"
                            fontSize="20px"
                          >
                            {message.member.id}
                          </Box>
                          <Box color={message.member.id === userId ? 'black' : 'white'} fontSize="20px">
                            {message.content}
                          </Box>
                        </Flex>
                      </ListItem>
                    ))}
                </List>
              </Flex>
              <Flex maxH="44px" mt="16px" pl="14px" flex="1" border="2px solid #FFFFFF" borderRadius="23px">
                <Input
                  _focus={{}}
                  _hover={{}}
                  _active={{}}
                  border="none"
                  fontSize="20px"
                  outline="none"
                  variant="outline"
                  textColor="text-light"
                  backgroundColor="transparent"
                  placeholder="Write your message"
                  flex="4"
                  value={message}
                  onChange={({ target: { value } }) => setMessage(value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <IconButton
                  _hover={{ color: '#FFFFFFCC' }}
                  _focus={{}}
                  padding="0.5rem"
                  onClick={sendMessage}
                  mr="10px"
                  height="100%"
                  variant="ghost"
                  size="l"
                  aria-label="send message"
                  backgroundColor="transparent"
                  color="#FFFFFF"
                  icon={<IconSend />}
                />
              </Flex>
            </>
          )}
        </>
      )}
    </Flex>
  );
};
