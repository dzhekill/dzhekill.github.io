let gulp 	= require('gulp'),
sass 	= require('gulp-sass'),
browser = require('browser-sync'),
concat  = require('gulp-concat'),
uglify  = require('gulp-uglifyjs'),
cssnano = require('gulp-cssnano'),
rename  = require('gulp-rename'),
del     = require('del'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
cache    = require('gulp-cache'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7',], {cascade:true}))
	.pipe(gulp.dest('app/css'))
	.pipe(browser.reload({stream:true}))
});
gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
})

gulp.task('css-libs', ['sass'], function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix:".min"}))
	.pipe(gulp.dest("app/css"))
})

gulp.task('browser', function(){
	browser({
		server:{
			baseDir: "app"
		},
		notify:false
	})
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive :true,
		svgoPlugins: [{removeViewBox:false}],
		une :[pngquant()]
	})))
	.pipe(gulp.dest('dist/img'))
})

gulp.task('watch', ['browser', 'css-libs', 'scripts'], function(){
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browser.reload);
	gulp.watch('app/js/**/*.js', browser.reload);
});

gulp.task('bild', ['clean', 'img', 'sass', 'scripts'], function(){

	let builCss = gulp.src([
		'app/css/main.css',
		'app/css/libs.min.css',
		'app/css/*.css'
		])
	.pipe(gulp.dest('dist/css'));

	let buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));


	let buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest("dist/js"));

	let buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));


})