import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFailure, fetchStart, fetchSuccess } from "../../store/AbsenceStore";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";



const Absence  = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { records, loading, error } = useSelector((state: RootState) => state.absence);

    useEffect(() => {
        const fetchData = async () => {
        dispatch(fetchStart());

        try {
            const response = await fetch("/api/absence-records", { cache: "no-store" });

            if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
            }

            const data = await response.json();
            dispatch(fetchSuccess(data));
        } catch (error) {
            dispatch(fetchFailure((error as Error).message));
        }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            <button title="Send request" 
                    className="flex items-center gap-2 px-4 py-2 bg-[#0D6EFD] text-white text-[12px] rounded-lg absolute top-8 right-16 "
                    onClick={() => navigate("/send-absent")}
            >
                
                <span>Send request</span>
            </button>
            <div className="bg-white px-5 py-10 flex flex-col gap-3 my-12 rounded-lg">
                <h3 className="text-[#012970] text-[18px] font-medium">Absence records</h3>
                <table className="w-full">
                    <thead>
                        <tr className="text-sm bg-[#F6F6FE] leading-normal border-b-2 border-gray-300 ">
                            <th className="py-3 px-6 text-left text-[#444444]">#</th>
                            <th className="py-3 px-6 text-left text-[#444444]">Employee name</th>
                            <th className="py-3 px-6 text-left text-[#444444]">Department</th>
                            <th className="py-3 px-6 text-left text-[#444444]">Absence reason</th>
                            <th className="py-3 px-6 text-left text-[#444444]">Absence for</th>
                            <th className="py-3 px-6 text-left text-[#444444]">Status</th>
                        </tr>
                    </thead>
                    {records.map((absent,index) => (
                        <tbody className="text-sm" key={index}>
                            <tr className="hover:bg-gray-50">
                            <td className="py-3 px-6 text-[#7D7D7D]">{index+1   }</td>
                            <td className="py-3 px-6 text-[#7D7D7D]">{absent.name}</td>
                            <td className="py-3 px-6 text-[#7D7D7D]">{absent.department}</td>
                            <td className="py-3 px-6 text-[#7D7D7D]">{absent.reason}</td>
                            <td className="py-3 px-6 text-[#7D7D7D]">{absent.long}</td>
                            <td className="py-3 px-6">
                                <span className="bg-green-500 text-white py-2 px-6   text-[13px] rounded-[6px]">
                                Active
                                </span>
                            </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Absence