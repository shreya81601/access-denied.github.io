import React, { createContext } from 'react';
import { FragmentTransitions } from '../../types/reveal.js';
import { SimpleComponent } from './BaseComponent.js';

export interface FragmentContextType {
  setNotes: (notes: string) => void;
  index?: number;
  transition?: FragmentTransitions;
}

const defaultContext: FragmentContextType = {
  setNotes: () => null,
};

export const fragmentContext = createContext(defaultContext);

export interface FragmentProps {
  index?: number;
}

export interface FragmentProps {
  index?: number;
  transition?: FragmentTransitions;
  children: React.ReactNode;
  tag?: SimpleComponent;
}

export default function Fragment({
  index,
  transition,
  children,
  tag = 'span',
}: FragmentProps) {
  const classes = ['fragment'];
  if (transition) {
    classes.push(transition);
  }
  const Tag = tag;
  return (
    <Tag className={classes.join(' ')} data-fragment-index={index}>
      {children}
    </Tag>
  );
}
