var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var paths = {
    styles: {
        src: "styles/scss/**/*.scss",
        dest: "styles/css"
    }
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

function style() {
    return (
        gulp
            .src("styles/scss/**/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("styles/css"))
    );
}
	
function watch() {
    style();
    gulp.watch(paths.styles.src, style);
}
exports.watch = watch