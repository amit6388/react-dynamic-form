import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import * as Yup from 'yup'; 
import DynamicForm from 'dynamic-react-forms';
const formConfig = [
  // 1st Row: 2 Input Text
  [
    {
      name: 'username',
      type: 'email',
      placeholder: 'Enter your username',
      className: 'username-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.string().email("sahi dall be").required('Username is required').min(5, 'Minimum 5 characters').max(15, 'Maximum 15 characters')],
    },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        className: 'email-field',
        readOnly: false,
        hidden: false,
        value: '', // Default value
        yup: [Yup.string().required('Email is required').email('Invalid email address')],
      },
  ],
  // 2nd Row: 3 Input Number
  [
    {
      name: 'age',
      type: 'number',
      placeholder: 'Enter your age',
      className: 'age-field',
      readOnly: false,
      hidden: false,
      minValue:0,
      value: '', // Default value
      yup: [Yup.string().required('Age is required')],
    },
    {
      name: 'height',
      type: 'number',
      placeholder: 'Enter your height (cm)',
      className: 'height-field',
      readOnly: false,
      hidden: false,
      minValue:0,
      value: '', // Default value
      yup: [Yup.string().required('Height is required') ],
    },
    {
      name: 'weight',
      type: 'number',
      placeholder: 'Enter your weight (kg)',
      className: 'weight-field',
      readOnly: false,
      hidden: false,
      minValue:0,
      value: '', // Default value
      yup: [Yup.string().required('Weight is required') ],
    },
  ],
  // 3rd Row: 3 Input File
  [
    {
      name: 'profilePicture',
      type: 'file',
      placeholder: 'Upload your profile picture',
      className: 'profile-picture-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.mixed().required('Resume is required').test(
        'fileSize',
        'File size is too large (Max 2MB)',
        value => !value || (value && value[0].size <= 2000000)
      )],
    },
    {
      name: 'file',
      type: 'file',
      placeholder: 'Upload a file',
      className: 'file-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.mixed().required('File is required')],
    },
    {
      name: 'resume',
      type: 'file',
      placeholder: 'Upload your resume',
      className: 'resume-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.mixed().required('Resume is required')],
    },
  ],
  // 4th Row: 3 Dropdown Input
  [
    {
      name: 'gender',
      type: 'select',
      placeholder: 'Select your gender',
      className: 'gender-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      options: ['Male', 'Female', 'Other'],
      yup: [Yup.string().required('Gender is required')],
    },
    {
      name: 'country',
      type: 'select',
      placeholder: 'Select your country',
      className: 'country-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      options: ['USA', 'Canada', 'UK', 'Other'],
      yup: [Yup.string().required('Country is required')],
    },
    {
      name: 'feedbackType',
      type: 'select',
      placeholder: 'Select feedback type',
      className: 'feedback-type-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      options: ['Complaint', 'Suggestion', 'Inquiry'],
      yup: [Yup.string().required('Feedback type is required')],
    },
  ],
  // 5th Row: 1 Textarea
  [
    {
      name: 'feedback',
      type: 'textarea',
      placeholder: 'Your feedback',
      className: 'feedback-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.string().required('Feedback is required')],
    },
    {
      name: 'feedback1',
      type: 'textarea',
      placeholder: 'Your feedback',
      className: 'feedback-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.string().required('Feedback is required')],
    }, {
      name: 'feedback3',
      type: 'textarea',
      placeholder: 'Your feedback',
      className: 'feedback-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.string().required('Feedback is required')],
    }
  ],
];

const handleSubmit = (data) => {
  console.log(data);
};

function App() {
  return (
    <>
    <div className='row p-3'>
   
    <DynamicForm formConfig={formConfig} onSubmit={handleSubmit} /> 
    
    </div>
    </>
  );
}

export default App;
