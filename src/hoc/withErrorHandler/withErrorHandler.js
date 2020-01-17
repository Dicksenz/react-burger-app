import React from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      axios.interceptors.request.use(req => {
        setError(null);
      });

      axios.interceptors.response.use(null, error => {
        setError(error);
      });
    });
    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <>
        <Modal show={error} clicked={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
