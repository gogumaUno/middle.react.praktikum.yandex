import React, { FunctionComponent } from 'react';

import { AvatarProps } from './AvatarProps';

import { resources } from '../../constants/resources';

import './Avatar.css';

export const Avatar: FunctionComponent<AvatarProps> = ({
  className,
  src,
  alt = resources.avatar.default,
}: AvatarProps) => (
  <div className={className}>
    <img src={src} alt={alt} />
  </div>
);
