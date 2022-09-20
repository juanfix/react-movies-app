import { useSearchParams } from "react-router-dom";
import { MovieSearchList } from "../components"

export const MovieSearchPage = ({ addOrRemoveFromFavs }) => {

    const [ searchParams ] = useSearchParams();

    const keyword = searchParams.get('keyword');

    return (
        <MovieSearchList keyword={ keyword } addOrRemoveFromFavs={addOrRemoveFromFavs} />
    )
}
