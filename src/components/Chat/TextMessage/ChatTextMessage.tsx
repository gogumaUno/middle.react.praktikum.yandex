import React, { FunctionComponent } from 'react';

import { Avatar } from '../../../shared/Avatar/Avatar';
import { ChatMessageWrapper } from '../MessageWrapper/ChatMessageWrapper';

import { ITextMessage } from '../../../models/interfaces/IMessage';

import { resources } from '../../../models/constants/resources';
import { getTime } from '../../../helpers/dateHelper';

import './ChatTextMessage.css';

export const ChatTextMessage: FunctionComponent<ITextMessage> = ({
  author,
  content,
  timestamp,
  isChained,
}: ITextMessage) => (
  <ChatMessageWrapper>
    <section className={`message ${isChained ? 'chained' : ''}`}>
      <Avatar className="message__icon" src={author.avatar} alt={resources.avatar.messageAuthor} />
      <div className="message__body">
        <span className="message__author">{author.name}</span>
        <div className="message__content">
          <span>{content}</span>
        </div>
      </div>
      <div className="message__time">
        <span>{getTime(timestamp)}</span>
      </div>
    </section>
  </ChatMessageWrapper>
);
