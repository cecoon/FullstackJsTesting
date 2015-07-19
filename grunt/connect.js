module.exports = {
        server: {
            options: {
                port: 9001,
                base: "<%= path.dist %>",
                hostname: "127.0.0.1",
                livereload: true,
                open:true
            }
        }
};