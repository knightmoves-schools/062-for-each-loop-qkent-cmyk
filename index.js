function markAsDone(todos) {
  const modifiedTodos = [];
  
  todos.forEach(function(todo) {
    modifiedTodos.push('done - ' + todo);
  });
  
  return modifiedTodos;
}

