import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import changePropName from './changePropName';

const Statistics = props => {
  // console.log('props', props);
  const stateKeys = Object.keys(props);
  return (
    <ul className={s.list}>
      {stateKeys.map(prop => {
        const propName = changePropName(prop);

        return (
          <li key={prop} className={s.item}>
            {propName}: {props[prop]}
          </li>
        );
      })}
    </ul>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  }),
};

export default Statistics;
