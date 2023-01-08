import "./accordion.css";
const Accordion = ({ state, setState }: any) => {
  return (
    <div
      className={`${state ? "rotate" : ""} `}
      onClick={() => {
        setState(!state);
      }}
    >
      <svg width={12} height={7} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M.64.02a.875.875 0 0 0-.573.479.628.628 0 0 0-.063.34c0 .376-.226.122 2.798 3.151C4.627 5.817 5.526 6.702 5.6 6.742c.17.091.37.124.549.086.08-.016.195-.056.253-.086.073-.04.972-.925 2.797-2.752C12.222.961 11.996 1.215 11.996.84a.66.66 0 0 0-.066-.346.853.853 0 0 0-1.152-.401c-.061.03-.911.864-2.435 2.385L6 4.818l-2.343-2.34C2.127.95 1.283.123 1.222.093A.916.916 0 0 0 .64.02Z"
          fill="url(#a)"
        />
        <defs>
          <linearGradient
            id="a"
            x1={6.183}
            y1={8.212}
            x2={6.183}
            y2={-2.052}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B2FFDA" />
            <stop offset={1} stopColor="#2F80ED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Accordion;
