import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import idGenerator from 'react-id-generator';

// import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
const SearchPanelWrap = styled.div`
    display: flex;
    margin: 1rem 3px 0 0;
    width: auto;
    flex-grow: 1;
`
// const StyledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `
let data = [
    5,
    "Hello, People!!!",
    null,
    undefined,
    [1, 2],
    true,
    {label: "Hey guys! Let's go to learn React!", important: false, id: idGenerator('id-')},
    {label: "How cool is that!", important: false, id: idGenerator('id-')},
    {label: "You need to work harder in order to achieve your goal! Hey guys! Wake up and go ahead!", important: false, id: idGenerator('id-')}
]
data = data.filter((el) => {
    return (typeof el ==='object' && el !== null && el instanceof Array !== true);
});
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator('id-')
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <SearchPanelWrap>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelWrap>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }

}



