import { createContext, useState } from "react";
import { ICategory } from "../utils/interfaces/category";
import { toast } from "react-toastify";
import CategoryService, { CreateCategoryRequest, UpdateCategoryRequest } from "../services/CategoryService";

export interface ICategoryContext {
  categories?: ICategory[];
  getCategories:  () => Promise<void>;
  createCategory: (data: CreateCategoryRequest) => Promise<void>;
  updateCategory: (data: UpdateCategoryRequest) => Promise<void>;
  deleteCategory: (name: string) => Promise<void>;
}

export const CategoryContext = createContext<ICategoryContext>({} as ICategoryContext);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<ICategory[]>();

  async function getCategories() {
    try {
      const response = await CategoryService.getCategories();

      setCategories(response);
    } catch(err) {
      console.error(err);
    }
  }

  async function createCategory(data: CreateCategoryRequest) {
    try {
      const response = await CategoryService.createCategory(data);

      const categorySet = new Set([
        ...(categories??[]), response
      ])

      setCategories(Array.from(categorySet))

      toast.info(`${data.name} criada com sucesso!`);
      console.log(response);
    } catch (err) {
      toast.error("Erro ao criar a categoria!");
    }
  }

  async function updateCategory(data: UpdateCategoryRequest) {
    try {
      const response = await CategoryService.updateCategory(data);

      setCategories((prevState) =>
        prevState?.map(value => value.name === response.name ? response : value)
      );

      toast.info(`${data.name} alterada com sucesso!`);
      console.log(response);
    } catch (err) {
      toast.error("Erro ao atualizar a categoria!");
    }
  }

  async function deleteCategory(name: string) {
    try {
      await CategoryService.deleteCategory(name);

      setCategories((prevState) =>
        prevState?.filter(value => value.name !== name)
      );

      toast.info(`${name} deletada com sucesso!`);
    } catch (err) {
      toast.error("Erro ao remover a categoria!");
    }
  }

  return <CategoryContext.Provider value={{
    categories,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
  }}>
    { children }
  </CategoryContext.Provider>
}