import {FavoriteCard} from "@/components";
import {observer} from "mobx-react-lite";
import RepositoryStore from "@/store/RepositoryStore";

export const FavoriteList = observer(() => {
    const { favorites } = RepositoryStore;

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Favorites</h1>
            <ul>
                {favorites.length === 0 ? (
                    <h1>Empty</h1>
                ) : (
                    <>
                        {favorites.map((repo) => {
                            return <FavoriteCard key={repo.id} repo={repo} />;
                        })}
                    </>
                )}
            </ul>
        </div>
    );
});
