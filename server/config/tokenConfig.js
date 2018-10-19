module.exports = {
    secret: 'bai',
    exp() {
        return Math.round(Date.now()/1000)+3600*24*7
    }
}