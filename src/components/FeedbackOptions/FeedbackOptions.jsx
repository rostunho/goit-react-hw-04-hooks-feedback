import PropTypes from 'prop-types';
import { Buttons, Button, Item } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Buttons>
      {options.map(label => {
        return (
          <Item key={label}>
            <Button type="button" onClick={onLeaveFeedback}>
              {label}
            </Button>
          </Item>
        );
      })}
    </Buttons>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
