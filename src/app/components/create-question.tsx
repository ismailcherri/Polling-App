import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';
import { addQuestionAsync } from 'src/features/question/question-api';

function CreateQuestion() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [choices, setChoices] = useState<string[]>(['']);
  const [question, setQuestion] = useState<string>('');

  const handleChoiceChange = (value: string, index: number) => {
    console.log('value', eval(value));
    choices[index] = value;
    setChoices([...choices]);
  };

  const handleAddChoice = () => {
    choices.push('');
    setChoices([...choices]);
  };

  const handleQuestionChange = (value: string) => {
    setQuestion(value);
  };

  const handleFormSubmit = async () => {
    var filteredChoices = choices.filter((choice) => choice !== '');
    await dispatch(addQuestionAsync({ question, choices: filteredChoices }));
    navigate('/');
  };

  return (
    <>
      <h3>Create Question works!</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <div>
          <label>Question Name:</label>{' '}
          <input
            type="text"
            value={question}
            onChange={(e) => {
              handleQuestionChange(e.currentTarget.value);
            }}
          />
        </div>
        {choices.map((choice, index) => {
          return (
            <div key={index}>
              <label>Choice:</label>{' '}
              <input
                type="text"
                value={choice}
                onChange={(e) => {
                  handleChoiceChange(e.currentTarget.value, index);
                }}
              />
            </div>
          );
        })}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddChoice();
            }}
          >
            Add another choice
          </button>
          <button type="submit">Add Question</button>
        </div>
      </form>
    </>
  );
}

export default CreateQuestion;
