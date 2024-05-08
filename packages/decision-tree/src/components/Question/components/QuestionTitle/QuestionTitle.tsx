import React, { FC } from 'react';
import { type QuestionTitleProps } from './types';
import { Text, Flex, IconHelp, Tooltip, Box } from '@cmpsr/components';

export const QuestionTitle: FC<QuestionTitleProps> = ({ question, tooltip }) => (
  <Flex justifyContent={'center'} mb="spacer-8">
    <Text variant="text-header-L" mb="spacer-8" my="auto">
      {question}
    </Text>
    <Tooltip label={tooltip} placement="bottom">
      <Box display="inline" my="auto" ml="spacer-2">
        <IconHelp color="text-link-secondary-default" />
      </Box>
    </Tooltip>
  </Flex>
);
