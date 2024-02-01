const apiRequest = async (url = "", optionsObject = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObject);
    if (!response.ok) throw Error("Please reload the page");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;