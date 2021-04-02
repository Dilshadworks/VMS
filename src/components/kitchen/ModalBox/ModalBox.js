import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Styles from "./Style.css";

export default function ModalBox(props) {
  const { closeModal } = props;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <AiOutlineCloseCircle
          onClick={closeModal}
          className="closeModal"
          size={20}
          style={{ color: "white" }}
        />
        {props.children}
      </div>
    </div>
  );
}
