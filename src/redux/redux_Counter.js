import React from 'react';
import {connect} from 'react-redux';
import { deepOrange } from '@material-ui/core/colors';

class Counter extends React.Component {
    render(){
        return(
            <React.Fragment>
                {this.props.count}
                <button onClick={() => this.props.onIncrement(this.props.count)}>+1</button>
                {this.props.msg}
                <button onClick={() => this.props.showMsg()}>ドイツ帝国</button>
            </React.Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         count: state.count
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onIncrement: (prevCnt) => {
//             dispatch({type: "INCREMENT", prevCnt: prevCnt})},
    
//         showMsg: () => {
//             dispatch({type: "MESSAGE"})
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export default connect(
    state => ({
        count: state.count,
        msg: state.msg
    }),
    dispatch => ({
        onIncrement: (prevCnt) => {
        dispatch({type: "INCREMENT", prevCnt: prevCnt})},

        showMsg: () => {
            dispatch({type: "MESSAGE"})
        }
    })
)(Counter)