// import tokenClient from '../../Helper/axios'
import axios from 'axios'
import { eventActions } from './eventSlice';

const getEvents = () => {
	return async dispatch => {
		try {
			const { data } = await axios.get('http://localhost:5001/api/event/allEvents')
			if (data) {
				dispatch(eventActions.getEvents(data.events))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

// export const updateEvent = ({ id, ...rest }) => {
// 	return async dispatch => {
// 		try {
// 			const { data } = await tokenClient.patch(`/api/user/updateEvent/${id}`, rest)
// 			console.log({id, rest});
// 			console.log(data);
// 			if (data) {
// 				dispatch(userActions.updateEvent())
// 				dispatch(getEvents())
// 			}
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }


export default getEvents
