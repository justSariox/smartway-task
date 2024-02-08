import { ChangeEvent, useState } from 'react';
import appStore from '@/store/AppStore';
import {observer} from "mobx-react-lite";
import AppStore from "@/store/AppStore";

import style from './SearchInput.module.scss'

type Props = {
    onSearch: (query: string) => void;
    isLoading: boolean
};

export const SearchInput = observer(({onSearch, isLoading}: Props) => {
    const [input, setInput] = useState('');

    const {buttonLabel, isDisabled} = AppStore

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
        onSearch(e.currentTarget.value);
    };

    const handleCopyText = () => {
        appStore.copyText(input);
    };

    return (
        <div className={style.searchInputContainer}>
            <input disabled={isLoading} className={style.searchInput} type="text" value={input} onChange={handleInputChange} />
            <button className={style.copyButton} disabled={isDisabled} onClick={handleCopyText}>{buttonLabel}</button>
        </div>
    );
})


