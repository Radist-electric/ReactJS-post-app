import React from 'react';
// import './post-add-form.css';
import { Input, Button } from 'reactstrap';
import styled from 'styled-components';

const AddForm = styled.div`
    display: flex;
    width: auto;
    flex-grow: 1;
    margin-top: 20px;
    margin-right: 3px;
`

const PostAddForm = ({onAdd}) => {
    return (
        <AddForm>
            <Input placeholder="О чём Вы думаете сейчас?" />
            <Button
                type="submit"
                outline
                color="secondary"
                onClick={() => onAdd('Hello!')}>
                Добавить</Button>
        </AddForm>
    )
}

export default PostAddForm;