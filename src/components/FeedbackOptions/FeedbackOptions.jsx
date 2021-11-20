import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const stateKeys = Object.keys(options);
  return (
    <>
      <ul className={s.list}>
        {stateKeys.map((key, id) => (
          <li className={s.list__item} key={id}>
            <button
              type="button"
              className={s.list__btn}
              onClick={() => onLeaveFeedback(key)}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
