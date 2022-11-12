import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from '../utils/firebase/firebase';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase';
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    products: [],
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    // write data to firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap()
    }, [])



    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}