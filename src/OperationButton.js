import { ACTIONS } from "./App";

export default function OperationButton({dispatch,operation})
{
    return (
        <button onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPEARTION,payload:{operation}})}>{operation}</button>
    )
}