import React from 'react';
import { List, ListItem } from '@chakra-ui/react';
import { VideoMemberEntity } from '@signalwire/js';
import { Avatar } from '../Avatar';
import { MembersListProps } from './types';

const MembersList = ({ members, ownMemberId, ownUserName }: MembersListProps) => {
  const otherUsers = members.filter((member) => member.id !== ownMemberId);

  return (
    <List position="fixed" top="1rem" left="1rem" zIndex="2" display="flex" flexDir="column" alignItems="center">
      {ownUserName && (
        <ListItem>
          <Avatar name={ownUserName} />
        </ListItem>
      )}
      {otherUsers.map((member: VideoMemberEntity) => (
        <ListItem mt="1rem" color="white" key={member.id}>
          <Avatar name={member.name} size="m" />
        </ListItem>
      ))}
    </List>
  );
};

export { MembersList };
