import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Searchbar from "../partials/Searchbar";
import { Plus } from "lucide-react";
import { setIsAdd } from "@/components/store/storeAction";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import { StoreContext } from "@/components/store/storeContext";
import ModalAddRecipe from "./ModalAddRecipe";
import RecipeTable from "./RecipeTable";

const Recipe = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="recipe" />
          <main>
            <Header title="Recipe" subtitle="Manage Recipe" />
            <div className="p-8">
              <div className="flex justify-between items-center">
              <div></div>

                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <RecipeTable setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddRecipe itemEdit={itemEdit} />}
    </>
  );
};

export default Recipe;


