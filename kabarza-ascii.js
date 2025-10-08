// Kabarza ASCII Art Injector
// Version: 1.0.0
// Author: Kabarza Academy

(function() {
    'use strict';
    
    // ASCII Art Content
    const asciiArt = `
<!--
    
    ██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗ 
    ██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗
    █████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║
    ██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║
    ██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║
    ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                            
                        ACADEMY
    
    🎓 Welcome to Kabarza Academy!
    👨‍💻 If you're reading this, you're a curious developer!
    🚀 Join us at: https://kabarza.academy
    
    -->`;

    const consoleArt = `
██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗ 
██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗
█████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║
██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║
██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                        
                    ACADEMY
                    
🎉 Welcome to Kabarza Academy!
👨‍💻 You opened the console - you're our kind of person!
🚀 Check out our courses at: https://kabarza.academy
💡 Type "kabarza()" for a surprise!`;

    // Function to inject ASCII art into HTML head
    function injectAsciiToHead() {
        try {
            // Create comment node with ASCII art
            const comment = document.createComment(asciiArt);
            
            // Insert at the beginning of head
            const head = document.head || document.getElementsByTagName('head')[0];
            if (head && head.firstChild) {
                head.insertBefore(comment, head.firstChild);
            } else if (head) {
                head.appendChild(comment);
            }
            
            console.log('✅ Kabarza ASCII art injected successfully!');
        } catch (error) {
            console.error('❌ Error injecting ASCII art:', error);
        }
    }

    // Function to show console message
    function showConsoleMessage() {
        try {
            console.log(consoleArt);
            
            // Add hidden function for curious developers
            window.kabarza = function() {
                alert('🎉 You found the Kabarza secret! Welcome to our academy!');
                console.log('🚀 Visit us at: https://kabarza.academy');
            };
            
        } catch (error) {
            console.error('❌ Error showing console message:', error);
        }
    }

    // Function to add footer ASCII art
    function injectAsciiToFooter() {
        try {
            const footerAscii = `
<!--

╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    ██╗  ██╗ █████╗ ██████╗  █████╗ ██████╗ ███████╗ █████╗   ║
║    ██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══███╔╝██╔══██╗  ║
║    █████╔╝ ███████║██████╔╝███████║██████╔╝  ███╔╝ ███████║  ║
║    ██╔═██╗ ██╔══██║██╔══██╗██╔══██║██╔══██╗ ███╔╝  ██╔══██║  ║
║    ██║  ██╗██║  ██║██████╔╝██║  ██║██║  ██║███████╗██║  ██║  ║
║    ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝  ║
║                                                              ║
║                        ACADEMY                               ║
║                                                              ║
║    🎓 Thanks for checking our source code!                   ║
║    💡 We appreciate developers who dig deeper                ║
║    🚀 Visit us: https://kabarza.academy                      ║
║    📧 Contact: info@kabarza.academy                          ║
║                                                              ║
║    Made with ❤️ by Kabarza Academy Team                      ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

-->`;
            
            const comment = document.createComment(footerAscii);
            document.body.appendChild(comment);
            
        } catch (error) {
            console.error('❌ Error injecting footer ASCII:', error);
        }
    }

    // Initialize when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                injectAsciiToHead();
                showConsoleMessage();
                injectAsciiToFooter();
            });
        } else {
            injectAsciiToHead();
            showConsoleMessage();
            injectAsciiToFooter();
        }
    }

    // Start the magic!
    init();

})();
