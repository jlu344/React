import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCourses() {
  return function(dispatch){
      return courseApi.getAllCourses().then((courses) => {
          dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
          throw error;
        });
      };
}

export function deleteCourse(courseId){
  return function(dispatch){
    return courseApi.deleteCourse(courseId).then (courseId => {
        dispatch(deleteCourseSuccess(courseId));
    }).catch(error => {
      throw error;
    });
  };
}


export function loadCoursesSuccess(courses){
  return {type : actionTypes.LOAD_COURSES_SUCCESS, courses};
}

export function deleteCourseSuccess(courseId){
  return {
    type: actionTypes.DELETE_COURSE_SUCCESS, courseId
  };
}
