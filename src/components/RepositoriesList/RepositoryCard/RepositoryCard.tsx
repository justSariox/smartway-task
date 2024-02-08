import {Repository} from "@/types";
import RepositoryStore from "@/store/RepositoryStore";

import style from './RepositoryStyle.module.scss'
import {useNavigate} from "react-router-dom";

type props = {
    repo: Repository
}
export const RepositoryCard = ({repo}: props) => {
    const {addFavorites, favorites} = RepositoryStore
    const navigate = useNavigate()

    return (
        <li
            className={style.repository}
            onClick={() => {
                addFavorites(repo.id)
                console.log(favorites)
            }}>
            <div className={style.ownerInfo}>
                <img src={repo.owner.avatar_url} alt="repo_logo" />
                <h2>{repo.full_name}</h2>
            </div>
            <div>
                <p>{repo.stargazers_count}</p>
                <p>{repo.forks_count}</p>
                <p>{repo.html_url}</p>
            </div>
            <button onClick={() => navigate(`/repository/${repo.id}`)}>Перейти</button>
        </li>
    );
};
