

const useSearch = (users, query) => {

    return users.filter(user => {
        user.name.toLowerCase().includes(query.toLowerCase())
    });
}

export default useSearch;
