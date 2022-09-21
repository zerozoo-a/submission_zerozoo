import { useMutation } from "react-relay";
import { Loading } from "./Search";

import SearchAddStarMutation from "./__generated__/SearchAddStarMutation.graphql";
import SearchRemoveStarMutation from "./__generated__/SearchRemoveStarMutation.graphql";

export function StarButton({ id, name, stargazerCount, viewerHasStarred }) {
  console.log("in id", id);
  console.log("in star .>>", stargazerCount);
  const [commitToAddStar, isInFlightToAddStar] = useMutation(
    SearchAddStarMutation
  );
  const [commitToRemoveStar, isInFlightToRemoveStar] = useMutation(
    SearchRemoveStarMutation
  );

  const handleOnClick = (starrableId, viewerHasStarred) => {
    switch (!viewerHasStarred) {
      case true:
        commitToAddStar({
          variables: {
            starrableId,
          },
          onError(error) {
            console.error("ERROR OCCURRED! in add star", error);
          },
          onCompleted(data) {
            console.log("onCompleted!", data);
          },
        });

        return;
      case false:
        commitToRemoveStar({
          variables: {
            starrableId,
          },
          onError(error) {
            console.error("ERROR OCCURRED! in add star", error);
          },
          onCompleted(data) {
            console.log("onCompleted!", data);
          },
        });
        return;
      default:
        return;
    }
  };
  console.log("name: ", name);
  console.log("viewerHasStarred: ", viewerHasStarred);

  return (
    <>
      {isInFlightToRemoveStar || isInFlightToAddStar ? (
        <Loading />
      ) : (
        <button
          className={buttonStyle(viewerHasStarred)}
          onClick={() => handleOnClick(id, viewerHasStarred)}
        >
          {console.log("stargazerCount >>>", stargazerCount)}
          ⭐️&nbsp;&nbsp; star? {stargazerCount}{" "}
          {viewerHasStarred ? "starred!" : ""}
        </button>
      )}
    </>
  );
}

const buttonStyle = (viewerHasStarred) => `
 ${
   viewerHasStarred
     ? "text-white bg-green-600 dark:bg-green-500"
     : "text-gray-800 bg-gray-400 dark:bg-gray-300"
 } 
hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:hover:bg-green-700 dark:focus:ring-green-800
`;

const submitButtonStyle = () => `
              shadow appearance-none border rounded  hover:cursor-pointer py-1 px-3 text-gray-700 rounded bg-gray-200
`;
