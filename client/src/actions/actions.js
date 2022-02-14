import * as api from '../api';

export const checkValidation = (data) => async (data) => {

    try {
        const { data } = await api.validate(data);
        console.log(data);

    } catch (error) {
        console.log(error.message);
    }


}

export const getData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData();
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error);
    }
}


async function PostRequest(data1) {
    let val = await api.generateData(data1);
    return val;
}
export const createData = (data1) => async (dispatch) => {
    try {
        const rdata = await PostRequest(data1);
        dispatch({ type: "CREATE", payload: rdata.data });
    } catch (error) {
        console.log(error);
    }
}

export const updateData = (id, data) => async (dispatch) => {
    try {
        const { rdata } = await api.updateData(id, data);
        dispatch({ type: "UPDATE", payload: rdata })
    } catch (error) {
        console.log(error);
    }
}

export const deleteData = (id) => async (dispatch) => {
    try {
        await api.deleteData(id);
        dispatch({ type: "DELETE", payload: id })
    } catch (error) {
        console.log(error);
    }
}