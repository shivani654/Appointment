import { useState } from "react";
import  {BiCalendarPlus } from "react-icons/bi";


function AddApointement({ onSendAppointment, lastId }) {
    const clearData = {
        ownerName: "",
        petName: "",
        aptDate: "",
        aptTime: "",
        message: ""
    };
    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState(clearData);

    function formDataAdd() {

        const appointmentInfo = {
            id: lastId + 1,
            ownerName: formData.ownerName,
            petName: formData.petName,
            aptDate: formData.aptDate,
            aptTime: formData.aptTime,
            message: formData.message
        };
        onSendAppointment(appointmentInfo);
        setFormData(clearData)
    }

  return (
    <div className="py-5">
        <button 
        onClick = {() => {setToggleForm(!toggleForm);}}
         className ="bg-blue-500 text-white px-2 py-2 w-full text-left rounded-t-md">
            <div>
                <BiCalendarPlus className="inline-block align-text-top" />
            </div>
        </button>
        {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="OwnerName" className="block text-5m font-medium text-gray-700 sm:mt-px">
                    Owner Name
                    </label>
                <div>
                    <input 
                    onChange={(event) => {setFormData({...formData, ownerName: event.target.value });
                }}
                    className="mx-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-round"
                    type="text " name="ownerName" id="ownerName" value={formData.ownerName}></input>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="PetName" className="block text-5m font-medium text-gray-700 sm:mt-px">
                    Pet Name
                    </label>
                <div>
                    <input
                    onChange={(event) => {setFormData({...formData, petName: event.target.value });
                }}
                     className="mx-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-round"
                     type="text " name="petName" id="petName" value={formData.petName}></input>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="aptDate" className="block text-5m font-medium text-gray-700 sm:mt-px">
                    Apointment Date
                    </label>
                <div>
                    <input 
                    onChange={(event) => {setFormData({...formData, aptDate: event.target.value });
                }}
                    className="mx-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-round"
                     type="date" name="aptDate" id="aptDate" value={formData.aptDate}></input>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="aptTime" className="block text-5m font-medium text-gray-700 sm:mt-px">
                    Apointement Time
                    </label>
                <div>
                    <input 
                    onChange={(event) => {setFormData({...formData, aptTime: event.target.value });
                }}
                    className="mx-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-round"
                     type="time" name="aptTime" id="aptTime" value={formData.aptTime}></input>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="message" className="block text-5m font-medium text-gray-700 sm:mt-px">
                    Message
                    </label>
                <div>
                    <textarea 
                    onChange={(event) => {setFormData({...formData, message: event.target.value });
                }}
                    className="mx-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-round"
                     type="text " name="message" id="message" value={formData.message}></textarea>
                </div>
            </div>
            <div className="pt-5">
                <div>
                    <button 
                    type="submit" 
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent text-white bg-blue-500 hover:bg-blue-800"
                    onClick={formDataAdd}
                    >
                        {" "}
                        Submit
                    </button>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default AddApointement
