import data from './summary2.0.json';

function FetchData() {
    console.log(data);
    window.data=data;
    return data;
}

export default FetchData;