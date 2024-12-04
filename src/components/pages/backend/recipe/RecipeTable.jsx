import React from "react";
import TableLoader from "../partials/TableLoader";
import Pills from "../partials/Pills";
import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Trash2,
} from "lucide-react";
import LoadMore from "../partials/LoadMore";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsEdit,
} from "@/components/store/storeAction";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import useQueryData from "@/components/custom-hook/useQueryData";

const RecipeTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isActive, setIsActive] = React.useState(0);
  const [id, setId] = React.useState(null);
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe"
  );

  let counter = 1;

  const handleAdd = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.recipe_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(1);
    setId(item.recipe_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(0);
    setId(item.recipe_aid);
  };
  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {!isLoading || (isFetching && <SpinnerTable />)}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={40} cols={10} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[33%]">Title</th>
                <th>Category</th>
                <th>Level</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {((isLoading && !isFetching) || result?.data.length === 0) && (
                <tr>
                  <td colSpan="100%">
                    {isLoading ? (
                      <TableLoader count={30} cols={6} />
                    ) : (
                      <IconNoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}
              {result?.data.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      <Pills isActive={item.recipe_is_active} />
                    </td>
                    <td>{item.recipe_title}</td>
                    <td className="capitalize">{item.recipe_category}</td>
                    <td className="capitalize">{item.recipe_level}</td>

                    <td>
                      <ul className="table-action">
                        {item.recipe_is_active ? (
                          <>
                            <li>
                              <button className="tooltip" data-tooltip="View">
                                <FileVideo onClick={() => handleAdd(item)} />
                              </button>
                            </li>
                            <li>
                              <button className="tooltip" data-tooltip="Edit">
                                <FilePenLine onClick={() => handleEdit(item)} />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                              >
                                <Archive onClick={() => handleArchive(item)} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                              >
                                <ArchiveRestore
                                  onClick={() => handleRestore(item)}
                                />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <Trash2 />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isView && <ModalViewMovie movieInfo={movieInfo} />}
      {store.isDelete && (
        <ModalDelete mysqlApiDelete={`/v2/recipe/${id}`} queryKey="recipe" />
      )}

      {store.isConfirm && (
        <ModalConfirm
          queryKey="recipe"
          mysqlApiArchive={`/v2/recipe/active/${id}`}
          active={isActive}
        />
      )}
    </>
  );
};

export default RecipeTable;
