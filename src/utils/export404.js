export function errorPage1(heroClass) {
  return `<?php include 'functions.php';
$title = '404 - page';
$description = "404 - The page you're looking for can't be found. Please check the URL or return home.";

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<div class="container-fluid py-5 error_page">
    <div class="py-5 text-center">
        <div class="justify-content-center">
                <i class="bi bi-exclamation-circle display-2"></i>
                <h2 class="mb-4">Page not found</h2>
                <p class="mb-4">Sorry, the page you are looking for does not exist on our website! Go to the home page.</p>
                <a class="error_page_btn btn btn-dark text-white rounded-pill py-3 px-5" href="/">Home page</a>
        </div>
    </div>
</div>

<?php echo site_footer(); ?>`;
}

export function errorPage2(heroClass) {
  return `<?php include 'functions.php';
$title = '404 Error Page';
$description = "Page not found. The link may be broken or the page may have been removed. Let’s get you back on track.";

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<div class="container-fluid vh-100 d-flex align-items-center ">
    <div class="row w-100 justify-content-center align-items-center text-center text-md-start">
        <div class="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <i class="bi bi-bug-fill display-1 display-md-2 text-danger"></i>
        </div>
        <div class="col-md-6">
            <h2 class="h3 mb-3">Uh-oh! Lost in the Web</h2>
            <p class="mb-4 lead">
                The page you’re looking for doesn’t exist. Maybe it wandered off or got deleted. Let’s get you back home.
            </p>
            <a href="/" class="btn btn-primary btn-lg rounded-pill px-5 py-3">
                <i class="bi bi-house-door-fill me-2"></i>Home
            </a>
        </div>
    </div>
</div>

<?php echo site_footer(); ?>`;
}
export function errorPage3(heroClass) {
  return `<?php include 'functions.php';
$title = '404 - page';
$description = "The page you are looking for doesn't exist.";

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<div class="text-center p-5 mt-5">
    <div class="mb-4">
        <i class="bi bi-emoji-frown-fill fs-1"></i>
    </div>
    <h2 class="mb-3">Oops! Page Not Found</h2>
    <p class="mb-4 fs-5">Sorry, the page you're looking for doesn't exist.</p>
    <div class="d-flex justify-content-center gap-3">
        <a href="/" class="btn btn-outline-primary btn-lg">
            <i class="bi bi-house-door-fill me-2"></i>Home
        </a>
        <a href="javascript:history.back()" class="btn btn-outline-secondary btn-lg">
            <i class="bi bi-arrow-left-circle me-2"></i>Go Back
        </a>
    </div>
    <div class="mt-5 d-flex justify-content-center gap-2">
        <i class="bi bi-stars fs-3"></i>
        <i class="bi bi-stars fs-2"></i>
        <i class="bi bi-stars fs-3"></i>
    </div>
</div>

<?php echo site_footer(); ?>`;
}


export function errorPage4(heroClass) {
  return `<?php include 'functions.php';
$title = '404 - page';
$description = "The page you are looking for doesn't exist.";

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<section class="d-flex align-items-center justify-content-center text-center py-5 error_page">
    <div class="container">
        <h2 class="fw-bold  mb-3">
            Something Went Wrong
        </h2>
        <p class="mb-4">
            We couldn't find the page you're looking for.
            It may have been moved or never existed.
        </p>
        <a href="/" class="btn btn-dark fw-semibold shadow btn-lg px-4">
            <i class="bi bi-arrow-left"></i> Back to Home
        </a>
        <div class="mt-4 opacity-50">
            <i class="bi bi-exclamation-triangle display-6 text-danger"></i>
        </div>
    </div>
</section>

<?php echo site_footer(); ?>`;
}

export function errorPage5(heroClass) {
  return `<?php include 'functions.php';
$title = '404 - page';
$description = "The page you are looking for does not exist. Return to the homepage.";

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          Error 404 - Page Not Found
        </h1>
    </div>
  </div>
</section>
<section class="min-vh-100 d-flex align-items-center justify-content-center">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">

                <div class="mb-4">
                    <span class="display-1 fw-bold d-block">404</span>
                    <h2 class="fs-2 d-block mb-2">Oops! Page not found.</h2>
                    <p class=" mb-4">
                        The page you’re looking for might have been moved, renamed, or doesn’t exist anymore.
                    </p>
                </div>

                <div class="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                    <a href="/" class="btn btn-primary px-4">
                        <i class="bi bi-house-door me-1"></i> Go back home
                    </a>
                    <a href="javascript:history.back()" class="btn btn-outline-secondary px-4">
                        <i class="bi bi-arrow-left me-1"></i> Previous page
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php echo site_footer(); ?>`;
}
export function errorPage6(heroClass) {
  return `<?php include 'functions.php';
$title = '404 - page';
$description = "The page you are looking for cannot be found.";

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          Error 404
        </h1>
    </div>
  </div>
</section>
<section class="error-section container py-5">
    <div class="row justify-content-center">
        <div class="col-md-7 col-lg-6">
            <div class="p-4 p-lg-5 border rounded-4 shadow-sm bg-white text-center">
                <div class="mb-3">
                    <i class="bi bi-exclamation-circle text-danger" style="font-size: 3rem;"></i>
                </div>
                <h2 class="fw-bold mb-3">This Page Isn’t Available</h2>
                <p class="text-muted mb-4">
                    The page you’re trying to reach may have been removed, renamed,
                    or is temporarily unavailable. Let’s get you back on track.
                </p>
                <a href="/" class="btn btn-dark btn-lg px-4">
                    <i class="bi bi-arrow-left-circle"></i> Go to Homepage
                </a>
            </div>
        </div>
    </div>
</section>

<?php echo site_footer(); ?>`;
}
