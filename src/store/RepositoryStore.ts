import axios from 'axios';
import { throttle, debounce } from 'lodash';
import { Repository } from '@/types';
import appStore from './AppStore';
import { makeAutoObservable } from 'mobx';

class RepositoryStore {
    repos: Repository[] = [];
    favorites: Repository[] = [];
    source = axios.CancelToken.source();

    constructor() {
        makeAutoObservable(this);
    }

    fetchRepos = throttle(
        debounce((value: string) => {
            appStore.setLoading(true);
            this.source.cancel('Operation canceled due to new request.'); // cancel previous request
            this.source = axios.CancelToken.source(); // create new cancel token

            axios
                .get(`https://api.github.com/search/repositories?q=${value}`, {
                    cancelToken: this.source.token,
                })
                .then((response) => {
                    this.repos = response.data.items;
                    appStore.setLoading(false);
                })
                .catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log('Request canceled', error.message);
                    } else {
                        console.error(error);
                    }
                    appStore.setLoading(false);
                });
        }, 1000),
        1000
    );

    findRepoById = (id: number) => {
        const repo = this.repos.find((repo) => repo.id === id);
        if (!repo) {
            throw new Error(`Репозиторий ${repo} не найден`);
        }
        return repo;
    };

    addFavorites = (id: number) => {
        const repo = this.repos.find((i) => i.id === id);
        if (repo && !this.favorites.some((i) => i.id === id)) {
            this.favorites.push(repo);
        }
    };

    removeFavorites = (id: number) => {
        const repo = this.favorites.find((i) => i.id === id);
        if (repo) {
            const index = this.favorites.indexOf(repo);
            this.favorites.splice(index, 1);
        }
    };

}

export default new RepositoryStore();
