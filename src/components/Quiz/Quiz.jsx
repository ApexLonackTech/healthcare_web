import {
  ArrowRightAlt,
  Class,
  Clear,
  DoneOutline,
  KeyboardBackspace,
  Publish,
  Stars,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import language from "../../i18n/english.json";

let arrayDat = [];
function Quiz(props) {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [index, setIndex] = React.useState(0);
  const [input, setInput] = React.useState({});
  const [result, setResult] = React.useState(null);
  // const [loading, setLoading] = React.useState(false);
  //   const [arrayDat, setArrayDat] = React.useState([]);
  const { items, loading, submitQuiz } = props;

  const handleSingleInput = (label, e) => {
    var val = e.target.value;
    setInput({ ...input, [label]: val });
  };

  const handleArrayInput = (label, e) => {
    var val = e.target.value;
    let index = arrayDat.indexOf(val);
    if (index > -1) {
      arrayDat.splice(index, 1);
    } else {
      arrayDat.push(val);
    }
    setInput({ ...input, [label]: arrayDat });
  };

  const forwardQuiz = () => {
    let length = items?.total_quiz.length - 1;
    if (index < length) {
      setIndex(index + 1);
      arrayDat = [];
    }
  };
  const backQuiz = () => {
    if (index != 0) {
      setIndex(index - 1);
      arrayDat = [];
    }
  };

  const preSubmitQuiz = async () => {
    setLoading(true);
    let resp = await submitQuiz(input);
    if (resp?.remark) {
      setResult(resp);
      setIndex(index + 1);
    } else {
    }
    setLoading(false);
  };

  return (
    <div>
      {items?.total_quiz[index] && index < items?.total_quiz.length && (
        <>
          <h4>
            Quiz Sections: {index + 1}/{items?.total_quiz.length}
          </h4>
          <div
            id={"question_data_content" + index}
            className="row gy-3 m-3 quizShow"
          >
            <div className="col-lg-10">
              <h5
                className={
                  theme === "light" ? " d_t fw-semibold" : " l_t fw-semibold"
                }
              >
                ({index + 1}) {items?.total_quiz[index].title}
              </h5>
              <div className="demo-inline-spacing mt-3">
                <div className="list-group">
                  {items?.total_quiz[index].options.map((option, ind) => {
                    if (items?.total_quiz[index].type === "single") {
                      return (
                        <label
                          key={ind}
                          className={
                            theme === "light"
                              ? " d_t list-group-item"
                              : " l_t list-group-item"
                          }
                        >
                          <input
                            id={"quizOption" + option.id}
                            name={"response_" + items?.total_quiz[index].id}
                            className="form-check-input me-1"
                            type="radio"
                            value={option.id}
                            checked={
                              input[
                                "response_" + items?.total_quiz[index].id
                              ] &&
                              input[
                                "response_" + items?.total_quiz[index].id
                              ] == option.id
                                ? true
                                : false
                            }
                            onChange={(e) =>
                              handleSingleInput(
                                "response_" + items?.total_quiz[index].id,
                                e
                              )
                            }
                          />
                          {option.title}
                        </label>
                      );
                    } else {
                      return (
                        <label
                          key={ind}
                          className={
                            theme === "light"
                              ? "  list-group-item d_t"
                              : " l_t list-group-item"
                          }
                        >
                          <input
                            id={"quizOption" + option.id}
                            name={"response_" + option.id}
                            className="form-check-input me-1"
                            type="checkbox"
                            value={option.id}
                            checked={
                              input[
                                "response_" + items?.total_quiz[index].id
                              ] &&
                              input[
                                "response_" + items?.total_quiz[index].id
                              ].indexOf(JSON.stringify(option.id)) > -1
                                ? true
                                : false
                            }
                            onChange={(e) =>
                              handleArrayInput(
                                "response_" + items?.total_quiz[index].id,
                                e
                              )
                            }
                          />
                          {option.title}
                        </label>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {result?.remark &&
              JSON.parse(result?.remark)[
                "answer_" + items?.total_quiz[index].id
              ] && (
                <>
                  {JSON.parse(result?.remark)[
                    "answer_" + items?.total_quiz[index].id
                  ]["is_correct"] == 1 && (
                    <div
                      class="alert alert-success alert-dismissible"
                      role="alert"
                    >
                      <DoneOutline fontSize="medium" />
                      {
                        JSON.parse(result?.remark)[
                          "answer_" + items?.total_quiz[index].id
                        ]["hint"]
                      }
                    </div>
                  )}
                </>
              )}
            {result?.remark &&
              !JSON.parse(result?.remark)[
                "answer_" + items?.total_quiz[index].id
              ] && (
                <div class="alert alert-danger alert-dismissible" role="alert">
                  <Clear />
                  No answer provided
                </div>
              )}
            {result?.remark &&
              JSON.parse(result?.remark)[
                "answer_" + items?.total_quiz[index].id
              ] && (
                <>
                  {JSON.parse(result?.remark)[
                    "answer_" + items?.total_quiz[index].id
                  ]["is_correct"] == 0 && (
                    <div
                      class="alert alert-danger alert-dismissible"
                      role="alert"
                    >
                      <Clear />
                      {
                        JSON.parse(result?.remark)[
                          "answer_" + items?.total_quiz[index].id
                        ]["hint"]
                      }
                    </div>
                  )}
                </>
              )}
          </div>
        </>
      )}
      {result?.remark && index >= items?.total_quiz.length && (
        <div
          className={`row gy-3 m-3 quizShow ${
            result?.score > result?.total_score / 1.6 ? "bg-info" : "bg-danger"
          }`}
        >
          <div className="col-lg-12">
            <div className="d-flex flex-row align-items-center justify-content-evenly m-4">
              <hr style={{ width: "40%" }} class="mt-2 mb-3" />
              <Stars sx={{ color: "white" }} fontSize="large" />
              <hr style={{ width: "40%" }} class="mt-2 mb-3" />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly m-4">
              <h4 className="l_w">
                {result?.score > result?.total_score / 1.6
                  ? language?.quiz_section?.congrats_message
                  : language?.quiz_section?.retry_message}
              </h4>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly m-4">
              <p className="l_w">
                You got {result?.score} point out of {result?.total_score}{" "}
                points.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="d-flex flex-row align-items-end justify-content-end">
        <input
          type="hidden"
          id="question_count"
          value={items?.total_quiz.length}
        />
        <div className="d-flex flex-row">
          <button onClick={backQuiz} className="btn btn-dark m-1">
            <KeyboardBackspace /> Back
          </button>
          <button
            disabled={index == items?.total_quiz.length ? true : false}
            onClick={forwardQuiz}
            className="btn btn-secondary m-1"
          >
            Next <ArrowRightAlt /> <i className="bx bx-right-arrow-alt"></i>
          </button>
          {index > items?.total_quiz.length - 1 ||
            (index == items?.total_quiz.length - 1 && (
              <button
                onClick={() => preSubmitQuiz()}
                disabled={loading}
                className="btn btn-success m-1"
              >
                {loading && <CircularProgress sx={{ color: "white" }} />}
                {!loading && (
                  <>
                    <Publish /> Submit Quiz
                    <i className="bx bx-right-arrow-alt"></i>
                  </>
                )}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
