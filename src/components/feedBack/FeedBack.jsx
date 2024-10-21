import { useAppContext } from "../../contexts";

export default function FeedBack() {
  const { feedBackMessage, setFeedBackMessage } = useAppContext();
  const { show, payload } = feedBackMessage;

  return (
    <div
      className={`${
        show == "start" && "animate-feedback after:animate-feedbacktime"
      } ${
        show == "end" && "animate-feedbackreverse right-[-300px]"
      } border-l-[3px] border-l-[#965e47] fixed top-0  w-[300px] flex items-center bg-white shadow-custom1 rounded-[1.25rem] p-2 overflow-hidden after:content-[' '] after:absolute after:h-[0.2rem] after:bottom-0 after:bg-primary`}
    >
      <div className="w-[70px] h-[76px]">
        <img
          src={`/images/${payload.image}`}
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="content flex-1">
        <p className="font-bold">{payload.productName}</p>
        <span className="">
          {payload.price}
          <span className="text-gray-300 ml-[2px]">DH</span>
        </span>
      </div>
      <button
        className="close-icon"
        onClick={() => setFeedBackMessage((prev) => ({ ...prev, show: "end" }))}
      ></button>
    </div>
  );
}
