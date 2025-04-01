import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFailure, fetchStart, fetchSuccess } from "../../store/AbsenceStore";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";



const Absent  = () =>{
    

    return (
        <div className="bg-white px-5 py-10 flex flex-col gap-3 my-12 rounded-[5px] w-1/2">
            <h2 className="text-lg font-semibold text-[#012970]">Send Absent Application</h2>
            <form
                className="flex flex-col gap-10"
            >
                <div className="flex gap-4 text-[#444444]">
                    <label className="flex flex-col w-1/2">
                        Date
                        <input type="date" className="border p-2 rounded-lg" placeholder="yyyy-mm-dd"/>
                    </label>
                    <label className="flex flex-col w-1/2">
                        Number of Days
                        <input  className="border p-2 rounded-lg" placeholder="No. of days" />
                    </label>
                </div>
                <label className="flex flex-col text-[#444444]">
                    Reason
                    <textarea
                        placeholder="Reason for being absent..."
                        className="border p-2 rounded-lg w-full min-h-[200px] resize-y"
                    ></textarea>
                </label>
                <div className="flex gap-6">
                    <button title="Send request" 
                        className="flex items-center gap-2 px-4 py-2 bg-[#0D6EFD] text-white text-[12px] rounded-lg "
                        >
                            <span>Submit</span>
                    </button>
                    <button title="Send request" 
                        className="flex items-center gap-2 px-4 py-2 bg-[#6C757D] text-white text-[12px] rounded-lg "
                        >
                            <span>Reset</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Absent