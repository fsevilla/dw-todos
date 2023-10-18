enum TodoStatus {
    new = 'new',
    active = 'in progress',
    done = 'done'
}

export interface Todo {
    _id?: string;
    title: string;
    description: string;
    deleted?: boolean,
    status?: TodoStatus;
}
