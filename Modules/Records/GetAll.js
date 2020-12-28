module.exports = (context) => {
    return (page = 1, per_page, ZoneID) => {
        const params = {
            page: page,
        };

        if (per_page) {
            params.per_page = per_page;
        }

        if (ZoneID) {
            params.zone_id = ZoneID;
        }

        return context.Axios.get('/records', {
            params: params
        }).then(r => {
            return r.data;
        });
    }
}
