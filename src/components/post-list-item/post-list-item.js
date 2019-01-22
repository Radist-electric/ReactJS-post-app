import React from 'react';

let currentDate = new Date(),
    Year = currentDate.getFullYear(),
    Month = currentDate.getMonth(),
    Day = currentDate.getDate(),
    Hour = currentDate.getHours(),
    Minutes = currentDate.getMinutes(),
    fMonth = '';
    switch (Month)
    {
      case 0: fMonth="января"; break;
      case 1: fMonth="февраля"; break;
      case 2: fMonth="марта"; break;
      case 3: fMonth="апреля"; break;
      case 4: fMonth="мае"; break;
      case 5: fMonth="июня"; break;
      case 6: fMonth="июля"; break;
      case 7: fMonth="августа"; break;
      case 8: fMonth="сентября"; break;
      case 9: fMonth="октября"; break;
      case 10: fMonth="ноября"; break;
      case 11: fMonth="декабря"; break;
      default:
    };

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World!!!
                <p className="app-list-item-date">Дата публикации: {Day}-{fMonth}-{Year} {Hour}:{Minutes}</p>
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;

