import {observer} from "mobx-react-lite";

import RepositoryStore from "@/store/RepositoryStore";
import AppStore from "@/store/AppStore";

import {FavoriteList, Loader, RepositoriesList, SearchInput} from "@/components";

import style from './MainPage.module.scss'

export const MainPage = observer(() => {
    const { isLoading } = AppStore;


    const handleSearch = (query: string) => {
        RepositoryStore.fetchRepos(query);
    };

    return (
        <div className={style.container}>
            <SearchInput isLoading={isLoading} onSearch={handleSearch}/>
            {isLoading ? <Loader className={style.loader}/> :
                <div className={style.reposContainer} >
                    <RepositoriesList />
                    <FavoriteList />
                </div>}
        </div>
    )
})