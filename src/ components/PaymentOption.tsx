import esewaImgUrl from "../assets/icons/esewa_logo.png";
import khaltiImgUrl from "../assets/icons/khalti.png";

export default function PaymentOption () {
    return (
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
            <div className="w-full p-3">
                <label htmlFor="type2" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                    <img src={esewaImgUrl} width="80" className="ml-3" />
                </label>
            </div>
            <div className="w-full p-3">
                <label htmlFor="type2" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                    <img src={khaltiImgUrl} width="80" className="ml-3" />
                </label>
            </div>
        </div>
    )
}