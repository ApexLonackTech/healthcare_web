const AuthReducer = (state,action)=>{
    switch (action.type){
        case "FETCH_START":
            return {
                api:null,
                isFetching:true,
                error:false,
            };
        case "FETCH_SUCCESS":
            return {
                api:action.payload,
                isFetching:false,
                error:false,
            };
        case "FETCH_FAILURE":
                return {
                    api:null,
                    isFetching:false,
                    error:true,
                };
            default:
                return { ...state }
    }
}
export default AuthReducer;