import create from "zustand";
import {persist} from 'zustand/middleware'
import {MovieListType} from "../constants/constants";
import {getFormatToLowercase, getGenerateUsername} from "../pages/MoviesPage/utils/helper";

const username = getFormatToLowercase(getGenerateUsername());

interface StoreState {
    movieListType: string,
    changeMovieListType: (newMovieListType: string) => void,

    movieCountAddedList: number,
    setMovieCountAddedList: () => void,

    movieCountRemovedList: number,
    setMovieCountRemovedList: () => void,
}

export const useStore = create<StoreState>(
    (set) => ({
        movieListType: MovieListType.Recommended,
        changeMovieListType: (newMovieListType) => set(
            {movieListType: newMovieListType}
        ),

        movieCountAddedList: 0,
        setMovieCountAddedList: () => set(
            (state) => ({movieCountAddedList: state.movieCountAddedList + 1})
        ),

        movieCountRemovedList: 0,
        setMovieCountRemovedList: () => set(
            (state) => ({movieCountRemovedList: state.movieCountRemovedList + 1})
        )
    })
);


export const useUsernameStore = create(
    persist(
        () => ({
            username: username,
        }),
        {
            name: 'username-storage', // name of the item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
        }
    )
);
