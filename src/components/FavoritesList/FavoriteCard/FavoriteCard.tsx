import style from "@/components/RepositoriesList/RepositoryCard/RepositoryStyle.module.scss";
import {Repository} from "@/types";
import {observer} from "mobx-react-lite";
import RepositoryStore from "@/store/RepositoryStore";

type Props = {
    repo: Repository
}
export const FavoriteCard = observer(({repo}: Props) => {
    const {removeFavorites} = RepositoryStore

    return (
        <li
            onClick={() => removeFavorites(repo.id)}
            className={style.repository}
        >
            <div className={style.ownerInfo}>
                <img src={repo.owner.avatar_url} alt="repo_logo" />
                <h2>{repo.full_name}</h2>
            </div>
        </li>
    )
})