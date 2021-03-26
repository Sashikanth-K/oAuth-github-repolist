import React, { PureComponent } from "react";

const RepoCard = (props) => {
  return (
    <div className="flex flex-row justify-between shadow-md rounded-lg ">
      <div className="flex-grow flex-col p-6 border-l-2 border-red-100">
        <h1 className="text-lg">{props.data.name}</h1>
        <p className="text-xs font-light text-opacity-0">
          {props.data.description}
        </p>
      </div>

      <div className="flex-col justify-center content-center  p-4 bg-red-200 rounded-lg">
        <div className="flex flex-row space-x-2">
          <p className="ordinal slashed-zero tabular-nums">{props.data.stargazers_count}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <div className="flex flex-row space-x-2 ">
          <p className="ordinal slashed-zero tabular-nums">{props.data.forks_count}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
