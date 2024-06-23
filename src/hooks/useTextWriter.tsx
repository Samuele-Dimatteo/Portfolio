'use client';

import { useCallback, useEffect, useReducer, useRef } from 'react';

type TypewriterProps = {
  words: string[];
  typeSpeed: number;
  erasingSpeed: number;
  delay: number;
};

type TypewriterState = {
  text: string;
  count: number;
  speed: number;
  isTyping: boolean;
  isDeleting: boolean;
};

type TypewriterAction =
  | { type: 'TYPE'; payload: string; speed: number }
  | { type: 'DELETE'; payload: string; speed: number }
  | { type: 'DELAY'; payload: number }
  | { type: 'COUNT' };

const typewriterReducer = (state: TypewriterState, action: TypewriterAction): TypewriterState => {
  switch (action.type) {
    case 'TYPE':
      return {
        ...state,
        text: action.payload.substr(0, state.text.length + 1),
        speed: action.speed,
        isTyping: true,
        isDeleting: false,
      };
    case 'DELETE':
      return {
        ...state,
        text: action.payload.substr(0, state.text.length - 1),
        speed: action.speed,
        isTyping: false,
        isDeleting: true,
      };
    case 'DELAY':
      return {
        ...state,
        speed: action.payload,
      };
    case 'COUNT':
      return {
        ...state,
        count: state.count + 1,
        text: '',
        isTyping: false,
        isDeleting: false,
      };
    default:
      return state;
  }
};

const useTextWriter = ({ words, typeSpeed, erasingSpeed, delay }: TypewriterProps) => {
  const [{ text, count, speed, isTyping, isDeleting }, dispatch] = useReducer(typewriterReducer, {
    text: '',
    count: 0,
    speed: typeSpeed,
    isTyping: false,
    isDeleting: false,
  });

  const isDelaying = useRef(false);

  const handleTyping = useCallback(() => {
    const index = count % words.length;
    const fullWord = words[index];

    if (!isDeleting) {
      dispatch({ type: 'TYPE', payload: fullWord, speed: typeSpeed });

      if (text === fullWord) {
        isDelaying.current = true;

        setTimeout(() => {
          isDelaying.current = false;
          dispatch({ type: 'DELETE', payload: fullWord, speed: erasingSpeed });
        }, delay);
      }
    } else {
      dispatch({ type: 'DELETE', payload: fullWord, speed: erasingSpeed });

      if (text === '') {
        dispatch({ type: 'COUNT' });
      }
    }
  }, [text, count, words, typeSpeed, erasingSpeed, delay]);

  useEffect(() => {
    if (!isDelaying.current) {
      const typing = setTimeout(handleTyping, speed);
      return () => clearTimeout(typing);
    }
  }, [handleTyping, speed]);

  return text;
};

export default useTextWriter;
