module.exports = (context) => {
    return (page = 1, per_page = 100, search_name, absolute_name) => {
        const params = {
            page: page,
            per_page: per_page
        };

        if (search_name) {
            params.search_name = search_name;
        }

        if (absolute_name) {
            params.name = absolute_name;
        }

        return context.Axios.get('/zones', {
            params: params
        }).then(r => {
            return r.data;
        });
    }
}
