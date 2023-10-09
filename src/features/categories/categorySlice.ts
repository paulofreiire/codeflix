import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

interface Category {
    id: string;
    name: string;
    description: null | string;
    is_active: boolean;
    deleted_at: null | string;
    created_at: string;
    updated_at: string;
}

const category: Category = {
    id: '0cce68ddd-8956-4dd2-a1056479b01',
    name: 'Miguel',
    is_active: true,
    created_at: '2023-08-15T10:58:08+0000',
    updated_at: '2023-08-15T10:58:08+0000',
    deleted_at: null,
    description: 'Earum quo dolor tempore nisi'
}

export const initialState =
    [
        category,
        {...category, id: 'a0cce68ddd-8956-4dd2-a1056479b01', name: "joao"},
        {...category, id: 'b0cce68ddd-8956-4dd2-a1056479b01', name: "pedro"}
    ];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        createCategory(state, action) {
        },
        updateCategory(state, action) {
        },
        deleteCategory(state, action) {
        },
    }
});

export const selectCategories = (state: RootState) => state.categories
export default categoriesSlice.reducer;