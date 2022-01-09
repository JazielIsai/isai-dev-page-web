const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const webp = require('gulp-webp');
const { version } = require('yargs');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*'
};


//css es una funcion que se puede llamar automaticamente

const css = () => {
   
    return src(paths.scss) //Identificar el archivo .scss a compilar
            .pipe( sourcemaps.init() ) //vamos a iniciar el sourcemaps para hacer un mapeo en el codigo de css minificado para saber donde podemos modificarlo desde sass 
            .pipe( sass() ) //compilar el archivo
            .pipe( postcss([autoprefixer(), cssnano()]) ) ////el autoprefixer hace mejoras al codigo de css y el cssnano hace que el codifo sea minificacion
            .pipe( sourcemaps.write('.') ) //guardar las referencias de css en el mismo lugar/carpeta de build / css
            .pipe( dest('./build/css') )
}


const javaScript = () => {

    return src(paths.js) //Identificar el archivo .js a compilar
            .pipe( sourcemaps.init() ) //Vamos a iniciar el sourcempas para hacer un mapeo en el codigo de js cuando este minificado para saber donde podemos modificarlo desde la carpeta de src/js   
            .pipe( concat('main.js') ) //el nombre del archivo final o finalizado // end output file name 
            .pipe( terser() ) //minifica el codigo de js
            .pipe( sourcemaps.write('.') ) //guardar las referencias de css en el mismo lugar/carpeta de build / js
            .pipe( rename({suffix: '.min'}) )
            .pipe( dest('./build/js') )
}

const imagenes = ( ) => {

    return src(paths.img) //Identificar el archivo .img a compilar
            .pipe( cache(imagemin({optmizationLevel: 3})) )
            .pipe( dest('./build/img') )
            .pipe(notify({message: 'Img Completa'})) //manda una notificacion que ha completado de optimizarla y mandarla a la carpeta de build
} 

const versionWebp = ( ) => {
    
    return src(paths.img)
            .pipe(webp())
            .pipe(dest('./build/img'))
            .pipe(notify({message: 'img Completa'})) //manda una notificacion que ha completado de convertirla a formato webp y mandarla a la carpeta de build

}

const watchFiles = ()  => {
    watch(paths.scss, css);
    watch(paths.js, javaScript);
    watch(paths.img, imagenes);
    watch(paths.img, versionWebp);

}

exports.default = parallel(css, javaScript, imagenes, versionWebp, watchFiles);