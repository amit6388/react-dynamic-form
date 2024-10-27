<div align="center">
        <a href="https://react-hook-form.com" title="React Hook Form - Simple React forms validation">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEh1demMoZMp2axCLy56d5sFdZITq0mgpIRQ&s" alt=" Logo - React hook custom hook for form validation" />
        </a>
</div>

<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/react-hook-form.svg?style=for-the-badge)](https://www.npmjs.com/package/dynamic-react-forms)
[![npm](https://img.shields.io/npm/dt/react-hook-form.svg?style=for-the-badge)](https://www.npmjs.com/package/dynamic-react-forms)
[![npm](https://img.shields.io/npm/l/react-hook-form?style=for-the-badge)](https://www.npmjs.com/package/dynamic-react-forms)
[![Discord](https://img.shields.io/discord/754891658327359538.svg?style=for-the-badge&label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://www.npmjs.com/package/dynamic-react-forms)

</div>

<p align="center">
  <a href="#">Get started</a> | 
  <a href="#">API</a> |
  <a href="#">Form Builder</a> |
  <a href="#">FAQs</a> |
  <a href="#">Examples</a>
</p>

### Features 
- This package is very helpful for generating dynamic forms. You don’t have to worry about HTML validation management; 
- you only need to pass an array with your fields, and it will automatically generate the content for your form along with validation according to your specifications.

### Install

    npm i dynamic-react-forms 

### Quickstart




```jsx

// Install the yup for validation

   npm i yup  

```

   

```jsx

// for  Form inputs  you have to pass the array 

import React from 'react'
import DynamicForm from "dynamic-react-forms"; 
import * as Yup from 'yup';
 

const formConfig = [
  // 1st Row: 2 Input Text
  [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Enter your username',
      className: 'username-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.string().required('Username is required').min(5, 'Minimum 5 characters').max(15, 'Maximum 15 characters')],
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
];


const handleSubmit = (data) => {
  console.log(data);
  //You can use write your logic  . or API Call
};

function App() {
  return (
    <div className="container mt-5">
      <DynamicForm formConfig={formConfig} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

```


```jsx
import React from 'react'
import DynamicForm from "dynamic-react-forms"; 
import * as Yup from 'yup';
 

const formConfig = [
  // 1st Row: 2 Input Text
  [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Enter your username',
      className: 'username-field',
      readOnly: false,
      hidden: false,
      value: '', // Default value
      yup: [Yup.string().required('Username is required').min(5, 'Minimum 5 characters').max(15, 'Maximum 15 characters')],
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
  // 4th Row: 1 Textarea
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
  ],
];


const handleSubmit = (data) => {
  console.log(data);
  //You can use write your logic  . or API Call
};

function App() {
  return (
    <div className="container mt-5">
      <DynamicForm formConfig={formConfig} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

``` 
 
 
### Yup Example Function for Validation

```jsx
 

// Required field
const isRequired = yup.string().required("This field is required");

// Minimum length
const minLength = yup.string().min(5, "Must be at least 5 characters");

// Maximum length
const maxLength = yup.string().max(10, "Must be 10 characters or fewer");

// Email format
const isEmail = yup.string().email("Must be a valid email");

// Date validation
const isDate = yup.date().typeError("Must be a valid date");

// Number validation
const isNumber = yup.number().typeError("Must be a number");

// Positive number
const isPositive = yup.number().positive("Must be a positive number");

// Integer check
const isInteger = yup.number().integer("Must be an integer");

// URL validation
const isURL = yup.string().url("Must be a valid URL");

// Matches a specific regex pattern (e.g., letters only)
const matchesPattern = yup.string().matches(/^[a-zA-Z]+$/, "Only letters are allowed");

// Less than a specific number
const lessThan = yup.number().lessThan(100, "Must be less than 100");

// Greater than a specific number
const moreThan = yup.number().moreThan(10, "Must be greater than 10");

// Minimum date
const minDate = yup.date().min(new Date(2023, 0, 1), "Date cannot be before 2023");

// Maximum date
const maxDate = yup.date().max(new Date(2023, 11, 31), "Date cannot be after 2023");

// Test for null or undefined
const isDefined = yup.mixed().defined("Field must be defined");

// Custom validation with test method
const customTest = yup.string().test(
  "is-even",
  "Value must be even",
  value => value && parseInt(value) % 2 === 0
);

// Length must be exactly 5
const exactLength = yup.string().length(5, "Must be exactly 5 characters");

// Not one of a set of values
const notOneOf = yup.string().notOneOf(["admin", "superuser"], "Invalid username");

// One of a set of values (enum)
const oneOfEnum = yup.string().oneOf(["apple", "banana", "cherry"], "Invalid fruit");

// Valid JSON format
const isJSON = yup.string().test(
  "is-json",
  "Must be a valid JSON string",
  value => {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  }
);
 

```

### Contributors 

<a href="https://github.com/amit6388">
  Amit Chauhan
</a>
