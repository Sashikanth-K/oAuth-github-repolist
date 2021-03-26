import React, {
  Componentm,
  useState,
  useContext,
  useEffect,
  Fragment,
} from "react";
import axios from "axios";
import UserProvider from "./UserProvider";
import RepoCard from "./RepoCard";
import { data } from "autoprefixer";

const Repositories = (props) => {
  const userContext = useContext(UserProvider.context);
  const [repos, setRepos] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");

  const sortByData = ["created", "updated", "pushed", "full_name"];

  const fetchRepos = async (param) => {
    try {
      setRepos(null);
      const data = (
        await axios.get(`/api/users/${userContext.userInfo.login}/repos`, {
          params: {
            sort: param.sort,
          },
        })
      ).data;
      console.log(data);
      //userContext.setUserInfo(data);
      setRepos(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRepos({ sort: selectedSortBy });
  }, []);

  return (
    <div className="flex flex-col  pl-52 pr-52  space-y-20  overflow-y-auto ">
      <div className="flex flex-col justify-center ">
        <div className="shadow flex m-k2 flex-grow">
          <input
            className="w-full rounded-md p-2"
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchRepos({});
              }
            }}
          />
        </div>

        <div className="flex flex-row justify-end align-baseline  flex-wrap space-x-3 ">
          <p className="text-gray-500">Sort by:</p>
          {sortByData.map((e) => {
            return (
              <div
                onClick={(event) => {
                  setSelectedSortBy(e);
                  fetchRepos({ sort: e });
                }}
                className={`${
                  selectedSortBy == e ? "text-blue-400" : "text-gray-800"
                } flex cursor-pointer`}
              >
                <h1 className="font-extralight ">{e}</h1>
              </div>
            );
          })}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 cursor-pointer"
            onClick={(e) => {
              setSelectedSortBy("");
              fetchRepos({});
            }}
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      {!repos ? (
        <div className="flex flex-row justify-center ">
          <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10 mr-3"></div>
        </div>
      ) : (
        <Fragment>
          <div className="flex flex-col justify-center space-y-5 ">
            {repos.map((item) => {
              return <RepoCard data={item} />;
            })}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Repositories;
