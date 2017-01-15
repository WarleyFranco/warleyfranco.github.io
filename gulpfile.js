var gulp 		= require('gulp'),
	browserSync = require('browser-sync').create(),
	bowerFiles	= require('main-bower-files'),
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify'),
	sass 		= require('gulp-sass'),
	sourcemaps 	= require('gulp-sourcemaps'),
	imagemin 	= require('gulp-imagemin'),
	cp 			= require('child_process'),
	bourbon 	= require('node-bourbon').includePaths,
	neat 		= require('node-neat').includePaths;


// Using terminal to jekyll build command
gulp.task('jekyll', function(done) {
	return cp.spawn('jekyll', ['build'])
			.on('close', done);
});

// Task for Browser Sync Reload
gulp.task('browser-sync', ['jekyll'], function() {
	browserSync.init({
		server: {
			baseDir: '_site'
		}
	});
});

// Task for Reload BrowserSync and Jekyll
gulp.task('reload', ['jekyll'], function() {
	browserSync.reload();
});

// Task for imagemin
gulp.task('imagemin', function() {
	gulp.src('./assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('_site/assets/img'))
});

// Task for CSS
gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths,
			includePaths: require('node-neat').includePaths
		}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('_site/assets/css/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest('./assets/css'));
});


// Task For JS
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('_site/assets/js/'))
	.pipe(browserSync.reload({stream:true}))
	.pipe(gulp.dest('./assets/js'));
});


// Watcher
gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['reload']);
});


gulp.task('default', ['scripts', 'sass', 'imagemin', 'browser-sync', 'watch']);