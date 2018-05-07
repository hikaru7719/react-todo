const initialState = {
  task: '',
  tasks: []
};

export default function tasksReducers(state = initialState, action){
  switch (action.type){
    case 'INPUT_TASK':
      return {
        ...state,
        task:action.payload.task
      };

    case 'ADD_TASK':
      return {
        task:'',
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}
