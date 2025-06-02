import { Form } from "react-router-dom";

// react router from has two attributes :- a) method. b) action
// method describes the request type that we are trying to make by submiting the form
// action describes the route or path to which the for data to be submitted
// by default , method is set to "GET" and action is set to "." which means submit to the current route

// submiting the form will trigger the loader in Home component cause
// React Router’s loaders are designed to run:

// “Every time the route receives a new request.”

// That includes:
// 	•	Navigating to that route via a link
// 	•	Reloading the page
// 	•	Submitting a form that targets that route (like with action=".")
// 	•	Changing the URL search parameters (in a GET request)

import styles from "./SearchForm.module.css";
function SearchForm({ defaultName }) {
  return (
    <Form method="GET" className={`container ${styles.form}`}>
      <input
        type="text"
        name="search"
        id="search"
        defaultValue={defaultName}
        required
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchForm;
