skynetHeight = 400;
skynetWidth = 400;

S.bind("5:ctrl", function(win) {

  var app = win.app();

  if (app.name() == 'Skynet Edge') {

    var scr = S.screen();
    var rect = scr.visibleRect();

    var originX = rect.x;
    var originY = rect.y;
    var screenHeight = rect.height;
    var screenWidth = rect.width-500;

    var currentX = originX;
    var currentY = originY;

    // Move each window
    app.eachWindow(function(windowObject) {

      if ((currentY + skynetHeight) >= screenHeight) {

        currentX += skynetWidth;
        currentY = originY;
      }

        // If we've reached the bottom of the page, move up to the top of the
        // next column
      if (currentX >= screenWidth) {
          currentX = originX;
      }

      windowObject.move({
        "screen" : scr,
        "x" : currentX,
        "y" : currentY,
      });

      windowObject.resize({
        "height" : skynetHeight,
        "width" : skynetWidth
      });

      currentY += skynetHeight;

    });
  }
});
