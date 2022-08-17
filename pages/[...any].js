import { useRef, useState } from "react";

function Test(props) {

  const [propsOnFirstRender] = useState(props);
  const renderCont = useRef(0);

  renderCont.current++;

  console.log('page component', props);

  return (<div>
    <table style={{ borderSpacing: '1rem' }}>
      <tbody>
        <tr>
          <td>Render count</td>
          <td>{renderCont.current}</td>
        </tr>
        <tr>
          <td>
            Props on first render
          </td>
          <td>
            {JSON.stringify(propsOnFirstRender)}
          </td>
        </tr>
        <tr>
          <td>
            Props on render {renderCont.current}
          </td>
          <td>
            {JSON.stringify(props)}
          </td>
        </tr>
      </tbody>
    </table>
  </div>)
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async (ctx) => {
  const { params } = ctx;

  return {
    props: {
      params
    },
    revalidate: 1,
  };
};

Test.propTypes = {
};

export default Test;
