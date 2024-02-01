function Button({buttonText, reqType, setReqType}) {
  return (
    <button className={buttonText === reqType ? "active" : null}
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button >
  );
}
export default Button;
