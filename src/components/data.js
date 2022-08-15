import axios from "axios";

export const getData = async () => {
    let response = await axios.get("school_trip_dooars/Servlet/src/com/webproject/DataLoad.java" );
    let data = response.data.students;
    data.map((students, index) => ({...students, "sl_no": index }))
    return data;
}

export const addData = async ({ name ,classes, roll_no, mobile_no, email_id}) => {
    let data = "name=" + name + "&classes=" + classes + "&roll_no=" + roll_no + "&mobile_no=" + mobile_no + "&email_id=" + email_id ;
    let response = await axios.get("school_trip_dooars/Servlet/src/com/webproject/AddData.java?" + data);
    return response.data;
}

export const updateData = async ({ sl_no, mobile_no, email_id }) => {
    let data = "sl_no=" + sl_no + "&mobile_no=" + mobile_no + "&email_id=" + email_id;
    let response = await axios.get("school_trip_dooars/Servlet/src/com/webproject/EditData.java?" + data);
    return response.data;
}

export const deleteData = async (sl_no) => {
    let data = "sl_no=" + sl_no;
    let response = await axios.get("school_trip_dooars/Servlet/src/com/webproject/DeleteData.java?" + data);
    return (response.data);
    
}
