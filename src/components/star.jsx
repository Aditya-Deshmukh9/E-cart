import { IoStarHalfSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";

const Star = ({ stars }) => {
    const ratingStar = Array.from({ length: 5 }, (e, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <IoStarSharp className="text-[#FFA41C] border border-[#EC8D29]  text-2xl" />
                ) : stars >= number ? (
                    <IoStarHalfSharp className="text-[#FFA41C] border  border-[#EC8D29] text-2xl " />
                ) : (
                    <IoMdStarOutline className="text-[#FFA41C] border  border-[#EC8D29] text-2xl " />
                )}
            </span>
        );
    });

    return (

        <div className="flex gap-1 items-center justify-center ">
            {ratingStar}
        </div>
    );
};



export default Star;