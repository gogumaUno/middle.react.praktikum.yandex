import React, { FunctionComponent } from 'react';

import { IChatMessageWrapperProps } from './IChatMessageWrapperProps';

import { resources } from '../../../constants/resources';

import './ChatMessageWrapper.css';

export const ChatMessageWrapper: FunctionComponent<IChatMessageWrapperProps> = ({
  className = resources.messages.messageWrap,
  children,
}: IChatMessageWrapperProps) => (
  <div className={className}>
    {children}
  </div>
);
