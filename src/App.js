import React,{Component} from "react";
import quizService from "./components/Questions";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class App extends Component{
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    };
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    calculateAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    }
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
            <div className="container">
                <div className="title">My Quiz App</div>
                { this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({ question, answers, correct, questionID }) => (
                            <QuestionBox
                                question={question}
                                options={answers}
                                key={questionID}
                                selected={answer => this.calculateAnswer(answer, correct)}
                            />
                        )
                    )}

                {this.state.responses === 5 ? (
                    <Result score={this.state.score} playAgain={this.playAgain} />
                ) : null}
                <br />
            </div>
        )
    }
}

export default App;