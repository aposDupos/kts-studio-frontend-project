import GitHubStore from '../store/GitHubStore/GitHubStore';
import {ApiResponse} from "../shared/store/ApiStore/types";
import {RepoItem} from "../store/GitHubStore/types";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';

gitHubStore.getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION
}).then((result: ApiResponse<RepoItem[], any>) => {
    if (result.success){
        console.log(result.data.map(repo => repo));
    }
})

// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log