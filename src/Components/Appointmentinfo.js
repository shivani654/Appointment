import { BiTrash } from "react-icons/bi";

function Appointmentinfo({ appointement, onDeleteAppointment }) {
  return (
    <li className="px-3 py-3 flex items-start">
          <button
          onClick={() => onDeleteAppointment(appointement.id)}
           type="button" className="p-1.5 mr-1.5 mt-1 rounded hover:bg-yellow-600 bg-red-500">
            <BiTrash />
          </button>
          <div className="flex-grow">
            <div className="flex items-center">
              <span className="flex-none font-medium text-2xl text-blue-500">{appointement.petName}</span>
              <span className="flex-grow text-right">{appointement.aptDate}</span>
              <span className="flex-grow text-right">{appointement.aptTime}</span>
            </div>
            <div>
              <b className="font-bold text-blue-500">Owner:</b>{" "}
              {appointement.ownerName}
              </div>
            <div className="leading-tight">Message: {appointement.message}</div>
          </div>
        </li>
  )
}

export default Appointmentinfo;