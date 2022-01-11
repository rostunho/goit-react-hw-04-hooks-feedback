import { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Section from 'components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Notification from 'components/Notification/Notification.jsx';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function addFeedback(event) {
    const key = event.target.textContent;

    setFeedback(previousFeedback => ({
      ...previousFeedback,
      [key]: feedback[key] + 1,
    }));
  }

  function countTotalFeedback() {
    const values = Object.values(feedback);
    return values.reduce((acc, value) => acc + value, 0);
  }

  function positiveFeedbackPercentage() {
    const totalCount = countTotalFeedback();
    const positiveCount = (feedback.good * 100) / totalCount;
    return positiveCount ? Math.round(positiveCount) : 0;
  }

  const feedbacks = countTotalFeedback();
  const positiveFeedbacks = positiveFeedbackPercentage();
  const { good, neutral, bad } = feedback;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      {feedbacks ? (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbacks}
            positivePercentage={positiveFeedbacks}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

export default App;
