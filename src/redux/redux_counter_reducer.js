export default (state = {count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":{
            return {...state, count: ++action.prevCnt};
        }
        case "MESSAGE":{
            return {...state, msg: "German Empire"};
        }
        default:{
            return state;
        }
    }
}