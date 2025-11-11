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
            <h1 class=" fw-bold mb-3">404</h1>
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
    <h1 class="display-1 fw-bold">404</h1>
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
