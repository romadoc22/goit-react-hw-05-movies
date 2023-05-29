import { CirclesWithBar } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { LoaderContainer } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderContainer>
      <CirclesWithBar
        height="150"
        width="300"
        color="#ff6b17"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderContainer>,
    loaderRoot
  );
};

export default Loader;
