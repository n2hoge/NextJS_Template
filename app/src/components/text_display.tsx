import * as React from 'react';
import styles from '@/styles/components/text_display.module.scss';

type TextDisplayProps = {
  text: string;
};

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};

export default TextDisplay;
