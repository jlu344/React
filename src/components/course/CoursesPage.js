import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor (props, context){
    super(props, context);
  }

 render() {
      const {courses} = this.props;
      return (
        <div>
          <h1>Courses</h1>
          <CourseList courses={courses} />
        </div>
      );
    }
}

CoursesPage.propTypes = {
  actions : React.PropTypes.object.isRequired,
  courses : React.PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    courses : state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
