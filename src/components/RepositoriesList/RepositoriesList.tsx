import { observer } from 'mobx-react-lite';
import {Repository} from "@/types";
import RepositoryStore from "@/store/RepositoryStore";
import {RepositoryCard} from "@/components/RepositoriesList/RepositoryCard";


export const RepositoriesList = observer(() => {
    const { repos } = RepositoryStore;

    return (
        <div style={{display: 'flex', flexDirection: 'column', }}>
            <h1>All</h1>
            <ul>
                {repos.map((repo: Repository) => {
                    return <RepositoryCard key={repo.id} repo={repo}/>
                })}
            </ul>
        </div>
    );
});

