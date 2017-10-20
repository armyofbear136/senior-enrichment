import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_STUDENTS';
const CREATE     = 'CREATE_STUDENT';
export const REMOVE = 'REMOVE_STUDENT';
const UPDATE     = 'UPDATE_STUDENT';


/* ------------   ACTION CREATORS     ------------------ */

const init  = students => ({ type: INITIALIZE, students });
const create = student  => ({ type: CREATE, student });
const remove = id    => ({ type: REMOVE, id });
const update = student  => ({ type: UPDATE, student });


/* ------------       REDUCER     ------------------ */

export default function reducer (students = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.students;

    case CREATE:
      return [action.student, ...students];

    case REMOVE:
      return students.filter(student => student.id !== action.id);

    case UPDATE:
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ));

    default:
      return students;
  }
}


/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudents = () => dispatch => {
  console.log("fetching students");
  axios.get('/api/students')
       .then(res => dispatch(init(res.data)));
};

// optimistic
export const removeStudent = id => dispatch => {
  console.log("remove student id",id);
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
       .catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
};

export const addStudent = student => dispatch => {
  console.log("student", student);
  return axios.post('/api/students', student)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
};

export const updateStudent = (id, student) => dispatch => {
  console.log(student);
  axios.put(`/api/students/${id}`, student)
       .then(res => {console.log(res.data);
         return dispatch(update(res.data))})
       .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
};


