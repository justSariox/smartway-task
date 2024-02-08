import "./RepositoryPage.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import RepositoryStore from "@/store/RepositoryStore";

import style from './RepositoryPage.module.scss'
export const RepositoryPage = () => {
    const { repoId } = useParams();
    const navigate = useNavigate();
    const repo = RepositoryStore.findRepoById(Number(repoId));

    return (
        <div className={style.repositoryPage}>
            <div>
                <h1>Repository {repo.id} Page</h1>
                <button onClick={() => navigate("/")}>Назад</button>
            </div>
            <div>
                <h1>{repo.full_name}</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{repo.id}</td>
                    </tr>
                    <tr>
                        <td>Full Name</td>
                        <td>{repo.full_name}</td>
                    </tr>
                    <tr>
                        <td>Stargazers Count</td>
                        <td>{repo.stargazers_count}</td>
                    </tr>
                    <tr>
                        <td>Forks Count</td>
                        <td>{repo.forks_count}</td>
                    </tr>
                    <tr>
                        <td>Owner Login</td>
                        <td>{repo.owner.login}</td>
                    </tr>
                    <tr>
                        <td>Owner ID</td>
                        <td>{repo.owner.id}</td>
                    </tr>
                    <tr>
                        <td>Owner Avatar URL</td>
                        <td>{repo.owner.avatar_url}</td>
                    </tr>
                    <tr>
                        <td>Owner HTML URL</td>
                        <td>{repo.owner.html_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Followers URL</td>
                        <td>{repo.owner.followers_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Following URL</td>
                        <td>{repo.owner.following_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Gists URL</td>
                        <td>{repo.owner.gists_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Starred URL</td>
                        <td>{repo.owner.starred_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Subscriptions URL</td>
                        <td>{repo.owner.subscriptions_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Organizations URL</td>
                        <td>{repo.owner.organizations_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Repos URL</td>
                        <td>{repo.owner.repos_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Events URL</td>
                        <td>{repo.owner.events_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Received Events URL</td>
                        <td>{repo.owner.received_events_url}</td>
                    </tr>
                    <tr>
                        <td>Owner Type</td>
                        <td>{repo.owner.type}</td>
                    </tr>
                    <tr>
                        <td>Owner Site Admin</td>
                        <td>{repo.owner.site_admin}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
