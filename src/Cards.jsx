import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

export default function Cards() {
  return (
    <div className="container">
      <div className="card card0">
        <div className="border">
          <h2>Giyu Tomioka</h2>
          <div className="icon">
            <i aria-hidden="true">
              <AiOutlineInstagram />
            </i>
            <i aria-hidden="true">
              <AiOutlineTwitter />
            </i>
            <i aria-hidden="true">
              <FiFacebook />
            </i>
          </div>
        </div>
      </div>
      <div className="card card1">
        <div className="border">
          <h2>Tanjiro Kamado</h2>
          <div className="icon">
            <i aria-hidden="true">
              <AiOutlineInstagram />
            </i>
            <i aria-hidden="true">
              <AiOutlineTwitter />
            </i>
            <i aria-hidden="true">
              <FiFacebook />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
