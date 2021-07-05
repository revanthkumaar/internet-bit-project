import { ReactComponent } from "react";
import React from "react";
//HOC of react-redux library
import { connect } from "react-redux";
import * as bookActions from "../../actions/bookActions.js";

class Book extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    this.props.createBook(input); // action gets triggered
  }

  render() {
    let titleInput = null;
    return (
      <div>
        <h3>Books</h3>
        <ul></ul>

        <div>
          <h3>Books listing form</h3>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              var input = { title: titleInput };
              this.submitBook(input);
            }}
          >
            <input type="text" name="title" />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => dispatch(bookActions.createBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
