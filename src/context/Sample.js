import { createContext ,useReducer} from "react";
import Reducer from "./reducer";

const SampleContext = createContext();

export const SampleProvider = ({children})=>{

    const initialState = {
        name : '',
        count : 0
    }
    const [state,dispatch] = useReducer(Reducer,initialState);


    return <SampleContext.Provider value={{
        state,
        dispatch
    }}>
        {children}
    </SampleContext.Provider>
}

export default SampleContext;