import axios from 'axios'
import ButtonState from '../interfaces/ButtonState'

export const initState = () => {
    return axios.get('http://localhost:5000/api/transition/init')
}

export const nextState = (currentstep: string, next: ButtonState) => {
    return axios.post(`http://localhost:5000/api/transition/${next.id}`, {currentstep: currentstep, disabled: next.disabled})
}