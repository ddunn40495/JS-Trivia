import "./App.css";
import React, { Fragment, Component } from "react";
import Result from "./Result";

import injectSheet from "react-jss";
import Button from "./Button";
const axios = require("axios");

const newQuestion =
  "https://opentdb.com/api.php?amount=10&category=21&type=multiple";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      qID: 1,
      rightAcounter: 0,
      wrongAcounter: 0,
      allQs: [],
      allEasyQs: [],
      allMedQs: [],
      allHardQs: [],
      currentQ: "",
      correctA: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      userA: "",
      level: "",
      allUserAs: [],
      userpick: "",
      allUserPicks: [],
      score: 0,
      gather: 0,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount = async () => {
    const config = {
      method: "get",
      url: newQuestion,
      headers: {
        Cookie: "PHPSESSID=6d663f0500d2bce437c3d0244115b160",
      },
    };
    try {
      let response = await axios(config);
      console.log(response.data.results);
      this.setState({
        currentQ: response.data.results[0].question
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        correctA: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a1: response.data.results[0].incorrect_answers[0]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a2: response.data.results[0].incorrect_answers[1]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a3: response.data.results[0].incorrect_answers[2]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a4: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        level: response.data.results[0].difficulty,
      });
    } catch (error) {
      console.log(error);
    }
  };

  axiosCall1 = async () => {
    const config = {
      method: "get",
      url: newQuestion,
      headers: {
        Cookie: "PHPSESSID=6d663f0500d2bce437c3d0244115b160",
      },
    };
    try {
      let counter = this.state.counter + 1;
      let questionId = this.state.qID + 1;
      let response = await axios(config);
      console.log(response.data.results);
      this.setState({
        counter: counter,
        qID: questionId,
        currentQ: response.data.results[0].question
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),

        correctA: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a1: response.data.results[0].incorrect_answers[0]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a2: response.data.results[0].incorrect_answers[1]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a3: response.data.results[0].incorrect_answers[2]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a4: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        userA: "",
        level: response.data.results[0].difficulty,
        gather: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  axiosCall2 = async () => {
    const config = {
      method: "get",
      url: newQuestion,
      headers: {
        Cookie: "PHPSESSID=6d663f0500d2bce437c3d0244115b160",
      },
    };
    try {
      let counter = this.state.counter + 1;
      let questionId = this.state.qID + 1;
      let response = await axios(config);
      console.log(response.data.results);
      this.setState({
        counter: counter,
        qID: questionId,
        currentQ: response.data.results[0].question
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        correctA: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a3: response.data.results[0].incorrect_answers[1]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a1: response.data.results[0].incorrect_answers[0]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a4: response.data.results[0].incorrect_answers[2]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a2: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        userA: "",
        level: response.data.results[0].difficulty,
        gather: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };
  axiosCall3 = async () => {
    const config = {
      method: "get",
      url: newQuestion,
      headers: {
        Cookie: "PHPSESSID=6d663f0500d2bce437c3d0244115b160",
      },
    };
    try {
      let counter = this.state.counter + 1;
      let questionId = this.state.qID + 1;
      let response = await axios(config);
      console.log(response.data.results);
      this.setState({
        counter: counter,
        qID: questionId,
        currentQ: response.data.results[0].question
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        correctA: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a4: response.data.results[0].incorrect_answers[0]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a2: response.data.results[0].incorrect_answers[1]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a3: response.data.results[0].incorrect_answers[2]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a1: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        userA: "",
        level: response.data.results[0].difficulty,
        gather: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };
  axiosCall4 = async () => {
    const config = {
      method: "get",
      url: newQuestion,
      headers: {
        Cookie: "PHPSESSID=6d663f0500d2bce437c3d0244115b160",
      },
    };
    try {
      let counter = this.state.counter + 1;
      let questionId = this.state.qID + 1;
      let response = await axios(config);
      console.log(response.data.results);
      this.setState({
        counter: counter,
        qID: questionId,
        currentQ: response.data.results[0].question
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        correctA: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a3: response.data.results[0].incorrect_answers[0]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a4: response.data.results[0].incorrect_answers[1]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a1: response.data.results[0].incorrect_answers[2]
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        a2: response.data.results[0].correct_answer
          .replace(/&#039;/g, "'")
          .replace(/&sbquo;/g, ",")
          .replace(/&quot;/g, "'s ")
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"'),
        userA: "",
        level: response.data.results[0].difficulty,
        gather: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getScore() {
    alert(`The game is over you have scored ${this.state.score} points!!!!!! `);
    window.location.reload();
  }

  renderResultDiv(bool, gather) {
    if (bool === true) {
      const answer = `Round: ${this.state.counter + 1}  
      You got it right !!!!!  
      Question: ${this.state.currentQ}  
      Answer: ${
        this.state.correctA
      } You Earned ${gather} points for getting a ${
        this.state.level
      } Question correct and you now have ${this.state.score} points`;
      this.state.allUserAs.push(answer);
    } else {
      const answer2 = `Round: ${this.state.counter + 1} Welp You got it wrong 
      Question: ${this.state.currentQ} 
      Answer: ${this.state.correctA} `;
      this.state.allUserAs.push(answer2);
    }
  }
  handleSelect(event) {
    console.log(event.currentTarget.value);
    this.state.allUserPicks.push(event.currentTarget.value);

    this.addAnswerToState(event.currentTarget.value);
    console.log(this.state.counter);
    console.log(this.state.qID);

    if (this.state.qID < 1) {
      setTimeout(() => this.axiosCall1(), 360);
    } else if (this.state.qID < 2) {
      setTimeout(() => this.axiosCall3(), 360);
    } else if (this.state.qID < 3) {
      setTimeout(() => this.axiosCall2(), 360);
    } else if (this.state.qID < 4) {
      setTimeout(() => this.axiosCall4(), 360);
    } else if (this.state.qID < 5) {
      setTimeout(() => this.axiosCall1(), 360);
    } else if (this.state.qID < 6) {
      setTimeout(() => this.axiosCall3(), 360);
    } else if (this.state.qID < 7) {
      setTimeout(() => this.axiosCall2(), 360);
    } else if (this.state.qID < 8) {
      setTimeout(() => this.axiosCall4(), 360);
    } else if (this.state.qID < 9) {
      setTimeout(() => this.axiosCall2(), 360);
    } else if (this.state.qID < 10) {
      setTimeout(() => this.axiosCall3(), 360);
    } else {
      setTimeout(() => this.getScore(), 300);
    }
  }

  addAnswerToState(answer) {
    if (answer === this.state.correctA) {
      if (this.state.level === "hard") {
        this.setState({
          score: this.state.score + 3,

          userpick: answer,
        });
      } else if (this.state.level === "medium") {
        this.setState({
          score: this.state.score + 2,

          userpick: answer,
        });
        setTimeout(() => this.renderResultDiv(true, 2), 50);
      } else {
        this.setState({
          score: this.state.score + 1,

          userpick: answer,
        });
        setTimeout(() => this.renderResultDiv(true, 1), 50);
      }
    } else {
      setTimeout(() => this.renderResultDiv(false, 0), 50);
    }
  }

  render() {
    return (
      <Fragment>
        <div class='row'>
          <div class='col-sm-1'></div>

          <div class='col-sm-6'>
            <div class='card colors'>
              <div class='card-body'>
                <p class='card-text'>
                  Score: {this.state.score} / {this.state.counter}
                </p>
              </div>
            </div>
            <div class='card question-card colors'>
              <div class='card-body'>
                <h2 class='card-title'>Sports Trivia </h2>
                <h4 class='card-title'>Question </h4>
                <p class='card-text'>{this.state.currentQ}</p>
              </div>
            </div>
            <div className='card colors'>
              <button
                type='button'
                class='b-style btn btn-default btn-lg btn-block colors2'
                value={this.state.a1}
                onClick={this.handleSelect}
              >
                {this.state.a1}
              </button>
            </div>
            <div className='card colors'>
              <button
                type='button'
                class=' b-style btn btn-default btn-lg btn-block colors2'
                value={this.state.a2}
                onClick={this.handleSelect}
              >
                {this.state.a2}
              </button>
            </div>
            <div className='card colors'>
              <button
                type='button'
                class='b-style btn btn-default btn-lg btn-block colors2'
                value={this.state.a3}
                onClick={this.handleSelect}
              >
                {this.state.a3}
              </button>
            </div>
            <div className='card colors'>
              <button
                type='button'
                class='b-style btn btn-default btn-lg btn-block colors2'
                value={this.state.a4}
                onClick={this.handleSelect}
              >
                {this.state.a4}
              </button>
            </div>
          </div>
          <div class='col-sm-4'>
            <div class='card answers-card colors'>
              <div class='card-body'>
                <h4 class='card-title'>Results</h4>
                {this.state.allUserAs.map((answer) => {
                  return <p className='card-text'>{answer}</p>;
                })}
              </div>
            </div>
          </div>
          <div class='col-sm-1'></div>
        </div>
      </Fragment>
    );
  }
}

export default App;
