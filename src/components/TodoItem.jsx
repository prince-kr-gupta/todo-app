function TodoItem1({todoName, todoDate}) {

    const todoItems = [{
        name: 'Buy Milk',
        dueDate: '10/11/2026',
    },
    {
        name: 'Go To College',
        dueDate: '10/11/2026',
    },
];

return (
    <div class="container">
    <div class="row kg-row">
        <div class="col-6">
            {todoName}
        </div>
        <div class="col-4">
            {todoDate}
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>
    </div>
    </div>
);
}

export default TodoItem1;