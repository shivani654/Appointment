import { BiArchive } from "react-icons/bi";
import AddApointement from "./Components/AddApointement";
import Search from "./Components/Search";

import AppointmentInfo from "./Components/Appointmentinfo";
import { useCallback, useEffect, useState} from "react";
function App() {
  let [appointementList, setAppointmentList] =useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy]= useState("petName");
  let [orderBy, setOrderBy]= useState("asc");

  const filteredAppointmentList = appointementList.filter((item) => {
    return (item.petName
    .toLowerCase()
    .includes(
      query.toLowerCase()) || 
    item.ownerName.toLowerCase().includes(query.toLowerCase())
    );
  })
  .sort((a,b) => {
    let order = orderBy ==='asc' ? 1: -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
    ? -1* order 
    : 1*order;
  });

  const fetchData = useCallback(() => {
    fetch("./data.json")
    .then((response) => response.json())
    .then(data=>{
      setAppointmentList(data);
    })
  }, []); 

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl font-bold ">
        <BiArchive className="inline-block text-blue-600 align-top"/>
        Appointment App
        </h1>
        <Search 
        query={query} 
        onQueryChange={(myQuery) => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort=> setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
         />
          <AddApointement onSendAppointment={(myAppointment) => setAppointmentList([...appointementList, myAppointment])}
        lastId={appointementList.reduce((max,item) => Number(item.id)>max? Number(item.id):max,
          0 
          )}
        />
        <ul className="divide-y divide-gray-200">
          {filteredAppointmentList.map((appointement) => (
            <AppointmentInfo 
            key={appointement.id} 
            appointement={appointement} 
            onDeleteAppointment={(appointmentId)=> 
              setAppointmentList(appointementList.filter(appointment=> appointment.id!== appointmentId))
            }
            />
          ))}
        </ul>
    </div>
  );
}

export default App;
