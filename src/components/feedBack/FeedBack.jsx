import { useAppContext } from "../../contexts";

export default function FeedBack() {
  const { feedBackMessage, setFeedBackMessage } = useAppContext();
  const { show, payload } = feedBackMessage;

  return (
    <div
      className={`${
        show === "start" ? "animate-animateSlideIn" : show === "end" ? "animate-animateSlideOut" : ""
      } border-l-[4px] border-l-[#965e47] fixed top-4 right-4 w-[320px] flex items-center bg-white shadow-lg rounded-[1.25rem] p-3 overflow-hidden transition-transform ease-in-out duration-500`}
    >
    <div className="w-[70px] h-[76px] flex-shrink-0">
        <img
          src={`/images/${payload.image}`}
          className="w-full h-full object-cover rounded-lg"
          alt={payload.productName}
        />
      </div>
      <div className="content ml-3 flex-1">
        <p className="font-semibold text-[1rem] text-gray-700">{payload.productName}</p>
        <span className="text-[0.875rem] text-gray-500">
          {payload.price} 
          <span className="text-gray-400 ml-[2px]">DH</span>
        </span>
      </div>
      <button
        className="ml-4 text-gray-400 hover:text-gray-700 focus:outline-none"
        onClick={() => setFeedBackMessage((prev) => ({...prev, show:"end"}))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
