
export default (data = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...data, action.payload];
        case "UPDATE":
            return data.map((fdata) => fdata.id === action.id ? action.payload : fdata);
        case "DELETE":
            return data.filter((data) => data.id !== action.payload)
        default:
            return data;
    }
}