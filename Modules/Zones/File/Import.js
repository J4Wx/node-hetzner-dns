module.exports = (context) => {
    return (ZoneID, file) => {
        return context.Axios.post(`/zones/${ZoneID}/import`, file, {
            headers: {
                'Content-Type': 'text/plain',
                'Content-Length': 0,
            }
        }).then(r => {
            return r.data;
        });
    }
}
