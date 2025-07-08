export function export404() {
    return `<?php include 'functions.php';
$title = '404 - page';
$description = "404 - The page you're looking for can't be found. Please check the URL or return home.";

echo site_header($title, $description);

?>
<div class="container-fluid bg-light py-5 error_page">
    <div class="py-5 text-center">
        <div class="row justify-content-center">
            <div class="col-lg-6  ">
                <i class="bi bi-exclamation-circle display-2"></i>
                <h1 class="display-1">404</h1>
                <h2 class="mb-4">Page not found</h2>
                <p class="mb-4">Sorry, the page you are looking for does not exist on our website! Go to the home page.</p>
                <a class="error_page_btn btn btn-dark text-white rounded-pill py-3 px-5" href="/">Home page</a>
            </div>
        </div>
    </div>
</div>

<?php echo site_footer(); ?>`
}