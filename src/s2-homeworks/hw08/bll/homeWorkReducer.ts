import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload==='up') return state.sort(function (a:UserType, b:UserType) {
                return a.name.localeCompare(b.name, 'ru')
            })
            if (action.payload==='down') return state.sort(function (a:UserType, b:UserType) {
             return    b.name.localeCompare(a.name, 'ru')
            })

            return state // need to fix
        }
        case 'check': {

            return state.filter((el:UserType)=>el.age>=18) // need to fix
        }
        default:
            return state
    }
}
