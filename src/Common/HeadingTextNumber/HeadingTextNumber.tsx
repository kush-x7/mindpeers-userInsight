import CardContainer from "../CardContainer/CardContainer";
import Divider from "../Divider/Divider";
import "./HeadingTextNumber.css";

const HeadingTextNumber = ({
  isSmallNumber,
  mainHeading,
  smallTextNumberArray,
}: any) => {
  return (
    <>
      {mainHeading && <div className="main-heading">{mainHeading}</div>}

      {/* <div className="main-heading-container"></div> */}
      <CardContainer>
        <div className="wrapper">
          {smallTextNumberArray &&
            smallTextNumberArray.map((data: any) => {
              return (
                <>
                  <Divider customHeight="1px" />
                  {data?.title && (
                    <div className="wrapper-title">{data?.title}</div>
                  )}
                  {data?.title && (
                    <Divider customHeight="1px" customMargin="0" />
                  )}
                  <div className="wrapper-content">
                    {data?.paragraph && (
                      <div className="wrapper-text">{data?.paragraph}</div>
                    )}
                    {data?.number && (
                      <div
                        className={`wrapper-number ${
                          isSmallNumber ? "wrapper-small-number" : ""
                        }`}
                      >
                        {data?.number}
                      </div>
                    )}
                  </div>
                </>
              );
            })}
        </div>
      </CardContainer>
    </>
  );
};

export default HeadingTextNumber;
