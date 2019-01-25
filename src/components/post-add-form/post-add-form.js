import React, {Component} from 'react';
// import './post-add-form.css';
import { Input, Button } from 'reactstrap';
import styled from 'styled-components';

const AddForm = styled.form`
    display: flex;
    width: auto;
    flex-grow: 1;
    margin-top: 20px;
    margin-right: 3px;
`
export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        if ( this.state.text.length === 0 ) {
            return
        }
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }
    render() {
        return (
            <AddForm
                onSubmit={this.onSubmit}>
                <Input
                placeholder="О чём Вы думаете сейчас?"
                onChange={this.onValueChange}
                value={this.state.text}/>
                <Button
                    type="submit"
                    outline
                    color="secondary">
                    Добавить</Button>
            </AddForm>
        )
    }
}

