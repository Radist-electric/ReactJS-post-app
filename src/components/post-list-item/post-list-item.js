import React, {Component} from 'react';
import './post-list-item.css';

let changeNumber = (number) => {
    if (number < 10) {
        number = `0${number}`;
    }
    return number;
}
let currentDate = new Date(),
    year = currentDate.getFullYear(),
    month = currentDate.getMonth(),
    day = currentDate.getDate(),
    hour = changeNumber(currentDate.getHours()),
    minutes = changeNumber(currentDate.getMinutes()),
    seconds = changeNumber(currentDate.getSeconds()),
    setMonthName = '';
    switch (month)
    {
      case 0: setMonthName="января"; break;
      case 1: setMonthName="февраля"; break;
      case 2: setMonthName="марта"; break;
      case 3: setMonthName="апреля"; break;
      case 4: setMonthName="мае"; break;
      case 5: setMonthName="июня"; break;
      case 6: setMonthName="июля"; break;
      case 7: setMonthName="августа"; break;
      case 8: setMonthName="сентября"; break;
      case 9: setMonthName="октября"; break;
      case 10: setMonthName="ноября"; break;
      case 11: setMonthName="декабря"; break;
      default:
    };

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    render() {
        const {label, id, onDelete} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames +=' important'
        }
        if (like) {
            classNames +=' like'
        }
        return (
            <div className={classNames}>
            <span
                className="app-list-item-label"
                onClick={this.onLike}>
                {label}
                <p className="app-list-item-date">Дата публикации: {day} {setMonthName} {year} {hour}:{minutes}:{seconds}</p>
                <p className="app-list-item-id">id поста: {id}</p>
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}


