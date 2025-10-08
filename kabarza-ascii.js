<?php
/**
 * Kabarza ASCII Art for WordPress
 * Add this code to your theme's functions.php file
 */

// Method 1: Enqueue JavaScript file from theme directory
function kabarza_ascii_enqueue_script() {
    // Enqueue the JavaScript file
    wp_enqueue_script(
        'kabarza-ascii',                                    // Handle name
        get_template_directory_uri() . '/js/kabarza-ascii.js', // File path
        array(),                                            // Dependencies
        '1.0.0',                                           // Version
        false                                              // Load in head (not footer)
    );
}
add_action('wp_enqueue_scripts', 'kabarza_ascii_enqueue_script');

// Method 2: Add inline script directly to head
function kabarza_ascii_inline_script() {
    ?>
    <!--
        
        ██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗ 
        ██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗
        █████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║
        ██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║
        ██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║
        ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                                
        🎓 Welcome to Kabarza Agency!
        👨‍💻 If you're reading this, you're a curious developer!
        🚀 Join us at: https://kabarza.com
        
        -->
    
    <script>
    (function(){
        console.log(`
██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗ 
██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗
█████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║
██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║
██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

🎉 Welcome to Kabarza Agency!
👨‍💻 You opened the console - you're our kind of person!
🚀 Check out our courses at: https://kabarza.com
        `);
        
        window.kabarza = function() {
            alert('🎉 You found the Kabarza secret! Welcome to our agency!');
            console.log('🚀 Visit us at: https://kabarza.com');
        };
        
        console.log('💡 Type "kabarza()" in console for a surprise!');
    })();
    </script>
    <?php
}
add_action('wp_head', 'kabarza_ascii_inline_script');

// Method 3: Only enqueue file (without inline script)
function kabarza_ascii_file_only() {
    wp_enqueue_script(
        'kabarza-ascii-file',
        get_template_directory_uri() . '/assets/js/kabarza-ascii.js',
        array(),
        '1.0.0',
        false
    );
}
// Uncomment the line below to use Method 3
// add_action('wp_enqueue_scripts', 'kabarza_ascii_file_only');

// Method 4: Add to specific pages only
function kabarza_ascii_specific_pages() {
    // Only on homepage
    if (is_front_page()) {
        kabarza_ascii_inline_script();
    }
    
    // Only on specific page
    if (is_page('about')) {
        kabarza_ascii_inline_script();
    }
    
    // Only on posts
    if (is_single()) {
        kabarza_ascii_inline_script();
    }
}
// Uncomment the line below to use Method 4
// add_action('wp_head', 'kabarza_ascii_specific_pages');

?>
