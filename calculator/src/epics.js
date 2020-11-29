import {filter, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

import {updateCalculationLogic} from './utils'
import {DO_CALCULATION} from "./constants";
import {updateCalculationStateAction} from './actions';

function ofType(type) {
    return filter((action) => type === action.type);
}

export const doCalculationEpic = (action$) =>
    action$.pipe(
        ofType(DO_CALCULATION),
        mergeMap(({payload}) => {
            const {currentOperand, inputValue, operand1, operand2, operation} = payload;

            return of(updateCalculationLogic({currentOperand, inputValue, operand1, operand2, operation})).pipe(
                map(data => updateCalculationStateAction(data))
                // catchError(error => of(xxxFailed({error: error}))),
            );
        }),
    );
