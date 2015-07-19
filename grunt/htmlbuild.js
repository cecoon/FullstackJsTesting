module.exports = {
    dist: {
        src: '<%= path.src %>/index.html',
        dest: '<%= path.dist %>/index.html',
        options: {
            beautify: true,
            styles: {
                main: [
                    '<%= path.dist %>/css/vendor.css',
                    '<%= path.dist %>/css/main.css'
                    ]
            },
            scripts: {
                main: [
                    '<%= path.dist %>/scripts/vendor.js',
                    '<%= path.dist %>/scripts/main.js',
                    '<%= path.dist %>/**/*.js'
                ]
            }
        }
    }
};