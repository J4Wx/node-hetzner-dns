module.exports = (context) => {
    return (file) => {
        return context.Axios.post(`/zones/file/validate`, file, {
            headers: {
                'Content-Type': 'text/plain',
                'Content-Length': 0,
            }
        }).then(r => {
            return r.data;
        });
    }
}
