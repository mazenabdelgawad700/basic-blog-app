import { forwardRef, useState, useImperativeHandle } from "react";

const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  console.log(`children component`);

  if (!modalState) return null;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "5px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "2",
        height: "150px",
        width: "max-content",
        margin: "auto",
        transition: ".3s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: ".7rem"
      }}
    >
      <p>Children Component</p>
      <button onClick={() => setModalState(false)} className="btn btn-danger">Close </button>
    </div>
  );
};

export default forwardRef(Modal);
