const qBank = [
  {
    question:
      "Inside which HTML element do we put the JavaScript? ",
    answers: ["<js>", "<script>", "<scripting>", "<javascript>"],
    correct: "<script>",
    questionId: "099099"
  },
  {
    question:
      'Where is the correct place to insert a JavaScript?',
    answers: ["The <head> section", "Both the <head> section and <body> section are correct", "The <body> section"],
    correct: "Both the <head> section and <body> section are correct",
    questionId: "183452"
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>"],
    correct: "<script src='xxx.js'>",
    questionId: "267908"
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: ["True", "False"],
    correct: "False",
    questionId: "333247"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: ["alert('Hello World')", "msg('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"],
    correct: "alert('Hello World')",
    questionId: "496293"
  },
  {
    question:
      "How do you create a function in JavaScript?",
      answers: ["function:myFunction()", "function myFunction()", "function = myFunction()"],
    correct: "function myFunction()",
    questionId: "588909"
  },
  {
    question:
      "How do you call a function named 'myFunction'?",
    answers: ["call myFunction()", "call function myFunction()", "myFunction()"],
    correct: "myFunction()",
    questionId: "648452"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: ["if i==5 then", "if i=5 then", "if i=5", "if (i==5)"],
    correct: "if (i==5)",
    questionId: "786649"
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: ["if i=!5 then", "if i <> 5", "if (i!=5)", "if (i <> 5)"],
    correct: "if (i!=5)",
    questionId: "839754"
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
