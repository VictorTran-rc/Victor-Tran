module.exports = function(app, passport, db) {
  //home page to tabs link

  app.get('/', function(req, res) {
    //tells us what page to render in the dom
    res.render('browse.ejs');
  });
  app.get('/nearby', function(req, res) {
    //tells us what page to render in the dom
    res.render('nearby.ejs');
  });
  app.get('/browse', function(req, res) {
    //tells us what page to render in the dom
    res.render('index.ejs');
  });
  app.get('/greenline', function(req, res) {
    //tells us what page to render in the dom
    res.render('greenline.ejs');
  });
  app.get('/greenline', function(req, res) {
    //tells us what page to render in the dom
    res.render('greenline.ejs');
  });
  app.get('/greenline', function(req, res) {
    //tells us what page to render in the dom
    res.render('greenline.ejs');
  });
  app.get('/orangeline', function(req, res) {
    //tells us what page to render in the dom
    res.render('orangeline.ejs');
  });
  app.get('/blueline', function(req, res) {
    //tells us what page to render in the dom
    res.render('blueline.ejs');
  });
  app.get('/redline', function(req, res) {
    //tells us what page to render in the dom
    res.render('redline.ejs');
  });
  app.get('/orangeline', function(req, res) {
    //tells us what page to render in the dom
    res.render('orangeline.ejs');
  });
  // PROFILE SECTION =========================
  app.get('/profile', isLoggedIn, function(req, res) {
    //get request grabs profile function
    // routes js line 14-19 is our request. GET is what we use to achieve this
    db.collection('messages').find().toArray((err, result) => {
      //reuest to grabbatabase collection named message,into array
      if (err) return console.log(err)
      //conditional console logged for error
      res.render('profile.ejs', {
        user: req.user,
        messages: result
      })
    })
  });

  // LOGOUT ==============================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    app.get('/login', function(req, res) {
      res.render('login.ejs', {
        message: req.flash('loginMessage')
      });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
      successRedirect: '/profile', // redirect to the secure profile section
      failureRedirect: '/login', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    }));

    // SIGNUP =================================
    // show the signup form
    app.get('/signup', function(req, res) {
      res.render('signup.ejs', {
        message: req.flash('signupMessage')
      });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/profile', // redirect to the secure profile section
      failureRedirect: '/signup', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    }));
    app.get('/unlink/local', isLoggedIn, function(req, res) {
      var user = req.user;
      user.local.email = undefined;
      user.local.password = undefined;
      user.save(function(err) {
        res.redirect('/profile');
      });
    });

  });
};
