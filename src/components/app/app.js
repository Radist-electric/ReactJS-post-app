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
    {label: "Hey guys! Let's go to learn React!", important: false, like: false, time: new Date(), id: idGenerator('id-')},
    {label: "How cool is that!", important: false, like: false, time: new Date(), id: idGenerator('id-')},
    {label: "You need to work harder in order to achieve your goal! Hey guys! Wake up and go ahead!", important: false, like: false, time: new Date(), id: idGenerator('id-')}
]
data = data.filter((el) => {
    return (typeof el ==='object' && el !== null && el instanceof Array !== true);
});
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            term: '',
            filter: 'all'
         };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
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
    addItem(text) {
        const newItem = {
            label: text,
            important: false,
            like: false,
            time: new Date(),
            id: idGenerator('id-')
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    onToggle(id, param) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            if ( param === 'important') {
                let temp = !old.important;
                old.important = temp;
            } else if ( param === 'like') {
                let temp = !old.like;
                old.like = temp;
            }
            const newItem = {...old, important: old.important, like: old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }
 
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter( (item) => {
            return item.label.indexOf(term) > -1
        });
    }
    filterPost(items, filter) {
        if ( filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onUpdateSearch(term) {
        this.setState({term})
    }
    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <SearchPanelWrap>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </SearchPanelWrap>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggle={this.onToggle}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }

}


