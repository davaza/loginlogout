import React from "react";
import { IStoreStateNews } from "../Reducers/news";
import { IDispatchNewsProps } from "../Actions/Consts";

export class News extends React.Component<IStoreStateNews & IDispatchNewsProps>{
  componentDidMount() {
    this.props.actions.getNews();
  };
  render() {
    const { news } = this.props;
    const { newsData } = news;
    return (<div>
      <h2>Новости</h2>
      {newsData &&
        <div className="wrap-info">
          <ul className="list">
            {newsData.map((item, i) => <li key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>)}
          </ul>
          <p>Всего новостей: {newsData.length}</p>
        </div>
      }
      <p>{news.loading && "Загрузка"}</p>
    </div>)
  }
}

