import AccountList from "config/dummy-data/Accounts";

export const fetchAccount = () => {
    const data = AccountList.map(acc => acc);
    return data;
}

