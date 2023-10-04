import React, { createContext, ReactNode } from 'react';
import Reveal, { MightBeRevealPlugin } from '../../types/reveal.js';

export interface RevealContextType<Plugins extends MightBeRevealPlugin[]> {
  reveal: Reveal<Plugins> | null;
  prism: boolean;
}

export const defaultContextValue: RevealContextType<MightBeRevealPlugin[]> = {
  reveal: null,
  prism: false,
};
export const RevealContext = createContext<
  RevealContextType<MightBeRevealPlugin[]>
>(defaultContextValue);

export interface RevealProviderProps<Plugins extends MightBeRevealPlugin[]> {
  reveal: RevealContextType<Plugins>;
  children: ReactNode;
}

export default function RevealProvider<Plugins extends MightBeRevealPlugin[]>({
  reveal,
  children,
}: RevealProviderProps<Plugins>) {
  // coerce the type to the actual reveal/plugin combo it is passed
  const Context = RevealContext as React.Context<RevealContextType<Plugins>>;
  return <Context.Provider value={reveal}>{children}</Context.Provider>;
}
