import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheck} from "react-icons/bi";

const DropDown = ({ toggle, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  if(!toggle){
    return null;
  }
  return(
  <div className="origin-top-right absolute">
    <div>
    <div role= "menuitem" 
    onClick={()=> onSortByChange("ownerName")}
    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex justify-between cursor-pointer">
        Owner Name {sortBy==="ownerName" && <BiCheck />}
      </div>
      <div 
      onClick={()=> onSortByChange("petName")}
      role= "menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex justify-between cursor-pointer">
        Pet Name {sortBy==="petName" && <BiCheck />}
      </div>
      <div
      onClick={() => onSortByChange("Time")}
      role= "menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex justify-between cursor-pointer">
        Time {sortBy==="Time" && <BiCheck />}
      </div>
      <div 
      onClick={() => onSortByChange("Date")}
      role= "menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex justify-between cursor-pointer">
        Date {sortBy==="Date" && <BiCheck />}
      </div>
      <div 
      onClick={() => onOrderByChange("asc")}
      role= "menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex justify-between cursor-pointer">
        Acending <BiCheck />
      </div>
      <div 
      onClick={() => onOrderByChange("dsc")}
      role= "menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex justify-between cursor-pointer">
        Decending <BiCheck />
      </div>
    </div>
  </div>
 );
};
const Search= ({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {  let [toggleSort, setToggleSort] = useState(false);
  return(
     <div className="py-5">
        <div className="mt-1 relative round-md shadow-sm">
            <div className="absolute inset-y-0 pl-3 flex item-center">
              <BiSearch />
                <label htmlFor="query" className="sr-only" />
            </div>
            <input 
            onChange={(event)=>{
              onQueryChange(event.target.value);
            }}
             type="text" name="query" id="query" value={query} placeholder="Search" className="pl-8 py-0 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-5m border-gray-300" />
            <div className="absolute inset-y-0 right-0 flex item-center">
                <div>
                    <button
                    onClick={() => {setToggleSort(!toggleSort);
                    }} 
                    type="button" id="options-menu" className="justify-center px-4 py-0 bg-blue-400 text-white hover:bg-blue-800 focus:outline-none focus:ring-offset-2 flex item-center">
                      Short By
                      <BiCaretDown className="ml-2" />
                      </button>
                      <DropDown toggle={toggleSort} 
                      sortBy={sortBy}
                      onSortByChange={(mySort) => onSortByChange(mySort)}
                      orderBy={orderBy}
                      onOrderByChange={(mySort) => onOrderByChange(mySort)}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Search;