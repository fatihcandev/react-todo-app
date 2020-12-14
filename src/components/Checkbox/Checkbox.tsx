import React from 'react';

import { Icon } from '../Icon';

import styles from './Checkbox.module.scss';

interface ICheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({ checked, onChange }) => {
  return (
    <div className={`${styles.container} ${checked && styles.checked}`}>
      <input
        type="checkbox"
        onChange={e => onChange(e.target.checked)}
        className={styles.checkbox}
        {...{ checked }}
      />
      {checked && <Icon icon="check" />}
    </div>
  );
};

export default Checkbox;
