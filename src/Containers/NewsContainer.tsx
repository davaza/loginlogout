import { Dispatch } from "redux";
import { connect } from "react-redux";
import { News } from "../components/News";
import { IActionType } from "../common";
import { IStoreStateNews } from "../Reducers/news";
import { IDispatchNewsProps } from "../Actions/Consts"
import { NewsActions } from "../Actions/NewsActions"

function mapStateToProps(state: IStoreStateNews): IStoreStateNews {
  return {
    news: state.news,    
  };
}

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchNewsProps {
  return {
    actions: new NewsActions(dispatch),
  };
}

const NewsCon = connect(mapStateToProps, mapDispatchToProps)(News);

export { NewsCon as NewsContainer };
