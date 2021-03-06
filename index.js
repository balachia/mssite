var Metalsmith  = require('metalsmith');
//var markdown    = require('metalsmith-markdown');
var pandoc      = require('metalsmith-pandoc');
//var layouts     = require('metalsmith-layouts');
//var inPlace     = require('metalsmith-in-place');
var permalinks  = require('metalsmith-permalinks');
var assets      = require('metalsmith-static');
var sass        = require('metalsmith-sass');
var rootPath    = require('metalsmith-rootpath');
var debug       = require('metalsmith-debug');
var collections = require('metalsmith-collections');
var metafiles   = require('metalsmith-metafiles');
var discoverHelpers     = require('metalsmith-discover-helpers');
//var discoverPartials    = require('metalsmith-discover-partials');
var jstransformer = require('metalsmith-jstransformer');
var partials = require('metalsmith-jstransformer-partials');
//var ignore = require('metalsmith-ignore');
//var paths = require('metalsmith-paths');
//var renamer = require('metalsmith-renamer');
var each = require('metalsmith-each');
var concat = require('metalsmith-concat-convention');
var cleanCSS = require('metalsmith-clean-css');



Metalsmith(__dirname)
    .metadata({
        site: {
            title: "Tony Vashevko",
            description: "Postdoc at ESSEC Singapore. Studying innovation, market categories, networks, strategy.",
            author: "Tony Vashevko",
            keywords: "anthony,tony,vashevko,essec,nus,stanford,gsb,organizational,behavior,innovation,entrepreneurship,strategy"
        },
        title: "Tony Vashevko",
        description: "It's about saying »Hello« to the World.",
        generator: "Metalsmith",
        url: "http://www.metalsmith.io/"
    })
    .source('./src')
    .destination('./build')
    .clean(false)
    .use(metafiles())
    //.use(ignore('layouts/*','partials/*'))
    .use(assets({ src:'public', dest: '.' }))
    .use(cleanCSS())
    .use(sass({
        outputStyle:'compressed',
        sourceMap: true,
        sourceMapContents: true
    }))
    .use(concat({ extname: '.concat' }))
    //.use(debug())
    .use(debug())
    .use(pandoc({
        from: 'markdown',
        to:   'html5',
        args: [],
        opts: [],
        pattern: '**/*.md', // multimatch
        ext: '.prune' // extension for output file
    }))
    .use(each(
        function (file, filename) {
            if(filename.endsWith('.prune')) {
                // basically, prevent markdown from fucking up ect tags
                let contents = file.contents.toString().replace('.:','<&').replace(':.','&>');
                file.contents = new Buffer(contents);
            }
        } 
    ))
    .use(each(
        function (file, filename) {
            if(filename.endsWith('.prune')) {
                return filename.substring(0,filename.length-6);
            }
        } 
    ))
    //.use(permalinks({
    //    relative: true,
    //    pattern: ':title'
    //}))
    .use(debug())
    //.use(rootPath())
    //.use(paths({
        //property: "paths",
        //directoryIndex: "index.html"
    //}))
    //.use(debug())
    .use(collections({
        nav: {
            sortBy: 'navOrder'
        }
    }))
    //.use(layouts({ engine: 'ect', open: '{{', close: '}}' }))
    //.use(inPlace({ engine: 'ect', 
    //    exposeConsolidate: function(requires) {
    //        requires.ect.open = "{{";
    //        requires.ect.close = "}}";
    //    }
    //}))
    //.use(discoverHelpers())
    //.use(layouts({ engine: 'handlebars', partials: 'partials' }))
    //.use(inPlace({ engine: 'handlebars' }))
    //.use(layouts({ engine: 'ejs' }))
    //.use(inPlace({ engine: 'ejs' }))
    //.use(layouts({ engine: 'ect' }))
    //.use(inPlace({ engine: 'ect' }))
    .use(partials())
    .use(jstransformer({
        'layoutPattern': 'layouts/**',
        'defaultLayout': null
    }))
    .use(permalinks({
        relative: false,
        pattern: ':path'
    }))
    .build(function(err, files) {
        if (err) { throw err; }
    });
